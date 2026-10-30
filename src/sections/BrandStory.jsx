import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { siteContent } from '../config/siteContent';
import SectionHeader from '../components/SectionHeader';

gsap.registerPlugin(ScrollTrigger);

export default function BrandStory() {
  const sectionRef = useRef(null);
  const imageCardRef = useRef(null);
  const textColRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Parallax scroll on the editorial image
      gsap.fromTo(
        imageCardRef.current,
        { y: 60, opacity: 0.8 },
        {
          y: -40,
          opacity: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: 1.2,
          },
        }
      );

      // Stagger reveal on text and stats
      gsap.fromTo(
        textColRef.current ? textColRef.current.children : [],
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 1.0,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="story"
      ref={sectionRef}
      className="section-wrapper bg-blush"
      style={{
        position: 'relative',
        borderTop: '1px solid var(--color-border-subtle)',
        borderBottom: '1px solid var(--color-border-subtle)',
      }}
    >
      <div className="container">
        
        {/* Section Header */}
        <SectionHeader
          sectionNum={siteContent.story.sectionNum}
          tag={siteContent.story.tag}
          headline="Little details."
          italicWord="Lasting impressions."
          conceptBadge="Editorial Concept"
        />

        {/* Asymmetrical 2-Column Editorial Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'clamp(2rem, 4vw, 4.5rem)',
            alignItems: 'center',
          }}
        >
          {/* Column Left: Layered Photography & Floating Glass Card */}
          <div
            style={{
              gridColumn: 'span 12',
              position: 'relative',
            }}
            className="story-image-col"
          >
            <div
              ref={imageCardRef}
              style={{
                position: 'relative',
                maxWidth: '560px',
                margin: '0 auto',
              }}
            >
              {/* Primary Editorial Image */}
              <div
                className="editorial-img-box"
                style={{
                  aspectRatio: '4 / 5',
                  borderRadius: 'var(--radius-card)',
                  boxShadow: 'var(--shadow-card)',
                  border: '1px solid var(--color-border-subtle)',
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=1200&q=85"
                  alt="High-end editorial nail art"
                  loading="lazy"
                />
              </div>

              {/* Overlapping Floating Frosted Quote Card */}
              <div
                className="glass-panel"
                style={{
                  position: 'absolute',
                  bottom: '-2rem',
                  right: '-1.5rem',
                  maxWidth: '320px',
                  padding: '1.6rem',
                  borderRadius: 'var(--radius-card)',
                  boxShadow: 'var(--shadow-floating)',
                }}
              >
                <div
                  style={{
                    fontSize: '0.65rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'var(--color-muted-rose)',
                    marginBottom: '0.5rem',
                    fontWeight: 600,
                  }}
                >
                  Quiet Luxury
                </div>
                <p
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.15rem',
                    fontStyle: 'italic',
                    color: 'var(--color-deep-espresso)',
                    lineHeight: 1.4,
                  }}
                >
                  {siteContent.story.editorialQuote}
                </p>
              </div>
            </div>
          </div>

          {/* Column Right: Narrative & Refined Editorial Stats */}
          <div
            ref={textColRef}
            style={{
              gridColumn: 'span 12',
            }}
            className="story-text-col"
          >
            <p
              className="text-body-lg"
              style={{
                marginBottom: '1.5rem',
                color: 'var(--color-deep-espresso)',
                fontWeight: 400,
              }}
            >
              {siteContent.story.leadParagraph}
            </p>

            <p
              className="text-body"
              style={{
                marginBottom: '2.5rem',
                color: 'var(--color-espresso-80)',
              }}
            >
              {siteContent.story.bodyParagraph}
            </p>

            {/* Fine Divider Line */}
            <hr className="divider-line" style={{ marginBottom: '2rem' }} />

            {/* Editorial Stats Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1.5rem',
              }}
            >
              {siteContent.story.stats.map((stat, idx) => (
                <div key={idx}>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.8rem, 2.8vw, 2.4rem)',
                      color: 'var(--color-deep-espresso)',
                      lineHeight: 1.1,
                      marginBottom: '4px',
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontSize: '0.72rem',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--color-muted-rose)',
                      fontWeight: 600,
                      marginBottom: '2px',
                    }}
                  >
                    {stat.label}
                  </div>
                  <div
                    style={{
                      fontSize: '0.75rem',
                      color: 'var(--color-espresso-60)',
                      lineHeight: 1.35,
                    }}
                  >
                    {stat.detail}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (min-width: 992px) {
          .story-image-col {
            grid-column: span 6 !important;
          }
          .story-text-col {
            grid-column: span 6 !important;
            padding-left: 2rem;
          }
        }
      `}</style>
    </section>
  );
}
