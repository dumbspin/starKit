"use client";

import React from "react";
import { ScrollBlur, Card } from "@/app/lib/starkit";
import { CodeBlock, PropsTable, Preview } from "../../../components/DocParts";

export default function ScrollBlurDocs() {
  return (
    <>
      <div className="doc-page-header">
        <h1 className="doc-page-header__title">ScrollBlur</h1>
        <p className="doc-page-header__desc">
          Animate elements from blurred to sharp as they enter the viewport.
        </p>
      </div>

      <div className="doc-content">
        <h2>Usage</h2>
        <p>Wrap any component in <code>ScrollBlur</code> to trigger a beautiful un-blur animation along with a slight slide up.</p>

        <Preview>
          <div style={{ display: "flex", gap: "16px", padding: "32px 0", flexWrap: "wrap" }}>
            <ScrollBlur>
              <Card padding="lg" style={{ backgroundColor: "var(--brut-blue)", color: "white" }}>
                <h3 style={{ fontSize: "24px" }}>I was blurry!</h3>
              </Card>
            </ScrollBlur>
            <ScrollBlur delay={200}>
              <Card padding="lg" style={{ backgroundColor: "var(--brut-pink)" }}>
                <h3 style={{ fontSize: "24px" }}>I was blurry later!</h3>
              </Card>
            </ScrollBlur>
          </div>
        </Preview>

        <CodeBlock
          code={`import { ScrollBlur, Card } from "starkit-ui";

<ScrollBlur delay={200}>
  <Card>Unblurred Content</Card>
</ScrollBlur>`}
        />

        <h2>Props</h2>
        <PropsTable
          props={[
            { name: "delay", type: "number", default: "0", description: "Delay in ms before the un-blur starts." },
            { name: "threshold", type: "number", default: "0.1", description: "How much of the element needs to be visible to trigger." },
            { name: "repeat", type: "boolean", default: "false", description: "Animate out when scrolled past, to animate in again." },
          ]}
        />
      </div>
    </>
  );
}

