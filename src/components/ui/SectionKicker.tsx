import React from "react";
import { cn } from "../../lib/utils";

interface SectionKickerProps {
  children: React.ReactNode;
  className?: string;
  inverted?: boolean;
}

export function SectionKicker({
  children,
  className,
  inverted = false,
}: SectionKickerProps) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.1em] whitespace-nowrap",
        inverted ? "text-white/70" : "text-[#121212]/70 dark:text-white/70",
        className
      )}
    >
      <span className="inline-block h-1.5 w-1.5 shrink-0 bg-[#FF6044]" aria-hidden="true" />
      <span>{children}</span>
    </p>
  );
}
