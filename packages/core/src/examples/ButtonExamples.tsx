import React, { useState } from 'react';
import { Button } from './components/Button';
import './tokens.css';

/**
 * StarKit Button — Example Usage
 *
 * This file demonstrates all Button variants, sizes, and states.
 * It is not shipped with the library — it exists for development
 * and documentation reference only.
 */

export function ButtonExamples() {
  const [loading, setLoading] = useState(false);

  const handleLoadingClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="starkit" style={{ padding: '40px', fontFamily: 'system-ui' }}>
      <h1 style={{ fontWeight: 900, marginBottom: '32px' }}>StarKit — Button</h1>

      {/* ── Variants ──────────────────────────────────────── */}
      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ fontWeight: 900, marginBottom: '16px' }}>Variants</h2>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button variant="primary">Primary</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="outline">Outline</Button>
        </div>
      </section>

      {/* ── Sizes ─────────────────────────────────────────── */}
      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ fontWeight: 900, marginBottom: '16px' }}>Sizes</h2>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </section>

      {/* ── States ────────────────────────────────────────── */}
      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ fontWeight: 900, marginBottom: '16px' }}>States</h2>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button disabled>Disabled</Button>
          <Button loading={loading} onClick={handleLoadingClick}>
            {loading ? 'Saving...' : 'Click to Load'}
          </Button>
        </div>
      </section>

      {/* ── Full Width ────────────────────────────────────── */}
      <section style={{ marginBottom: '32px', maxWidth: '400px' }}>
        <h2 style={{ fontWeight: 900, marginBottom: '16px' }}>Full Width</h2>
        <Button fullWidth variant="primary">
          Full Width Button
        </Button>
      </section>

      {/* ── With Icons ────────────────────────────────────── */}
      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ fontWeight: 900, marginBottom: '16px' }}>With Icons</h2>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button
            variant="primary"
            prefixIcon={<span aria-hidden="true">→</span>}
          >
            With Prefix
          </Button>
          <Button
            variant="danger"
            suffixIcon={<span aria-hidden="true">✕</span>}
          >
            Delete
          </Button>
        </div>
      </section>

      {/* ── Variant × Size Matrix ─────────────────────────── */}
      <section>
        <h2 style={{ fontWeight: 900, marginBottom: '16px' }}>Variant × Size Matrix</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, auto)', gap: '12px', justifyContent: 'start' }}>
          {(['primary', 'danger', 'ghost', 'outline'] as const).map((variant) =>
            (['sm', 'md', 'lg'] as const).map((size) => (
              <Button key={`${variant}-${size}`} variant={variant} size={size}>
                {variant} {size}
              </Button>
            ))
          )}
        </div>
      </section>
    </div>
  );
}
