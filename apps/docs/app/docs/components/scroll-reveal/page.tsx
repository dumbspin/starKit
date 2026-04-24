"use client";

import React from "react";
import { ScrollReveal, Card } from "@/app/lib/starkit";
import { CodeBlock, PropsTable, Preview } from "../../../components/DocParts";

export default function ScrollRevealDocs() {
  return (
    <>
      <div className="doc-page-header">
        <h1 className="doc-page-header__title">ScrollReveal</h1>
        <p className="doc-page-header__desc">
          Animate elements as they enter the viewport using IntersectionObserver.
        </p>
      </div>

      <div className="doc-content">
        <h2>Usage</h2>
        <p>Wrap any component in <code>ScrollReveal</code> to trigger a CSS animation when it becomes visible.</p>

        <Preview>
          <div style={{ display: "grid", gap: "16px", padding: "32px 0" }}>
            <ScrollReveal animation="slide-up">
              <Card padding="md" style={{ backgroundColor: "var(--brut-yellow)" }}>Slide Up</Card>
            </ScrollReveal>
            <ScrollReveal animation="slide-in-left" delay={150}>
              <Card padding="md" style={{ backgroundColor: "var(--brut-green)" }}>Slide In Left (Delayed)</Card>
            </ScrollReveal>
            <ScrollReveal animation="scale" delay={300}>
              <Card padding="md" style={{ backgroundColor: "var(--brut-pink)" }}>Scale (Delayed)</Card>
            </ScrollReveal>
          </div>
        </Preview>

        <CodeBlock
          code={`import { ScrollReveal, Card } from "starkit-ui";

<ScrollReveal animation="slide-up" delay={150}>
  <Card>Revealed Content</Card>
</ScrollReveal>`}
        />

        <h2>Props</h2>
        <PropsTable
          props={[
            { name: "animation", type: "'fade' | 'slide-up' | 'slide-in-left' | 'slide-in-right' | 'scale'", default: "'slide-up'", description: "The animation to apply." },
            { name: "delay", type: "number", default: "0", description: "Delay in ms." },
            { name: "threshold", type: "number", default: "0.1", description: "How much of the element needs to be visible to trigger." },
            { name: "repeat", type: "boolean", default: "false", description: "Animate out when scrolled past, to animate in again." },
          ]}
        />
      </div>
    </>
  );
}

