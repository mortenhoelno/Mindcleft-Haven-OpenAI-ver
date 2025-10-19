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
    let animId;

    // ---------- PARAMETRE ----------
    const TERRAIN_SIZE = 100;
    const GRID_RES = 64;
    const ELEM = TERRAIN_SIZE / (GRID_RES - 1);
    const PLAYER_RADIUS = 0.8;

    // ---------- INIT ----------
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x87ceeb); // himmelblå

    // KAMERA – se ned mot sentrum
    camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.1,
      300
    );
    camera.position.set(0, 40, 40);
    camera.lookAt(0, 0, 0);

    // RENDERER
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // LYS
    const dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.position.set(20, 50, 10);
    scene.add(dirLight);
    scene.add(new THREE.AmbientLight(0xffffff, 0.6));

    // ---------- FYSIKK ----------
    world = new CANNON.World({ gravity: new CANNON.Vec3(0, -9.82, 0) });

    // ---------- TERRAIN ----------
    const heightFn = (x, z) => Math.sin(x / 15) * Math.cos(z / 15) * 2;

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

    // THREE MESH
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
      color: 0x228833,
      flatShading: true,
    });
    terrainMesh = new THREE.Mesh(geo, mat);
    terrainMesh.rotation.x = -Math.PI / 2;
    terrainMesh.position.y = 0;
    scene.add(terrainMesh);

    // HJELPESYMBOL – et rødt kryss på sentrum
    const cross = new THREE.AxesHelper(5);
    scene.add(cross);

    // ---------- BALL ----------
    const ballGeo = new THREE.SphereGeometry(PLAYER_RADIUS, 32, 32);
    const ballMat = new THREE.MeshStandardMaterial({ color: 0x0000ff });
    playerMesh = new THREE.Mesh(ballGeo, ballMat);
    playerMesh.position.set(0, 10, 0);
    scene.add(playerMesh);

    // ---------- LOOP ----------
    const clock = new THREE.Clock();
    const step = () => {
      animId = requestAnimationFrame(step);
      const dt = clock.getDelta();

      playerMesh.rotation.y += dt * 0.5;
      renderer.render(scene, camera);
    };
    step();

    // ---------- CLEANUP ----------
    return () => {
      cancelAnimationFrame(animId);
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
