import type { Metadata } from "next";
import "./globals.css";

/* StarKit styles — loaded from local copy */
import "./lib/starkit/styles/tokens.css";
import "./lib/starkit/styles/shared.css";
import "./lib/starkit/components/Button/button.css";
import "./lib/starkit/components/Input/input.css";
import "./lib/starkit/components/Card/card.css";
import "./lib/starkit/components/Badge/badge.css";
import "./lib/starkit/components/Modal/modal.css";
import "./lib/starkit/components/Tabs/tabs.css";
import "./lib/starkit/components/Toast/toast.css";
import "./lib/starkit/components/Dropdown/dropdown.css";
import "./lib/starkit/components/GlitchText/glitchtext.css";
import "./lib/starkit/components/Skeleton/skeleton.css";
import "./lib/starkit/components/FormField/formfield.css";
import "./lib/starkit/components/Accordion/accordion.css";
import "./lib/starkit/components/Navbar/navbar.css";
import "./lib/starkit/components/DataTable/datatable.css";
import "./lib/starkit/components/ParallaxSection/parallax-section.css";
import "./lib/starkit/components/ScrollReveal/scroll-reveal.css";
import "./lib/starkit/components/ScrollBlur/scroll-blur.css";
import "./lib/starkit/components/StickySection/sticky-section.css";
export const metadata: Metadata = {
  title: "StarKit — Neo-Brutalist React UI Library",
  description:
    "Hard shadows. Zero radius. Bold borders. A React component library that refuses to be boring.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
