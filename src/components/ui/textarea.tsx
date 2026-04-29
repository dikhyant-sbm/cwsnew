import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[140px] w-full rounded-lg border border-input bg-background px-4 py-3 text-[17px] leading-[26px] font-medium text-foreground ring-offset-background placeholder:text-tertiary placeholder:font-normal transition-colors hover:border-[hsl(var(--border-strong))] focus-visible:outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-[hsl(var(--focus-ring)/0.28)] focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
