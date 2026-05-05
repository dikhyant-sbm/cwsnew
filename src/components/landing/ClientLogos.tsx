/**
 * Client logo wall — wordmark style. Uses typographic treatment instead of
 * raster logos for a clean, consistent, enterprise look that adapts to
 * light/dark mode without per-asset variants.
 */
const clients = [
  "Bay Alarm Medical",
  "Credit Saint",
  "Best Wallet",
  "Anthem Tax Relief",
  "ZipRecruiter",
  "Shark Ninja",
  "ARS",
  "Thor Metals",
];

export const ClientLogos = () => (
  <section
    aria-label="Selected clients"
    className="py-16 border-y border-border/40 relative overflow-hidden"
  >
    <div className="mx-auto max-w-7xl px-6">
      <p className="eyebrow text-center mb-10">
        Trusted by growth-minded brands
      </p>
      <ul className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-x-6 gap-y-8 items-center">
        {clients.map((name) => (
          <li
            key={name}
            className="group flex items-center justify-center text-center"
          >
            <span
              className="font-display text-[15px] sm:text-base tracking-[0.02em] text-muted-fg/80 group-hover:text-foreground transition-colors duration-300 whitespace-nowrap"
              style={{ fontVariantCaps: "all-small-caps", letterSpacing: "0.06em" }}
            >
              {name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
