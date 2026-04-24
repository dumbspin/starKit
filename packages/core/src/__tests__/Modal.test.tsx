import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Modal, Button } from '../index';

describe('Modal', () => {
  it('does not render when closed', () => {
    render(<Modal open={false} onClose={() => {}}>Content</Modal>);
    expect(screen.queryByRole('dialog')).toBeNull();
  });

  it('renders when open', () => {
    render(<Modal open={true} onClose={() => {}} title="Test Modal">Content</Modal>);
    const dialog = screen.getByRole('dialog');
    expect(dialog).toBeDefined();
    expect(dialog.className).toContain('brut-modal');
  });

  it('renders title and content', () => {
    render(<Modal open={true} onClose={() => {}} title="My Title">Body text</Modal>);
    expect(screen.getByText('My Title')).toBeDefined();
    expect(screen.getByText('Body text')).toBeDefined();
  });

  it('renders footer', () => {
    render(
      <Modal open={true} onClose={() => {}} footer={<Button>OK</Button>}>
        Content
      </Modal>
    );
    expect(screen.getByRole('button', { name: 'OK' })).toBeDefined();
  });

  it('renders all sizes', () => {
    const sizes = ['sm', 'md', 'lg'] as const;
    for (const size of sizes) {
      const { unmount } = render(
        <Modal open={true} onClose={() => {}} size={size}>Content</Modal>
      );
      const dialog = screen.getByRole('dialog');
      expect(dialog.className).toContain(`brut-modal--${size}`);
      unmount();
    }
  });

  it('has aria-modal attribute', () => {
    render(<Modal open={true} onClose={() => {}}>Content</Modal>);
    expect(screen.getByRole('dialog').getAttribute('aria-modal')).toBe('true');
  });

  it('calls onClose when close button is clicked', () => {
    let closed = false;
    render(
      <Modal open={true} onClose={() => { closed = true; }} title="Test">Content</Modal>
    );
    const closeBtn = screen.getByLabelText('Close modal');
    fireEvent.click(closeBtn);
    expect(closed).toBe(true);
  });

  it('calls onClose on Escape key', () => {
    let closed = false;
    render(
      <Modal open={true} onClose={() => { closed = true; }}>Content</Modal>
    );
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(closed).toBe(true);
  });
});
