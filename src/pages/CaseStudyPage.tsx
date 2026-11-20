import React from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { personalInfo } from "../content/profile";
import { getNextProject, getProjectBySlug } from "../lib/portfolio-logic";
import { pageTransition } from "../lib/animations";
import { SectionKicker } from "../components/ui/SectionKicker";
import { EditorialImage } from "../components/ui/EditorialImage";
import { ActionButton } from "../components/ui/Button";
import { NotFoundPage } from "./NotFoundPage";

export function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = getProjectBySlug(personalInfo.projects, slug);

  if (!project) {
    return <NotFoundPage />;
  }

  const nextProject = getNextProject(personalInfo.projects, project.slug);

  return (
    <motion.div
      key={project.slug}
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Hero Header */}
      <section className="border-b border-[#121212]/10 dark:border-white/12">
        <div className="mx-auto max-w-[1440px] p-6 sm:p-10 lg:p-12">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.09em] text-[#121212]/60 dark:text-white/60"
            >
              <Link to="/portfolio" className="hover:text-[#FF6044] transition-colors">
                PORTFOLIO
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-[#FF6044]">{project.name.toUpperCase()}</span>
            </nav>

            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.09em] text-[#121212]/70 transition-colors hover:text-[#FF6044] dark:text-white/70"
            >
              <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden="true" />
              <span>BACK TO CATALOG</span>
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.09em] text-[#121212]/60 dark:text-white/60">
                {project.category} · {project.year}
              </p>
              <h1 className="mt-3 font-sans text-4xl font-extrabold uppercase leading-[0.94] tracking-[-0.04em] sm:text-6xl lg:text-[72px]">
                {project.name}.
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-[1.6] text-[#121212]/75 dark:text-white/75">
                {project.tagline}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
              <ActionButton
                href={project.url}
                label="VISIT LIVE APP"
                variant="coral-solid"
              />
              <ActionButton
                href={project.github}
                label="VIEW GITHUB"
                variant="outline"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4-Column Hairline Metadata Matrix */}
      <section className="border-b border-[#121212]/10 bg-white dark:border-white/12 dark:bg-[#161616]">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 divide-y divide-[#121212]/10 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-y-0 dark:divide-white/12">
          <div className="p-6 sm:p-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#FF6044]">
              ROLE
            </p>
            <p className="mt-2 font-sans text-sm font-bold">{project.role}</p>
          </div>
          <div className="p-6 sm:p-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#FF6044]">
              TIMELINE
            </p>
            <p className="mt-2 font-sans text-sm font-bold tabular-nums">
              {project.year}
            </p>
          </div>
          <div className="p-6 sm:p-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#FF6044]">
              ARCHITECTURE
            </p>
            <p className="mt-2 font-sans text-sm font-bold">
              {project.architecture}
            </p>
          </div>
          <div className="p-6 sm:p-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#FF6044]">
              TECH STACK
            </p>
            <p className="mt-2 font-mono text-xs leading-[1.6] text-[#121212]/80 dark:text-white/80">
              {project.tech.join(" · ")}
            </p>
          </div>
        </div>
      </section>

      {/* Full-Width Cover Visual */}
      <section className="border-b border-[#121212]/10 dark:border-white/12">
        <div className="mx-auto max-w-[1440px]">
          <div className="aspect-[16/8] w-full overflow-hidden">
            <EditorialImage
              src={project.coverImage}
              alt={`${project.name} editorial showcase`}
              containerClassName="h-full w-full"
              priority
            />
          </div>
        </div>
      </section>

      {/* Three-Act Narrative Structure */}
      <section className="border-b border-[#121212]/10 dark:border-white/12">
        <div className="mx-auto max-w-[1440px] divide-y divide-[#121212]/10 dark:divide-white/12">
          {/* Act I */}
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="border-b border-[#121212]/10 p-6 sm:p-10 lg:col-span-4 lg:border-b-0 lg:border-r lg:p-12 dark:border-white/12">
              <SectionKicker>ACT I</SectionKicker>
              <h2 className="mt-3 font-sans text-2xl font-extrabold uppercase tracking-[-0.03em] sm:text-3xl">
                THE PROBLEM & CONTEXT.
              </h2>
            </div>
            <div className="p-6 sm:p-10 lg:col-span-8 lg:p-12">
              <p className="max-w-3xl text-base leading-[1.75] text-[#121212]/80 sm:text-lg dark:text-white/80">
                {project.problemContext}
              </p>
              <p className="mt-4 max-w-3xl text-[15px] leading-[1.75] text-[#121212]/65 dark:text-white/65">
                {project.overview}
              </p>
            </div>
          </div>

          {/* Act II */}
          <div className="grid grid-cols-1 bg-white lg:grid-cols-12 dark:bg-[#161616]">
            <div className="border-b border-[#121212]/10 p-6 sm:p-10 lg:col-span-4 lg:border-b-0 lg:border-r lg:p-12 dark:border-white/12">
              <SectionKicker>ACT II</SectionKicker>
              <h2 className="mt-3 font-sans text-2xl font-extrabold uppercase tracking-[-0.03em] sm:text-3xl">
                THE ARCHITECTURAL SOLUTION.
              </h2>
            </div>
            <div className="p-6 sm:p-10 lg:col-span-8 lg:p-12">
              <p className="max-w-3xl text-base leading-[1.75] text-[#121212]/80 sm:text-lg dark:text-white/80">
                {project.architecturalSolution}
              </p>
            </div>
          </div>

          {/* Act III */}
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="border-b border-[#121212]/10 p-6 sm:p-10 lg:col-span-4 lg:border-b-0 lg:border-r lg:p-12 dark:border-white/12">
              <SectionKicker>ACT III</SectionKicker>
              <h2 className="mt-3 font-sans text-2xl font-extrabold uppercase tracking-[-0.03em] sm:text-3xl">
                THREE KEY USE CASES.
              </h2>
            </div>
            <div className="p-6 sm:p-10 lg:col-span-8 lg:p-12">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {project.useCases.map((useCase, i) => (
                  <div
                    key={useCase}
                    className="border border-[#121212]/12 bg-white p-6 dark:border-white/12 dark:bg-[#181818]"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-semibold text-[#FF6044] tabular-nums">
                        0{i + 1}
                      </span>
                      <Check
                        className="h-4 w-4 text-[#FF6044]"
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                    </div>
                    <p className="mt-4 text-sm leading-[1.65] text-[#121212]/80 dark:text-white/80">
                      {useCase}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project Navigator */}
      {nextProject ? (
        <section className="border-b border-[#121212]/10 bg-white dark:border-white/12 dark:bg-[#161616]">
          <div className="mx-auto max-w-[1440px]">
            <Link
              to={`/portfolio/${nextProject.slug}`}
              className="group flex flex-col justify-between gap-6 p-6 transition-colors hover:bg-[#F7F5F2] sm:flex-row sm:items-center sm:p-10 lg:p-12 dark:hover:bg-[#1C1C1C]"
            >
              <div>
                <SectionKicker>NEXT CASE STUDY</SectionKicker>
                <h2 className="mt-3 font-sans text-3xl font-extrabold uppercase tracking-[-0.04em] transition-colors group-hover:text-[#FF6044] sm:text-5xl">
                  {nextProject.name}.
                </h2>
                <p className="mt-2 font-mono text-xs uppercase tracking-[0.08em] text-[#121212]/60 dark:text-white/60">
                  {nextProject.category} · {nextProject.tagline}
                </p>
              </div>

              <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center border border-[#121212]/15 bg-[#121212] text-white transition-colors group-hover:border-[#FF6044] group-hover:bg-[#FF6044] dark:border-white/15 dark:bg-white dark:text-[#121212] dark:group-hover:text-white">
                <ArrowRight
                  className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
              </span>
            </Link>
          </div>
        </section>
      ) : null}
    </motion.div>
  );
}
