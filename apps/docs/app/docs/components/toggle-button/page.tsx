"use client";

import { ToggleButton } from "@/app/lib/starkit";
import { Preview, PropsTable, CodeBlock } from "../../../components/DocParts";

const toggleButtonProps = [
  {
    name: "defaultPressed",
    type: "boolean",
    default: "false",
    description: "Initial state for uncontrolled usage.",
  },
  {
    name: "pressed",
    type: "boolean",
    default: "undefined",
    description: "Controlled pressed state.",
  },
  {
    name: "onToggle",
    type: "(pressed: boolean) => void",
    default: "—",
    description: "Callback when the state changes.",
  },
  {
    name: "pressedVariant",
    type: "ButtonVariant",
    default: "'primary'",
    description: "Variant to use when pressed.",
  },
  {
    name: "unpressedVariant",
    type: "ButtonVariant",
    default: "'outline'",
    description: "Variant to use when not pressed.",
  },
];

export default function ToggleButtonPage() {
  return (
    <>
      <div className="doc-page-header">
        <div className="doc-page-header__badge">Component</div>
        <h1 className="doc-page-header__title">ToggleButton</h1>
        <p className="doc-page-header__desc">
          A button that holds a pressed/unpressed state, complete with aria-pressed accessibility.
        </p>
      </div>

      <section className="doc-section">
        <h2 className="doc-section__title">Usage</h2>
        <Preview
          title="Uncontrolled toggle button"
          code={`<ToggleButton>Toggle Me</ToggleButton>`}
        >
          <ToggleButton>Toggle Me</ToggleButton>
        </Preview>
      </section>

      <section className="doc-section">
        <h2 className="doc-section__title">Custom Variants</h2>
        <Preview
          title="Different variants for states"
          code={`<ToggleButton pressedVariant="danger" unpressedVariant="ghost">
  Toggle Danger
</ToggleButton>`}
        >
          <ToggleButton pressedVariant="danger" unpressedVariant="ghost">
            Toggle Danger
          </ToggleButton>
        </Preview>
      </section>

      <section className="doc-section">
        <h2 className="doc-section__title">Props</h2>
        <PropsTable props={toggleButtonProps} />
        <p style={{ fontSize: 13, color: "var(--doc-gray-600)" }}>
          Accepts all standard <code>ButtonProps</code>.
        </p>
      </section>
    </>
  );
}
