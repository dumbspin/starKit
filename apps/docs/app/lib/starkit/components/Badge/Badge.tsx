import React, { forwardRef, type HTMLAttributes } from 'react';
import './badge.css';

/* ── Types ──────────────────────────────────────────────────── */

export type BadgeVariant = 'default' | 'danger' | 'success' | 'info' | 'outline';
export type BadgeSize = 'sm' | 'md';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  /** Adds a dot indicator before the label */
  dot?: boolean;
  /** Disables the badge visually */
  disabled?: boolean;
}

/* ── Component ──────────────────────────────────────────────── */

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      variant = 'default',
      size = 'sm',
      dot = false,
      disabled = false,
      className = '',
      children,
      ...rest
    },
    ref
  ) => {
    const classNames = [
      'brut-badge',
      'brut-structural', // Zero radius, bold border
      `brut-badge--${variant}`,
      `brut-badge--${size}`,
      disabled ? 'brut-badge--disabled' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <span ref={ref} className={classNames} {...rest}>
        {dot && <span className="brut-badge__dot" aria-hidden="true" />}
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';
