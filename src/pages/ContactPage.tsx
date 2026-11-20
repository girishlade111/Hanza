import React from "react";
import { motion } from "framer-motion";
import { personalInfo } from "../content/profile";
import { pageTransition } from "../lib/animations";
import { SectionKicker } from "../components/ui/SectionKicker";
import { ContactForm } from "../components/layout/ContactForm";
import { StickyProfileSidebar } from "../components/layout/StickyProfileSidebar";
import { FAQSection } from "../components/home/FAQSection";

export function ContactPage() {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Header */}
      <section className="border-b border-[#121212]/10 dark:border-white/12">
        <div className="mx-auto max-w-[1440px] p-6 sm:p-10 lg:p-12">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <SectionKicker>PROJECT INQUIRIES</SectionKicker>
            <div className="inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.09em] text-[#121212]/75 dark:text-white/75">
              <span className="inline-flex items-center gap-1" aria-hidden="true">
                <span className="h-2 w-2 bg-[#3DB15E]" />
                <span className="h-2 w-2 bg-[#3DB15E]" />
                <span className="h-2 w-2 bg-[#121212]/20 dark:bg-white/25" />
                <span className="h-2 w-2 bg-[#121212]/20 dark:bg-white/25" />
              </span>
              <span>{personalInfo.availability}</span>
            </div>
          </div>

          <h1 className="mt-4 font-sans text-4xl font-extrabold uppercase leading-[0.94] tracking-[-0.04em] sm:text-6xl lg:text-[72px]">
            LET&apos;S BUILD YOUR{" "}
            <span className="italic text-[#121212]/45 dark:text-white/45">
              WEBSITE.
            </span>
          </h1>
        </div>
      </section>

      {/* 28/72 Split Sidebar + Interactive Form */}
      <section className="border-b border-[#121212]/10 dark:border-white/12">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 lg:grid-cols-12">
          <div className="border-b border-[#121212]/10 p-6 sm:p-10 lg:col-span-4 lg:border-b-0 lg:border-r lg:p-12 dark:border-white/12">
            <StickyProfileSidebar showContactButton={false} />
          </div>

          <div className="bg-white p-6 sm:p-10 lg:col-span-8 lg:p-12 dark:bg-[#161616]">
            <SectionKicker>DIRECT BRIEF</SectionKicker>
            <p className="mt-3 max-w-2xl text-[15px] leading-[1.65] text-[#121212]/70 dark:text-white/70">
              Share your scope, product goals, and target schedule. Every inquiry goes directly to Girish Lade—no account managers, no templates, no outsourcing.
            </p>
            <div className="mt-8">
              <ContactForm formIdPrefix="page-contact" />
            </div>
          </div>
        </div>
      </section>

      <FAQSection heading="QUICK" italicHeading="ANSWERS." />
    </motion.div>
  );
}
