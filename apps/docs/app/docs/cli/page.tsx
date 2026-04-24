import React from "react";
export default function CliDocs() {
  return (
    <>
      <div className="doc-page-header">
        <h1 className="doc-page-header__title">CLI Usage</h1>
        <p className="doc-page-header__desc">
          Add StarKit components to your project via command line.
        </p>
      </div>

      <div className="doc-content" style={{ marginTop: "32px", display: "flex", flexDirection: "column", gap: "24px" }}>
        <p>
          StarKit provides a built-in CLI to easily add individual components directly into your project. 
          This is especially useful if you want full control over the component source code.
        </p>

        <section>
          <h2>Initialization</h2>
          <p style={{ margin: "16px 0" }}>To install all components and styles in one go:</p>
          <pre style={{ background: "#f4f4f5", padding: "16px", borderRadius: "8px" }}><code>npx starkit-ui init</code></pre>
        </section>

        <section>
          <h2>Add Specific Component</h2>
          <p style={{ margin: "16px 0" }}>Use the following command to run the interactive prompt or pass a component name:</p>
          <pre style={{ background: "#f4f4f5", padding: "16px", borderRadius: "8px" }}><code>npx starkit-ui add [component-name]</code></pre>

          <p style={{ margin: "16px 0" }}>For example, to add the Button component:</p>
          <pre style={{ background: "#f4f4f5", padding: "16px", borderRadius: "8px" }}><code>npx starkit-ui add Button</code></pre>
        </section>

        <section>
          <h2>How it works</h2>
          <p style={{ margin: "16px 0" }}>
            When you run the command, StarKit CLI will:
          </p>
          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "8px" }}>
            <li>Detect your project structure (looks for a <code>src</code> directory).</li>
            <li>Copy the component's <code>.tsx</code> and <code>.css</code> files into <code>components/starkit/[ComponentName]</code>.</li>
            <li>Automatically copy <code>tokens.css</code> and <code>shared.css</code> if they don't already exist.</li>
          </ul>
        </section>

        <section>
          <h2>Next Steps</h2>
          <p style={{ margin: "16px 0" }}>
            After adding your first component, make sure you import the CSS files in your main layout or entry file:
          </p>
          <pre style={{ background: "#f4f4f5", padding: "16px", borderRadius: "8px" }}><code>import "@/styles/tokens.css";
import "@/styles/shared.css";</code></pre>
        </section>
      </div>
    </>
  );
}
