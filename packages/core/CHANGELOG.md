# Changelog

All notable changes to StarKit will be documented in this file.

## [0.1.0] — 2026-04-24

### 🎉 Initial Release

The first public release of **StarKit**, a neo-brutalist React UI component library.

#### Core Design System
- **Design Tokens**: Color palette, spacing scale, typography, shadow, border, and transition tokens
- **Shared Utilities**: `.brut-structural`, `.brut-interactive`, `.brut-focusable`, `.brut-shadow-*`
- **Dark Mode**: Full dark mode support via `[data-theme='dark']`
- **The Three Laws**: Hard Shadow · Zero Radius · Bold Borders

#### Components (9)

| Component | Description |
|---|---|
| `Button` | Primary interactive element with 4 variants, 3 sizes, loading state |
| `Input` | Text input with label, hint, error, prefix/suffix slots |
| `Card` | Content container with 3 variants and interactive mode |
| `Badge` | Inline status indicator with 5 variants and dot mode |
| `Modal` | Dialog overlay with focus trap, Escape close, 3 sizes |
| `Tabs` | Tabbed navigation with keyboard nav, 3 sizes |
| `Toast` | Notification system with auto-dismiss, stacking, 4 variants |
| `Dropdown` | Menu with keyboard nav, dividers, danger items, 3 sizes |
| `GlitchText` | ✨ Signature animated text with RGB glitch effect |

#### Accessibility
- Focus trap in Modal with auto-restore
- Roving tabindex in Tabs (Arrow, Home, End)
- Full keyboard navigation in Dropdown (Arrow, Enter, Escape)
- ARIA roles and attributes on all interactive components
- `prefers-reduced-motion` respected in GlitchText

#### Build
- ESM + CJS dual output via tsup
- Full TypeScript declarations
- CSS design tokens importable via `starkit/styles`
