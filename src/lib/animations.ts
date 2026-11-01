import { Variants } from "framer-motion";

export const cinematicEase = [0.22, 1, 0.36, 1] as const;

export const fadeInWordVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export const containerStaggerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

export const cardStaggerVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const slowZoomVariants: Variants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.07,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};
