import { Variants } from "framer-motion";

export const listing: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delay: 0.1,
      staggerChildren: 0.2,
      ease: "anticipate",
      bounce: 0,
    },
  },
  reveal: {
    opacity: 1,
    transition: {
      delay: 0.1,
      staggerChildren: 0.2,
      ease: "easeInOut",
      bounce: 0,
    },
  },
};

export const listItem: Variants = {
  hidden: {
    opacity: 0,
    y: 120,
    scale: 0.3,
    filter: "blur(8px)",
    originX: 0,
    originY: 1,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.3, type: "tween" },
  },
};
