"use client";

import React from "react";
import { Navbar, Card, Button, Badge, GlitchText } from "../../lib/starkit";

export default function PortfolioTemplate() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--brut-bg, #ffffff)", fontFamily: "var(--brut-font-family)" }}>
      <Navbar
        brand={<span style={{ fontWeight: 900, fontSize: "24px" }}>JANE DOE</span>}
        links={[
          { key: "work", label: "Work", href: "#work" },
          { key: "about", label: "About", href: "#about" },
        ]}
        actions={<Button variant="primary">Hire Me</Button>}
        sticky
        shadow
      />

      <main style={{ padding: "40px 20px", maxWidth: "1000px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "80px" }}>
        
        {/* Hero Section */}
        <section style={{ textAlign: "center", padding: "80px 0" }}>
          <Badge variant="primary" style={{ marginBottom: "24px" }}>Available for Work</Badge>
          <div style={{ fontSize: "64px", fontWeight: 900, lineHeight: 1.1, marginBottom: "24px" }}>
            <GlitchText text="CREATIVE DEVELOPER" intensity="high" />
          </div>
          <p style={{ fontSize: "24px", maxWidth: "600px", margin: "0 auto 40px", opacity: 0.8 }}>
            I build digital experiences that are brutal, fast, and accessible.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
            <Button variant="primary" size="lg">View Projects</Button>
            <Button variant="outline" size="lg">Read Resume</Button>
          </div>
        </section>

        {/* Projects Section */}
        <section id="work">
          <h2 style={{ fontSize: "40px", fontWeight: 900, marginBottom: "40px", borderBottom: "4px solid black", paddingBottom: "16px" }}>Selected Work</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "40px" }}>
            <Card padding="lg" style={{ display: "flex", flexWrap: "wrap", gap: "24px", backgroundColor: "var(--brut-yellow)" }}>
              <div style={{ flex: 1, minWidth: "300px", backgroundColor: "#fff", border: "var(--brut-border)", height: "200px" }}></div>
              <div style={{ flex: 1, minWidth: "300px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <h3 style={{ fontSize: "32px", fontWeight: 900, marginBottom: "16px" }}>FinTech Dashboard</h3>
                <p style={{ marginBottom: "24px", fontSize: "18px" }}>A complete redesign of a banking application dashboard.</p>
                <div style={{ display: "flex", gap: "8px", marginBottom: "24px" }}>
                  <Badge>React</Badge>
                  <Badge>TypeScript</Badge>
                </div>
                <Button variant="secondary" style={{ alignSelf: "flex-start" }}>Case Study</Button>
              </div>
            </Card>

            <Card padding="lg" style={{ display: "flex", flexWrap: "wrap", gap: "24px", backgroundColor: "var(--brut-blue)" }}>
              <div style={{ flex: 1, minWidth: "300px", display: "flex", flexDirection: "column", justifyContent: "center", color: "#fff" }}>
                <h3 style={{ fontSize: "32px", fontWeight: 900, marginBottom: "16px" }}>E-Commerce Store</h3>
                <p style={{ marginBottom: "24px", fontSize: "18px" }}>A high-conversion headless Shopify storefront.</p>
                <div style={{ display: "flex", gap: "8px", marginBottom: "24px" }}>
                  <Badge variant="default" style={{ color: "#000" }}>Next.js</Badge>
                  <Badge variant="default" style={{ color: "#000" }}>Tailwind</Badge>
                </div>
                <Button variant="outline" style={{ alignSelf: "flex-start", backgroundColor: "#fff", color: "#000" }}>Case Study</Button>
              </div>
              <div style={{ flex: 1, minWidth: "300px", backgroundColor: "#fff", border: "var(--brut-border)", height: "200px" }}></div>
            </Card>
          </div>
        </section>

      </main>
    </div>
  );
}
