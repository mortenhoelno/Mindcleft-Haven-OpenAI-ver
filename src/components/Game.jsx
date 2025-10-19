// src/components/Game.jsx
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import * as CANNON from "cannon-es";

export default function Game() {
  const mountRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer, world;
    let terrainMesh, playerMesh, playerBody;
    let animId;

    const SIZE_X = 100;
    const SIZE_Y = 100;
    const GRID_RES = 64;
    const ELEM = SIZE_X / (GRID_RES - 1);
    const PLAYER_RADIUS = 0.6;

    // ---- HEIGHT FUNCTION ----
    const heightFn = (x, z) => Math.sin(x / 10) * Math.cos(z / 10) * 3.0;

    // ---- GENERATE HEIGHT DATA ----
    const heights = [];
    for (let i = 0; i < GRID_RES; i++) {
      const row = [];
      for (let j = 0; j < GRID_RES; j++) {
        const x = -SIZE_X / 2 + j * ELEM;
        const z = -SIZE_Y / 2 + i * ELEM;
        row.push(heightFn(x, z));
      }
      heights.push(row);
    }

    // ---- SCENE ----
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x87ceeb);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    camera = new THREE.PerspectiveCamera(
      65,
      window.innerWidth / window.innerHeight,
      0.1,
      500
    );

    // ---- LIGHTS ----
    const light = new THREE.DirectionalLight(0xffffff, 1.2);
    light.position.set(50, 100, 30);
    scene.add(light);
    scene.add(new THREE.AmbientLight(0xffffff, 0.5));

    // ---- PHYSICS ----
    world = new CANNON.World({ gravity: new CANNON.Vec3(0, -9.82, 0) });

    const groundMat = new CANNON.Material("ground");
    const sphereMat = new CANNON.Material("sphere");
    const contact = new CANNON.ContactMaterial(groundMat, sphereMat, {
      friction: 0.4,
      restitution: 0.05,
    });
    world.addContactMaterial(contact);

    // ---- HEIGHTFIELD ----
    const hfShape = new CANNON.Heightfield(heights, { elementSize: ELEM });
    const hfBody = new CANNON.Body({ mass: 0, material: groundMat });
    hfBody.addShape(hfShape);
    hfBody.position.set(-SIZE_X / 2, 0, -SIZE_Y / 2);
    world.addBody(hfBody);

    // ---- TERRAIN MESH ----
    const terrainGeo = new THREE.PlaneGeometry(SIZE_X, SIZE_Y, GRID_RES - 1, GRID_RES - 1);
    const pos = terrainGeo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const z = pos.getY(i);
      const h = heightFn(x, z);
      pos.setZ(i, h);
    }
    pos.needsUpdate = true;
    terrainGeo.computeVertexNormals();
    terrainGeo.rotateX(-Math.PI / 2);
    const terrainMat = new THREE.MeshStandardMaterial({ color: 0x227722, flatShading: true });
    terrainMesh = new THREE.Mesh(terrainGeo, terrainMat);
    scene.add(terrainMesh);

    // ---- GRID (for control) ----
    const grid = new THREE.GridHelper(SIZE_X * 2, GRID_RES * 2, 0xff6600, 0x882200);
    grid.position.y = 0.05;
    scene.add(grid);

    // ---- PLAYER ----
    const playerGeo = new THREE.SphereGeometry(PLAYER_RADIUS, 32, 32);
    const playerMat = new THREE.MeshStandardMaterial({ color: 0x2266ff });
    playerMesh = new THREE.Mesh(playerGeo, playerMat);
    scene.add(playerMesh);

    playerBody = new CANNON.Body({
      mass: 1,
      shape: new CANNON.Sphere(PLAYER_RADIUS),
      position: new CANNON.Vec3(0, 8, 0),
      material: sphereMat,
      linearDamping: 0.3,
      angularDamping: 0.3,
    });
    world.addBody(playerBody);

    // ---- AUTO CAMERA CENTERING ----
    const bbox = new THREE.Box3().setFromObject(terrainMesh);
    const center = bbox.getCenter(new THREE.Vector3());
    camera.position.set(center.x + 20, center.y + 15, center.z + 20);
    camera.lookAt(center);

    // ---- ANIMATION ----
    const clock = new THREE.Clock();
    const animate = () => {
      animId = requestAnimationFrame(animate);
      const dt = Math.min(clock.getDelta(), 0.05);

      world.step(1 / 60, dt);

      playerMesh.position.copy(playerBody.position);
      playerMesh.quaternion.copy(playerBody.quaternion);

      camera.lookAt(playerBody.position);
      renderer.render(scene, camera);
    };
    animate();

    // ---- CLEANUP ----
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
      if (renderer && mountRef.current) mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100vw", height: "100vh" }} />;
}
