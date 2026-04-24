import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { ToastProvider, useToast, Button } from '../index';

function ToastTrigger({ variant = 'default' }: { variant?: string }) {
  const { toast } = useToast();
  return (
    <Button onClick={() => toast({ message: `Test ${variant}`, variant: variant as any })}>
      Trigger
    </Button>
  );
}

describe('Toast', () => {
  it('renders toast on trigger', async () => {
    render(
      <ToastProvider>
        <ToastTrigger />
      </ToastProvider>
    );
    fireEvent.click(screen.getByRole('button', { name: 'Trigger' }));
    expect(screen.getByText('Test default')).toBeDefined();
  });

  it('renders with correct variant class', () => {
    render(
      <ToastProvider>
        <ToastTrigger variant="success" />
      </ToastProvider>
    );
    fireEvent.click(screen.getByRole('button', { name: 'Trigger' }));
    const toast = screen.getByRole('alert');
    expect(toast.className).toContain('brut-toast--success');
  });

  it('stacks multiple toasts', () => {
    render(
      <ToastProvider>
        <ToastTrigger />
      </ToastProvider>
    );
    const btn = screen.getByRole('button', { name: 'Trigger' });
    fireEvent.click(btn);
    fireEvent.click(btn);
    fireEvent.click(btn);
    const alerts = screen.getAllByRole('alert');
    expect(alerts.length).toBe(3);
  });

  it('respects maxToasts', () => {
    render(
      <ToastProvider maxToasts={2}>
        <ToastTrigger />
      </ToastProvider>
    );
    const btn = screen.getByRole('button', { name: 'Trigger' });
    fireEvent.click(btn);
    fireEvent.click(btn);
    fireEvent.click(btn);
    const alerts = screen.getAllByRole('alert');
    expect(alerts.length).toBe(2);
  });

  it('renders position class', () => {
    const { container } = render(
      <ToastProvider position="bottom-left">
        <ToastTrigger />
      </ToastProvider>
    );
    const toastContainer = container.querySelector('.brut-toast-container--bottom-left');
    expect(toastContainer).not.toBeNull();
  });

  it('auto-dismisses after duration', async () => {
    vi.useFakeTimers();
    function ShortToast() {
      const { toast } = useToast();
      return <Button onClick={() => toast({ message: 'Quick', duration: 100 })}>Go</Button>;
    }
    render(
      <ToastProvider>
        <ShortToast />
      </ToastProvider>
    );
    fireEvent.click(screen.getByRole('button', { name: 'Go' }));
    expect(screen.getByText('Quick')).toBeDefined();
    // Fast forward past duration + exit animation
    await act(async () => {
      vi.advanceTimersByTime(300);
    });
    expect(screen.queryByText('Quick')).toBeNull();
    vi.useRealTimers();
  });
});
