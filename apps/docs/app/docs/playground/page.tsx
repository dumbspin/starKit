"use client";

import React, { useState } from "react";
import { Button, Input, Card, Badge, FormField } from "@/app/lib/starkit";
import { CodeBlock } from "../../components/DocParts";

export default function PlaygroundPage() {
  const [component, setComponent] = useState<"button" | "input" | "badge">("button");

  // Button State
  const [btnVariant, setBtnVariant] = useState<"primary" | "danger" | "ghost" | "outline">("primary");
  const [btnSize, setBtnSize] = useState<"sm" | "md" | "lg">("md");
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);
  const [btnFullWidth, setBtnFullWidth] = useState(false);

  // Input State
  const [inpVariant, setInpVariant] = useState<"default" | "outline" | "filled">("default");
  const [inpSize, setInpSize] = useState<"sm" | "md" | "lg">("md");
  const [inpDisabled, setInpDisabled] = useState(false);
  const [inpError, setInpError] = useState(false);

  // Badge State
  const [bdgVariant, setBdgVariant] = useState<"default" | "primary" | "success" | "danger" | "warning" | "outline">("primary");

  // Code Generation
  const generateButtonCode = () => {
    let props = [];
    if (btnVariant !== "primary") props.push(`variant="${btnVariant}"`);
    if (btnSize !== "md") props.push(`size="${btnSize}"`);
    if (btnDisabled) props.push("disabled");
    if (btnLoading) props.push("loading");
    if (btnFullWidth) props.push("fullWidth");
    return `<Button${props.length > 0 ? " " + props.join(" ") : ""}>
  Click Me
</Button>`;
  };

  const generateInputCode = () => {
    let props = [];
    if (inpVariant !== "default") props.push(`variant="${inpVariant}"`);
    if (inpSize !== "md") props.push(`size="${inpSize}"`);
    if (inpDisabled) props.push("disabled");
    if (inpError) props.push("error");
    return `<Input placeholder="Enter something..."${props.length > 0 ? " " + props.join(" ") : ""} />`;
  };

  const generateBadgeCode = () => {
    let props = [];
    if (bdgVariant !== "default") props.push(`variant="${bdgVariant}"`);
    return `<Badge${props.length > 0 ? " " + props.join(" ") : ""}>StarKit</Badge>`;
  };

  return (
    <>
      <div className="doc-page-header">
        <h1 className="doc-page-header__title">Interactive Playground</h1>
        <p className="doc-page-header__desc">
          Tweak component properties visually and instantly copy the generated code.
        </p>
      </div>

      <div style={{ marginTop: "32px", display: "flex", gap: "32px", flexWrap: "wrap", alignItems: "flex-start" }}>
        
        {/* Controls Panel */}
        <Card padding="lg" style={{ flex: "1 1 300px", maxWidth: "400px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "24px" }}>Properties</h2>
          
          <FormField label="Component" style={{ marginBottom: "24px" }}>
            <select 
              value={component} 
              onChange={(e) => setComponent(e.target.value as any)}
              style={{ padding: "8px", border: "var(--brut-border)", backgroundColor: "#fff", width: "100%", fontSize: "16px", borderRadius: "0", cursor: "pointer" }}
            >
              <option value="button">Button</option>
              <option value="input">Input</option>
              <option value="badge">Badge</option>
            </select>
          </FormField>

          <hr style={{ border: "0", borderTop: "var(--brut-border)", margin: "24px 0" }} />

          {/* Button Controls */}
          {component === "button" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <FormField label="Variant">
                <select value={btnVariant} onChange={(e) => setBtnVariant(e.target.value as any)} style={{ padding: "8px", border: "var(--brut-border)", backgroundColor: "#fff", width: "100%", fontSize: "16px", borderRadius: "0", cursor: "pointer" }}>
                  <option value="primary">Primary</option>
                  <option value="danger">Danger</option>
                  <option value="ghost">Ghost</option>
                  <option value="outline">Outline</option>
                </select>
              </FormField>

              <FormField label="Size">
                <select value={btnSize} onChange={(e) => setBtnSize(e.target.value as any)} style={{ padding: "8px", border: "var(--brut-border)", backgroundColor: "#fff", width: "100%", fontSize: "16px", borderRadius: "0", cursor: "pointer" }}>
                  <option value="sm">Small (sm)</option>
                  <option value="md">Medium (md)</option>
                  <option value="lg">Large (lg)</option>
                </select>
              </FormField>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "8px" }}>
                <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
                  <input type="checkbox" checked={btnDisabled} onChange={(e) => setBtnDisabled(e.target.checked)} /> Disabled
                </label>
                <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
                  <input type="checkbox" checked={btnLoading} onChange={(e) => setBtnLoading(e.target.checked)} /> Loading
                </label>
                <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
                  <input type="checkbox" checked={btnFullWidth} onChange={(e) => setBtnFullWidth(e.target.checked)} /> Full Width
                </label>
              </div>
            </div>
          )}

          {/* Input Controls */}
          {component === "input" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <FormField label="Variant">
                <select value={inpVariant} onChange={(e) => setInpVariant(e.target.value as any)} style={{ padding: "8px", border: "var(--brut-border)", backgroundColor: "#fff", width: "100%", fontSize: "16px", borderRadius: "0", cursor: "pointer" }}>
                  <option value="default">Default</option>
                  <option value="outline">Outline</option>
                  <option value="filled">Filled</option>
                </select>
              </FormField>

              <FormField label="Size">
                <select value={inpSize} onChange={(e) => setInpSize(e.target.value as any)} style={{ padding: "8px", border: "var(--brut-border)", backgroundColor: "#fff", width: "100%", fontSize: "16px", borderRadius: "0", cursor: "pointer" }}>
                  <option value="sm">Small (sm)</option>
                  <option value="md">Medium (md)</option>
                  <option value="lg">Large (lg)</option>
                </select>
              </FormField>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "8px" }}>
                <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
                  <input type="checkbox" checked={inpDisabled} onChange={(e) => setInpDisabled(e.target.checked)} /> Disabled
                </label>
                <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
                  <input type="checkbox" checked={inpError} onChange={(e) => setInpError(e.target.checked)} /> Error State
                </label>
              </div>
            </div>
          )}

          {/* Badge Controls */}
          {component === "badge" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <FormField label="Variant">
                <select value={bdgVariant} onChange={(e) => setBdgVariant(e.target.value as any)} style={{ padding: "8px", border: "var(--brut-border)", backgroundColor: "#fff", width: "100%", fontSize: "16px", borderRadius: "0", cursor: "pointer" }}>
                  <option value="default">Default</option>
                  <option value="primary">Primary</option>
                  <option value="success">Success</option>
                  <option value="danger">Danger</option>
                  <option value="warning">Warning</option>
                  <option value="outline">Outline</option>
                </select>
              </FormField>
            </div>
          )}

        </Card>

        {/* Live Preview Panel */}
        <div style={{ flex: "2 1 400px", display: "flex", flexDirection: "column", gap: "24px" }}>
          <div style={{ border: "var(--brut-border)", padding: "48px", backgroundColor: "var(--brut-gray)", display: "flex", justifyContent: "center", alignItems: "center", minHeight: "300px", boxShadow: "var(--brut-shadow-md)" }}>
            {component === "button" && (
              <div style={{ width: btnFullWidth ? "100%" : "auto" }}>
                <Button 
                  variant={btnVariant} 
                  size={btnSize} 
                  disabled={btnDisabled} 
                  loading={btnLoading} 
                  fullWidth={btnFullWidth}
                >
                  Click Me
                </Button>
              </div>
            )}
            {component === "input" && (
              <div style={{ width: "100%", maxWidth: "300px" }}>
                <Input 
                  placeholder="Enter something..."
                  variant={inpVariant}
                  size={inpSize}
                  disabled={inpDisabled}
                  error={inpError}
                />
              </div>
            )}
            {component === "badge" && (
              <Badge variant={bdgVariant}>StarKit</Badge>
            )}
          </div>

          <div style={{ position: "relative" }}>
            <h3 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "12px" }}>Generated Code</h3>
            <CodeBlock 
              code={
                component === "button" ? generateButtonCode() : 
                component === "input" ? generateInputCode() : 
                generateBadgeCode()
              } 
            />
          </div>
        </div>

      </div>
    </>
  );
}
