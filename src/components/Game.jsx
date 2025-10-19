import * as THREE from "three";
import * as CANNON from "cannon-es";
import { useEffect, useRef } from "react";

export default function Game() {
  const mountRef = useRef(null);

  useEffect(() => {
    // === THREE SETUP ===
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x87ceeb); // lys blå himmel

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      500
    );
    camera.position.set(0, 20, 25);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // === LIGHT ===
    const light = new THREE.DirectionalLight(0xffffff, 1.5);
    light.position.set(30, 50, 30);
    scene.add(light);
    scene.add(new THREE.AmbientLight(0xffffff, 0.4));

    // === AXES HELPER ===
    const axesHelper = new THREE.AxesHelper(10);
    scene.add(axesHelper);

    // === PHYSICS WORLD ===
    const world = new CANNON.World({
      gravity: new CANNON.Vec3(0, -9.82, 0),
    });

    // === HEIGHTFIELD DATA ===
    const sizeX = 50;
    const sizeY = 50;
    const elementSize = 1;
    const matrix = [];

    for (let i = 0; i < sizeX; i++) {
      matrix.push([]);
      for (let j = 0; j < sizeY; j++) {
        const height = Math.sin(i / 5) * Math.cos(j / 5) * 2;
        matrix[i].push(height);
      }
    }

    const heightfieldShape = new CANNON.Heightfield(matrix, {
      elementSize,
    });
    const heightfieldBody = new CANNON.Body({ mass: 0 });
    heightfieldBody.addShape(heightfieldShape);
    heightfieldBody.position.set(
      -((sizeX - 1) * elementSize) / 2,
      0,
      ((sizeY - 1) * elementSize) / 2
    );
    heightfieldBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
    world.addBody(heightfieldBody);

    // === THREE MESH FOR HEIGHTFIELD ===
    const geometry = new THREE.PlaneGeometry(
      sizeX * elementSize,
      sizeY * elementSize,
      sizeX - 1,
      sizeY - 1
    );

    for (let i = 0; i < geometry.attributes.position.count; i++) {
      const ix = i % sizeX;
      const iy = Math.floor(i / sizeX);
      geometry.attributes.position.setY(i, matrix[ix][iy]);
    }
    geometry.computeVertexNormals();

    const material = new THREE.MeshBasicMaterial({
      color: 0x006400,
      wireframe: true,
      wireframeLinewidth: 2,
      wireframeLinecap: "round",
    });
    const terrainMesh = new THREE.Mesh(geometry, material);
    terrainMesh.rotation.x = -Math.PI / 2;
    scene.add(terrainMesh);

    // === BALL ===
    const radius = 1;
    const ballShape = new CANNON.Sphere(radius);
    const ballBody = new CANNON.Body({
      mass: 5,
      shape: ballShape,
      position: new CANNON.Vec3(0, 5, 0),
      material: new CANNON.Material({ friction: 0.4, restitution: 0.3 }),
    });
    world.addBody(ballBody);

    const ballGeo = new THREE.SphereGeometry(radius, 32, 32);
    const ballMat = new THREE.MeshStandardMaterial({ color: 0x0000ff });
    const ballMesh = new THREE.Mesh(ballGeo, ballMat);
    scene.add(ballMesh);

    // === CONTACT MATERIAL ===
    const groundMat = new CANNON.Material({ friction: 0.6, restitution: 0.2 });
    const contactMat = new CANNON.ContactMaterial(groundMat, ballBody.material, {
      friction: 0.4,
      restitution: 0.3,
    });
    world.addContactMaterial(contactMat);

    // === MOTION ===
    let direction = 1;

    function animate() {
      requestAnimationFrame(animate);

      // Fysikk
      world.step(1 / 60);

      // Rull frem og tilbake automatisk
      ballBody.velocity.x = 3 * direction;
      if (Math.abs(ballBody.position.x) > 15) direction *= -1;

      // Oppdater Three-posisjon
      ballMesh.position.copy(ballBody.position);
      ballMesh.quaternion.copy(ballBody.quaternion);

      // Kamera følger lett bakfra
      camera.position.x = ballBody.position.x;
      camera.lookAt(ballBody.position);

      renderer.render(scene, camera);
    }

    animate();

    // === CLEANUP ===
    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100vw", height: "100vh" }} />;
}
