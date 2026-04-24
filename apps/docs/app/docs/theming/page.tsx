import React from "react";

export default function ThemingDocs() {
  return (
    <>
      <div className="doc-page-header">
        <h1 className="doc-page-header__title">Theming</h1>
        <p className="doc-page-header__desc">
          Customize StarKit's colors, shadows, and spacing.
        </p>
      </div>

      <div className="doc-content" style={{ marginTop: "32px", display: "flex", flexDirection: "column", gap: "24px" }}>
        <p>
          StarKit is built on a solid foundation of CSS variables. By overriding these variables, you can create entirely new themes while maintaining the neo-brutalist architecture.
        </p>

        <section>
          <h2>Dark Mode</h2>
          <p style={{ margin: "16px 0" }}>
            StarKit includes a built-in dark mode. To enable it, simply add the <code>data-theme="dark"</code> attribute to your <code>&lt;html&gt;</code> or <code>&lt;body&gt;</code> tag.
          </p>
          <pre style={{ background: "#f4f4f5", padding: "16px", borderRadius: "8px" }}><code>&lt;html data-theme="dark"&gt;</code></pre>
        </section>

        <section>
          <h2>Custom Themes</h2>
          <p style={{ margin: "16px 0" }}>
            You can create unlimited custom themes by defining new CSS variables scoped to a <code>data-theme</code> attribute, or by overriding the <code>:root</code> variables in your own stylesheet.
          </p>
          
          <h3 style={{ margin: "16px 0" }}>Example: Cyberpunk Theme</h3>
          <p style={{ margin: "16px 0" }}>Add this to your global CSS file to create a custom Cyberpunk theme:</p>
          <pre style={{ background: "#f4f4f5", padding: "16px", borderRadius: "8px" }}><code>{`[data-theme='cyberpunk'] {
  --brut-yellow: #fcee0a;
  --brut-red: #ff003c;
  --brut-blue: #00f0ff;
  --brut-green: #00ff00;
  --brut-black: #000000;
  --brut-white: #fcee0a;
  --brut-gray: #202020;
}`}</code></pre>

          <p style={{ margin: "16px 0" }}>Then apply it to your app:</p>
          <pre style={{ background: "#f4f4f5", padding: "16px", borderRadius: "8px" }}><code>&lt;html data-theme="cyberpunk"&gt;</code></pre>
        </section>

        <section>
          <h2>Design Tokens</h2>
          <p style={{ margin: "16px 0" }}>Here are some of the key tokens you can override:</p>
          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "8px" }}>
            <li><code>--brut-yellow</code>, <code>--brut-red</code>, <code>--brut-blue</code>, <code>--brut-green</code>: Primary UI colors.</li>
            <li><code>--brut-black</code>, <code>--brut-white</code>, <code>--brut-gray</code>: Neutral colors. (In dark mode, black and white are typically inverted).</li>
            <li><code>--brut-border</code>, <code>--brut-border-thick</code>: Border definitions.</li>
            <li><code>--brut-shadow-sm</code>, <code>--brut-shadow-md</code>, <code>--brut-shadow-lg</code>: Hard shadow definitions.</li>
            <li><code>--brut-radius</code>: Border radius (defaults to 0px).</li>
          </ul>
        </section>
      </div>
    </>
  );
}
