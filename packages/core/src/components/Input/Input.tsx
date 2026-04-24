import React, { forwardRef, InputHTMLAttributes, ReactNode } from 'react';
import './input.css';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix' | 'suffix'> {
  /** Label for the input */
  label?: string;
  /** Hint text displayed below the input */
  hint?: string;
  /** Error message displayed below the input */
  error?: string;
  /** Size of the input */
  size?: 'sm' | 'md' | 'lg';
  /** Whether the input should take up the full width of its container */
  fullWidth?: boolean;
  /** Visual variant of the input */
  variant?: 'default' | 'outline';
  /** Element to display before the input text */
  prefix?: ReactNode;
  /** Element to display after the input text */
  suffix?: ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      hint,
      error,
      size = 'md',
      variant = 'default',
      fullWidth = false,
      prefix,
      suffix,
      disabled = false,
      className = '',
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || `brut-input-${Math.random().toString(36).substr(2, 9)}`;
    const hasError = !!error;

    const wrapperClasses = [
      'brut-input-wrapper',
      fullWidth ? 'brut-input-wrapper--full' : '',
      disabled ? 'brut-input-wrapper--disabled' : '',
    ]
      .filter(Boolean)
      .join(' ');

    const containerClasses = [
      'brut-input-container',
      `brut-input-container--${size}`,
      `brut-input-container--${variant}`,
      hasError ? 'brut-input-container--error' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div className={wrapperClasses}>
        {label && (
          <label htmlFor={inputId} className="brut-input-label">
            {label}
          </label>
        )}

        <div className={containerClasses}>
          {prefix && <div className="brut-input-prefix">{prefix}</div>}
          <input
            {...props}
            id={inputId}
            ref={ref}
            disabled={disabled}
            className="brut-input-field"
          />
          {suffix && <div className="brut-input-suffix">{suffix}</div>}
        </div>

        {error ? (
          <p className="brut-input-error" role="alert">
            {error}
          </p>
        ) : hint ? (
          <p className="brut-input-hint">{hint}</p>
        ) : null}
      </div>
    );
  }
);

Input.displayName = 'Input';
