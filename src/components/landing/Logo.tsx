import { Link } from "react-router-dom";
import logoSrc from "@/assets/citeworks-logo.png";

export const Logo = ({ className = "" }: { className?: string }) => (
  <Link
    to="/"
    className={`flex items-center ${className}`}
    aria-label="CiteWorks Studio home"
  >
    <img
      src={logoSrc}
      alt="CiteWorks Studio"
      className="h-9 sm:h-10 w-auto select-none dark:invert dark:hue-rotate-180 dark:brightness-110"
      draggable={false}
    />
  </Link>
);

