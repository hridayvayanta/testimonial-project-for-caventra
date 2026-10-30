import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { siteContent } from '../config/siteContent';
import { scrollToTarget } from '../utils/smoothScroll';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    scrollToTarget(href, -20);
  };

  return (
    <>
      <header
        className={`main-navbar ${isScrolled ? 'is-scrolled' : ''}`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 'var(--z-nav)',
          transition: 'background-color 0.4s ease, border-color 0.4s ease, padding 0.4s ease, box-shadow 0.4s ease',
          backgroundColor: isScrolled ? 'rgba(251, 248, 244, 0.92)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
          borderBottom: isScrolled ? '1px solid var(--color-border-subtle)' : '1px solid transparent',
          padding: isScrolled ? '1rem 0' : '1.8rem 0',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          {/* Brand Logo / Wordmark */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            style={{
              textDecoration: 'none',
              display: 'flex',
              flexDirection: 'column',
              lineHeight: 1,
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.35rem, 2vw, 1.85rem)',
                fontWeight: 400,
                color: 'var(--color-deep-espresso)',
                letterSpacing: '-0.01em',
              }}
            >
              Gloss Atelier
            </span>
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.62rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--color-muted-rose)',
                marginTop: '3px',
              }}
            >
              Bespoke Artistry
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav
            className="desktop-nav-links"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'clamp(1.2rem, 2.2vw, 2.4rem)',
            }}
          >
            {siteContent.navigation.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="nav-link-item"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.78rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--color-deep-espresso)',
                  textDecoration: 'none',
                  fontWeight: 400,
                  transition: 'color 0.25s ease',
                  position: 'relative',
                  padding: '4px 0',
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA & Mobile Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button
              onClick={onOpenBooking}
              className="btn-primary desktop-cta"
              style={{
                padding: '0.75rem 1.6rem',
                fontSize: '0.72rem',
                letterSpacing: '0.16em',
              }}
            >
              <span>Book Appointment</span>
              <Sparkles size={13} style={{ color: 'var(--color-dusty-rose)' }} />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-menu-trigger"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
              style={{
                background: 'transparent',
                border: '1px solid var(--color-border-subtle)',
                borderRadius: 'var(--radius-subtle)',
                width: '42px',
                height: '42px',
                display: 'none', // Handled via CSS media query below
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-deep-espresso)',
                cursor: 'pointer',
                transition: 'background-color 0.2s ease',
              }}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </header>

      {/* Full-screen Mobile Overlay */}
      {mobileMenuOpen && (
        <div
          className="mobile-menu-overlay"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 'var(--z-overlay)',
            backgroundColor: 'var(--color-porcelain)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '7rem 2rem 3rem 2rem',
            overflowY: 'auto',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
            <span className="editorial-tag" style={{ marginBottom: '0.5rem' }}>
              Navigation Menu
            </span>
            {siteContent.navigation.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2.4rem',
                  fontWeight: 300,
                  color: 'var(--color-deep-espresso)',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid var(--color-border-delicate)',
                  paddingBottom: '0.6rem',
                }}
              >
                <span>{item.label}</span>
                <ArrowUpRight size={22} style={{ color: 'var(--color-muted-rose)' }} />
              </a>
            ))}
          </div>

          <div style={{ marginTop: '3rem' }}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="btn-primary"
              style={{ width: '100%', padding: '1.1rem' }}
            >
              <span>Book Appointment</span>
              <Sparkles size={14} />
            </button>
            <div
              style={{
                marginTop: '1.2rem',
                textAlign: 'center',
                fontSize: '0.75rem',
                color: 'var(--color-espresso-60)',
                letterSpacing: '0.1em',
              }}
            >
              A Project by CAVENTRA • Ideas to Impact.
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 991px) {
          .desktop-nav-links {
            display: none !important;
          }
          .desktop-cta {
            display: none !important;
          }
          .mobile-menu-trigger {
            display: inline-flex !important;
          }
        }
        .nav-link-item:hover {
          color: var(--color-muted-rose) !important;
        }
        .nav-link-item::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background-color: var(--color-muted-rose);
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.3s ease;
        }
        .nav-link-item:hover::after {
          transform: scaleX(1);
          transform-origin: left;
        }
      `}</style>
    </>
  );
}
