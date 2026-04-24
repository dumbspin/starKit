"use client";

import { Button } from "@/app/lib/starkit";
import { Preview, PropsTable, CodeBlock } from "../../../components/DocParts";

const buttonProps = [
  {
    name: "variant",
    type: "'primary' | 'danger' | 'ghost' | 'outline'",
    default: "'primary'",
    description: "Visual style of the button.",
  },
  {
    name: "size",
    type: "'sm' | 'md' | 'lg'",
    default: "'md'",
    description: "Size preset controlling padding and font size.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Disables the button and prevents interaction.",
  },
  {
    name: "loading",
    type: "boolean",
    default: "false",
    description: "Shows a spinner and disables interaction.",
  },
  {
    name: "effect",
    type: "'slide' | 'pulse' | 'none'",
    default: "'none'",
    description: "Adds hover or visual animation effects.",
  },
  {
    name: "fullWidth",
    type: "boolean",
    default: "false",
    description: "Stretches the button to fill its container.",
  },
  {
    name: "prefixIcon",
    type: "ReactNode",
    default: "—",
    description: "Content rendered before the button label.",
  },
  {
    name: "suffixIcon",
    type: "ReactNode",
    default: "—",
    description: "Content rendered after the button label.",
  },
  {
    name: "className",
    type: "string",
    default: "''",
    description: "Additional CSS classes to merge.",
  },
];

export default function ButtonPage() {
  return (
    <>
      <div className="doc-page-header">
        <div className="doc-page-header__badge">Component</div>
        <h1 className="doc-page-header__title">Button</h1>
        <p className="doc-page-header__desc">
          The primary interactive element. Buttons trigger actions, submit forms,
          and navigate users. Every button carries a hard shadow and snaps on
          press.
        </p>
      </div>

      {/* ── Variants ──────────────────────────────────────────── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Variants</h2>
        <Preview
          title="All variants at medium size"
          code={`<Button variant="primary">Primary</Button>
<Button variant="danger">Danger</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="outline">Outline</Button>`}
        >
          <Button variant="primary">Primary</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="outline">Outline</Button>
        </Preview>
      </section>

      {/* ── Sizes ─────────────────────────────────────────────── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Sizes</h2>
        <Preview
          title="Small, medium, and large"
          code={`<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`}
        >
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </Preview>
      </section>

      {/* ── States ────────────────────────────────────────────── */}
      <section className="doc-section">
        <h2 className="doc-section__title">States</h2>

        <h3 className="doc-section__subtitle">Disabled</h3>
        <Preview
          title="Disabled buttons have reduced opacity and no interaction"
          code={`<Button disabled>Disabled Primary</Button>
<Button variant="danger" disabled>Disabled Danger</Button>
<Button variant="outline" disabled>Disabled Outline</Button>`}
        >
          <Button disabled>Disabled Primary</Button>
          <Button variant="danger" disabled>
            Disabled Danger
          </Button>
          <Button variant="outline" disabled>
            Disabled Outline
          </Button>
        </Preview>

        <h3 className="doc-section__subtitle">Loading</h3>
        <Preview
          title="Loading state shows a square spinner"
          code={`<Button loading>Loading...</Button>
<Button variant="danger" loading>Processing</Button>`}
        >
          <Button loading>Loading...</Button>
          <Button variant="danger" loading>
            Processing
          </Button>
        </Preview>
      </section>

      {/* ── Effects ───────────────────────────────────────────── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Effects</h2>
        <Preview
          title="Optional hover and visual effects"
          code={`<Button effect="slide">Slide Text</Button>
<Button effect="pulse">Pulse Effect</Button>`}
        >
          <Button effect="slide">Slide Text</Button>
          <Button effect="pulse">Pulse Effect</Button>
        </Preview>
      </section>

      {/* ── Full Width ────────────────────────────────────────── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Full Width</h2>
        <Preview
          direction="col"
          title="Button stretches to fill the container"
          code={`<Button fullWidth size="lg">Full Width CTA</Button>
<Button variant="outline" fullWidth>Full Width Outline</Button>`}
        >
          <Button fullWidth size="lg">
            Full Width CTA
          </Button>
          <Button variant="outline" fullWidth>
            Full Width Outline
          </Button>
        </Preview>
      </section>

      {/* ── Variant × Size ────────────────────────────────────── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Variant × Size Matrix</h2>
        <div className="doc-preview">
          <div
            className="doc-preview__canvas"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, auto)",
              gap: 12,
              justifyContent: "start",
            }}
          >
            {(["primary", "danger", "ghost", "outline"] as const).map((v) =>
              (["sm", "md", "lg"] as const).map((s) => (
                <Button key={`${v}-${s}`} variant={v} size={s}>
                  {v} {s}
                </Button>
              ))
            )}
          </div>
          <div className="doc-preview__label">Every variant at every size</div>
        </div>
      </section>

      {/* ── Usage ─────────────────────────────────────────────── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Usage</h2>
        <CodeBlock
          filename="App.tsx"
          code={`import { Button } from 'starkit-ui';
import 'starkit-ui/styles';

function App() {
  return (
    <form onSubmit={handleSubmit}>
      <Button
        variant="primary"
        size="lg"
        loading={isSubmitting}
        fullWidth
      >
        Create Account
      </Button>
    </form>
  );
}`}
        />
      </section>

      {/* ── Props ─────────────────────────────────────────────── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Props</h2>
        <PropsTable props={buttonProps} />
        <p style={{ fontSize: 13, color: "var(--doc-gray-600)" }}>
          All standard <code>&lt;button&gt;</code> HTML attributes are also
          supported via <code>ButtonHTMLAttributes</code>.
        </p>
      </section>
    </>
  );
}

