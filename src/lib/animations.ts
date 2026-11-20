import { Variants, Transition } from "framer-motion";

export const springPhysics: Transition = {
  type: "spring",
  stiffness: 260,
  damping: 26,
  mass: 0.9,
};

export const smoothEase: Transition = {
  duration: 0.55,
  ease: [0.22, 1, 0.36, 1],
};

export const pageTransition: Variants = {
  initial: { opacity: 0, y: 14 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.06 },
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: smoothEase },
};

export const drawerVariants: Variants = {
  closed: {
    x: "-100%",
    transition: { type: "spring", stiffness: 320, damping: 34 },
  },
  open: {
    x: 0,
    transition: { type: "spring", stiffness: 280, damping: 28 },
  },
};

export const accordionVariants: Variants = {
  collapsed: {
    height: 0,
    opacity: 0,
    overflow: "hidden",
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
  expanded: {
    height: "auto",
    opacity: 1,
    overflow: "hidden",
    transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] },
  },
};
