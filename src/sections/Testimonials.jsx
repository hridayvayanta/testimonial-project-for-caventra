import React, { useState } from 'react';
import { MessageSquare, Sparkles, ChevronLeft, ChevronRight, ShieldCheck } from 'lucide-react';
import { siteContent } from '../config/siteContent';
import SectionHeader from '../components/SectionHeader';

export default function Testimonials() {
  const { testimonials } = siteContent;
  const [activeIndex, setActiveIndex] = useState(0);

  const highlights = testimonials.sampleEditorialHighlights;
  const currentItem = highlights[activeIndex];

  const handlePrev = () => {
    setActiveIndex((activeIndex - 1 + highlights.length) % highlights.length);
  };

  const handleNext = () => {
    setActiveIndex((activeIndex + 1) % highlights.length);
  };

  return (
    <section
      id="experience"
      className="section-wrapper bg-porcelain"
      style={{ position: 'relative' }}
    >
      <div className="container">
        
        {/* Section Header */}
        <SectionHeader
          sectionNum={testimonials.sectionNum}
          tag={testimonials.tag}
          headline="An experience designed"
          italicWord="around you."
          description={testimonials.subtitle}
          align="center"
          conceptBadge="Demonstration Feedback"
        />

        {/* Tasteful Client Feedback Feature Card */}
        <div
          className="container-narrow"
          style={{
            position: 'relative',
            backgroundColor: 'var(--color-soft-blush)',
            borderRadius: 'var(--radius-card)',
            padding: 'clamp(2.5rem, 5vw, 4.5rem)',
            border: '1px solid var(--color-border-subtle)',
            boxShadow: 'var(--shadow-card)',
            textAlign: 'center',
          }}
        >
          {/* Subtle Ambient Quote Mark */}
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '5rem',
              lineHeight: 0.8,
              color: 'var(--color-dusty-rose)',
              opacity: 0.6,
              marginBottom: '1rem',
              userSelect: 'none',
            }}
          >
            “
          </div>

          {/* Testimonial Quote */}
          <div key={activeIndex} style={{ animation: 'fadeQuote 0.5s ease' }}>
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.35rem, 2.5vw, 2.1rem)',
                fontWeight: 300,
                fontStyle: 'italic',
                color: 'var(--color-deep-espresso)',
                lineHeight: 1.4,
                marginBottom: '2rem',
                maxWidth: '780px',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              {currentItem.text}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
              <div
                style={{
                  fontSize: '0.78rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--color-deep-espresso)',
                  fontWeight: 600,
                }}
              >
                {currentItem.client}
              </div>
              <div
                style={{
                  fontSize: '0.72rem',
                  color: 'var(--color-muted-rose)',
                  letterSpacing: '0.1em',
                }}
              >
                {currentItem.occasion}
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              marginTop: '2.5rem',
            }}
          >
            <button
              onClick={handlePrev}
              aria-label="Previous quote"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                border: '1px solid var(--color-border-subtle)',
                background: '#FFFFFF',
                color: 'var(--color-deep-espresso)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              <ChevronLeft size={18} />
            </button>

            <div style={{ display: 'flex', gap: '6px' }}>
              {highlights.map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: i === activeIndex ? '20px' : '6px',
                    height: '6px',
                    borderRadius: '3px',
                    backgroundColor: i === activeIndex ? 'var(--color-deep-espresso)' : 'var(--color-border-subtle)',
                    transition: 'all 0.3s ease',
                  }}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              aria-label="Next quote"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                border: '1px solid var(--color-border-subtle)',
                background: '#FFFFFF',
                color: 'var(--color-deep-espresso)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Mandatory Ethics / Verification Notice (No Fake Reviews Rule) */}
          <div
            style={{
              marginTop: '3rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid var(--color-border-delicate)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              fontSize: '0.75rem',
              color: 'var(--color-espresso-60)',
              maxWidth: '620px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <ShieldCheck size={16} style={{ color: 'var(--color-muted-rose)', flexShrink: 0 }} />
            <span>
              <strong>Authenticity Commitment:</strong> {testimonials.noticeText}
            </span>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes fadeQuote {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
