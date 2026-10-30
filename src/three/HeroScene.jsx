import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HeroScene() {
  const mountRef = useRef(null);
  const [hasWebGlError, setHasWebGlError] = useState(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check WebGL availability
    try {
      const testCanvas = document.createElement('canvas');
      const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
      if (!gl) {
        setHasWebGlError(true);
        return;
      }
    } catch {
      setHasWebGlError(true);
      return;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0xFBF8F4, 0.035);

    const camera = new THREE.PerspectiveCamera(
      40,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 7.4);

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
    } catch {
      setHasWebGlError(true);
      return;
    }

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    renderer.setPixelRatio(dpr);
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xFBF8F4, 1.3);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xFFF8F2, 3.2);
    keyLight.position.set(5, 6, 5);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xF0E4DF, 2.0);
    fillLight.position.set(-6, -2, 4);
    scene.add(fillLight);

    const rimLight = new THREE.PointLight(0xB98D82, 3.8, 18);
    rimLight.position.set(2, 5, -5);
    scene.add(rimLight);

    const bottomGlow = new THREE.PointLight(0xD9B5AE, 2.4, 12);
    bottomGlow.position.set(-2, -4, 2);
    scene.add(bottomGlow);

    // Master Sculptural Composition
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // Responsive Base Positioning:
    // On desktop, offset to the right (+1.75) so headline text on left has breathing room!
    // On mobile, center (0) and lift slightly (-0.4) so it crowns the mobile viewport.
    let basePosX = window.innerWidth >= 992 ? 1.75 : 0;
    let basePosY = window.innerWidth >= 992 ? 0.1 : 0.6;
    let baseScale = window.innerWidth >= 992 ? 1.05 : 0.72;

    masterGroup.position.set(basePosX, basePosY, 0);
    masterGroup.scale.setScalar(baseScale);

    // 1. Central Translucent Liquid Glass Ribbon (Smooth TorusKnot)
    const ribbonGeom = new THREE.TorusKnotGeometry(1.55, 0.36, 180, 32, 2, 3);
    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0xFFFFFF),
      transmission: 0.90,
      opacity: 1,
      transparent: true,
      roughness: 0.1,
      ior: 1.48,
      thickness: 1.9,
      clearcoat: 1.0,
      clearcoatRoughness: 0.06,
      attenuationColor: new THREE.Color(0xF0E4DF),
      attenuationDistance: 2.4,
      sheen: 0.7,
      sheenColor: new THREE.Color(0xD9B5AE),
      specularIntensity: 1.3,
    });
    const mainRibbon = new THREE.Mesh(ribbonGeom, glassMaterial);
    masterGroup.add(mainRibbon);

    // 2. Intertwined Pearlescent Soft-Rose Accent Ribbon
    const accentGeom = new THREE.TorusKnotGeometry(1.3, 0.15, 140, 24, 3, 4);
    const pearlAccentMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0xFBF8F4),
      metalness: 0.3,
      roughness: 0.16,
      clearcoat: 1.0,
      clearcoatRoughness: 0.08,
      iridescence: 0.92,
      iridescenceIOR: 1.35,
      sheen: 0.85,
      sheenColor: new THREE.Color(0xB98D82),
    });
    const accentRibbon = new THREE.Mesh(accentGeom, pearlAccentMaterial);
    accentRibbon.rotation.x = Math.PI / 3;
    masterGroup.add(accentRibbon);

    // 3. Floating Pearlescent Orbs & Liquid Gel Droplets
    const sphereGroup = new THREE.Group();
    masterGroup.add(sphereGroup);

    const sphereGeom = new THREE.SphereGeometry(1, 48, 48);
    const pearlMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0xFBF8F4),
      metalness: 0.15,
      roughness: 0.14,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
      iridescence: 0.98,
      iridescenceIOR: 1.4,
      sheen: 0.75,
      sheenColor: new THREE.Color(0xD9B5AE),
    });

    const liquidDropMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0xD9B5AE),
      metalness: 0.55,
      roughness: 0.1,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
      transmission: 0.35,
      transparent: true,
      opacity: 0.92,
    });

    const spheres = [
      { mesh: new THREE.Mesh(sphereGeom, pearlMaterial), scale: 0.36, pos: [-2.1, 1.4, 0.5], speed: 1.2, offset: 0 },
      { mesh: new THREE.Mesh(sphereGeom, pearlMaterial), scale: 0.25, pos: [2.2, -1.2, 0.7], speed: 0.9, offset: 1.5 },
      { mesh: new THREE.Mesh(sphereGeom, liquidDropMaterial), scale: 0.20, pos: [-1.7, -1.7, 0.8], speed: 1.4, offset: 2.8 },
      { mesh: new THREE.Mesh(sphereGeom, pearlMaterial), scale: 0.15, pos: [1.9, 1.7, -0.4], speed: 1.1, offset: 4.1 },
      { mesh: new THREE.Mesh(sphereGeom, liquidDropMaterial), scale: 0.13, pos: [0.3, 2.3, 0.2], speed: 1.6, offset: 5.2 },
    ];

    spheres.forEach((s) => {
      s.mesh.scale.setScalar(s.scale);
      s.mesh.position.set(...s.pos);
      sphereGroup.add(s.mesh);
    });

    // Mouse Parallax (Smooth Lerp)
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const handlePointerMove = (e) => {
      const halfW = window.innerWidth / 2;
      const halfH = window.innerHeight / 2;
      targetMouseX = (e.clientX - halfW) / halfW;
      targetMouseY = (e.clientY - halfH) / halfH;
    };

    if (!prefersReducedMotion) {
      window.addEventListener('pointermove', handlePointerMove, { passive: true });
    }

    // Scroll-Linked Camera & Sculpture Transformation
    let scrollTriggerInstance;
    const heroSection = document.getElementById('hero');

    if (heroSection) {
      scrollTriggerInstance = ScrollTrigger.create({
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1.2,
        onUpdate: (self) => {
          const progress = self.progress;

          // Cinematic transformation on scroll:
          // Moves further right and scales down into section 3
          masterGroup.position.x = basePosX + progress * 2.2;
          masterGroup.position.y = basePosY - progress * 1.4;
          masterGroup.position.z = -progress * 1.8;
          masterGroup.rotation.y = progress * 2.8;
          masterGroup.rotation.x = progress * 1.4;
          masterGroup.scale.setScalar(baseScale * (1 - progress * 0.45));

          // Camera glide
          camera.position.z = 7.4 - progress * 1.4;

          // Graceful fade out as it enters Brand Story
          if (renderer.domElement) {
            renderer.domElement.style.opacity = Math.max(0, 1 - progress * 1.3);
          }
        },
      });
    }

    // Visibility Observer to pause rendering when hero is offscreen
    let isVisible = true;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const render = () => {
      animationFrameId = requestAnimationFrame(render);

      if (!isVisible) return;

      const elapsedTime = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        // Continuous slow organic rotation
        mainRibbon.rotation.x = elapsedTime * 0.12;
        mainRibbon.rotation.y = elapsedTime * 0.16;

        accentRibbon.rotation.y = -elapsedTime * 0.14;
        accentRibbon.rotation.z = elapsedTime * 0.1;

        // Gentle floating vertical sine wave
        const floatOffset = Math.sin(elapsedTime * 0.8) * 0.08;
        masterGroup.position.y = basePosY + floatOffset;

        // Spheres orbiting in harmonic sine/cosine curves
        spheres.forEach((s) => {
          s.mesh.position.y = s.pos[1] + Math.sin(elapsedTime * s.speed + s.offset) * 0.16;
          s.mesh.position.x = s.pos[0] + Math.cos(elapsedTime * (s.speed * 0.7) + s.offset) * 0.11;
        });

        // Mouse Parallax with soft damping
        currentMouseX += (targetMouseX - currentMouseX) * 0.05;
        currentMouseY += (targetMouseY - currentMouseY) * 0.05;

        masterGroup.rotation.x = currentMouseY * 0.18;
        masterGroup.rotation.y = currentMouseX * 0.25;
      }

      renderer.render(scene, camera);
    };

    render();

    // Resize Handler
    const handleResize = () => {
      if (!container || !renderer) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;

      if (width >= 992) {
        basePosX = 1.75;
        basePosY = 0.1;
        baseScale = 1.05;
        camera.position.z = 7.4;
      } else if (width >= 768) {
        basePosX = 1.0;
        basePosY = 0.2;
        baseScale = 0.85;
        camera.position.z = 7.8;
      } else {
        basePosX = 0;
        basePosY = 0.6;
        baseScale = 0.70;
        camera.position.z = 8.6;
      }

      masterGroup.position.set(basePosX, basePosY, 0);
      masterGroup.scale.setScalar(baseScale);

      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      observer.disconnect();

      if (scrollTriggerInstance) {
        scrollTriggerInstance.kill();
      }

      ribbonGeom.dispose();
      glassMaterial.dispose();
      accentGeom.dispose();
      pearlAccentMaterial.dispose();
      sphereGeom.dispose();
      pearlMaterial.dispose();
      liquidDropMaterial.dispose();

      if (renderer) {
        renderer.dispose();
        if (renderer.domElement && container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="hero-canvas-container"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
      aria-hidden="true"
    >
      {hasWebGlError && (
        <div
          className="webgl-fallback-visual"
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'radial-gradient(circle at 70% 45%, #F0E4DF 0%, #FBF8F4 70%)',
          }}
        >
          <div
            style={{
              width: '380px',
              height: '380px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, #D9B5AE 0%, #F0E4DF 50%, #FBF8F4 100%)',
              filter: 'blur(35px)',
              opacity: 0.75,
            }}
          />
        </div>
      )}
    </div>
  );
}
