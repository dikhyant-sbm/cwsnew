## Goal

Tighten the `/case-studies` hero, restructure the AI Market Strategy section around LLM Authority Index findings → remediation, and add per-section "view all" directory buttons so visitors can navigate cleanly between the three content types.

Rename the types of reports:  
1)  AI Market Strategy to AI Market Discovery Action Reports  
2)  Client Implementation Case Studies (existing)  
3) Company Reports (existing) to  AI Company Market Strategy Reports

## 1. Replace the hero with the three-pillar overview

**Problem:** The current hero shows long marketing copy plus a separate "Three ways to understand AI discovery performance" overview section below it, which duplicates intent and confuses scanning.

**Change:** Merge them. The hero becomes the single, definitive intro to the three content pillars.

- Keep the eyebrow, H1, and one short subhead (1–2 sentences max).
- Remove the `HeroVisual` right-column panel and the long body copy.
- Render the three pillars directly inside the hero as a 3-card grid (using the existing `overviewCards` data, refreshed copy):
  1. **AI Market Strategy** — what AI is recommending in your category, and what to fix.
  2. **Client Implementation Case Studies** — real CiteWorks engagements and measurable outcomes.
  3. **AI Company Discovery Reports** — company-level readouts from LLM Authority Index data.
- Each card gets two affordances: a deep link to its section anchor on this page, and an "Explore directory →" link to the full archive route.
- Delete the standalone "Content Library / Three ways to understand…" section that follows the hero (now redundant).

Keep the sticky anchor nav as-is for in-page jumps.

## 2. Restructure the AI Market Strategy section

**Positioning:** AI Market Strategy = LLM Authority Index benchmark summary → what it means for buyer discovery → what's likely causing the gap → what CiteWorks would prioritize fixing → actionable takeaways enterprise teams can implement.

**New section layout (`#market-discovery`):**

1. **Intro block** — eyebrow + H2 + 2-sentence positioning ("Benchmark-led market intelligence, powered by LLM Authority Index, translated into the fixes that move recommendation share.").
2. **The five-part anatomy of every AI Market Strategy report** — a 5-step rail or numbered grid so enterprise readers immediately see what's inside:
  - 01 · Benchmark summary (LLM Authority Index findings for the category)
  - 02 · Why it matters for buyer discovery
  - 03 · Likely causes of the visibility / recommendation gap
  - 04 · What CiteWorks Studio would prioritize fixing
  - 05 · Actionable plays brands can implement to lift LLM visibility
3. **Featured reports grid** — keep the two existing `marketCases` cards (tax relief, AI collaboration) with a "Market Strategy" badge.
4. **Section CTAs** (replacing the single audit button):
  - Primary: `View all AI Market Strategy reports` → `/case-studies/ai-market-strategy` (the directory route).
  - Secondary: `Request an AI Visibility Audit` → `/request-audit`.
5. Keep the existing "From Benchmark to Remediation" comparison block beneath it — it reinforces the anatomy.

## 3. Add directory CTAs to the other two sections

So each pillar has a clear "see everything" path.

- **AI Company Discovery Reports (`#company-reports`)**: under the Slack card, add a CTA row with `View all AI Company Discovery Reports` → `/case-studies/ai-company-reports` (plus keep the existing audit CTA).
- **Client Implementation Case Studies (`#client-results`)**: under the client cards grid, add `View all client case studies` → `/case-studies/client-results`.

Routes themselves are out of scope for this change (they can 404 until the directory pages are built); the buttons just need to point to stable URLs.

## 4. Copy polish for SEO / GEO / enterprise tone

Across hero cards, section intros, and CTAs:

- Lead each pillar with the noun phrase ("AI Market Strategy reports", "AI Company Discovery Reports", "Client implementation case studies") so the page is unambiguous for both crawlers and LLM retrieval.
- Use consistent, plain-English verbs: *benchmark*, *diagnose*, *prioritize*, *remediate*, *implement*.
- Update `<title>` and `<meta name="description">` to lead with the three content types and mention LLM Authority Index as the benchmark source.
- Make sure every section's H2 and first sentence repeat the pillar name once for keyword clarity without being stuffed.

## Technical notes

- File touched: `src/pages/CaseStudies.tsx` only.
- Refresh the `overviewCards` array (copy + add a `directoryHref` field) and reuse it inside the hero.
- Remove the `HeroVisual` component and the now-redundant "Overview" section. Keep `Nav`, `Footer`, `StickyAuditCTA`, sticky anchor nav, Benchmark→Remediation, Methodology, and final CTA sections untouched structurally.
- Add a small numbered list/grid component inline for the 5-part anatomy (no new file needed) using existing tokens (`card-premium`, `eyebrow`, `display`, `text-gradient`, `font-mono` rails).
- Directory link targets used (placeholders, no route work in this pass):
  - `/case-studies/ai-market-strategy`
  - `/case-studies/ai-company-reports`
  - `/case-studies/client-results`
- No design system, no business logic, no backend changes.