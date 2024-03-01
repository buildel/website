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
      ease: "easeOut",
    },
  },
  reveal: {
    opacity: 1,
    transition: {
      delay: 0.1,
      staggerChildren: 0.2,
      ease: "easeOut",
    },
  },
};

export const listItem: Variants = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};
