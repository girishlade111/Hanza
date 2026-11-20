import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { personalInfo } from "../../content/profile";
import { SectionKicker } from "../ui/SectionKicker";
import { EditorialImage } from "../ui/EditorialImage";
import { ActionButton } from "../ui/Button";

export function BlogPreviewSection() {
  const previewArticles = personalInfo.articles.slice(0, 4);

  return (
    <section className="border-b border-[#121212]/10 dark:border-white/12">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col gap-4 border-b border-[#121212]/10 p-6 sm:p-10 lg:flex-row lg:items-end lg:justify-between lg:p-12 dark:border-white/12">
          <div>
            <SectionKicker>JOURNAL & ESSAYS</SectionKicker>
            <h2 className="mt-4 font-sans text-3xl font-extrabold uppercase leading-[0.98] tracking-[-0.04em] sm:text-5xl lg:text-[54px]">
              DESIGN{" "}
              <span className="italic text-[#121212]/45 dark:text-white/45">
                STORIES.
              </span>
            </h2>
          </div>

          <ActionButton to="/blog" label="ALL STORIES" sublabel="08" />
        </div>

        <div className="grid grid-cols-1 divide-y divide-[#121212]/10 md:grid-cols-2 md:divide-y-0 lg:grid-cols-4 dark:divide-white/12">
          {previewArticles.map((article, idx) => (
            <article
              key={article.slug}
              className={`group flex flex-col justify-between bg-[#F7F5F2] transition-colors hover:bg-white dark:bg-[#111111] dark:hover:bg-[#161616] ${
                idx < 3 ? "lg:border-r lg:border-[#121212]/10 dark:lg:border-white/12" : ""
              } ${idx % 2 === 0 ? "md:border-r md:border-[#121212]/10 dark:md:border-white/12 lg:border-r" : ""} ${
                idx < 2 ? "md:border-b md:border-[#121212]/10 dark:md:border-white/12 lg:border-b-0" : ""
              }`}
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
                    className="transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </Link>

                <div className="p-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.09em] text-[#121212]/60 dark:text-white/60">
                    <span className="text-[#FF6044]">{article.category}</span> ·{" "}
                    {article.date}
                  </p>
                  <h3 className="mt-3 font-sans text-lg font-extrabold leading-[1.25] tracking-[-0.02em]">
                    <Link
                      to={`/blog/${article.slug}`}
                      className="transition-colors hover:text-[#FF6044]"
                    >
                      {article.title}
                    </Link>
                  </h3>
                  <p className="mt-2.5 text-sm leading-[1.6] text-[#121212]/65 dark:text-white/65">
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
