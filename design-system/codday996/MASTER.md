# Codday996 — Visual Design System

## Positioning
Premium digital development studio for **mid-market Indonesian businesses**. Convey competence and clarity over hype. The page sells practical business outcomes and proven work. No fabricated testimonials or sales statistics.

## Inspiration and process
Design decisions cross-checked against open UI/UX Pro Max skill guidance:
https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/main/.claude/skills/ui-ux-pro-max/SKILL.md

Pattern references (inspiration only; custom implementation):
- https://21st.dev/community/components/s/animated-hero
- https://21st.dev/community/components/explore/navigation-bar-ui-design
- https://news.21st.dev/blog/react-mobile-navigation-components

Note: The UI/UX Pro Max CLI database was not installed or executed in this environment; design-system decisions were authored manually following the published skill's priority rules and QA guidance.

## Design language
- Personality: editorial, optimistic, restrained, architectural, approachable premium.
- Art direction: off-white negative space with forest green immersive portfolio panels.
- Key accent: fresh lime (only for selective actions/highlights).
- No random stock people, fake brand badges, screenshots from unrelated apps, or background video autoplay.
- Screenshot assets used are local project portfolio images.

### Design tokens
| Token | Value | Application |
| --- | --- | --- |
| `--paper` | `#f8f9f5` | Main page |
| `--white` | `#ffffff` | Content blocks |
| `--ink` | `#13211e` | Main text |
| `--forest` | `#0b211b` | Hero controls |
| `--deep` | `#0c1b17` | Dark supporting sections |
| `--muted` | `#66716d` | Supporting text |
| `--lime` | `#c9f17a` | Intentional brand accent |
| `--line` | `#dde3dc` | Dividers |
| Display | Manrope 800–900 | Editorial headlines |
| Emphasis | Instrument Serif Italic | Distinct brand voice |
| Body | Manrope 400–800 | Functional content |

## Responsive
- Core max container: 1240px.
- Breakpoints: 1120, 860, 520px.
- Mobile navigation: fixed **5-item bottom dock**, always has icons AND labels, **no hamburger**.
- Top bar always shows brand and consultation CTA.
- Safe area: `bottom: calc(10px + env(safe-area-inset-bottom))`.
- Footer bottom padding ensures fixed nav does not hide content.
- Minimum mobile touch targets: 44px and visible focus styles.
- Portfolio list horizontally scrolls on phones **within its own container**; no page-level horizontal overflow.

## Motion principles
- Animate opacity/transforms, not layout dimensions.
- Entry motion uses restrained stagger and 250–700ms durations according to hierarchy.
- UI interaction reactions generally ~200ms.
- Gentle visual loop: small floating hero mockup and CSS orbit. Marquee moves slowly.
- `prefers-reduced-motion: reduce` disables continuous and entrance effects.
- No autoplay video or blocking 3D script: showcase from real image assets avoids excessive network and GPU cost.

## Conversion flow
1. Hero: business outcome, clear CTA to estimate and portfolio.
2. Services: one tangible use case per card.
3. Project proof: six actual products, screenshot display and external demos.
4. Process: expectation setting.
5. Estimate: transparent configurator and WhatsApp prefill.
6. FAQ: answer uncertainties about price/scope/support.
7. Contact: concise path to consultation.

## Quality bar before merge
- `npm ci && npm run lint && node --test tests/estimate.test.js && npm run build`
- Manually review mobile 320 / 375 / 430px, 768px tablet, and desktop.
- Verify safe area, text zoom, touch sizes, focus order, reduced motion, link targets, portfolio screenshot fallback and PWA caching.
- Confirm all pricing values with business owner: simulators must not masquerade as fixed quotes.
