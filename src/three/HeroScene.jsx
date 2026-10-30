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
    scene.fog = new THREE.FogExp2(0xFBF8F4, 0.025);

    const camera = new THREE.PerspectiveCamera(
      38,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 8.2);

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
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);

    // Studio Lighting for Cosmetics & Glass
    const ambientLight = new THREE.AmbientLight(0xFBF8F4, 1.4);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xFFF9F5, 3.2);
    keyLight.position.set(6, 7, 5);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xF0E4DF, 2.2);
    fillLight.position.set(-6, -2, 4);
    scene.add(fillLight);

    const rimLight = new THREE.PointLight(0xB98D82, 3.6, 16);
    rimLight.position.set(2, 4, -4);
    scene.add(rimLight);

    const bottomGlow = new THREE.PointLight(0xD9B5AE, 2.6, 12);
    bottomGlow.position.set(-2, -3, 2);
    scene.add(bottomGlow);

    // Master 3D Group
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // Base responsive positioning
    let basePosX = window.innerWidth >= 992 ? 1.6 : 0;
    let basePosY = window.innerWidth >= 992 ? -0.1 : 0.4;
    let baseScale = window.innerWidth >= 992 ? 1.0 : 0.75;

    masterGroup.position.set(basePosX, basePosY, 0);
    masterGroup.scale.setScalar(baseScale);

    // ==========================================
    // 1. REALISTIC LUXURY 3D NAIL POLISH BOTTLE
    // ==========================================
    const bottleGroup = new THREE.Group();
    masterGroup.add(bottleGroup);

    // Outer Heavy Glass Bottle Body
    const outerGlassGeom = new THREE.BoxGeometry(1.2, 1.4, 1.2);
    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0xFFFFFF),
      transmission: 0.94,
      opacity: 1,
      transparent: true,
      roughness: 0.05,
      ior: 1.52, // Cosmetic flint glass index
      thickness: 1.6,
      clearcoat: 1.0,
      clearcoatRoughness: 0.04,
      specularIntensity: 1.3,
    });
    const outerGlass = new THREE.Mesh(outerGlassGeom, glassMaterial);
    outerGlass.position.y = 0;
    bottleGroup.add(outerGlass);

    // Internal Glossy Blush Nail Lacquer Core
    const innerLacquerGeom = new THREE.BoxGeometry(0.92, 1.15, 0.92);
    const lacquerMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0xD9B5AE), // Soft dusty rose lacquer
      roughness: 0.08,
      metalness: 0.05,
      clearcoat: 1.0,
      clearcoatRoughness: 0.03,
      sheen: 0.8,
      sheenColor: new THREE.Color(0xF0E4DF),
    });
    const innerLacquer = new THREE.Mesh(innerLacquerGeom, lacquerMaterial);
    innerLacquer.position.y = -0.08;
    bottleGroup.add(innerLacquer);

    // Gold Neck Collar
    const neckGeom = new THREE.CylinderGeometry(0.32, 0.32, 0.3, 32);
    const goldMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color(0xC9A982),
      metalness: 0.85,
      roughness: 0.18,
    });
    const neck = new THREE.Mesh(neckGeom, goldMaterial);
    neck.position.y = 0.85;
    bottleGroup.add(neck);

    // Deep Espresso Architectural Cap
    const capGeom = new THREE.CylinderGeometry(0.38, 0.38, 1.3, 32);
    const capMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color(0x413531),
      roughness: 0.22,
      metalness: 0.15,
    });
    const cap = new THREE.Mesh(capGeom, capMaterial);
    cap.position.y = 1.6;
    bottleGroup.add(cap);

    // Fine Gold Cap Trim Ring
    const trimGeom = new THREE.TorusGeometry(0.385, 0.02, 16, 32);
    const trimRing = new THREE.Mesh(trimGeom, goldMaterial);
    trimRing.rotation.x = Math.PI / 2;
    trimRing.position.y = 1.0;
    bottleGroup.add(trimRing);

    // Tilt bottle for dynamic beauty campaign editorial angle
    bottleGroup.rotation.z = -0.18;
    bottleGroup.rotation.y = 0.35;
    bottleGroup.rotation.x = 0.12;
    bottleGroup.position.set(0.6, -0.4, 0);

    // ==========================================
    // 2. GLOSSY LIQUID LACQUER SWEEP RIBBON
    // ==========================================
    // A fluid ribbon of wet blush lacquer sweeping gracefully across the scene
    const ribbonCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-2.8, -1.8, -0.6),
      new THREE.Vector3(-1.6, 0.8, 0.4),
      new THREE.Vector3(0.2, 1.4, 0.8),
      new THREE.Vector3(1.8, 0.2, 0.2),
      new THREE.Vector3(2.6, -1.2, -0.4),
      new THREE.Vector3(3.2, 0.6, -1.0),
    ]);
    const ribbonGeom = new THREE.TubeGeometry(ribbonCurve, 140, 0.09, 20, false);
    const ribbonMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0xD9B5AE),
      roughness: 0.06,
      clearcoat: 1.0,
      clearcoatRoughness: 0.02,
      transmission: 0.25,
      transparent: true,
      opacity: 0.95,
      sheen: 0.9,
      sheenColor: new THREE.Color(0xFBF8F4),
    });
    const lacquerRibbon = new THREE.Mesh(ribbonGeom, ribbonMaterial);
    masterGroup.add(lacquerRibbon);

    // Second delicate pearlescent lacquer thread
    const accentCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-2.2, 1.6, -0.8),
      new THREE.Vector3(-0.8, -0.6, 0.6),
      new THREE.Vector3(1.2, -1.6, 0.4),
      new THREE.Vector3(2.4, -0.2, 0.8),
    ]);
    const accentGeom = new THREE.TubeGeometry(accentCurve, 100, 0.045, 16, false);
    const accentMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0xFBF8F4),
      metalness: 0.2,
      roughness: 0.12,
      clearcoat: 1.0,
      iridescence: 0.95,
      iridescenceIOR: 1.35,
    });
    const accentRibbon = new THREE.Mesh(accentGeom, accentMaterial);
    masterGroup.add(accentRibbon);

    // ==========================================
    // 3. FLOATING COSMETIC NAIL SWATCHES & DROPS
    // ==========================================
    const swatchGroup = new THREE.Group();
    masterGroup.add(swatchGroup);

    // Almond Nail Swatch Disc Shape
    const swatchGeom = new THREE.CylinderGeometry(0.22, 0.18, 0.55, 32);
    swatchGeom.rotateX(Math.PI / 2);

    const swatches = [
      // 1. Glazed Porcelain Pearl Swatch
      {
        mesh: new THREE.Mesh(
          swatchGeom,
          new THREE.MeshPhysicalMaterial({
            color: new THREE.Color(0xFBF8F4),
            metalness: 0.15,
            roughness: 0.08,
            clearcoat: 1.0,
            iridescence: 0.9,
          })
        ),
        pos: [-1.9, 1.2, 0.6],
        rot: [0.3, 0.5, -0.2],
        speed: 1.1,
        offset: 0,
      },
      // 2. Dusty Rose Lacquer Swatch
      {
        mesh: new THREE.Mesh(
          swatchGeom,
          new THREE.MeshPhysicalMaterial({
            color: new THREE.Color(0xD9B5AE),
            roughness: 0.06,
            clearcoat: 1.0,
            sheen: 0.8,
          })
        ),
        pos: [2.2, 1.5, 0.2],
        rot: [-0.4, -0.3, 0.4],
        speed: 0.9,
        offset: 1.8,
      },
      // 3. Muted Rose Quartz Swatch
      {
        mesh: new THREE.Mesh(
          swatchGeom,
          new THREE.MeshPhysicalMaterial({
            color: new THREE.Color(0xB98D82),
            roughness: 0.08,
            clearcoat: 1.0,
          })
        ),
        pos: [-1.6, -1.6, 0.8],
        rot: [0.2, 0.6, 0.5],
        speed: 1.3,
        offset: 3.2,
      },
      // 4. Liquid Gold Accent Droplet
      {
        mesh: new THREE.Mesh(
          new THREE.SphereGeometry(0.14, 32, 32),
          new THREE.MeshStandardMaterial({
            color: new THREE.Color(0xC9A982),
            metalness: 0.9,
            roughness: 0.15,
          })
        ),
        pos: [2.0, -1.4, 0.5],
        rot: [0, 0, 0],
        speed: 1.5,
        offset: 4.5,
      },
      // 5. Hanging Wet Polish Drop (near wand/bottle)
      {
        mesh: new THREE.Mesh(
          new THREE.SphereGeometry(0.11, 32, 32),
          new THREE.MeshPhysicalMaterial({
            color: new THREE.Color(0xD9B5AE),
            roughness: 0.05,
            clearcoat: 1.0,
          })
        ),
        pos: [0.1, -1.3, 0.4],
        rot: [0, 0, 0],
        speed: 1.8,
        offset: 2.1,
      },
    ];

    swatches.forEach((s) => {
      s.mesh.position.set(...s.pos);
      s.mesh.rotation.set(...s.rot);
      swatchGroup.add(s.mesh);
    });

    // Mouse Parallax with smooth lerp
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

    // Scroll-Linked Choreography via GSAP ScrollTrigger
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

          // Bottle glides subtly aside and rotates
          bottleGroup.position.x = 0.6 + progress * 2.0;
          bottleGroup.position.y = -0.4 - progress * 1.5;
          bottleGroup.rotation.y = 0.35 + progress * 1.5;
          bottleGroup.rotation.z = -0.18 + progress * 0.8;

          // Lacquer ribbon expands and moves across
          lacquerRibbon.position.x = progress * 1.8;
          lacquerRibbon.rotation.z = progress * 0.8;

          // Swatches disperse gently into next section
          swatches.forEach((s, idx) => {
            s.mesh.position.y = s.pos[1] - progress * (1.5 + idx * 0.3);
            s.mesh.position.z = s.pos[2] - progress * 1.2;
          });

          // Soft canvas fade out entering section 3
          if (renderer.domElement) {
            renderer.domElement.style.opacity = Math.max(0, 1 - progress * 1.4);
          }
        },
      });
    }

    // Visibility Observer
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
        // Subtle floating sway on nail polish bottle
        bottleGroup.position.y = -0.4 + Math.sin(elapsedTime * 0.9) * 0.06;
        bottleGroup.rotation.y = 0.35 + Math.sin(elapsedTime * 0.6) * 0.08;

        // Wave motion on lacquer ribbons
        lacquerRibbon.rotation.z = Math.sin(elapsedTime * 0.4) * 0.05;
        accentRibbon.rotation.x = Math.cos(elapsedTime * 0.5) * 0.06;

        // Floating nail swatches in harmonic orbit
        swatches.forEach((s) => {
          s.mesh.position.y = s.pos[1] + Math.sin(elapsedTime * s.speed + s.offset) * 0.12;
          s.mesh.rotation.y = s.rot[1] + Math.sin(elapsedTime * 0.8 + s.offset) * 0.2;
        });

        // Mouse Parallax with smooth damping
        currentMouseX += (targetMouseX - currentMouseX) * 0.05;
        currentMouseY += (targetMouseY - currentMouseY) * 0.05;

        masterGroup.rotation.x = currentMouseY * 0.12;
        masterGroup.rotation.y = currentMouseX * 0.16;
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
        basePosX = 1.4;
        basePosY = -0.1;
        baseScale = 1.0;
        camera.position.z = 8.2;
      } else if (width >= 768) {
        basePosX = 0.8;
        basePosY = 0.1;
        baseScale = 0.85;
        camera.position.z = 8.8;
      } else {
        basePosX = 0.2;
        basePosY = 0.5;
        baseScale = 0.72;
        camera.position.z = 9.4;
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

      outerGlassGeom.dispose();
      glassMaterial.dispose();
      innerLacquerGeom.dispose();
      lacquerMaterial.dispose();
      neckGeom.dispose();
      goldMaterial.dispose();
      capGeom.dispose();
      capMaterial.dispose();
      trimGeom.dispose();
      ribbonGeom.dispose();
      ribbonMaterial.dispose();
      accentGeom.dispose();
      accentMaterial.dispose();
      swatchGeom.dispose();

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
        zIndex: 2,
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
