import React from "react";
import Link from "next/link";
import { DocParts } from "../../components/DocParts";

export default function TemplatesDocs() {
  return (
    <>
      <div className="doc-page-header">
        <h1 className="doc-page-header__title">Templates</h1>
        <p className="doc-page-header__desc">
          Kickstart your next project with fully responsive, neo-brutalist templates.
        </p>
      </div>

      <div className="doc-content" style={{ marginTop: "32px" }}>
        <p>
          We've put together three robust templates built entirely with StarKit components. 
          You can preview them live and copy the source code directly to your project.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px", marginTop: "32px" }}>
          
          <div style={{ border: "2px solid black", padding: "24px", boxShadow: "4px 4px 0px black" }}>
            <h3 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "8px" }}>1. Admin Dashboard</h3>
            <p style={{ marginBottom: "16px" }}>
              A complex layout featuring the <code>DataTable</code>, <code>Accordion</code> for settings, metrics <code>Card</code>s, and <code>Skeleton</code> loading states.
            </p>
            <div style={{ display: "flex", gap: "16px" }}>
              <Link href="/templates/dashboard" style={{ textDecoration: "underline", fontWeight: "bold" }}>View Live Preview</Link>
              <a href="https://github.com/dumbspin/starKit/blob/main/apps/docs/app/templates/dashboard/page.tsx" target="_blank" rel="noreferrer" style={{ textDecoration: "underline" }}>View Source</a>
            </div>
          </div>

          <div style={{ border: "2px solid black", padding: "24px", boxShadow: "4px 4px 0px black" }}>
            <h3 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "8px" }}>2. Developer Portfolio</h3>
            <p style={{ marginBottom: "16px" }}>
              A personal portfolio template highlighting projects with <code>Card</code>s, <code>Badge</code>s, and the signature <code>GlitchText</code>.
            </p>
            <div style={{ display: "flex", gap: "16px" }}>
              <Link href="/templates/portfolio" style={{ textDecoration: "underline", fontWeight: "bold" }}>View Live Preview</Link>
              <a href="https://github.com/dumbspin/starKit/blob/main/apps/docs/app/templates/portfolio/page.tsx" target="_blank" rel="noreferrer" style={{ textDecoration: "underline" }}>View Source</a>
            </div>
          </div>

          <div style={{ border: "2px solid black", padding: "24px", boxShadow: "4px 4px 0px black" }}>
            <h3 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "8px" }}>3. SaaS Landing Page</h3>
            <p style={{ marginBottom: "16px" }}>
              A high-conversion landing page featuring a bold hero section, feature grid, and a pricing section built with <code>Tabs</code>.
            </p>
            <div style={{ display: "flex", gap: "16px" }}>
              <Link href="/templates/landing" style={{ textDecoration: "underline", fontWeight: "bold" }}>View Live Preview</Link>
              <a href="https://github.com/dumbspin/starKit/blob/main/apps/docs/app/templates/landing/page.tsx" target="_blank" rel="noreferrer" style={{ textDecoration: "underline" }}>View Source</a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
