import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import * as CANNON from "cannon-es";

export default function Game() {
  const mountRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer;
    let world;
    let terrainMesh, hfBody;
    let playerBody, playerMesh;
    let animId;
    let direction = 1;

    // ---------- PARAMETRE ----------
    const TERRAIN_SIZE = 100;
    const GRID_RES = 64;
    const ELEM = TERRAIN_SIZE / (GRID_RES - 1);
    const PLAYER_RADIUS = 1;

    // ---------- HØYDEFUNKSJON ----------
    const heightFn = (x, z) => {
      const r = Math.sqrt(x * x + z * z);
      const h = Math.max(0, 8 - r * 0.15); // Fjell i midten
      return h;
    };

    // ---------- SCENE OG KAMERA ----------
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x88bbff); // blå himmel

    camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      500
    );
    camera.position.set(0, 25, 40);
    camera.lookAt(0, 0, 0);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Lys
    const dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.position.set(10, 20, 10);
    scene.add(dirLight);
    scene.add(new THREE.AmbientLight(0xffffff, 0.4));

    // ---------- FYSIKK ----------
    world = new CANNON.World({ gravity: new CANNON.Vec3(0, -9.82, 0) });
    world.broadphase = new CANNON.SAPBroadphase(world);
    world.allowSleep = false;

    // Materialer
    const groundMat = new CANNON.Material("ground");
    const ballMat = new CANNON.Material("ball");

    world.addContactMaterial(
      new CANNON.ContactMaterial(groundMat, ballMat, {
        friction: 0.4,
        restitution: 0.05,
      })
    );

    // ---------- TERRÆN ----------
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

    // THREE.js mesh
    const geo = new THREE.PlaneGeometry(
      TERRAIN_SIZE,
      TERRAIN_SIZE,
      GRID_RES - 1,
      GRID_RES - 1
    );
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const vx = pos.getX(i);
      const vy = pos.getY(i);
      pos.setZ(i, heightFn(vx, vy));
    }
    pos.needsUpdate = true;
    geo.computeVertexNormals();

    const mat = new THREE.MeshStandardMaterial({
      color: 0x336633,
      wireframe: true,
    });
    terrainMesh = new THREE.Mesh(geo, mat);
    terrainMesh.rotation.x = -Math.PI / 2;
    scene.add(terrainMesh);

    // Rutenett
    const grid = new THREE.GridHelper(200, 40, 0xff4400, 0xaa0000);
    grid.rotation.x = 0;
    grid.position.y = 0.05;
    scene.add(grid);

    // Cannon heightfield
    const hfShape = new CANNON.Heightfield(heights, { elementSize: ELEM });
    hfBody = new CANNON.Body({ mass: 0, material: groundMat });
    hfBody.addShape(hfShape);
    hfBody.position.set(-TERRAIN_SIZE / 2, 0, TERRAIN_SIZE / 2);
    hfBody.quaternion.setFromEuler(Math.PI / 2, 0, 0);
    world.addBody(hfBody);

    // ---------- BALL ----------
    const sphereGeo = new THREE.SphereGeometry(PLAYER_RADIUS, 32, 32);
    const sphereMat = new THREE.MeshStandardMaterial({ color: 0x2266ff });
    playerMesh = new THREE.Mesh(sphereGeo, sphereMat);
    scene.add(playerMesh);

    playerBody = new CANNON.Body({
      mass: 2,
      shape: new CANNON.Sphere(PLAYER_RADIUS),
      material: ballMat,
      linearDamping: 0.25,
      angularDamping: 0.35,
      position: new CANNON.Vec3(0, PLAYER_RADIUS + 0.2 + 10, 0),
    });
    world.addBody(playerBody);

    // ---------- ANIMASJON ----------
    const clock = new THREE.Clock();
    const animate = () => {
      animId = requestAnimationFrame(animate);
      const dt = Math.min(clock.getDelta(), 0.05);
      world.step(1 / 60, dt, 3); // 3 substeps

      // Enkel rullebevegelse
      playerBody.velocity.x = direction * 3;
      if (playerBody.position.x > 20) direction = -1;
      if (playerBody.position.x < -20) direction = 1;

      playerMesh.position.copy(playerBody.position);
      playerMesh.quaternion.copy(playerBody.quaternion);

      renderer.render(scene, camera);
    };
    animate();

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
