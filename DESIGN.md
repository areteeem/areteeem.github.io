# Design System

## 1. Core Direction

The interface should feel clean, structured, adaptive, and fast.

Light mode is the primary design target. Dark mode should follow the same hierarchy, spacing, geometry, and component logic rather than being designed as a separate visual system.

The design should prioritize:

* clarity
* consistency
* adaptability
* performance
* readable information density
* predictable geometry
* strong hierarchy
* minimal visual noise

The interface should work equally well on:

* small phones
* tablets
* laptops
* large desktop displays
* low-powered devices
* high-performance machines

The UI should scale naturally instead of relying on separate desktop and mobile designs.



# 2. Visual Philosophy

## Clean over decorative

Every visual element should have a reason to exist.

Avoid decoration that does not improve:

* hierarchy
* grouping
* navigation
* feedback
* readability

Do not fill empty space merely because it exists.

Whitespace should make the structure easier to understand.



## Comprehensive without feeling overloaded

A page may contain a significant amount of information, but the hierarchy should prevent it from feeling dense or confusing.

Information should be divided through:

* spacing
* typography
* alignment
* borders
* section structure

Avoid splitting everything into separate cards.

A comprehensive interface should still feel like one coherent page.



# 3. Light Mode

Light mode is the reference implementation.

Use a neutral, bright background with strong text contrast.

Recommended base structure:

```css
--background: #ffffff;
--surface: #ffffff;
--surface-subtle: #f7f7f7;
--surface-muted: #f1f1f1;

--text-primary: #111111;
--text-secondary: #5f5f5f;
--text-tertiary: #888888;

--border: #e5e5e5;
--border-strong: #d2d2d2;
```

Avoid pure black for large text areas when a slightly softer near-black works better.

Do not use excessive gray backgrounds to distinguish every section.

The default page should remain visually light.



# 4. Geometry

Two geometry styles are acceptable:

1. sharp geometry
2. soft geometry

Do not randomly mix them.

A page should follow one geometric system.



## Sharp geometry

Sharp interfaces use:

```css
border-radius: 0;
```

or very small radii:

```css
border-radius: 2px;
```

Use sharp geometry for:

* technical interfaces
* tables
* navigation
* data-heavy layouts
* dashboards
* code-oriented interfaces
* compact utilities

Sharp geometry should still feel polished through spacing, typography, and borders.



## Soft geometry

Soft geometry should follow a radius scale.

Example:

```css
--radius-xs: 4px;
--radius-sm: 6px;
--radius-md: 10px;
--radius-lg: 14px;
--radius-xl: 20px;
```

Components should derive their radius from their size.

Recommended relationship:

```text
radius ≈ component height × 0.15
```

Examples:

```text
32px control → 4–5px radius
40px control → 6px radius
48px control → 7–8px radius
64px container → 10px radius
```

Large surfaces can use larger radii, but should still follow the same visual system.

Do not use arbitrary values such as:

```text
7px
11px
17px
23px
```

unless they belong to the established scale.



## Nested radius rule

Nested elements should visually respect the parent shape.

Use approximately:

```text
inner radius = outer radius - padding
```

Example:

```text
Card radius: 16px
Card padding: 6px
Inner element radius: approximately 10px
```

Do not place a heavily rounded element inside a nearly square container unless it serves a clear function.



# 5. Border System

Borders should usually be subtle.

Recommended:

```css
border: 1px solid var(--border);
```

Use stronger borders only when separation or focus needs to be explicit.

Avoid layering multiple visual effects:

```text
border + shadow + gradient + background tint
```

Prefer one primary separation mechanism.

Examples:

```text
border only
background difference only
spacing only
```



# 6. Shadows

Shadows should be rare.

Use them for:

* floating menus
* popovers
* modals
* temporary overlays
* dragged elements

Avoid shadows for normal page sections and standard cards.

Prefer borders and spacing for static hierarchy.

If a shadow is required, keep it subtle.

```css
box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
```



# 7. Layout

The layout should scale continuously.

Avoid thinking only in terms of:

```text
desktop
tablet
mobile
```

Instead, components should adapt based on available width.



## Content width

Readable content should have a maximum width.

Example:

```css
.page {
  width: min(100% - 32px, 1200px);
  margin-inline: auto;
}
```

For reading-heavy content:

```css
.article {
  width: min(100% - 32px, 760px);
  margin-inline: auto;
}
```

Large displays should gain whitespace instead of stretching text indefinitely.



## Responsive spacing

Use fluid spacing where appropriate.

Example:

```css
padding-inline: clamp(16px, 3vw, 48px);
```

```css
gap: clamp(12px, 2vw, 24px);
```

Prefer fluid values over large sets of breakpoint-specific overrides.



# 8. Adaptive Interfaces

The interface should remain usable at any practical width.

The goal is similar to Obsidian's reading experience: the same content remains understandable regardless of screen size.

Components should:

