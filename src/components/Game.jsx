// src/components/Game.jsx
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import * as CANNON from "cannon-es";

export default function Game() {
  const mountRef = useRef(null);

  useEffect(() => {
    let animId = null;

    // --- SCENE & CAMERA ---
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x222233);

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 5, 15);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // --- LYS ---
    const hemi = new THREE.HemisphereLight(0xffffff, 0x444444, 1.5);
    scene.add(hemi);
    const dir = new THREE.DirectionalLight(0xffffff, 1);
    dir.position.set(-10, 20, 10);
    scene.add(dir);

    // --- CANNON VERDEN ---
    const world = new CANNON.World();
    world.gravity.set(0, -9.82, 0);

    // --- BAKKE ---
    const groundMat = new CANNON.Material();
    const groundBody = new CANNON.Body({
      mass: 0,
      material: groundMat,
      shape: new CANNON.Plane(),
    });
    groundBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
    world.addBody(groundBody);

    const groundGeo = new THREE.PlaneGeometry(50, 50);
    const groundMesh = new THREE.Mesh(
      groundGeo,
      new THREE.MeshStandardMaterial({ color: 0x228822 })
    );
    groundMesh.rotation.x = -Math.PI / 2;
    scene.add(groundMesh);

    // --- BALL ---
    const ballShape = new CANNON.Sphere(1);
    const ballBody = new CANNON.Body({ mass: 1, shape: ballShape });
    ballBody.position.set(0, 10, 0);
    world.addBody(ballBody);

    const ballGeo = new THREE.SphereGeometry(1, 32, 32);
    const ballMat = new THREE.MeshStandardMaterial({ color: 0x3399ff });
    const ballMesh = new THREE.Mesh(ballGeo, ballMat);
    scene.add(ballMesh);

    // --- LOOP ---
    const animate = () => {
      animId = requestAnimationFrame(animate);
      world.step(1 / 60);

      // sync posisjon
      ballMesh.position.copy(ballBody.position);
      ballMesh.quaternion.copy(ballBody.quaternion);

      camera.lookAt(ballMesh.position);
      renderer.render(scene, camera);
    };
    animate();

    // --- CLEANUP ---
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{ width: "100vw", height: "100vh", overflow: "hidden" }}
    />
  );
}
