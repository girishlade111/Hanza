import React from "react";
import { personalInfo } from "../../content/profile";
import { SectionKicker } from "../ui/SectionKicker";
import { Accordion } from "../ui/Accordion";

interface FAQSectionProps {
  heading?: string;
  italicHeading?: string;
}

export function FAQSection({
  heading = "QUICK",
  italicHeading = "ANSWERS.",
}: FAQSectionProps) {
  const faqItems = personalInfo.faq.map((entry, idx) => ({
    id: `faq-${idx + 1}`,
    title: entry.q,
    content: <p>{entry.a}</p>,
  }));

  return (
    <section className="border-b border-[#121212]/10 dark:border-white/12">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="border-b border-[#121212]/10 p-6 sm:p-10 lg:col-span-4 lg:border-b-0 lg:border-r lg:p-12 dark:border-white/12">
            <SectionKicker>FREQUENTLY ASKED</SectionKicker>
            <h2 className="mt-4 font-sans text-3xl font-extrabold uppercase leading-[0.98] tracking-[-0.04em] sm:text-5xl">
              {heading}{" "}
              <span className="italic text-[#121212]/45 dark:text-white/45">
                {italicHeading}
              </span>
            </h2>
            <p className="mt-4 text-sm leading-[1.65] text-[#121212]/65 dark:text-white/65">
              Direct answers on engineering approach, client-side privacy guarantees, stack selection, and contract availability.
            </p>
          </div>

          <div className="p-6 sm:p-10 lg:col-span-8 lg:p-12">
            <Accordion items={faqItems} defaultOpenId="faq-1" />
          </div>
        </div>
      </div>
    </section>
  );
}
