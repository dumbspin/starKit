"use client";

import { CopyButton } from "@/app/lib/starkit";
import { Preview, PropsTable, CodeBlock } from "../../../components/DocParts";

const copyButtonProps = [
  {
    name: "value",
    type: "string",
    default: "—",
    description: "The text to copy to clipboard.",
  },
  {
    name: "timeout",
    type: "number",
    default: "2000",
    description: "Duration in ms before the button resets to normal.",
  },
  {
    name: "copiedLabel",
    type: "string",
    default: "'Copied ✓'",
    description: "Text to display when successfully copied.",
  },
  {
    name: "onCopy",
    type: "() => void",
    default: "—",
    description: "Callback fired after copying.",
  },
];

export default function CopyButtonPage() {
  return (
    <>
      <div className="doc-page-header">
        <div className="doc-page-header__badge">Component</div>
        <h1 className="doc-page-header__title">CopyButton</h1>
        <p className="doc-page-header__desc">
          A utility button that writes to the clipboard and handles its own success state.
        </p>
      </div>

      <section className="doc-section">
        <h2 className="doc-section__title">Usage</h2>
        <Preview
          title="Click to copy text"
          code={`<CopyButton value="npm install starkit-ui">Copy Install Command</CopyButton>`}
        >
          <CopyButton value="npm install starkit-ui">Copy Install Command</CopyButton>
        </Preview>
      </section>

      <section className="doc-section">
        <h2 className="doc-section__title">Customization</h2>
        <Preview
          title="Custom label and timeout"
          code={`<CopyButton value="secret_key" copiedLabel="Got it!" timeout={1000} variant="primary">
  Copy Secret Key
</CopyButton>`}
        >
          <CopyButton value="secret_key" copiedLabel="Got it!" timeout={1000} variant="primary">
            Copy Secret Key
          </CopyButton>
        </Preview>
      </section>

      <section className="doc-section">
        <h2 className="doc-section__title">Props</h2>
        <PropsTable props={copyButtonProps} />
        <p style={{ fontSize: 13, color: "var(--doc-gray-600)" }}>
          Accepts all standard <code>ButtonProps</code>.
        </p>
      </section>
    </>
  );
}

