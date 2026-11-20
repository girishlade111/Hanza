import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ASSETS, personalInfo } from "../../content/profile";
import { ActionButton } from "../ui/Button";
import { ThemeToggle } from "../ui/ThemeToggle";
import { EditorialImage } from "../ui/EditorialImage";
import { cn } from "../../lib/utils";

interface HeaderProps {
  onOpenMenu: () => void;
  isMenuOpen: boolean;
}

const TOP_NAV_LINKS = [
  { label: "Portfolio", to: "/portfolio" },
  { label: "About", to: "/about" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

export function Header({ onOpenMenu, isMenuOpen }: HeaderProps) {
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-40 h-16 border-b border-[#121212]/10 bg-[#F7F5F2]/95 backdrop-blur-md transition-colors dark:border-white/12 dark:bg-[#111111]/95">
      <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between gap-2 px-3 sm:gap-4 sm:px-6 lg:px-8">
        {/* Left Zone: :: MENU trigger + LADESTACK® wordmark */}
        <div className="flex items-center gap-2.5 sm:gap-6 shrink-0">
          <button
            type="button"
            onClick={onOpenMenu}
            aria-expanded={isMenuOpen}
            aria-controls="site-menu-drawer"
            aria-label="Open navigation menu"
            className="group inline-flex min-h-[40px] items-center gap-1.5 sm:gap-2.5 border border-[#121212]/15 bg-white px-2.5 sm:px-3.5 font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.08em] sm:tracking-[0.1em] text-[#121212] transition-colors hover:border-[#FF6044] hover:text-[#FF6044] dark:border-white/15 dark:bg-[#181818] dark:text-white dark:hover:border-[#FF6044] dark:hover:text-[#FF6044] cursor-pointer whitespace-nowrap shrink-0"
          >
            {/* 4-dot diamond icon */}
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="currentColor"
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:rotate-45"
            >
              <circle cx="6" cy="2" r="1.35" />
              <circle cx="10" cy="6" r="1.35" />
              <circle cx="6" cy="10" r="1.35" />
              <circle cx="2" cy="6" r="1.35" />
            </svg>
            <span>MENU</span>
          </button>

          <Link
            to="/"
            className="font-sans text-[15px] font-extrabold tracking-[-0.04em] text-[#121212] transition-colors hover:text-[#FF6044] sm:text-xl dark:text-white dark:hover:text-[#FF6044] whitespace-nowrap shrink-0"
          >
            {personalInfo.brandName}
          </Link>
        </div>

        {/* Center Zone: Clean single-line editorial nav links */}
        <nav
          aria-label="Primary navigation"
          className="hidden lg:flex items-center gap-7"
        >
          {TOP_NAV_LINKS.map((link) => {
            const active =
              pathname === link.to || pathname.startsWith(`${link.to}/`);
            return (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "relative py-1 font-mono text-[11px] font-medium uppercase tracking-[0.09em] transition-colors whitespace-nowrap shrink-0",
                  active
                    ? "text-[#FF6044]"
                    : "text-[#121212]/70 hover:text-[#121212] dark:text-white/70 dark:hover:text-white"
                )}
              >
                {link.label}
                {active ? (
                  <span
                    className="absolute inset-x-0 -bottom-0.5 h-[1.5px] bg-[#FF6044]"
                    aria-hidden="true"
                  />
                ) : null}
              </Link>
            );
          })}
        </nav>

        {/* Right Zone: Theme Toggle + Portrait Avatar + Primary CTA */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <ThemeToggle />

          <Link
            to="/about"
            aria-label="About Girish Lade"
            className="hidden sm:block h-10 w-10 shrink-0 overflow-hidden border border-[#121212]/15 transition-colors hover:border-[#FF6044] dark:border-white/15"
          >
            <EditorialImage
              src={ASSETS.authorPortrait}
              alt={personalInfo.displayName}
              containerClassName="h-full w-full"
              className="scale-[1.08]"
              priority
            />
          </Link>

          <ActionButton
            to="/contact"
            label="START PROJECT"
            size="sm"
            className="hidden md:inline-flex"
          />
          <ActionButton
            to="/contact"
            label="HIRE"
            size="sm"
            className="inline-flex md:hidden"
            ariaLabel="Start a project or contact Girish Lade"
          />
        </div>
      </div>
    </header>
  );
}
