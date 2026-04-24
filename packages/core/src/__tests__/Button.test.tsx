import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from '../components/Button';

describe('Button', () => {
  it('renders with default props', () => {
    render(<Button>Click me</Button>);
    const btn = screen.getByRole('button', { name: 'Click me' });
    expect(btn).toBeDefined();
    expect(btn.className).toContain('brut-btn');
    expect(btn.className).toContain('brut-btn--primary');
    expect(btn.className).toContain('brut-btn--md');
  });

  it('renders all variants', () => {
    const variants = ['primary', 'outline', 'ghost', 'danger'] as const;
    for (const variant of variants) {
      const { unmount } = render(<Button variant={variant}>{variant}</Button>);
      const btn = screen.getByRole('button', { name: variant });
      expect(btn.className).toContain(`brut-btn--${variant}`);
      unmount();
    }
  });

  it('renders all sizes', () => {
    const sizes = ['sm', 'md', 'lg'] as const;
    for (const size of sizes) {
      const { unmount } = render(<Button size={size}>{size}</Button>);
      const btn = screen.getByRole('button', { name: size });
      expect(btn.className).toContain(`brut-btn--${size}`);
      unmount();
    }
  });

  it('applies disabled state', () => {
    render(<Button disabled>Disabled</Button>);
    const btn = screen.getByRole('button', { name: 'Disabled' });
    expect(btn).toHaveProperty('disabled', true);
  });

  it('applies loading state', () => {
    const { container } = render(<Button loading>Loading</Button>);
    const btn = container.querySelector('button')!;
    expect(btn.className).toContain('brut-btn--loading');
    expect(btn.disabled).toBe(true);
    expect(btn.getAttribute('aria-busy')).toBe('true');
  });

  it('forwards className', () => {
    render(<Button className="custom">Test</Button>);
    const btn = screen.getByRole('button', { name: 'Test' });
    expect(btn.className).toContain('custom');
  });

  it('has structural and interactive classes', () => {
    render(<Button>Test</Button>);
    const btn = screen.getByRole('button', { name: 'Test' });
    expect(btn.className).toContain('brut-structural');
    expect(btn.className).toContain('brut-interactive');
    expect(btn.className).toContain('brut-focusable');
  });
});
