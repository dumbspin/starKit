"use client";

import React from "react";
import { CodeBlock } from "../../../components/DocParts";

export default function BuildLandingTutorial() {
  return (
    <>
      <div className="doc-page-header">
        <h1 className="doc-page-header__title">Tutorial: Build a SaaS Landing Page</h1>
        <p className="doc-page-header__desc">
          Learn how to use StarKit to create a high-converting, neo-brutalist landing page.
        </p>
      </div>

      <div className="doc-content" style={{ marginTop: "32px", display: "flex", flexDirection: "column", gap: "32px" }}>
        
        <section>
          <h2>Step 1: The Hero Section</h2>
          <p style={{ margin: "16px 0" }}>
            The hero section needs to be bold. We use a vibrant background color (<code>var(--brut-yellow)</code>) and thick borders to make it stand out.
          </p>
          <CodeBlock code={`import { Button } from "starkit";

export function Hero() {
  return (
    <section style={{ 
      backgroundColor: "var(--brut-yellow)", 
      padding: "120px 20px", 
      textAlign: "center", 
      borderBottom: "var(--brut-border-thick)" 
    }}>
      <h1 style={{ fontSize: "72px", fontWeight: 900, maxWidth: "800px", margin: "0 auto 24px" }}>
        Ship Faster. Look Better.
      </h1>
      <p style={{ fontSize: "24px", maxWidth: "600px", margin: "0 auto 40px" }}>
        Stop wrestling with CSS. Start building products that stand out.
      </p>
      <div style={{ display: "flex", justifyContent: "center", gap: "16px" }}>
        <Button size="lg" variant="primary">Start Free Trial</Button>
        <Button size="lg" variant="outline" style={{ backgroundColor: "#fff" }}>View Docs</Button>
      </div>
    </section>
  );
}`} />
        </section>

        <section>
          <h2>Step 2: Feature Grid</h2>
          <p style={{ margin: "16px 0" }}>
            Below the hero, we can use <code>Card</code> components to showcase the key features of the product. 
            Varying the card background colors adds that signature playful yet aggressive brutalist aesthetic.
          </p>
          <CodeBlock code={`import { Card } from "starkit";

export function Features() {
  return (
    <section style={{ padding: "80px 20px", maxWidth: "1200px", margin: "0 auto" }}>
      <h2 style={{ fontSize: "48px", fontWeight: 900, textAlign: "center", marginBottom: "64px" }}>
        Everything you need
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "32px" }}>
        
        <Card padding="lg">
          <h3 style={{ fontSize: "24px", fontWeight: 900 }}>Lightning Fast</h3>
          <p>Zero runtime overhead. Just raw CSS and HTML.</p>
        </Card>
        
        <Card padding="lg" style={{ backgroundColor: "var(--brut-green)" }}>
          <h3 style={{ fontSize: "24px", fontWeight: 900 }}>Accessible</h3>
          <p>Keyboard navigation and ARIA attributes built-in.</p>
        </Card>
        
        <Card padding="lg" style={{ backgroundColor: "var(--brut-blue)", color: "#fff" }}>
          <h3 style={{ fontSize: "24px", fontWeight: 900 }}>Themeable</h3>
          <p>Easily swap colors via CSS variables.</p>
        </Card>

      </div>
    </section>
  );
}`} />
        </section>

        <section>
          <h2>Step 3: Interactive Pricing with Tabs</h2>
          <p style={{ margin: "16px 0" }}>
            A common pattern is toggling between Monthly and Yearly pricing. We can achieve this elegantly using the <code>Tabs</code> component.
          </p>
          <CodeBlock code={`import { Tabs, Card, Button } from "starkit";

export function Pricing() {
  const tabs = [
    { 
      key: "monthly", 
      label: "Monthly",
      content: (
        <Card padding="lg">
          <h3 style={{ fontSize: "24px" }}>Pro Monthly</h3>
          <p style={{ fontSize: "48px", fontWeight: "bold" }}>$29/mo</p>
          <Button fullWidth>Subscribe</Button>
        </Card>
      )
    },
    { 
      key: "yearly", 
      label: "Yearly (Save 20%)",
      content: (
        <Card padding="lg" style={{ backgroundColor: "var(--brut-black)", color: "#fff" }}>
          <h3 style={{ fontSize: "24px" }}>Pro Yearly</h3>
          <p style={{ fontSize: "48px", fontWeight: "bold" }}>$24/mo</p>
          <Button variant="primary" style={{ backgroundColor: "var(--brut-yellow)", color: "#000" }} fullWidth>Subscribe</Button>
        </Card>
      )
    }
  ];

  return (
    <section style={{ padding: "80px 20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "40px" }}>Simple Pricing</h2>
      <div style={{ maxWidth: "400px", margin: "0 auto" }}>
        <Tabs items={tabs} />
      </div>
    </section>
  );
}`} />
        </section>

      </div>
    </>
  );
}
