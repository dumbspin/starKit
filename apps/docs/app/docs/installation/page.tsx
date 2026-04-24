"use client";

import { CodeBlock } from "../../components/DocParts";

export default function InstallationPage() {
  return (
    <>
      <div className="doc-page-header">
        <div className="doc-page-header__badge">Getting Started</div>
        <h1 className="doc-page-header__title">Installation</h1>
        <p className="doc-page-header__desc">
          Get StarKit up and running in your React project in under 60 seconds.
        </p>
      </div>

      <section className="doc-section">
        <h2 className="doc-section__title">1. Install the package</h2>
        <CodeBlock
          code={`npm install starkit-ui`}
          lang="bash"
          filename="terminal"
        />
        <p style={{ marginBottom: 24, color: "var(--doc-gray-600)" }}>
          Or with your preferred package manager:
        </p>
        <CodeBlock code={`yarn add starkit-ui`} lang="bash" filename="yarn" />
        <CodeBlock code={`pnpm add starkit-ui`} lang="bash" filename="pnpm" />
      </section>

      <section className="doc-section">
        <h2 className="doc-section__title">2. Import the styles</h2>
        <p style={{ marginBottom: 16 }}>
          Add the StarKit stylesheet to your app&apos;s entry point. This loads all
          design tokens, shared utilities, and component styles.
        </p>
        <CodeBlock
          code={`// app/layout.tsx or main.tsx
import 'starkit-ui/styles';`}
          filename="layout.tsx"
        />
      </section>

      <section className="doc-section">
        <h2 className="doc-section__title">3. Use components</h2>
        <p style={{ marginBottom: 16 }}>
          Import and use any component. All props are fully typed with
          TypeScript.
        </p>
        <CodeBlock
          code={`import { Button, Card, Badge, Input } from 'starkit-ui';

export function MyPage() {
  return (
    <Card padding="lg">
      <Badge variant="success" dot>Live</Badge>
      <h2>Create Account</h2>
      <Input label="Email" placeholder="you@example.com" fullWidth />
      <Button variant="primary" size="lg" fullWidth>
        Sign Up
      </Button>
    </Card>
  );
}`}
          filename="MyPage.tsx"
        />
      </section>

      <section className="doc-section">
        <h2 className="doc-section__title">Requirements</h2>
        <div className="doc-features">
          <div className="doc-feature">
            <div className="doc-feature__icon">⚛️</div>
            <div className="doc-feature__title">React ≥ 18</div>
            <div className="doc-feature__desc">
              StarKit uses forwardRef and modern React patterns.
            </div>
          </div>
          <div className="doc-feature">
            <div className="doc-feature__icon">📘</div>
            <div className="doc-feature__title">TypeScript Ready</div>
            <div className="doc-feature__desc">
              Full type declarations included. Zero config needed.
            </div>
          </div>
          <div className="doc-feature">
            <div className="doc-feature__icon">🎨</div>
            <div className="doc-feature__title">CSS Variables</div>
            <div className="doc-feature__desc">
              All tokens are CSS custom properties. Easy to customize.
            </div>
          </div>
          <div className="doc-feature">
            <div className="doc-feature__icon">📦</div>
            <div className="doc-feature__title">Tree-shakeable</div>
            <div className="doc-feature__desc">
              ESM and CJS output. Import only what you use.
            </div>
          </div>
        </div>
      </section>

      <section className="doc-section">
        <h2 className="doc-section__title">Design Tokens</h2>
        <p style={{ marginBottom: 16 }}>
          StarKit exposes all design decisions as CSS custom properties. Override
          them to customize the look without touching component internals.
        </p>
        <CodeBlock
          code={`:root {
  --brut-yellow: #FFE600;   /* Primary accent */
  --brut-red: #FF4444;      /* Danger */
  --brut-blue: #0066FF;     /* Info / Focus */
  --brut-green: #00CC44;    /* Success */
  --brut-black: #000000;    /* Text + borders */
  --brut-white: #FFFFFF;    /* Backgrounds */
  --brut-shadow-md: 4px 4px 0px var(--brut-black);
  --brut-border: 2px solid var(--brut-black);
  --brut-radius: 0px;       /* THE LAW */
}`}
          lang="css"
          filename="tokens.css"
        />
      </section>
      <section className="doc-section">
        <h2 className="doc-section__title">Alternative: Use the CLI</h2>
        <p style={{ marginBottom: 16 }}>
          Instead of installing the full package, you can use the StarKit CLI to copy 
          component source code directly into your project.
        </p>
        
        <h3 className="doc-section__subtitle">Initialize all components</h3>
        <CodeBlock
          code={`npx starkit-ui init`}
          lang="bash"
          filename="terminal"
        />
        
        <h3 className="doc-section__subtitle" style={{ marginTop: 24 }}>Add specific components</h3>
        <CodeBlock
          code={`npx starkit-ui add Button`}
          lang="bash"
          filename="terminal"
        />
      </section>
    </>
  );
}


