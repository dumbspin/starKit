"use client";

import { Navbar, Button } from "@/app/lib/starkit";
import { Preview, PropsTable, CodeBlock } from "../../../components/DocParts";

const navbarProps = [
  {
    name: "brand",
    type: "ReactNode",
    default: "—",
    description: "Brand logo or text on the left.",
  },
  {
    name: "links",
    type: "NavbarLink[]",
    default: "[]",
    description: "Navigation links (key, label, href, onClick, active).",
  },
  {
    name: "actions",
    type: "ReactNode",
    default: "—",
    description: "Action buttons on the right (shows in desktop and mobile menu).",
  },
  {
    name: "sticky",
    type: "boolean",
    default: "false",
    description: "Applies position: sticky to the navbar.",
  },
  {
    name: "shadow",
    type: "boolean",
    default: "false",
    description: "Adds a bottom hard shadow.",
  },
];

export default function NavbarPage() {
  const links = [
    { key: "home", label: "Home", href: "#" },
    { key: "features", label: "Features", href: "#" },
    { key: "pricing", label: "Pricing", href: "#", active: true },
  ];

  return (
    <>
      <div className="doc-page-header">
        <div className="doc-page-header__badge">Component</div>
        <h1 className="doc-page-header__title">Navbar</h1>
        <p className="doc-page-header__desc">
          Responsive navigation bar with built-in mobile hamburger menu.
        </p>
      </div>

      <section className="doc-section">
        <h2 className="doc-section__title">Basic Usage</h2>
        <Preview
          direction="col"
          title="Navbar with brand, links, and actions"
          code={`const links = [
  { key: "home", label: "Home", href: "#" },
  { key: "pricing", label: "Pricing", href: "#", active: true },
];

<Navbar 
  brand={<b>StarKit</b>} 
  links={links} 
  actions={<Button size="sm">Login</Button>} 
  shadow 
/>`}
        >
          <div style={{ border: 'var(--brut-border)', padding: '24px', backgroundColor: '#f4f4f5', width: '100%' }}>
            <Navbar 
              brand={<b style={{ fontSize: '20px' }}>StarKit</b>} 
              links={links} 
              actions={<Button size="sm">Login</Button>} 
              shadow
              style={{ backgroundColor: '#fff' }}
            />
          </div>
        </Preview>
      </section>

      <section className="doc-section">
        <h2 className="doc-section__title">Props</h2>
        <PropsTable props={navbarProps} />
      </section>
    </>
  );
}
