import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { cn } from "../../lib/utils";

interface ActionButtonProps {
  label: string;
  sublabel?: string;
  to?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "coral-cap" | "coral-solid" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  inverted?: boolean;
  fullWidth?: boolean;
  ariaLabel?: string;
}

export function ActionButton({
  label,
  sublabel,
  to,
  href,
  onClick,
  type = "button",
  variant = "coral-cap",
  size = "md",
  className,
  inverted = false,
  fullWidth = false,
  ariaLabel,
}: ActionButtonProps) {
  const heightClass =
    size === "sm" ? "min-h-[40px]" : size === "lg" ? "min-h-[54px]" : "min-h-[44px]";

  const baseStyles = cn(
    "group inline-flex items-stretch font-mono uppercase tracking-[0.08em] transition-transform duration-150 active:scale-[0.985] cursor-pointer whitespace-nowrap shrink-0",
    fullWidth && "w-full justify-between",
    heightClass,
    variant === "coral-cap" &&
      (inverted
        ? "border border-white/15 bg-white text-[#121212] hover:border-white/30"
        : "border border-[#121212]/15 bg-[#121212] text-white hover:bg-[#1E1E1E] dark:border-white/15 dark:bg-white dark:text-[#121212] dark:hover:bg-white/90"),
    variant === "coral-solid" &&
      "bg-[#FF6044] text-white hover:bg-[#FF755C]",
    variant === "outline" &&
      (inverted
        ? "border border-white/20 bg-transparent text-white hover:border-white hover:bg-white/5"
        : "border border-[#121212]/20 bg-transparent text-[#121212] hover:border-[#121212] hover:bg-[#121212]/5 dark:border-white/20 dark:text-white dark:hover:border-white dark:hover:bg-white/5"),
    className
  );

  const innerContent = (
    <>
      <span
        className={cn(
          "flex items-center gap-2 px-4 text-[11px] font-semibold",
          size === "lg" && "px-6 text-[12px]"
        )}
      >
        <span>{label}</span>
        {sublabel ? (
          <>
            <span className="opacity-40" aria-hidden="true">/</span>
            <span className="opacity-65">{sublabel}</span>
          </>
        ) : null}
      </span>
      <span
        className={cn(
          "flex items-center justify-center px-3 transition-colors duration-150",
          variant === "coral-cap" && "bg-[#FF6044] text-white group-hover:bg-[#FF755C]",
          variant === "coral-solid" && "border-l border-white/20 px-4 text-white",
          variant === "outline" &&
            (inverted
              ? "border-l border-white/20 text-white"
              : "border-l border-[#121212]/15 text-[#121212] dark:border-white/15 dark:text-white")
        )}
      >
        <ArrowUpRight
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={1.75}
          aria-hidden="true"
        />
      </span>
    </>
  );

  if (to) {
    return (
      <Link to={to} className={baseStyles} aria-label={ariaLabel}>
        {innerContent}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseStyles}
        aria-label={ariaLabel}
      >
        {innerContent}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={baseStyles}
      aria-label={ariaLabel}
    >
      {innerContent}
    </button>
  );
}
