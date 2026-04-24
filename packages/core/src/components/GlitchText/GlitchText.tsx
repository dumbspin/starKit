import React, { forwardRef, type HTMLAttributes } from 'react';
import './glitchtext.css';

/* ── Types ──────────────────────────────────────────────────── */

export type GlitchTextSize = 'sm' | 'md' | 'lg';
export type GlitchTextIntensity = 'subtle' | 'normal' | 'intense';

export interface GlitchTextProps extends HTMLAttributes<HTMLSpanElement> {
  /** The text to display and glitch */
  text: string;
  /** Size preset */
  size?: GlitchTextSize;
  /** Glitch intensity */
  intensity?: GlitchTextIntensity;
  /** Pause the animation */
  paused?: boolean;
}

/* ── Component ──────────────────────────────────────────────── */

export const GlitchText = forwardRef<HTMLSpanElement, GlitchTextProps>(
  (
    {
      text,
      size = 'md',
      intensity = 'normal',
      paused = false,
      className = '',
      ...rest
    },
    ref
  ) => {
    const classNames = [
      'brut-glitch',
      `brut-glitch--${size}`,
      intensity !== 'normal' ? `brut-glitch--${intensity}` : '',
      paused ? 'brut-glitch--paused' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <span
        ref={ref}
        className={classNames}
        data-text={text}
        aria-label={text}
        {...rest}
      >
        {text}
      </span>
    );
  }
);

GlitchText.displayName = 'GlitchText';
