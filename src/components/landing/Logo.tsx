import { Link } from "react-router-dom";
import logoLight from "@/assets/citeworks-logo.png";
import logoDark from "@/assets/citeworks-logo-dark.png";

export const Logo = ({ className = "" }: { className?: string }) => (
  <Link to="/" className={`flex items-center ${className}`} aria-label="CiteWorks Studio home">
    <img
      src={logoLight}
      alt="CiteWorks Studio"
      className="h-8 w-auto md:h-9 object-contain block dark:hidden"
      loading="eager"
      decoding="async"
    />
    <img
      src={logoDark}
      alt="CiteWorks Studio"
      className="h-8 w-auto md:h-9 object-contain hidden dark:block"
      loading="eager"
      decoding="async"
      aria-hidden="true"
    />
  </Link>
);
