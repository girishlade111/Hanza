import React from "react";
import { motion } from "framer-motion";
import { pageTransition } from "../lib/animations";
import { SectionKicker } from "../components/ui/SectionKicker";
import { ActionButton } from "../components/ui/Button";
import { StickyProfileSidebar } from "../components/layout/StickyProfileSidebar";

export function NotFoundPage() {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <section className="border-b border-[#121212]/10 dark:border-white/12">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 lg:grid-cols-12">
          {/* Left Sticky Profile Sidebar */}
          <div className="border-b border-[#121212]/10 p-6 sm:p-10 lg:col-span-4 lg:border-b-0 lg:border-r lg:p-12 dark:border-white/12">
            <StickyProfileSidebar />
          </div>

          {/* Right Swiss 404 Message */}
          <div className="flex flex-col justify-center bg-white p-6 py-20 sm:p-10 lg:col-span-8 lg:p-16 dark:bg-[#161616]">
            <SectionKicker>404 ERROR</SectionKicker>

            <h1 className="mt-5 font-sans text-5xl font-extrabold uppercase leading-[0.92] tracking-[-0.04em] sm:text-7xl lg:text-[84px]">
              PAGE NOT{" "}
              <span className="italic text-[#121212]/45 dark:text-white/45">
                FOUND.
              </span>
            </h1>

            <p className="mt-6 max-w-xl font-mono text-xs uppercase leading-[1.7] tracking-[0.09em] text-[#121212]/65 dark:text-white/65">
              SOMETHING WENT OFF TRACK. THE ROUTE YOU REQUESTED DOES NOT EXIST OR HAS BEEN MOVED WITHIN THE LADESTACK ARCHIVE.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <ActionButton
                to="/"
                label="GO BACK"
                sublabel="HOME"
                variant="coral-solid"
                size="lg"
              />
              <ActionButton
                to="/portfolio"
                label="BROWSE CASE STUDIES"
                variant="outline"
                size="lg"
              />
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
