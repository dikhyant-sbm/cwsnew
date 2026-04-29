import { PageShell, PageHero, SectionHeading } from "@/components/landing/Shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { useState, FormEvent } from "react";

const reviews = [
  "Google search visibility",
  "AI answer visibility",
  "Prompt and keyword clusters",
  "Competitor visibility",
  "Citation sources",
  "Content structure",
  "Technical SEO",
  "Schema and entity clarity",
  "Source-layer authority",
  "Recommendation placement",
  "Cosine and retrieval gaps",
  "Corrective-action priorities",
];

const improveOptions = [
  "Google search visibility",
  "AI answer visibility",
  "ChatGPT / Gemini / Perplexity recommendations",
  "Google AI Overviews visibility",
  "Citation architecture",
  "Technical SEO",
  "Content strategy",
  "Competitor visibility",
  "Agency client delivery",
  "Not sure yet",
];

const RequestAudit = () => {
  const { toast } = useToast();
  const [improving, setImproving] = useState<string[]>([]);

  const toggleImprove = (v: string) =>
    setImproving((prev) => (prev.includes(v) ? prev.filter((p) => p !== v) : [...prev, v]));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request received",
      description: "We review every request manually and will get back to you within a day.",
    });
    (e.target as HTMLFormElement).reset();
    setImproving([]);
  };

  return (
    <PageShell>
      <PageHero
        eyebrow="Request a Visibility Audit"
        title="Find out where your visibility is breaking down."
        body="A CiteWorks Studio Visibility Audit shows where your company stands across Google rankings, AI answers, citation sources, competitor positioning, technical SEO, content structure, entity clarity, and source-layer authority. Then we show what needs to change next."
      />

      <section className="py-12">
        <div className="mx-auto max-w-3xl px-6">
          <form onSubmit={onSubmit} className="rounded-2xl border border-border/60 bg-card p-8 sm:p-10 space-y-6">
            <div>
              <p className="eyebrow">Audit request</p>
              <h2 className="display text-2xl sm:text-3xl mt-3">Tell us what you want to improve.</h2>
              <p className="text-sm text-muted-foreground mt-3">
                Complete the form and we'll review whether a Visibility Audit is the right starting point for your company or agency client.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Work Email</Label>
                <Input id="email" type="email" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="website">Website</Label>
                <Input id="website" type="url" placeholder="https://" />
              </div>
            </div>

            <div className="space-y-2">
              <Label>What best describes you?</Label>
              <Select>
                <SelectTrigger><SelectValue placeholder="Select one" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="company">Growth-minded company</SelectItem>
                  <SelectItem value="agency">Agency partner</SelectItem>
                  <SelectItem value="founder">Founder / owner</SelectItem>
                  <SelectItem value="marketing">Marketing leader</SelectItem>
                  <SelectItem value="seo">SEO or content lead</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <Label>What are you trying to improve?</Label>
              <div className="grid sm:grid-cols-2 gap-2">
                {improveOptions.map((o) => (
                  <label key={o} className="flex items-start gap-3 p-3 rounded-lg border border-border hover:border-primary/40 cursor-pointer">
                    <Checkbox
                      checked={improving.includes(o)}
                      onCheckedChange={() => toggleImprove(o)}
                      className="mt-0.5"
                    />
                    <span className="text-sm">{o}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="concern">What is your biggest visibility concern right now?</Label>
              <Textarea id="concern" rows={4} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="competitors">Are there specific competitors you care about?</Label>
              <Textarea id="competitors" rows={3} />
            </div>

            <div className="space-y-2">
              <Label>What type of support are you looking for?</Label>
              <Select>
                <SelectTrigger><SelectValue placeholder="Select one" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="audit">One-time audit</SelectItem>
                  <SelectItem value="roadmap">Audit plus roadmap</SelectItem>
                  <SelectItem value="ongoing">Ongoing execution support</SelectItem>
                  <SelectItem value="partner">Agency partner support</SelectItem>
                  <SelectItem value="unsure">Not sure yet</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="other">Anything else we should know?</Label>
              <Textarea id="other" rows={3} />
            </div>

            <Button type="submit" className="w-full rounded-full font-mono text-xs tracking-widest bg-primary text-primary-foreground hover:bg-primary/90 h-12">
              REQUEST VISIBILITY AUDIT
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              We review every request manually. CiteWorks Studio is best suited for companies and agency partners ready to improve search visibility across Google, AI answers, and trusted source environments.
            </p>
          </form>
        </div>
      </section>

      <section className="py-20 border-t border-border/40">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading
            eyebrow="What it is"
            title="A diagnostic review of how your company appears across the full search environment."
            body="The audit identifies where your company is visible, where it is missing, where competitors are stronger, and what should be fixed first to improve search visibility, AI visibility, citation support, and recommendation strength."
          />
        </div>
      </section>

      <section className="py-20 border-t border-border/40">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading eyebrow="The audit reviews" title="The full search environment." />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {reviews.map((r) => (
              <div key={r} className="rounded-xl border border-border/60 bg-card p-4 text-sm flex items-center gap-3">
                <span className="text-primary font-mono text-xs">·</span>
                {r}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border/40">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading eyebrow="What you receive" title="Deliverables from the Visibility Audit." />
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {[
              { t: "Visibility Baseline", d: "Where your company currently appears across Google, AI answers, cited sources, and high-intent search environments." },
              { t: "Competitor Gap Review", d: "Where competitors are outranking, out-cited, or out-recommended against your company." },
              { t: "Prompt & Keyword Cluster Map", d: "The buyer questions, prompts, and keyword groups shaping your category." },
              { t: "Technical & Content Findings", d: "Structural, schema, content, and entity issues that may limit machine understanding." },
              { t: "Retrieval & Cosine Gap Findings", d: "Where your company is semantically distant from sources, competitors, and category language AI systems retrieve." },
              { t: "Corrective-Action Roadmap", d: "A prioritized plan showing what should be fixed, refreshed, created, clarified, cited, or supported next." },
            ].map((d) => (
              <div key={d.t} className="rounded-2xl border border-border/60 bg-card p-7">
                <h3 className="display text-lg text-primary">{d.t}</h3>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{d.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border/40">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading eyebrow="Process" title="How a Visibility Audit works." />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              ["01", "Submit your request", "Tell us about your company, website, competitors, and visibility concerns."],
              ["02", "We review fit", "We confirm whether CiteWorks Studio is the right fit for your category, goals, and likely scope."],
              ["03", "We define the audit scope", "Focus areas across Google visibility, AI search, citation architecture, technical SEO, and content."],
              ["04", "We run the audit", "Visibility analysis across search, AI answers, sources, competitors, structure, and entity signals."],
              ["05", "We deliver findings & priorities", "You receive a clear diagnosis and a corrective-action roadmap."],
              ["06", "We discuss next steps", "Use the audit internally or continue with CiteWorks Studio for execution."],
            ].map(([n, t, d]) => (
              <div key={n} className="rounded-2xl border border-border/60 bg-card p-6">
                <p className="font-mono text-xs text-primary">{n}</p>
                <h3 className="display text-lg mt-2">{t}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default RequestAudit;
