# LearnedLate Style Guide

## Brand Identity

Competent and calm. Senior consultant, not growth-hacker.

---

## Color Palette

### Primary Colors

| Role | Tailwind Class | Hex | Usage |
|------|---------------|-----|-------|
| **Charcoal** (text, headings, hero backgrounds) | `gray-900` | `#111827` | Primary text, dark sections, hero gradients |
| **Dark Gray** (secondary text) | `gray-700` | `#374151` | Body copy in light sections |
| **Mid Gray** (tertiary text, captions) | `gray-500` | `#6B7280` | Muted text, timestamps, labels |
| **Light Gray** (borders, dividers) | `gray-200` | `#E5E7EB` | Card borders, table lines, dividers |
| **Off-White** (section backgrounds) | `gray-50` | `#F9FAFB` | Alternating section backgrounds |
| **White** | `white` | `#FFFFFF` | Cards, primary backgrounds |

### Brand Accent — Amber

Amber is the only brand accent. It matches the warm tones in the logo.

| Role | Tailwind Class | Hex | Usage |
|------|---------------|-----|-------|
| **Accent Dark** | `amber-700` | `#B45309` | Accent text on white backgrounds, primary hover states |
| **Accent** | `amber-600` | `#D97706` | Primary CTAs, icons, progress indicators |
| **Accent Light** | `amber-500` | `#F59E0B` | Secondary accents, badges, card borders |
| **Accent Subtle** | `amber-100` | `#FEF3C7` | Highlight backgrounds, badge fills |

### Semantic Colors (use sparingly)

| Role | Tailwind Class | Usage |
|------|---------------|-------|
| **Success** | `green-600` / `green-500` | Checkmarks, positive metrics, "included" indicators |
| **Error / Warning** | `red-600` / `red-500` | Destructive actions, failure stats, alerts |

### Colors NOT to use

- **Blue** (`blue-*`) — Removed. Was used inconsistently for links and blog gradients. Replace prose links with `amber-700`.
- **Purple** (`purple-*`, `violet-*`) — Removed. Was used randomly for list bullets and gradients.
- **Orange** (`orange-*`) — Removed. Overlapped with amber and created confusion. Amber is our accent.
- **Emerald** (`emerald-*`) — Removed. Was used only in comparison tables. Use `green-600` for success states.
- **Teal / Cyan** — Never introduced, keep it that way.

---

## Typography

### Font Stack

```css
font-family: system-ui, -apple-system, 'Segoe UI', 'Roboto', sans-serif;
```

System fonts. Zero load time, native look on every platform.

### Hierarchy

| Element | Classes | Notes |
|---------|---------|-------|
| **Page Title (H1)** | `text-3xl sm:text-4xl md:text-5xl font-light` | Light weight for elegance. One per page. |
| **Section Title (H2)** | `text-2xl sm:text-3xl font-light text-gray-900` | Light weight, consistent with H1. |
| **Card Title (H3)** | `text-lg font-medium text-gray-900` or `text-xl font-medium` | Medium weight for contrast within cards. |
| **Body Text** | `text-gray-700` (light bg) / `text-gray-300` (dark bg) | Default line-height via `leading-relaxed`. |
| **Small / Caption** | `text-sm text-gray-500` | Labels, timestamps, supplementary info. |
| **Tiny** | `text-xs text-gray-500` | Disclaimers, fine print. |

### Text on Dark Backgrounds

| Role | Class |
|------|-------|
| Headings | `text-white` |
| Body text | `text-gray-300` |
| Muted text | `text-gray-400` |
| Accent text | `text-amber-200` or `text-amber-300` |

---

## Buttons

### Primary CTA

```html
<Button class="bg-amber-600 text-white hover:bg-amber-700">
  Book a Free Assessment
</Button>
```

### Secondary / Outline

```html
<Button variant="outline">
  Learn More
</Button>
```

### On Dark Backgrounds

```html
<!-- Primary on dark -->
<Button variant="secondary">
  Primary Action
</Button>

<!-- Ghost on dark -->
<Button variant="outline" class="border-white bg-transparent text-white hover:bg-white hover:text-gray-900">
  Secondary Action
</Button>
```

