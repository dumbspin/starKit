"use client";

import { FormField, Input } from "@/app/lib/starkit";
import { Preview, PropsTable, CodeBlock } from "../../../components/DocParts";

const formFieldProps = [
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
    description: "Error message (replaces hint when present).",
  },
  {
    name: "required",
    type: "boolean",
    default: "false",
    description: "Adds an asterisk (*) to the label.",
  },
  {
    name: "size",
    type: "'sm' | 'md' | 'lg'",
    default: "'md'",
    description: "Size preset.",
  },
  {
    name: "fullWidth",
    type: "boolean",
    default: "false",
    description: "Stretches the form field to fill its container.",
  },
];

export default function FormFieldPage() {
  return (
    <>
      <div className="doc-page-header">
        <div className="doc-page-header__badge">Component</div>
        <h1 className="doc-page-header__title">FormField</h1>
        <p className="doc-page-header__desc">
          A wrapper component to standardize labels, hints, and error messages for inputs.
        </p>
      </div>

      <section className="doc-section">
        <h2 className="doc-section__title">Usage</h2>
        <Preview
          direction="col"
          title="Basic FormField with Input"
          code={`<FormField label="Username" hint="Pick a unique username" required>
  <Input placeholder="neo_brutalist" />
</FormField>`}
        >
          <div style={{ maxWidth: '400px' }}>
            <FormField label="Username" hint="Pick a unique username" required>
              <Input placeholder="neo_brutalist" />
            </FormField>
          </div>
        </Preview>
      </section>

      <section className="doc-section">
        <h2 className="doc-section__title">Error State</h2>
        <Preview
          direction="col"
          title="Error messages override hints and display in red"
          code={`<FormField label="Email" error="Please enter a valid email address." required>
  <Input placeholder="example@email.com" variant="outline" />
</FormField>`}
        >
          <div style={{ maxWidth: '400px' }}>
            <FormField label="Email" error="Please enter a valid email address." required>
              <Input placeholder="example@email.com" variant="outline" />
            </FormField>
          </div>
        </Preview>
      </section>

      <section className="doc-section">
        <h2 className="doc-section__title">Props</h2>
        <PropsTable props={formFieldProps} />
      </section>
    </>
  );
}
