"use client";

import { Badge } from "@/app/lib/starkit";
import { Preview, PropsTable, CodeBlock } from "../../../components/DocParts";

const badgeProps = [
  {
    name: "variant",
    type: "'default' | 'danger' | 'success' | 'info' | 'outline'",
    default: "'default'",
    description: "Color variant for semantic meaning.",
  },
  {
    name: "size",
    type: "'sm' | 'md'",
    default: "'sm'",
    description: "Size of the badge.",
  },
  {
    name: "dot",
    type: "boolean",
    default: "false",
    description: "Shows a circular dot indicator before the label.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Visually dims the badge.",
  },
  {
    name: "className",
    type: "string",
    default: "''",
    description: "Additional CSS classes.",
  },
];

export default function BadgePage() {
  return (
    <>
      <div className="doc-page-header">
        <div className="doc-page-header__badge">Component</div>
        <h1 className="doc-page-header__title">Badge</h1>
        <p className="doc-page-header__desc">
          Compact labels for status, categories, and metadata. High-contrast
          colors with bold borders and uppercase text.
        </p>
      </div>

      {/* ── Variants ──────────────────────────────────────────── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Variants</h2>
        <Preview
          title="All five color variants"
          code={`<Badge variant="default">Default</Badge>
<Badge variant="danger">Danger</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="info">Info</Badge>
<Badge variant="outline">Outline</Badge>`}
        >
          <Badge variant="default">Default</Badge>
          <Badge variant="danger">Danger</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="info">Info</Badge>
          <Badge variant="outline">Outline</Badge>
        </Preview>
      </section>

      {/* ── Sizes ─────────────────────────────────────────────── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Sizes</h2>
        <Preview
          title="Small (default) and medium"
          code={`<Badge size="sm">Small</Badge>
<Badge size="md">Medium</Badge>`}
        >
          <Badge size="sm">Small</Badge>
          <Badge size="md">Medium</Badge>
        </Preview>
      </section>

      {/* ── Dot Indicator ─────────────────────────────────────── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Dot Indicator</h2>
        <Preview
          title="Dot prepends a colored circle for status indication"
          code={`<Badge variant="success" dot>Online</Badge>
<Badge variant="danger" dot>Offline</Badge>
<Badge variant="info" dot>Syncing</Badge>
<Badge variant="default" dot>Active</Badge>`}
        >
          <Badge variant="success" dot>
            Online
          </Badge>
          <Badge variant="danger" dot>
            Offline
          </Badge>
          <Badge variant="info" dot>
            Syncing
          </Badge>
          <Badge variant="default" dot>
            Active
          </Badge>
        </Preview>
      </section>

      {/* ── Disabled ──────────────────────────────────────────── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Disabled</h2>
        <Preview
          title="Disabled badges are dimmed"
          code={`<Badge disabled>Archived</Badge>
<Badge variant="danger" disabled>Removed</Badge>`}
        >
          <Badge disabled>Archived</Badge>
          <Badge variant="danger" disabled>
            Removed
          </Badge>
        </Preview>
      </section>

      {/* ── Real-world usage ──────────────────────────────────── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Real-World Examples</h2>
        <Preview
          title="Badges in context"
          code={`{/* Status list */}
<div>
  <span>API Server</span>
  <Badge variant="success" dot>Operational</Badge>
</div>
<div>
  <span>Build Pipeline</span>
  <Badge variant="info" dot>Running</Badge>
</div>
<div>
  <span>Staging</span>
  <Badge variant="danger" dot>Down</Badge>
</div>`}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
              width: "100%",
              maxWidth: 320,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "8px 0",
                borderBottom: "1px solid var(--doc-gray-200)",
              }}
            >
              <span style={{ fontSize: 14, fontWeight: 500 }}>API Server</span>
              <Badge variant="success" dot>
                Operational
              </Badge>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "8px 0",
                borderBottom: "1px solid var(--doc-gray-200)",
              }}
            >
              <span style={{ fontSize: 14, fontWeight: 500 }}>
                Build Pipeline
              </span>
              <Badge variant="info" dot>
                Running
              </Badge>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "8px 0",
              }}
            >
              <span style={{ fontSize: 14, fontWeight: 500 }}>Staging</span>
              <Badge variant="danger" dot>
                Down
              </Badge>
            </div>
          </div>
        </Preview>
      </section>

      {/* ── Usage ─────────────────────────────────────────────── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Usage</h2>
        <CodeBlock
          filename="StatusCard.tsx"
          code={`import { Badge, Card } from 'starkit';

function StatusCard({ status }) {
  const variant = status === 'up' ? 'success' : 'danger';
  const label = status === 'up' ? 'Operational' : 'Down';

  return (
    <Card padding="md">
      <Badge variant={variant} dot>{label}</Badge>
    </Card>
  );
}`}
        />
      </section>

      {/* ── Props ─────────────────────────────────────────────── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Props</h2>
        <PropsTable props={badgeProps} />
        <p style={{ fontSize: 13, color: "var(--doc-gray-600)" }}>
          All standard <code>&lt;span&gt;</code> HTML attributes are also
          supported.
        </p>
      </section>
    </>
  );
}
