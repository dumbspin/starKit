"use client";

import { Input } from "@/app/lib/starkit";
import { Preview, PropsTable, CodeBlock } from "../../../components/DocParts";

const inputProps = [
  {
    name: "variant",
    type: "'default' | 'outline'",
    default: "'default'",
    description: "Visual variant controlling background style.",
  },
  {
    name: "size",
    type: "'sm' | 'md' | 'lg'",
    default: "'md'",
    description: "Size preset controlling height and font size.",
  },
  {
    name: "label",
    type: "string",
    default: "—",
    description: "Label text displayed above the input.",
  },
  {
    name: "hint",
    type: "string",
    default: "—",
    description: "Hint text displayed below the input.",
  },
  {
    name: "error",
    type: "string",
    default: "—",
    description: "Error message. Overrides hint and applies error styling.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Disables the input.",
  },
  {
    name: "fullWidth",
    type: "boolean",
    default: "false",
    description: "Stretches the input to fill its container.",
  },
  {
    name: "prefix",
    type: "ReactNode",
    default: "—",
    description: "Element rendered inside the input, before the text.",
  },
  {
    name: "suffix",
    type: "ReactNode",
    default: "—",
    description: "Element rendered inside the input, after the text.",
  },
  {
    name: "className",
    type: "string",
    default: "''",
    description: "Additional CSS classes merged onto the container.",
  },
];

export default function InputPage() {
  return (
    <>
      <div className="doc-page-header">
        <div className="doc-page-header__badge">Component</div>
        <h1 className="doc-page-header__title">Input</h1>
        <p className="doc-page-header__desc">
          Text inputs with labels, hints, errors, prefix/suffix slots, and the
          signature neo-brutalist focus effect.
        </p>
      </div>

      {/* ── Default ───────────────────────────────────────────── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Default</h2>
        <Preview
          direction="col"
          title="Input with label and hint"
          code={`<Input
  label="Email Address"
  placeholder="you@example.com"
  hint="We'll never share your email."
/>`}
        >
          <Input
            label="Email Address"
            placeholder="you@example.com"
            hint="We'll never share your email."
          />
        </Preview>
      </section>

      {/* ── Variants ──────────────────────────────────────────── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Variants</h2>
        <Preview
          direction="col"
          title="Default vs Outline"
          code={`<Input variant="default" label="Default" placeholder="White background" />
<Input variant="outline" label="Outline" placeholder="Transparent background" />`}
        >
          <Input variant="default" label="Default" placeholder="White background" />
          <Input variant="outline" label="Outline" placeholder="Transparent background" />
        </Preview>
      </section>

      {/* ── Sizes ─────────────────────────────────────────────── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Sizes</h2>
        <Preview
          direction="col"
          title="Small, medium, and large"
          code={`<Input size="sm" label="Small" placeholder="Small input" />
<Input size="md" label="Medium" placeholder="Medium input" />
<Input size="lg" label="Large" placeholder="Large input" />`}
        >
          <Input size="sm" label="Small" placeholder="Small input" />
          <Input size="md" label="Medium" placeholder="Medium input" />
          <Input size="lg" label="Large" placeholder="Large input" />
        </Preview>
      </section>

      {/* ── Error State ───────────────────────────────────────── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Error State</h2>
        <Preview
          direction="col"
          title="Error styling with message"
          code={`<Input
  label="Password"
  type="password"
  placeholder="••••••••"
  error="Password must be at least 8 characters."
/>`}
        >
          <Input
            label="Password"
            type="password"
            placeholder="••••••••"
            error="Password must be at least 8 characters."
          />
        </Preview>
      </section>

      {/* ── Disabled ──────────────────────────────────────────── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Disabled</h2>
        <Preview
          direction="col"
          title="Disabled input"
          code={`<Input
  label="Disabled"
  placeholder="Cannot type here"
  disabled
/>`}
        >
          <Input
            label="Disabled"
            placeholder="Cannot type here"
            disabled
          />
        </Preview>
      </section>

      {/* ── Prefix & Suffix ───────────────────────────────────── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Prefix & Suffix</h2>
        <Preview
          direction="col"
          title="Input with prefix and suffix slots"
          code={`<Input
  label="Website"
  prefix={<span>https://</span>}
  placeholder="example.com"
/>
<Input
  label="Search"
  suffix={<span>🔍</span>}
  placeholder="Type to search..."
/>`}
        >
          <Input
            label="Website"
            prefix={<span>https://</span>}
            placeholder="example.com"
          />
          <Input
            label="Search"
            suffix={<span>🔍</span>}
            placeholder="Type to search..."
          />
        </Preview>
      </section>

      {/* ── Full Width ────────────────────────────────────────── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Full Width</h2>
        <Preview
          direction="col"
          title="Input stretches to fill container"
          code={`<Input label="Full Width" placeholder="Takes all space" fullWidth />`}
        >
          <Input label="Full Width" placeholder="Takes all space" fullWidth />
        </Preview>
      </section>

      {/* ── Usage ─────────────────────────────────────────────── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Usage</h2>
        <CodeBlock
          filename="LoginForm.tsx"
          code={`import { Input, Button } from 'starkit-ui';

function LoginForm() {
  return (
    <form>
      <Input
        label="Email"
        type="email"
        placeholder="you@example.com"
        fullWidth
      />
      <Input
        label="Password"
        type="password"
        placeholder="••••••••"
        error={errors.password}
        fullWidth
      />
      <Button type="submit" fullWidth size="lg">
        Sign In
      </Button>
    </form>
  );
}`}
        />
      </section>

      {/* ── Props ─────────────────────────────────────────────── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Props</h2>
        <PropsTable props={inputProps} />
        <p style={{ fontSize: 13, color: "var(--doc-gray-600)" }}>
          All standard <code>&lt;input&gt;</code> HTML attributes are also
          supported (except <code>size</code>, <code>prefix</code>, <code>suffix</code> which are overridden).
        </p>
      </section>
    </>
  );
}

