"use client";

import { Tabs } from "@/app/lib/starkit";
import { Preview, PropsTable, CodeBlock } from "../../../components/DocParts";

const tabsProps = [
  { name: "items", type: "TabItem[]", required: true, description: "Array of tab definitions (key, label, content, disabled)" },
  { name: "defaultActiveKey", type: "string", description: "Key of the initially active tab (uncontrolled)" },
  { name: "activeKey", type: "string", description: "Active tab key (controlled mode)" },
  { name: "onChange", type: "(key: string) => void", description: "Callback when active tab changes" },
  { name: "size", type: "'sm' | 'md' | 'lg'", defaultVal: "'md'", description: "Size preset" },
];

export default function TabsPage() {
  return (
    <div className="doc-content">
      <div className="doc-badge">Component</div>
      <h1 className="doc-title">Tabs</h1>
      <p className="doc-desc">
        Tabbed navigation for switching between panels of content. Supports keyboard
        navigation, disabled tabs, and controlled/uncontrolled modes.
      </p>

      <h2>Default</h2>
      <Preview>
        <Tabs
          items={[
            { key: "overview", label: "Overview", content: <p>This is the overview panel content.</p> },
            { key: "usage", label: "Usage", content: <p>Import the component and use it in your app.</p> },
            { key: "api", label: "API", content: <p>See the props table below for details.</p> },
          ]}
        />
      </Preview>

      <h2>Sizes</h2>
      <h3>Small</h3>
      <Preview>
        <Tabs
          size="sm"
          items={[
            { key: "a", label: "Alpha", content: <p>Compact tabs for dense layouts.</p> },
            { key: "b", label: "Beta", content: <p>Second tab panel.</p> },
          ]}
        />
      </Preview>

      <h3>Large</h3>
      <Preview>
        <Tabs
          size="lg"
          items={[
            { key: "x", label: "Dashboard", content: <p>Large tabs for top-level navigation.</p> },
            { key: "y", label: "Settings", content: <p>Settings panel content.</p> },
          ]}
        />
      </Preview>

      <h2>Disabled Tab</h2>
      <Preview>
        <Tabs
          items={[
            { key: "active", label: "Active", content: <p>This tab is active and selectable.</p> },
            { key: "disabled", label: "Disabled", content: <p>Hidden.</p>, disabled: true },
            { key: "another", label: "Another", content: <p>This one works too.</p> },
          ]}
        />
      </Preview>

      <h2>Usage</h2>
      <CodeBlock
        code={`import { Tabs } from 'starkit-ui';

<Tabs
  items={[
    { key: 'tab1', label: 'First', content: <p>First panel</p> },
    { key: 'tab2', label: 'Second', content: <p>Second panel</p> },
    { key: 'tab3', label: 'Disabled', content: <p>Hidden</p>, disabled: true },
  ]}
  onChange={(key) => console.log('Active:', key)}
/>`}
      />

      <h2>Accessibility</h2>
      <ul className="doc-list">
        <li><strong>Arrow Left/Right</strong> — navigate between tabs</li>
        <li><strong>Home / End</strong> — jump to first/last tab</li>
        <li><strong>Roving tabindex</strong> — only active tab is in tab order</li>
        <li>Proper <code>role=&quot;tablist&quot;</code>, <code>role=&quot;tab&quot;</code>, <code>role=&quot;tabpanel&quot;</code></li>
      </ul>

      <h2>Props</h2>
      <PropsTable data={tabsProps} />
    </div>
  );
}

