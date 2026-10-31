import React, { useState } from 'react';
import { Eye, Sparkles } from 'lucide-react';
import { siteContent } from '../config/siteContent';
import SectionHeader from '../components/SectionHeader';

export default function Gallery({ onSelectImage }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const items = siteContent.gallery.items;

  const categories = ['All', ...new Set(items.map((i) => i.category))];

  const filteredItems = activeFilter === 'All'
    ? items
    : items.filter((i) => i.category === activeFilter);

  return (
    <section
      id="gallery"
      className="section-wrapper bg-blush"
      style={{
        borderTop: '1px solid var(--color-border-subtle)',
        borderBottom: '1px solid var(--color-border-subtle)',
      }}
    >
      <div className="container">
        
        {/* Section Header */}
        <SectionHeader
          sectionNum={siteContent.gallery.sectionNum}
          tag={siteContent.gallery.tag}
          headline="A canvas at"
          italicWord="your fingertips."
          description={siteContent.gallery.description}
          conceptBadge="Portfolio Preview"
        />

        {/* Filter Navigation */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '3rem',
            flexWrap: 'wrap',
          }}
        >
          {categories.map((cat, idx) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={idx}
                onClick={() => setActiveFilter(cat)}
                style={{
                  background: 'none',
                  border: isActive ? '1px solid var(--color-deep-espresso)' : '1px solid var(--color-border-subtle)',
                  borderRadius: 'var(--radius-pill)',
                  padding: '0.45rem 1.2rem',
                  fontSize: '0.72rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  fontWeight: isActive ? 500 : 400,
                  backgroundColor: isActive ? 'var(--color-deep-espresso)' : 'rgba(255,255,255,0.6)',
                  color: isActive ? 'var(--color-porcelain)' : 'var(--color-deep-espresso)',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Asymmetrical Masonry Editorial Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'clamp(1.5rem, 2.5vw, 2.5rem)',
          }}
        >
          {filteredItems.map((item, idx) => {
            // Asymmetric layout span classes
            let colSpan = 'span 6';
            let aspectRatio = '4 / 5';

            if (idx === 0) {
              colSpan = 'span 7';
              aspectRatio = '16 / 11';
            } else if (idx === 1) {
              colSpan = 'span 5';
              aspectRatio = '3 / 4';
            } else if (idx === 2) {
              colSpan = 'span 4';
              aspectRatio = '3 / 4';
            } else if (idx === 3) {
              colSpan = 'span 4';
              aspectRatio = '1 / 1';
            } else if (idx === 4) {
              colSpan = 'span 4';
              aspectRatio = '3 / 4';
            } else if (idx === 5) {
              colSpan = 'span 12';
              aspectRatio = '21 / 9';
            }

            return (
              <div
                key={item.id}
                className={`gallery-card-item gallery-span-${idx}`}
                style={{
                  gridColumn: colSpan,
                  position: 'relative',
                  cursor: 'pointer',
                }}
                onClick={() => onSelectImage(item)}
              >
                <div
                  className="editorial-img-box"
                  style={{
                    borderRadius: 'var(--radius-card)',
                    aspectRatio: aspectRatio,
                    boxShadow: 'var(--shadow-card)',
                    border: '1px solid var(--color-border-subtle)',
                    position: 'relative',
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                  />

                  {/* Editorial Hover Overlay */}
                  <div
                    className="gallery-hover-overlay"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundColor: 'rgba(65, 53, 49, 0.65)',
                      backdropFilter: 'blur(4px)',
                      WebkitBackdropFilter: 'blur(4px)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      padding: 'clamp(1.2rem, 2.5vw, 2rem)',
                      opacity: 0,
                      transition: 'opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                      color: '#FFFFFF',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span
                        style={{
                          fontSize: '0.68rem',
                          letterSpacing: '0.2em',
                          textTransform: 'uppercase',
                          color: 'var(--color-dusty-rose)',
                        }}
                      >
                        {item.category}
                      </span>
                      <div
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '50%',
                          backgroundColor: 'rgba(255,255,255,0.2)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Eye size={16} />
                      </div>
                    </div>

                    <div>
                      <h4
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: 'clamp(1.2rem, 2vw, 1.6rem)',
                          color: '#FFFFFF',
                          marginBottom: '6px',
                        }}
                      >
                        {item.title}
                      </h4>
                      <p
                        style={{
                          fontSize: '0.82rem',
                          color: 'rgba(255, 255, 255, 0.8)',
                          lineHeight: 1.4,
                        }}
                      >
                        {item.caption}
                      </p>
                    </div>
                  </div>

                  {/* Concept Marker in bottom corner */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '8px',
                      right: '8px',
                      padding: '3px 8px',
                      backgroundColor: 'rgba(251, 248, 244, 0.85)',
                      borderRadius: 'var(--radius-pill)',
                      fontSize: '0.62rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--color-deep-espresso)',
                      fontWeight: 600,
                      backdropFilter: 'blur(4px)',
                    }}
                  >
                    Concept Preview
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        .gallery-card-item:hover .gallery-hover-overlay {
          opacity: 1 !important;
        }
        @media (max-width: 900px) {
          .gallery-card-item {
            grid-column: span 12 !important;
          }
          .gallery-hover-overlay {
            opacity: 1 !important;
            background: linear-gradient(180deg, transparent 40%, rgba(40, 32, 29, 0.85) 100%) !important;
            backdrop-filter: none !important;
          }
        }
      `}</style>
    </section>
  );
}
