import React, {
  forwardRef,
  useState,
  useRef,
  useCallback,
  useEffect,
  type HTMLAttributes,
  type ReactNode,
} from 'react';
import './dropdown.css';

/* ── Types ──────────────────────────────────────────────────── */

export type DropdownSize = 'sm' | 'md' | 'lg';

export interface DropdownItem {
  /** Unique key */
  key: string;
  /** Label text (optional for divider items) */
  label?: ReactNode;
  /** Icon before the label */
  icon?: ReactNode;
  /** Disabled state */
  disabled?: boolean;
  /** Danger styling */
  danger?: boolean;
  /** Renders a divider instead of an item */
  divider?: boolean;
}

export interface DropdownProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange' | 'onSelect'> {
  /** Menu items */
  items: DropdownItem[];
  /** Trigger button label */
  trigger: ReactNode;
  /** Called when an item is selected */
  onSelect?: (key: string) => void;
  /** Size preset */
  size?: DropdownSize;
  /** Disable the dropdown */
  disabled?: boolean;
  /** Align menu to the right edge of the trigger */
  alignRight?: boolean;
}

/* ── Component ──────────────────────────────────────────────── */

export const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
  (
    {
      items,
      trigger,
      onSelect,
      size = 'md',
      disabled = false,
      alignRight = false,
      className = '',
      ...rest
    },
    ref
  ) => {
    const [open, setOpen] = useState(false);
    const [focusIndex, setFocusIndex] = useState(-1);
    const containerRef = useRef<HTMLDivElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    const selectableItems = items.filter((i) => !i.divider && !i.disabled);

    /* ── Toggle ──────────────────────────────────────────────── */
    const toggle = useCallback(() => {
      if (disabled) return;
      setOpen((prev) => {
        if (!prev) setFocusIndex(-1);
        return !prev;
      });
    }, [disabled]);

    const close = useCallback(() => {
      setOpen(false);
      setFocusIndex(-1);
    }, []);

    /* ── Select Item ─────────────────────────────────────────── */
    const handleSelect = useCallback(
      (key: string) => {
        onSelect?.(key);
        close();
      },
      [onSelect, close]
    );

    /* ── Click Outside ───────────────────────────────────────── */
    useEffect(() => {
      if (!open) return;
      const handleClickOutside = (e: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
          close();
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [open, close]);

    /* ── Keyboard Navigation ─────────────────────────────────── */
    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent) => {
        if (!open && (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          setOpen(true);
          setFocusIndex(0);
          return;
        }

        if (!open) return;

        switch (e.key) {
          case 'ArrowDown':
            e.preventDefault();
            setFocusIndex((prev) => {
              const next = (prev + 1) % selectableItems.length;
              return next;
            });
            break;
          case 'ArrowUp':
            e.preventDefault();
            setFocusIndex((prev) => {
              const next = (prev - 1 + selectableItems.length) % selectableItems.length;
              return next;
            });
            break;
          case 'Home':
            e.preventDefault();
            setFocusIndex(0);
            break;
          case 'End':
            e.preventDefault();
            setFocusIndex(selectableItems.length - 1);
            break;
          case 'Enter':
          case ' ':
            e.preventDefault();
            if (focusIndex >= 0 && focusIndex < selectableItems.length) {
              handleSelect(selectableItems[focusIndex].key);
            }
            break;
          case 'Escape':
            e.preventDefault();
            close();
            // Return focus to trigger
            const trigger = containerRef.current?.querySelector<HTMLButtonElement>(
              '.brut-dropdown__trigger'
            );
            trigger?.focus();
            break;
        }
      },
      [open, focusIndex, selectableItems, handleSelect, close]
    );

    /* ── Focus management ────────────────────────────────────── */
    useEffect(() => {
      if (!open || focusIndex < 0) return;
      const menu = menuRef.current;
      if (!menu) return;
      const items = menu.querySelectorAll<HTMLButtonElement>(
        '.brut-dropdown__item:not(:disabled)'
      );
      items[focusIndex]?.focus();
    }, [open, focusIndex]);

    const containerClasses = [
      'brut-dropdown',
      size !== 'md' ? `brut-dropdown--${size}` : '',
      open ? 'brut-dropdown--open' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div
        ref={(node) => {
          (containerRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
          if (typeof ref === 'function') ref(node);
          else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
        }}
        className={containerClasses}
        onKeyDown={handleKeyDown}
        {...rest}
      >
        <button
          className="brut-dropdown__trigger brut-structural brut-interactive brut-focusable brut-shadow-sm"
          onClick={toggle}
          disabled={disabled}
          aria-haspopup="listbox"
          aria-expanded={open}
          type="button"
        >
          {trigger}
          <span className="brut-dropdown__arrow" aria-hidden="true">
            ▼
          </span>
        </button>

        {open && (
          <div
            ref={menuRef}
            className={`brut-dropdown__menu brut-structural brut-shadow-md ${alignRight ? 'brut-dropdown__menu--right' : ''}`}
            role="listbox"
          >
            {items.map((item) => {
              if (item.divider) {
                return <div key={item.key} className="brut-dropdown__divider" role="separator" />;
              }

              const selectableIndex = selectableItems.findIndex((s) => s.key === item.key);
              const isFocused = selectableIndex === focusIndex;

              return (
                <button
                  key={item.key}
                  className={[
                    'brut-dropdown__item',
                    item.danger ? 'brut-dropdown__item--danger' : '',
                    isFocused ? 'brut-dropdown__item--focused' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  role="option"
                  aria-selected={isFocused}
                  disabled={item.disabled}
                  onClick={() => handleSelect(item.key)}
                  tabIndex={-1}
                  type="button"
                >
                  {item.icon && <span className="brut-dropdown__item-icon">{item.icon}</span>}
                  {item.label}
                </button>
              );
            })}
          </div>
        )}
      </div>
    );
  }
);

Dropdown.displayName = 'Dropdown';
