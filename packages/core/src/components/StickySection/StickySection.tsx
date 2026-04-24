"use client";

import React, { useEffect, useRef, useState, type HTMLAttributes } from 'react';
import './sticky-section.css';

export interface StickySectionProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  /** The height of the scrolling track (e.g., '300vh') */
  trackHeight?: string;
  /** Function as child to receive scroll progress [0, 1] */
  children: (progress: number) => React.ReactNode;
}

export const StickySection = React.forwardRef<HTMLDivElement, StickySectionProps>(
  ({ trackHeight = '300vh', children, className = '', ...rest }, ref) => {
    const trackRef = useRef<HTMLDivElement | null>(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      let rafId: number;
      
      const onScroll = () => {
        if (!trackRef.current) return;
        const rect = trackRef.current.getBoundingClientRect();
        
        // Progress goes from 0 (top hits viewport) to 1 (bottom hits viewport)
        const scrollPx = -rect.top;
        const scrollableDistance = rect.height - window.innerHeight;
        
        let p = 0;
        if (scrollableDistance > 0) {
          p = Math.max(0, Math.min(1, scrollPx / scrollableDistance));
        }
        
        setProgress(p);
        rafId = requestAnimationFrame(onScroll);
      };

      rafId = requestAnimationFrame(onScroll);
      return () => cancelAnimationFrame(rafId);
    }, []);

    return (
      <div 
        className={`brut-sticky-track ${className}`} 
        style={{ height: trackHeight }}
        ref={(node) => {
          trackRef.current = node;
          if (typeof ref === 'function') ref(node);
          else if (ref) ref.current = node;
        }}
        {...rest}
      >
        <div className="brut-sticky-container">
          {children(progress)}
        </div>
      </div>
    );
  }
);

StickySection.displayName = 'StickySection';
