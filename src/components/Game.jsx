// src/components/Game.jsx
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import * as CANNON from "cannon-es";

export default function Game() {
  const mountRef = useRef(null);

  useEffect(() => {
    let animId = null;

    // ---------- PARAMETRE ----------
    const TERRAIN_SIZE = 120;
    const GRID_RES = 65; // må være n = segments + 1
    const ELEM = TERRAIN_SIZE / (GRID_RES - 1);
    const PLAYER_RADIUS = 0.5;

    // ---------- SCENE ----------
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x20242e);
    scene.fog = new THREE.Fog(0x20242e, 20, 80);

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      200
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    mountRef.current.appendChild(renderer.domElement);

    // ---------- LYS ----------
    const hemi = new THREE.HemisphereLight(0xffffff, 0x444444, 1.2);
    scene.add(hemi);
    const dir = new THREE.DirectionalLight(0xffffff, 1.2);
    dir.position.set(-10, 25, 15);
    scene.add(dir);

    // ---------- CANNON ----------
    const world = new CANNON.World();
    world.gravity.set(0, -9.82, 0);
    world.broadphase = new CANNON.SAPBroadphase(world);
    world.allowSleep = true;

    const groundMat = new CANNON.Material("ground");
    const playerMat = new CANNON.Material("player");
    const contact = new CANNON.ContactMaterial(groundMat, playerMat, {
      friction: 0.5,
      restitution: 0.0,
    });
    world.addContactMaterial(contact);

    // ---------- TERRAIN ----------
    const heightFn = (x, z) => {
      const nx = x / 20;
      const nz = z / 20;
      const base = Math.sin(nx) * Math.cos(nz) * 1.5;
      const ripples = Math.sin(nx * 2.2 + nz * 1.7) * 0.3;
      const bias = 1.2;
      return base + ripples + bias;
    };

    // matrise for høyder
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

    // Cannon heightfield
    const hfShape = new CANNON.Heightfield(heights, { elementSize: ELEM });
    const hfBody = new CANNON.Body({ mass: 0, material: groundMat });
    hfBody.addShape(hfShape);
    hfBody.position.set(-TERRAIN_SIZE / 2, 0, -TERRAIN_SIZE / 2);
    world.addBody(hfBody);

    // Three geometry
    const geo = new THREE.PlaneGeometry(
      TERRAIN_SIZE,
      TERRAIN_SIZE,
      GRID_RES - 1,
      GRID_RES - 1
    );
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      const h = heightFn(x, y);
      pos.setZ(i, h);
    }
    pos.needsUpdate = true;
    geo.computeVertexNormals();

    const mat = new THREE.MeshStandardMaterial({
      color: 0x336633,
      flatShading: true,
      roughness: 1,
    });
    const terrainMesh = new THREE.Mesh(geo, mat);
    terrainMesh.rotation.x = -Math.PI / 2;
    scene.add(terrainMesh);

    // ---------- PLAYER ----------
    const playerBody = new CANNON.Body({
      mass: 1,
      shape: new CANNON.Sphere(PLAYER_RADIUS),
      material: playerMat,
      position: new CANNON.Vec3(0, 10, 0),
      linearDamping: 0.4,
      angularDamping: 0.9,
    });
    world.addBody(playerBody);

    const playerMesh = new THREE.Mesh(
      new THREE.SphereGeometry(PLAYER_RADIUS, 32, 32),
      new THREE.MeshStandardMaterial({ color: 0x3399ff })
    );
    scene.add(playerMesh);

    // ---------- INPUT ----------
    const keys = { w: false, a: false, s: false, d: false };
    window.addEventListener("keydown", (e) => {
      const k = e.key.toLowerCase();
      if (k in keys) keys[k] = true;
    });
    window.addEventListener("keyup", (e) => {
      const k = e.key.toLowerCase();
      if (k in keys) keys[k] = false;
    });

    // ---------- ANIMASJON ----------
    const MOVE_SPEED = 6;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      world.step(1 / 60);

      // bevegelse
      const input = new CANNON.Vec3(
        (keys.d ? 1 : 0) - (keys.a ? 1 : 0),
        0,
        (keys.s ? 1 : 0) - (keys.w ? 1 : 0)
      );
      if (input.length() > 0) {
        input.normalize();
        input.scale(MOVE_SPEED, input);
        playerBody.velocity.x = input.x;
        playerBody.velocity.z = input.z;
      }

      // sync
      playerMesh.position.copy(playerBody.position);
      playerMesh.quaternion.copy(playerBody.quaternion);

      // kamera følger
      const p = playerBody.position;
      camera.position.lerp(
        new THREE.Vector3(p.x, p.y + 3, p.z + 6),
        0.1
      );
      camera.lookAt(p.x, p.y + 1, p.z);

      renderer.render(scene, camera);
    };
    animate();

    // ---------- CLEANUP ----------
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
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{ width: "100vw", height: "100vh", overflow: "hidden" }}
    />
  );
}
