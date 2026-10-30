import React from 'react';
import { Sparkles, Info } from 'lucide-react';
import { siteContent } from '../config/siteContent';
import SectionHeader from '../components/SectionHeader';

export default function About({ onOpenBooking }) {
  const { about } = siteContent;

  return (
    <section
      id="about"
      className="section-wrapper bg-blush"
      style={{
        borderTop: '1px solid var(--color-border-subtle)',
        borderBottom: '1px solid var(--color-border-subtle)',
      }}
    >
      <div className="container">
        
        {/* Section Header */}
        <SectionHeader
          sectionNum={about.sectionNum}
          tag={about.tag}
          headline="Behind every detail is a"
          italicWord="personal touch."
          conceptBadge="Artist Profile"
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'clamp(2rem, 5vw, 5rem)',
            alignItems: 'center',
          }}
        >
          {/* Column Left: Portrait Placeholder with Editorial Frame */}
          <div
            style={{
              gridColumn: 'span 12',
              position: 'relative',
            }}
            className="about-portrait-col"
          >
            <div
              style={{
                position: 'relative',
                maxWidth: '480px',
                margin: '0 auto',
              }}
            >
              <div
                className="editorial-img-box"
                style={{
                  borderRadius: 'var(--radius-card)',
                  aspectRatio: '4 / 5',
                  boxShadow: 'var(--shadow-floating)',
                  border: '1px solid var(--color-border-subtle)',
                }}
              >
                <img
                  src={about.portraitImage}
                  alt="Sailee — Bespoke Nail Artist"
                  loading="lazy"
                />

                {/* Subtle Concept Placeholder overlay banner */}
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    padding: '4px 10px',
                    backgroundColor: 'rgba(251, 248, 244, 0.9)',
                    backdropFilter: 'blur(8px)',
                    borderRadius: 'var(--radius-pill)',
                    fontSize: '0.65rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--color-deep-espresso)',
                    fontWeight: 600,
                    border: '1px solid var(--color-border-delicate)',
                  }}
                >
                  Temporary Concept Portrait
                </div>
              </div>

              {/* Decorative Corner Offset Accent */}
              <div
                style={{
                  position: 'absolute',
                  top: '-15px',
                  right: '-15px',
                  width: '90px',
                  height: '90px',
                  borderTop: '2px solid var(--color-dusty-rose)',
                  borderRight: '2px solid var(--color-dusty-rose)',
                  pointerEvents: 'none',
                  zIndex: 0,
                }}
              />
            </div>
          </div>

          {/* Column Right: Biography & Aesthetic Credo */}
          <div
            style={{
              gridColumn: 'span 12',
            }}
            className="about-bio-col"
          >
            <div style={{ marginBottom: '1.25rem' }}>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                  lineHeight: 1.1,
                  color: 'var(--color-deep-espresso)',
                  marginBottom: '4px',
                }}
              >
                {about.name}
              </div>
              <div
                style={{
                  fontSize: '0.78rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--color-muted-rose)',
                  fontWeight: 600,
                }}
              >
                {about.title}
              </div>
            </div>

            {/* Editable Bio Paragraphs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
              {about.biography.map((p, pIdx) => (
                <p key={pIdx} className="text-body-lg" style={{ color: 'var(--color-espresso-80)' }}>
                  {p}
                </p>
              ))}
            </div>

            {/* Editorial Quote */}
            <blockquote className="editorial-quote">
              {about.quote}
            </blockquote>

            {/* Clarification Callout for Client Handoff */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '0.8rem 1.1rem',
                backgroundColor: 'rgba(251, 248, 244, 0.75)',
                borderRadius: 'var(--radius-subtle)',
                border: '1px solid var(--color-border-subtle)',
                marginTop: '1.5rem',
                fontSize: '0.75rem',
                color: 'var(--color-espresso-60)',
              }}
            >
              <Info size={15} style={{ color: 'var(--color-muted-rose)', flexShrink: 0 }} />
              <span>
                <strong>Profile Handoff Note:</strong> Portrait and bio text are prepared in <code>siteContent.js</code> for instant replacement upon client verification.
              </span>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (min-width: 992px) {
          .about-portrait-col {
            grid-column: span 5 !important;
          }
          .about-bio-col {
            grid-column: span 7 !important;
            padding-left: 2rem;
          }
        }
      `}</style>
    </section>
  );
}
