# LearnedLate Style Guide

## Brand Identity

Competent and calm. Senior consultant, not growth-hacker.

### Design Principles

1. **Clarity over cleverness.** Layout and copy should be easy to scan in under 10 seconds.
2. **Single focal action per section.** One primary CTA per section; secondary actions are supportive only.
3. **Consistent dark theme.** All sections use the same dark gradient foundation with translucent surfaces.
4. **Subtle depth, not decoration.** Prefer translucent layers, borders, and spacing over flat colors or heavy effects.
5. **Calm confidence.** No hype UI patterns, novelty animations, or decorative visual noise.

---

## Color Palette

### Background Foundation

| Role | Tailwind Class | Hex | Usage |
|------|---------------|-----|-------|
| **Dark Gradient** | `bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900` | — | Primary page background, all sections |
| **Dark Base** | `bg-gray-900` | `#111827` | Solid dark surfaces, card interiors |
| **Dark Elevated** | `bg-gray-800` | `#1F2937` | Slightly elevated surfaces |

### Translucent Surfaces

| Role | Tailwind Class | Usage |
|------|---------------|-------|
| **Glass Card** | `bg-white/5` | Translucent card backgrounds |
| **Glass Border** | `border-white/15` | Subtle borders on glass surfaces |
| **Glass Hover** | `hover:bg-white/10` | Hover state for glass elements |
| **Ambient Glow (Amber)** | `bg-amber-500/20` | Decorative gradient orbs |
| **Ambient Glow (White)** | `bg-white/10` | Secondary decorative orbs |

### Brand Accent — Amber

Amber is the only brand accent. It matches the warm tones in the logo.

| Role | Tailwind Class | Hex | Usage |
|------|---------------|-----|-------|
| **Accent Dark** | `amber-700` | `#B45309` | Hover states |
| **Accent** | `amber-600` | `#D97706` | Primary CTAs, key icons |
| **Accent Light** | `amber-500` | `#F59E0B` | Secondary accents, badges |
| **Accent Subtle** | `amber-300` | `#FCD34D` | Checkmarks on dark backgrounds |
| **Accent Muted** | `amber-200` | `#FDE68A` | Badge text, subtle highlights |
| **Accent Background** | `amber-500/20` | — | Badge fills on dark backgrounds |

### Text Colors (on Dark Backgrounds)

| Role | Tailwind Class | Hex | Usage |
|------|---------------|-----|-------|
| **Headings** | `text-white` | `#FFFFFF` | All headings |
| **Body** | `text-gray-300` | `#D1D5DB` | Primary body text |
| **Muted** | `text-gray-400` | `#9CA3AF` | Secondary text, captions |
| **Subtle** | `text-gray-500` | `#6B7280` | Timestamps, tertiary labels |
| **Accent Text** | `text-amber-200` | `#FDE68A` | Highlighted labels |
| **Accent Strong** | `text-amber-300` | `#FCD34D` | Icons, checkmarks |

### Semantic Colors (use sparingly)

| Role | Tailwind Class | Usage |
|------|---------------|-------|
| **Success** | `text-amber-300` | Checkmarks, positive indicators (use amber, not green, on dark) |
| **Error / Warning** | `red-500` / `red-400` | Destructive actions, alerts |

### Colors NOT to use

- **Blue** (`blue-*`) — Removed. Was used inconsistently for links and blog gradients.
- **Purple** (`purple-*`, `violet-*`) — Removed. Was used randomly for list bullets and gradients.
- **Orange** (`orange-*`) — Removed. Overlapped with amber and created confusion. Amber is our accent.
- **Emerald/Green** for accents — On dark backgrounds, use `amber-300` for positive indicators instead.
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
| **Page Title (H1)** | `text-3xl sm:text-4xl md:text-5xl font-light text-white` | Light weight for elegance. One per page. |
| **Section Title (H2)** | `text-2xl sm:text-3xl font-light text-white` | Light weight, consistent with H1. |
| **Card Title (H3)** | `text-lg font-medium text-white` or `text-xl font-medium text-white` | Medium weight for contrast within cards. |
| **Body Text** | `text-gray-300` | Default line-height via `leading-relaxed`. |
| **Small / Caption** | `text-sm text-gray-400` | Labels, timestamps, supplementary info. |
| **Tiny** | `text-xs text-gray-500` | Disclaimers, fine print. |

### Uppercase Tracking

For small section labels:
```
class="text-xs uppercase tracking-[0.2em] text-gray-400"
```

---

## Buttons

### Primary CTA

```html
<Button 
  size="lg" 
  class="bg-amber-600 text-white hover:bg-amber-700"
>
  Book an AI Readiness Assessment
</Button>
```

### Outline on Dark

