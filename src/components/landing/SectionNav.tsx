import { useEffect, useState } from "react";

export type SectionNavItem = { id: string; label: string };

/**
 * Sticky in-page nav for long pages (Services, Methodology).
 * - Smooth scrolls to anchor
 * - Highlights active section via IntersectionObserver
 * - Reduced-motion safe
 * - Hidden on mobile (collapses to a quick scroll-to-top of section list on tablets+)
 */
export const SectionNav = ({
  items,
  className = "",
  variant = "rail",
}: {
  items: SectionNavItem[];
  className?: string;
  variant?: "rail" | "floating";
}) => {
  const [active, setActive] = useState<string>(items[0]?.id ?? "");

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;
    const els = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!els.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [items]);

  const baseClass =
    variant === "floating"
      ? "hidden xl:block fixed left-6 top-1/2 -translate-y-1/2 z-30 max-h-[70vh] overflow-auto pr-3"
      : "hidden lg:block sticky top-24 self-start";

  return (
    <nav aria-label="On this page" className={`${baseClass} ${className}`}>
      <p className="font-mono text-[12px] tracking-[0.16em] text-body mb-4">
        ON THIS PAGE
      </p>
      <ul className="space-y-1.5 border-l border-border">
        {items.map((i) => {
          const isActive = active === i.id;
          return (
            <li key={i.id}>
              <a
                href={`#${i.id}`}
                aria-current={isActive ? "true" : undefined}
                className={`block pl-4 -ml-px py-1.5 text-xs font-mono tracking-wide border-l transition-colors max-w-[180px] truncate ${
                  isActive
                    ? "text-foreground border-primary"
                    : "text-body border-transparent hover:text-foreground"
                }`}
              >
                {i.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
