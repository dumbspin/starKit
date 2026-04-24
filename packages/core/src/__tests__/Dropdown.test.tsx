import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Dropdown } from '../components/Dropdown';

const defaultItems = [
  { key: 'edit', label: 'Edit' },
  { key: 'delete', label: 'Delete', danger: true },
  { key: 'div', divider: true },
  { key: 'archive', label: 'Archive', disabled: true },
];

describe('Dropdown', () => {
  it('renders trigger button', () => {
    render(<Dropdown trigger="Actions" items={defaultItems} />);
    expect(screen.getByRole('button', { name: /Actions/ })).toBeDefined();
  });

  it('is closed by default', () => {
    render(<Dropdown trigger="Actions" items={defaultItems} />);
    expect(screen.queryByRole('listbox')).toBeNull();
  });

  it('opens on click', () => {
    render(<Dropdown trigger="Actions" items={defaultItems} />);
    fireEvent.click(screen.getByRole('button', { name: /Actions/ }));
    expect(screen.getByRole('listbox')).toBeDefined();
  });

  it('renders menu items when open', () => {
    render(<Dropdown trigger="Actions" items={defaultItems} />);
    fireEvent.click(screen.getByRole('button', { name: /Actions/ }));
    expect(screen.getByText('Edit')).toBeDefined();
    expect(screen.getByText('Delete')).toBeDefined();
  });

  it('applies danger class', () => {
    render(<Dropdown trigger="Actions" items={defaultItems} />);
    fireEvent.click(screen.getByRole('button', { name: /Actions/ }));
    const deleteItem = screen.getByText('Delete').closest('button');
    expect(deleteItem?.className).toContain('brut-dropdown__item--danger');
  });

  it('calls onSelect when item clicked', () => {
    let selected = '';
    render(<Dropdown trigger="Actions" items={defaultItems} onSelect={(k) => { selected = k; }} />);
    fireEvent.click(screen.getByRole('button', { name: /Actions/ }));
    fireEvent.click(screen.getByText('Edit'));
    expect(selected).toBe('edit');
  });

  it('closes after selection', () => {
    render(<Dropdown trigger="Actions" items={defaultItems} onSelect={() => {}} />);
    fireEvent.click(screen.getByRole('button', { name: /Actions/ }));
    fireEvent.click(screen.getByText('Edit'));
    expect(screen.queryByRole('listbox')).toBeNull();
  });

  it('respects disabled state', () => {
    render(<Dropdown trigger="Actions" items={defaultItems} disabled />);
    const btn = screen.getByRole('button', { name: /Actions/ });
    expect(btn).toHaveProperty('disabled', true);
  });

  it('renders all sizes', () => {
    const sizes = ['sm', 'md', 'lg'] as const;
    for (const size of sizes) {
      const { container, unmount } = render(
        <Dropdown trigger="Test" items={defaultItems} size={size} />
      );
      if (size !== 'md') {
        expect(container.querySelector(`.brut-dropdown--${size}`)).not.toBeNull();
      }
      unmount();
    }
  });

  it('has correct ARIA attributes', () => {
    render(<Dropdown trigger="Actions" items={defaultItems} />);
    const btn = screen.getByRole('button', { name: /Actions/ });
    expect(btn.getAttribute('aria-haspopup')).toBe('listbox');
    expect(btn.getAttribute('aria-expanded')).toBe('false');
    fireEvent.click(btn);
    expect(btn.getAttribute('aria-expanded')).toBe('true');
  });
});
