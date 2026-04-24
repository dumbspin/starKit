import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Skeleton } from '../components/Skeleton';

describe('Skeleton', () => {
  it('renders with default props', () => {
    const { container } = render(<Skeleton />);
    const div = container.querySelector('div');
    expect(div).not.toBeNull();
    expect(div?.className).toContain('brut-skeleton');
    expect(div?.className).toContain('brut-skeleton--text');
  });

  it('renders multiple lines for text variant', () => {
    const { container } = render(<Skeleton variant="text" lines={3} />);
    const outer = container.querySelector('div');
    const inners = outer?.querySelectorAll('.brut-skeleton--text');
    expect(inners?.length).toBe(3);
  });

  it('renders different variants', () => {
    const { container } = render(<Skeleton variant="avatar" size="lg" />);
    const div = container.querySelector('div');
    expect(div?.className).toContain('brut-skeleton--avatar-lg');
  });

  it('applies borderless prop', () => {
    const { container } = render(<Skeleton borderless />);
    const div = container.querySelector('div');
    expect(div?.className).toContain('brut-skeleton--borderless');
  });

  it('applies custom dimensions', () => {
    const { container } = render(<Skeleton width={100} height="50px" />);
    const div = container.querySelector('div');
    expect(div?.style.width).toBe('100px');
    expect(div?.style.height).toBe('50px');
  });
});
