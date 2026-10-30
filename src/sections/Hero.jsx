import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowDown, Sparkles, ChevronRight, CheckCircle2 } from 'lucide-react';
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
  const photoPortalRef = useRef(null);

  // High-Resolution Editorial Macro Manicure Photography
  const heroManicureImage = "https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=1600&q=88";

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.1 });

      if (photoPortalRef.current) {
        tl.fromTo(
          photoPortalRef.current,
          { scale: 1.05, opacity: 0.85 },
          { scale: 1, opacity: 1, duration: 1.1, ease: 'power2.out' }
        );
      }

      if (editorialTagRef.current) {
        tl.fromTo(
          editorialTagRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
          '-=0.8'
        );
      }

      const lines = headlineRef.current ? headlineRef.current.querySelectorAll('.hero-headline-line') : [];
      if (lines.length > 0) {
        tl.fromTo(
          lines,
          { opacity: 0, y: 35, rotateX: -10 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            stagger: 0.12,
            duration: 0.9,
            ease: 'power3.out',
          },
          '-=0.6'
        );
      }

      if (subtextRef.current) {
        tl.fromTo(
          subtextRef.current,
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' },
          '-=0.5'
        );
      }

      if (ctaGroupRef.current && ctaGroupRef.current.children.length > 0) {
        tl.fromTo(
          ctaGroupRef.current.children,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, stagger: 0.1, duration: 0.6, ease: 'power2.out' },
          '-=0.4'
        );
      }

      if (scrollIndicatorRef.current) {
        tl.fromTo(
          scrollIndicatorRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.9, ease: 'power2.out' },
          '-=0.3'
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleExplore = (e) => {
    e.preventDefault();
    scrollToTarget('#gallery', -20);
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
        paddingTop: 'clamp(6.5rem, 11vh, 8.5rem)',
        paddingBottom: 'clamp(4rem, 8vh, 6rem)',
        overflow: 'hidden',
        backgroundColor: 'var(--color-porcelain)',
      }}
    >
      {/* 3D WebGL Canvas Layer (Nail Polish Bottle, Brush Droplet & Fluid Lacquer Ribbon) */}
      <HeroScene />

      {/* Soft Ambient Background Glows */}
      <div
        className="ambient-glow-blush"
        style={{ top: '8%', right: '8%', opacity: 0.65 }}
      />
      <div
        className="ambient-glow-rose"
        style={{ bottom: '10%', left: '-4%', opacity: 0.45 }}
      />

      {/* Main Container: 2-Column Luxury Editorial Grid */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 3,
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: 'clamp(2rem, 4vw, 4.5rem)',
          alignItems: 'center',
          minHeight: 'calc(100svh - 14rem)',
        }}
      >
        {/* Left Column: Brand Message & Typography */}
        <div
          className="hero-text-col"
          style={{
            gridColumn: 'span 12',
          }}
        >
          {/* Editorial Label & Concept Tag */}
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
            <span className="editorial-tag">HAUTE NAIL ARTISTRY</span>
            <span className="concept-badge">
              <span className="concept-badge-dot" />
              Bespoke Campaign Preview
            </span>
          </div>

          {/* Signature Editorial Headline */}
          <h1
            ref={headlineRef}
            className="text-hero"
            style={{
              marginBottom: '1.5rem',
              textWrap: 'balance',
            }}
          >
            <span className="hero-headline-line" style={{ display: 'block' }}>
              Your nails.
            </span>
            <span className="hero-headline-line" style={{ display: 'block' }}>
              <span className="text-hero-italic">Your signature.</span>
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
            Discover beautiful nail designs, thoughtful details and your next signature look. A private sanctuary dedicated to structural nail architecture and unhurried artistry.
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
              marginBottom: '2.25rem',
            }}
          >
            <a
              href="#gallery"
              onClick={handleExplore}
              className="btn-primary"
            >
              <span>Explore the Collection</span>
              <ChevronRight size={14} />
            </a>

            <button
              onClick={onOpenBooking}
              className="btn-secondary"
            >
              <Sparkles size={14} style={{ color: 'var(--color-muted-rose)' }} />
              <span>Book an Appointment</span>
            </button>
          </div>

          {/* Micro-Features Row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'clamp(1rem, 2vw, 2rem)',
              flexWrap: 'wrap',
              paddingTop: '1.25rem',
              borderTop: '1px solid var(--color-border-subtle)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', color: 'var(--color-deep-espresso)' }}>
              <CheckCircle2 size={13} style={{ color: 'var(--color-muted-rose)' }} />
              <span>Russian Dry Manicure</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', color: 'var(--color-deep-espresso)' }}>
              <CheckCircle2 size={13} style={{ color: 'var(--color-muted-rose)' }} />
              <span>Japanese Builder Gel</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', color: 'var(--color-deep-espresso)' }}>
              <CheckCircle2 size={13} style={{ color: 'var(--color-muted-rose)' }} />
              <span>Custom 3D Art & Chrome</span>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Manicured Hand Macro Photography Portal */}
        <div
          className="hero-photo-col"
          style={{
            gridColumn: 'span 12',
            position: 'relative',
          }}
        >
          <div
            ref={photoPortalRef}
            className="hero-manicure-portal"
            style={{
              position: 'relative',
              borderRadius: 'var(--radius-card)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-floating)',
              border: '1px solid var(--color-border-subtle)',
              aspectRatio: '4 / 4.6',
              maxHeight: '560px',
              backgroundColor: 'var(--color-soft-blush)',
              margin: '0 auto',
            }}
          >
            {/* The Manicured Hand Photograph */}
            <img
              src={heroManicureImage}
              alt="Luxury almond glazed nude-blush manicure on elegant hands by Nails by Sailee"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                transition: 'transform 1.2s var(--ease-editorial)',
              }}
            />

            {/* Subtle Gradient Vignette to blend with 3D elements */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, rgba(251, 248, 244, 0.05) 0%, rgba(65, 53, 49, 0.45) 100%)',
                pointerEvents: 'none',
              }}
            />

            {/* Floating Editorial Badge directly on the photography */}
            <div
              className="glass-panel"
              style={{
                position: 'absolute',
                bottom: '1.25rem',
                left: '1.25rem',
                right: '1.25rem',
                padding: '0.85rem 1.2rem',
                borderRadius: 'var(--radius-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '8px',
              }}
            >
              <div>
                <div style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-muted-rose)', fontWeight: 600 }}>
                  Signature Atelier Set
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', color: 'var(--color-deep-espresso)', fontStyle: 'italic' }}>
                  Glazed Nude Almond with Cashmere Finish
                </div>
              </div>
              <span
                style={{
                  fontSize: '0.62rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--color-deep-espresso)',
                  backgroundColor: 'rgba(255,255,255,0.7)',
                  padding: '3px 8px',
                  borderRadius: 'var(--radius-pill)',
                  fontWeight: 500,
                }}
              >
                Concept Campaign
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Scroll to Discover & CAVENTRA Signature */}
      <div
        ref={scrollIndicatorRef}
        className="hero-bottom-bar container"
        style={{
          position: 'absolute',
          bottom: '1.25rem',
          left: 0,
          right: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          pointerEvents: 'auto',
          zIndex: 4,
        }}
      >
        <a
          href="#gallery"
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
              backgroundColor: 'rgba(251, 248, 244, 0.7)',
            }}
          >
            <ArrowDown size={13} className="animate-float" />
          </div>
          <span>Scroll to Discover Nails</span>
        </a>

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

      <style>{`
        .scroll-hint-link:hover {
          color: var(--color-deep-espresso) !important;
        }
        @media (min-width: 992px) {
          .hero-text-col {
            grid-column: span 6 !important;
          }
          .hero-photo-col {
            grid-column: span 6 !important;
          }
        }
        @media (max-width: 768px) {
          .hero-photo-col {
            order: -1;
            margin-bottom: 1.5rem;
          }
          .hero-manicure-portal {
            aspect-ratio: 16 / 11 !important;
            max-height: 320px !important;
          }
          .hero-bottom-bar {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
