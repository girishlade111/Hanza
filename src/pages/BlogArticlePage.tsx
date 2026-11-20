import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, Link2 } from "lucide-react";
import { ASSETS, personalInfo } from "../content/profile";
import { getArticleBySlug, getRelatedArticles } from "../lib/portfolio-logic";
import { pageTransition } from "../lib/animations";
import { SectionKicker } from "../components/ui/SectionKicker";
import { EditorialImage } from "../components/ui/EditorialImage";
import { NotFoundPage } from "./NotFoundPage";
import { cn } from "../lib/utils";

export function BlogArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const article = getArticleBySlug(personalInfo.articles, slug);
  const [activeSectionId, setActiveSectionId] = useState<string>("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!article || article.sections.length === 0) return;
    setActiveSectionId(article.sections[0].id);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSectionId(entry.target.id);
          }
        }
      },
      { rootMargin: "-20% 0px -65% 0px" }
    );

    article.sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [article]);

  if (!article) {
    return <NotFoundPage />;
  }

  const related = getRelatedArticles(personalInfo.articles, article.slug, 3);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <motion.div
      key={article.slug}
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Article Header */}
      <section className="border-b border-[#121212]/10 dark:border-white/12">
        <div className="mx-auto max-w-[1440px] p-6 sm:p-10 lg:p-12">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.09em] text-[#121212]/65 dark:text-white/65">
              <span className="text-[#FF6044] font-semibold">{article.category}</span>
              <span className="mx-2" aria-hidden="true">·</span>
              <span>{article.date}</span>
              <span className="mx-2" aria-hidden="true">·</span>
              <span>{article.readTime}</span>
            </p>

            <Link
              to="/blog"
              className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.09em] text-[#121212]/70 transition-colors hover:text-[#FF6044] dark:text-white/70"
            >
              <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden="true" />
              <span>ALL STORIES</span>
            </Link>
          </div>

          <h1 className="mt-6 max-w-4xl font-sans text-3xl font-extrabold uppercase leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-[60px]">
            {article.title}
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-[1.6] text-[#121212]/70 dark:text-white/70">
            {article.excerpt}
          </p>

          <div className="mt-8 flex items-center gap-4 border-t border-[#121212]/10 pt-6 dark:border-white/12">
            <div className="h-12 w-12 shrink-0 overflow-hidden border-t-2 border-[#FF6044]">
              <EditorialImage
                src={ASSETS.authorPortrait}
                alt={personalInfo.fullName}
                containerClassName="h-full w-full"
                className="scale-[1.08]"
              />
            </div>
            <div>
              <p className="font-sans text-sm font-extrabold uppercase tracking-[-0.01em]">
                {personalInfo.fullName}
              </p>
              <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#121212]/60 dark:text-white/60">
                FOUNDER OF LADESTACK · {personalInfo.shortLocation}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cover Visual */}
      <section className="border-b border-[#121212]/10 dark:border-white/12">
        <div className="mx-auto max-w-[1440px]">
          <div className="aspect-[16/7] w-full overflow-hidden">
            <EditorialImage
              src={article.coverImage}
              alt={article.title}
              containerClassName="h-full w-full"
              priority
            />
          </div>
        </div>
      </section>

      {/* Split Editorial Reading Layout: 28% Sticky TOC / 72% Article Prose */}
      <section className="border-b border-[#121212]/10 dark:border-white/12">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 lg:grid-cols-12">
          {/* Left Sticky Table of Contents & Share */}
          <aside className="border-b border-[#121212]/10 p-6 sm:p-10 lg:col-span-4 lg:border-b-0 lg:border-r lg:p-12 dark:border-white/12">
            <div className="lg:sticky lg:top-24 space-y-8">
              <div>
                <SectionKicker>TABLE OF CONTENTS</SectionKicker>
                <nav aria-label="Article table of contents" className="mt-4 space-y-2.5">
                  {article.sections.map((sec) => {
                    const isActive = activeSectionId === sec.id;
                    return (
                      <a
                        key={sec.id}
                        href={`#${sec.id}`}
                        className={cn(
                          "block py-1 font-mono text-xs uppercase tracking-[0.06em] transition-colors",
                          isActive
                            ? "font-semibold text-[#FF6044]"
                            : "text-[#121212]/65 hover:text-[#121212] dark:text-white/65 dark:hover:text-white"
                        )}
                      >
                        {sec.heading}
                      </a>
                    );
                  })}
                </nav>
              </div>

              <div className="border-t border-[#121212]/10 pt-6 dark:border-white/12">
                <SectionKicker>SHARE ARTICLE</SectionKicker>
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="mt-4 inline-flex min-h-[42px] items-center gap-2 border border-[#121212]/15 bg-white px-4 font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-[#121212] transition-colors hover:border-[#FF6044] hover:text-[#FF6044] dark:border-white/15 dark:bg-[#181818] dark:text-white cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-[#3DB15E]" strokeWidth={2} aria-hidden="true" />
                      <span>LINK COPIED</span>
                    </>
                  ) : (
                    <>
                      <Link2 className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden="true" />
                      <span>COPY ARTICLE URL</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </aside>

          {/* Right Long-Form Reading Column */}
          <article className="bg-white p-6 sm:p-10 lg:col-span-8 lg:p-12 dark:bg-[#161616]">
            <div className="max-w-[68ch] space-y-12">
              {article.sections.map((section, sectionIndex) => (
                <section key={section.id} id={section.id} className="scroll-mt-24 space-y-5">
                  <h2 className="font-sans text-2xl font-extrabold uppercase tracking-[-0.03em] sm:text-3xl">
                    {section.heading}
                  </h2>

                  {section.paragraphs.map((paragraph, pIdx) => (
                    <p
                      key={paragraph.slice(0, 24)}
                      className={cn(
                        "text-base leading-[1.78] text-[#121212]/80 dark:text-white/80",
                        sectionIndex === 0 && pIdx === 0 && "editorial-dropcap"
                      )}
                    >
                      {paragraph}
                    </p>
                  ))}

                  {section.pullQuote ? (
                    <blockquote className="my-8 border-y border-[#121212]/15 bg-[#F7F5F2] p-6 sm:p-8 dark:border-white/15 dark:bg-[#111111]">
                      <p className="font-sans text-xl font-bold leading-[1.45] tracking-[-0.02em] text-[#121212] dark:text-white">
                        “{section.pullQuote}”
                      </p>
                    </blockquote>
                  ) : null}

                  {section.codeSnippet ? (
                    <div className="my-6 overflow-x-auto border border-[#121212]/15 bg-[#111111] text-white dark:border-white/15">
                      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.1em] text-white/55">
                        <span>{section.codeSnippet.language}</span>
                        <span>CLIENT RUNTIME</span>
                      </div>
                      <pre className="p-5 font-mono text-xs leading-[1.7] text-white/90 sm:text-[13px]">
                        <code>{section.codeSnippet.code}</code>
                      </pre>
                    </div>
                  ) : null}
                </section>
              ))}
            </div>
          </article>
        </div>
      </section>

      {/* Related Articles */}
      <section className="border-b border-[#121212]/10 dark:border-white/12">
        <div className="mx-auto max-w-[1440px]">
          <div className="border-b border-[#121212]/10 p-6 sm:p-10 lg:p-12 dark:border-white/12">
            <SectionKicker>CONTINUE READING</SectionKicker>
            <h2 className="mt-3 font-sans text-2xl font-extrabold uppercase tracking-[-0.03em] sm:text-4xl">
              RELATED STORIES.
            </h2>
          </div>

          <div className="grid grid-cols-1 divide-y divide-[#121212]/10 md:grid-cols-3 md:divide-x md:divide-y-0 dark:divide-white/12">
            {related.map((item) => (
              <article
                key={item.slug}
                className="group flex flex-col justify-between p-6 transition-colors hover:bg-white sm:p-8 dark:hover:bg-[#161616]"
              >
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.09em] text-[#121212]/60 dark:text-white/60">
                    <span className="text-[#FF6044]">{item.category}</span> · {item.date}
                  </p>
                  <h3 className="mt-3 font-sans text-lg font-extrabold leading-[1.25] tracking-[-0.02em]">
                    <Link
                      to={`/blog/${item.slug}`}
                      className="transition-colors hover:text-[#FF6044]"
                    >
                      {item.title}
                    </Link>
                  </h3>
                  <p className="mt-2.5 text-sm leading-[1.6] text-[#121212]/65 dark:text-white/65">
                    {item.excerpt}
                  </p>
                </div>

                <Link
                  to={`/blog/${item.slug}`}
                  className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.09em] text-[#121212] transition-colors hover:text-[#FF6044] dark:text-white"
                >
                  <span>READ ARTICLE</span>
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
