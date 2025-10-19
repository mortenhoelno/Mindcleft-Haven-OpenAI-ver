import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import * as CANNON from "cannon-es";

export default function Game() {
  const mountRef = useRef(null);
  const [debug, setDebug] = useState({ cam: "", ball: "" });

  useEffect(() => {
    let scene, camera, renderer;
    let world;
    let terrainMesh, terrainBody;
    let playerBody;
    let animId;

    // ---------- PARAMETRE ----------
    const TERRAIN_SIZE = 100;
    const GRID_RES = 65;
    const ELEM = TERRAIN_SIZE / (GRID_RES - 1);
    const PLAYER_RADIUS = 0.8;

    // Høydefunksjon
    const heightFn = (x, z) => {
      const nx = x / 15;
      const nz = z / 15;
      const base = Math.sin(nx) * Math.cos(nz) * 2.5;
      const detail = Math.sin(nx * 2.5 + nz * 1.8) * 0.7;
      return base + detail + 2; // offset slik at vi ser alt over y=0
    };

    const buildTerrain = () => {
      // --- bygg høyder ---
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

      // --- THREE mesh ---
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
        color: 0x339933,
        flatShading: true,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.rotation.x = -Math.PI / 2;
      scene.add(mesh);

      // --- Cannon heightfield ---
      const shape = new CANNON.Heightfield(heights, { elementSize: ELEM });
      const body = new CANNON.Body({ mass: 0 });
      body.addShape(shape);
      body.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
      body.position.set(-TERRAIN_SIZE / 2, 0, TERRAIN_SIZE / 2);
      world.addBody(body);

      return { mesh, body };
    };

    const init = () => {
      scene = new THREE.Scene();
      scene.background = new THREE.Color(0x87ceeb);

      // Kamera
      camera = new THREE.PerspectiveCamera(
        70,
        window.innerWidth / window.innerHeight,
        0.1,
        500
      );
      camera.position.set(0, 20, 25);

      // Lys
      const dirLight = new THREE.DirectionalLight(0xffffff, 1);
      dirLight.position.set(20, 50, 10);
      scene.add(dirLight);
      scene.add(new THREE.AmbientLight(0xffffff, 0.4));

      // Renderer
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      mountRef.current.appendChild(renderer.domElement);

      // Hjelpere
      const axes = new THREE.AxesHelper(10);
      scene.add(axes);
      const grid = new THREE.GridHelper(100, 50, 0x000000, 0x000000);
      scene.add(grid);

      // Fysikk
      world = new CANNON.World({ gravity: new CANNON.Vec3(0, -9.82, 0) });
      world.broadphase = new CANNON.SAPBroadphase(world);
      world.allowSleep = true;

      // Materialer
      const groundMat = new CANNON.Material("ground");
      const playerMat = new CANNON.Material("player");
      const contact = new CANNON.ContactMaterial(groundMat, playerMat, {
        friction: 0.4,
        restitution: 0.3,
      });
      world.addContactMaterial(contact);

      // Terreng
      const t = buildTerrain();
      terrainMesh = t.mesh;
      terrainBody = t.body;
      terrainBody.material = groundMat;

      // Kule
      const sphereGeo = new THREE.SphereGeometry(PLAYER_RADIUS, 32, 32);
      const sphereMat = new THREE.MeshStandardMaterial({ color: 0x4488ff });
      const sphereMesh = new THREE.Mesh(sphereGeo, sphereMat);
      scene.add(sphereMesh);

      playerBody = new CANNON.Body({
        mass: 1,
        shape: new CANNON.Sphere(PLAYER_RADIUS),
        position: new CANNON.Vec3(0, 15, 0),
      });
      playerBody.material = playerMat;
      world.addBody(playerBody);

      // --- Animation ---
      const clock = new THREE.Clock();

      const animate = () => {
        animId = requestAnimationFrame(animate);
        const dt = Math.min(clock.getDelta(), 0.05);

        world.step(1 / 60, dt, 3);
        sphereMesh.position.copy(playerBody.position);
        sphereMesh.quaternion.copy(playerBody.quaternion);

        camera.lookAt(playerBody.position);

        renderer.render(scene, camera);

        // Oppdater debug-data
        setDebug({
          cam: `Cam: x=${camera.position.x.toFixed(1)} y=${camera.position.y.toFixed(1)} z=${camera.position.z.toFixed(1)}`,
          ball: `Ball: x=${playerBody.position.x.toFixed(1)} y=${playerBody.position.y.toFixed(1)} z=${playerBody.position.z.toFixed(1)}`,
        });
      };
      animate();

      // Resize
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
    };

    const cleanup = init();
    return cleanup;
  }, []);

  return (
    <>
      <div
        ref={mountRef}
        style={{
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 10,
          left: 10,
          color: "white",
          background: "rgba(0,0,0,0.5)",
          padding: "6px 10px",
          borderRadius: "4px",
          fontFamily: "monospace",
          fontSize: "12px",
        }}
      >
        <div>{debug.cam}</div>
        <div>{debug.ball}</div>
      </div>
    </>
  );
}

