// src/components/Game.jsx
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import * as CANNON from "cannon-es";

export default function Game() {
  const mountRef = useRef(null);

  useEffect(() => {
    let animId;

    const TERRAIN_SIZE = 60;
    const GRID_RES = 33;
    const ELEM = TERRAIN_SIZE / (GRID_RES - 1);

    // --- SCENE ---
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x20242e);
    const camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.1,
      200
    );
    camera.position.set(0, 10, 25);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // --- LYS ---
    scene.add(new THREE.AmbientLight(0xffffff, 0.5));
    const dir = new THREE.DirectionalLight(0xffffff, 1);
    dir.position.set(20, 40, 20);
    scene.add(dir);

    // --- CANNON ---
    const world = new CANNON.World();
    world.gravity.set(0, -9.82, 0);

    // --- HØYDEFUNKSJON ---
    const heightFn = (x, z) =>
      Math.sin(x / 8) * Math.cos(z / 8) * 1.5 + 1.5;

    // --- MATRICE AV HØYDER ---
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

    // --- HEIGHTFIELD SHAPE ---
    const hfShape = new CANNON.Heightfield(heights, { elementSize: ELEM });
    const hfBody = new CANNON.Body({ mass: 0 });
    hfBody.addShape(hfShape);

    // 👇 Roter og plasser terrenget riktig
    hfBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
    hfBody.position.set(-TERRAIN_SIZE / 2, 0, TERRAIN_SIZE / 2);
    world.addBody(hfBody);

    // --- THREE TERRAIN (visuell grønn) ---
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
      pos.setZ(i, heightFn(x, y));
    }
    pos.needsUpdate = true;
    geo.computeVertexNormals();
    const mat = new THREE.MeshStandardMaterial({
      color: 0x339933,
      flatShading: true,
    });
    const terrainMesh = new THREE.Mesh(geo, mat);
    terrainMesh.rotation.x = -Math.PI / 2;
    scene.add(terrainMesh);

    // --- DEBUG VISUAL: RØD TRANSPARENT PLANE ---
    const debugGeo = new THREE.PlaneGeometry(TERRAIN_SIZE, TERRAIN_SIZE, 1, 1);
    const debugMat = new THREE.MeshBasicMaterial({
      color: 0xff0000,
      transparent: true,
      opacity: 0.4,
      side: THREE.DoubleSide,
    });
    const debugMesh = new THREE.Mesh(debugGeo, debugMat);
    debugMesh.rotation.x = -Math.PI / 2;
    scene.add(debugMesh);

    // --- BALL ---
    const ballShape = new CANNON.Sphere(0.5);
    const ballBody = new CANNON.Body({ mass: 1, shape: ballShape });
    ballBody.position.set(0, 10, 0);
    world.addBody(ballBody);
    const ballMesh = new THREE.Mesh(
      new THREE.SphereGeometry(0.5, 32, 32),
      new THREE.MeshStandardMaterial({ color: 0x3399ff })
    );
    scene.add(ballMesh);

    // --- LOOP ---
    const animate = () => {
      animId = requestAnimationFrame(animate);
      world.step(1 / 60);

      ballMesh.position.copy(ballBody.position);
      ballMesh.quaternion.copy(ballBody.quaternion);

      camera.lookAt(ballMesh.position);
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
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
