const logos = [
  "https://higoodie.com/wp-content/uploads/2026/02/Logo-5.svg",
  "https://higoodie.com/wp-content/uploads/2026/02/Logo-4.svg",
  "https://higoodie.com/wp-content/uploads/2026/03/Vectara_logo.svg",
  "https://higoodie.com/wp-content/uploads/2026/03/Skylum_Logo.webp",
  "https://higoodie.com/wp-content/uploads/2026/03/Dermalogica_Edit2.svg",
  "https://higoodie.com/wp-content/uploads/2026/02/697275ef4d9eb6feec89b089_rathbones20logo20final.webp",
];

export const TrustedBy = () => (
  <section className="py-12 border-y border-border/40">
    <div className="mx-auto max-w-7xl px-6">
      <p className="eyebrow text-center mb-8">Trusted by leading brands:</p>
      <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
        {logos.map((src, i) => (
          <img
            key={i}
            src={src}
            alt="Partner brand logo"
            loading="lazy"
            className="h-7 sm:h-8 opacity-70 hover:opacity-100 transition-opacity invert brightness-0 contrast-200"
            style={{ filter: "brightness(0) invert(1) opacity(0.75)" }}
          />
        ))}
      </div>
    </div>
  </section>
);
