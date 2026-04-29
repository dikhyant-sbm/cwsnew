import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export const WhatWeDo = () => (
  <section className="relative py-28 border-t border-border/40 overflow-hidden">
    <div className="absolute inset-0 grid-bg-fine opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
    <div className="relative mx-auto max-w-7xl px-6">
      <div className="grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5">
          <p className="eyebrow">What CiteWorks Studio does</p>
          <h2 className="display text-4xl sm:text-5xl mt-5 leading-[1.05]">
            A GEO, AI search visibility, and{" "}
            <span className="text-gradient">citation architecture</span> agency for modern search.
          </h2>
          <Link
            to="/services"
            className="mt-8 inline-flex items-center gap-1.5 font-mono text-[13px] font-semibold tracking-[0.14em] text-primary hover:gap-2.5 transition-all"
          >
            EXPLORE SERVICES <ArrowUpRight className="size-3" />
          </Link>
        </div>
        <div className="lg:col-span-7 space-y-5 text-body text-lg leading-relaxed">
          <p>
            CiteWorks Studio helps growth-minded companies improve how they appear across Google,
            ChatGPT, Gemini, Perplexity, Google AI Overviews, Copilot, organic search results,
            third-party sources, and buyer research environments.
          </p>
          <p>
            We combine SEO, GEO, AI search visibility, citation architecture, content strategy,
            technical SEO, entity clarity, source-layer authority, market intelligence, and
            execution into one coordinated visibility system — not twelve disconnected tactics.
          </p>
        </div>
      </div>
    </div>
  </section>
);
