"use client";

import { useState, type ReactNode } from "react";

interface CodeBlockProps {
  code: string;
  lang?: string;
  filename?: string;
}

export function CodeBlock({ code, lang = "tsx", filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="doc-code">
      <div className="doc-code__header">
        <span>{filename || lang}</span>
        <button className="doc-code__copy" onClick={handleCopy}>
          {copied ? "✓ Copied" : "Copy"}
        </button>
      </div>
      <div className="doc-code__body">
        {code}
      </div>
    </div>
  );
}

/* ── Preview + Code combo ──────────────────────────────────── */

interface PreviewProps {
  children: ReactNode;
  code?: string;
  title?: string;
  direction?: "row" | "col";
}

export function Preview({ children, code, title, direction = "row" }: PreviewProps) {
  return (
    <div style={{ marginBottom: 24 }}>
      <div className="doc-preview">
        <div
          className={`doc-preview__canvas ${direction === "col" ? "doc-preview__canvas--col" : ""}`}
        >
          {children}
        </div>
        {title && <div className="doc-preview__label">{title}</div>}
      </div>
      {code && <CodeBlock code={code} />}
    </div>
  );
}

/* ── Props Table ───────────────────────────────────────────── */

interface PropDef {
  name: string;
  type: string;
  default?: string;
  defaultVal?: string;
  required?: boolean;
  description: string;
}

interface PropsTableProps {
  props?: PropDef[];
  data?: PropDef[];
}

export function PropsTable({ props, data }: PropsTableProps) {
  const items = props || data || [];
  return (
    <table className="doc-props-table">
      <thead>
        <tr>
          <th>Prop</th>
          <th>Type</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {items.map((p) => (
          <tr key={p.name}>
            <td>
              <span className="doc-props-table__name">
                {p.name}{p.required ? " *" : ""}
              </span>
            </td>
            <td>
              <span className="doc-props-table__type">{p.type}</span>
            </td>
            <td>
              <span className="doc-props-table__default">{p.default || p.defaultVal || "—"}</span>
            </td>
            <td>{p.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