* shrink where possible
* wrap when necessary
* stack when required
* scroll only when scrolling is meaningful
* preserve hierarchy at every width

Avoid layouts that depend on a single expected viewport size.



## Component responsiveness

A component should respond to its own available width whenever possible.

Prefer container queries:

```css
@container (max-width: 600px) {
  ...
}
```

over global viewport breakpoints when the component's own size is what matters.

This allows components to work inside:

* full-width pages
* sidebars
* split views
* dashboards
* embedded panels



# 9. Mobile Behavior

Mobile should preserve functionality.

Do not remove important features simply to make the layout smaller.

Instead:

```text
wide horizontal layout
→ compact horizontal layout
→ wrapped layout
→ stacked layout
```

Use this progression before hiding content.



## Touch targets

Interactive controls should generally provide at least:

```text
40–44px
```

of practical touch area.

The visible element may be smaller if the clickable area remains comfortable.



# 10. Typography

Typography should carry most of the visual hierarchy.

Prefer modern system or highly optimized fonts.

Recommended stack:

```css
font-family:
  Inter,
  ui-sans-serif,
  system-ui,
  -apple-system,
  BlinkMacSystemFont,
  "Segoe UI",
  sans-serif;
```

System fonts are preferred when performance matters.



## Type scale

Use a limited scale.

Example:

```css
--text-xs: 12px;
--text-sm: 14px;
--text-base: 16px;
--text-lg: 18px;
--text-xl: 24px;
--text-2xl: 32px;
--text-3xl: clamp(40px, 6vw, 72px);
```

Do not create a separate font size for every component.



## Reading width

Long-form text should generally stay around:

```text
60–80 characters per line
```

A practical target:

```css
max-width: 70ch;
```



## Line height

Recommended:

```text
UI text: 1.3–1.5
Body text: 1.5–1.7
Large headings: 1.0–1.2
```



# 11. Spacing

Use a consistent spacing scale.

Example:

```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 24px;
--space-6: 32px;
--space-7: 48px;
--space-8: 64px;
--space-9: 96px;
```

Use these values before introducing custom spacing.



## Spacing hierarchy

Spacing should communicate relationships.

Example:

```text
Label
4px
Supporting text

16px

Next field

32px

Next section
```

Related elements should stay visually close.

Unrelated sections should receive visibly larger spacing.



# 12. Cards

Cards should not be the default container.

Use cards when an element represents:

* a distinct object
* an independent action
* a selectable item
* a reusable module

Do not place every section inside a rounded rectangle.

Prefer:

```text
heading
content
divider
heading
content
```

where a card is unnecessary.



# 13. Buttons

Buttons should be compact and direct.

Recommended heights:

```text
Small: 32px
Default: 40px
Large: 48px
```

Avoid oversized CTA buttons unless the surrounding composition requires them.

Use clear hierarchy:

```text
Primary
Secondary
Tertiary
Danger
```

Do not create several equally prominent actions in the same area.



# 14. Inputs

Inputs should follow the same geometry as the rest of the system.

Example:

```css
height: 40px;
padding-inline: 12px;
border: 1px solid var(--border);
```

Focus state:

```css
border-color: var(--text-primary);
```

or a restrained accent outline.

Avoid excessive glowing focus effects.



# 15. Navigation

Navigation should remain visually quiet.

Primary navigation should clearly answer:

```text
Where am I?
What sections exist?
What can I do here?
```

Do not overcrowd the header.

Less common actions should move into secondary menus.



# 16. Information Density

Density should adapt to context.

Marketing page:

```text
lower density
larger type
more whitespace
strong visual hierarchy
```

Application interface:

```text
medium density
compact controls
more information visible at once
```

Data-heavy interface:

```text
higher density
strong alignment
tables
compact spacing
```

Do not apply one density level to every product.



# 17. Tables

Tables should remain readable on smaller screens.

Possible strategies:

```text
horizontal scrolling
column priority
responsive column hiding
row detail expansion
stacked representation
```

Do not shrink text until the table technically fits.

Maintain readable text size and adapt the structure instead.



# 18. Motion

Motion should communicate state or structure.

Use animation for:

* opening
* closing
* moving
* expanding
* collapsing
* loading
* confirming actions

Avoid animation that exists only to make the page feel active.

Recommended duration:

```text
100–180ms for small interactions
180–300ms for larger transitions
```

Avoid long animations for frequent actions.



## Reduced motion

Always respect:

```css
@media (prefers-reduced-motion: reduce)
```

Animations should not be required for understanding the interface.



# 19. Performance

Performance is part of the design.

The interface should remain usable on low-powered devices.

Avoid depending on:

* heavy JavaScript
* large animation libraries
* continuous visual effects
* excessive blur
* large background videos
* unnecessary canvas rendering
* large image assets
* excessive client-side hydration



## Rendering

Prefer:

```text
HTML
CSS
native browser behavior
server rendering
static rendering
progressive enhancement
```

before introducing JavaScript-heavy solutions.



