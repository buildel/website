import { AnimatePresence, motion } from "framer-motion";
import {
  wrapperVariants,
  letterVariants,
} from "~/components/sections/hero/animations";
import { useEffect, useState } from "react";

export const AnimatedWords = ({ words }: { words: string[] }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <span className="sr-only">{words[index]}</span>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial="hide"
          animate="show"
          aria-hidden
          variants={wrapperVariants}
        >
          {words[index].split("").map((letter, idx) => (
            <motion.span
              key={`${letter}-${idx}`}
              className="inline-block gradient-text"
              exit={{ opacity: 0 }}
              variants={letterVariants}
            >
              {letter}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </>
  );
};
