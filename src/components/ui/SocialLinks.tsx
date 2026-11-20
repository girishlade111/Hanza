import React from "react";
import { Github, Linkedin, Instagram, Codepen } from "lucide-react";
import { personalInfo } from "../../content/profile";
import { cn } from "../../lib/utils";

interface SocialLinksProps {
  inverted?: boolean;
  className?: string;
}

const SOCIAL_ITEMS = [
  { label: "GitHub", href: personalInfo.socials.github, Icon: Github },
  { label: "LinkedIn", href: personalInfo.socials.linkedin, Icon: Linkedin },
  { label: "Instagram", href: personalInfo.socials.instagram, Icon: Instagram },
  { label: "CodePen", href: personalInfo.socials.codepen, Icon: Codepen },
];

export function SocialLinks({ inverted = false, className }: SocialLinksProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {SOCIAL_ITEMS.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Girish Lade on ${label}`}
          className={cn(
            "flex h-10 w-10 items-center justify-center border transition-colors duration-150",
            inverted
              ? "border-white/15 bg-white/[0.03] text-white/80 hover:border-[#FF6044] hover:bg-[#FF6044] hover:text-white"
              : "border-[#121212]/15 bg-white text-[#121212]/80 hover:border-[#FF6044] hover:bg-[#FF6044] hover:text-white dark:border-white/15 dark:bg-[#181818] dark:text-white/80 dark:hover:border-[#FF6044] dark:hover:bg-[#FF6044] dark:hover:text-white"
          )}
        >
          <Icon className="h-4 w-4" strokeWidth={1.6} aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}