## JavaScript

JavaScript should provide functionality.

Avoid using JavaScript for layout or styling that CSS can handle.

Prefer:

```css
grid
flexbox
clamp()
min()
max()
minmax()
container queries
media queries
```



# 20. Effects

Avoid expensive effects such as:

```css
backdrop-filter: blur(...)
filter: blur(...)
```

across large areas.

Small localized usage is acceptable when visually justified.

Avoid persistent animations running while the user is idle.



# 21. Images

Use responsive image loading.

Prefer:

```text
AVIF
WebP
SVG
```

where appropriate.

Provide correct image sizes for the viewport.

Use:

```html
loading="lazy"
```

for non-critical images.

Important above-the-fold images may load eagerly.

Avoid downloading desktop-sized images on mobile.



# 22. Icons

Use one consistent icon system.

Icons should:

* have consistent stroke width
* match the visual density
* remain recognizable at small sizes

Avoid mixing several icon libraries.

SVG icons are preferred.



# 23. Loading States

The interface should feel responsive even when data takes time to load.

Use:

* skeletons where layout is predictable
* lightweight spinners for short isolated operations
* optimistic UI where safe
* progressive rendering

Avoid full-page loading screens when part of the page can already be shown.



# 24. Progressive Enhancement

Core information and navigation should work before advanced functionality finishes loading.

Priority:

```text
1. content
2. navigation
3. core interaction
4. enhanced interaction
5. decorative effects
```

The page should remain understandable if enhancement layers fail.



# 25. Accessibility

Accessibility should be part of the base system.

Requirements:

* semantic HTML
* keyboard navigation
* visible focus states
* sufficient contrast
* descriptive labels
* logical heading hierarchy
* accessible form validation
* reduced-motion support

Do not rely only on color to communicate meaning.



# 26. Responsive Design Rules

Avoid fixed widths unless the element genuinely requires them.

Prefer:

```css
width: 100%;
max-width: ...;
min-width: 0;
```

Use:

```css
grid-template-columns:
  repeat(auto-fit, minmax(min(100%, 280px), 1fr));
```

for adaptive grids.



## Example adaptive grid

```css
.grid {
  display: grid;
  grid-template-columns:
    repeat(auto-fit, minmax(min(100%, 280px), 1fr));
  gap: 16px;
}
```

This should be preferred over:

```text
4 columns desktop
2 columns tablet
1 column mobile
```

when the layout does not require specific column counts.



# 27. Breakpoints

Breakpoints should appear where the content starts to fail.

Do not choose breakpoints only because they are common device sizes.

Possible baseline values:

```text
480px
768px
1024px
1280px
```

Use them only when needed.

A layout should ideally remain fluid between them.



# 28. Component Design

Every component should support:

```text
normal
hover
focus
active
disabled
loading
error
```

when applicable.

Components should also work in:

```text
wide containers
narrow containers
light mode
dark mode
touch environments
keyboard environments
```



# 29. Consistency Rules

Do not:

* invent new radius values for individual components
* invent new spacing values without reason
* mix several shadow styles
* mix icon systems
* use different button geometry across pages
* create different input styles for different screens
* use arbitrary breakpoint values everywhere

Reusable values should come from design tokens.



# 30. Design Tokens

Prefer centralized variables.

Example:

```css
:root {
  --background: #ffffff;
  --surface: #ffffff;
  --surface-subtle: #f7f7f7;

  --text-primary: #111111;
  --text-secondary: #666666;

  --border: #e5e5e5;

  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;

  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
}
```

Components should depend on tokens instead of isolated values.



# 31. Page Composition

A well-designed page should usually have:

```text
clear top-level context
primary content
secondary information
actions
supporting information
```

Hierarchy should be obvious without requiring borders around every section.

Use size, weight, spacing, and alignment first.



# 32. Performance Targets

For public-facing pages, target strong Core Web Vitals.

General targets:

```text
LCP < 2.5s
INP < 200ms
CLS < 0.1
```

Prefer significantly better values when possible.

Initial JavaScript should remain small.

Avoid shipping libraries for functionality that can be implemented natively.



# 33. Low-End Device Principle

Always assume some users have:

* older phones
* weak integrated graphics
* limited RAM
* slower CPUs
* slow mobile networks
* battery-saving modes

The core interface should remain smooth.

Do not make high-end hardware a requirement for normal interaction.



# 34. Visual Complexity Budget

Each page should have a limited amount of visual emphasis.

Avoid combinations such as:

```text
large gradient
large shadow
glass effect
animated background
multiple accent colors
large rounded cards
```

on the same page.

Choose a small number of visual characteristics and execute them consistently.



# 35. Final Principle

The interface should feel obvious.

The user should understand:

```text
what this page is
what matters here
what they can do
what happens next
```

without studying the interface.

A successful design should remain:

```text
clean
fast
adaptable
consistent
readable
functional
```

across screen sizes, devices, and performance levels.
