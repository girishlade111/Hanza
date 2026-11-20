import React from "react";
import { Star } from "lucide-react";
import { personalInfo } from "../../content/profile";
import { SectionKicker } from "../ui/SectionKicker";
import { cn } from "../../lib/utils";

export function Testimonials() {
  return (
    <section className="border-b border-[#121212]/10 dark:border-white/12">
      <div className="mx-auto max-w-[1440px]">
        <div className="border-b border-[#121212]/10 p-6 sm:p-10 lg:p-12 dark:border-white/12">
          <SectionKicker>CLIENT & PEER STORIES</SectionKicker>
          <h2 className="mt-4 font-sans text-3xl font-extrabold uppercase leading-[0.98] tracking-[-0.04em] sm:text-5xl lg:text-[54px]">
            VERIFIED{" "}
            <span className="italic text-[#121212]/45 dark:text-white/45">
              OUTCOMES.
            </span>
          </h2>
        </div>

        {/* Asymmetric 2-Column Editorial Masonry Grid */}
        <div className="grid grid-cols-1 divide-y divide-[#121212]/10 lg:grid-cols-2 lg:divide-x lg:divide-y-0 dark:divide-white/12">
          <div className="divide-y divide-[#121212]/10 dark:divide-white/12">
            {personalInfo.testimonials
              .filter((_, i) => i % 2 === 0)
              .map((item, idx) => (
                <article
                  key={item.id}
                  className={cn(
                    "p-6 sm:p-10 lg:p-12",
                    idx === 0 ? "bg-white dark:bg-[#161616]" : "bg-[#F7F5F2] dark:bg-[#111111]"
                  )}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div
                      className="flex items-center gap-1 text-[#FF6044]"
                      aria-label={`${item.rating} out of 5 stars`}
                    >
                      {Array.from({ length: item.rating }).map((_, s) => (
                        <Star
                          key={s}
                          className="h-3.5 w-3.5 fill-[#FF6044] text-[#FF6044]"
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.09em] text-[#121212]/55 dark:text-white/55">
                      {item.projectRef}
                    </span>
                  </div>

                  <blockquote className="mt-6 font-sans text-lg font-medium leading-[1.6] text-[#121212] dark:text-white">
                    “{item.quote}”
                  </blockquote>

                  <footer className="mt-6 border-t border-[#121212]/10 pt-4 dark:border-white/12">
                    <p className="font-sans text-sm font-extrabold uppercase tracking-[-0.01em]">
                      {item.author}
                    </p>
                    <p className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.07em] text-[#121212]/60 dark:text-white/60">
                      {item.role} · {item.organization}
                    </p>
                  </footer>
                </article>
              ))}
          </div>

          <div className="divide-y divide-[#121212]/10 dark:divide-white/12">
            {personalInfo.testimonials
              .filter((_, i) => i % 2 === 1)
              .map((item, idx) => (
                <article
                  key={item.id}
                  className={cn(
                    "p-6 sm:p-10 lg:p-12",
                    idx === 1 ? "bg-white dark:bg-[#161616]" : "bg-[#F7F5F2] dark:bg-[#111111]"
                  )}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div
                      className="flex items-center gap-1 text-[#FF6044]"
                      aria-label={`${item.rating} out of 5 stars`}
                    >
                      {Array.from({ length: item.rating }).map((_, s) => (
                        <Star
                          key={s}
                          className="h-3.5 w-3.5 fill-[#FF6044] text-[#FF6044]"
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.09em] text-[#121212]/55 dark:text-white/55">
                      {item.projectRef}
                    </span>
                  </div>

                  <blockquote className="mt-6 font-sans text-lg font-medium leading-[1.6] text-[#121212] dark:text-white">
                    “{item.quote}”
                  </blockquote>

                  <footer className="mt-6 border-t border-[#121212]/10 pt-4 dark:border-white/12">
                    <p className="font-sans text-sm font-extrabold uppercase tracking-[-0.01em]">
                      {item.author}
                    </p>
                    <p className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.07em] text-[#121212]/60 dark:text-white/60">
                      {item.role} · {item.organization}
                    </p>
                  </footer>
                </article>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
