import React from "react";
import { Check } from "lucide-react";
import { personalInfo } from "../../content/profile";
import { SectionKicker } from "../ui/SectionKicker";
import { ActionButton } from "../ui/Button";
import { cn } from "../../lib/utils";

export function PricingTiers() {
  return (
    <section className="border-b border-[#121212]/10 dark:border-white/12">
      <div className="mx-auto max-w-[1440px]">
        {/* Section Heading */}
        <div className="flex flex-col gap-4 border-b border-[#121212]/10 p-6 sm:p-10 lg:flex-row lg:items-end lg:justify-between lg:p-12 dark:border-white/12">
          <div>
            <SectionKicker>ENGAGEMENT MODELS</SectionKicker>
            <h2 className="mt-4 font-sans text-3xl font-extrabold uppercase leading-[0.98] tracking-[-0.04em] sm:text-5xl lg:text-[54px]">
              TRANSPARENT{" "}
              <span className="italic text-[#121212]/45 dark:text-white/45">
                PACKAGES.
              </span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-[1.6] text-[#121212]/65 dark:text-white/65">
            Predictable milestones, clean TypeScript repositories, and direct founder-level engineering from kickoff to deployment.
          </p>
        </div>

        {/* 3 Architectural Columns */}
        <div className="grid grid-cols-1 divide-y divide-[#121212]/10 lg:grid-cols-3 lg:divide-x lg:divide-y-0 dark:divide-white/12">
          {personalInfo.pricingTiers.map((tier, idx) => (
            <div
              key={tier.id}
              className={cn(
                "flex flex-col justify-between p-6 sm:p-10 lg:p-12",
                tier.highlighted
                  ? "bg-white border-t-2 border-t-[#FF6044] dark:bg-[#181818]"
                  : "bg-[#F7F5F2] dark:bg-[#111111]"
              )}
            >
              <div>
                <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.09em] text-[#121212]/60 dark:text-white/60">
                  <span className="tabular-nums">0{idx + 1} / {tier.cadence}</span>
                  <span>{tier.timeline}</span>
                </div>

                <h3 className="mt-4 font-sans text-2xl font-extrabold uppercase tracking-[-0.03em]">
                  {tier.name}
                </h3>

                <p className="mt-2.5 text-sm leading-[1.6] text-[#121212]/65 dark:text-white/65">
                  {tier.subtitle}
                </p>

                <div className="mt-6 border-y border-[#121212]/10 py-5 dark:border-white/12">
                  <p className="font-sans text-4xl font-extrabold tracking-[-0.04em] tabular-nums">
                    {tier.price}
                  </p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.1em] text-[#121212]/55 dark:text-white/55">
                    ESTIMATED TIMELINE · {tier.timeline}
                  </p>
                </div>

                <ul className="mt-6 space-y-3">
                  {tier.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm leading-[1.5] text-[#121212]/80 dark:text-white/80"
                    >
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#FF6044]"
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-9 pt-4">
                <ActionButton
                  to="/contact"
                  label={tier.ctaLabel}
                  variant={tier.highlighted ? "coral-solid" : "coral-cap"}
                  fullWidth
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
