const logos = [
  "https://higoodie.com/wp-content/uploads/2026/02/Logo-5.svg",
  "https://higoodie.com/wp-content/uploads/2026/02/Logo-4.svg",
  "https://higoodie.com/wp-content/uploads/2026/03/Vectara_logo.svg",
  "https://higoodie.com/wp-content/uploads/2026/03/Skylum_Logo.webp",
  "https://higoodie.com/wp-content/uploads/2026/03/Dermalogica_Edit2.svg",
  "https://higoodie.com/wp-content/uploads/2026/02/697275ef4d9eb6feec89b089_rathbones20logo20final.webp",
];

// Duplicate for a seamless loop
const track = [...logos, ...logos];

export const TrustedBy = () => (
  <section className="py-14 border-y border-border/40 relative overflow-hidden">
    {/* Edge fade masks */}
    <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
    <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

    <div className="mx-auto max-w-7xl px-6">
      <p className="eyebrow text-center mb-10">Trusted by leading brands</p>

      <div className="marquee-pause overflow-hidden">
        <div className="marquee-track flex items-center gap-16 w-max">
          {track.map((src, i) => (
            <img
              key={i}
              src={src}
              alt="Partner brand logo"
              loading="lazy"
              className="h-7 sm:h-8 shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-300"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          ))}
        </div>
      </div>
    </div>
  </section>
);
