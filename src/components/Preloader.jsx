import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

export default function Preloader({ onComplete }) {
  const [isDismissed, setIsDismissed] = useState(false);
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const subtitleRef = useRef(null);
  const orbRef = useRef(null);

  const wordOne = "Gloss".split("");
  const wordTwo = "Atelier".split("");

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsDismissed(true);
      if (onComplete) onComplete();
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        handleDismiss();
      },
    });

    // Animate background ambient glow
    tl.fromTo(
      orbRef.current,
      { scale: 0.7, opacity: 0 },
      { scale: 1.25, opacity: 0.85, duration: 1.2, ease: 'power2.out' }
    );

    // Stagger letter reveals
    const letters = textRef.current ? textRef.current.querySelectorAll('.intro-char') : [];
    tl.fromTo(
      letters,
      { opacity: 0, y: 35, rotateX: -35 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        stagger: 0.04,
        duration: 0.8,
        ease: 'power3.out',
      },
      '-=0.8'
    );

    // Subtitle reveal
    tl.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
      '-=0.3'
    );

    // Hold moment for cinematic elegance (~750ms)
    tl.to({}, { duration: 0.75 });

    // Exit transition
    tl.to(containerRef.current, {
      opacity: 0,
      scale: 1.02,
      duration: 0.7,
      ease: 'power3.inOut',
    });

    return () => {
      tl.kill();
    };
  }, []);

  const handleDismiss = () => {
    if (isDismissed) return;
    setIsDismissed(true);

    if (containerRef.current) {
      gsap.to(containerRef.current, {
        opacity: 0,
        duration: 0.4,
        ease: 'power2.inOut',
        onComplete: () => {
          if (onComplete) onComplete();
        },
      });
    } else if (onComplete) {
      onComplete();
    }
  };

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
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 1.5rem',
        overflow: 'hidden',
      }}
      role="dialog"
      aria-label="Loading cinematic experience"
      aria-modal="true"
    >
      {/* Background soft ambient blur */}
      <div
        ref={orbRef}
        style={{
          position: 'absolute',
          width: '520px',
          height: '520px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(217, 181, 174, 0.45) 0%, rgba(240, 228, 223, 0.25) 50%, transparent 75%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
        }}
      />

      {/* Brand Title Wordmark */}
      <div
        ref={textRef}
        style={{
          position: 'relative',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 'clamp(0.6rem, 1.5vw, 1.2rem)',
          marginBottom: '1.25rem',
          perspective: '600px',
          textAlign: 'center',
        }}
      >
        <span style={{ display: 'inline-flex', whiteSpace: 'nowrap' }}>
          {wordOne.map((char, idx) => (
            <span
              key={idx}
              className="intro-char"
              style={{
                display: 'inline-block',
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.4rem, 6vw, 4.8rem)',
                fontWeight: 300,
                color: 'var(--color-deep-espresso)',
                letterSpacing: char === ' ' ? '0.35em' : '0.015em',
                lineHeight: 1.1,
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </span>

        <span style={{ display: 'inline-flex', whiteSpace: 'nowrap' }}>
          {wordTwo.map((char, idx) => (
            <span
              key={idx}
              className="intro-char"
              style={{
                display: 'inline-block',
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.4rem, 6vw, 4.8rem)',
                fontWeight: 300,
                color: 'var(--color-deep-espresso)',
                letterSpacing: '0.015em',
                lineHeight: 1.1,
              }}
            >
              {char}
            </span>
          ))}
        </span>
      </div>

      {/* Subtitle / Curated Tag */}
      <div
        ref={subtitleRef}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(0.65rem, 1vw, 0.75rem)',
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: 'var(--color-muted-rose)',
          marginBottom: '2.5rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        <span>Soft Luxury</span>
        <span style={{ opacity: 0.5 }}>•</span>
        <span>Bespoke Artistry</span>
        <span style={{ opacity: 0.5 }}>•</span>
        <span>CAVENTRA</span>
      </div>

      {/* Accessible Skip Button */}
      <button
        onClick={handleDismiss}
        className="btn-ghost"
        style={{
          position: 'relative',
          background: 'none',
          border: '1px solid var(--color-border-subtle)',
          borderRadius: 'var(--radius-pill)',
          padding: '0.55rem 1.6rem',
          fontFamily: 'var(--font-body)',
          fontSize: '0.72rem',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'var(--color-espresso-60)',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
        }}
        aria-label="Skip entrance animation"
      >
        Skip Intro
      </button>
    </div>
  );
}
