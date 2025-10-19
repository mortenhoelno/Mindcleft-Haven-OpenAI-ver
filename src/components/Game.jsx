// src/components/Game.jsx
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import * as CANNON from "cannon-es";

export default function Game() {
  const mountRef = useRef(null);

  useEffect(() => {
    // --- BASICS ---
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x20242e);
    scene.fog = new THREE.Fog(0x20242e, 40, 140);

    const camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.1,
      400
    );
    camera.position.set(0, 5, 10);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // --- LYS ---
    const hemi = new THREE.HemisphereLight(0xffffff, 0x444444, 1.0);
    hemi.position.set(0, 200, 0);
    scene.add(hemi);
    const dir = new THREE.DirectionalLight(0xffffff, 1.0);
    dir.position.set(-30, 50, -30);
    scene.add(dir);

    // --- CANNON VERDEN ---
    const world = new CANNON.World();
    world.gravity.set(0, -9.82, 0);
    world.broadphase = new CANNON.SAPBroadphase(world);
    world.allowSleep = true;

    // Materialer
    const groundMat = new CANNON.Material("ground");
    const playerMat = new CANNON.Material("player");
    world.addContactMaterial(
      new CANNON.ContactMaterial(groundMat, playerMat, {
        friction: 0.4,
        restitution: 0.0,
      })
    );

    // --- PARAMS ---
    const TERRAIN_SIZE = 200;
    const GRID_RES = 129;
    const ELEM = TERRAIN_SIZE / (GRID_RES - 1);
    const PLAYER_RADIUS = 1;
    const MOVE_SPEED = 6;
    const LIN_DAMP = 0.92;
    const ANG_DAMP = 0.98;
    const keys = { w: false, a: false, s: false, d: false };

    // --- FUNKSJONER ---
    const heightFn = (x, z) => {
      const nx = x / 35,
        nz = z / 35;
      return Math.sin(nx) * Math.cos(nz) * 2.0 + 0.8;
    };

    const buildTerrain = () => {
      const heights = [];
      for (let i = 0; i < GRID_RES; i++) {
        const row = [];
        for (let j = 0; j < GRID_RES; j++) {
          const x = -TERRAIN_SIZE / 2 + j * ELEM;
          const z = -TERRAIN_SIZE / 2 + i * ELEM;
          row.push(heightFn(x, z));
        }
        heights.push(row);
      }

      // Three terreng
      const geo = new THREE.PlaneGeometry(
        TERRAIN_SIZE,
        TERRAIN_SIZE,
        GRID_RES - 1,
        GRID_RES - 1
      );
      const pos = geo.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        const vx = pos.getX(i);
        const vz = pos.getY(i);
        const h = heightFn(vx, vz);
        pos.setZ(i, h);
      }
      pos.needsUpdate = true;
      geo.computeVertexNormals();

      const mat = new THREE.MeshStandardMaterial({
        color: 0x337733,
        flatShading: true,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.rotation.x = -Math.PI / 2;
      scene.add(mesh);

      // Cannon terreng
      const shape = new CANNON.Heightfield(heights, { elementSize: ELEM });
      const body = new CANNON.Body({ mass: 0, material: groundMat });
      body.addShape(shape);
      body.quaternion.setFromEuler(-Math.PI / 2, 0, 0, "XYZ");
      body.position.set(-TERRAIN_SIZE / 2, 0, TERRAIN_SIZE / 2);
      world.addBody(body);

      return { mesh, body };
    };

    const { mesh: terrainMesh, body: terrainBody } = buildTerrain();

    // --- SPILLER ---
    const playerBody = new CANNON.Body({
      mass: 1,
      shape: new CANNON.Sphere(PLAYER_RADIUS),
      linearDamping: 1 - LIN_DAMP,
      angularDamping: 1 - ANG_DAMP,
      position: new CANNON.Vec3(0, 40, 0),
      material: playerMat,
    });
    world.addBody(playerBody);

    const playerGeo = new THREE.SphereGeometry(PLAYER_RADIUS, 32, 32);
    const playerMat3 = new THREE.MeshStandardMaterial({
      color: 0x33aaff,
      roughness: 0.6,
    });
    const playerMesh = new THREE.Mesh(playerGeo, playerMat3);
    scene.add(playerMesh);

    // --- INPUT ---
    const onKey = (e, down) => {
      const k = e.key.toLowerCase();
      if (k in keys) keys[k] = down;
    };
    window.addEventListener("keydown", (e) => onKey(e, true));
    window.addEventListener("keyup", (e) => onKey(e, false));

    // --- ANIMASJON ---
    let last = performance.now();
    const animate = () => {
      const now = performance.now();
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      // --- bevegelse ---
      const desired = new CANNON.Vec3(0, 0, 0);
      if (keys.w) desired.z -= 1;
      if (keys.s) desired.z += 1;
      if (keys.a) desired.x -= 1;
      if (keys.d) desired.x += 1;
      if (desired.length() > 0) desired.normalize();

      const speed = MOVE_SPEED;
      desired.scale(speed, desired);

      playerBody.velocity.x += (desired.x - playerBody.velocity.x) * 0.2;
      playerBody.velocity.z += (desired.z - playerBody.velocity.z) * 0.2;

      world.step(1 / 60, dt, 3);

      // sync 3D mesh
      playerMesh.position.copy(playerBody.position);

      // kamera følger spilleren
      const camTarget = new THREE.Vector3(
        playerBody.position.x,
        playerBody.position.y + 3,
        playerBody.position.z + 10
      );
      camera.position.lerp(camTarget, 0.1);
      camera.lookAt(playerMesh.position);

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };
    animate();

    // --- CLEANUP ---
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
      mountRef.current.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{ width: "100vw", height: "100vh", overflow: "hidden" }}
    />
  );
}
