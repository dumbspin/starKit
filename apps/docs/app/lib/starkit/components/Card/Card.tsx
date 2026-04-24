import React, { forwardRef, type HTMLAttributes } from 'react';
import './card.css';

/* ── Types ──────────────────────────────────────────────────── */

export type CardVariant = 'default' | 'flat' | 'inset';
export type CardPadding = 'sm' | 'md' | 'lg' | 'none';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  padding?: CardPadding;
  as?: 'div' | 'article' | 'section';
  /** Disables the card if it's interactive */
  disabled?: boolean;
}

/* ── Component ──────────────────────────────────────────────── */

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = 'default',
      padding = 'md',
      as: Component = 'div',
      disabled = false,
      className = '',
      onClick,
      children,
      ...rest
    },
    ref
  ) => {
    // If onClick is provided and not disabled, card becomes interactive
    const isInteractive = Boolean(onClick) && !disabled;

    // Determine shadow and layout classes
    const layoutClasses = [
      'brut-card',
      'brut-structural',
      `brut-card--${variant}`,
      `brut-card--p-${padding}`,
    ];

    if (variant === 'default') {
      layoutClasses.push('brut-shadow-md');
    }

    if (isInteractive) {
      layoutClasses.push('brut-interactive', 'brut-focusable', 'brut-card--interactive');
    }

    if (disabled) {
      layoutClasses.push('brut-card--disabled');
    }

    const classNames = [...layoutClasses, className].filter(Boolean).join(' ');

    return (
      <Component
        ref={ref}
        className={classNames}
        onClick={onClick}
        tabIndex={isInteractive ? 0 : undefined}
        role={isInteractive ? 'button' : undefined}
        {...rest}
      >
        {children}
      </Component>
    );
  }
);

Card.displayName = 'Card';
