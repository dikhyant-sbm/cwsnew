# Recreate higoodie.com

A pixel-faithful recreation of the Goodie marketing homepage as a single-page React app. Dark theme, monospace nav labels, large white display headings, soft blue accent CTA, faint grid-line background.

## Design system

- Background: near-black (#0A0A0A / hsl 0 0% 4%)
- Foreground: white
- Accent (CTA buttons, highlights): pastel blue (~#BCD4FF)
- Muted text: light gray
- Font: Inter (or similar geometric sans) for body/headings, monospace (JetBrains Mono) for nav, eyebrows ("FEATURES", "CASE STUDIES", "FAQ"), and small labels
- Faint vertical/horizontal grid lines as section backdrop
- Generous vertical spacing, centered hero, large display type up to ~120px

## Sections (in order)

1. **Top nav** — Goodie cube logo + wordmark on left; center links: PRODUCT ▾, USE CASE ▾, RESOURCES ▾, PRICING, ABOUT (dots between); right: outlined "LOG IN" pill + filled blue "GET A DEMO" pill.
2. **Hero** — Eyebrow none; massive headline "Unlock AI Search Growth"; subheading paragraph; centered "GET A DEMO" CTA. Faint grid background.
3. **Trusted by leading brands** — small monospace label + horizontal row of 6 partner logos (placeholders/SVGs).
4. **Product screenshot** — large dashboard mockup image with subtle blue glow.
5. **Tracking all major AI models** — label + horizontal scrolling/wrapped row of 10 model logos (ChatGPT, Gemini, Claude, Perplexity, Grok, Meta, Rufus, Copilot, AI Overview, DeepSeek, Google AI Mode).
6. **The Closed Loop / End-to-End AEO Platform** — section heading + 4 cards (Research, Monitor, Action, Measure) numbered 01–04 with image, number, title, description.
7. **Features grid** — eyebrow "Features", heading "The Intelligence System Behind Your AI Search Growth", then 7 large feature cards each with image + title + copy + "LEARN MORE →":
   - Prompt Research, Visibility Monitoring, Optimization Actions, AEO Writer, Agentic Commerce Suite, Crawlers & Agents, Analytics & Attribution.
8. **Case Studies** — eyebrow "CASE STUDIES", heading "The Proof Is in the Performance", intro copy, then 4 case study cards (Dermalogica, NoGood, Rathbones, SteelSeries) with logo, stat-led blurb, "Read full case study" link.
9. **Built for the LLMs…** — heading + 3 numbered blocks (01/02/03) with subheadings and copy.
10. **Use Cases** — eyebrow "USE CASES", heading "Solutions Tailored to Your Vertical", 6 cards (Agencies, Travel & Hospitality, Fintech, Enterprise, SaaS, Commerce & Retail) with image + copy + "LEARN MORE".
11. **What's New in AI Search** — eyebrow + heading, 3 blog post cards with cover image, title, date, author.
12. **FAQ** — eyebrow "FAQ", heading "Questions? We have the answers.", accordion with 7 Q&As (using shadcn Accordion).
13. **Final CTA** — large 3D Goodie cube logo image, heading "Gain Your Edge in AI Discoverability", "GET A DEMO" CTA.
14. **Footer** — logo, link columns (Product, Use Cases, Resources, Company), legal row.

## Technical notes

- Single page at `/` (`src/pages/Index.tsx`) composed of section components in `src/components/landing/`.
- Update `src/index.css` design tokens to dark theme + accent blue, add Inter + JetBrains Mono via Google Fonts in `index.html`.
- Extend `tailwind.config.ts` with `fontFamily.sans` and `fontFamily.mono`.
- Use shadcn `Button`, `Accordion`, `Card` components.
- Images: use the actual asset URLs from higoodie.com directly via `<img src="https://higoodie.com/...">` so the visuals match exactly. Add `loading="lazy"`.
- Faint grid background via SVG or repeating linear-gradient utility class.
- Fully responsive: nav collapses to hamburger (Sheet) on mobile, grids stack to single column.
- No backend, no auth, all content static.
