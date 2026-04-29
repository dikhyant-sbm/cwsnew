import { Search, MessageSquare, Youtube, MessagesSquare, Star, Scale, Globe, Newspaper } from "lucide-react";

const surfaces = [
  { icon: Search, label: "Google Search" },
  { icon: MessageSquare, label: "ChatGPT & LLMs" },
  { icon: Globe, label: "AI Overviews" },
  { icon: Youtube, label: "YouTube" },
  { icon: MessagesSquare, label: "Reddit & Communities" },
  { icon: Star, label: "Review Sites" },
  { icon: Scale, label: "Comparison Pages" },
  { icon: Newspaper, label: "Third-Party Sources" },
];

export const Problem = () => (
  <section className="relative py-28 border-t border-border/40">
    <div className="mx-auto max-w-7xl px-6">
      <div className="max-w-3xl">
        <p className="eyebrow">The buyer journey changed</p>
        <h2 className="display text-4xl sm:text-6xl mt-5 leading-[1.05]">
          Buyers no longer move through{" "}
          <span className="text-tertiary">one search result.</span>
        </h2>
        <p className="mt-7 text-lg text-body leading-relaxed">
          A single high-consideration buyer may search Google, ask ChatGPT, scan AI Overviews,
          compare brands in Perplexity, watch YouTube reviews, read Reddit threads, check review
          sites, visit comparison pages, and then return to your website before making a decision.
        </p>
        <p className="mt-5 text-lg text-body leading-relaxed">
          That means your company needs more than rankings. It needs clear entity signals, useful
          content, credible sources, technical structure, third-party support, and stronger
          retrieval alignment — across every surface buyers actually use.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-3">
        {surfaces.map((s) => (
          <div
            key={s.label}
            className="glass border-gradient rounded-xl p-5 flex flex-col items-start gap-3 hover:border-primary/30 transition-colors"
          >
            <s.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
            <p className="text-sm text-body font-medium">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
