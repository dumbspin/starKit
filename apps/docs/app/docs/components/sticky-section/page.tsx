"use client";

import React from "react";
import { StickySection } from "@/app/lib/starkit";
import { CodeBlock, PropsTable, Preview } from "../../../components/DocParts";

export default function StickySectionDocs() {
  return (
    <>
      <div className="doc-page-header">
        <h1 className="doc-page-header__title">StickySection</h1>
        <p className="doc-page-header__desc">
          Pin content to the screen and calculate scroll progress natively.
        </p>
      </div>

      <div className="doc-content">
        <h2>Usage</h2>
        <p>The component provides a render prop with a <code>progress</code> float between <code>0</code> and <code>1</code> as you scroll through the track.</p>

        <Preview>
          <StickySection trackHeight="300px" style={{ height: "300px", border: "var(--brut-border-thick)", overflow: "hidden" }}>
            {(progress) => (
              <div style={{ 
                height: "100%", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center",
                backgroundColor: progress > 0.5 ? "var(--brut-yellow)" : "var(--brut-white)",
                transition: "background-color 0.2s"
              }}>
                <h3 style={{ fontSize: "24px", fontWeight: "bold" }}>
                  Progress: {(progress * 100).toFixed(0)}%
                </h3>
              </div>
            )}
          </StickySection>
        </Preview>

        <CodeBlock
          code={`import { StickySection } from "starkit-ui";

<StickySection trackHeight="200vh">
  {(progress) => (
    <div style={{ opacity: progress }}>
      Scroll to reveal!
    </div>
  )}
</StickySection>`}
        />

        <h2>Props</h2>
        <PropsTable
          props={[
            { name: "trackHeight", type: "string", default: "'300vh'", description: "How tall the scrollable area is (controls duration of stickiness)." },
            { name: "children", type: "(progress: number) => ReactNode", default: "-", description: "Render prop to consume the 0-1 progress value." },
          ]}
        />
      </div>
    </>
  );
}

