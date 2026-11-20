import React from "react";
import { motion } from "framer-motion";
import { pageTransition } from "../lib/animations";
import { HeroBanner } from "../components/home/HeroBanner";
import { IntroSection } from "../components/home/IntroSection";
import { CaseStudiesGrid } from "../components/home/CaseStudiesGrid";
import { ServicesAccordion } from "../components/home/ServicesAccordion";
import { PricingTiers } from "../components/home/PricingTiers";
import { Testimonials } from "../components/home/Testimonials";
import { FAQSection } from "../components/home/FAQSection";
import { BlogPreviewSection } from "../components/home/BlogPreviewSection";

export function HomePage() {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <HeroBanner />
      <IntroSection />
      <CaseStudiesGrid />
      <ServicesAccordion />
      <PricingTiers />
      <Testimonials />
      <FAQSection />
      <BlogPreviewSection />
    </motion.div>
  );
}
