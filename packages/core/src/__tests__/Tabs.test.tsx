import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Tabs } from '../components/Tabs';

const defaultItems = [
  { key: 'a', label: 'Tab A', content: <p>Panel A</p> },
  { key: 'b', label: 'Tab B', content: <p>Panel B</p> },
  { key: 'c', label: 'Tab C', content: <p>Panel C</p>, disabled: true },
];

describe('Tabs', () => {
  it('renders tab list and first panel', () => {
    render(<Tabs items={defaultItems} />);
    expect(screen.getByRole('tablist')).toBeDefined();
    expect(screen.getByText('Panel A')).toBeDefined();
    expect(screen.queryByText('Panel B')).toBeNull();
  });

  it('has correct ARIA roles', () => {
    render(<Tabs items={defaultItems} />);
    const tabs = screen.getAllByRole('tab');
    expect(tabs.length).toBe(3);
    expect(screen.getByRole('tabpanel')).toBeDefined();
  });

  it('switches tabs on click', () => {
    render(<Tabs items={defaultItems} />);
    fireEvent.click(screen.getByText('Tab B'));
    expect(screen.getByText('Panel B')).toBeDefined();
    expect(screen.queryByText('Panel A')).toBeNull();
  });

  it('does not switch to disabled tab', () => {
    render(<Tabs items={defaultItems} />);
    fireEvent.click(screen.getByText('Tab C'));
    // Should still show panel A since Tab C is disabled
    expect(screen.getByText('Panel A')).toBeDefined();
  });

  it('renders all sizes', () => {
    const sizes = ['sm', 'md', 'lg'] as const;
    for (const size of sizes) {
      const { container, unmount } = render(<Tabs items={defaultItems} size={size} />);
      if (size !== 'md') {
        expect(container.querySelector(`.brut-tabs--${size}`)).not.toBeNull();
      }
      unmount();
    }
  });

  it('supports controlled mode', () => {
    const { rerender } = render(<Tabs items={defaultItems} activeKey="b" />);
    expect(screen.getByText('Panel B')).toBeDefined();
    rerender(<Tabs items={defaultItems} activeKey="a" />);
    expect(screen.getByText('Panel A')).toBeDefined();
  });

  it('navigates with arrow keys', () => {
    render(<Tabs items={defaultItems} />);
    const tabList = screen.getByRole('tablist');
    // Focus the active tab first
    const tabA = screen.getByText('Tab A');
    tabA.focus();
    // Arrow right → Tab B (skips disabled Tab C)
    fireEvent.keyDown(tabList, { key: 'ArrowRight' });
    expect(screen.getByText('Panel B')).toBeDefined();
  });
});
