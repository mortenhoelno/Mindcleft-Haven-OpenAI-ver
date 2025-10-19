// src/components/Game.jsx
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import * as CANNON from "cannon-es";

export default function Game() {
  const mountRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer, world;
    let terrainMesh, hfBody, ballBody, ballMesh, hfWire;
    let animId;

    // ---------- PARAMETRE ----------
    const SIZE = 200;             // terrengbredde/-dybde (meter)
    const RES = 129;              // rutenett (må være n = segments+1)
    const ELEM = SIZE / (RES - 1);
    const BALL_RADIUS = 1;

    // Høydefunksjon (samme for Three og Cannon)
    const heightFn = (x, z) => {
      const nx = x / 35, nz = z / 35;
      const base = Math.sin(nx) * Math.cos(nz) * 2.0;
      const ripples = Math.sin(nx * 2.7 + nz * 1.9) * 0.6;
      const bias = 0.8;
      return base + ripples + bias;
    };

    // ---------- SCENE ----------
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x87ceeb);

    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 500);
    camera.position.set(0, 18, 28);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // Lys
    scene.add(new THREE.AmbientLight(0xffffff, 0.45));
    const dir = new THREE.DirectionalLight(0xffffff, 1.1);
    dir.position.set(25, 40, 20);
    scene.add(dir);

    // Debug helpers
    scene.add(new THREE.AxesHelper(5));
    const grid = new THREE.GridHelper(SIZE * 2, RES * 2, 0xff8800, 0x882200);
    grid.position.y = 0.02;
    scene.add(grid);

    // ---------- FYSIKK ----------
    world = new CANNON.World({ gravity: new CANNON.Vec3(0, -9.82, 0) });
    world.broadphase = new CANNON.SAPBroadphase(world);
    world.allowSleep = true;

    // Materialer
    const groundMat = new CANNON.Material("ground");
    const ballMat = new CANNON.Material("ball");
    const contact = new CANNON.ContactMaterial(groundMat, ballMat, {
      friction: 0.5,
      restitution: 0.15,
    });
    world.addContactMaterial(contact);

    // ---------- GENERER HØYDER ----------
    // heights[i][j]: i = rad (langs +Z), j = kolonne (langs +X)
    const heights = [];
    for (let i = 0; i < RES; i++) {
      const row = [];
      for (let j = 0; j < RES; j++) {
        const x = -SIZE / 2 + j * ELEM;
        const z = -SIZE / 2 + i * ELEM;
        row.push(heightFn(x, z));
      }
      heights.push(row);
    }

    // ---------- THREE TERRAIN MESH (grønn) ----------
    {
      const geo = new THREE.PlaneGeometry(SIZE, SIZE, RES - 1, RES - 1);
      const pos = geo.attributes.position;
      for (let idx = 0; idx < pos.count; idx++) {
        const vx = pos.getX(idx);        // [-SIZE/2, SIZE/2]
        const vz = pos.getY(idx);        // (!) PlaneGeometry bruker Y som "andre flate-akse"
        const h = heightFn(vx, vz);
        pos.setZ(idx, h);                // Z-buffer blir høyde før rotasjonen
      }
      pos.needsUpdate = true;
      geo.computeVertexNormals();
      geo.rotateX(-Math.PI / 2);         // legg planet i XZ, Y opp

      const mat = new THREE.MeshStandardMaterial({
        color: 0x2b7a3a,
        flatShading: true,
        roughness: 1,
        metalness: 0,
      });

      terrainMesh = new THREE.Mesh(geo, mat);
      scene.add(terrainMesh);
    }

    // ---------- CANNON HEIGHTFIELD (fysikk) ----------
    {
      const hfShape = new CANNON.Heightfield(heights, { elementSize: ELEM });
      hfBody = new CANNON.Body({ mass: 0, material: groundMat });

      // VIKTIG REKKEFØLGE: form -> transform -> pos
      hfBody.addShape(hfShape);
      // Heightfield i Cannon har høyde i Z. Rotér slik at Y blir opp:
      hfBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
      // Flytt slik at senter av HF havner i (0,0,0), som Three-meshen
      hfBody.position.set(-SIZE / 2, 0, -SIZE / 2);

      world.addBody(hfBody);
    }

    // ---------- VISUALISER CANNON-HF SOM ORANSJE WIRE ----------
    {
      const lineGeo = new THREE.BufferGeometry();
      const verts = [];
      const indices = [];

      for (let i = 0; i < RES; i++) {
        for (let j = 0; j < RES; j++) {
          const x = j * ELEM - SIZE / 2;
          const z = i * ELEM - SIZE / 2;
          const y = heights[i][j];
          verts.push(x, y, z);

          if (j < RES - 1) {
            indices.push(i * RES + j, i * RES + (j + 1));
          }
          if (i < RES - 1) {
            indices.push(i * RES + j, (i + 1) * RES + j);
          }
        }
      }

      lineGeo.setAttribute("position", new THREE.Float32BufferAttribute(verts, 3));
      lineGeo.setIndex(indices);

      const lineMat = new THREE.LineBasicMaterial({ color: 0xff8800 });
      hfWire = new THREE.LineSegments(lineGeo, lineMat);

      // Gi wire **samme transform** som Cannon-kroppen (slik ser vi 1:1)
      hfWire.rotation.x = -Math.PI / 2;
      hfWire.position.set(-SIZE / 2, 0, -SIZE / 2);
      // Løft 1cm for å unngå z-fighting med grønn mesh
      hfWire.position.y += 0.01;

      scene.add(hfWire);
    }

    // ---------- BALL ----------
    {
      const ballShape = new CANNON.Sphere(BALL_RADIUS);
      ballBody = new CANNON.Body({
        mass: 1,
        shape: ballShape,
        material: ballMat,
        linearDamping: 0.25,
        angularDamping: 0.35,
        position: new CANNON.Vec3(0, 10, 0), // start over senter
      });
      world.addBody(ballBody);

      const geo = new THREE.SphereGeometry(BALL_RADIUS, 32, 32);
      const mat = new THREE.MeshStandardMaterial({ color: 0x2266ff });
      ballMesh = new THREE.Mesh(geo, mat);
      scene.add(ballMesh);
    }

    // ---------- LOOP ----------
    const clock = new THREE.Clock();
    const animate = () => {
      animId = requestAnimationFrame(animate);
      const dt = Math.min(clock.getDelta(), 0.05);

      // Stabil fysikk (substeps hjelper mot tunneling)
      world.step(1 / 60, dt, 3);

      // Sync mesh <- fysikk
      ballMesh.position.copy(ballBody.position);
      ballMesh.quaternion.copy(ballBody.quaternion);

      // Kamera – myk follow
      const camTarget = new THREE.Vector3(
        ballBody.position.x + 8,
        ballBody.position.y + 6,
        ballBody.position.z + 12
      );
      camera.position.lerp(camTarget, 0.08);
      camera.lookAt(ballBody.position.x, ballBody.position.y + 1.0, ballBody.position.z);

      renderer.render(scene, camera);
    };
    animate();

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
  }, []);

  return <div ref={mountRef} style={{ width: "100vw", height: "100vh", overflow: "hidden" }} />;
}