### Rules

- One primary CTA per section maximum.
- Primary CTAs use `bg-amber-600 hover:bg-amber-700`.
- Do not use `bg-white text-orange-900` — use `variant="secondary"` instead.
- Touch targets: minimum 44px height (already enforced globally).

---

## Layout Patterns

### Hero Sections

```html
<section class="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 sm:py-24">
```

All hero sections use this same dark gradient. No variation.

### Alternating Content Sections

```
Hero (dark gradient)
↓ Content section (white bg, py-16 sm:py-20)
↓ Content section (gray-50 bg, py-16 sm:py-20)
↓ Content section (white bg)
↓ ...
↓ Final CTA (dark gradient)
```

### Container

```html
<div class="container mx-auto px-4 lg:px-6">
  <div class="max-w-5xl mx-auto">
    <!-- content -->
  </div>
</div>
```

- `max-w-5xl` for most content sections.
- `max-w-4xl` for text-heavy pages (blog, about).
- `max-w-6xl` for card grids that need more room.

---

## Cards

Use shadcn `Card` components consistently:

```html
<Card class="h-full">
  <CardHeader>
    <Icon class="w-8 h-8 text-amber-600 mb-3" />
    <CardTitle class="text-lg">Title</CardTitle>
  </CardHeader>
  <CardContent>
    <p class="text-sm text-gray-600">Description</p>
  </CardContent>
</Card>
```

### Card Accents

When cards need visual differentiation (e.g., problem/solution grids):

```html
<Card class="border-l-4 border-l-amber-500">
```

Use only `amber-500`, `amber-600`, or `gray-300` for card border accents. Do not use red, blue, or purple borders except for explicit error states.

---

## Icons

- Source: Lucide icons (already in use).
- Size: `w-5 h-5` inline with text, `w-8 h-8` as card header icons.
- Color: `text-amber-600` for accent icons, `text-gray-500` for neutral icons.
- Do not use colored icon backgrounds unless it's a key feature highlight.

---

## Spacing

| Context | Value |
|---------|-------|
| Section vertical padding | `py-12 sm:py-16` or `py-16 sm:py-20` |
| Between section title and content | `mb-8` or `mb-12` |
| Card grid gap | `gap-6` |
| Stack gap (vertical list of items) | `space-y-4` or `space-y-6` |

---

## Comparison Tables

```html
<TableHeader class="bg-gray-900 text-white">
```

- Header row: `bg-gray-900 text-white`.
- "Our" column highlight: `bg-amber-50 font-medium` — not emerald.
- Status indicators: `text-green-600` for positive, `text-red-600` for negative, `text-amber-600` for partial.
- Emoji indicators (✅ ❌ ⚠️) are acceptable in tables for scannability.

---

## Blog / Prose Styles

- Links: `text-amber-700 underline` with `hover:text-amber-900`. Not blue.
- No multi-color gradients on headings or decorative elements.
- Blockquote left border: `border-amber-400` — solid color, not gradient.
- Strong text: default `font-semibold`. No background highlight or left border treatment.
- Code blocks: simple dark background, no macOS window dots decoration.

---

## Dark Mode (CSS Variables)

The oklch CSS variables in `style.css` handle shadcn component theming. Use semantic classes (`bg-background`, `text-foreground`, `bg-primary`) for shadcn primitives. Don't override with hardcoded colors.

For custom sections (heroes, feature grids), use the Tailwind classes documented above.

---

## What to Avoid

1. **Gradient text or gradient decorative borders.** Use solid colors.
2. **More than one accent color per page.** Amber is the accent. Period.
3. **Hardcoded hex values in component templates.** Use Tailwind classes.
4. **Multiple shades of the same color on one element.** Pick one shade and commit.
5. **Decorative complexity** (animated underlines, hover scale on images, macOS code block dots). Keep interactions simple: color change on hover, that's it.
6. **Using both `orange-*` and `amber-*`.** They look nearly identical and create inconsistency. Amber only.
