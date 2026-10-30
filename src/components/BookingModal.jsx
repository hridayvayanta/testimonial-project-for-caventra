import React, { useState, useEffect } from 'react';
import { X, Send, Copy, Check, Calendar, User, Sparkles, MessageSquare, Info } from 'lucide-react';
import { siteContent } from '../config/siteContent';

export default function BookingModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    service: siteContent.booking.serviceOptions[0],
    date: '',
    message: '',
  });
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Prepare encoded WhatsApp message
  const generatedMessage = `Hello Gloss Atelier,\n\nI would love to enquire about reserving a bespoke appointment at Gloss Atelier.\n\n• Name: ${formData.name || '[My Name]'}\n• Desired Service: ${formData.service}\n• Preferred Date: ${formData.date || '[Preferred Date]'}\n• Notes / Aesthetic Vision: ${formData.message || 'Natural nail health and bespoke design'}\n\nLooking forward to your consultation.`;

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(generatedMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const hasWhatsappNumber = Boolean(siteContent.contact.whatsappNumber && siteContent.contact.whatsappNumber.trim());

  const handleSendWhatsapp = (e) => {
    e.preventDefault();
    if (hasWhatsappNumber) {
      const cleanNumber = siteContent.contact.whatsappNumber.replace(/[^0-9]/g, '');
      const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(generatedMessage)}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      // In preview mode, copy message and inform
      handleCopyMessage();
    }
  };

  return (
    <div
      className="booking-modal-backdrop"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 'var(--z-modal)',
        backgroundColor: 'rgba(65, 53, 49, 0.65)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-title"
    >
      <div
        className="booking-modal-card"
        style={{
          width: '100%',
          maxWidth: '580px',
          maxHeight: '94vh',
          overflowY: 'auto',
          backgroundColor: 'var(--color-porcelain)',
          borderRadius: 'var(--radius-card)',
          border: '1px solid var(--color-border-subtle)',
          boxShadow: 'var(--shadow-floating)',
          padding: 'clamp(1.2rem, 2.5vw, 1.8rem)',
          position: 'relative',
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'none',
            border: '1px solid var(--color-border-subtle)',
            borderRadius: '50%',
            width: '30px',
            height: '30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: 'var(--color-deep-espresso)',
            transition: 'background-color 0.2s',
          }}
        >
          <X size={15} />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '0.9rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.2rem' }}>
            <span className="section-number">[07]</span>
            <span className="editorial-tag">RESERVATION ENQUIRY</span>
          </div>
          <h3 id="booking-title" className="text-h2" style={{ marginBottom: '0.2rem', fontSize: '1.6rem' }}>
            Begin Your <span className="text-hero-italic">Experience</span>
          </h3>
          <p className="text-body" style={{ color: 'var(--color-espresso-80)', fontSize: '0.8rem', lineHeight: 1.35 }}>
            {siteContent.booking.notice}
          </p>
        </div>

        {/* Enquiry Form */}
        <form onSubmit={handleSendWhatsapp} style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
          {/* Visitor Name */}
          <div>
            <label
              htmlFor="booking-name"
              style={{
                display: 'block',
                fontSize: '0.68rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--color-deep-espresso)',
                marginBottom: '0.2rem',
                fontWeight: 500,
              }}
            >
              Your Name *
            </label>
            <div style={{ position: 'relative' }}>
              <input
                id="booking-name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Eleanor Vance"
                style={{
                  width: '100%',
                  padding: '0.55rem 0.8rem 0.55rem 2.2rem',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--color-border-subtle)',
                  borderRadius: 'var(--radius-subtle)',
                  fontSize: '0.85rem',
                  color: 'var(--color-deep-espresso)',
                  outline: 'none',
                }}
              />
              <User size={14} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-muted-rose)' }} />
            </div>
          </div>

          {/* Desired Service */}
          <div>
            <label
              htmlFor="booking-service"
              style={{
                display: 'block',
                fontSize: '0.68rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--color-deep-espresso)',
                marginBottom: '0.2rem',
                fontWeight: 500,
              }}
            >
              Desired Service
            </label>
            <div style={{ position: 'relative' }}>
              <select
                id="booking-service"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.55rem 0.8rem 0.55rem 2.2rem',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--color-border-subtle)',
                  borderRadius: 'var(--radius-subtle)',
                  fontSize: '0.85rem',
                  color: 'var(--color-deep-espresso)',
                  outline: 'none',
                  appearance: 'none',
                }}
              >
                {siteContent.booking.serviceOptions.map((opt, i) => (
                  <option key={i} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              <Sparkles size={14} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-muted-rose)' }} />
            </div>
          </div>

          {/* Preferred Date */}
          <div>
            <label
              htmlFor="booking-date"
              style={{
                display: 'block',
                fontSize: '0.68rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--color-deep-espresso)',
                marginBottom: '0.2rem',
                fontWeight: 500,
              }}
            >
              Preferred Date
            </label>
            <div style={{ position: 'relative' }}>
              <input
                id="booking-date"
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.55rem 0.8rem 0.55rem 2.2rem',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--color-border-subtle)',
                  borderRadius: 'var(--radius-subtle)',
                  fontSize: '0.85rem',
                  color: 'var(--color-deep-espresso)',
                  outline: 'none',
                }}
              />
              <Calendar size={14} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-muted-rose)' }} />
            </div>
          </div>

          {/* Optional Message */}
          <div>
            <label
              htmlFor="booking-notes"
              style={{
                display: 'block',
                fontSize: '0.68rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--color-deep-espresso)',
                marginBottom: '0.2rem',
                fontWeight: 500,
              }}
            >
              Aesthetic Notes & Inspiration (Optional)
            </label>
            <div style={{ position: 'relative' }}>
              <textarea
                id="booking-notes"
                rows="2"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Specific occasion, nail condition, reference style..."
                style={{
                  width: '100%',
                  padding: '0.5rem 0.8rem 0.5rem 2.2rem',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--color-border-subtle)',
                  borderRadius: 'var(--radius-subtle)',
                  fontSize: '0.85rem',
                  color: 'var(--color-deep-espresso)',
                  outline: 'none',
                  resize: 'vertical',
                }}
              />
              <MessageSquare size={14} style={{ position: 'absolute', left: '0.75rem', top: '0.65rem', color: 'var(--color-muted-rose)' }} />
            </div>
          </div>

          {/* WhatsApp Preview Box */}
          <div
            style={{
              padding: '0.75rem',
              backgroundColor: 'var(--color-soft-blush)',
              borderRadius: 'var(--radius-subtle)',
              border: '1px solid var(--color-border-subtle)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.3rem' }}>
              <span style={{ fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-muted-rose)', fontWeight: 600 }}>
                Generated Message Preview
              </span>
              <button
                type="button"
                onClick={handleCopyMessage}
                style={{
                  background: 'none',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontSize: '0.68rem',
                  color: 'var(--color-deep-espresso)',
                  cursor: 'pointer',
                  fontWeight: 500,
                }}
              >
                {copied ? <Check size={12} style={{ color: '#2E7D32' }} /> : <Copy size={12} />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <pre
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.74rem',
                color: 'var(--color-deep-espresso)',
                whiteSpace: 'pre-wrap',
                lineHeight: 1.35,
                background: 'rgba(255,255,255,0.7)',
                padding: '0.5rem',
                borderRadius: '4px',
                border: '1px solid rgba(185, 141, 130, 0.15)',
                margin: 0,
              }}
            >
              {generatedMessage}
            </pre>
          </div>

          {/* Notice on unverified business number */}
          {!hasWhatsappNumber && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '0.65rem 0.85rem',
                backgroundColor: 'rgba(217, 181, 174, 0.2)',
                borderRadius: 'var(--radius-subtle)',
                fontSize: '0.72rem',
                color: 'var(--color-deep-espresso)',
                lineHeight: 1.35,
              }}
            >
              <Info size={14} style={{ color: 'var(--color-muted-rose)', flexShrink: 0 }} />
              <div>
                <strong>Client Setup Mode:</strong> Official WhatsApp number will be linked upon client verification.
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.3rem', flexWrap: 'wrap' }}>
            <button
              type="submit"
              className="btn-primary"
              style={{ flex: '1 1 200px', padding: '0.85rem' }}
            >
              <Send size={14} />
              <span>{hasWhatsappNumber ? 'Send via WhatsApp' : 'Copy Enquiry Message'}</span>
            </button>
            <button
              type="button"
              onClick={handleCopyMessage}
              className="btn-secondary"
              style={{ flex: '1 1 150px', padding: '0.85rem' }}
            >
              <Copy size={14} />
              <span>{copied ? 'Copied!' : 'Copy to Clipboard'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