```html
<Button 
  variant="outline" 
  size="lg"
  class="border-white bg-transparent text-white hover:bg-white hover:text-gray-900"
>
  See How It Works
</Button>
```

### Badge/Pill Style

```html
<div class="inline-flex items-center gap-2 rounded-full bg-amber-500/20 px-4 py-2 text-sm text-amber-200">
  <MapPin class="h-4 w-4" />
  Serving New Zealand & Australia
</div>
```

### Rules

- One primary CTA per section maximum.
- Primary CTAs use `bg-amber-600 hover:bg-amber-700`.
- Outline buttons on dark use `border-white bg-transparent` with `hover:bg-white hover:text-gray-900`.
- Touch targets: minimum 44px height (already enforced globally).
- Every interactive element must have a visible focus state:

```html
class="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
```

- Disabled state must be explicit and non-interactive:

```html
class="disabled:opacity-50 disabled:cursor-not-allowed"
```

---

## Forms and Inputs

### Input and Textarea (on Dark Backgrounds)

```html
<Input 
  class="border-white/15 bg-white/5 text-white placeholder:text-gray-500 focus:border-amber-600 focus:ring-amber-600" 
/>
```

- Background: `bg-white/5`
- Border: `border-white/15`
- Text: `text-white`
- Placeholder: `placeholder:text-gray-500`
- Focus: `focus:border-amber-600 focus:ring-amber-600`

### Labels and Help Text

- Label: `text-sm font-medium text-white`
- Help text: `text-sm text-gray-400`
- Error text: `text-sm text-red-400`

### Form Layout

- Vertical spacing between fields: `space-y-4`.
- Group related fields in translucent cards when needed.
- Keep forms to single-column on mobile; avoid two-column forms below `md`.

---

## Layout Patterns

### Page Background

All pages use the same dark gradient foundation:

```html
<main class="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen">
  <!-- all content -->
</main>
```

### Hero Sections

```html
<section class="relative isolate overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 text-white sm:py-24">
  <!-- Ambient gradient orbs -->
  <div class="pointer-events-none absolute -left-20 -top-16 h-72 w-72 rounded-full bg-amber-500/20 blur-3xl" />
  <div class="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
  
  <!-- Content -->
  <div class="container relative mx-auto px-4 lg:px-6">
    <!-- ... -->
  </div>
</section>
```

### Content Sections

All content sections use the same dark gradient background. No alternating white/gray sections.

```
Hero (dark gradient with orbs)
↓ Content section (dark gradient, py-16 sm:py-20)
↓ Content section (dark gradient, py-16 sm:py-20)
↓ ...
↓ Final CTA (dark gradient with orbs)
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

### Glass Card (Primary)

The standard card on dark backgrounds:

```html
<div class="rounded-2xl border border-white/15 bg-white/5 p-6 shadow-2xl backdrop-blur sm:p-8">
  <p class="mb-4 text-xs uppercase tracking-[0.2em] text-gray-400">Section Label</p>
  <!-- content -->
</div>
```

### Feature Card (List Items)

```html
<div class="flex items-start gap-3 rounded-xl bg-gray-900/40 p-4">
  <Check class="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-300" />
  <div>
    <p class="text-sm font-medium text-white">Feature Title</p>
    <p class="text-sm text-gray-300">Feature description</p>
  </div>
</div>
```

### Card Accents

When cards need visual differentiation:

```html
<Card class="border-l-4 border-l-amber-500 bg-white/5">
```

Use only `amber-500` or `amber-600` for card border accents on dark backgrounds.

### Radius and Shadow

- Default card radius: `rounded-xl` or `rounded-2xl`.
- Default shadow: `shadow-2xl` for glass cards.
- Backdrop blur: `backdrop-blur` for glass effect.
- Avoid combining heavy shadow with animated transforms.

---

## Icons

- Source: Lucide icons (already in use).
- Size: `w-5 h-5` inline with text, `w-8 h-8` as card header icons.
- Color on dark: `text-amber-600` for accent icons, `text-amber-300` for checkmarks, `text-gray-400` for neutral icons.
- Do not use colored icon backgrounds unless it's a key feature highlight.

---

## Spacing

| Context | Value |
|---------|-------|
| Section vertical padding | `py-16 sm:py-24` |
| Between section title and content | `mb-8` or `mb-12` |
| Card grid gap | `gap-6` or `gap-8` |
| Stack gap (vertical list of items) | `space-y-4` or `space-y-6` |

### Content Width and Line Length

- Long-form text blocks should sit in `max-w-3xl` or `max-w-4xl` containers.
- Keep paragraph measure readable; avoid full-width prose across large displays.
- Prefer additional vertical whitespace over extra visual separators.

---

## Decorative Elements

### Ambient Gradient Orbs

Use sparingly for visual depth in hero sections:

```html
<!-- Amber orb -->
<div class="pointer-events-none absolute -left-20 -top-16 h-72 w-72 rounded-full bg-amber-500/20 blur-3xl" />

