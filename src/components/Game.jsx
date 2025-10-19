import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import RAPIER from "https://cdn.jsdelivr.net/npm/@dimforge/rapier3d-compat@0.13.1/dist/rapier.es.js";

export default function Game() {
  const mountRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer;
    let world, playerBody;
    let playerGroup;
    let animationId;

    const init = async () => {
      await RAPIER.init();

      // --- THREE SETUP ---
      scene = new THREE.Scene();
      scene.background = new THREE.Color(0x87ceeb);

      camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        200
      );

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      mountRef.current.appendChild(renderer.domElement);

      const light = new THREE.DirectionalLight(0xffffff, 1.2);
      light.position.set(5, 10, 7.5);
      scene.add(light);

      const ambient = new THREE.AmbientLight(0xffffff, 0.4);
      scene.add(ambient);

      // --- RAPIER WORLD SETUP ---
      world = new RAPIER.World({ x: 0, y: -9.81, z: 0 });

      // Floor physics
      const floorDesc = RAPIER.ColliderDesc.cuboid(100, 0.1, 100);
      world.createCollider(floorDesc);

      // Floor visual
      const floorGeo = new THREE.PlaneGeometry(200, 200, 10, 10);
      const floorMat = new THREE.MeshStandardMaterial({
        color: 0x777777,
        side: THREE.DoubleSide,
      });
      const floorMesh = new THREE.Mesh(floorGeo, floorMat);
      floorMesh.rotation.x = -Math.PI / 2;
      scene.add(floorMesh);

      // --- PLAYER ---
      playerGroup = new THREE.Group();
      camera.position.set(0, 1.5, 0);
      playerGroup.add(camera);
      scene.add(playerGroup);

      // Rapier player body (capsule)
      const bodyDesc = RAPIER.RigidBodyDesc.dynamic().setTranslation(0, 5, 0);
      playerBody = world.createRigidBody(bodyDesc);
      const colliderDesc = RAPIER.ColliderDesc.capsule(0.75, 0.25)
        .setMass(1)
        .setActiveEvents(RAPIER.ActiveEvents.CONTACT_EVENTS);
      world.createCollider(colliderDesc, playerBody);

      // --- MOVEMENT ---
      const keys = { w: false, a: false, s: false, d: false };
      const speed = 5;
      const vel = new RAPIER.Vector3(0, 0, 0);
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

      // --- ANIMATION LOOP ---
      const animate = () => {
        animationId = requestAnimationFrame(animate);

        // Input -> velocity
        vel.x = 0;
        vel.z = 0;

        if (keys.w) vel.z -= 1;
        if (keys.s) vel.z += 1;
        if (keys.a) vel.x -= 1;
        if (keys.d) vel.x += 1;

        // Rotasjon fra mus
        playerGroup.rotation.y = yaw;
        camera.rotation.x = pitch;

        // Foroverretning relativ til yaw
        const forward = new THREE.Vector3(0, 0, -1).applyAxisAngle(
          new THREE.Vector3(0, 1, 0),
          yaw
        );
        const right = new THREE.Vector3(1, 0, 0).applyAxisAngle(
          new THREE.Vector3(0, 1, 0),
          yaw
        );

        const moveDir = new THREE.Vector3();
        moveDir.addScaledVector(forward, vel.z);
        moveDir.addScaledVector(right, vel.x);
        if (moveDir.length() > 0) moveDir.normalize();

        const linvel = playerBody.linvel();
        playerBody.setLinvel(
          {
            x: moveDir.x * speed,
            y: linvel.y,
            z: moveDir.z * speed,
          },
          true
        );

        world.step();

        const t = playerBody.translation();
        playerGroup.position.set(t.x, t.y - 0.75, t.z);

        renderer.render(scene, camera);
      };

      animate();

      // --- CLEANUP ---
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

    return () => {};
  }, []);

  return <div ref={mountRef} style={{ width: "100vw", height: "100vh" }} />;
}
