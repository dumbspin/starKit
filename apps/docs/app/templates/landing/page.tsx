"use client";

import React from "react";
import { Navbar, Card, Button, FormField, Input, Tabs, ParallaxSection, ScrollReveal, StickySection, ScrollBlur } from "../../lib/starkit";

export default function LandingTemplate() {
  const tabs = [
    { key: "monthly", label: "Monthly Billing" },
    { key: "yearly", label: "Yearly Billing (Save 20%)" },
  ];

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--brut-gray)" }}>
      <Navbar
        brand={<span style={{ fontWeight: 900, fontSize: "28px" }}>SaaS.io</span>}
        links={[
          { key: "features", label: "Features", href: "#" },
          { key: "pricing", label: "Pricing", href: "#" },
        ]}
        actions={<Button variant="primary">Start Free Trial</Button>}
        sticky
        shadow
        style={{ backgroundColor: "#fff" }}
      />

      <main>
        {/* Hero with Parallax */}
        <ParallaxSection
          speed={0.3}
          style={{ borderBottom: "var(--brut-border-thick)" }}
          background={
            <div style={{ 
              width: "100%", height: "100%", backgroundColor: "var(--brut-yellow)",
              backgroundImage: "radial-gradient(var(--brut-black) 2px, transparent 2px)",
              backgroundSize: "40px 40px",
              opacity: 0.1
            }} />
          }
        >
          <section style={{ backgroundColor: "var(--brut-yellow)", padding: "120px 20px", textAlign: "center" }}>
            <ScrollReveal animation="slide-up">
              <h1 style={{ fontSize: "72px", fontWeight: 900, maxWidth: "800px", margin: "0 auto 24px", lineHeight: 1 }}>
                Build Software Faster Than Ever.
              </h1>
            </ScrollReveal>
            <ScrollReveal animation="slide-up" delay={150}>
              <p style={{ fontSize: "24px", maxWidth: "600px", margin: "0 auto 40px", fontWeight: 700 }}>
                The ultimate development tool that actually works. No fluff, just brutal efficiency.
              </p>
            </ScrollReveal>
            <ScrollReveal animation="scale" delay={300}>
              <div style={{ display: "flex", justifyContent: "center", gap: "16px" }}>
                <Button size="lg" variant="primary">Get Started</Button>
                <Button size="lg" variant="outline" style={{ backgroundColor: "#fff" }}>View Demo</Button>
              </div>
            </ScrollReveal>
          </section>
        </ParallaxSection>

        {/* Sticky Section Demo */}
        <StickySection trackHeight="200vh">
          {(progress) => {
            const step = Math.floor(progress * 3);
            const messages = [
              "We took the pain out of CSS.",
              "We removed the rounded corners.",
              "We made UI brutal again."
            ];
            const colors = ["var(--brut-green)", "var(--brut-blue)", "var(--brut-pink)"];

            return (
              <div style={{ 
                height: "100%", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center",
                backgroundColor: colors[Math.min(step, 2)],
                transition: "background-color 0.3s ease"
              }}>
                <h2 style={{ 
                  fontSize: "64px", 
                  fontWeight: 900, 
                  color: step === 1 ? "#fff" : "#000",
                  transform: `scale(${0.8 + progress * 0.4})`,
                  transition: "color 0.3s ease, transform 0.1s linear"
                }}>
                  {messages[Math.min(step, 2)]}
                </h2>
              </div>
            );
          }}
        </StickySection>

        {/* Features with ScrollReveal */}
        <section style={{ padding: "80px 20px", maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "48px", fontWeight: 900, textAlign: "center", marginBottom: "64px" }}>Why choose us?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px" }}>
            <ScrollReveal animation="slide-up" delay={0}>
              <Card padding="lg" style={{ height: "100%" }}>
                <h3 style={{ fontSize: "24px", fontWeight: 900, marginBottom: "16px" }}>Lightning Fast</h3>
                <p>Optimized for speed. Every millisecond counts when you are building at scale.</p>
              </Card>
            </ScrollReveal>
            <ScrollReveal animation="slide-up" delay={150}>
              <Card padding="lg" style={{ backgroundColor: "var(--brut-green)", height: "100%" }}>
                <h3 style={{ fontSize: "24px", fontWeight: 900, marginBottom: "16px" }}>Fully Secure</h3>
                <p>Enterprise grade security baked in by default. We take your data seriously.</p>
              </Card>
            </ScrollReveal>
            <ScrollReveal animation="slide-up" delay={300}>
              <Card padding="lg" style={{ backgroundColor: "var(--brut-blue)", color: "#fff", height: "100%" }}>
                <h3 style={{ fontSize: "24px", fontWeight: 900, marginBottom: "16px" }}>Easy Integration</h3>
                <p>Connect with your favorite tools in one click. Webhooks included.</p>
              </Card>
            </ScrollReveal>
          </div>
        </section>

        {/* Pricing */}
        <section style={{ padding: "80px 20px", backgroundColor: "#fff", borderTop: "var(--brut-border-thick)" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <ScrollBlur delay={100}>
              <h2 style={{ fontSize: "48px", fontWeight: 900, textAlign: "center", marginBottom: "40px" }}>Simple Pricing</h2>
            </ScrollBlur>
            
            <div style={{ marginTop: "40px" }}>
              <Tabs 
                items={[
                  { 
                    key: "monthly", 
                    label: "Monthly Billing",
                    content: (
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px", marginTop: "32px" }}>
                        <Card padding="lg">
                          <h3 style={{ fontSize: "24px", fontWeight: 900 }}>Starter</h3>
                          <p style={{ fontSize: "48px", fontWeight: 900, margin: "24px 0" }}>$29<span style={{ fontSize: "20px", fontWeight: 400 }}>/mo</span></p>
                          <ul style={{ margin: "0 0 32px 20px", lineHeight: 2 }}>
                            <li>Up to 5 users</li>
                            <li>Basic Analytics</li>
                            <li>Email Support</li>
                          </ul>
                          <Button variant="outline" fullWidth>Choose Starter</Button>
                        </Card>

                        <Card padding="lg" style={{ backgroundColor: "var(--brut-black)", color: "#fff" }}>
                          <h3 style={{ fontSize: "24px", fontWeight: 900 }}>Pro</h3>
                          <p style={{ fontSize: "48px", fontWeight: 900, margin: "24px 0" }}>$99<span style={{ fontSize: "20px", fontWeight: 400 }}>/mo</span></p>
                          <ul style={{ margin: "0 0 32px 20px", lineHeight: 2 }}>
                            <li>Unlimited users</li>
                            <li>Advanced Analytics</li>
                            <li>24/7 Priority Support</li>
                          </ul>
                          <Button variant="primary" style={{ backgroundColor: "var(--brut-yellow)", color: "black" }} fullWidth>Choose Pro</Button>
                        </Card>
                      </div>
                    )
                  },
                  { 
                    key: "yearly", 
                    label: "Yearly Billing (Save 20%)",
                    content: (
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px", marginTop: "32px" }}>
                        <Card padding="lg">
                          <h3 style={{ fontSize: "24px", fontWeight: 900 }}>Starter</h3>
                          <p style={{ fontSize: "48px", fontWeight: 900, margin: "24px 0" }}>$24<span style={{ fontSize: "20px", fontWeight: 400 }}>/mo</span></p>
                          <ul style={{ margin: "0 0 32px 20px", lineHeight: 2 }}>
                            <li>Up to 5 users</li>
                            <li>Basic Analytics</li>
                            <li>Email Support</li>
                          </ul>
                          <Button variant="outline" fullWidth>Choose Starter</Button>
                        </Card>

                        <Card padding="lg" style={{ backgroundColor: "var(--brut-black)", color: "#fff" }}>
                          <h3 style={{ fontSize: "24px", fontWeight: 900 }}>Pro</h3>
                          <p style={{ fontSize: "48px", fontWeight: 900, margin: "24px 0" }}>$79<span style={{ fontSize: "20px", fontWeight: 400 }}>/mo</span></p>
                          <ul style={{ margin: "0 0 32px 20px", lineHeight: 2 }}>
                            <li>Unlimited users</li>
                            <li>Advanced Analytics</li>
                            <li>24/7 Priority Support</li>
                          </ul>
                          <Button variant="primary" style={{ backgroundColor: "var(--brut-yellow)", color: "black" }} fullWidth>Choose Pro</Button>
                        </Card>
                      </div>
                    )
                  },
                ]} 
                defaultActiveKey="monthly" 
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: "80px 20px", textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
          <ScrollReveal animation="fade">
            <h2 style={{ fontSize: "40px", fontWeight: 900, marginBottom: "24px" }}>Subscribe to updates</h2>
            <Card padding="lg">
              <div style={{ display: "flex", gap: "16px", alignItems: "flex-end" }}>
                <FormField label="Email Address" fullWidth>
                  <Input type="email" placeholder="you@example.com" />
                </FormField>
                <Button variant="primary" style={{ whiteSpace: "nowrap" }}>Subscribe</Button>
              </div>
            </Card>
          </ScrollReveal>
        </section>
      </main>
    </div>
  );
}
