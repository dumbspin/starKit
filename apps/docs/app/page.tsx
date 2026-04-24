"use client";

import Link from "next/link";
import { Header } from "./components/Header";

export default function Home() {
  const handleCopy = () => {
    navigator.clipboard.writeText("npm install starkit");
  };

  return (
    <>
      <Header />

      <section className="doc-hero">
        <div className="doc-hero__badge">v0.1.0 — Now Available</div>

        <h1 className="doc-hero__title">
          Build UIs that
          <br />
          <span className="doc-hero__title-accent">refuse to be boring.</span>
        </h1>

        <p className="doc-hero__subtitle">
          A neo-brutalist React component library. Hard shadows. Zero radius.
          Bold borders. Designed for interfaces that demand attention.
        </p>

        <div className="doc-hero__actions">
          <Link
            href="/docs/installation"
            className="doc-hero__btn doc-hero__btn--primary"
          >
            Get Started →
          </Link>
          <Link
            href="/docs/components/button"
            className="doc-hero__btn doc-hero__btn--secondary"
          >
            View Components
          </Link>
        </div>

        <div className="doc-hero__install doc-install">
          <span className="doc-install__prefix">$</span>
          <span className="doc-install__cmd">npm install starkit</span>
          <button className="doc-install__copy" onClick={handleCopy}>
            Copy
          </button>
        </div>

        <div className="doc-hero__laws">
          <div className="doc-hero__law">
            <div className="doc-hero__law-num">1</div>
            <div className="doc-hero__law-title">Hard Shadow</div>
            <div className="doc-hero__law-desc">
              Every interactive element carries a hard offset shadow. No blur. No
              feathering. Pure depth.
            </div>
          </div>
          <div className="doc-hero__law">
            <div className="doc-hero__law-num">2</div>
            <div className="doc-hero__law-title">Zero Radius</div>
            <div className="doc-hero__law-desc">
              Border-radius is 0px everywhere, no exceptions. Sharp corners
              communicate confidence.
            </div>
          </div>
          <div className="doc-hero__law">
            <div className="doc-hero__law-num">3</div>
            <div className="doc-hero__law-title">Bold Borders</div>
            <div className="doc-hero__law-desc">
              Minimum 2px solid borders on all elements. Structure you can see.
              Hierarchy you can feel.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
