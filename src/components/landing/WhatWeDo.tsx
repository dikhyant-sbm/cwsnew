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
            CiteWorks Studio improves how companies appear in Google, AI answers, and{" "}
            <span className="text-gradient">trusted source environments</span>.
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
            CiteWorks Studio is a GEO and AI search visibility agency. We help growth-minded
            companies become easier to find, cite, compare, and recommend across Google, ChatGPT,
            Gemini, Perplexity, AI Overviews, Copilot, and the source pages those systems use.
          </p>
          <p>
            Our work connects classic SEO, AI search optimization, content strategy, technical
            structure, entity clarity, third-party citations, social proof, video visibility, and
            source-layer authority into one search visibility system.
          </p>
          <p>
            The goal is not just more content. The goal is stronger retrieval, stronger citation
            support, stronger category association, and more consistent presence when buyers search
            for answers, comparisons, and recommendations.
          </p>
        </div>
      </div>
    </div>
  </section>
);
