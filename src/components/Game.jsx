// src/components/Game.jsx
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import * as CANNON from "cannon-es";

export default function Game() {
  const mountRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer, world;
    let terrainMesh, terrainBody, sphereMesh, playerBody;
    let animId;

    const TERRAIN_SIZE = 200;
    const GRID_RES = 128;
    const ELEM = TERRAIN_SIZE / (GRID_RES - 1);
    const PLAYER_RADIUS = 1;

    const heightFn = (x, z) => {
      const nx = x / 35, nz = z / 35;
      return Math.sin(nx) * Math.cos(nz) * 2.0 + Math.sin(nx * 2.7 + nz * 1.9) * 0.6 + 0.8;
    };

    const buildTerrain = () => {
      // Høydefeltdata
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

      // THREE-terrain
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
      geo.rotateX(-Math.PI / 2);

      const mat = new THREE.MeshStandardMaterial({
        color: 0x336633,
        flatShading: true,
      });
      const mesh = new THREE.Mesh(geo, mat);
      scene.add(mesh);

      // CANNON Heightfield (riktig orientering + plassering)
      const shape = new CANNON.Heightfield(heights, { elementSize: ELEM });
      const body = new CANNON.Body({ mass: 0 });
      body.addShape(shape);

      // 🔧 VIKTIG: Flytt heightfieldet til å samsvare med THREE sitt midtpunkt
      body.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
      body.position.set(-TERRAIN_SIZE / 2, 0, TERRAIN_SIZE / 2); // <– merk: z er +

      world.addBody(body);
      return { mesh, body };
    };

    const init = () => {
      // SCENE
      scene = new THREE.Scene();
      scene.background = new THREE.Color(0x87ceeb);

      // KAMERA
      camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 300);
      camera.position.set(0, 40, 60);
      camera.lookAt(0, 0, 0);

      // RENDERER
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      mountRef.current.appendChild(renderer.domElement);

      // LYS
      const dir = new THREE.DirectionalLight(0xffffff, 1.2);
      dir.position.set(20, 40, 20);
      scene.add(dir);
      scene.add(new THREE.AmbientLight(0xffffff, 0.4));

      // WORLD
      world = new CANNON.World();
      world.gravity.set(0, -9.82, 0);

      // TERRAIN
      const t = buildTerrain();
      terrainMesh = t.mesh;
      terrainBody = t.body;

      // BALL
      const sphereGeo = new THREE.SphereGeometry(PLAYER_RADIUS, 32, 32);
      const sphereMat = new THREE.MeshStandardMaterial({ color: 0x4488ff });
      sphereMesh = new THREE.Mesh(sphereGeo, sphereMat);
      scene.add(sphereMesh);

      playerBody = new CANNON.Body({
        mass: 1,
        shape: new CANNON.Sphere(PLAYER_RADIUS),
        position: new CANNON.Vec3(0, 20, 0), // starter rett over terrengets sentrum
        linearDamping: 0.3,
        angularDamping: 0.4,
      });
      world.addBody(playerBody);

      // RUTENETT
      const grid = new THREE.GridHelper(TERRAIN_SIZE * 2, GRID_RES, 0xff6600, 0xaa0000);
      grid.position.y = 0.05;
      scene.add(grid);

      // ANIMASJON
      const clock = new THREE.Clock();
      const animate = () => {
        animId = requestAnimationFrame(animate);
        const dt = Math.min(clock.getDelta(), 0.05);
        world.step(1 / 60, dt);
        sphereMesh.position.copy(playerBody.position);
        sphereMesh.quaternion.copy(playerBody.quaternion);
        renderer.render(scene, camera);
      };
      animate();

      return () => cancelAnimationFrame(animId);
    };

    const cleanup = init();
    return cleanup;
  }, []);

  return (
    <div ref={mountRef} style={{ width: "100vw", height: "100vh", overflow: "hidden" }} />
  );
}
