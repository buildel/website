import { motion } from "framer-motion";

export const AnimatedX = () => (
  <motion.svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="none"
    initial="hidden"
    animate="visible"
    xmlns="http://www.w3.org/2000/svg"
  >
    <motion.path
      d="M13.8378 2.16214L2.16211 13.8379"
      stroke="currentColor"
      strokeWidth="1.14"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    />
    <motion.path
      d="M2.16211 2.16214L13.8378 13.8379"
      stroke="currentColor"
      strokeWidth="1.14"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ delay: 0.3, duration: 0.3 }}
    />
  </motion.svg>
);
