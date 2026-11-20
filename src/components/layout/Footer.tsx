import React from "react";
import { Link } from "react-router-dom";
import { ASSETS, personalInfo } from "../../content/profile";
import { EditorialImage } from "../ui/EditorialImage";
import { SectionKicker } from "../ui/SectionKicker";
import { SocialLinks } from "../ui/SocialLinks";
import { ActionButton } from "../ui/Button";
import { ContactForm } from "./ContactForm";

const FOOTER_NAV = [
  { label: "HOME", to: "/" },
  { label: "PORTFOLIO", to: "/portfolio" },
  { label: "ABOUT", to: "/about" },
  { label: "BLOG", to: "/blog" },
  { label: "CONTACT", to: "/contact" },
  { label: "404 PAGE", to: "/404" },
];

export function Footer() {
  return (
    <footer
      data-testid="universal-dark-footer"
      className="border-t border-white/12 bg-[#111111] text-white"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Left Column (35%): Author Identity, Portrait, Socials, Giant Brandmark */}
          <div className="flex flex-col justify-between border-b border-white/10 p-6 sm:p-10 lg:col-span-4 lg:border-b-0 lg:border-r lg:p-12">
            <div className="space-y-6">
              <div className="aspect-square w-full max-w-[220px] overflow-hidden border-t-2 border-[#FF6044]">
                <EditorialImage
                  src={ASSETS.authorPortrait}
                  alt={personalInfo.fullName}
                  containerClassName="h-full w-full"
                  className="scale-[1.07]"
                />
              </div>

              <ActionButton
                to="/contact"
                label="GET IN TOUCH"
                sublabel="CONTACT"
                inverted
              />

              <div className="space-y-2 border-t border-white/10 pt-5">
                <SectionKicker inverted>{personalInfo.displayName}</SectionKicker>
                <div className="space-y-1 font-mono text-[11px] uppercase tracking-[0.08em] text-white/60">
                  <p>PROFESSION / UI/UX DESIGNER & DEVELOPER</p>
                  <p>LOCATION / {personalInfo.location.toUpperCase()}</p>
                </div>
              </div>

              <SocialLinks inverted />
            </div>

            <div className="mt-12 border-t border-white/10 pt-8">
              <p className="font-sans text-4xl font-extrabold tracking-[-0.05em] text-white sm:text-5xl">
                {personalInfo.brandName}
              </p>
              <p className="mt-3 font-mono text-[10px] uppercase leading-[1.6] tracking-[0.08em] text-white/45">
                © 2026 LADESTACK®. ALL RIGHTS RESERVED. DESIGNED & BUILT BY GIRISH LADE.
              </p>
            </div>
          </div>

          {/* Right Column (65%): Contact Headline, Availability, Interactive Form, Navigation & Legal */}
          <div className="flex flex-col justify-between lg:col-span-8">
            {/* Upper Form Block */}
            <div className="p-6 sm:p-10 lg:p-12">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <SectionKicker inverted>CONTACT</SectionKicker>

                {/* Availability Indicator: 2 green + 2 grey squares with explicit text */}
                <div className="inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.09em] text-white/80">
                  <span className="inline-flex items-center gap-1" aria-hidden="true">
                    <span className="h-2 w-2 bg-[#3DB15E]" />
                    <span className="h-2 w-2 bg-[#3DB15E]" />
                    <span className="h-2 w-2 bg-white/25" />
                    <span className="h-2 w-2 bg-white/25" />
                  </span>
                  <span>{personalInfo.availability}</span>
                </div>
              </div>

              <h2 className="mt-5 font-sans text-3xl font-extrabold uppercase leading-[0.98] tracking-[-0.04em] text-white sm:text-5xl lg:text-[54px]">
                CREATE YOUR NEXT WEBSITE{" "}
                <span className="italic text-white/55">WITH ME.</span>
              </h2>

              <p className="mt-4 max-w-2xl font-mono text-xs uppercase leading-[1.65] tracking-[0.07em] text-white/60">
                FROM FIRST CONCEPT TO FINAL BUILD, I CREATE WEBSITES WITH CLEAR STRUCTURE & SMOOTH INTERACTIONS.
              </p>

              <div className="mt-8">
                <ContactForm inverted formIdPrefix="footer-contact" />
              </div>
            </div>

            {/* Lower Navigation Matrix + Direct Contact + Legal */}
            <div className="border-t border-white/10">
              {/* Quick Nav Matrix */}
              <div className="grid grid-cols-2 border-b border-white/10 sm:grid-cols-3 md:grid-cols-6">
                {FOOTER_NAV.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="border-r border-b border-white/10 px-5 py-4 font-mono text-[11px] font-medium uppercase tracking-[0.09em] text-white/70 transition-colors hover:bg-white/[0.04] hover:text-[#FF6044] md:border-b-0 last:border-r-0"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Direct Contact + Legal */}
              <div className="flex flex-col gap-6 p-6 sm:p-10 lg:flex-row lg:items-end lg:justify-between lg:px-12 lg:py-9">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.09em] text-white/50">
                    {personalInfo.location}
                  </p>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="mt-2 block font-sans text-2xl font-extrabold uppercase tracking-[-0.03em] text-white transition-colors hover:text-[#FF6044] sm:text-3xl lg:text-4xl"
                  >
                    {personalInfo.email.toUpperCase()}
                  </a>
                </div>

                <div className="flex flex-wrap items-center gap-6 font-mono text-[11px] uppercase tracking-[0.09em] text-white/55">
                  <Link
                    to="/terms"
                    className="transition-colors hover:text-white"
                  >
                    TERMS OF SERVICE
                  </Link>
                  <span aria-hidden="true" className="text-white/20">
                    /
                  </span>
                  <Link
                    to="/privacy"
                    className="transition-colors hover:text-white"
                  >
                    PRIVACY POLICY
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
