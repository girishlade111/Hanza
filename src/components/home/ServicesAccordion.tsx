import React from "react";
import { Check } from "lucide-react";
import { ASSETS, personalInfo } from "../../content/profile";
import { SectionKicker } from "../ui/SectionKicker";
import { Accordion } from "../ui/Accordion";
import { EditorialImage } from "../ui/EditorialImage";
import { ActionButton } from "../ui/Button";

export function ServicesAccordion() {
  const serviceItems = personalInfo.services.map((service) => ({
    id: service.id,
    index: service.id,
    title: service.title,
    content: (
      <div className="space-y-4">
        <p>{service.description}</p>
        <ul className="space-y-2 border-t border-[#121212]/10 pt-4 dark:border-white/12">
          {service.deliverables.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2.5 font-mono text-xs text-[#121212]/80 dark:text-white/80"
            >
              <Check
                className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#FF6044]"
                strokeWidth={2}
                aria-hidden="true"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  }));

  return (
    <section className="border-b border-[#121212]/10 dark:border-white/12">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Left 72%: Services Heading + Spring Accordion */}
          <div className="border-b border-[#121212]/10 p-6 sm:p-10 lg:col-span-8 lg:border-b-0 lg:border-r lg:p-12 dark:border-white/12">
            <SectionKicker>CAPABILITIES</SectionKicker>
            <h2 className="mt-4 font-sans text-3xl font-extrabold uppercase leading-[0.98] tracking-[-0.04em] sm:text-5xl lg:text-[54px]">
              WHAT I{" "}
              <span className="italic text-[#121212]/45 dark:text-white/45">
                CREATE.
              </span>
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-[1.65] text-[#121212]/65 dark:text-white/65">
              Four core engineering and design disciplines focused on speed, structural clarity, and client-side privacy.
            </p>

            <div className="mt-8">
              <Accordion items={serviceItems} defaultOpenId="01" />
            </div>
          </div>

          {/* Right 28%: Sticky Consultation Card */}
          <div className="bg-white p-6 sm:p-10 lg:col-span-4 lg:p-12 dark:bg-[#161616]">
            <div className="lg:sticky lg:top-24 space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 shrink-0 overflow-hidden border-t-2 border-[#FF6044]">
                  <EditorialImage
                    src={ASSETS.authorPortrait}
                    alt={personalInfo.displayName}
                    containerClassName="h-full w-full"
                    className="scale-[1.08]"
                  />
                </div>
                <div>
                  <SectionKicker>{personalInfo.displayName}</SectionKicker>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.08em] text-[#121212]/60 dark:text-white/60">
                    {personalInfo.availability}
                  </p>
                </div>
              </div>

              <h3 className="font-sans text-2xl font-extrabold uppercase leading-[1.05] tracking-[-0.03em]">
                PLAN YOUR NEXT PROJECT WITH ME.
              </h3>

              <p className="text-sm leading-[1.65] text-[#121212]/70 dark:text-white/70">
                Whether you need a crisp editorial website, a tokenized React design system, or a zero-upload browser utility, we start with clear constraints and ship dependable software.
              </p>

              <ActionButton
                to="/contact"
                label="BOOK A CALL"
                sublabel="CONTACT"
                fullWidth
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
