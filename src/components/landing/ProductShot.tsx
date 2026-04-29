import dashboard from "@/assets/dashboard-hero.jpg";

export const ProductShot = () => (
  <section className="relative py-20 overflow-hidden">
    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[60%] bg-primary/10 blur-[120px] mx-auto max-w-4xl rounded-full" />
    <div className="relative mx-auto max-w-6xl px-6">
      <img
        src={dashboard}
        alt="CiteWorks Studio visibility intelligence: brand entity graph showing AI citations and source connections"
        width={1920}
        height={1080}
        className="w-full rounded-xl border border-border/60 shadow-2xl"
      />
    </div>
  </section>
);
