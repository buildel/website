import { IconProps } from "~/icons/icons.types";
import { motion } from "framer-motion";

export const BurgerMenu = ({ className }: IconProps) => (
  <motion.svg
    className={className}
    width="1em"
    height="1em"
    viewBox="0 0 17 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_417_948)">
      <motion.path
        d="M15.0765 2.69284H1.27795"
        stroke="currentColor"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.2 }}
        strokeWidth="1.14"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <motion.path
        d="M15.0765 8H1.27795"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 0.2, duration: 0.1 }}
        stroke="currentColor"
        strokeWidth="1.14"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <motion.path
        d="M15.0765 13.3071H1.27795"
        stroke="currentColor"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 0.3, duration: 0.1 }}
        strokeWidth="1.14"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_417_948">
        <rect
          width="16"
          height="16"
          fill="white"
          transform="translate(0.177246)"
        />
      </clipPath>
    </defs>
  </motion.svg>
);
