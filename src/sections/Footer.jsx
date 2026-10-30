import React from 'react';
import { ArrowUp, Instagram, Sparkles, ExternalLink } from 'lucide-react';
import { siteContent } from '../config/siteContent';
import { scrollToTarget } from '../utils/smoothScroll';

export default function Footer({ onOpenBooking }) {
  const { brand, contact, navigation } = siteContent;

  const scrollToTop = () => {
    scrollToTarget('#hero', 0);
  };

  return (
    <footer
      style={{
        backgroundColor: 'var(--color-porcelain)',
        borderTop: '1px solid var(--color-border-subtle)',
        paddingTop: '5rem',
        paddingBottom: '3rem',
        position: 'relative',
        color: 'var(--color-deep-espresso)',
      }}
    >
      <div className="container">
        
        {/* Top Tier: Brand Editorial Statement & Back to Top */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '2.5rem',
            marginBottom: '4rem',
          }}
        >
          <div style={{ maxWidth: '480px' }}>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2.6rem',
                fontWeight: 300,
                marginBottom: '0.75rem',
                letterSpacing: '-0.02em',
              }}
            >
              Nails by Sailee
            </h3>
            <p className="text-body" style={{ color: 'var(--color-espresso-80)', lineHeight: 1.6 }}>
              {brand.studioTitle}. Dedicated to quiet luxury, structural nail architecture, and unhurried fine craftsmanship.
            </p>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="btn-secondary"
            style={{
              padding: '0.8rem 1.4rem',
              fontSize: '0.7rem',
              letterSpacing: '0.15em',
            }}
          >
            <span>Back to Top</span>
            <ArrowUp size={14} />
          </button>
        </div>

        {/* Middle Tier: 4 Columns (Navigation, Studio Info, Hours, CAVENTRA Credits) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'clamp(2rem, 3vw, 3.5rem)',
            marginBottom: '4rem',
          }}
        >
          {/* Col 1: Direct Links */}
          <div style={{ gridColumn: 'span 12' }} className="footer-col-nav">
            <div style={{ fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-muted-rose)', fontWeight: 600, marginBottom: '1.25rem' }}>
              Directory
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {navigation.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToTarget(item.href, -20);
                  }}
                  className="nav-link-item"
                  style={{
                    fontSize: '0.88rem',
                    color: 'var(--color-deep-espresso)',
                    textDecoration: 'none',
                    display: 'inline-block',
                    width: 'fit-content',
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Studio Location */}
          <div style={{ gridColumn: 'span 12' }} className="footer-col-studio">
            <div style={{ fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-muted-rose)', fontWeight: 600, marginBottom: '1.25rem' }}>
              Studio Sanctuary
            </div>
            <p className="text-body" style={{ marginBottom: '0.5rem' }}>
              {contact.location}
            </p>
            <p className="text-body" style={{ color: 'var(--color-espresso-60)', fontSize: '0.85rem' }}>
              {contact.locationCity}
            </p>
            <div style={{ marginTop: '1rem' }}>
              <span className="concept-badge">
                <span className="concept-badge-dot" />
                Location Configurable
              </span>
            </div>
          </div>

          {/* Col 3: Hours & Social */}
          <div style={{ gridColumn: 'span 12' }} className="footer-col-hours">
            <div style={{ fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-muted-rose)', fontWeight: 600, marginBottom: '1.25rem' }}>
              Private Hours
            </div>
            <p className="text-body" style={{ marginBottom: '1rem', lineHeight: 1.5 }}>
              {contact.hours}
            </p>
            <a
              href={contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.82rem',
                color: 'var(--color-deep-espresso)',
                textDecoration: 'none',
                fontWeight: 500,
              }}
            >
              <Instagram size={15} style={{ color: 'var(--color-muted-rose)' }} />
              <span>{contact.instagramHandle}</span>
              <ExternalLink size={12} style={{ opacity: 0.5 }} />
            </a>
          </div>

          {/* Col 4: Project By CAVENTRA */}
          <div style={{ gridColumn: 'span 12' }} className="footer-col-caventra">
            <div style={{ fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-muted-rose)', fontWeight: 600, marginBottom: '1.25rem' }}>
              Creative Direction
            </div>
            <div
              style={{
                padding: '1.25rem',
                backgroundColor: 'var(--color-soft-blush)',
                borderRadius: 'var(--radius-card)',
                border: '1px solid var(--color-border-subtle)',
              }}
            >
              <div style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '2px' }}>
                CAVENTRA
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-muted-rose)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
                {brand.caventraTagline}
              </div>
              <p style={{ fontSize: '0.78rem', color: 'var(--color-espresso-80)', lineHeight: 1.45 }}>
                Bespoke digital architecture crafted for exceptional client brands.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Tier: Copyright & Concept Transparency Note */}
        <div
          style={{
            borderTop: '1px solid var(--color-border-subtle)',
            paddingTop: '2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem',
            fontSize: '0.75rem',
            color: 'var(--color-espresso-60)',
          }}
        >
          <div>
            © {brand.year} Nails by Sailee. Concept &amp; Production by CAVENTRA. All rights reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="concept-badge-dot" />
            <span>Editorial Concept Preview • Ready for Production Onboarding</span>
          </div>
        </div>

      </div>

      <style>{`
        @media (min-width: 768px) {
          .footer-col-nav { grid-column: span 3 !important; }
          .footer-col-studio { grid-column: span 3 !important; }
          .footer-col-hours { grid-column: span 3 !important; }
          .footer-col-caventra { grid-column: span 3 !important; }
        }
      `}</style>
    </footer>
  );
}
