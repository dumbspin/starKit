# ⚡ StarKit

**Neo-brutalist React UI library.** Hard shadows. Zero radius. Bold borders.

[![npm version](https://img.shields.io/npm/v/starkit.svg)](https://www.npmjs.com/package/starkit)
[![bundle size](https://img.shields.io/bundlephobia/minzip/starkit)](https://bundlephobia.com/package/starkit)

---

## The Three Laws

1. **Hard Shadow** — every interactive element carries a hard offset shadow
2. **Zero Radius** — `border-radius: 0px` everywhere, no exceptions
3. **Bold Borders** — minimum `2px solid #000` on all bordered elements

---

## Install

```bash
npm install starkit-ui
```

## Quick Start

```tsx
import { Button, Card, Badge } from 'starkit-ui';
import 'starkit-ui/styles';

function App() {
  return (
    <Card padding="lg">
      <Badge variant="success" dot>Live</Badge>
      <h2>Hello StarKit</h2>
      <Button variant="primary" onClick={() => alert('⚡')}>
        Click Me
      </Button>
    </Card>
  );
}
```

---

## 📦 Component Installation (CLI)

StarKit provides a CLI to add components directly to your source code, giving you full control to modify them:

### Initialize all components
To install all components and global styles at once:
```bash
npx starkit-ui init
```

### Add specific components
To add a single component:
```bash
npx starkit-ui add
```

```bash
npx starkit-ui add <component-name>
# Example:
npx starkit-ui add Button
```

The CLI will detect your project structure and copy the `.tsx` and `.css` files into your components directory.

## 🎨 Theming & Customization

StarKit uses CSS variables. You can easily switch to Dark Mode or build your own themes.

**Dark Mode:**
```html
<html data-theme="dark">
```

**Custom Theme (e.g. Cyberpunk):**
```css
[data-theme='cyberpunk'] {
  --brut-yellow: #fcee0a;
  --brut-blue: #00f0ff;
  --brut-black: #000000;
  --brut-white: #fcee0a;
}
```

## 📋 Templates

Kickstart your project with our official templates built entirely with StarKit:
- **Admin Dashboard**: Complex layout with DataTables, Accordions, and Skeletons.
- **Portfolio**: Personal site with GlitchText, Cards, and Badges.
- **SaaS Landing Page**: High-conversion page with Tabs for pricing and Hero sections.

*View the templates live in our [Documentation Site]().*

## 📖 Documentation

## Components

### Layout & Display
| Component | Description |
|---|---|
| `Card` | Content container — `default`, `filled`, `outline` variants |
| `Badge` | Status indicator — `default`, `primary`, `success`, `danger`, `info` |
| `GlitchText` | ✨ Animated RGB glitch text effect |

### Inputs & Actions
| Component | Description |
|---|---|
| `Button` | Primary action — `primary`, `outline`, `ghost`, `danger` variants |
| `Input` | Text field with label, hint, error, prefix/suffix |
| `Dropdown` | Action menu with keyboard navigation |

### Feedback & Navigation
| Component | Description |
|---|---|
| `Modal` | Dialog overlay with focus trap |
| `Tabs` | Tabbed navigation with keyboard support |
| `ToastProvider` + `useToast()` | Notification system with auto-dismiss |

---

## Design Tokens

Import `starkit/styles` once at your app root. All components use CSS custom properties:

```css
--brut-yellow: #FFE600;
--brut-red: #FF4444;
--brut-blue: #0066FF;
--brut-green: #00CC44;
--brut-border: 2px solid var(--brut-black);
--brut-shadow-md: 4px 4px 0px var(--brut-black);
--brut-radius: 0px;
```

### Dark Mode

Add `data-theme="dark"` to your root element:

```html
<html data-theme="dark">
```

---

## Accessibility

- **Modal**: Focus trap, Escape to close, body scroll lock, auto-focus restoration
- **Tabs**: Arrow key navigation, Home/End, roving tabindex
- **Dropdown**: Arrow keys, Enter/Escape, click-outside dismiss
- **GlitchText**: Respects `prefers-reduced-motion`
- All components: proper ARIA roles, focus-visible outlines

---

## Bundle Size

| Output | Size |
|---|---|
| CSS | 18 KB |
| ESM | 10.5 KB |
| CJS | 11.2 KB |
| Types | 6.7 KB |

---

## License

MIT © [dumbspin](https://github.com/dumbspin)