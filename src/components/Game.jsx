import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { useEffect } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default function Game() {
  useEffect(() => {
    // === SCENE & CAMERA ===
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x87ceeb); // blå himmel
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 5000);
    camera.position.set(0, 60, 120);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    // === LYS ===
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(100, 200, 100);
    scene.add(light);
    scene.add(new THREE.AmbientLight(0x888888));

    // === VERDIER ===
    const TERRAIN_SIZE = 200;
    const RES = 32;
    const ELEM = TERRAIN_SIZE / RES;

    // === GENERER HØYDEVERDIER ===
    const heights = [];
    for (let i = 0; i < RES; i++) {
      heights.push([]);
      for (let j = 0; j < RES; j++) {
        const x = (i / RES) * Math.PI * 2;
        const y = (j / RES) * Math.PI * 2;
        heights[i].push(Math.sin(x) * Math.cos(y) * 5);
      }
    }

    // === THREE.JS TERRAIN (VISUELL) ===
    const geo = new THREE.PlaneGeometry(TERRAIN_SIZE, TERRAIN_SIZE, RES - 1, RES - 1);
    for (let i = 0; i < geo.attributes.position.count; i++) {
      const ix = i % RES;
      const iz = Math.floor(i / RES);
      geo.attributes.position.setY(i, heights[ix][iz]);
    }
    geo.computeVertexNormals();
    const mat = new THREE.MeshPhongMaterial({
      color: 0x004400,
      wireframe: true,
    });
    const terrainMesh = new THREE.Mesh(geo, mat);
    terrainMesh.rotation.x = -Math.PI / 2;
    scene.add(terrainMesh);

    // === GRIDHELPER ===
    const grid = new THREE.GridHelper(TERRAIN_SIZE * 3, 80, 0xff0000, 0xff8800);
    grid.position.y = 0;
    scene.add(grid);

    // === CANNON VERDEN ===
    const world = new CANNON.World();
    world.gravity.set(0, -9.82, 0);

    const groundMat = new CANNON.Material('groundMat');
    const hfShape = new CANNON.Heightfield(heights, { elementSize: ELEM });
    const hfBody = new CANNON.Body({ mass: 0, material: groundMat });
    hfBody.addShape(hfShape);
    hfBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
    hfBody.position.set(-TERRAIN_SIZE / 2, -0.1, TERRAIN_SIZE / 2);
    world.addBody(hfBody);

    // === DEBUG-VISUALISERING AV CANNON HEIGHTFIELD ===
    const hfGroup = new THREE.Group();
    for (let i = 0; i < RES; i++) {
      for (let j = 0; j < RES; j++) {
        const h = heights[i][j];
        const px = i * ELEM - TERRAIN_SIZE / 2;
        const pz = j * ELEM - TERRAIN_SIZE / 2;
        const geom = new THREE.BufferGeometry().setFromPoints([
          new THREE.Vector3(px, 0, pz),
          new THREE.Vector3(px, h, pz),
        ]);
        const line = new THREE.Line(geom, new THREE.LineBasicMaterial({ color: 0xff0000 }));
        hfGroup.add(line);
      }
    }
    scene.add(hfGroup);

    // === BALL ===
    const ballShape = new CANNON.Sphere(2);
    const ballBody = new CANNON.Body({ mass: 1 });
    ballBody.addShape(ballShape);
    ballBody.position.set(0, 40, 0);
    world.addBody(ballBody);

    const ballMesh = new THREE.Mesh(
      new THREE.SphereGeometry(2, 32, 32),
      new THREE.MeshPhongMaterial({ color: 0x0000ff })
    );
    scene.add(ballMesh);

    // === ANIMASJON ===
    const clock = new THREE.Clock();
    function animate() {
      const dt = clock.getDelta();
      world.step(1 / 60, dt, 3);

      ballMesh.position.copy(ballBody.position);
      ballMesh.quaternion.copy(ballBody.quaternion);

      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    return () => {
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  return null;
}
