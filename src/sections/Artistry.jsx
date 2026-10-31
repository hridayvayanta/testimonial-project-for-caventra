import React, { useState } from 'react';
import { Sparkles, Check, ArrowRight } from 'lucide-react';
import { siteContent } from '../config/siteContent';
import SectionHeader from '../components/SectionHeader';

export default function Artistry() {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const stages = siteContent.artistry.stages;
  const currentStage = stages[activeStageIndex];

  return (
    <section
      id="artistry"
      className="section-wrapper bg-porcelain"
      style={{ position: 'relative' }}
    >
      <div className="container">
        
        {/* Section Header */}
        <SectionHeader
          sectionNum={siteContent.artistry.sectionNum}
          tag={siteContent.artistry.tag}
          headline="Made with patience."
          italicWord="Finished with precision."
          description={siteContent.artistry.description}
          conceptBadge="Three-Stage Protocol"
        />

        {/* 3-Stage Progress Nav */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
            marginBottom: '3.5rem',
          }}
          className="process-nav-grid"
        >
          {stages.map((stg, idx) => {
            const isActive = idx === activeStageIndex;
            return (
              <button
                key={idx}
                onClick={() => setActiveStageIndex(idx)}
                style={{
                  background: 'none',
                  border: 'none',
                  borderTop: isActive ? '2px solid var(--color-deep-espresso)' : '1px solid var(--color-border-subtle)',
                  paddingTop: '1.25rem',
                  paddingLeft: 0,
                  paddingRight: 0,
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.4rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.1rem',
                      color: isActive ? 'var(--color-deep-espresso)' : 'var(--color-muted-rose)',
                      fontWeight: 500,
                    }}
                  >
                    [{stg.num}]
                  </span>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: isActive ? 'var(--color-deep-espresso)' : 'var(--color-espresso-60)',
                      fontWeight: isActive ? 600 : 400,
                    }}
                  >
                    Stage {stg.num}
                  </span>
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.1rem, 1.6vw, 1.4rem)',
                    color: isActive ? 'var(--color-deep-espresso)' : 'var(--color-espresso-60)',
                    lineHeight: 1.2,
                  }}
                >
                  {stg.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Stage Feature View */}
        <div
          key={currentStage.num}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'clamp(2rem, 4vw, 4rem)',
            alignItems: 'center',
            backgroundColor: 'var(--color-soft-blush)',
            borderRadius: 'var(--radius-card)',
            padding: 'clamp(2rem, 4vw, 3.5rem)',
            border: '1px solid var(--color-border-subtle)',
            boxShadow: 'var(--shadow-card)',
            animation: 'fadeInStage 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {/* Text narrative */}
          <div
            style={{
              gridColumn: 'span 12',
            }}
            className="stage-narrative-col"
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}>
              <span className="editorial-tag">STAGE {currentStage.num} FOCUS</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--color-muted-rose)' }}>•</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--color-espresso-60)' }}>{currentStage.subtitle}</span>
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)',
                marginBottom: '1.25rem',
                lineHeight: 1.15,
              }}
            >
              {currentStage.name}
            </h3>

            <p
              className="text-body-lg"
              style={{
                marginBottom: '2rem',
                color: 'var(--color-espresso-80)',
              }}
            >
              {currentStage.description}
            </p>

            {/* Stage precision checkpoints */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', marginBottom: '2rem' }}>
              {currentStage.points.map((pt, pIdx) => (
                <div key={pIdx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div
                    style={{
                      width: '22px',
                      height: '22px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(217, 181, 174, 0.35)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Check size={13} style={{ color: 'var(--color-deep-espresso)' }} />
                  </div>
                  <span style={{ fontSize: '0.88rem', color: 'var(--color-deep-espresso)' }}>
                    {pt}
                  </span>
                </div>
              ))}
            </div>

            {/* Quick Next Stage Switcher */}
            <button
              onClick={() => setActiveStageIndex((activeStageIndex + 1) % stages.length)}
              className="btn-link"
              style={{ fontSize: '0.72rem', letterSpacing: '0.15em' }}
            >
              <span>Explore Next Phase ({stages[(activeStageIndex + 1) % stages.length].name})</span>
              <ArrowRight size={13} />
            </button>
          </div>

          {/* Atmospheric Imagery */}
          <div
            style={{
              gridColumn: 'span 12',
            }}
            className="stage-visual-col"
          >
            <div
              className="editorial-img-box"
              style={{
                borderRadius: 'var(--radius-card)',
                aspectRatio: '16 / 11',
                boxShadow: 'var(--shadow-floating)',
                border: '1px solid var(--color-border-subtle)',
              }}
            >
              <img
                src={currentStage.image || 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1200&q=85'}
                alt={currentStage.name}
                loading="lazy"
              />
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes fadeInStage {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (min-width: 992px) {
          .stage-narrative-col {
            grid-column: span 6 !important;
          }
          .stage-visual-col {
            grid-column: span 6 !important;
          }
        }
        @media (max-width: 768px) {
          .process-nav-grid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
}
