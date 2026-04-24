"use client";

import { Dropdown } from "@/app/lib/starkit";
import { Preview, PropsTable, CodeBlock } from "../../../components/DocParts";

const dropdownProps = [
  { name: "items", type: "DropdownItem[]", required: true, description: "Menu items (key, label, icon, disabled, danger, divider)" },
  { name: "trigger", type: "ReactNode", required: true, description: "Trigger button label" },
  { name: "onSelect", type: "(key: string) => void", description: "Callback when an item is selected" },
  { name: "size", type: "'sm' | 'md' | 'lg'", defaultVal: "'md'", description: "Size preset" },
  { name: "disabled", type: "boolean", defaultVal: "false", description: "Disable the dropdown" },
  { name: "alignRight", type: "boolean", defaultVal: "false", description: "Align menu to the right edge" },
];

export default function DropdownPage() {
  return (
    <div className="doc-content">
      <div className="doc-badge">Component</div>
      <h1 className="doc-title">Dropdown</h1>
      <p className="doc-desc">
        An action menu triggered by a button. Supports keyboard navigation,
        danger items, dividers, icons, and right-alignment.
      </p>

      <h2>Default</h2>
      <Preview>
        <Dropdown
          trigger="Actions"
          items={[
            { key: "edit", label: "Edit", icon: "✏️" },
            { key: "duplicate", label: "Duplicate", icon: "📋" },
            { key: "archive", label: "Archive", icon: "📦", disabled: true },
            { key: "div1", divider: true },
            { key: "delete", label: "Delete", icon: "🗑️", danger: true },
          ]}
          onSelect={(key) => alert(`Selected: ${key}`)}
        />
      </Preview>

      <h2>Sizes</h2>
      <Preview>
        <div style={{ display: "flex", gap: 12 }}>
          <Dropdown trigger="Small" size="sm" items={[{ key: "a", label: "Option A" }, { key: "b", label: "Option B" }]} />
          <Dropdown trigger="Medium" items={[{ key: "a", label: "Option A" }, { key: "b", label: "Option B" }]} />
          <Dropdown trigger="Large" size="lg" items={[{ key: "a", label: "Option A" }, { key: "b", label: "Option B" }]} />
        </div>
      </Preview>

      <h2>Disabled</h2>
      <Preview>
        <Dropdown trigger="Disabled" disabled items={[{ key: "x", label: "Hidden" }]} />
      </Preview>

      <h2>Right-aligned</h2>
      <Preview>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Dropdown
            trigger="Right Aligned"
            alignRight
            items={[
              { key: "profile", label: "Profile", icon: "👤" },
              { key: "settings", label: "Settings", icon: "⚙️" },
              { key: "div", divider: true },
              { key: "logout", label: "Log Out", danger: true },
            ]}
          />
        </div>
      </Preview>

      <h2>Usage</h2>
      <CodeBlock
        code={`import { Dropdown } from 'starkit';

<Dropdown
  trigger="Actions"
  items={[
    { key: 'edit', label: 'Edit', icon: '✏️' },
    { key: 'delete', label: 'Delete', danger: true },
    { key: 'divider', divider: true },
    { key: 'archive', label: 'Archive', disabled: true },
  ]}
  onSelect={(key) => console.log(key)}
/>`}
      />

      <h2>Accessibility</h2>
      <ul className="doc-list">
        <li><strong>Arrow Up/Down</strong> — navigate menu items</li>
        <li><strong>Home / End</strong> — jump to first/last item</li>
        <li><strong>Enter / Space</strong> — select focused item</li>
        <li><strong>Escape</strong> — close menu and return focus to trigger</li>
        <li><strong>Click outside</strong> — closes the menu</li>
      </ul>

      <h2>Props</h2>
      <PropsTable data={dropdownProps} />
    </div>
  );
}
