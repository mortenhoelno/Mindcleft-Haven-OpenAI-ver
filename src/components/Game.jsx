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
    let playerBody, playerGroup;
    let keys = { w: false, a: false, s: false, d: false };
    let animId;

    // ---------- PARAMETRE ----------
    const TERRAIN_SIZE = 200; // meter
    const GRID_RES = 129; // rutenett (må være n = segments+1)
    const ELEM = TERRAIN_SIZE / (GRID_RES - 1); // elementSize i Cannon
    const PLAYER_RADIUS = 0.5;
    const MOVE_SPEED = 6; // m/s mål-fart på bakken
    const AIR_CONTROL = 0.2; // mindre kontroll i lufta
    const LIN_DAMP = 0.92; // høy damping = stopper raskt
    const ANG_DAMP = 0.98;

    // Enkel “fjell”-funksjon (ingen ekstern noise)
    const heightFn = (x, z) => {
      const nx = x / 35,
        nz = z / 35;
      const base = Math.sin(nx) * Math.cos(nz) * 2.0;
      const ripples = Math.sin(nx * 2.7 + nz * 1.9) * 0.6;
      const bias = 0.8;
      return base + ripples + bias;
    };

    // ---------- BYGG TERRENG ----------
    const buildTerrain = () => {
      // 1) Høyder til Cannon (matrise [i][j])
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

      // 2) Three-geometry
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
        roughness: 1,
        metalness: 0,
      });

      const mesh = new THREE.Mesh(geo, mat);
      mesh.rotation.x = -Math.PI / 2;
      mesh.receiveShadow = false;

      // 3) Cannon Heightfield
      const shape = new CANNON.Heightfield(heights, { elementSize: ELEM });
      const body = new CANNON.Body({ mass: 0 });
      body.addShape(shape);

      // 🔧 Roter og juster høyde slik at Three og Cannon matcher
      body.quaternion.setFromEuler(-Math.PI / 2, 0, 0, "XYZ");

      // Beregn snitthøyde for å plassere terrenget korrekt
      let avgHeight = 0;
      for (let i = 0; i < GRID_RES; i++) {
        for (let j = 0; j < GRID_RES; j++) {
          avgHeight += heights[i][j];
        }
      }
      avgHeight /= GRID_RES * GRID_RES;

      body.position.set(-TERRAIN_SIZE / 2, -avgHeight, -TERRAIN_SIZE / 2);

      return { mesh, body };
    };

    const init = () => {
      // ---------- THREE ----------
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
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      renderer.setSize(window.innerWidth, window.innerHeight, false);
      renderer.domElement.style.display = "block";
      mountRef.current.appendChild(renderer.domElement);

      // Lys
      const dir = new THREE.DirectionalLight(0xffffff, 1.1);
      dir.position.set(20, 30, 10);
      dir.castShadow = false;
      scene.add(dir);
      scene.add(new THREE.AmbientLight(0xffffff, 0.35));

      // ---------- CANNON ----------
      world = new CANNON.World({
        gravity: new CANNON.Vec3(0, -9.81, 0),
      });
      world.broadphase = new CANNON.SAPBroadphase(world);
      world.allowSleep = true;

      // Materialer
      const groundMat = new CANNON.Material("ground");
      const playerMat = new CANNON.Material("player");
      const contact = new CANNON.ContactMaterial(groundMat, playerMat, {
        friction: 0.4,
        restitution: 0.0,
      });
      world.addContactMaterial(contact);

      // Terreng
      const t = buildTerrain();
      terrainMesh = t.mesh;
      terrainBody = t.body;
      terrainBody.material = groundMat;
      scene.add(terrainMesh);
      world.addBody(terrainBody);

      // Spiller (kule)
      playerBody = new CANNON.Body({
        mass: 1,
        shape: new CANNON.Sphere(PLAYER_RADIUS),
        linearDamping: 1 - LIN_DAMP,
        angularDamping: 1 - ANG_DAMP,
        position: new CANNON.Vec3(0, 20, 0), // høyere startposisjon
      });
      playerBody.material = playerMat;
      world.addBody(playerBody);

      // Player-group i Three (for kamera)
      playerGroup = new THREE.Group();
      scene.add(playerGroup);
      camera.position.set(0, 1.4, 0);
      playerGroup.add(camera);

      // Input
      const onKey = (e, down) => {
        const k = e.key.toLowerCase();
        if (k in keys) keys[k] = down;
      };
      window.addEventListener("keydown", (e) => onKey(e, true));
      window.addEventListener("keyup", (e) => onKey(e, false));

      renderer.domElement.addEventListener("click", () => {
        if (document.pointerLockElement !== renderer.domElement) {
          renderer.domElement.requestPointerLock().catch(() => {});
        }
      });

      // ---------- ANIMASJON ----------
      let last = performance.now();
      const step = () => {
        animId = requestAnimationFrame(step);
        const now = performance.now();
        const dt = Math.min((now - last) / 1000, 1 / 30);
        last = now;

        // Ønsket fart
        const desired = new CANNON.Vec3(0, 0, 0);
        if (keys.w) desired.z -= 1;
        if (keys.s) desired.z += 1;
        if (keys.a) desired.x -= 1;
        if (keys.d) desired.x += 1;
        if (desired.length() > 0) desired.normalize();

        // Enkel “på bakken”-sjekk
        const onGround = Math.abs(playerBody.velocity.y) < 0.5;

        const speed = onGround ? MOVE_SPEED : MOVE_SPEED * AIR_CONTROL;
        desired.scale(speed, desired);

        // Lerp mot ønsket fart
        const vxz = new CANNON.Vec3(playerBody.velocity.x, 0, playerBody.velocity.z);
        const blend = onGround ? 0.2 : 0.08;
        vxz.scale(1 - blend, vxz);
        desired.scale(blend, desired);
        vxz.vadd(desired, vxz);

        playerBody.velocity.x = vxz.x;
        playerBody.velocity.z = vxz.z;

        world.step(1 / 60, dt, 3);

        const p = playerBody.position;
        playerGroup.position.set(p.x, p.y, p.z);

        renderer.render(scene, camera);
      };
      step();

      const onResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight, false);
      };
      window.addEventListener("resize", onResize);

      // Cleanup
      return () => {
        cancelAnimationFrame(animId);
        window.removeEventListener("resize", onResize);
        if (renderer && renderer.domElement && mountRef.current) {
          mountRef.current.removeChild(renderer.domElement);
          renderer.dispose();
        }
        world.bodies.forEach((b) => world.removeBody(b));
        world = null;
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
