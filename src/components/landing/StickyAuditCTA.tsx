import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, X } from "lucide-react";

/**
 * Floating sticky CTA — appears after the hero, hidden on the audit page,
 * dismissible per session. Mobile-first: thumb-reachable, compact.
 */
export const StickyAuditCTA = () => {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  // Don't show on the audit page itself.
  const hideOnRoute = pathname.startsWith("/request-audit");

  useEffect(() => {
    if (typeof window === "undefined") return;
    setDismissed(sessionStorage.getItem("cw-cta-dismissed") === "1");
    const onScroll = () => setVisible(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (hideOnRoute || dismissed) return null;

  return (
    <div
      aria-hidden={!visible}
      className={`fixed z-40 bottom-4 right-4 sm:bottom-6 sm:right-6 transition-all duration-500 ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-3 pointer-events-none"
      }`}
    >
      <div className="relative flex items-stretch glass-strong border-gradient rounded-full pl-1 pr-1 py-1 shadow-[0_20px_50px_-15px_hsl(0_0%_0%/0.6)]">
        <Link
          to="/request-audit"
          className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 btn-glow px-5 h-10 font-mono text-[13px] tracking-[0.18em]"
        >
          REQUEST A VISIBILITY AUDIT
          <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
        <button
          type="button"
          onClick={() => {
            sessionStorage.setItem("cw-cta-dismissed", "1");
            setDismissed(true);
          }}
          aria-label="Dismiss audit prompt"
          className="ml-1 inline-flex items-center justify-center w-8 rounded-full text-muted-fg hover:text-foreground hover:bg-foreground/5 transition-colors"
        >
          <X className="size-3.5" />
        </button>
      </div>
    </div>
  );
};
