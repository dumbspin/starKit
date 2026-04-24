import React, { forwardRef, useState, type HTMLAttributes, type ReactNode } from 'react';
import './navbar.css';

/* ── Types ──────────────────────────────────────────────────── */

export interface NavbarLink {
  /** Unique key */
  key: string;
  /** Display label */
  label: ReactNode;
  /** URL href */
  href?: string;
  /** Click handler */
  onClick?: () => void;
  /** Mark as active */
  active?: boolean;
}

export interface NavbarProps extends HTMLAttributes<HTMLElement> {
  /** Brand/logo content */
  brand?: ReactNode;
  /** Navigation links */
  links?: NavbarLink[];
  /** Actions slot (buttons, etc.) — shown in desktop and mobile */
  actions?: ReactNode;
  /** Sticky positioning */
  sticky?: boolean;
  /** Show bottom shadow */
  shadow?: boolean;
}

/* ── Component ──────────────────────────────────────────────── */

export const Navbar = forwardRef<HTMLElement, NavbarProps>(
  (
    {
      brand,
      links = [],
      actions,
      sticky = false,
      shadow = false,
      className = '',
      ...rest
    },
    ref
  ) => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const classNames = [
      'brut-navbar',
      sticky ? 'brut-navbar--sticky' : '',
      shadow ? 'brut-navbar--shadow' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const renderLink = (link: NavbarLink) => {
      const linkClass = [
        'brut-navbar__link',
        link.active ? 'brut-navbar__link--active' : '',
      ]
        .filter(Boolean)
        .join(' ');

      if (link.href) {
        return (
          <a
            key={link.key}
            className={linkClass}
            href={link.href}
            onClick={() => setMobileOpen(false)}
          >
            {link.label}
          </a>
        );
      }

      return (
        <button
          key={link.key}
          className={linkClass}
          type="button"
          onClick={() => {
            link.onClick?.();
            setMobileOpen(false);
          }}
        >
          {link.label}
        </button>
      );
    };

    return (
      <nav ref={ref} className={classNames} role="navigation" aria-label="Main navigation" {...rest}>
        {/* Brand */}
        {brand && <div className="brut-navbar__brand">{brand}</div>}

        {/* Desktop links */}
        <div className="brut-navbar__links" role="menubar">
          {links.map(renderLink)}
        </div>

        {/* Desktop actions */}
        {actions && (
          <div className="brut-navbar__actions brut-navbar__actions--desktop">{actions}</div>
        )}

        {/* Hamburger */}
        <button
          className={`brut-navbar__hamburger${mobileOpen ? ' brut-navbar__hamburger--open' : ''}`}
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation menu"
          type="button"
        >
          <span className="brut-navbar__hamburger-line" />
          <span className="brut-navbar__hamburger-line" />
          <span className="brut-navbar__hamburger-line" />
        </button>

        {/* Mobile menu */}
        <div className={`brut-navbar__mobile${mobileOpen ? ' brut-navbar__mobile--open' : ''}`}>
          {links.map(renderLink)}
          {actions && <div className="brut-navbar__actions">{actions}</div>}
        </div>
      </nav>
    );
  }
);

Navbar.displayName = 'Navbar';
