import React, { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import './button.css';

/* ── Types ──────────────────────────────────────────────────── */

export type ButtonVariant = 'primary' | 'danger' | 'ghost' | 'outline';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonEffect = 'slide' | 'pulse' | 'none';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual variant of the button */
  variant?: ButtonVariant;
  /** Size preset */
  size?: ButtonSize;
  /** Stretch to full width of container */
  fullWidth?: boolean;
  /** Show loading spinner and disable interaction */
  loading?: boolean;
  /** Animation effect */
  effect?: ButtonEffect;
  /** Content before the label */
  prefixIcon?: ReactNode;
  /** Content after the label */
  suffixIcon?: ReactNode;
}

/* ── Component ──────────────────────────────────────────────── */

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      loading = false,
      effect = 'none',
      disabled = false,
      prefixIcon,
      suffixIcon,
      className = '',
      children,
      ...rest
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    // outline uses a smaller shadow
    const shadowClass = variant === 'outline' ? 'brut-shadow-sm' : 'brut-shadow-md';

    const classNames = [
      'brut-btn',
      'brut-structural',
      'brut-interactive',
      'brut-focusable',
      shadowClass,
      `brut-btn--${variant}`,
      `brut-btn--${size}`,
      fullWidth ? 'brut-btn--full' : '',
      loading ? 'brut-btn--loading' : '',
      effect !== 'none' ? `brut-btn--effect-${effect}` : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const labelText = typeof children === 'string' ? children : undefined;

    return (
      <button
        ref={ref}
        className={classNames}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        aria-busy={loading}
        {...rest}
      >
        {loading && <span className="brut-btn__spinner" aria-hidden="true" />}
        {!loading && prefixIcon && (
          <span className="brut-btn__icon brut-btn__icon--prefix">{prefixIcon}</span>
        )}
        <span 
          className="brut-btn__label-wrapper" 
          data-text={effect === 'slide' ? labelText : undefined}
        >
          <span className="brut-btn__label">{children}</span>
        </span>
        {!loading && suffixIcon && (
          <span className="brut-btn__icon brut-btn__icon--suffix">{suffixIcon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
