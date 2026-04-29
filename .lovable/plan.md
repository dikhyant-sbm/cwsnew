# Fix "One platform. Every layer of visibility." scrollytelling

## Problems today

- The image lives in a `sticky top-28` column on the **left** of a 2-column grid. Sticky height = the column's natural height, which is just the image itself — much shorter than the steps column on the right. So when you scroll past the image's own height, the right column is still emitting steps but the image **detaches and scrolls up with the page**.
- The first step is already past the viewport center when the section enters, so step 1 doesn't feel like "the entry point."
- By steps 6 and 7 the image is long gone above the fold.
- The screenshot panel is too small for an executive-grade showcase.

## Target behavior

- When the section enters the viewport, the image **pins to the vertical center** and step 1 is active.
- As the user scrolls, the page advances, **the image stays centered and unchanged in position**, and only the step content on the right moves up. The active image **crossfades** as each step crosses the center line.
- The image stays pinned through step 7 (last step). Only after step 7 has been read does the section release and the page continues scrolling normally.
- The dashboard image is visibly larger.

## Implementation

Rewrite `src/components/landing/DashboardWalkthrough.tsx` layout so the sticky container's height is driven by the steps, not by the image:

1. **Restructure the grid** so the **right (steps) column owns the section height** and the **left (image) column is sticky inside a wrapper that spans the full steps height**.
   - Outer wrapper: `relative grid lg:grid-cols-12`.
   - Left col (`lg:col-span-7`): contains a single sticky figure — `sticky top-1/2 -translate-y-1/2` so it pins to **viewport center** (not top), with `h-[80vh]` max and `self-start` so it can stick within the tall parent.
   - Right col (`lg:col-span-5`): the `<ol>` of steps. Each step gets generous `min-h-[80vh]` so there's exactly one step's worth of scroll per image change. This makes the parent grid tall, which gives the sticky image room to remain pinned through all 7 steps.

2. **Center-pin the image**: replace `lg:sticky lg:top-28` with `lg:sticky lg:top-[10vh]` and constrain the figure to `max-h-[80vh]` so the whole frame stays within the viewport. Use `flex items-center` so the image is visually centered in its sticky box. (Pure `top-1/2 -translate-y-1/2` plays poorly with sticky in some browsers; `top-[10vh]` with `h-[80vh]` is the reliable equivalent.)

3. **Enlarge the screenshot**:
   - Bump left column to `lg:col-span-8` and right column to `lg:col-span-4` so the image gets ~14% more horizontal space.
   - Change the device screen aspect from `aspect-[16/10]` to `aspect-[16/9]` (wider, more dashboard-like) and let it fill the sticky box up to `max-h-[78vh]`.
   - Increase ambient glow radius to match the larger frame.

4. **Tune the IntersectionObserver** so the active step switches when a step crosses the **viewport center**, matching the centered image:
   - `rootMargin: "-50% 0px -50% 0px"` (a 1px-tall activation band at center) with `threshold: 0`.
   - Each step is `min-h-[80vh] flex flex-col justify-center`, so its activation point aligns with the centered image.

5. **First / last step framing**:
   - Add `pt-[10vh]` before the first step and `pb-[10vh]` after the last so step 1 activates exactly when the section header clears the top, and step 7 activates before the section releases the sticky.

6. **Reduced motion**: keep current behavior (force `active = 0`, no scroll-driven changes).

7. **Mobile (`<lg`)**: keep stacked layout — image above each step block, no sticky. Already handled by the `lg:` prefixes.

## File touched

- `src/components/landing/DashboardWalkthrough.tsx` — layout, sticky strategy, IntersectionObserver margins, step min-heights, image aspect ratio, column spans.

No new dependencies. No changes to `DashboardShowcase` or other sections.

## QA

After the change, browser-test at 1952×1177:
- Scroll into the section: image appears centered, step 1 active.
- Continue scrolling: page scrolls, image holds center, steps advance and crossfade.
- At step 7: image still centered.
- Scroll past step 7: section releases, page resumes normal scroll.
- Screenshot to confirm the dashboard panel is visibly larger than before.
