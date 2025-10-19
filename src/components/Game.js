import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Game() {
  const mountRef = useRef(null);
  const rafRef = useRef(0);

  useEffect(() => {
    // --- Scene & Renderer ---
    const container = mountRef.current;
    const scene = new THREE.Scene();

    const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x111111, 1);
    container.appendChild(renderer.domElement);

    // --- Camera ---
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 500);
    camera.position.set(0, 1.5, 4);

    // --- Lights ---
    const dirLight = new THREE.DirectionalLight(0xffffff, 1.0);
    dirLight.position.set(2, 3, 2);
    scene.add(dirLight);

    const ambient = new THREE.AmbientLight(0xffffff, 0.35);
    scene.add(ambient);

    // --- Cube (helsesjekk) ---
    const geo = new THREE.BoxGeometry(1, 1, 1);
    const mat = new THREE.MeshStandardMaterial({ color: 0x3fa9f5, metalness: 0.1, roughness: 0.7 });
    const cube = new THREE.Mesh(geo, mat);
    scene.add(cube);

    // --- Resize ---
    const onResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    };
    window.addEventListener("resize", onResize);

    // --- Animate ---
    const clock = new THREE.Clock();
    const animate = () => {
      const dt = clock.getDelta();
      cube.rotation.x += dt * 0.8;
      cube.rotation.y += dt * 1.1;

      renderer.render(scene, camera);
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    // --- Cleanup ---
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);

      scene.remove(cube);
      geo.dispose();
      mat.dispose();

      renderer.dispose();
      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, []);

  return React.createElement("div", { ref: mountRef, style: { width: "100%", height: "100%" } });
}
