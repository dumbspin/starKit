"use client";

import React, { useEffect, useRef, useState, type HTMLAttributes } from 'react';
import './parallax-section.css';

export interface ParallaxSectionProps extends HTMLAttributes<HTMLDivElement> {
  /** Speed ratio relative to scroll. 0 = normal scroll, 0.5 = half speed, 1 = fixed */
  speed?: number;
  /** Background layer content (often an image or absolute element) */
  background: React.ReactNode;
}

export const ParallaxSection = React.forwardRef<HTMLDivElement, ParallaxSectionProps>(
  ({ speed = 0.5, background, children, className = '', ...rest }, ref) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const bgRef = useRef<HTMLDivElement | null>(null);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    useEffect(() => {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(mediaQuery.matches);
      
      const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
      mediaQuery.addEventListener('change', listener);
      return () => mediaQuery.removeEventListener('change', listener);
    }, []);

    useEffect(() => {
      if (prefersReducedMotion) return;

      let rafId: number;
      const onScroll = () => {
        if (!containerRef.current || !bgRef.current) return;
        
        const rect = containerRef.current.getBoundingClientRect();
        // Check if element is in viewport
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          // Calculate how far the container is from the center of the viewport
          const centerOffset = (rect.top + rect.height / 2) - window.innerHeight / 2;
          // Apply translation based on speed
          const y = centerOffset * speed;
          
          bgRef.current.style.transform = `translate3d(0, ${y}px, 0)`;
        }
        rafId = requestAnimationFrame(onScroll);
      };

      rafId = requestAnimationFrame(onScroll);
      return () => cancelAnimationFrame(rafId);
    }, [speed, prefersReducedMotion]);

    return (
      <div 
        className={`brut-parallax ${className}`} 
        ref={(node) => {
          containerRef.current = node;
          if (typeof ref === 'function') ref(node);
          else if (ref) ref.current = node;
        }}
        {...rest}
      >
        <div className="brut-parallax__bg" ref={bgRef}>
          {background}
        </div>
        <div className="brut-parallax__content">
          {children}
        </div>
      </div>
    );
  }
);

ParallaxSection.displayName = 'ParallaxSection';
