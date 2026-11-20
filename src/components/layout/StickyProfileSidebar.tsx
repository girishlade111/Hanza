import React from "react";
import { ASSETS, personalInfo } from "../../content/profile";
import { EditorialImage } from "../ui/EditorialImage";
import { SectionKicker } from "../ui/SectionKicker";
import { SocialLinks } from "../ui/SocialLinks";
import { ActionButton } from "../ui/Button";

interface StickyProfileSidebarProps {
  showContactButton?: boolean;
}

export function StickyProfileSidebar({
  showContactButton = true,
}: StickyProfileSidebarProps) {
  return (
    <aside className="lg:sticky lg:top-24 space-y-6">
      <div className="aspect-square w-full max-w-[260px] overflow-hidden border-t-2 border-[#FF6044]">
        <EditorialImage
          src={ASSETS.authorPortrait}
          alt={personalInfo.fullName}
          containerClassName="h-full w-full"
          className="scale-[1.07]"
          priority
        />
      </div>

      <div className="space-y-3 border-t border-[#121212]/10 pt-5 dark:border-white/12">
        <SectionKicker>{personalInfo.displayName}</SectionKicker>
        <div className="space-y-1 font-mono text-[11px] uppercase tracking-[0.08em] text-[#121212]/65 dark:text-white/65">
          <p>PROFESSION / UI/UX DESIGNER & DEVELOPER</p>
          <p>LOCATION / {personalInfo.location.toUpperCase()}</p>
          <p>
            EMAIL /{" "}
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-[#121212] underline underline-offset-4 hover:text-[#FF6044] dark:text-white"
            >
              {personalInfo.email.toUpperCase()}
            </a>
          </p>
        </div>
      </div>

      <SocialLinks />

      {showContactButton ? (
        <div className="pt-1">
          <ActionButton to="/contact" label="GET IN TOUCH" sublabel="CONTACT" />
        </div>
      ) : null}
    </aside>
  );
}
