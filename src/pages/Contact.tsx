import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { z } from "zod";
import { ArrowUpRight, Mail, MapPin, Building2, CheckCircle2, Loader2 } from "lucide-react";
import { PageShell } from "@/components/landing/Shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .nonempty({ message: "Please enter your name" })
    .max(100, { message: "Name must be less than 100 characters" }),
  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
  message: z
    .string()
    .trim()
    .nonempty({ message: "Please enter a message" })
    .min(10, { message: "Message must be at least 10 characters" })
    .max(2000, { message: "Message must be less than 2000 characters" }),
});

type ContactErrors = Partial<Record<keyof z.infer<typeof contactSchema>, string>>;

const offices = [
  {
    label: "Registered HQ",
    name: "3D Chess Media, LLC",
    lines: ["1309 Coffeen Ave Ste 1200", "Sheridan, Wyoming 82801", "United States"],
  },
  {
    label: "Operations Hub",
    name: "CiteWorks Studio",
    lines: ["Downtown San Diego, California", "United States"],
  },
];

const emails = [
  { addr: "mark@citeworksstudio.com", note: "Founder & Strategy" },
  { addr: "kaushal@citeworksstudio.com", note: "Operations & Delivery" },
  { addr: "hr@citeworksstudio.com", note: "Job openings & applications" },
];

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<ContactErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Contact CiteWorks Studio | Get in Touch";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Get in touch with CiteWorks Studio. Talk strategy, scope a partnership, or apply for an open role.",
      );
    }
  }, []);

  const handleChange =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((f) => ({ ...f, [field]: e.target.value }));
      if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }));
    };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: ContactErrors = {};
      result.error.issues.forEach((iss) => {
        const k = iss.path[0] as keyof ContactErrors;
        if (!fieldErrors[k]) fieldErrors[k] = iss.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setSubmitting(true);
    // Open user's mail client with prefilled message (no backend dependency)
    const subject = `Inquiry from ${result.data.name}`;
    const body = `${result.data.message}\n\n— ${result.data.name}\n${result.data.email}`;
    const mailto = `mailto:mark@citeworksstudio.com?cc=kaushal@citeworksstudio.com&subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      toast({
        title: "Message ready to send",
        description: "Your email client has been opened with your message prefilled.",
      });
    }, 400);
  };

  return (
    <PageShell>
      {/* HERO */}
      <section className="relative pt-36 pb-16 overflow-hidden ambient-glow">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] conic-ring opacity-30 pointer-events-none float-y-slow" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-[1400px] px-6">
          <div className="reveal inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 mb-7">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-60 pulse-ring" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
            </span>
            <span className="font-mono text-[13px] tracking-[0.16em] text-body uppercase">
              / Contact Us
            </span>
          </div>

          <h1 className="reveal reveal-delay-1 display text-4xl sm:text-6xl md:text-7xl leading-[0.98] tracking-tight max-w-4xl">
            Get in <span className="text-gradient">touch</span>.
          </h1>

          <p className="reveal reveal-delay-2 mt-8 max-w-3xl text-lg text-body leading-relaxed">
            We'd love to hear from you. Reach out if you want to scale your digital presence and
            make a mark on the digital world — or if you have any questions about our services.
          </p>
        </div>
      </section>

      {/* MAIN GRID */}
      <section className="mx-auto max-w-[1400px] px-6 py-16 grid lg:grid-cols-12 gap-10">
        {/* Left column: emails + form */}
        <div className="lg:col-span-7 space-y-10">
          {/* Emails */}
          <div>
            <p className="eyebrow mb-4">/ Mail us</p>
            <div className="grid sm:grid-cols-3 gap-3">
              {emails.map((e) => (
                <a
                  key={e.addr}
                  href={`mailto:${e.addr}`}
                  className="card-premium p-5 hover:border-primary/40 transition-colors group block"
                >
                  <Mail className="w-4 h-4 text-primary mb-3" />
                  <p className="font-mono text-[11px] tracking-[0.16em] uppercase text-body">
                    {e.note}
                  </p>
                  <p className="mt-2 text-sm text-foreground break-all group-hover:text-primary transition-colors">
                    {e.addr}
                  </p>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="card-premium p-8 sm:p-10">
            <p className="eyebrow mb-2">/ Send a message</p>
            <h2 className="display text-2xl sm:text-3xl leading-tight tracking-tight">
              Tell us about your goals.
            </h2>

            {submitted ? (
              <div className="mt-8 flex flex-col items-start gap-4 p-6 rounded-xl border border-primary/30 bg-primary/5">
                <CheckCircle2 className="w-7 h-7 text-primary" />
                <div>
                  <h3 className="display text-xl">Your draft is ready</h3>
                  <p className="mt-2 text-body text-sm leading-relaxed">
                    We opened your email client with the message prefilled. If nothing happened,
                    you can email us directly at{" "}
                    <a className="text-primary hover:underline" href="mailto:mark@citeworksstudio.com">
                      mark@citeworksstudio.com
                    </a>
                    .
                  </p>
                </div>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", email: "", message: "" });
                  }}
                  className="rounded-full font-mono text-[12px] tracking-[0.14em]"
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
                <div>
                  <Label htmlFor="name" className="font-mono text-[12px] tracking-[0.16em] uppercase text-body">
                    Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Jane Smith"
                    maxLength={100}
                    value={form.name}
                    onChange={handleChange("name")}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className="mt-2 h-12 bg-background/60"
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1.5 text-xs text-destructive">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="email" className="font-mono text-[12px] tracking-[0.16em] uppercase text-body">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder="mail@site.com"
                    maxLength={255}
                    value={form.email}
                    onChange={handleChange("email")}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className="mt-2 h-12 bg-background/60"
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1.5 text-xs text-destructive">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <Label
                    htmlFor="message"
                    className="font-mono text-[12px] tracking-[0.16em] uppercase text-body"
                  >
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Your message"
                    rows={6}
                    maxLength={2000}
                    value={form.message}
                    onChange={handleChange("message")}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className="mt-2 bg-background/60 resize-none"
                  />
                  <div className="mt-1.5 flex justify-between gap-3">
                    {errors.message ? (
                      <p id="message-error" className="text-xs text-destructive">
                        {errors.message}
                      </p>
                    ) : (
                      <span />
                    )}
                    <span className="text-xs text-body font-mono">
                      {form.message.length}/2000
                    </span>
                  </div>
                </div>

                <p className="text-xs text-body">
                  By submitting, you agree to our{" "}
                  <Link to="/terms" className="text-primary hover:underline">
                    Terms
                  </Link>{" "}
                  and{" "}
                  <Link to="/privacy-policy" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>
                  .
                </p>

                <Button
                  type="submit"
                  disabled={submitting}
                  className="rounded-full font-mono text-[13px] font-semibold tracking-[0.14em] bg-primary text-primary-foreground hover:bg-primary/90 btn-glow px-7 h-13 w-full sm:w-auto"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-1.5 animate-spin" />
                      SENDING…
                    </>
                  ) : (
                    <>
                      SUBMIT
                      <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>

        {/* Right column: offices */}
        <aside className="lg:col-span-5">
          <div className="lg:sticky lg:top-28 space-y-6">
            <div>
              <p className="eyebrow mb-3">/ Our offices</p>
              <h2 className="display text-2xl sm:text-3xl leading-tight tracking-tight">
                Where to find us.
              </h2>
            </div>
            <div className="space-y-4">
              {offices.map((o) => (
                <article key={o.name} className="card-premium p-6">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex size-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Building2 className="w-4 h-4" />
                    </span>
                    <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-primary">
                      {o.label}
                    </p>
                  </div>
                  <h3 className="display text-lg mt-4">{o.name}</h3>
                  <address className="mt-3 not-italic text-sm text-body leading-relaxed flex gap-3">
                    <MapPin className="w-3.5 h-3.5 text-body/60 shrink-0 mt-1" />
                    <span>
                      {o.lines.map((l, i) => (
                        <span key={i} className="block">
                          {l}
                        </span>
                      ))}
                    </span>
                  </address>
                </article>
              ))}
            </div>

            <div className="card-premium p-6 bg-card/50">
              <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-primary mb-3">
                / Response time
              </p>
              <p className="text-sm text-body leading-relaxed">
                We review every message manually and reply within one business day.
              </p>
            </div>
          </div>
        </aside>
      </section>
    </PageShell>
  );
};

export default Contact;
