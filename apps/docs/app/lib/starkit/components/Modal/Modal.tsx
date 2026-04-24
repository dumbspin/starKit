import React, {
  forwardRef,
  useEffect,
  useRef,
  useCallback,
  type HTMLAttributes,
  type ReactNode,
} from 'react';
import './modal.css';

/* ── Types ──────────────────────────────────────────────────── */

export type ModalSize = 'sm' | 'md' | 'lg';

export interface ModalProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Whether the modal is visible */
  open: boolean;
  /** Called when the modal requests to close */
  onClose: () => void;
  /** Header title */
  title?: ReactNode;
  /** Size preset */
  size?: ModalSize;
  /** Footer content (typically buttons) */
  footer?: ReactNode;
  /** Whether clicking the overlay closes the modal */
  closeOnOverlay?: boolean;
}

/* ── Component ──────────────────────────────────────────────── */

export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      open,
      onClose,
      title,
      size = 'md',
      footer,
      closeOnOverlay = true,
      className = '',
      children,
      ...rest
    },
    ref
  ) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const previouslyFocused = useRef<HTMLElement | null>(null);

    /* ── Focus Trap ──────────────────────────────────────────── */
    const trapFocus = useCallback((e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      const modal = modalRef.current;
      if (!modal) return;

      const focusable = modal.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }, []);

    /* ── Escape to Close ─────────────────────────────────────── */
    const handleKeyDown = useCallback(
      (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
        trapFocus(e);
      },
      [onClose, trapFocus]
    );

    /* ── Lifecycle ───────────────────────────────────────────── */
    useEffect(() => {
      if (open) {
        previouslyFocused.current = document.activeElement as HTMLElement;
        document.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';

        // Auto-focus first focusable or the modal itself
        requestAnimationFrame(() => {
          const modal = modalRef.current;
          if (!modal) return;
          const firstFocusable = modal.querySelector<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          if (firstFocusable) {
            firstFocusable.focus();
          } else {
            modal.focus();
          }
        });
      }

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = '';
        if (previouslyFocused.current) {
          previouslyFocused.current.focus();
        }
      };
    }, [open, handleKeyDown]);

    if (!open) return null;

    const classNames = [
      'brut-modal',
      'brut-structural',
      'brut-shadow-lg',
      `brut-modal--${size}`,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div
        className="brut-modal-overlay"
        onClick={closeOnOverlay ? onClose : undefined}
        role="presentation"
      >
        <div
          ref={(node) => {
            (modalRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
            if (typeof ref === 'function') ref(node);
            else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
          }}
          className={classNames}
          role="dialog"
          aria-modal="true"
          aria-label={typeof title === 'string' ? title : undefined}
          tabIndex={-1}
          onClick={(e) => e.stopPropagation()}
          {...rest}
        >
          {title && (
            <div className="brut-modal__header">
              <h2 className="brut-modal__title">{title}</h2>
              <button
                className="brut-modal__close brut-structural brut-interactive brut-focusable"
                onClick={onClose}
                aria-label="Close modal"
                type="button"
              >
                ✕
              </button>
            </div>
          )}

          <div className="brut-modal__body">{children}</div>

          {footer && <div className="brut-modal__footer">{footer}</div>}
        </div>
      </div>
    );
  }
);

Modal.displayName = 'Modal';
