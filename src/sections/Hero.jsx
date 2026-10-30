import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowDown, Sparkles, ChevronRight } from 'lucide-react';
import HeroScene from '../three/HeroScene';
import { siteContent } from '../config/siteContent';
import { scrollToTarget } from '../utils/smoothScroll';

export default function Hero({ onOpenBooking }) {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const subtextRef = useRef(null);
  const ctaGroupRef = useRef(null);
  const scrollIndicatorRef = useRef(null);
  const editorialTagRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });

      // Editorial Tag entrance
      tl.fromTo(
        editorialTagRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }
      );

      // Headline split lines entrance
      const lines = headlineRef.current ? headlineRef.current.querySelectorAll('.hero-headline-line') : [];
      tl.fromTo(
        lines,
        { opacity: 0, y: 50, rotateX: -15 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          stagger: 0.15,
          duration: 1.1,
          ease: 'power3.out',
        },
        '-=0.6'
      );

      // Supporting Copy
      tl.fromTo(
        subtextRef.current,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power2.out' },
        '-=0.7'
      );

      // CTA buttons stagger
      tl.fromTo(
        ctaGroupRef.current ? ctaGroupRef.current.children : [],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.12, duration: 0.8, ease: 'power2.out' },
        '-=0.6'
      );

      // Scroll indicator fade
      tl.fromTo(
        scrollIndicatorRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.2, ease: 'power2.out' },
        '-=0.4'
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleExplore = (e) => {
    e.preventDefault();
    scrollToTarget('#story', -20);
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      style={{
        position: 'relative',
        minHeight: '100svh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 'clamp(6.5rem, 10vh, 8.5rem)',
        paddingBottom: 'clamp(4rem, 8vh, 6rem)',
        overflow: 'hidden',
        backgroundColor: 'var(--color-porcelain)',
      }}
    >
      {/* 3D WebGL Canvas Layer */}
      <HeroScene />

      {/* Ambient background blur glows */}
      <div
        className="ambient-glow-blush"
        style={{ top: '10%', right: '5%', opacity: 0.6 }}
      />
      <div
        className="ambient-glow-rose"
        style={{ bottom: '15%', left: '-5%', opacity: 0.4 }}
      />

      {/* Foreground Hero Content Container */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 2,
          pointerEvents: 'none',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '100%',
        }}
      >
        <div style={{ maxWidth: '640px', pointerEvents: 'auto' }}>
          
          {/* Editorial Tag & Concept Marker */}
          <div
            ref={editorialTagRef}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '1.25rem',
              flexWrap: 'wrap',
            }}
          >
            <span className="editorial-tag">HAUTE NAIL ARCHITECTURE</span>
            <span className="concept-badge">
              <span className="concept-badge-dot" />
              Bespoke Concept Preview
            </span>
          </div>

          {/* Signature Serif Headline */}
          <h1
            ref={headlineRef}
            className="text-hero"
            style={{
              marginBottom: '1.5rem',
              textWrap: 'balance',
            }}
          >
            <span className="hero-headline-line" style={{ display: 'block' }}>
              Beauty, in every
            </span>
            <span className="hero-headline-line" style={{ display: 'block' }}>
              <span className="text-hero-italic">detail.</span>
            </span>
          </h1>

          {/* Supporting Copy */}
          <p
            ref={subtextRef}
            className="text-body-lg"
            style={{
              maxWidth: '520px',
              marginBottom: '2.25rem',
              color: 'var(--color-espresso-80)',
              lineHeight: 1.65,
            }}
          >
            {siteContent.brand.subCopy}
          </p>

          {/* Action CTAs */}
          <div
            ref={ctaGroupRef}
            className="hero-cta-group"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.25rem',
              flexWrap: 'wrap',
            }}
          >
            <a
              href="#story"
              onClick={handleExplore}
              className="btn-primary"
            >
              <span>Explore the Artistry</span>
              <ChevronRight size={14} />
            </a>

            <button
              onClick={onOpenBooking}
              className="btn-secondary"
            >
              <Sparkles size={14} style={{ color: 'var(--color-muted-rose)' }} />
              <span>Book Appointment</span>
            </button>
          </div>

        </div>

        {/* Scroll Indicator & Caventra Tagline Signature */}
        <div
          ref={scrollIndicatorRef}
          className="hero-bottom-bar"
          style={{
            position: 'absolute',
            bottom: 'clamp(1rem, 2.5vh, 2.5rem)',
            left: 'var(--container-pad)',
            right: 'var(--container-pad)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            pointerEvents: 'auto',
          }}
        >
          {/* Scroll Down Hint */}
          <a
            href="#story"
            onClick={handleExplore}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none',
              fontFamily: 'var(--font-body)',
              fontSize: '0.68rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--color-espresso-60)',
              transition: 'color 0.2s',
            }}
            className="scroll-hint-link"
          >
            <div
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                border: '1px solid var(--color-border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ArrowDown size={13} className="animate-float" />
            </div>
            <span>Scroll to Discover</span>
          </a>

          {/* CAVENTRA Credits Pill */}
          <div
            style={{
              fontSize: '0.68rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--color-muted-rose)',
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <span>CAVENTRA</span>
            <span style={{ opacity: 0.4 }}>•</span>
            <span style={{ color: 'var(--color-espresso-60)' }}>Ideas to Impact.</span>
          </div>
        </div>

      </div>

      <style>{`
        .scroll-hint-link:hover {
          color: var(--color-deep-espresso) !important;
        }
        @media (max-width: 640px) {
          .hero-cta-group {
            flex-direction: column !important;
            align-items: stretch !important;
            width: 100% !important;
          }
          .hero-cta-group > * {
            width: 100% !important;
            justify-content: center !important;
          }
          .hero-bottom-bar {
            position: relative !important;
            bottom: auto !important;
            left: auto !important;
            right: auto !important;
            margin-top: 2.5rem !important;
            flex-direction: column !important;
            gap: 0.75rem !important;
            align-items: flex-start !important;
          }
        }
      `}</style>
    </section>
  );
}
