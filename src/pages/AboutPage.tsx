import React from "react";
import { motion } from "framer-motion";
import { ASSETS, personalInfo } from "../content/profile";
import { pageTransition } from "../lib/animations";
import { SectionKicker } from "../components/ui/SectionKicker";
import { EditorialImage } from "../components/ui/EditorialImage";
import { SocialLinks } from "../components/ui/SocialLinks";
import { ActionButton } from "../components/ui/Button";
import { ServicesAccordion } from "../components/home/ServicesAccordion";
import { Testimonials } from "../components/home/Testimonials";

export function AboutPage() {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Hero Split */}
      <section className="border-b border-[#121212]/10 dark:border-white/12">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid grid-cols-1 items-stretch lg:grid-cols-12">
            <div className="flex flex-col justify-between border-b border-[#121212]/10 p-6 sm:p-10 lg:col-span-7 lg:border-b-0 lg:border-r lg:p-12 dark:border-white/12">
              <div>
                <SectionKicker>ABOUT GIRISH BALASO LADE</SectionKicker>
                <h1 className="mt-4 font-sans text-4xl font-extrabold uppercase leading-[0.94] tracking-[-0.04em] sm:text-6xl lg:text-[72px]">
                  DESIGN, BUILD{" "}
                  <span className="italic text-[#121212]/45 dark:text-white/45">
                    & LAUNCH.
                  </span>
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-[1.65] text-[#121212]/75 dark:text-white/75">
                  {personalInfo.shortBio}
                </p>
              </div>

              <div className="mt-10 space-y-5 border-t border-[#121212]/10 pt-6 dark:border-white/12">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="font-mono text-[11px] uppercase tracking-[0.09em] text-[#121212]/65 dark:text-white/65">
                    <p>{personalInfo.secondaryHeadline.toUpperCase()}</p>
                    <p className="mt-1 text-[#FF6044]">
                      {personalInfo.location.toUpperCase()}
                    </p>
                  </div>
                  <SocialLinks />
                </div>
                <div className="flex flex-wrap gap-3">
                  <ActionButton to="/contact" label="WORK WITH ME" variant="coral-solid" />
                  <ActionButton to="/portfolio" label="EXPLORE PRODUCTS" variant="outline" />
                </div>
              </div>
            </div>

            {/* Right Square Portrait Container */}
            <div className="relative bg-white p-6 sm:p-10 lg:col-span-5 lg:p-12 dark:bg-[#161616]">
              <div className="relative aspect-square w-full overflow-hidden border-t-2 border-[#FF6044]">
                <EditorialImage
                  src={ASSETS.authorPortrait}
                  alt={personalInfo.fullName}
                  containerClassName="h-full w-full"
                  className="scale-[1.07]"
                  priority
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent p-6 text-white">
                  <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#FF6044]">
                    ▪ FOUNDER OF LADESTACK®
                  </p>
                  <p className="mt-1 font-sans text-xl font-extrabold uppercase tracking-[-0.02em]">
                    {personalInfo.fullName}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Smooth Ecosystem Marquee */}
      <section
        aria-label="Technology ecosystem"
        className="overflow-hidden border-b border-[#121212]/10 bg-[#121212] py-5 text-white dark:border-white/12 dark:bg-[#181818]"
      >
        <div className="animate-marquee items-center gap-10">
          {[...personalInfo.ecosystemStack, ...personalInfo.ecosystemStack].map(
            (tech, idx) => (
              <div
                key={`${tech}-${idx}`}
                className="flex items-center gap-10 whitespace-nowrap"
              >
                <span className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-white/85">
                  {tech}
                </span>
                <span
                  className="inline-block h-1.5 w-1.5 bg-[#FF6044]"
                  aria-hidden="true"
                />
              </div>
            )
          )}
        </div>
      </section>

      {/* "A CLEAR DIRECTION." 3 Narrative Bio Chapters */}
      <section className="border-b border-[#121212]/10 dark:border-white/12">
        <div className="mx-auto max-w-[1440px]">
          <div className="border-b border-[#121212]/10 p-6 sm:p-10 lg:p-12 dark:border-white/12">
            <SectionKicker>ENGINEERING JOURNEY</SectionKicker>
            <h2 className="mt-4 font-sans text-3xl font-extrabold uppercase leading-[0.98] tracking-[-0.04em] sm:text-5xl lg:text-[54px]">
              A CLEAR{" "}
              <span className="italic text-[#121212]/45 dark:text-white/45">
                DIRECTION.
              </span>
            </h2>
          </div>

          <div className="divide-y divide-[#121212]/10 dark:divide-white/12">
            {personalInfo.bioChapters.map((chapter, idx) => (
              <div
                key={chapter.index}
                className={`grid grid-cols-1 lg:grid-cols-12 ${
                  idx % 2 === 1 ? "bg-white dark:bg-[#161616]" : ""
                }`}
              >
                <div className="border-b border-[#121212]/10 p-6 sm:p-10 lg:col-span-4 lg:border-b-0 lg:border-r lg:p-12 dark:border-white/12">
                  <span className="font-mono text-xs font-semibold text-[#FF6044] tabular-nums">
                    CHAPTER {chapter.index}
                  </span>
                  <h3 className="mt-3 font-sans text-xl font-extrabold uppercase leading-[1.15] tracking-[-0.02em] sm:text-2xl">
                    {chapter.title}
                  </h3>
                </div>
                <div className="p-6 sm:p-10 lg:col-span-8 lg:p-12">
                  <p className="max-w-3xl text-base leading-[1.75] text-[#121212]/75 sm:text-lg dark:text-white/75">
                    {chapter.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Column Qualitative Metrics Grid */}
      <section className="border-b border-[#121212]/10 bg-white dark:border-white/12 dark:bg-[#161616]">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 divide-y divide-[#121212]/10 lg:grid-cols-4 lg:divide-x lg:divide-y-0 dark:divide-white/12">
          {personalInfo.metrics.map((metric, idx) => (
            <div
              key={metric.label}
              className={`p-6 sm:p-10 ${
                idx % 2 === 0 ? "border-r border-[#121212]/10 dark:border-white/12" : ""
              }`}
            >
              <p className="font-sans text-4xl font-extrabold tracking-[-0.04em] tabular-nums sm:text-5xl">
                {metric.value}
              </p>
              <p className="mt-2 font-mono text-[11px] font-semibold uppercase tracking-[0.09em] text-[#FF6044]">
                {metric.label}
              </p>
              <p className="mt-1 text-xs text-[#121212]/60 dark:text-white/60">
                {metric.note}
              </p>
            </div>
          ))}
        </div>
      </section>

      <ServicesAccordion />
      <Testimonials />
    </motion.div>
  );
}
