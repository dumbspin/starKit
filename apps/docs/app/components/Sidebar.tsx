"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    title: "Getting Started",
    items: [
      { label: "Installation", href: "/docs/installation" },
      { label: "CLI Usage", href: "/docs/cli" },
      { label: "Theming", href: "/docs/theming" },
      { label: "Templates", href: "/docs/templates" },
      { label: "Playground", href: "/docs/playground" },
    ],
  },
  {
    title: "Tutorials",
    items: [
      { label: "Build a Dashboard", href: "/docs/tutorials/dashboard" },
      { label: "Build a Landing Page", href: "/docs/tutorials/landing" },
    ],
  },
  {
    title: "Components",
    items: [
      { label: "Button", href: "/docs/components/button" },
      { label: "CopyButton", href: "/docs/components/copy-button" },
      { label: "ToggleButton", href: "/docs/components/toggle-button" },
      { label: "Input", href: "/docs/components/input" },
      { label: "FormField", href: "/docs/components/formfield" },
      { label: "Card", href: "/docs/components/card" },
      { label: "Badge", href: "/docs/components/badge" },
      { label: "Skeleton", href: "/docs/components/skeleton" },
    ],
  },
  {
    title: "Interactive",
    items: [
      { label: "Modal", href: "/docs/components/modal" },
      { label: "Tabs", href: "/docs/components/tabs" },
      { label: "Toast", href: "/docs/components/toast" },
      { label: "Dropdown", href: "/docs/components/dropdown" },
      { label: "Accordion", href: "/docs/components/accordion" },
    ],
  },
  {
    title: "Data & Layout",
    items: [
      { label: "Navbar", href: "/docs/components/navbar" },
      { label: "DataTable", href: "/docs/components/datatable" },
    ],
  },
  {
    title: "Signature",
    items: [
      { label: "GlitchText", href: "/docs/components/glitchtext" },
    ],
  },
  {
    title: "Scroll Effects",
    items: [
      { label: "ParallaxSection", href: "/docs/components/parallax-section" },
      { label: "ScrollReveal", href: "/docs/components/scroll-reveal" },
      { label: "ScrollBlur", href: "/docs/components/scroll-blur" },
      { label: "StickySection", href: "/docs/components/sticky-section" },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="doc-sidebar">
      {navItems.map((section) => (
        <div key={section.title} className="doc-sidebar__section">
          <div className="doc-sidebar__title">{section.title}</div>
          {section.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`doc-sidebar__link ${pathname === item.href ? "doc-sidebar__link--active" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      ))}
    </aside>
  );
}
