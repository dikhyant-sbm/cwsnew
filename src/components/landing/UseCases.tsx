import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const fits = [
  { title: "Growth-Minded Companies", desc: "Companies that want stronger visibility across Google, AI answers, and the source environments buyers use before making decisions." },
  { title: "High-Consideration Brands", desc: "Brands in categories where buyers research heavily, compare options, read third-party sources, and look for trusted recommendations." },
  { title: "Category Challengers", desc: "Companies competing against incumbents that currently dominate AI answers, comparison pages, and category-defining content." },
  { title: "Established Companies", desc: "Established brands that have lost ground in AI answers or want to defend visibility as buyer behavior shifts." },
  { title: "B2B & Professional Services", desc: "Firms where trust, comparison, and recommendation strength shape long sales cycles and high-value contracts." },
  { title: "Agency Partners", desc: "Agencies that want to offer GEO, AI search visibility, and citation architecture without building the full backend in-house." },
];

export const UseCases = () => (
  <section className="py-28 border-t border-border/40">
    <div className="mx-auto max-w-7xl px-6">
      <p className="eyebrow text-center">Best fit</p>
      <h2 className="display text-4xl sm:text-6xl text-center mt-4 max-w-3xl mx-auto">
        Who CiteWorks Studio is built for.
      </h2>

      <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {fits.map((c) => (
          <article key={c.title} className="group card-premium p-8 hover:border-primary/40 transition-colors">
            <h3 className="display text-xl">{c.title}</h3>
            <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{c.desc}</p>
            <Link to="/request-audit" className="mt-5 inline-flex items-center gap-1 font-mono text-xs tracking-widest text-primary hover:gap-2 transition-all">
              REQUEST AN AUDIT <ArrowRight className="size-3" />
            </Link>
          </article>
        ))}
      </div>
    </div>
  </section>
);
