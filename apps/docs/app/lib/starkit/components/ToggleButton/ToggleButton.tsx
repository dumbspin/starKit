"use client";

import React, { forwardRef, useState, useCallback } from 'react';
import { Button, type ButtonProps } from '../Button';

export interface ToggleButtonProps extends Omit<ButtonProps, 'onClick' | 'onToggle'> {
  /** Uncontrolled default pressed state */
  defaultPressed?: boolean;
  /** Controlled pressed state */
  pressed?: boolean;
  /** Callback fired on toggle */
  onToggle?: (pressed: boolean) => void;
  /** Variant when pressed (default: primary) */
  pressedVariant?: ButtonProps['variant'];
  /** Variant when not pressed (default: outline) */
  unpressedVariant?: ButtonProps['variant'];
}

export const ToggleButton = forwardRef<HTMLButtonElement, ToggleButtonProps>(
  (
    {
      defaultPressed = false,
      pressed: controlledPressed,
      onToggle,
      pressedVariant = 'primary',
      unpressedVariant = 'outline',
      children,
      ...rest
    },
    ref
  ) => {
    const isControlled = controlledPressed !== undefined;
    const [uncontrolledPressed, setUncontrolledPressed] = useState(defaultPressed);

    const isPressed = isControlled ? controlledPressed : uncontrolledPressed;

    const handleClick = useCallback(() => {
      const nextState = !isPressed;
      if (!isControlled) {
        setUncontrolledPressed(nextState);
      }
      onToggle?.(nextState);
    }, [isPressed, isControlled, onToggle]);

    return (
      <Button
        ref={ref}
        variant={isPressed ? pressedVariant : unpressedVariant}
        onClick={handleClick}
        aria-pressed={isPressed}
        {...rest}
      >
        {children}
      </Button>
    );
  }
);

ToggleButton.displayName = 'ToggleButton';
