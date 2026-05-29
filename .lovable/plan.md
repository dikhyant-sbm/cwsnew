
## Goal

Add author attribution to the AI Work Collaboration Platforms report and maximize above-the-fold value for SEO/GEO (how AI engines extract, attribute, and cite the piece), without bloating the hero height.

File touched: `src/pages/case-studies/AIWorkCollaborationPlatforms.tsx`

## 1. Author byline in the hero

Under the H1 + subhead (inside the `lg:col-span-8` column), add a compact author/meta row:

- Small circular avatar (initials "MH" in a tokenized circle — no image asset needed).
- **By Mark Huntley** + a one-line role ("AI Search & Citation Analyst, CiteWorks Studio").
- A separated meta line with: published date (May 26, 2026), an estimated read time ("11 min read"), and "Benchmark: LLM Authority Index".
- Uses existing tokens (`text-body`, `font-mono`, `border-border`). Kept to a single row so it does not push content below the fold.

## 2. Above-the-fold value boosters (GEO/SEO)

These give AI engines and scanning readers immediate, extractable substance:

1. **Key-stats strip** — a 3- or 4-item inline metric row directly under the byline (e.g. "9 platforms capture most shortlist slots", "ClickUp = top cross-cluster framing", "Citations decide valid recommendations"). Short, scannable, quote-friendly for LLMs.
2. **"Key takeaways" / TL;DR card** — replace/augment the right `aside`'s lower area or add a compact bulleted answer box so the core answer to "how is AI recommending collaboration platforms?" is visible immediately. Self-contained sentences = better LLM citation.
3. **Report Card aside** stays but is tightened so the takeaways + stats fit above the fold at the current viewport.

The hero stays compact by using dense, single-row layouts rather than stacked blocks.

## 3. Author bio box at end of content

After the CTA / Benchmark Source section (before "Continue Reading"), add an author card:

- Avatar (MH initials), **Mark Huntley**, role line.
- 2–3 sentence bio establishing topical authority (analyzes AI recommendation behavior, citation architecture, and LLM Authority Index benchmarks).
- Optional small links row ("More reports", "Request an audit").
- Styled with `card-premium` to match the page.

## 4. Structured data (JSON-LD) for SEO/GEO

In the existing `useEffect`, inject (and clean up on unmount) JSON-LD script tags so crawlers/LLMs get explicit attribution and answerable Q&A:

- **Article** schema: headline, description, datePublished, author (`Person` = Mark Huntley), publisher (`Organization` = CiteWorks Studio), and `isBasedOn` / citation referencing LLM Authority Index.
- **FAQPage** schema built from 3–4 question/answer pairs derived from the report (e.g. "Which collaboration platforms does AI recommend most?", "Why isn't visibility enough?"). This is high-leverage for GEO since LLMs lift Q&A directly.

## Technical notes

- All additions are presentational + a metadata `useEffect` extension; no new files, no backend, no design-system changes.
- Author identity defined once as a small `author` constant near the other data arrays and reused in hero byline + bio box + JSON-LD.
- JSON-LD added via dynamically created `<script type="application/ld+json">` elements appended to `document.head`, removed in the effect cleanup to avoid duplicates on route changes.
- Read time / stats are static copy (no runtime calc needed).

## What I recommend adding for best GEO/SEO (summary for you)

- Author byline + bio + Person/Article schema → establishes E-E-A-T authorship signals.
- Key-stats strip + TL;DR card → self-contained, quotable answers AI engines cite.
- FAQPage schema → direct question/answer pairs LLMs and AI Overviews lift verbatim.
- Read time + published date + benchmark source visible up top → trust + freshness signals.
