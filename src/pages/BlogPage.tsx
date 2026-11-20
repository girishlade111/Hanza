import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { personalInfo } from "../content/profile";
import {
  BLOG_FILTER_CATEGORIES,
  filterArticlesByCategory,
} from "../lib/portfolio-logic";
import { pageTransition } from "../lib/animations";
import { SectionKicker } from "../components/ui/SectionKicker";
import { EditorialImage } from "../components/ui/EditorialImage";
import { cn } from "../lib/utils";

export function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const visibleArticles = filterArticlesByCategory(
    personalInfo.articles,
    activeCategory
  );

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
          <SectionKicker>EDITORIAL JOURNAL & TECHNICAL ESSAYS</SectionKicker>
          <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h1 className="font-sans text-4xl font-extrabold uppercase leading-[0.94] tracking-[-0.04em] sm:text-6xl lg:text-[72px]">
              DESIGN{" "}
              <span className="italic text-[#121212]/45 dark:text-white/45">
                STORIES.
              </span>
            </h1>
            <p className="max-w-lg text-[15px] leading-[1.65] text-[#121212]/65 dark:text-white/65">
              Field notes on browser-first developer tools, client-side privacy architecture, Swiss grid typography, and engineering craft.
            </p>
          </div>

          {/* Animated Category Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[#121212]/10 pt-6 dark:border-white/12">
            <div
              role="tablist"
              aria-label="Filter blog articles by category"
              className="flex flex-wrap items-center gap-1 border border-[#121212]/12 bg-white p-1 dark:border-white/12 dark:bg-[#181818]"
            >
              {BLOG_FILTER_CATEGORIES.map((category) => {
                const selected = activeCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    onClick={() => setActiveCategory(category)}
                    className={cn(
                      "relative min-h-[40px] px-4 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.08em] transition-colors cursor-pointer whitespace-nowrap shrink-0",
                      selected
                        ? "text-white"
                        : "text-[#121212]/70 hover:text-[#121212] dark:text-white/70 dark:hover:text-white"
                    )}
                  >
                    {selected ? (
                      <motion.span
                        layoutId="blogCategoryPills"
                        transition={{ type: "spring", stiffness: 320, damping: 28 }}
                        className="absolute inset-0 bg-[#121212] dark:bg-[#FF6044]"
                        aria-hidden="true"
                      />
                    ) : null}
                    <span className="relative z-10">{category}</span>
                  </button>
                );
              })}
            </div>

            <p
              data-testid="blog-count"
              className="font-mono text-[11px] uppercase tracking-[0.09em] text-[#121212]/60 tabular-nums dark:text-white/60"
            >
              SHOWING {visibleArticles.length} OF {personalInfo.articles.length} ARTICLES
            </p>
          </div>
        </div>
      </section>

      {/* 8 Editorial Cards Grid */}
      <section className="border-b border-[#121212]/10 dark:border-white/12">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {visibleArticles.map((article) => (
              <motion.article
                key={article.slug}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="group flex flex-col justify-between border-b border-[#121212]/10 bg-[#F7F5F2] transition-colors hover:bg-white md:border-r dark:border-white/12 dark:bg-[#111111] dark:hover:bg-[#161616]"
              >
                <div>
                  <Link
                    to={`/blog/${article.slug}`}
                    className="block aspect-[4/3] overflow-hidden border-b border-[#121212]/10 dark:border-white/12"
                  >
                    <EditorialImage
                      src={article.coverImage}
                      alt={article.title}
                      containerClassName="h-full w-full"
                      className="transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                    />
                  </Link>

                  <div className="p-6">
                    <p className="font-mono text-[10px] uppercase tracking-[0.09em] text-[#121212]/60 dark:text-white/60">
                      <span className="text-[#FF6044]">{article.category}</span> ·{" "}
                      {article.date} · {article.readTime}
                    </p>

                    <h2 className="mt-3 font-sans text-lg font-extrabold leading-[1.25] tracking-[-0.02em]">
                      <Link
                        to={`/blog/${article.slug}`}
                        className="transition-colors hover:text-[#FF6044]"
                      >
                        {article.title}
                      </Link>
                    </h2>

                    <p className="mt-3 text-sm leading-[1.6] text-[#121212]/65 dark:text-white/65">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                <div className="border-t border-[#121212]/10 px-6 py-4 dark:border-white/12">
                  <Link
                    to={`/blog/${article.slug}`}
                    className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.09em] text-[#121212] transition-colors hover:text-[#FF6044] dark:text-white dark:hover:text-[#FF6044]"
                  >
                    <span>READ ARTICLE</span>
                    <ArrowRight
                      className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
