"use client";

import React, { useEffect, useRef, useState, type HTMLAttributes } from 'react';
import './scroll-reveal.css';

export type RevealAnimation = 'fade' | 'slide-up' | 'slide-in-left' | 'slide-in-right' | 'scale';

export interface ScrollRevealProps extends HTMLAttributes<HTMLDivElement> {
  /** Animation type */
  animation?: RevealAnimation;
  /** Delay in milliseconds before animation starts once in view */
  delay?: number;
  /** Threshold (0 to 1) of how much needs to be visible to trigger */
  threshold?: number;
  /** Whether to animate out when scrolled past and animate in again */
  repeat?: boolean;
}

export const ScrollReveal = React.forwardRef<HTMLDivElement, ScrollRevealProps>(
  (
    { 
      animation = 'slide-up', 
      delay = 0, 
      threshold = 0.1, 
      repeat = false,
      className = '', 
      style,
      children, 
      ...rest 
    }, 
    ref
  ) => {
    const elementRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [hasRevealed, setHasRevealed] = useState(false);

    useEffect(() => {
      const el = elementRef.current;
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            setHasRevealed(true);
          } else if (repeat) {
            setIsVisible(false);
          }
        },
        { threshold }
      );

      observer.observe(el);
      return () => observer.disconnect();
    }, [threshold, repeat]);

    const active = repeat ? isVisible : hasRevealed;

    return (
      <div
        ref={(node) => {
          elementRef.current = node;
          if (typeof ref === 'function') ref(node);
          else if (ref) ref.current = node;
        }}
        className={`brut-reveal brut-reveal--${animation} ${active ? 'brut-reveal--visible' : ''} ${className}`}
        style={{
          ...style,
          transitionDelay: `${delay}ms`
        }}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

ScrollReveal.displayName = 'ScrollReveal';