<!-- White orb -->
<div class="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
```

Guidelines:
- Position absolutely within a `relative isolate` container.
- Use `pointer-events-none` to prevent interaction issues.
- Keep opacity low (`/10` to `/20`) for subtlety.
- Use `blur-3xl` for soft diffusion.

---

## Pricing Blocks

Use pricing sections that are easy to compare and easy to trust.

- Section title should be literal: prefer **Pricing** over abstract labels.
- Price display class: `text-3xl font-bold text-white`.
- Keep one short qualifier below the number (for example: "Typical range by complexity").
- If pricing varies by market, keep card structure identical and vary only the values.
- Include one concise note card only when needed for legal or market-specific caveats.
- Avoid dense pricing prose under each card.

Recommended card structure:

```html
<div class="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
  <p class="text-sm text-gray-400">New Zealand</p>
  <p class="text-xs text-gray-500">GST exclusive unless stated</p>
  <div class="mt-4 text-3xl font-bold text-white">$7,500 - $15,000</div>
  <p class="mt-2 text-sm text-gray-400">Typical range by organization complexity</p>
</div>
```

---

## Interaction and Motion

- Keep motion functional and minimal.
- Default transition durations: `duration-200` for controls, `duration-300` for cards.
- Prefer color and shadow transitions over transform-heavy motion.
- Do not animate large content blocks on scroll by default.
- Respect reduced-motion preferences for non-essential animation.

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
```

---

## Comparison Tables

```html
<div class="overflow-hidden rounded-2xl border border-white/15">
  <table class="w-full">
    <thead class="bg-gray-900/80">
      <tr>
        <th class="px-6 py-4 text-left text-white">Feature</th>
        <th class="px-6 py-4 text-center text-amber-300">LearnedLate</th>
        <th class="px-6 py-4 text-center text-gray-400">Others</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-white/10">
      <tr class="bg-white/5">
        <td class="px-6 py-4 text-gray-300">Feature name</td>
        <td class="px-6 py-4 text-center text-amber-300">✓</td>
        <td class="px-6 py-4 text-center text-gray-500">—</td>
      </tr>
    </tbody>
  </table>
</div>
```

- Header: `bg-gray-900/80` with `text-white`.
- "Our" column highlight: `text-amber-300` — not emerald.
- Status indicators: `text-amber-300` for positive, `text-red-400` for negative.
- Row backgrounds: `bg-white/5` alternating with transparent.

---

## Blog / Prose Styles

- Links: `text-amber-300 underline` with `hover:text-amber-200`. Not blue.
- No multi-color gradients on headings or decorative elements.
- Blockquote left border: `border-amber-500` — solid color, not gradient.
- Strong text: `text-white font-semibold` on dark backgrounds.
- Code blocks: simple dark background (`bg-gray-900`), no macOS window dots decoration.

---

## Dark Mode (CSS Variables)

The oklch CSS variables in `style.css` handle shadcn component theming. Use semantic classes (`bg-background`, `text-foreground`, `bg-primary`) for shadcn primitives. Don't override with hardcoded colors.

For custom sections (heroes, feature grids), use the Tailwind classes documented above.

**Note:** This design system is built "dark-first" — the entire page uses dark gradients with translucent surfaces. There is no separate "light mode."

---

## Accessibility Baseline

- Body text must meet WCAG AA contrast against its background.
- Do not rely on color alone to communicate status.
- Every form control requires an associated visible label.
- Keyboard users must be able to reach all interactive controls in logical order.
- Focus indicators must always be visible on links, buttons, and inputs.
- Link text should be descriptive; avoid "click here".

---

## What to Avoid

1. **Gradient text or gradient decorative borders.** Use solid colors.
2. **More than one accent color per page.** Amber is the accent. Period.
3. **Hardcoded hex values in component templates.** Use Tailwind classes.
4. **Multiple shades of the same color on one element.** Pick one shade and commit.
5. **Decorative complexity** (animated underlines, hover scale on images, macOS code block dots). Keep interactions simple: color change on hover, that's it.
6. **Using both `orange-*` and `amber-*`.** They look nearly identical and create inconsistency. Amber only.
7. **Hidden focus states.** Never remove outlines without replacing them with visible `focus-visible` styles.
8. **Ambiguous CTA language.** Keep CTA labels explicit and action-oriented.
9. **Light backgrounds.** The entire site uses dark gradients; no white or gray-50 section backgrounds.
10. **Solid card backgrounds.** Prefer translucent glass cards (`bg-white/5`) over solid colors.
