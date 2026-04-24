"use client";

import { ToastProvider, useToast, Button } from "@/app/lib/starkit";
import { Preview, PropsTable, CodeBlock } from "../../../components/DocParts";

const toastProviderProps = [
  { name: "position", type: "'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'", defaultVal: "'top-right'", description: "Screen position for toast stack" },
  { name: "maxToasts", type: "number", defaultVal: "5", description: "Maximum number of visible toasts" },
];

const toastDataProps = [
  { name: "message", type: "string", required: true, description: "Toast body text" },
  { name: "title", type: "string", description: "Optional bold title" },
  { name: "variant", type: "'default' | 'success' | 'danger' | 'info'", defaultVal: "'default'", description: "Color variant" },
  { name: "duration", type: "number", defaultVal: "4000", description: "Auto-dismiss time in ms (0 for persistent)" },
];

function ToastDemo() {
  const { toast } = useToast();
  return (
    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
      <Button variant="primary" size="sm" onClick={() => toast({ title: "Success", message: "Operation completed.", variant: "success" })}>
        Success
      </Button>
      <Button variant="danger" size="sm" onClick={() => toast({ title: "Error", message: "Something went wrong.", variant: "danger" })}>
        Danger
      </Button>
      <Button variant="outline" size="sm" onClick={() => toast({ title: "Info", message: "Update available.", variant: "info" })}>
        Info
      </Button>
      <Button variant="ghost" size="sm" onClick={() => toast({ message: "A default notification." })}>
        Default
      </Button>
    </div>
  );
}

export default function ToastPage() {
  return (
    <div className="doc-content">
      <div className="doc-badge">Component</div>
      <h1 className="doc-title">Toast</h1>
      <p className="doc-desc">
        A notification system with auto-dismiss, stacking, and a progress bar.
        Uses a context provider pattern — wrap your app in <code>&lt;ToastProvider&gt;</code>
        and call <code>useToast()</code> anywhere.
      </p>

      <h2>Variants</h2>
      <Preview>
        <ToastProvider position="top-right">
          <ToastDemo />
        </ToastProvider>
      </Preview>
      <p className="doc-hint">Click the buttons above to trigger toasts in the top-right corner.</p>

      <h2>Usage</h2>
      <CodeBlock
        code={`import { ToastProvider, useToast, Button } from 'starkit-ui';

// 1. Wrap your app
function App() {
  return (
    <ToastProvider position="top-right">
      <MyComponent />
    </ToastProvider>
  );
}

// 2. Use the hook anywhere inside the provider
function MyComponent() {
  const { toast, dismissAll } = useToast();

  return (
    <Button onClick={() =>
      toast({
        title: 'Saved',
        message: 'Your changes have been saved.',
        variant: 'success',
        duration: 3000,
      })
    }>
      Save
    </Button>
  );
}`}
      />

      <h2>Features</h2>
      <ul className="doc-list">
        <li><strong>Auto-dismiss</strong> — configurable duration with progress bar</li>
        <li><strong>Stacking</strong> — multiple toasts stack vertically</li>
        <li><strong>4 positions</strong> — top-right, top-left, bottom-right, bottom-left</li>
        <li><strong>Manual dismiss</strong> — close button on each toast</li>
        <li><strong>Enter/exit animations</strong> — slide in/out</li>
        <li><code>role=&quot;alert&quot;</code> and <code>aria-live=&quot;assertive&quot;</code></li>
      </ul>

      <h2>Provider Props</h2>
      <PropsTable data={toastProviderProps} />

      <h2>Toast Data</h2>
      <PropsTable data={toastDataProps} />
    </div>
  );
}

