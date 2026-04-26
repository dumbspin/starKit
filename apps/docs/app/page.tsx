"use client";

import Link from "next/link";
import { Header } from "./components/Header";

export default function Home() {
  const handleCopy = () => {
    navigator.clipboard.writeText("npm install starkit-ui");
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
          <span className="doc-install__cmd">npm install starkit-ui</span>
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

        <div style={{ marginTop: '80px', width: '100%', maxWidth: '800px' }}>
          <section className="doc-section">
            <h2 className="doc-section__title" style={{ border: 'none', fontSize: '32px', marginBottom: '32px' }}>
              Frequently Asked Questions
            </h2>
            <div className="doc-faq">
              <details className="doc-faq__item">
                <summary className="doc-faq__trigger">What is Neo-Brutalism?</summary>
                <div className="doc-faq__content">
                  Neo-brutalism is a design style that embraces raw, unpolished elements. It features high-contrast colors, bold borders, and hard shadows, moving away from the soft gradients and rounded corners of typical modern UI.
                </div>
              </details>
              <details className="doc-faq__item">
                <summary className="doc-faq__trigger">Is StarKit production ready?</summary>
                <div className="doc-faq__content">
                  Yes! StarKit components are built with React and are fully accessible, following ARIA guidelines. It includes essential patterns like focus traps for modals and keyboard navigation for tabs.
                </div>
              </details>
              <details className="doc-faq__item">
                <summary className="doc-faq__trigger">Can I use it with Tailwind?</summary>
                <div className="doc-faq__content">
                  Absolutely. While StarKit provides its own CSS variables, you can easily map them to your Tailwind config or use StarKit components alongside Tailwind utility classes.
                </div>
              </details>
            </div>
          </section>

          <section className="doc-suggestion">
            <h2 className="doc-suggestion__title">Have an idea?</h2>
            <p className="doc-suggestion__desc">Send us your suggestions or new component ideas!</p>
            <form action="https://formspree.io/f/xeevdplb" method="POST" className="doc-suggestion__form">
              <input 
                name="email" 
                type="email" 
                placeholder="your@email.com" 
                required 
                className="doc-suggestion__input"
              />
              <input 
                name="suggestion" 
                placeholder="What should we add next?" 
                required 
                className="doc-suggestion__input"
              />
              <button type="submit" className="doc-suggestion__btn">
                Send Suggestion
              </button>
            </form>
          </section>
        </div>
      </section>
    </>
  );
}
