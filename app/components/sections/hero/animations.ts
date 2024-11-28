import { Variants } from "framer-motion";

export const wrapperVariants: Variants = {
  show: {
    transition: {
      bounce: 0,
      duration: 2.5,
      ease: "easeInOut",
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const letterVariants: Variants = {
  hide: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};
