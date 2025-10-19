import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import * as CANNON from "cannon-es";

export default function Game() {
  const mountRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer, world, terrainBody, terrainMesh, playerBody;
    let animId;

    const TERRAIN_SIZE = 100;
    const GRID_RES = 65;
    const ELEM = TERRAIN_SIZE / (GRID_RES - 1);
    const PLAYER_RADIUS = 0.8;

    // --- høydefunksjon (kan byttes ut) ---
    const heightFn = (x, z) => {
      const nx = x / 15;
      const nz = z / 15;
      return Math.sin(nx) * Math.cos(nz) * 2.5 + 2;
    };

    const buildTerrain = () => {
      // --- lag høydefeltdata ---
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

      // --- Cannon ---
      const shape = new CANNON.Heightfield(heights, { elementSize: ELEM });
      const body = new CANNON.Body({ mass: 0 });
      body.addShape(shape);
      body.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
      body.position.set(-TERRAIN_SIZE / 2, -2, -TERRAIN_SIZE / 2);
      world.addBody(body);

      // --- Visualisering av heightfield som wireframe ---
      const geo = new THREE.BufferGeometry();
      const vertices = [];
      const indices = [];

      for (let i = 0; i < GRID_RES; i++) {
        for (let j = 0; j < GRID_RES; j++) {
          const x = j * ELEM - TERRAIN_SIZE / 2;
          const y = heights[i][j];
          const z = i * ELEM - TERRAIN_SIZE / 2;
          vertices.push(x, y, z);

          // legg til linjer mellom punkter i grid
          if (j < GRID_RES - 1) {
            indices.push(i * GRID_RES + j, i * GRID_RES + (j + 1));
          }
          if (i < GRID_RES - 1) {
            indices.push(i * GRID_RES + j, (i + 1) * GRID_RES + j);
          }
        }
      }

      geo.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));
      geo.setIndex(indices);

      const mat = new THREE.LineBasicMaterial({ color: 0xff0000 });
      const wire = new THREE.LineSegments(geo, mat);
      scene.add(wire);

      return { mesh: wire, body };
    };

    // --- init ---
    const init = () => {
      scene = new THREE.Scene();
      scene.background = new THREE.Color(0x87ceeb);

      camera = new THREE.PerspectiveCamera(
        70,
        window.innerWidth / window.innerHeight,
        0.1,
        500
      );
      camera.position.set(0, 30, 40);
      camera.lookAt(0, 0, 0);

      const light = new THREE.DirectionalLight(0xffffff, 1);
      light.position.set(30, 60, 20);
      scene.add(light);
      scene.add(new THREE.AmbientLight(0xffffff, 0.4));

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      mountRef.current.appendChild(renderer.domElement);

      const axes = new THREE.AxesHelper(10);
      scene.add(axes);

      world = new CANNON.World({ gravity: new CANNON.Vec3(0, -9.82, 0) });

      const { mesh, body } = buildTerrain();
      terrainMesh = mesh;
      terrainBody = body;

      // Ball
      const sphereGeo = new THREE.SphereGeometry(PLAYER_RADIUS, 32, 32);
      const sphereMat = new THREE.MeshStandardMaterial({ color: 0x0000ff });
      const sphereMesh = new THREE.Mesh(sphereGeo, sphereMat);
      scene.add(sphereMesh);

      playerBody = new CANNON.Body({
        mass: 1,
        shape: new CANNON.Sphere(PLAYER_RADIUS),
        position: new CANNON.Vec3(0, 10, 0),
      });
      world.addBody(playerBody);

      const clock = new THREE.Clock();

      const animate = () => {
        animId = requestAnimationFrame(animate);
        const dt = Math.min(clock.getDelta(), 0.05);
        world.step(1 / 60, dt, 3);
        sphereMesh.position.copy(playerBody.position);
        renderer.render(scene, camera);
      };

      animate();
    };

    init();
  }, []);

  return (
    <div
      ref={mountRef}
      style={{ width: "100vw", height: "100vh", overflow: "hidden" }}
    />
  );
}
