import React, { useState } from 'react';
import { Sparkles, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { siteContent } from '../config/siteContent';
import SectionHeader from '../components/SectionHeader';

export default function Services({ onOpenBooking }) {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const categories = siteContent.services.categories;
  const currentCategory = categories[activeCategoryIndex];

  return (
    <section
      id="services"
      className="section-wrapper bg-porcelain"
      style={{ position: 'relative' }}
    >
      <div className="container">
        
        {/* Section Header */}
        <SectionHeader
          sectionNum={siteContent.services.sectionNum}
          tag={siteContent.services.tag}
          headline="The art of"
          italicWord="self-expression."
          description={siteContent.services.description}
          conceptBadge="Demonstration Menu"
        />

        {/* Category Navigation Tabs */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            borderBottom: '1px solid var(--color-border-subtle)',
            paddingBottom: '1.25rem',
            marginBottom: '3rem',
            overflowX: 'auto',
            scrollbarWidth: 'none',
          }}
        >
          {categories.map((cat, idx) => {
            const isActive = idx === activeCategoryIndex;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategoryIndex(idx)}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: '0.6rem 1.4rem',
                  borderRadius: 'var(--radius-pill)',
                  backgroundColor: isActive ? 'var(--color-deep-espresso)' : 'transparent',
                  color: isActive ? 'var(--color-porcelain)' : 'var(--color-deep-espresso)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.78rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  fontWeight: isActive ? 500 : 400,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  whiteSpace: 'nowrap',
                }}
              >
                {cat.title}
              </button>
            );
          })}
        </div>

        {/* Main Service Presentation Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'clamp(2rem, 3.5vw, 4rem)',
            alignItems: 'start',
          }}
        >
          {/* Left Column: Atmospheric Category Image with Tilt & Concept badge */}
          <div
            style={{
              gridColumn: 'span 12',
              position: 'relative',
            }}
            className="services-media-col"
          >
            <div
              className="editorial-img-box service-hero-img-wrap"
              style={{
                borderRadius: 'var(--radius-card)',
                aspectRatio: '3 / 4',
                maxHeight: '620px',
                boxShadow: 'var(--shadow-card)',
                border: '1px solid var(--color-border-subtle)',
              }}
            >
              <img
                src={currentCategory.image}
                alt={currentCategory.title}
                key={currentCategory.id}
                style={{
                  animation: 'fadeIn 0.6s ease',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, transparent 50%, rgba(40, 32, 29, 0.75) 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '2rem',
                  color: '#FFFFFF',
                }}
              >
                <div style={{ fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-dusty-rose)', marginBottom: '4px' }}>
                  Service Category
                </div>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: '#FFFFFF', marginBottom: '0.5rem' }}>
                  {currentCategory.title}
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.4 }}>
                  {currentCategory.subtitle}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Treatment Offerings */}
          <div
            style={{
              gridColumn: 'span 12',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.75rem',
            }}
            className="services-list-col"
          >
            {currentCategory.treatments.map((treatment, idx) => (
              <div
                key={idx}
                className="treatment-card"
                style={{
                  padding: 'clamp(1.5rem, 2.5vw, 2.2rem)',
                  backgroundColor: 'var(--color-soft-blush)',
                  borderRadius: 'var(--radius-card)',
                  border: '1px solid var(--color-border-subtle)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
                  position: 'relative',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '0.75rem' }}>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.35rem, 2vw, 1.75rem)',
                      fontWeight: 400,
                      color: 'var(--color-deep-espresso)',
                    }}
                  >
                    {treatment.name}
                  </h3>
                  
                  {/* Duration & Price Badge */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px',
                        fontSize: '0.72rem',
                        color: 'var(--color-espresso-60)',
                        backgroundColor: 'rgba(255,255,255,0.6)',
                        padding: '4px 10px',
                        borderRadius: 'var(--radius-pill)',
                        border: '1px solid var(--color-border-delicate)',
                      }}
                    >
                      <Clock size={12} />
                      {treatment.duration}
                    </span>
                    <span
                      style={{
                        fontSize: '0.72rem',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: 'var(--color-muted-rose)',
                        backgroundColor: 'rgba(255,255,255,0.6)',
                        padding: '4px 10px',
                        borderRadius: 'var(--radius-pill)',
                        fontWeight: 600,
                        border: '1px solid var(--color-border-delicate)',
                      }}
                    >
                      {treatment.price}
                    </span>
                  </div>
                </div>

                <p
                  className="text-body"
                  style={{
                    color: 'var(--color-espresso-80)',
                    marginBottom: '1.25rem',
                  }}
                >
                  {treatment.description}
                </p>

                {/* Specific treatment highlights */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.75rem',
                    marginBottom: '1.5rem',
                  }}
                >
                  {treatment.features.map((feat, fIdx) => (
                    <div
                      key={fIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '0.78rem',
                        color: 'var(--color-deep-espresso)',
                      }}
                    >
                      <CheckCircle2 size={13} style={{ color: 'var(--color-muted-rose)' }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Enquiry Action Button */}
                <button
                  onClick={onOpenBooking}
                  className="btn-link"
                  style={{
                    fontSize: '0.72rem',
                    letterSpacing: '0.15em',
                  }}
                >
                  <span>Enquire About This Service</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            ))}
          </div>

        </div>

      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(1.02); }
          to { opacity: 1; transform: scale(1); }
        }
        @media (min-width: 992px) {
          .services-media-col {
            grid-column: span 5 !important;
            position: sticky !important;
            top: 6rem !important;
          }
          .services-list-col {
            grid-column: span 7 !important;
          }
        }
        .treatment-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-card);
          border-color: var(--color-muted-rose);
        }
      `}</style>
    </section>
  );
}
