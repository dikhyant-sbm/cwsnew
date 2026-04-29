import { Sparkles, Search, MessageSquare, Network, Bot, Library } from "lucide-react";

/**
 * Replaces the previous "Trusted by" logo wall (which used third-party logos
 * we don't have permission to display). This strip communicates *what we track
 * and where visibility is measured* — the same trust signal, but earned and
 * defensible.
 */
const surfaces = [
  { icon: Search, label: "Google Search" },
  { icon: Sparkles, label: "AI Overviews" },
  { icon: MessageSquare, label: "ChatGPT" },
  { icon: Bot, label: "Gemini" },
  { icon: Network, label: "Perplexity" },
  { icon: Library, label: "Copilot" },
];

export const TrustedBy = () => (
  <section
    aria-label="Visibility surfaces tracked by CiteWorks Studio"
    className="py-12 border-y border-border/40 relative overflow-hidden"
  >
    <div className="mx-auto max-w-7xl px-6">
      <p className="eyebrow text-center mb-8">
        Tracking visibility across every surface modern buyers use
      </p>
      <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-12">
        {surfaces.map(({ icon: Icon, label }) => (
          <li
            key={label}
            className="flex items-center gap-2 text-muted-fg hover:text-foreground transition-colors"
          >
            <Icon className="size-4" strokeWidth={1.5} aria-hidden />
            <span className="font-mono text-[13px] tracking-[0.18em] uppercase">
              {label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
