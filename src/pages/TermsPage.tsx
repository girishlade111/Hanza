import React from "react";
import { motion } from "framer-motion";
import { personalInfo } from "../content/profile";
import { pageTransition } from "../lib/animations";
import { SectionKicker } from "../components/ui/SectionKicker";
import { StickyProfileSidebar } from "../components/layout/StickyProfileSidebar";

export function TermsPage() {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <section className="border-b border-[#121212]/10 dark:border-white/12">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 lg:grid-cols-12">
          <div className="border-b border-[#121212]/10 p-6 sm:p-10 lg:col-span-4 lg:border-b-0 lg:border-r lg:p-12 dark:border-white/12">
            <StickyProfileSidebar />
          </div>

          <div className="bg-white p-6 sm:p-10 lg:col-span-8 lg:p-12 dark:bg-[#161616]">
            <SectionKicker>
              LEGAL · EFFECTIVE {personalInfo.legal.termsUpdated}
            </SectionKicker>
            <h1 className="mt-4 font-sans text-4xl font-extrabold uppercase leading-[0.95] tracking-[-0.04em] sm:text-6xl">
              TERMS OF{" "}
              <span className="italic text-[#121212]/45 dark:text-white/45">
                SERVICE.
              </span>
            </h1>

            <div className="mt-10 divide-y divide-[#121212]/10 border-t border-[#121212]/10 dark:divide-white/12 dark:border-white/12">
              {personalInfo.legal.termsSections.map((section) => (
                <section key={section.index} className="py-8">
                  <p className="font-mono text-xs font-semibold text-[#FF6044] tabular-nums">
                    {section.index}.
                  </p>
                  <h2 className="mt-2 font-sans text-xl font-extrabold uppercase tracking-[-0.02em]">
                    {section.title}
                  </h2>
                  <p className="mt-3 max-w-2xl text-[15px] leading-[1.75] text-[#121212]/75 dark:text-white/75">
                    {section.body}
                  </p>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
