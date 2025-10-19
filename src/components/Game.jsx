// src/components/Game.jsx
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Game() {
  const mountRef = useRef(null);

  useEffect(() => {
    // === SCENE, CAMERA, RENDERER ===
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x222233);

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 5, 10);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // === LYS ===
    const hemi = new THREE.HemisphereLight(0xffffff, 0x444444, 1.5);
    hemi.position.set(0, 200, 0);
    scene.add(hemi);
    const dir = new THREE.DirectionalLight(0xffffff, 1.2);
    dir.position.set(-10, 20, 10);
    scene.add(dir);

    // === GRØNN BAKKE ===
    const groundGeo = new THREE.PlaneGeometry(50, 50);
    const groundMat = new THREE.MeshStandardMaterial({
      color: 0x228822,
    });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    scene.add(ground);

    // === BLÅ KULE ===
    const ballGeo = new THREE.SphereGeometry(1, 32, 32);
    const ballMat = new THREE.MeshStandardMaterial({ color: 0x3399ff });
    const ball = new THREE.Mesh(ballGeo, ballMat);
    ball.position.set(0, 1, 0);
    scene.add(ball);

    // === ANIMASJON ===
    let animId = null;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      ball.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    // === RESIZE ===
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
