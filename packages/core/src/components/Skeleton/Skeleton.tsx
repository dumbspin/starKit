import React, { forwardRef, type HTMLAttributes } from 'react';
import './skeleton.css';

/* ── Types ──────────────────────────────────────────────────── */

export type SkeletonVariant = 'text' | 'heading' | 'avatar' | 'card' | 'button' | 'image';
export type SkeletonSize = 'sm' | 'md' | 'lg';

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  /** Shape variant */
  variant?: SkeletonVariant;
  /** Size (applies to avatar variant) */
  size?: SkeletonSize;
  /** Custom width */
  width?: string | number;
  /** Custom height */
  height?: string | number;
  /** Number of skeleton lines to render (for text variant) */
  lines?: number;
  /** Remove border */
  borderless?: boolean;
}

/* ── Component ──────────────────────────────────────────────── */

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  (
    {
      variant = 'text',
      size = 'md',
      width,
      height,
      lines = 1,
      borderless = false,
      className = '',
      style,
      ...rest
    },
    ref
  ) => {
    const sizeClass =
      variant === 'avatar' && size !== 'md'
        ? `brut-skeleton--avatar-${size}`
        : `brut-skeleton--${variant}`;

    const classNames = [
      'brut-skeleton',
      sizeClass,
      borderless ? 'brut-skeleton--borderless' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const mergedStyle = {
      ...style,
      ...(width !== undefined ? { width: typeof width === 'number' ? `${width}px` : width } : {}),
      ...(height !== undefined ? { height: typeof height === 'number' ? `${height}px` : height } : {}),
    };

    if (variant === 'text' && lines > 1) {
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {Array.from({ length: lines }, (_, i) => (
            <div
              key={i}
              ref={i === 0 ? ref : undefined}
              className={classNames}
              style={{
                ...mergedStyle,
                width: i === lines - 1 ? '70%' : mergedStyle.width,
              }}
              aria-hidden="true"
              {...rest}
            />
          ))}
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={classNames}
        style={mergedStyle}
        aria-hidden="true"
        {...rest}
      />
    );
  }
);

Skeleton.displayName = 'Skeleton';
