import React from 'react';

export default function SectionHeader({
  sectionNum,
  tag,
  headline,
  italicWord,
  description,
  align = 'left',
  conceptBadge = null,
  className = '',
}) {
  return (
    <div
      className={`section-header-block ${align === 'center' ? 'text-center mx-auto' : ''} ${className}`}
      style={{
        maxWidth: align === 'center' ? '820px' : '960px',
        marginBottom: 'clamp(2.5rem, 5vw, 4.5rem)',
        textAlign: align,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          justifyContent: align === 'center' ? 'center' : 'flex-start',
          marginBottom: '1rem',
          flexWrap: 'wrap',
        }}
      >
        {sectionNum && <span className="section-number">[{sectionNum}]</span>}
        {tag && <span className="editorial-tag">{tag}</span>}
        {conceptBadge && (
          <span className="concept-badge">
            <span className="concept-badge-dot" />
            {conceptBadge}
          </span>
        )}
      </div>

      <h2
        className="text-h1"
        style={{
          marginBottom: description ? '1.4rem' : '0',
          lineHeight: '1.08',
        }}
      >
        {headline}{' '}
        {italicWord && <span className="text-hero-italic">{italicWord}</span>}
      </h2>

      {description && (
        <p
          className="text-body-lg"
          style={{
            maxWidth: '680px',
            marginLeft: align === 'center' ? 'auto' : '0',
            marginRight: align === 'center' ? 'auto' : '0',
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
