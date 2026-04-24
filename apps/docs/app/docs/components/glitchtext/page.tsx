"use client";

import { GlitchText } from "@/app/lib/starkit";
import { Preview, PropsTable, CodeBlock } from "../../../components/DocParts";

const glitchProps = [
  { name: "text", type: "string", required: true, description: "The text to display and glitch" },
  { name: "size", type: "'sm' | 'md' | 'lg'", defaultVal: "'md'", description: "Font size preset" },
  { name: "intensity", type: "'subtle' | 'normal' | 'intense'", defaultVal: "'normal'", description: "Glitch animation intensity" },
  { name: "paused", type: "boolean", defaultVal: "false", description: "Pause the glitch animation" },
];

export default function GlitchTextPage() {
  return (
    <div className="doc-content">
      <div className="doc-badge" style={{ background: "#FFE600" }}>✨ Signature</div>
      <h1 className="doc-title">GlitchText</h1>
      <p className="doc-desc">
        A signature animated text component with a CRT-style RGB glitch effect.
        Uses CSS pseudo-elements and clip-path animations for the glitch layers.
      </p>

      <h2>Default</h2>
      <Preview>
        <GlitchText text="STARKIT" />
      </Preview>

      <h2>Sizes</h2>
      <Preview>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <GlitchText text="Small Glitch" size="sm" />
          <GlitchText text="Medium Glitch" size="md" />
          <GlitchText text="Large Glitch" size="lg" />
        </div>
      </Preview>

      <h2>Intensity</h2>
      <Preview>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, marginBottom: 8, opacity: 0.5 }}>SUBTLE</div>
            <GlitchText text="Barely There" intensity="subtle" />
          </div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, marginBottom: 8, opacity: 0.5 }}>NORMAL</div>
            <GlitchText text="Standard Effect" intensity="normal" />
          </div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, marginBottom: 8, opacity: 0.5 }}>INTENSE</div>
            <GlitchText text="Maximum Chaos" intensity="intense" />
          </div>
        </div>
      </Preview>

      <h2>Paused</h2>
      <Preview>
        <GlitchText text="Frozen in Time" paused />
      </Preview>

      <h2>Usage</h2>
      <CodeBlock
        code={`import { GlitchText } from 'starkit-ui';

// Hero heading
<GlitchText text="BUILD BOLD UIs" size="lg" />

// Subtle accent
<GlitchText text="v0.1.0" size="sm" intensity="subtle" />

// Maximum chaos
<GlitchText text="ERROR" intensity="intense" />`}
      />

      <h2>Accessibility</h2>
      <ul className="doc-list">
        <li>Uses <code>aria-label</code> for screen readers</li>
        <li>Respects <code>prefers-reduced-motion</code> — animation disabled automatically</li>
        <li><code>paused</code> prop for manual control</li>
      </ul>

      <h2>Props</h2>
      <PropsTable data={glitchProps} />
    </div>
  );
}

