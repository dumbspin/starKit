import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Accordion } from '../components/Accordion';

describe('Accordion', () => {
  const items = [
    { key: '1', label: 'Item 1', content: 'Content 1' },
    { key: '2', label: 'Item 2', content: 'Content 2' },
    { key: '3', label: 'Item 3', content: 'Content 3', disabled: true },
  ];

  it('renders items correctly', () => {
    render(<Accordion items={items} />);
    expect(screen.getByText('Item 1')).toBeDefined();
    expect(screen.getByText('Item 2')).toBeDefined();
    expect(screen.getByText('Item 3')).toBeDefined();
  });

  it('toggles an item when clicked', () => {
    render(<Accordion items={items} />);
    const trigger1 = screen.getByText('Item 1').closest('button')!;
    
    expect(trigger1.getAttribute('aria-expanded')).toBe('false');
    fireEvent.click(trigger1);
    expect(trigger1.getAttribute('aria-expanded')).toBe('true');
  });

  it('respects defaultOpenKeys', () => {
    render(<Accordion items={items} defaultOpenKeys={['2']} />);
    const trigger2 = screen.getByText('Item 2').closest('button')!;
    expect(trigger2.getAttribute('aria-expanded')).toBe('true');
  });

  it('handles multiple open keys', () => {
    render(<Accordion items={items} multiple />);
    const trigger1 = screen.getByText('Item 1').closest('button')!;
    const trigger2 = screen.getByText('Item 2').closest('button')!;
    
    fireEvent.click(trigger1);
    fireEvent.click(trigger2);
    
    expect(trigger1.getAttribute('aria-expanded')).toBe('true');
    expect(trigger2.getAttribute('aria-expanded')).toBe('true');
  });

  it('does not toggle disabled items', () => {
    render(<Accordion items={items} />);
    const trigger3 = screen.getByText('Item 3').closest('button')!;
    
    expect(trigger3.disabled).toBe(true);
    fireEvent.click(trigger3);
    expect(trigger3.getAttribute('aria-expanded')).toBe('false');
  });

  it('supports controlled mode', () => {
    const onChange = vi.fn();
    render(<Accordion items={items} openKeys={['1']} onChange={onChange} />);
    
    const trigger2 = screen.getByText('Item 2').closest('button')!;
    fireEvent.click(trigger2);
    
    expect(onChange).toHaveBeenCalledWith(['2']);
  });
});
