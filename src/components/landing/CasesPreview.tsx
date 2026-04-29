import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const cases = [
  {
    cat: "Tax Relief",
    metric: "+112.5%",
    label: "AI Overview brand mentions",
    detail: "Across 19 high-intent tax-related queries; #6 average ranking position; 9,984 keywords in Google's top 10.",
  },
  {
    cat: "Household Appliance",
    metric: "+400%",
    label: "ChatGPT brand mentions",
    detail: "Across 100+ high-intent queries; 13,679 keywords in Google's top 10; 100 high-impact community sources strengthened.",
  },
  {
    cat: "Crypto Wallet",
    metric: "+120%",
    label: "AI Overview mentions",
    detail: "Across 80 high-intent crypto wallet queries; 4,136 keywords in Google's top 10; 300+ cited pages strengthened.",
  },
  {
    cat: "Pest Control",
    metric: "64",
    label: "Cited pages influenced (5 days)",
    detail: "For ChatGPT and AI Overviews; 520 high-value keywords reached Google's top 10; 23 high-authority citations activated.",
  },
];

export const CasesPreview = () => (
  <section className="py-28 border-t border-border/40">
    <div className="mx-auto max-w-7xl px-6">
      <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
        <div className="max-w-2xl">
          <p className="eyebrow">Proof</p>
          <h2 className="display text-4xl sm:text-5xl mt-5 leading-[1.05]">
            Visibility movement across high-consideration verticals.
          </h2>
          <p className="mt-5 text-body text-lg leading-relaxed">
            Anonymized case studies showing what changes when companies strengthen more than
            rankings — across Google, AI answers, and the trusted source environments that shape
            buyer decisions.
          </p>
        </div>
        <Link
          to="/case-studies"
          className="inline-flex items-center gap-1.5 font-mono text-[13px] font-semibold tracking-[0.14em] text-primary hover:gap-2.5 transition-all"
        >
          VIEW ALL CASE STUDIES <ArrowUpRight className="size-3" />
        </Link>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cases.map((c, i) => (
          <article
            key={i}
            className="group relative card-premium p-7 hover:border-primary/40 transition-all overflow-hidden"
          >
            <p className="font-mono text-[13px] tracking-[0.16em] text-subtle uppercase mb-6">
              {c.cat}
            </p>
            <p className="display text-5xl text-gradient leading-none">{c.metric}</p>
            <p className="text-sm text-body mt-3 font-medium">{c.label}</p>
            <p className="text-xs text-subtle mt-4 leading-relaxed border-t border-border pt-4">
              {c.detail}
            </p>
          </article>
        ))}
      </div>
      <p className="mt-6 text-xs text-body font-mono max-w-3xl">
        Source: CiteWorks cross-case synthesis. Cases use different surfaces, timeframes, and metric
        types; compared descriptively, not blended into a single benchmark.
      </p>
    </div>
  </section>
);
