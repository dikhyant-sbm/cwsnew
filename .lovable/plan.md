## Goal

Make `src/pages/case-studies/AIWorkCollaborationPlatforms.tsx` cleanly semantic (H1 → H2 → H3), and add the highest-value GEO/SEO + UX improvements that are currently missing.

## What I found

- **Heading hierarchy is already mostly correct.** One `<h1>` in the hero; every section listed in the left-sidebar TOC is an `<h2>`; cards/sub-items inside sections are `<h3>`. No fix needed beyond a small audit pass.
- **Biggest gap:** A `faqs` array is defined and injected into FAQPage JSON-LD, but **there is no visible FAQ section on the page.** Google/AI engines strongly prefer FAQ schema that matches visible on-page content — schema-only FAQs are a risk and a missed UX/GEO win.
- **No Breadcrumb structured data** even though the page sits under a clear path (Reports → AI Work Collaboration Platforms).
- **TOC is static** — links don't highlight the section currently in view, so the long page is harder to navigate.

## Changes

### 1. Heading hierarchy audit (semantic correctness)
- Confirm and keep one `<h1>` (hero title).
- Keep all TOC-mapped section titles as `<h2>` (Opening Summary, Key Findings, What Changed, etc.).
- Keep nested card titles as `<h3>`. Verify no `<h3>` appears without an `<h2>` ancestor in its section.

### 2. Add a visible FAQ section (GEO/SEO + UX)
- Render the existing `faqs` array as an accordion (using the existing `ui/accordion` component) in a new `<section id="faq">` placed before "Continue Reading".
- Section title as `<h2>`; each question as `<h3>` inside the accordion trigger so the visible content mirrors the FAQPage JSON-LD.
- Add `{ id: "faq", label: "FAQ" }` to the `toc` array so it appears in the sidebar.

### 3. Add Breadcrumb structured data
- Extend the JSON-LD `@graph` with a `BreadcrumbList` (Home → AI Industry Market Discovery Reports → this report) for richer AI/search context. No visual change.

### 4. Active-section highlighting in the TOC (UX)
- Use an `IntersectionObserver` (same pattern as `src/components/landing/SectionNav.tsx`) so the current section's TOC link highlights as the user scrolls, with `aria-current` for accessibility.

### 5. Small UX/SEO polish
- Add `scroll-mt-28` to the new FAQ section (consistent anchor offset).
- Ensure the hero card image keeps descriptive `alt` (already good).

## Technical notes

- All work is contained to `src/pages/case-studies/AIWorkCollaborationPlatforms.tsx`, reusing existing `@/components/ui/accordion` and design tokens — no new colors or dependencies.
- JSON-LD changes stay inside the existing `useEffect` that appends/cleans up the `aiwc-jsonld` script.

## Optional follow-up

The sibling report `src/pages/case-studies/JobBoardAISearch.tsx` shares this layout. If you want, I can apply the same visible-FAQ + breadcrumb + active-TOC pattern there for consistency — say the word and I'll include it.