// src/components/Game.jsx
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import * as CANNON from "cannon-es";

export default function Game() {
  const mountRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer, world;
    let terrainMesh, terrainBody, debugMesh;
    let playerBody, playerGroup;
    let keys = { w: false, a: false, s: false, d: false };
    let animId;

    const TERRAIN_SIZE = 200;
    const GRID_RES = 129;
    const ELEM = TERRAIN_SIZE / (GRID_RES - 1);
    const PLAYER_RADIUS = 0.5;
    const MOVE_SPEED = 6;
    const AIR_CONTROL = 0.2;
    const LIN_DAMP = 0.92;
    const ANG_DAMP = 0.98;

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

  // Three.js terreng
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
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.rotation.x = -Math.PI / 2;

  // Cannon Heightfield
  const shape = new CANNON.Heightfield(heights, { elementSize: ELEM });
  const body = new CANNON.Body({ mass: 0 });
  body.addShape(shape);

  // 👉 Roter slik at heightfield ligger vannrett
  body.quaternion.setFromEuler(-Math.PI / 2, 0, 0, "XYZ");

  // 👉 Flytt slik at den dekker samme område som Three-bakken
  body.position.set(-TERRAIN_SIZE / 2, 0, TERRAIN_SIZE / 2);

  return { mesh, body };
};

    const init = () => {
      // THREE
      scene = new THREE.Scene();
      scene.background = new THREE.Color(0x20242e);
      scene.fog = new THREE.Fog(0x20242e, 30, 90);

      camera = new THREE.PerspectiveCamera(
        70,
        window.innerWidth / window.innerHeight,
        0.05,
        300
      );

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight, false);
      mountRef.current.appendChild(renderer.domElement);

      const dir = new THREE.DirectionalLight(0xffffff, 1.1);
      dir.position.set(20, 30, 10);
      scene.add(dir);
      scene.add(new THREE.AmbientLight(0xffffff, 0.35));

      // CANNON
      world = new CANNON.World({ gravity: new CANNON.Vec3(0, -9.81, 0) });
      world.broadphase = new CANNON.SAPBroadphase(world);
      world.allowSleep = true;

      const groundMat = new CANNON.Material("ground");
      const playerMat = new CANNON.Material("player");
      world.addContactMaterial(
        new CANNON.ContactMaterial(groundMat, playerMat, {
          friction: 0.4,
          restitution: 0.0,
        })
      );

      const t = buildTerrain();
      terrainMesh = t.mesh;
      terrainBody = t.body;
      debugMesh = t.dbg;
      scene.add(terrainMesh);
      scene.add(debugMesh);
      world.addBody(terrainBody);

      // PLAYER
      playerBody = new CANNON.Body({
        mass: 1,
        shape: new CANNON.Sphere(PLAYER_RADIUS),
        linearDamping: 1 - LIN_DAMP,
        angularDamping: 1 - ANG_DAMP,
        position: new CANNON.Vec3(0, 40, 0),
        material: playerMat,
      });
      world.addBody(playerBody);

      playerGroup = new THREE.Group();
      scene.add(playerGroup);
      camera.position.set(0, 1.4, 0);
      playerGroup.add(camera);

      const onKey = (e, down) => {
        const k = e.key.toLowerCase();
        if (k in keys) keys[k] = down;
      };
      window.addEventListener("keydown", (e) => onKey(e, true));
      window.addEventListener("keyup", (e) => onKey(e, false));

      let last = performance.now();
      const step = () => {
        animId = requestAnimationFrame(step);
        const now = performance.now();
        const dt = Math.min((now - last) / 1000, 1 / 30);
        last = now;

        const desired = new CANNON.Vec3(0, 0, 0);
        if (keys.w) desired.z -= 1;
        if (keys.s) desired.z += 1;
        if (keys.a) desired.x -= 1;
        if (keys.d) desired.x += 1;
        if (desired.length() > 0) desired.normalize();

        const onGround = Math.abs(playerBody.velocity.y) < 0.5;
        const speed = onGround ? MOVE_SPEED : MOVE_SPEED * AIR_CONTROL;
        desired.scale(speed, desired);

        const vxz = new CANNON.Vec3(playerBody.velocity.x, 0, playerBody.velocity.z);
        const blend = onGround ? 0.2 : 0.08;
        vxz.scale(1 - blend, vxz);
        desired.scale(blend, desired);
        vxz.vadd(desired, vxz);
        playerBody.velocity.x = vxz.x;
        playerBody.velocity.z = vxz.z;

        world.step(1 / 60, dt, 3);

        const p = playerBody.position;
        playerGroup.position.copy(p);
        debugMesh.position.y = terrainBody.position.y; // viser høyde
        renderer.render(scene, camera);
      };
      step();

      const onResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight, false);
      };
      window.addEventListener("resize", onResize);

      return () => {
        cancelAnimationFrame(animId);
        window.removeEventListener("resize", onResize);
        mountRef.current.removeChild(renderer.domElement);
        renderer.dispose();
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
