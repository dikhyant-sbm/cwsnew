import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
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
    a: "Buyers and AI systems rarely rely on your website alone. They look at articles, reviews, directories, comparison pages, videos, and community discussions. Citation architecture strengthens the public evidence that supports trust and machine-recognized authority.",
  },
  {
    q: "Who is the right fit for CiteWorks Studio?",
    a: "Growth-minded companies, high-consideration brands, category challengers, established companies in competitive markets, and agency partners that want stronger visibility across Google, AI answers, and trusted source environments.",
  },
  {
    q: "How does an engagement start?",
    a: "Most engagements start with a Visibility Audit. We diagnose where visibility is breaking down, then build the corrective-action plan across your website, content, technical SEO, citation sources, and authority environment.",
  },
  {
    q: "Do you only provide strategy, or do you execute too?",
    a: "Both. After the audit and roadmap, CiteWorks Studio can support technical SEO, content creation and refreshes, citation architecture, source-layer authority, AI visibility improvements, and ongoing reporting.",
  },
];

export const FAQ = () => (
  <section className="py-28 border-t border-border/40">
    <div className="mx-auto max-w-4xl px-6">
      <p className="eyebrow text-center">FAQ</p>
      <h2 className="display text-4xl sm:text-6xl text-center mt-4">
        Questions? We have the answers.
      </h2>

      <Accordion type="single" collapsible className="mt-16">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="border-border">
            <AccordionTrigger className="text-left text-lg font-medium hover:text-primary hover:no-underline py-6">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);
