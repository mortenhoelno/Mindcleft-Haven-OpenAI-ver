// src/components/Game.jsx
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import * as CANNON from "cannon-es";

export default function Game() {
  const mountRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer;
    let world;
    let terrainMesh, terrainBody;
    let playerMesh, playerBody;
    let keys = { w: false, a: false, s: false, d: false };
    let animId;

    // ---------- PARAMETRE ----------
    const TERRAIN_SIZE = 200;
    const GRID_RES = 129;
    const ELEM = TERRAIN_SIZE / (GRID_RES - 1);
    const PLAYER_RADIUS = 0.5;
    const MOVE_FORCE = 25;

    // ---------- INIT ----------
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x88bbff);

    camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.1,
      300
    );
    camera.position.set(0, 15, 25);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Lys
    const light = new THREE.DirectionalLight(0xffffff, 1.2);
    light.position.set(20, 50, 10);
    scene.add(light);
    scene.add(new THREE.AmbientLight(0xffffff, 0.4));

    // ---------- FYSIKK ----------
    world = new CANNON.World({ gravity: new CANNON.Vec3(0, -9.82, 0) });

    // ---------- TERRAIN ----------
    const heightFn = (x, z) => {
      const nx = x / 35, nz = z / 35;
      return Math.sin(nx) * Math.cos(nz) * 2.5 + 1.0;
    };

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

    // THREE
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
      color: 0x227722,
      flatShading: true,
    });
    terrainMesh = new THREE.Mesh(geo, mat);
    terrainMesh.rotation.x = -Math.PI / 2;
    scene.add(terrainMesh);

    // Cannon
    const shape = new CANNON.Heightfield(heights, { elementSize: ELEM });
    terrainBody = new CANNON.Body({ mass: 0 });
    terrainBody.addShape(shape);
    terrainBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
    terrainBody.position.set(-TERRAIN_SIZE / 2, -1, TERRAIN_SIZE / 2);
    world.addBody(terrainBody);

    // ---------- SPILLER ----------
    const sphereGeo = new THREE.SphereGeometry(PLAYER_RADIUS, 32, 32);
    const sphereMat = new THREE.MeshStandardMaterial({ color: 0x4488ff });
    playerMesh = new THREE.Mesh(sphereGeo, sphereMat);
    scene.add(playerMesh);

    playerBody = new CANNON.Body({
      mass: 1,
      shape: new CANNON.Sphere(PLAYER_RADIUS),
      position: new CANNON.Vec3(0, 15, 0),
      linearDamping: 0.4,
      angularDamping: 0.4,
    });
    world.addBody(playerBody);

    // ---------- INPUT ----------
    const onKey = (e, down) => {
      const k = e.key.toLowerCase();
      if (k in keys) keys[k] = down;
    };
    window.addEventListener("keydown", (e) => onKey(e, true));
    window.addEventListener("keyup", (e) => onKey(e, false));

    // ---------- ANIM LOOP ----------
    const clock = new THREE.Clock();
    const step = () => {
      animId = requestAnimationFrame(step);
      const dt = Math.min(clock.getDelta(), 0.05);

      // Bevegelse
      const force = new CANNON.Vec3(0, 0, 0);
      if (keys.w) force.z -= MOVE_FORCE;
      if (keys.s) force.z += MOVE_FORCE;
      if (keys.a) force.x -= MOVE_FORCE;
      if (keys.d) force.x += MOVE_FORCE;
      playerBody.applyForce(force, playerBody.position);

      world.step(1 / 60, dt, 3);

      // Sync
      playerMesh.position.copy(playerBody.position);

      // Kamera
      camera.position.lerp(
        new THREE.Vector3(
          playerBody.position.x,
          playerBody.position.y + 8,
          playerBody.position.z + 15
        ),
        0.05
      );
      camera.lookAt(playerBody.position);

      renderer.render(scene, camera);
    };
    step();

    // ---------- CLEANUP ----------
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("keyup", onKey);
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
