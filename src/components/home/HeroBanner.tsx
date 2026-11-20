import React from "react";
import { motion } from "framer-motion";
import { ASSETS, personalInfo } from "../../content/profile";
import { EditorialImage } from "../ui/EditorialImage";
import { ActionButton } from "../ui/Button";
import { smoothEase } from "../../lib/animations";

export function HeroBanner() {
  return (
    <section className="relative border-b border-[#121212]/10 bg-[#111111] text-white dark:border-white/12">
      <div className="relative mx-auto max-w-[1440px] overflow-hidden">
        {/* Background Editorial Visual with Measured Contrast Scrim */}
        <div className="relative min-h-[540px] sm:min-h-[620px] lg:min-h-[680px] flex flex-col justify-between">
          <div className="absolute inset-0">
            <EditorialImage
              src={ASSETS.heroBackdrop}
              alt="Swiss architectural concrete interior with warm directional morning light"
              containerClassName="h-full w-full"
              className="object-cover object-center"
              priority
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/90 via-[#111111]/55 to-[#111111]/45"
              aria-hidden="true"
            />
          </div>

          {/* Top Metadata Bar */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/15 px-6 py-5 sm:px-8 lg:px-12">
            <p className="inline-flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-white/85">
              <span className="h-1.5 w-1.5 bg-[#FF6044]" aria-hidden="true" />
              <span>FOUNDER · DESIGNER · BUILDER</span>
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-white/70">
              {personalInfo.location.toUpperCase()} · {personalInfo.availability}
            </p>
          </div>

          {/* Monumental Display Focal Block */}
          <div className="relative z-10 px-6 pb-10 pt-20 sm:px-8 sm:pb-12 lg:px-12 lg:pb-14">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={smoothEase}
              className="font-sans text-[clamp(3rem,9.5vw,8.25rem)] font-extrabold uppercase leading-[0.88] tracking-[-0.05em] text-white"
            >
              {personalInfo.brandName}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...smoothEase, delay: 0.1 }}
              className="mt-8 grid grid-cols-1 items-end gap-8 border-t border-white/15 pt-7 lg:grid-cols-12"
            >
              <div className="lg:col-span-7">
                <p className="font-sans text-lg font-medium leading-[1.5] text-white/90 sm:text-xl max-w-2xl">
                  {personalInfo.oneLinePositioning}
                </p>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.09em] text-white/60">
                  {personalInfo.secondaryHeadline}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 lg:col-span-5 lg:justify-end">
                <ActionButton
                  to="/portfolio"
                  label="VIEW CASE STUDIES"
                  sublabel="09"
                  variant="coral-solid"
                  size="lg"
                />
                <ActionButton
                  to="/contact"
                  label="START A PROJECT"
                  variant="outline"
                  size="lg"
                  inverted
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
