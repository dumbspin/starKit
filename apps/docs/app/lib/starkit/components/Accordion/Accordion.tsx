import React, {
  forwardRef,
  useState,
  useRef,
  useEffect,
  useCallback,
  type HTMLAttributes,
  type ReactNode,
} from 'react';
import './accordion.css';

/* ── Types ──────────────────────────────────────────────────── */

export type AccordionSize = 'sm' | 'md' | 'lg';

export interface AccordionItem {
  /** Unique key */
  key: string;
  /** Trigger label */
  label: ReactNode;
  /** Expandable content */
  content: ReactNode;
  /** Disabled state */
  disabled?: boolean;
}

export interface AccordionProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Accordion items */
  items: AccordionItem[];
  /** Allow multiple items open simultaneously */
  multiple?: boolean;
  /** Keys of initially open items */
  defaultOpenKeys?: string[];
  /** Controlled open keys */
  openKeys?: string[];
  /** Callback when open keys change */
  onChange?: (openKeys: string[]) => void;
  /** Size preset */
  size?: AccordionSize;
  /** Wrap in a bordered container with shadow */
  bordered?: boolean;
}

/* ── Panel with animated height ──────────────────────────────── */

function AccordionPanel({ open, children }: { open: boolean; children: ReactNode }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | undefined>(open ? undefined : 0);

  useEffect(() => {
    if (!contentRef.current) return;
    if (open) {
      setHeight(contentRef.current.scrollHeight);
      // After transition, allow natural height (for dynamic content)
      const timer = setTimeout(() => setHeight(undefined), 200);
      return () => clearTimeout(timer);
    } else {
      // Force a reflow so the browser picks up the starting height
      setHeight(contentRef.current.scrollHeight);
      requestAnimationFrame(() => {
        setHeight(0);
      });
    }
  }, [open]);

  return (
    <div
      className={`brut-accordion__panel ${open ? 'brut-accordion__panel--open' : 'brut-accordion__panel--closed'}`}
      style={{ height: height !== undefined ? `${height}px` : 'auto' }}
      role="region"
      aria-hidden={!open}
    >
      <div ref={contentRef} className="brut-accordion__content">
        {children}
      </div>
    </div>
  );
}

/* ── Component ──────────────────────────────────────────────── */

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  (
    {
      items,
      multiple = false,
      defaultOpenKeys = [],
      openKeys,
      onChange,
      size = 'md',
      bordered = false,
      className = '',
      ...rest
    },
    ref
  ) => {
    const [internalOpenKeys, setInternalOpenKeys] = useState<string[]>(defaultOpenKeys);
    const activeKeys = openKeys ?? internalOpenKeys;

    const toggle = useCallback(
      (key: string) => {
        let next: string[];
        if (activeKeys.includes(key)) {
          next = activeKeys.filter((k) => k !== key);
        } else {
          next = multiple ? [...activeKeys, key] : [key];
        }
        if (!openKeys) setInternalOpenKeys(next);
        onChange?.(next);
      },
      [activeKeys, multiple, openKeys, onChange]
    );

    const classNames = [
      'brut-accordion',
      size !== 'md' ? `brut-accordion--${size}` : '',
      bordered ? 'brut-accordion--bordered' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div ref={ref} className={classNames} {...rest}>
        {items.map((item) => {
          const isOpen = activeKeys.includes(item.key);
          const isDisabled = item.disabled === true;

          return (
            <div
              key={item.key}
              className={[
                'brut-accordion__item',
                isOpen ? 'brut-accordion__item--open' : '',
                isDisabled ? 'brut-accordion__item--disabled' : '',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              <button
                className="brut-accordion__trigger"
                onClick={() => !isDisabled && toggle(item.key)}
                aria-expanded={isOpen}
                aria-disabled={isDisabled}
                disabled={isDisabled}
                type="button"
              >
                <span>{item.label}</span>
                <span className="brut-accordion__chevron" aria-hidden="true">▼</span>
              </button>
              <AccordionPanel open={isOpen}>
                {item.content}
              </AccordionPanel>
            </div>
          );
        })}
      </div>
    );
  }
);

Accordion.displayName = 'Accordion';
