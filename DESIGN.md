# Design System: Dark Star

## 1. Visual Theme & Atmosphere
Dark-only rework of the GitHub Universe-inspired editorial grid, tuned to the Dark Star aesthetic (League of Legends skin line): a violet-black void, drifting magenta/cyan nebulae, an instanced starfield that reacts to scroll and pointer, and a red-black "void ring" mark in the hero. The subject's own copy — "the tech universe is my canvas, I paint star systems" — is literal. Content sits on translucent solid-glass panels so type stays readable over the cosmos. Use this as inspiration, not a clone.

## 2. Color Palette & Roles
- **Void Canvas** (#07060B) — primary page background. Never pure #000.
- **Surface** (#0D0B14) / **Raised** (#141021) — nested cells, hover fills, secondary CTA.
- **Panel** rgba(13,11,20,0.88) — every text-bearing cell; keeps copy legible above the starfield.
- **Grid Line** (#221D33) and **Grid Strong** (#322A4A) — 1px dividers with violet cast.
- **Ink** (#F2EFF7) — primary text. **Muted** (#A49CC0) / **Faint** (#5E5678) — labels and metadata.
- **Violet Accent** (#C9A2FF) — CTAs, signal pixels, project wordmarks, marquee tint, github nav cell. Accent fills always pair with `--accent-ink` (#12091F).
- **Energy tints** (backgrounds only): Magenta #E14FD2, Cyan #35D6FF, Void Red #FF3B47 — nebula gradients, starfield stars, void-ring glow.
- **PH Flag Blue/Red** (#5A8DE8 / #EF5560) — reserved exclusively for the "Filipino" wordmark split.

No light mode. `color-scheme: dark` is set at :root. Energy tints never appear as text color.

## 3. Signature Elements
- **Starfield** (`app/Starfield.tsx`): one instanced THREE.Points draw call (~1.1k soft sprites), custom GLSL twinkle + depth parallax on scroll, pointer-tilt group rotation, velocity-driven size. Violet-bone majority with magenta/cyan/red rare tints. `next/dynamic ssr:false`; skipped under reduced motion.
- **Nebula** (`.nebula`): two drifting radial-gradient layers, pure CSS keyframes, GPU-composited transforms only.
- **Void Ring** (`.void-ring`): radial red-black eclipse with cyan pulse halo — the hero's Dark Star mark.

## 4. Typography Rules
- **Display:** Geist Mono, ultra-wide uppercase wordmarks. `clamp(3rem, 13vw, 12rem)`, weight 700, tight negative tracking, line-height 0.82. Project names (Zenin, Toji, dka, OctoAI) render in violet accent.
- **Headlines:** Newsreader (serif) for editorial section titles, `clamp(2.5rem, 5vw, 5.5rem)`+, line-height ~0.95.
- **Body:** Newsreader, 20–32px, max 52ch.
- **Metadata:** Geist Mono 14–18px, lowercase, slash-separated terminal labels (`dev.myth()`, `career.log()`).
- Do not introduce Inter or any new family; three variables already loaded in layout.tsx.


## 5. Layout Principles
Unchanged from the light system: full-page visible 1px grid, asymmetric two-column compositions, square corners, intentional empty cells, hard-edged media blocks, alternating code-label/content sections. Max content width 1440px. Mobile: single column, no horizontal overflow, ≥44px touch targets. Every text-bearing cell carries the `panel` glass background.

## 6. Scroll, Text, and Motion
- **Smooth scroll:** Lenis (lerp 0.1), driven by a single animejs `createTimer` rAF loop — one animation frame for the whole page. Anchor links route through Lenis (`anchors: true`). CSS `scroll-behavior` disabled when Lenis owns the page.
- **Hero:** per-character spring rise (`spring({stiffness:72, damping:10})`, 30ms stagger). Springs overshoot slightly; nothing bounces forever.
- **Reveals:** every `.reveal` gets its own `onScroll({enter:"bottom-=40"})` observer linked via `autoplay`, so entry stagger follows scroll position. Spring ease, translateY 28px + fade.
- **Marquee:** animejs-driven linear loop with 4px snapping (mechanical ticker feel); pauses under reduced motion.
- **Arrows/CTAs:** spring hover nudge (x+5/y−5, slight scale), spring return on leave. Press feedback via `active:translate-y-px`.
- **Starfield:** fixed WebGL canvas behind content (z-0), pointer-events none. Depth parallax on scroll, eased group tilt toward pointer, velocity-driven star size. One instanced draw call (~1.1k points), custom GLSL twinkle. Loaded via `next/dynamic ssr:false`; skipped entirely under `prefers-reduced-motion`.
- Animate only `transform`, `opacity`. No blur/glow filters. All motion gated behind `prefers-reduced-motion` checks; `.motion-ready` is added by an inline bootstrap script before first paint so hidden states never flash.

## 7. Components
- **Navigation:** sticky, bordered, translucent canvas with backdrop blur. Logo cell left; companies/projects/contact/github cells right; mobile collapses to menu details. Theme toggle removed — site is permanently dark.
- **Primary CTA:** flat violet rectangle, `--accent-ink` text, arrow far right. Secondary CTA uses Raised surface.
- **Marquee:** 56px strip, violet-tinted blocks alternating with plain canvas cells separated by strong grid borders.
- **Info panels/company rows/project panels:** bordered grid cells as before; hover surfaces use Surface token.
- **Pixel art:** Trunks image desaturated (`saturate-[0.75]`) to sit in the dark palette.

## 8. Responsive Rules
Same breakpoints as before: desktop full nav and huge wordmark; tablet keeps grid; mobile single column with hamburger. Wordmark clamps so it never overflows at 360px.

## 9. Anti-Patterns
- No glassmorphism blur-cards beyond the `panel` system; no neon text glows. The void-ring and nebula gradients are the sanctioned atmosphere — everything else stays flat.
- No light theme, no theme toggle UI.
- No bouncing chevrons, scroll-jacking, or "scroll to explore" text.
- No emojis.
- No decorative motion outside the reveal/ticker/starfield/spring-hover systems.
- Never animate layout properties; never run a second rAF loop alongside the shared engine timer.
