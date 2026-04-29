import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is AEO?",
    a: "Answer Engine Optimization (AEO) is the practice of structuring and optimizing content and technical site health so that it provides clear, direct answers to user questions—particularly for large language models (LLMs) and AI-driven platforms. Unlike traditional SEO, which focuses on driving clicks to a website, AEO is about ensuring your brand becomes the definitive source that AI systems reference or cite within their generated responses. The goal is not just traffic, but visibility, authority, and influence in an AI-powered search landscape.",
  },
  {
    q: "Why is AEO (Answer Engine Optimization) important?",
    a: "AEO is important for brands seeking to enable visibility and authority growth as user search behavior shifts to AI-powered tools that provide direct answers, rather than links to websites. AEO allows brands to be directly featured as answers to queries, increasing brand exposure, user trust, and driving traffic and engagement by satisfying users' demand for quick, accurate information.",
  },
  {
    q: "How does Goodie work?",
    a: "Goodie combines prompt research, visibility monitoring, optimization actions, and attribution into a single closed-loop platform. We track how your brand appears across every major AI model, surface the gaps, recommend the actions that move the needle, and measure the resulting business outcomes.",
  },
  {
    q: "Who should use Goodie?",
    a: "Goodie is ideal for startup founders, CMOs, PR teams, SEO specialists, and marketing professionals who want to lead in the AI search era and ensure their brand stands out in AI-powered search results.",
  },
  {
    q: "How can I get started with Goodie?",
    a: "The easiest way to get started is to chat with someone from our team. We'll learn about what you're working on and show you how the platform might help. Just fill out our form and we'll get back to you within a day.",
  },
  {
    q: "What makes Goodie different from traditional SEO tools?",
    a: "Unlike traditional SEO tools, Goodie is specifically designed for AI-driven search engines. It focuses on optimizing your brand's presence in AI Answer Engines, which require different strategies than conventional search engines.",
  },
  {
    q: "Is Goodie suitable for global brands?",
    a: "Yes, Goodie is built to serve enterprise-level brands with a global footprint. Our platform supports multiple markets and languages, ensuring comprehensive AI search optimization.",
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
