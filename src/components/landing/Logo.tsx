import { Link } from "react-router-dom";
import logoUrl from "@/assets/citeworks-logo.png";

export const Logo = ({ className = "" }: { className?: string }) => (
  <Link to="/" className={`flex items-center ${className}`} aria-label="CiteWorks Studio home">
    <img
      src={logoUrl}
      alt="CiteWorks Studio"
      className="h-8 w-auto md:h-9 object-contain"
      loading="eager"
      decoding="async"
    />
  </Link>
);
