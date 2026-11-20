import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { personalInfo } from "../../content/profile";
import {
  filterProjectsByCategory,
  getHomeFeaturedProjects,
} from "../../lib/portfolio-logic";
import { SectionKicker } from "../ui/SectionKicker";
import { EditorialImage } from "../ui/EditorialImage";
import { ActionButton } from "../ui/Button";
import { cn } from "../../lib/utils";

const HOME_FILTERS = [
  "ALL",
  "DEVELOPER TOOLS",
  "DOCUMENT UTILITIES",
  "MEASUREMENT",
] as const;

export function CaseStudiesGrid() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const featured = getHomeFeaturedProjects(personalInfo.projects);
  const visibleProjects = filterProjectsByCategory(featured, activeCategory);

  return (
    <section className="border-b border-[#121212]/10 dark:border-white/12">
      <div className="mx-auto max-w-[1440px]">
        {/* Header Bar */}
        <div className="flex flex-col gap-6 border-b border-[#121212]/10 p-6 sm:p-10 lg:flex-row lg:items-end lg:justify-between lg:p-12 dark:border-white/12">
          <div>
            <SectionKicker>SELECTED WORK</SectionKicker>
            <h2 className="mt-4 font-sans text-3xl font-extrabold uppercase leading-[0.98] tracking-[-0.04em] sm:text-5xl lg:text-[56px]">
              CASE{" "}
              <span className="italic text-[#121212]/45 dark:text-white/45">
                STUDIES.
              </span>
            </h2>
          </div>

          {/* Interactive Filter Controls */}
          <div
            role="tablist"
            aria-label="Filter featured case studies"
            className="flex flex-wrap items-center gap-1 border border-[#121212]/12 bg-white p-1 dark:border-white/12 dark:bg-[#181818]"
          >
            {HOME_FILTERS.map((cat) => {
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "relative min-h-[38px] px-3.5 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.08em] transition-colors cursor-pointer whitespace-nowrap shrink-0",
                    isSelected
                      ? "text-white"
                      : "text-[#121212]/70 hover:text-[#121212] dark:text-white/70 dark:hover:text-white"
                  )}
                >
                  {isSelected ? (
                    <motion.span
                      layoutId="homeCaseFilter"
                      transition={{ type: "spring", stiffness: 320, damping: 28 }}
                      className="absolute inset-0 bg-[#121212] dark:bg-[#FF6044]"
                      aria-hidden="true"
                    />
                  ) : null}
                  <span className="relative z-10">{cat}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Alternating Full-Bleed Editorial Project Rows */}
        <div className="divide-y divide-[#121212]/10 dark:divide-white/12">
          {visibleProjects.map((project, index) => {
            const isReversed = index % 2 === 1;
            return (
              <article
                key={project.slug}
                className="group grid grid-cols-1 lg:grid-cols-12 bg-[#F7F5F2] transition-colors hover:bg-white dark:bg-[#111111] dark:hover:bg-[#161616]"
              >
                {/* Cover Image */}
                <Link
                  to={`/portfolio/${project.slug}`}
                  className={cn(
                    "block overflow-hidden border-b border-[#121212]/10 lg:col-span-7 lg:border-b-0 dark:border-white/12",
                    isReversed ? "lg:order-2 lg:border-l" : "lg:border-r"
                  )}
                >
                  <div className="aspect-[16/10] w-full overflow-hidden">
                    <EditorialImage
                      src={project.coverImage}
                      alt={`${project.name} — ${project.tagline}`}
                      containerClassName="h-full w-full"
                      className="transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                </Link>

                {/* Editorial Details */}
                <div
                  className={cn(
                    "flex flex-col justify-between p-6 sm:p-10 lg:col-span-5 lg:p-12",
                    isReversed && "lg:order-1"
                  )}
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-[0.09em] text-[#121212]/60 dark:text-white/60">
                      <span className="text-[#FF6044] font-semibold tabular-nums">
                        0{index + 1}
                      </span>
                      <span aria-hidden="true">/</span>
                      <span>{project.category}</span>
                      <span aria-hidden="true">·</span>
                      <span className="tabular-nums">{project.year}</span>
                    </div>

                    <h3 className="mt-4 font-sans text-2xl font-extrabold uppercase tracking-[-0.03em] sm:text-4xl">
                      <Link
                        to={`/portfolio/${project.slug}`}
                        className="transition-colors hover:text-[#FF6044]"
                      >
                        {project.name}
                      </Link>
                    </h3>

                    <p className="mt-3 text-[15px] leading-[1.65] text-[#121212]/70 dark:text-white/70">
                      {project.overview}
                    </p>

                    <div className="mt-6 border-t border-[#121212]/10 pt-4 dark:border-white/12">
                      <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#121212]/50 dark:text-white/50">
                        STACK & ARCHITECTURE
                      </p>
                      <p className="mt-1.5 font-mono text-xs text-[#121212]/80 dark:text-white/80">
                        {project.tech.join(" · ")}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 flex items-center justify-between border-t border-[#121212]/10 pt-5 dark:border-white/12">
                    <Link
                      to={`/portfolio/${project.slug}`}
                      className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.09em] text-[#121212] transition-colors hover:text-[#FF6044] dark:text-white dark:hover:text-[#FF6044]"
                    >
                      <span>VIEW PROJECT</span>
                      <ArrowRight
                        className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                        strokeWidth={1.75}
                        aria-hidden="true"
                      />
                    </Link>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#121212]/55 underline underline-offset-4 transition-colors hover:text-[#FF6044] dark:text-white/55"
                    >
                      LIVE APP ↗
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Catalog CTA Strip */}
        <div className="flex flex-col items-start justify-between gap-4 border-t border-[#121212]/10 bg-white p-6 sm:flex-row sm:items-center sm:px-10 lg:px-12 dark:border-white/12 dark:bg-[#161616]">
          <p className="font-mono text-xs uppercase tracking-[0.08em] text-[#121212]/65 dark:text-white/65">
            EXPLORE ALL 9 SHIPPED PRODUCTS ACROSS THE LADESTACK ECOSYSTEM
          </p>
          <ActionButton
            to="/portfolio"
            label="ALL CASE STUDIES"
            sublabel="09"
          />
        </div>
      </div>
    </section>
  );
}
