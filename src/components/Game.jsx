import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import * as CANNON from "cannon-es";
import CannonDebugger from "cannon-es-debugger";

export default function Game() {
  const mountRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer;
    let world;
    let terrainMesh, terrainBody;
    let playerBody, sphereMesh;
    let keys = { w: false, a: false, s: false, d: false };
    let animId;
    let cannonDebugger;

    // ---------- PARAMETRE ----------
    const TERRAIN_SIZE = 200;
    const GRID_RES = 129;
    const ELEM = TERRAIN_SIZE / (GRID_RES - 1);
    const PLAYER_RADIUS = 0.5;
    const MOVE_FORCE = 25;
    const LIN_DAMP = 0.95;
    const ANG_DAMP = 0.9;

    // ---------- HØYDEFUNKSJON ----------
    const heightFn = (x, z) => {
      const nx = x / 35,
        nz = z / 35;
      const base = Math.sin(nx) * Math.cos(nz) * 2.0;
      const ripples = Math.sin(nx * 2.7 + nz * 1.9) * 0.6;
      const bias = 0.8;
      return base + ripples + bias;
    };

    // ---------- BYGG TERRENG ----------
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

      // Three.js mesh
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
        color: 0x336633,
        flatShading: true,
        roughness: 1,
        metalness: 0,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.rotation.x = -Math.PI / 2;
      mesh.receiveShadow = true;
      scene.add(mesh);

      // Cannon Heightfield
      const shape = new CANNON.Heightfield(heights, { elementSize: ELEM });
      const body = new CANNON.Body({ mass: 0 });
      body.addShape(shape);

      // 🎯 Presis justering (funnet fra sannsynlighetsmodell)
      const degToRad = Math.PI / 180;
      body.quaternion.setFromEuler(-91 * degToRad, 0, 0);
      body.position.set(-TERRAIN_SIZE / 2, -0.8, TERRAIN_SIZE / 2);

      world.addBody(body);
      return { mesh, body };
    };

    // ---------- INIT ----------
    const init = () => {
      scene = new THREE.Scene();
      scene.background = new THREE.Color(0x20242e);
      scene.fog = new THREE.Fog(0x20242e, 30, 120);

      camera = new THREE.PerspectiveCamera(
        70,
        window.innerWidth / window.innerHeight,
        0.05,
        300
      );

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.domElement.style.display = "block";
      mountRef.current.appendChild(renderer.domElement);

      // Lys
      const dir = new THREE.DirectionalLight(0xffffff, 1.1);
      dir.position.set(20, 30, 10);
      scene.add(dir);
      scene.add(new THREE.AmbientLight(0xffffff, 0.35));

      // AxesHelper for debugging
      const axes = new THREE.AxesHelper(10);
      scene.add(axes);

      // ---------- CANNON ----------
      world = new CANNON.World({ gravity: new CANNON.Vec3(0, -9.82, 0) });
      world.broadphase = new CANNON.SAPBroadphase(world);
      world.allowSleep = true;

      const groundMat = new CANNON.Material("ground");
      const playerMat = new CANNON.Material("player");
      const contact = new CANNON.ContactMaterial(groundMat, playerMat, {
        friction: 0.4,
        restitution: 0.1,
      });
      world.addContactMaterial(contact);

      // Terreng
      const t = buildTerrain();
      terrainMesh = t.mesh;
      terrainBody = t.body;
      terrainBody.material = groundMat;

      // Debug wireframe for Cannon
      cannonDebugger = new CannonDebugger(scene, world, { color: 0xff0000 });

      // Spiller (kule)
      const sphereGeo = new THREE.SphereGeometry(PLAYER_RADIUS, 32, 32);
      const sphereMat = new THREE.MeshStandardMaterial({ color: 0x4488ff });
      sphereMesh = new THREE.Mesh(sphereGeo, sphereMat);
      scene.add(sphereMesh);

      playerBody = new CANNON.Body({
        mass: 1,
        shape: new CANNON.Sphere(PLAYER_RADIUS),
        linearDamping: 1 - LIN_DAMP,
        angularDamping: 1 - ANG_DAMP,
        position: new CANNON.Vec3(0, 10, 0),
      });
      playerBody.material = playerMat;
      world.addBody(playerBody);

      // ---------- INPUT ----------
      const onKey = (e, down) => {
        const k = e.key.toLowerCase();
        if (k in keys) keys[k] = down;
      };
      window.addEventListener("keydown", (e) => onKey(e, true));
      window.addEventListener("keyup", (e) => onKey(e, false));

      // ---------- ANIMASJON ----------
      const clock = new THREE.Clock();
      const step = () => {
        animId = requestAnimationFrame(step);
        const dt = Math.min(clock.getDelta(), 0.05);

        // Input → kraft
        const force = new CANNON.Vec3(0, 0, 0);
        if (keys.w) force.z -= MOVE_FORCE;
        if (keys.s) force.z += MOVE_FORCE;
        if (keys.a) force.x -= MOVE_FORCE;
        if (keys.d) force.x += MOVE_FORCE;
        playerBody.applyForce(force, playerBody.position);

        world.step(1 / 60, dt, 3);

        // Sync spiller
        sphereMesh.position.copy(playerBody.position);
        sphereMesh.quaternion.copy(playerBody.quaternion);

        // Kamera følger bakfra
        const camTarget = new THREE.Vector3(
          playerBody.position.x,
          playerBody.position.y + 2,
          playerBody.position.z + 6
        );
        camera.position.lerp(camTarget, 0.05);
        camera.lookAt(playerBody.position);

        // Oppdater debugger
        cannonDebugger.update();

        renderer.render(scene, camera);
      };
      step();

      // ---------- RESIZE ----------
      const onResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      window.addEventListener("resize", onResize);

      // ---------- CLEANUP ----------
      return () => {
        cancelAnimationFrame(animId);
        window.removeEventListener("resize", onResize);
        if (renderer && mountRef.current) {
          mountRef.current.removeChild(renderer.domElement);
          renderer.dispose();
        }
      };
    };

    const cleanup = init();
    return cleanup;
  }, []);

  return (
    <div
      ref={mountRef}
      style={{ width: "100vw", height: "100vh", overflow: "hidden" }}
    />
  );
}
