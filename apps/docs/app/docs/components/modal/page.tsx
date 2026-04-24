"use client";

import { Modal, Button, Input } from "@/app/lib/starkit";
import { Preview, PropsTable, CodeBlock } from "../../../components/DocParts";
import { useState } from "react";

const modalProps = [
  { name: "open", type: "boolean", required: true, description: "Whether the modal is visible" },
  { name: "onClose", type: "() => void", required: true, description: "Called when the modal requests to close" },
  { name: "title", type: "ReactNode", description: "Header title text" },
  { name: "size", type: "'sm' | 'md' | 'lg'", defaultVal: "'md'", description: "Width preset" },
  { name: "footer", type: "ReactNode", description: "Footer content (typically action buttons)" },
  { name: "closeOnOverlay", type: "boolean", defaultVal: "true", description: "Whether clicking the overlay closes the modal" },
];

function ModalDemo({ size }: { size: "sm" | "md" | "lg" }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant="outline" size="sm" onClick={() => setOpen(true)}>
        Open {size.toUpperCase()}
      </Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title={`Modal — ${size.toUpperCase()}`}
        size={size}
        footer={
          <>
            <Button variant="ghost" size="sm" onClick={() => setOpen(false)}>Cancel</Button>
            <Button variant="primary" size="sm" onClick={() => setOpen(false)}>Confirm</Button>
          </>
        }
      >
        <p style={{ marginBottom: 16 }}>
          This modal has a <strong>focus trap</strong> — Tab cycles through focusable elements.
          Press <strong>Escape</strong> or click the overlay to close.
        </p>
        <Input label="Focus Test" placeholder="Try tabbing here..." fullWidth />
      </Modal>
    </>
  );
}

export default function ModalPage() {
  return (
    <div className="doc-content">
      <div className="doc-badge">Component</div>
      <h1 className="doc-title">Modal</h1>
      <p className="doc-desc">
        A dialog overlay that captures focus and blocks interaction with the page behind it.
        Supports focus trapping, Escape to close, and body scroll lock.
      </p>

      <h2>Sizes</h2>
      <Preview>
        <div style={{ display: "flex", gap: 12 }}>
          <ModalDemo size="sm" />
          <ModalDemo size="md" />
          <ModalDemo size="lg" />
        </div>
      </Preview>

      <h2>Usage</h2>
      <CodeBlock
        code={`import { Modal, Button } from 'starkit-ui';

function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Confirm Action"
        footer={
          <>
            <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
            <Button variant="primary" onClick={() => setOpen(false)}>Confirm</Button>
          </>
        }
      >
        <p>Are you sure you want to proceed?</p>
      </Modal>
    </>
  );
}`}
      />

      <h2>Accessibility</h2>
      <ul className="doc-list">
        <li><strong>Focus trap</strong> — Tab/Shift+Tab cycles within the modal</li>
        <li><strong>Escape</strong> — closes the modal</li>
        <li><strong>Body scroll lock</strong> — page cannot scroll while modal is open</li>
        <li><strong>Auto-focus</strong> — first focusable element is focused on open</li>
        <li><strong>Focus restore</strong> — previously focused element is restored on close</li>
      </ul>

      <h2>Props</h2>
      <PropsTable data={modalProps} />
    </div>
  );
}

