import React, { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import './formfield.css';

/* ── Types ──────────────────────────────────────────────────── */

export type FormFieldSize = 'sm' | 'md' | 'lg';

export interface FormFieldProps extends HTMLAttributes<HTMLDivElement> {
  /** Label text */
  label?: string;
  /** Associated input id (for <label htmlFor>) */
  htmlFor?: string;
  /** Hint text shown below the input */
  hint?: string;
  /** Error message (replaces hint when present) */
  error?: string;
  /** Mark field as required (adds * to label) */
  required?: boolean;
  /** Size preset */
  size?: FormFieldSize;
  /** Stretch to full width */
  fullWidth?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** The input element(s) */
  children: ReactNode;
}

/* ── Component ──────────────────────────────────────────────── */

export const FormField = forwardRef<HTMLDivElement, FormFieldProps>(
  (
    {
      label,
      htmlFor,
      hint,
      error,
      required = false,
      size = 'md',
      fullWidth = false,
      disabled = false,
      className = '',
      children,
      ...rest
    },
    ref
  ) => {
    const classNames = [
      'brut-formfield',
      size !== 'md' ? `brut-formfield--${size}` : '',
      fullWidth ? 'brut-formfield--full' : '',
      disabled ? 'brut-formfield--disabled' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div ref={ref} className={classNames} {...rest}>
        {label && (
          <label
            className={`brut-formfield__label${required ? ' brut-formfield__label--required' : ''}`}
            htmlFor={htmlFor}
          >
            {label}
          </label>
        )}
        {children}
        {error ? (
          <div className="brut-formfield__error" role="alert">
            {error}
          </div>
        ) : hint ? (
          <div className="brut-formfield__hint">{hint}</div>
        ) : null}
      </div>
    );
  }
);

FormField.displayName = 'FormField';
