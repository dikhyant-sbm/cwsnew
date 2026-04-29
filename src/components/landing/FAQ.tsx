import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "What does CiteWorks Studio do?",
    a: "CiteWorks Studio helps growth-minded companies improve visibility across Google, AI answers, and the source environments that shape buyer trust. The studio provides GEO, AI search visibility, technical SEO, citation architecture, content strategy, source-layer research, social and video support, and reporting.",
  },
  {
    q: "Is CiteWorks Studio an SEO agency?",
    a: "CiteWorks Studio includes SEO, but the work goes beyond traditional SEO. We connect SEO, GEO, AI search visibility, citation architecture, technical optimization, content, and source-layer authority into one visibility system.",
  },
  {
    q: "Is GEO different from SEO?",
    a: "Yes. SEO improves visibility in traditional search engines. GEO improves visibility in AI-generated and retrieval-based answer systems. The two are connected because AI systems often rely on indexed pages, structured content, trusted sources, and authority signals.",
  },
  {
    q: "Why does citation architecture matter?",
    a: "Citation architecture matters because AI systems and buyers often rely on third-party evidence. If your company is not supported by credible sources, reviews, comparisons, articles, videos, and public mentions, your authority may be harder to retrieve or trust.",
  },
  {
    q: "Who is CiteWorks Studio best for?",
    a: "CiteWorks Studio is best for growth-minded companies, high-consideration brands, category challengers, established companies, and agency partners that want stronger visibility across Google, AI answers, and trusted source environments.",
  },
  {
    q: "Do we need to be an enterprise company?",
    a: "No. CiteWorks Studio is not only for enterprise companies. The best fit is any company where search visibility has meaningful business value and where improving Google, AI, and source-layer presence can support growth.",
  },
  {
    q: "How do clients usually start?",
    a: "Most clients start with a Visibility Audit. The audit identifies where the company is losing visibility, where competitors are stronger, which sources matter, and what should be fixed first.",
  },
];

export const FAQ = () => (
  <section className="py-32 border-t border-border/40">
    <div className="mx-auto max-w-4xl px-6">
      <div className="reveal-on-scroll text-center">
        <p className="eyebrow">FAQ</p>
        <h2 className="display text-4xl sm:text-6xl mt-4">
          Questions? We have the answers.
        </h2>
      </div>

      <Accordion type="single" collapsible className="mt-16 reveal-on-scroll">
        {faqs.map((f, i) => (
          <AccordionItem
            key={i}
            value={`item-${i}`}
            className="border-border/60 group transition-colors hover:border-primary/30"
          >
            <AccordionTrigger className="text-left text-[20px] leading-[30px] font-semibold text-heading hover:text-primary hover:no-underline py-6 transition-colors">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-[18px] leading-[30px] text-body pb-6">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);
