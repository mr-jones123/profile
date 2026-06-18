# Design System: GitHub Universe Inspired

## 1. Visual Theme & Atmosphere
Industrial editorial event site with a pale technical canvas, hard grid lines, oversized wordmarks, documentary media, and restrained code-like labels. Density is medium, variance is high, motion is active but mechanical. The page should feel like a conference identity system turned into an interface.

Use this as inspiration, not a clone. Keep the structure, rhythm, and motion language. Replace GitHub marks, Octocat art, and event-specific copy with project-owned assets.

## 2. Color Palette & Roles
- **Fog Canvas** (#EFF3F1) — primary page background, never pure white.
- **Grid Line** (#D2DAD5) — 1px section dividers, card boundaries, nav borders.
- **Ink Black** (#050505) — primary text and oversized display type. Avoid #000000.
- **Muted Code Gray** (#5D6862) — mono labels, metadata, secondary copy.
- **Universe Green** (#078D32) — only primary accent. CTAs, tiny status squares, active states.
- **Ticker Violet** (#5B3DF5) — marquee strip only, never buttons or glows.
- **Ticker Mint** (#83E88F) — marquee strip and graphic tiles only.
- **Ticker Brass** (#BBA72F) — marquee strip and graphic tiles only.
- **Deep Aubergine** (#211A33) — dark ticker segment and rare graphic contrast.

No gradients for core UI. Color should appear as flat blocks, tiny pixels, or media accents.

## 3. Typography Rules
- **Display:** Geist Mono, ultra-wide uppercase wordmarks. Use `clamp(3rem, 13vw, 12rem)`, `font-weight: 700`, `letter-spacing: -0.07em`, `line-height: 0.82`.
- **Headlines:** Geist Serif for editorial section titles. Use `clamp(2.25rem, 5vw, 5rem)`, `line-height: 1.03`, `letter-spacing: -0.045em`.
- **Body:** Geist Serif, 20px to 32px, relaxed but not soft. Max line length 52ch.
- **Metadata:** Geist Mono, 14px to 18px, lowercase where possible, slash-separated, terminal-like labels such as `dev.learn()` or `agenda/`.
- **Buttons:** Geist Mono or Geist Serif at 16px to 18px. Keep labels plain and direct.

Do not use Inter. Do not use generic serif fallbacks as the visible design language.

## 4. Layout Principles
- Build the whole page on a visible 1px grid. Every major section has top, bottom, and vertical divider lines.
- Use asymmetric two-column compositions on desktop: media on one side, copy and CTA modules on the other.
- Hero starts with a huge full-width wordmark, then a bordered media/content grid below it.
- Prefer rectangles with square corners or tiny radii. No pill cards, no soft SaaS containers.
- Leave intentional empty grid cells. Blank space should look structural, not unfinished.
- Use photographic or video blocks as hard-edged rectangles. Crop boldly with `object-fit: cover`.
- CTA modules span the full width of their grid cell. Primary CTA is a flat green rectangular block.
- Repeat code-label/content/media sections in alternating positions instead of equal card rows.

## 5. Scroll, Text, and Motion
- Header stays sticky at the top with visible grid borders.
- Use horizontal marquee strips after major sections. They scroll continuously and contain repeated offer/status text on flat color blocks.
- Text reveals should feel mechanical: line-mask reveal upward, opacity from 0 to 1, 80ms to 140ms stagger.
- Media should reveal by clipping from one edge or sliding 24px while fading in. No zoomy parallax.
- Tiny accent squares may blink or step between green and violet, like terminal pixels.
- Buttons translate by 1px on press and arrow icons move 4px diagonally on hover.
- Animate only `transform`, `opacity`, and `clip-path`. Avoid blur, glow, bouncing, and elastic effects.
- Respect `prefers-reduced-motion`: freeze marquees and show all text without staged reveals.

## 6. Components
- **Navigation:** sticky horizontal grid bar. Logo cell left, link cells with borders, auth/action cells right. Mobile collapses to logo plus hamburger.
- **Primary CTA:** full-width green rectangle, 16px to 24px padding, white text, arrow in the far right corner. No shadow.
- **Secondary links:** plain text inside bordered cells. Hover changes background to slightly darker Fog Canvas.
- **Marquee:** fixed-height strip, 44px to 56px desktop, 40px mobile. Alternating violet, mint, brass, and aubergine blocks.
- **Media blocks:** bordered, square-corner rectangles with small circular playback control if needed.
- **Info panels:** bordered grid cells with metadata on top, large text below, CTA at bottom when needed.
- **Timeline/agenda:** mono time labels plus serif descriptions, separated by grid lines. Avoid card shadows.

## 7. Responsive Rules
- **Desktop, 1200px and up:** full nav, huge wordmark, hero grid can be 50/50 or 52/48. Keep maximum content width near 1440px.
- **Tablet, 768px to 1199px:** keep grid, but center hero media in a narrower column. Wordmark remains oversized. CTA and text panels stack under media.
- **Mobile, below 768px:** single column. Header is logo plus hamburger. Wordmark uses 48px to 64px and must not overflow. Media appears before event details, copy, then CTA.
- Mobile horizontal overflow is a failure. Use `overflow-x: clip` on wrappers and test at 360px width.
- Touch targets are at least 44px high.
- Section padding: `clamp(1.25rem, 4vw, 3rem)`. Large vertical gaps come from empty grid rows, not random margins.

## 8. Anti-Patterns (Banned)
- No centered generic hero with subtitle and two buttons.
- No rounded gradient SaaS cards.
- No neon glows or purple/blue AI gradients.
- No three equal feature cards.
- No emojis.
- No fake dashboards unless the product actually needs one.
- No scroll arrows, bouncing chevrons, or “scroll to explore” text.
- No decorative animations that do not reinforce the grid, ticker, media, or text reveal system.
- No pure black backgrounds. This design is light, gridded, and editorial.
