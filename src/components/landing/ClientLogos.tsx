import bayAlarmMedical from "@/assets/logos/bay-alarm-medical.png";
import creditSaint from "@/assets/logos/credit-saint.png";
import bestWallet from "@/assets/logos/best-wallet.png";
import anthemTaxServices from "@/assets/logos/anthem-tax-services.png";
import zipRecruiter from "@/assets/logos/ziprecruiter.png";
import sharkNinja from "@/assets/logos/shark-ninja.png";
import arsRescueRooter from "@/assets/logos/ars-rescue-rooter.png";
import thorMetalsGroup from "@/assets/logos/thor-metals-group.png";

/**
 * Client logo wall — endless marquee.
 * Logos are monochromatic by default and restore full color on hover.
 * The marquee pauses while the user hovers anywhere over the strip.
 */
const clients = [
  { name: "Bay Alarm Medical", src: bayAlarmMedical },
  { name: "Credit Saint", src: creditSaint },
  { name: "Best Wallet", src: bestWallet },
  { name: "Anthem Tax Services", src: anthemTaxServices },
  { name: "ZipRecruiter", src: zipRecruiter },
  { name: "Shark Ninja", src: sharkNinja },
  { name: "ARS Rescue Rooter", src: arsRescueRooter },
  { name: "Thor Metals Group", src: thorMetalsGroup },
];

export const ClientLogos = () => {
  // Duplicate the list so the marquee animation loops seamlessly.
  const loop = [...clients, ...clients];

  return (
    <section
      aria-label="Selected clients"
      className="py-16 border-y border-border/40 relative overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6">
        <p className="eyebrow text-center mb-10">
          Trusted by growth-minded brands
        </p>

        <div className="group relative overflow-hidden">
          {/* Edge fade masks */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-background to-transparent" />

          <ul
            className="flex w-max items-center gap-16 animate-logo-marquee group-hover:[animation-play-state:paused]"
          >
            {loop.map((c, i) => (
              <li
                key={`${c.name}-${i}`}
                className="shrink-0 flex items-center justify-center h-16 w-44"
              >
                <img
                  src={c.src}
                  alt={`${c.name} logo`}
                  loading="lazy"
                  decoding="async"
                  className="max-h-12 w-auto max-w-[170px] object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition duration-300 ease-out dark:invert dark:hover:invert-0"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
