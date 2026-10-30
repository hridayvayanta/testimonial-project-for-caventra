import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export default function ImageLightbox({ item, items = [], onClose, onSelectIndex }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && items.length > 0) handleNext();
      if (e.key === 'ArrowLeft' && items.length > 0) handlePrev();
    };

    if (item) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [item, items]);

  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);

  const handlePrev = () => {
    if (items.length <= 1) return;
    const prevIdx = (currentIndex - 1 + items.length) % items.length;
    onSelectIndex(prevIdx);
  };

  const handleNext = () => {
    if (items.length <= 1) return;
    const nextIdx = (currentIndex + 1) % items.length;
    onSelectIndex(nextIdx);
  };

  return (
    <div
      className="lightbox-overlay"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 'var(--z-modal)',
        backgroundColor: 'rgba(40, 32, 29, 0.92)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(1rem, 3vw, 2.5rem)',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Image view modal"
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        aria-label="Close modal"
        style={{
          position: 'absolute',
          top: '1.5rem',
          right: '1.5rem',
          background: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          color: '#FFFFFF',
          borderRadius: '50%',
          width: '42px',
          height: '42px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 10,
          transition: 'all 0.2s',
        }}
      >
        <X size={20} />
      </button>

      {/* Prev Navigation Button */}
      {items.length > 1 && (
        <button
          onClick={handlePrev}
          aria-label="Previous image"
          style={{
            position: 'absolute',
            left: '1.5rem',
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: '#FFFFFF',
            borderRadius: '50%',
            width: '48px',
            height: '48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10,
            transition: 'all 0.2s',
          }}
        >
          <ChevronLeft size={24} />
        </button>
      )}

      {/* Next Navigation Button */}
      {items.length > 1 && (
        <button
          onClick={handleNext}
          aria-label="Next image"
          style={{
            position: 'absolute',
            right: '1.5rem',
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: '#FFFFFF',
            borderRadius: '50%',
            width: '48px',
            height: '48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10,
            transition: 'all 0.2s',
          }}
        >
          <ChevronRight size={24} />
        </button>
      )}

      {/* Modal Content Box */}
      <div
        style={{
          maxWidth: '1000px',
          width: '100%',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            position: 'relative',
            maxHeight: '75vh',
            overflow: 'hidden',
            borderRadius: 'var(--radius-card)',
            boxShadow: '0 25px 60px -10px rgba(0,0,0,0.6)',
          }}
        >
          <img
            src={item.image}
            alt={item.title}
            style={{
              maxHeight: '75vh',
              maxWidth: '100%',
              objectFit: 'contain',
              display: 'block',
            }}
          />

          {/* Discreet Concept watermark pill */}
          <div
            style={{
              position: 'absolute',
              bottom: '12px',
              left: '12px',
              padding: '4px 10px',
              background: 'rgba(40, 32, 29, 0.75)',
              backdropFilter: 'blur(8px)',
              borderRadius: '999px',
              fontSize: '0.65rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--color-dusty-rose)',
              border: '1px solid rgba(217, 181, 174, 0.3)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <Sparkles size={11} />
            <span>Editorial Concept Portfolio</span>
          </div>
        </div>

        {/* Caption & Metadata */}
        <div
          style={{
            marginTop: '1.25rem',
            textAlign: 'center',
            color: '#FFFFFF',
            maxWidth: '600px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '4px' }}>
            <span style={{ fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-dusty-rose)' }}>
              {item.category}
            </span>
            <span style={{ opacity: 0.4 }}>•</span>
            <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.6)' }}>
              {currentIndex + 1} of {items.length}
            </span>
          </div>
          <h4
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.6rem',
              fontWeight: 400,
              color: '#FFFFFF',
              marginBottom: '4px',
            }}
          >
            {item.title}
          </h4>
          {item.caption && (
            <p style={{ fontSize: '0.88rem', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.5 }}>
              {item.caption}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
