import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-[52px] w-full rounded-lg border border-input bg-background px-4 py-3 text-[17px] leading-[26px] font-medium text-foreground ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-tertiary placeholder:font-normal transition-colors hover:border-[hsl(var(--border-strong))] focus-visible:outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-[hsl(var(--focus-ring)/0.28)] focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
