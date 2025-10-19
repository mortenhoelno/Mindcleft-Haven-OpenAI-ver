import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as CANNON from "cannon-es";

export default function Game() {
  const mountRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer;
    let world, playerBody, floorBody;
    let playerGroup;
    let animationId;
    let controls;

    const init = () => {
      // --- SCENE ---
      scene = new THREE.Scene();
      scene.background = new THREE.Color(0x87ceeb);

      camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        200
      );
      camera.position.set(0, 1.5, 5);

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      mountRef.current.appendChild(renderer.domElement);

      // --- LIGHT ---
      const light = new THREE.DirectionalLight(0xffffff, 1.2);
      light.position.set(5, 10, 7.5);
      scene.add(light);
      scene.add(new THREE.AmbientLight(0xffffff, 0.4));

      // --- CONTROLS ---
      controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.enablePan = false;
      controls.enableZoom = true;

      // --- PHYSICS (CANNON) ---
      world = new CANNON.World();
      world.gravity.set(0, -9.82, 0);

      // Floor
      const floorShape = new CANNON.Plane();
      floorBody = new CANNON.Body({ mass: 0 });
      floorBody.addShape(floorShape);
      floorBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
      world.addBody(floorBody);

      const floorGeo = new THREE.PlaneGeometry(200, 200);
      const floorMat = new THREE.MeshStandardMaterial({
        color: 0x777777,
        side: THREE.DoubleSide,
      });
      const floorMesh = new THREE.Mesh(floorGeo, floorMat);
      floorMesh.rotation.x = -Math.PI / 2;
      scene.add(floorMesh);

      // Player
      const playerShape = new CANNON.Sphere(0.5);
      playerBody = new CANNON.Body({
        mass: 1,
        position: new CANNON.Vec3(0, 5, 0),
        shape: playerShape,
      });
      world.addBody(playerBody);

      const playerMesh = new THREE.Mesh(
        new THREE.SphereGeometry(0.5, 32, 32),
        new THREE.MeshStandardMaterial({ color: 0x0077ff })
      );
      scene.add(playerMesh);

      playerGroup = new THREE.Group();
      playerGroup.add(camera);
      scene.add(playerGroup);

      // Movement
      const keys = { w: false, a: false, s: false, d: false };
      const speed = 5;
      let pitch = 0;
      let yaw = 0;

      const onKeyDown = (e) => {
        const k = e.key.toLowerCase();
        if (k in keys) keys[k] = true;
      };
      const onKeyUp = (e) => {
        const k = e.key.toLowerCase();
        if (k in keys) keys[k] = false;
      };

      document.addEventListener("keydown", onKeyDown);
      document.addEventListener("keyup", onKeyUp);

      const onMouseMove = (e) => {
        if (document.pointerLockElement === renderer.domElement) {
          yaw -= e.movementX * 0.002;
          pitch -= e.movementY * 0.002;
          pitch = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, pitch));
        }
      };

      renderer.domElement.addEventListener("click", () => {
        renderer.domElement.requestPointerLock();
      });
      document.addEventListener("mousemove", onMouseMove);

      // Animation
      const animate = () => {
        animationId = requestAnimationFrame(animate);
        const moveDir = new THREE.Vector3();

        if (keys.w) moveDir.z -= 1;
        if (keys.s) moveDir.z += 1;
        if (keys.a) moveDir.x -= 1;
        if (keys.d) moveDir.x += 1;

        moveDir.normalize();
        const forward = new THREE.Vector3(0, 0, -1).applyAxisAngle(
          new THREE.Vector3(0, 1, 0),
          yaw
        );
        const right = new THREE.Vector3(1, 0, 0).applyAxisAngle(
          new THREE.Vector3(0, 1, 0),
          yaw
        );
        const dir = new THREE.Vector3();
        dir.addScaledVector(forward, moveDir.z);
        dir.addScaledVector(right, moveDir.x);
        dir.normalize();

        if (moveDir.length() > 0) {
          playerBody.velocity.x = dir.x * speed;
          playerBody.velocity.z = dir.z * speed;
        }

        world.step(1 / 60);

        playerMesh.position.copy(playerBody.position);
        playerGroup.position.set(
          playerBody.position.x,
          playerBody.position.y + 1.5,
          playerBody.position.z
        );

        playerGroup.rotation.y = yaw;
        camera.rotation.x = pitch;

        controls.update();
        renderer.render(scene, camera);
      };

      animate();

      window.addEventListener("resize", () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      });

      return () => {
        cancelAnimationFrame(animationId);
        document.removeEventListener("keydown", onKeyDown);
        document.removeEventListener("keyup", onKeyUp);
        document.removeEventListener("mousemove", onMouseMove);
        renderer.dispose();
        mountRef.current.removeChild(renderer.domElement);
      };
    };

    init();
  }, []);

  return <div ref={mountRef} style={{ width: "100vw", height: "100vh" }} />;
}
