import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Game() {
  const mountRef = useRef(null);
  const rafRef = useRef(0);

  useEffect(() => {
    // --- SCENE & RENDERER ---
    const container = mountRef.current;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x111111);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: "high-performance"
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    // --- CAMERA & PLAYER ---
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      500
    );
    camera.position.set(0, 1.5, 0);

    // Player-gruppe (flytter alt som tilhører spilleren)
    const player = new THREE.Group();
    player.position.set(0, 1.5, 5);
    player.add(camera);
    scene.add(player);

    // --- LIGHTING ---
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(10, 10, 10);
    scene.add(light);
    scene.add(new THREE.AmbientLight(0xffffff, 0.3));

    // --- SIMPLE FLOOR (referanse) ---
    const floorGeo = new THREE.PlaneGeometry(200, 200, 1, 1);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x222222,
      side: THREE.DoubleSide
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    scene.add(floor);

    // --- INPUT STATE ---
    const keys = { w: false, a: false, s: false, d: false };
    const rotation = { yaw: 0, pitch: 0 };
    let isPointerLocked = false;

    // --- POINTER LOCK FOR MOUSE LOOK ---
    const onClick = () => {
      renderer.domElement.requestPointerLock();
    };
    const onPointerLockChange = () => {
      isPointerLocked = document.pointerLockElement === renderer.domElement;
    };
    document.addEventListener("pointerlockchange", onPointerLockChange);
    renderer.domElement.addEventListener("click", onClick);

    // --- MOUSE MOVEMENT ---
    const onMouseMove = (event) => {
      if (!isPointerLocked) return;
      const sensitivity = 0.0025;
      rotation.yaw -= event.movementX * sensitivity;
      rotation.pitch -= event.movementY * sensitivity;
      rotation.pitch = Math.max(
        -Math.PI / 2 + 0.1,
        Math.min(Math.PI / 2 - 0.1, rotation.pitch)
      );
    };
    window.addEventListener("mousemove", onMouseMove);

    // --- KEYBOARD ---
    const onKeyDown = (e) => {
      if (e.key in keys) keys[e.key] = true;
    };
    const onKeyUp = (e) => {
      if (e.key in keys) keys[e.key] = false;
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);

    // --- ANIMATION LOOP ---
    const clock = new THREE.Clock();

    const animate = () => {
      const delta = clock.getDelta();
      const moveSpeed = 5 * delta;

      // Roter spiller (yaw = venstre/høyre)
      player.rotation.y = rotation.yaw;
      // Roter kamera for pitch (opp/ned)
      camera.rotation.x = rotation.pitch;

      // Fremover/tilbake
      const forward = new THREE.Vector3(
        Math.sin(rotation.yaw),
        0,
        Math.cos(rotation.yaw)
      );
      const right = new THREE.Vector3(
        Math.cos(rotation.yaw),
        0,
        -Math.sin(rotation.yaw)
      );

      if (keys.w) player.position.addScaledVector(forward, -moveSpeed);
      if (keys.s) player.position.addScaledVector(forward, moveSpeed);
      if (keys.a) player.position.addScaledVector(right, -moveSpeed);
      if (keys.d) player.position.addScaledVector(right, moveSpeed);

      renderer.render(scene, camera);
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    // --- RESIZE ---
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    // --- CLEANUP ---
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("pointerlockchange", onPointerLockChange);
      renderer.domElement.removeEventListener("click", onClick);
      renderer.dispose();
      floorGeo.dispose();
      floorMat.dispose();
      if (renderer.domElement && renderer.domElement.parentNode)
        renderer.domElement.parentNode.removeChild(renderer.domElement);
    };
  }, []);

  return React.createElement("div", {
    ref: mountRef,
    style: { width: "100%", height: "100%" },
  });
}
