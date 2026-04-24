import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { GlitchText } from '../components/GlitchText';

describe('GlitchText', () => {
  it('renders text content', () => {
    render(<GlitchText text="HELLO" />);
    expect(screen.getByText('HELLO')).toBeDefined();
  });

  it('sets data-text attribute for pseudo-elements', () => {
    render(<GlitchText text="GLITCH" />);
    const el = screen.getByText('GLITCH');
    expect(el.getAttribute('data-text')).toBe('GLITCH');
  });

  it('has aria-label for accessibility', () => {
    render(<GlitchText text="ACCESSIBLE" />);
    expect(screen.getByLabelText('ACCESSIBLE')).toBeDefined();
  });

  it('renders all sizes', () => {
    const sizes = ['sm', 'md', 'lg'] as const;
    for (const size of sizes) {
      const { unmount } = render(<GlitchText text="Test" size={size} />);
      const el = screen.getByText('Test');
      expect(el.className).toContain(`brut-glitch--${size}`);
      unmount();
    }
  });

  it('renders intensity variants', () => {
    const { unmount: u1 } = render(<GlitchText text="A" intensity="subtle" />);
    expect(screen.getByText('A').className).toContain('brut-glitch--subtle');
    u1();

    const { unmount: u2 } = render(<GlitchText text="B" intensity="intense" />);
    expect(screen.getByText('B').className).toContain('brut-glitch--intense');
    u2();

    render(<GlitchText text="C" intensity="normal" />);
    expect(screen.getByText('C').className).not.toContain('brut-glitch--normal');
  });

  it('applies paused class', () => {
    render(<GlitchText text="Paused" paused />);
    expect(screen.getByText('Paused').className).toContain('brut-glitch--paused');
  });

  it('renders as span element', () => {
    render(<GlitchText text="Span" />);
    const el = screen.getByText('Span');
    expect(el.tagName).toBe('SPAN');
  });

  it('forwards className', () => {
    render(<GlitchText text="Custom" className="my-class" />);
    expect(screen.getByText('Custom').className).toContain('my-class');
  });
});
