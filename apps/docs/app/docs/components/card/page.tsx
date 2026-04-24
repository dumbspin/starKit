"use client";

import { Card, Badge, Button } from "@/app/lib/starkit";
import { Preview, PropsTable, CodeBlock } from "../../../components/DocParts";

const cardProps = [
  {
    name: "variant",
    type: "'default' | 'flat' | 'inset'",
    default: "'default'",
    description: "Visual style. Default has shadow, flat has none, inset has gray bg.",
  },
  {
    name: "padding",
    type: "'none' | 'sm' | 'md' | 'lg'",
    default: "'md'",
    description: "Internal padding preset.",
  },
  {
    name: "as",
    type: "'div' | 'article' | 'section'",
    default: "'div'",
    description: "Rendered HTML element for semantic markup.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Disables interactive cards (those with onClick).",
  },
  {
    name: "onClick",
    type: "() => void",
    default: "—",
    description: "Makes the card interactive with hover/active effects.",
  },
  {
    name: "className",
    type: "string",
    default: "''",
    description: "Additional CSS classes.",
  },
];

export default function CardPage() {
  return (
    <>
      <div className="doc-page-header">
        <div className="doc-page-header__badge">Component</div>
        <h1 className="doc-page-header__title">Card</h1>
        <p className="doc-page-header__desc">
          A content container with the signature hard shadow. Cards can be
          static, interactive, or nested with variant-based depth.
        </p>
      </div>

      {/* ── Variants ──────────────────────────────────────────── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Variants</h2>
        <Preview
          direction="col"
          title="Default (shadow), Flat (no shadow), Inset (gray background)"
          code={`<Card variant="default">Default card with hard shadow.</Card>
<Card variant="flat">Flat card — border only, no shadow.</Card>
<Card variant="inset">Inset card — gray background, no shadow.</Card>`}
        >
          <Card variant="default" padding="md">
            <strong>Default</strong> — Card with hard shadow.
          </Card>
          <Card variant="flat" padding="md">
            <strong>Flat</strong> — Border only, no shadow.
          </Card>
          <Card variant="inset" padding="md">
            <strong>Inset</strong> — Gray background, no shadow.
          </Card>
        </Preview>
      </section>

      {/* ── Padding ───────────────────────────────────────────── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Padding</h2>
        <Preview
          direction="col"
          title="none, sm, md, lg"
          code={`<Card padding="none">No padding</Card>
<Card padding="sm">Small padding</Card>
<Card padding="md">Medium padding</Card>
<Card padding="lg">Large padding</Card>`}
        >
          <Card padding="none">No padding</Card>
          <Card padding="sm">Small padding (12px)</Card>
          <Card padding="md">Medium padding (20px)</Card>
          <Card padding="lg">Large padding (32px)</Card>
        </Preview>
      </section>

      {/* ── Interactive ───────────────────────────────────────── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Interactive</h2>
        <Preview
          direction="col"
          title="Cards with onClick gain hover/active shadow effects"
          code={`<Card onClick={() => alert('Clicked!')}>
  Click me — I have hover and active states.
</Card>`}
        >
          <Card onClick={() => alert("Clicked!")} padding="md">
            <strong>Click me</strong> — I have hover and active shadow states.
          </Card>
        </Preview>
      </section>

      {/* ── Disabled ──────────────────────────────────────────── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Disabled</h2>
        <Preview
          direction="col"
          title="Disabled interactive card"
          code={`<Card onClick={() => {}} disabled>
  I am disabled — no interactions.
</Card>`}
        >
          <Card onClick={() => {}} disabled padding="md">
            <strong>Disabled</strong> — No hover, no click.
          </Card>
        </Preview>
      </section>

      {/* ── Composition ───────────────────────────────────────── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Composition Example</h2>
        <Preview
          direction="col"
          title="Card with Badge and Button"
          code={`<Card padding="lg">
  <Badge variant="success" dot>Online</Badge>
  <h3>Server Status</h3>
  <p>All systems operational.</p>
  <Button variant="outline" size="sm">View Details</Button>
</Card>`}
        >
          <Card padding="lg">
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <Badge variant="success" dot>
                Online
              </Badge>
              <h3 style={{ fontWeight: 900 }}>Server Status</h3>
              <p style={{ fontSize: 14, opacity: 0.8 }}>
                All systems operational. Last checked 2 minutes ago.
              </p>
              <Button variant="outline" size="sm">
                View Details
              </Button>
            </div>
          </Card>
        </Preview>
      </section>

      {/* ── Usage ─────────────────────────────────────────────── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Usage</h2>
        <CodeBlock
          filename="Dashboard.tsx"
          code={`import { Card, Badge } from 'starkit';

function Dashboard() {
  return (
    <div style={{ display: 'grid', gap: 16 }}>
      <Card padding="lg" as="article">
        <Badge variant="info">Analytics</Badge>
        <h2>Monthly Report</h2>
        <p>Revenue increased by 24% this quarter.</p>
      </Card>

      <Card variant="inset" padding="md">
        <p>Nested content with muted background.</p>
      </Card>
    </div>
  );
}`}
        />
      </section>

      {/* ── Props ─────────────────────────────────────────────── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Props</h2>
        <PropsTable props={cardProps} />
        <p style={{ fontSize: 13, color: "var(--doc-gray-600)" }}>
          All standard <code>&lt;div&gt;</code> HTML attributes are also
          supported.
        </p>
      </section>
    </>
  );
}
