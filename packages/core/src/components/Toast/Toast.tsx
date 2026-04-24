import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useRef,
  useEffect,
  type ReactNode,
} from 'react';
import './toast.css';

/* ── Types ──────────────────────────────────────────────────── */

export type ToastVariant = 'default' | 'success' | 'danger' | 'info';
export type ToastPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';

export interface ToastData {
  id: string;
  title?: string;
  message: string;
  variant?: ToastVariant;
  duration?: number;
}

interface ToastContextValue {
  toast: (data: Omit<ToastData, 'id'>) => string;
  dismiss: (id: string) => void;
  dismissAll: () => void;
}

/* ── Context ────────────────────────────────────────────────── */

const ToastContext = createContext<ToastContextValue | null>(null);

export function useToast(): ToastContextValue {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error('useToast must be used within a <ToastProvider>');
  }
  return ctx;
}

/* ── Individual Toast ────────────────────────────────────────── */

interface ToastItemProps {
  data: ToastData;
  onDismiss: (id: string) => void;
}

function ToastItem({ data, onDismiss }: ToastItemProps) {
  const [exiting, setExiting] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  const duration = data.duration ?? 4000;

  const handleDismiss = useCallback(() => {
    setExiting(true);
    setTimeout(() => onDismiss(data.id), 150);
  }, [data.id, onDismiss]);

  useEffect(() => {
    if (duration > 0) {
      timerRef.current = setTimeout(handleDismiss, duration);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [duration, handleDismiss]);

  const variant = data.variant || 'default';

  const classNames = [
    'brut-toast',
    'brut-structural',
    'brut-shadow-md',
    `brut-toast--${variant}`,
    exiting ? 'brut-toast--exiting' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={classNames}
      role="alert"
      aria-live="assertive"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      <div className="brut-toast__content">
        {data.title && <div className="brut-toast__title">{data.title}</div>}
        <div className="brut-toast__message">{data.message}</div>
      </div>
      <button
        className="brut-toast__close"
        onClick={handleDismiss}
        aria-label="Dismiss"
        type="button"
      >
        ✕
      </button>
      {duration > 0 && (
        <div
          className="brut-toast__progress"
          style={{ animationDuration: `${duration}ms` }}
        />
      )}
    </div>
  );
}

/* ── Provider ────────────────────────────────────────────────── */

export interface ToastProviderProps {
  children: ReactNode;
  /** Where toasts appear on screen */
  position?: ToastPosition;
  /** Maximum number of visible toasts */
  maxToasts?: number;
}

export function ToastProvider({
  children,
  position = 'top-right',
  maxToasts = 5,
}: ToastProviderProps) {
  const [toasts, setToasts] = useState<ToastData[]>([]);
  const counterRef = useRef(0);

  const toast = useCallback(
    (data: Omit<ToastData, 'id'>) => {
      const id = `brut-toast-${++counterRef.current}`;
      setToasts((prev) => {
        const next = [...prev, { ...data, id }];
        // Limit visible toasts
        if (next.length > maxToasts) {
          return next.slice(next.length - maxToasts);
        }
        return next;
      });
      return id;
    },
    [maxToasts]
  );

  const dismiss = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const dismissAll = useCallback(() => {
    setToasts([]);
  }, []);

  return (
    <ToastContext.Provider value={{ toast, dismiss, dismissAll }}>
      {children}
      <div className={`brut-toast-container brut-toast-container--${position}`}>
        {toasts.map((t) => (
          <ToastItem key={t.id} data={t} onDismiss={dismiss} />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

ToastProvider.displayName = 'ToastProvider';
