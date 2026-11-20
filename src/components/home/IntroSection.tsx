import React from "react";
import { motion } from "framer-motion";
import { ASSETS, personalInfo } from "../../content/profile";
import { EditorialImage } from "../ui/EditorialImage";
import { SectionKicker } from "../ui/SectionKicker";
import { SocialLinks } from "../ui/SocialLinks";
import { ActionButton } from "../ui/Button";
import { fadeInUp, staggerContainer } from "../../lib/animations";

export function IntroSection() {
  return (
    <section className="border-b border-[#121212]/10 dark:border-white/12">
      <div className="mx-auto max-w-[1440px]">
        {/* 28 / 72 Architectural Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Left Column: Portrait + Location + Socials */}
          <div className="border-b border-[#121212]/10 p-6 sm:p-10 lg:col-span-4 lg:border-b-0 lg:border-r lg:p-12 dark:border-white/12">
            <div className="aspect-square w-full max-w-[280px] overflow-hidden border-t-2 border-[#FF6044]">
              <EditorialImage
                src={ASSETS.authorPortrait}
                alt={personalInfo.fullName}
                containerClassName="h-full w-full"
                className="scale-[1.07]"
                priority
              />
            </div>

            <div className="mt-6 space-y-2 border-t border-[#121212]/10 pt-5 dark:border-white/12">
              <SectionKicker>{personalInfo.fullName}</SectionKicker>
              <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#121212]/65 dark:text-white/65">
                {personalInfo.location}
              </p>
              <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#121212]/65 dark:text-white/65">
                {personalInfo.headline}
              </p>
            </div>

            <div className="mt-5">
              <SocialLinks />
            </div>
          </div>

          {/* Right Column: Headline + Mission */}
          <div className="flex flex-col justify-between p-6 sm:p-10 lg:col-span-8 lg:p-12">
            <div>
              <SectionKicker>INTRODUCTION</SectionKicker>
              <h2 className="mt-4 font-sans text-3xl font-extrabold uppercase leading-[0.98] tracking-[-0.04em] sm:text-5xl lg:text-[56px]">
                A CLEAR{" "}
                <span className="italic text-[#121212]/45 dark:text-white/45">
                  DIRECTION.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-[1.7] text-[#121212]/75 sm:text-lg dark:text-white/75">
                {personalInfo.shortBio}
              </p>
              <p className="mt-4 max-w-2xl text-[15px] leading-[1.7] text-[#121212]/65 dark:text-white/65">
                {personalInfo.extendedBio}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4 pt-4">
              <ActionButton to="/about" label="READ FULL STORY" sublabel="ABOUT" />
              <ActionButton
                href={personalInfo.brandUrl}
                label="VISIT LADESTACK.IN"
                variant="outline"
              />
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Tabular Metrics Strip */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-2 border-t border-[#121212]/10 lg:grid-cols-4 dark:border-white/12"
        >
          {personalInfo.metrics.map((metric, idx) => (
            <motion.div
              key={metric.label}
              variants={fadeInUp}
              className={`p-6 sm:p-8 lg:p-10 ${
                idx % 2 === 0 ? "border-r border-[#121212]/10 dark:border-white/12" : ""
              } ${idx < 2 ? "border-b lg:border-b-0 border-[#121212]/10 dark:border-white/12" : ""} ${
                idx < 3 ? "lg:border-r lg:border-[#121212]/10 dark:lg:border-white/12" : ""
              } bg-white dark:bg-[#161616]`}
            >
              <p className="font-sans text-4xl font-extrabold tracking-[-0.04em] text-[#121212] tabular-nums sm:text-5xl dark:text-white">
                {metric.value}
              </p>
              <p className="mt-2 font-mono text-[11px] font-semibold uppercase tracking-[0.09em] text-[#FF6044]">
                {metric.label}
              </p>
              <p className="mt-1 text-xs text-[#121212]/60 dark:text-white/60">
                {metric.note}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
