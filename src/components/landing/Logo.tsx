import { Link } from "react-router-dom";

export const Logo = ({ className = "" }: { className?: string }) => (
  <Link to="/" className={`flex items-center gap-2.5 ${className}`} aria-label="CiteWorks Studio home">
    <svg width="26" height="26" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 2L29 9.5V22.5L16 30L3 22.5V9.5L16 2Z" stroke="hsl(var(--primary))" strokeWidth="1.6" />
      <path d="M16 2L29 9.5L16 17L3 9.5L16 2Z" fill="hsl(var(--primary) / 0.18)" stroke="hsl(var(--primary))" strokeWidth="1.6" />
      <path d="M16 17V30" stroke="hsl(var(--primary))" strokeWidth="1.6" />
    </svg>
    <span className="text-base font-semibold tracking-tight text-foreground">
      CiteWorks <span className="text-body font-normal">Studio</span>
    </span>
  </Link>
);
