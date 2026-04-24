"use client";

import React from "react";
import { ParallaxSection } from "@/app/lib/starkit";
import { CodeBlock, PropsTable, Preview } from "../../../components/DocParts";

export default function ParallaxSectionDocs() {
  return (
    <>
      <div className="doc-page-header">
        <h1 className="doc-page-header__title">ParallaxSection</h1>
        <p className="doc-page-header__desc">
          Add depth to your brutally honest layouts with layered background scrolling.
        </p>
      </div>

      <div className="doc-content">
        <h2>Usage</h2>
        <p>Wrap your foreground content and pass a background element. It respects <code>prefers-reduced-motion</code> automatically.</p>

        <Preview>
          <ParallaxSection
            speed={0.4}
            background={
              <div style={{ width: "100%", height: "100%", backgroundColor: "var(--brut-blue)" }} />
            }
            style={{ height: "300px", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <h3 style={{ fontSize: "32px", fontWeight: "bold" }}>I scroll faster!</h3>
          </ParallaxSection>
        </Preview>

        <CodeBlock
          code={`import { ParallaxSection } from "starkit";

<ParallaxSection
  speed={0.4}
  background={
    <div style={{ width: "100%", height: "100%", backgroundColor: "var(--brut-blue)" }} />
  }
>
  <h3>Foreground Content</h3>
</ParallaxSection>`}
        />

        <h2>Props</h2>
        <PropsTable
          props={[
            { name: "speed", type: "number", default: "0.5", description: "Speed of background relative to scroll. 0 = normal, 1 = sticky." },
            { name: "background", type: "ReactNode", default: "-", description: "The background layer content." },
          ]}
        />
      </div>
    </>
  );
}
