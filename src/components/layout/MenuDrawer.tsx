import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import { ASSETS, personalInfo } from "../../content/profile";
import { drawerVariants } from "../../lib/animations";
import { EditorialImage } from "../ui/EditorialImage";
import { SocialLinks } from "../ui/SocialLinks";
import { SectionKicker } from "../ui/SectionKicker";
import { cn } from "../../lib/utils";

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const MENU_ROUTES = [
  { label: "HOME", to: "/", index: "01", previewSlug: "gb-coder" },
  { label: "PORTFOLIO", to: "/portfolio", index: "02", previewSlug: "ls-pdf" },
  { label: "ABOUT", to: "/about", index: "03", previewSlug: "ladestack" },
  { label: "CONTACT", to: "/contact", index: "04", previewSlug: "md2pdf" },
  { label: "BLOG", to: "/blog", index: "05", previewSlug: "bharat-land-converter" },
  { label: "404", to: "/404", index: "06", previewSlug: "gamehub" },
];

export function MenuDrawer({ isOpen, onClose }: MenuDrawerProps) {
  const { pathname } = useLocation();
  const [hoveredSlug, setHoveredSlug] = useState<string>("gb-coder");

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  const featuredCards = [
    personalInfo.projects.find((p) => p.slug === hoveredSlug) ||
      personalInfo.projects[1],
    personalInfo.projects.find(
      (p) => p.slug === (hoveredSlug === "ls-pdf" ? "gb-coder" : "ls-pdf")
    ) || personalInfo.projects[2],
  ];

  return (
    <AnimatePresence>
      {isOpen ? (
        <div
          id="site-menu-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation drawer"
          className="fixed inset-0 z-50 flex"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Sliding Drawer Container */}
          <motion.div
            variants={drawerVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="relative z-10 flex h-full w-full max-w-[1200px] flex-col overflow-y-auto border-r border-[#121212]/10 bg-[#F7F5F2] text-[#121212] dark:border-white/12 dark:bg-[#111111] dark:text-white"
          >
            {/* Top Drawer Bar */}
            <div className="flex h-16 shrink-0 items-center justify-between border-b border-[#121212]/10 px-6 dark:border-white/12">
              <div className="flex items-center gap-4">
                <span className="font-sans text-lg font-extrabold tracking-[-0.04em]">
                  {personalInfo.brandName}
                </span>
                <span className="hidden sm:inline font-mono text-[11px] uppercase tracking-[0.09em] text-[#121212]/55 dark:text-white/55">
                  DIRECTORY / 10 ROUTES
                </span>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close navigation menu"
                className="inline-flex h-10 items-center gap-2 border border-[#121212]/15 bg-white px-3.5 font-mono text-[11px] font-semibold uppercase tracking-[0.09em] text-[#121212] transition-colors hover:border-[#FF6044] hover:bg-[#FF6044] hover:text-white dark:border-white/15 dark:bg-[#181818] dark:text-white dark:hover:border-[#FF6044] dark:hover:bg-[#FF6044] cursor-pointer"
              >
                <span>CLOSE</span>
                <X className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
              </button>
            </div>

            {/* Two-Pane Body */}
            <div className="grid flex-1 grid-cols-1 lg:grid-cols-12">
              {/* Left Pane: Navigation Links + Author Box */}
              <div className="flex flex-col justify-between border-b border-[#121212]/10 lg:col-span-7 lg:border-b-0 lg:border-r dark:border-white/12">
                <nav
                  aria-label="Drawer navigation"
                  className="divide-y divide-[#121212]/10 dark:divide-white/12"
                >
                  {MENU_ROUTES.map((route, idx) => {
                    const isActive =
                      route.to === "/"
                        ? pathname === "/"
                        : pathname === route.to ||
                          pathname.startsWith(`${route.to}/`);
                    return (
                      <motion.div
                        key={route.to}
                        initial={{ opacity: 0, x: -18 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.04 + idx * 0.035,
                          duration: 0.3,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        <Link
                          to={route.to}
                          onClick={onClose}
                          onMouseEnter={() => setHoveredSlug(route.previewSlug)}
                          onFocus={() => setHoveredSlug(route.previewSlug)}
                          className={cn(
                            "group flex items-baseline justify-between px-6 py-3.5 sm:px-8 sm:py-4 transition-colors hover:bg-white dark:hover:bg-[#181818]",
                            isActive && "bg-white dark:bg-[#181818]"
                          )}
                        >
                          <div className="flex items-baseline gap-4">
                            <span className="font-mono text-[11px] font-medium tracking-[0.08em] text-[#FF6044] tabular-nums">
                              {route.index}
                            </span>
                            <span className="relative font-sans text-2xl font-extrabold uppercase tracking-[-0.04em] sm:text-4xl">
                              {route.label}
                              <span
                                className={cn(
                                  "absolute inset-x-0 -bottom-1 h-[2px] origin-left bg-[#FF6044] transition-transform duration-200",
                                  isActive
                                    ? "scale-x-100"
                                    : "scale-x-0 group-hover:scale-x-100"
                                )}
                                aria-hidden="true"
                              />
                            </span>
                          </div>
                          <ArrowUpRight
                            className="h-5 w-5 text-[#121212]/40 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#FF6044] dark:text-white/40"
                            strokeWidth={1.75}
                            aria-hidden="true"
                          />
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>

                {/* Author Bottom Box */}
                <div className="border-t border-[#121212]/10 px-6 py-5 sm:px-8 sm:py-6 dark:border-white/12">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-4">
                      <div className="h-14 w-14 shrink-0 overflow-hidden border-t-2 border-[#FF6044]">
                        <EditorialImage
                          src={ASSETS.authorPortrait}
                          alt={personalInfo.fullName}
                          containerClassName="h-full w-full"
                          className="scale-[1.08]"
                        />
                      </div>
                      <div>
                        <SectionKicker>{personalInfo.displayName}</SectionKicker>
                        <p className="mt-1 font-sans text-sm font-bold uppercase tracking-[-0.01em]">
                          UI/UX DESIGNER & DEVELOPER
                        </p>
                        <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#121212]/60 dark:text-white/60">
                          {personalInfo.shortLocation}
                        </p>
                      </div>
                    </div>
                    <SocialLinks />
                  </div>
                </div>
              </div>

              {/* Right Pane: Desktop Live Hover Preview */}
              <div className="hidden lg:flex lg:col-span-5 flex-col justify-between bg-white p-6 xl:p-7 dark:bg-[#161616]">
                <div>
                  <SectionKicker>FEATURED SHIPPED WORK</SectionKicker>
                  <p className="mt-1.5 text-xs leading-[1.55] text-[#121212]/65 dark:text-white/65">
                    Browser-first developer utilities and editorial web systems built under LadeStack.
                  </p>

                  <div className="mt-4">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={featuredCards[0].slug}
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -6, scale: 0.98 }}
                        transition={{ duration: 0.22 }}
                        className="space-y-4"
                      >
                        {featuredCards.map((project) => (
                          <Link
                            key={project.slug}
                            to={`/portfolio/${project.slug}`}
                            onClick={onClose}
                            className="group block border border-[#121212]/10 bg-[#F7F5F2] transition-colors hover:border-[#FF6044] dark:border-white/12 dark:bg-[#111111]"
                          >
                            <div className="aspect-[16/8.5] overflow-hidden border-b border-[#121212]/10 dark:border-white/12">
                              <EditorialImage
                                src={project.coverImage}
                                alt={project.name}
                                containerClassName="h-full w-full"
                                className="transition-transform duration-500 group-hover:scale-[1.03]"
                              />
                            </div>
                            <div className="flex items-center justify-between px-4 py-3">
                              <div>
                                <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#121212]/60 dark:text-white/60">
                                  {project.category} · {project.year}
                                </p>
                                <p className="mt-0.5 font-sans text-sm font-extrabold uppercase tracking-[-0.02em] group-hover:text-[#FF6044]">
                                  {project.name}
                                </p>
                              </div>
                              <ArrowUpRight
                                className="h-4 w-4 shrink-0 text-[#FF6044]"
                                strokeWidth={1.75}
                                aria-hidden="true"
                              />
                            </div>
                          </Link>
                        ))}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-[#121212]/10 pt-4 font-mono text-[11px] uppercase tracking-[0.08em] text-[#121212]/60 dark:border-white/12 dark:text-white/60">
                  <Link
                    to="/terms"
                    onClick={onClose}
                    className="hover:text-[#FF6044] transition-colors"
                  >
                    TERMS OF SERVICE
                  </Link>
                  <Link
                    to="/privacy"
                    onClick={onClose}
                    className="hover:text-[#FF6044] transition-colors"
                  >
                    PRIVACY POLICY
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
}
