import React, { forwardRef, useState, useRef, useCallback, type HTMLAttributes } from 'react';
import './tabs.css';

/* ── Types ──────────────────────────────────────────────────── */

export type TabSize = 'sm' | 'md' | 'lg';

export interface TabItem {
  /** Unique key for the tab */
  key: string;
  /** Label shown in the tab button */
  label: React.ReactNode;
  /** Content rendered in the panel when active */
  content: React.ReactNode;
  /** Disable this tab */
  disabled?: boolean;
}

export interface TabsProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Array of tab definitions */
  items: TabItem[];
  /** Key of the initially active tab (uncontrolled) */
  defaultActiveKey?: string;
  /** Key of the active tab (controlled) */
  activeKey?: string;
  /** Called when the active tab changes */
  onChange?: (key: string) => void;
  /** Size preset */
  size?: TabSize;
}

/* ── Component ──────────────────────────────────────────────── */

export const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  (
    {
      items,
      defaultActiveKey,
      activeKey: controlledKey,
      onChange,
      size = 'md',
      className = '',
      ...rest
    },
    ref
  ) => {
    const [internalKey, setInternalKey] = useState(
      defaultActiveKey || items.find((t) => !t.disabled)?.key || items[0]?.key || ''
    );
    const tabListRef = useRef<HTMLDivElement>(null);

    const activeKey = controlledKey !== undefined ? controlledKey : internalKey;

    const setActive = useCallback(
      (key: string) => {
        if (controlledKey === undefined) {
          setInternalKey(key);
        }
        onChange?.(key);
      },
      [controlledKey, onChange]
    );

    /* ── Keyboard Navigation ─────────────────────────────────── */
    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent) => {
        const enabledItems = items.filter((t) => !t.disabled);
        const currentIndex = enabledItems.findIndex((t) => t.key === activeKey);
        let nextIndex = currentIndex;

        switch (e.key) {
          case 'ArrowRight':
          case 'ArrowDown':
            e.preventDefault();
            nextIndex = (currentIndex + 1) % enabledItems.length;
            break;
          case 'ArrowLeft':
          case 'ArrowUp':
            e.preventDefault();
            nextIndex = (currentIndex - 1 + enabledItems.length) % enabledItems.length;
            break;
          case 'Home':
            e.preventDefault();
            nextIndex = 0;
            break;
          case 'End':
            e.preventDefault();
            nextIndex = enabledItems.length - 1;
            break;
          default:
            return;
        }

        const nextKey = enabledItems[nextIndex].key;
        setActive(nextKey);

        // Focus the corresponding button
        const tabList = tabListRef.current;
        if (tabList) {
          const btn = tabList.querySelector<HTMLButtonElement>(
            `[data-tab-key="${nextKey}"]`
          );
          btn?.focus();
        }
      },
      [items, activeKey, setActive]
    );

    const activeItem = items.find((t) => t.key === activeKey);
    const tabId = (key: string) => `brut-tab-${key}`;
    const panelId = (key: string) => `brut-tabpanel-${key}`;

    const containerClasses = [
      'brut-tabs',
      size !== 'md' ? `brut-tabs--${size}` : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div ref={ref} className={containerClasses} {...rest}>
        <div
          className="brut-tabs__list"
          role="tablist"
          ref={tabListRef}
          onKeyDown={handleKeyDown}
        >
          {items.map((tab) => (
            <button
              key={tab.key}
              id={tabId(tab.key)}
              className={`brut-tabs__tab ${tab.key === activeKey ? 'brut-tabs__tab--active' : ''}`}
              role="tab"
              type="button"
              aria-selected={tab.key === activeKey}
              aria-controls={panelId(tab.key)}
              tabIndex={tab.key === activeKey ? 0 : -1}
              disabled={tab.disabled}
              data-tab-key={tab.key}
              onClick={() => setActive(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeItem && (
          <div
            id={panelId(activeItem.key)}
            className="brut-tabs__panel"
            role="tabpanel"
            aria-labelledby={tabId(activeItem.key)}
            tabIndex={0}
          >
            {activeItem.content}
          </div>
        )}
      </div>
    );
  }
);

Tabs.displayName = 'Tabs';
