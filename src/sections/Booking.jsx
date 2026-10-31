import React from 'react';
import { Sparkles, Calendar, MessageCircle, ArrowUpRight } from 'lucide-react';
import { siteContent } from '../config/siteContent';

export default function Booking({ onOpenBooking }) {
  const { booking } = siteContent;

  return (
    <section
      id="booking"
      className="section-wrapper bg-blush"
      style={{
        position: 'relative',
        paddingTop: 'clamp(6rem, 12vw, 11rem)',
        paddingBottom: 'clamp(6rem, 12vw, 11rem)',
        borderTop: '1px solid var(--color-border-subtle)',
        overflow: 'hidden',
        textAlign: 'center',
      }}
    >
      {/* Background soft ambient radial elements */}
      <div
        className="ambient-glow-blush"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '750px',
          height: '750px',
          opacity: 0.65,
        }}
      />

      <div className="container-narrow" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Editorial Sub-label */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '1.5rem',
          }}
        >
          <span className="section-number">[{booking.sectionNum}]</span>
          <span className="editorial-tag">{booking.tag}</span>
        </div>

        {/* Oversized Headline */}
        <h2
          className="text-hero"
          style={{
            marginBottom: '1.75rem',
            lineHeight: 1.02,
          }}
        >
          Ready for your next <br />
          <span className="text-hero-italic">signature look?</span>
        </h2>

        {/* Supporting Copy */}
        <p
          className="text-body-lg"
          style={{
            maxWidth: '580px',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: '3rem',
            color: 'var(--color-espresso-80)',
          }}
        >
          {booking.subCopy}
        </p>

        {/* Primary Booking CTA */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.25rem',
          }}
        >
          <button
            onClick={onOpenBooking}
            className="btn-primary"
            style={{
              padding: '1.35rem 3.5rem',
              fontSize: '0.82rem',
              letterSpacing: '0.22em',
              boxShadow: 'var(--shadow-floating)',
            }}
          >
            <Sparkles size={16} style={{ color: 'var(--color-dusty-rose)' }} />
            <span>{booking.ctaButton}</span>
            <ArrowUpRight size={16} />
          </button>

          <span
            style={{
              fontSize: '0.75rem',
              color: 'var(--color-espresso-60)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          >
            By Private Appointment Only • Schedule Confirmed Directly
          </span>
        </div>

      </div>
    </section>
  );
}
