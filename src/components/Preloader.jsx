import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

export default function Preloader({ onComplete }) {
  const [isDismissed, setIsDismissed] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    // Ultra-swift non-blocking entrance: nail imagery and hero are visible immediately!
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsDismissed(true);
      if (onComplete) onComplete();
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        setIsDismissed(true);
        if (onComplete) onComplete();
      },
    });

    // Elegant subtle 400ms curtain lift
    tl.to(containerRef.current, {
      opacity: 0,
      duration: 0.45,
      delay: 0.25,
      ease: 'power2.inOut',
    });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  if (isDismissed) return null;

  return (
    <div
      ref={containerRef}
      className="preloader-overlay"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 'var(--z-preloader)',
        backgroundColor: 'var(--color-porcelain)',
        pointerEvents: 'none', // Non-blocking: user can immediately interact
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      aria-hidden="true"
    >
      <div
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.4rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'var(--color-muted-rose)',
          fontStyle: 'italic',
        }}
      >
        Nails by Sailee
      </div>
    </div>
  );
}
