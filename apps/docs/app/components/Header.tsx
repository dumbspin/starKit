"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="doc-header">
      <Link href="/" className="doc-header__logo" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <img src="/logo.webp" alt="StarKit Logo" style={{ height: "32px", width: "auto" }} />
      </Link>

      <nav>
        <ul className="doc-header__nav">
          <li>
            <Link
              href="/docs/installation"
              className={`doc-header__nav-link ${isActive("/docs/installation") ? "doc-header__nav-link--active" : ""}`}
            >
              Docs
            </Link>
          </li>
          <li>
            <Link
              href="/docs/components/button"
              className={`doc-header__nav-link ${isActive("/docs/components") ? "doc-header__nav-link--active" : ""}`}
            >
              Components
            </Link>
          </li>
        </ul>
      </nav>

      <a
        href="https://github.com/dumbspin/starKit"
        target="_blank"
        rel="noopener noreferrer"
        className="doc-header__github"
      >
        ★ GitHub
      </a>
    </header>
  );
}
