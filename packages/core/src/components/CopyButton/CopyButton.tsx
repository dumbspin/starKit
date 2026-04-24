"use client";

import React, { forwardRef, useState, useEffect } from 'react';
import { Button, type ButtonProps } from '../Button';

export interface CopyButtonProps extends Omit<ButtonProps, 'onClick'> {
  /** The string to copy to clipboard */
  value: string;
  /** Timeout in ms to reset back to normal state */
  timeout?: number;
  /** Callback fired after copying */
  onCopy?: () => void;
  /** Custom label when copied */
  copiedLabel?: string;
}

export const CopyButton = forwardRef<HTMLButtonElement, CopyButtonProps>(
  (
    {
      value,
      timeout = 2000,
      onCopy,
      copiedLabel = 'Copied ✓',
      children,
      variant = 'outline',
      ...rest
    },
    ref
  ) => {
    const [copied, setCopied] = useState(false);

    useEffect(() => {
      if (!copied) return;
      const timer = setTimeout(() => setCopied(false), timeout);
      return () => clearTimeout(timer);
    }, [copied, timeout]);

    const handleCopy = async () => {
      try {
        await navigator.clipboard.writeText(value);
        setCopied(true);
        onCopy?.();
      } catch (err) {
        console.error('Failed to copy text', err);
      }
    };

    return (
      <Button
        ref={ref}
        variant={copied ? 'primary' : variant}
        onClick={handleCopy}
        aria-live="polite"
        {...rest}
      >
        {copied ? copiedLabel : children}
      </Button>
    );
  }
);

CopyButton.displayName = 'CopyButton';
