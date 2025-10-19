// src/components/Game.jsx
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import * as CANNON from "cannon-es";

export default function Game() {
  const mountRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer;
    let world;
    let terrainMesh;
    let playerBody, playerMesh;
    let animId;
    const keys = { w: false, a: false, s: false, d: false };

    // ---------- PARAMETRE ----------
    const SIZE_X = 100;
    const SIZE_Y = 100;
    const GRID_RES = 64;
    const ELEM = SIZE_X / (GRID_RES - 1);
    const PLAYER_RADIUS = 0.6;
    const MOVE_FORCE = 25;
    const LIN_DAMP = 0.95;
    const ANG_DAMP = 0.9;

    // ---------- HØYDEFUNKSJON ----------
    const heightFn = (x, z) => {
      const nx = x / 20,
        nz = z / 20;
      return Math.sin(nx) * Math.cos(nz) * 3.0 + Math.sin(nx * 2) * 0.5;
    };

    // ---------- GENERER HØYDER ----------
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

    // ---------- INIT ----------
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x87ceeb); // blå himmel
    scene.fog = new THREE.Fog(0x87ceeb, 50, 200);

    camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.05,
      500
    );
    camera.position.set(0, 10, 20);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Lys
    const dirLight = new THREE.DirectionalLight(0xffffff, 1.1);
    dirLight.position.set(50, 100, 30);
    scene.add(dirLight);
    scene.add(new THREE.AmbientLight(0xffffff, 0.4));

    // Rutenett for visualisering
    const grid = new THREE.GridHelper(SIZE_X * 2, GRID_RES * 2, 0xff4400, 0x880000);
    grid.position.y = 0.02;
    scene.add(grid);

    // ---------- FYSIKK ----------
    world = new CANNON.World({ gravity: new CANNON.Vec3(0, -9.82, 0) });
    world.broadphase = new CANNON.SAPBroadphase(world);
    world.allowSleep = true;

    const groundMat = new CANNON.Material("ground");
    const playerMat = new CANNON.Material("player");
    const contact = new CANNON.ContactMaterial(groundMat, playerMat, {
      friction: 0.4,
      restitution: 0.05,
    });
    world.addContactMaterial(contact);

    // ---------- TERRAIN ----------
    const shape = new CANNON.Heightfield(heights, { elementSize: ELEM });
    const terrainBody = new CANNON.Body({ mass: 0, material: groundMat });
    terrainBody.addShape(shape);
    terrainBody.position.set(-SIZE_X / 2, 0, -SIZE_Y / 2);
    world.addBody(terrainBody);

    // ---------- THREE MESH ----------
    const geo = new THREE.PlaneGeometry(SIZE_X, SIZE_Y, GRID_RES - 1, GRID_RES - 1);
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const z = pos.getY(i); // i PlaneGeometry brukes Y som Z-akse
      const h = heightFn(x, z);
      pos.setZ(i, h);
    }
    pos.needsUpdate = true;
    geo.computeVertexNormals();
    geo.rotateX(-Math.PI / 2);

    const mat = new THREE.MeshStandardMaterial({
      color: 0x228833,
      flatShading: true,
      roughness: 1,
    });
    terrainMesh = new THREE.Mesh(geo, mat);
    scene.add(terrainMesh);

    // ---------- SPILLER ----------
    const sphereGeo = new THREE.SphereGeometry(PLAYER_RADIUS, 32, 32);
    const sphereMat = new THREE.MeshStandardMaterial({ color: 0x2266ff });
    playerMesh = new THREE.Mesh(sphereGeo, sphereMat);
    scene.add(playerMesh);

    playerBody = new CANNON.Body({
      mass: 1,
      shape: new CANNON.Sphere(PLAYER_RADIUS),
      material: playerMat,
      linearDamping: 1 - LIN_DAMP,
      angularDamping: 1 - ANG_DAMP,
      position: new CANNON.Vec3(0, 8, 0),
    });
    world.addBody(playerBody);

    // ---------- INPUT ----------
    const onKey = (e, down) => {
      const k = e.key.toLowerCase();
      if (keys[k] !== undefined) keys[k] = down;
    };
    window.addEventListener("keydown", (e) => onKey(e, true));
    window.addEventListener("keyup", (e) => onKey(e, false));

    // ---------- ANIMASJON ----------
    const clock = new THREE.Clock();
    const animate = () => {
      animId = requestAnimationFrame(animate);
      const dt = Math.min(clock.getDelta(), 0.05);

      const force = new CANNON.Vec3(0, 0, 0);
      if (keys.w) force.z -= MOVE_FORCE;
      if (keys.s) force.z += MOVE_FORCE;
      if (keys.a) force.x -= MOVE_FORCE;
      if (keys.d) force.x += MOVE_FORCE;
      playerBody.applyForce(force, playerBody.position);

      world.step(1 / 60, dt, 3);

      playerMesh.position.copy(playerBody.position);
      playerMesh.quaternion.copy(playerBody.quaternion);

      camera.position.lerp(
        new THREE.Vector3(
          playerBody.position.x + 10,
          playerBody.position.y + 5,
          playerBody.position.z + 10
        ),
        0.1
      );
      camera.lookAt(playerBody.position);

      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
      if (renderer && mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
        renderer.dispose();
      }
    };
  }, []);

  return (
    <div ref={mountRef} style={{ width: "100vw", height: "100vh", overflow: "hidden" }} />
  );
}
