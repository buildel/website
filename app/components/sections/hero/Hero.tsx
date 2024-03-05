import { Button } from "~/components/shared/Button";
import { AnimatePresence, motion } from "framer-motion";
import {
  wrapperVariants,
  letterVariants,
} from "~/components/sections/hero/animations";
import { useEffect, useState } from "react";

export const buttons = {
  main: {
    label: "Start building ✨",
    href: "https://app.buildel.ai/register",
  },
  second: {
    label: "Book a demo",
    href: "https://forms.gle/ZYJKCNuX4XySTdMz7",
  },
};

const words = ["everybody", "sales", "engineers", "marketeers", "you"];

export const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section
      className="bg-white max-h-[800px] h-[75vh] w-full relative"
      id="hero"
    >
      <div className="w-full flex items-center h-full layout pt-24">
        <div className="relative z-10 flex flex-col w-full items-start lg:items-center">
          <h1 className="h1-mobile lg:h1-desktop text-neutral-950 text-left lg:text-center leading-tight">
            AI Automation for <br />
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
          </h1>

          <p className="text-neutral-800 max-w-[570px] w-full mt-5 font-secondary text-base lg:text-lg text-left lg:text-center">
            Boost Efficiency & Automate Tasks: Build Your AI Dream Team in
            Minutes without Writing a Line of Code
          </p>
          <div className="flex items-center gap-x-4 mt-10">
            <Button mode="dark" externalHref={buttons.main.href}>
              {buttons.main.label}
            </Button>
            <Button
              mode="dark"
              variant="secondary"
              externalHref={buttons.second.href}
            >
              {buttons.second.label}
            </Button>
          </div>
        </div>
      </div>

      <div className="hidden lg:block bg-accent-blue rounded-full absolute w-[530px] h-[530px] z-[2] -top-1/3 right-0 blur-accent" />
      <img
        src="./dots-constellation.png"
        className="object-cover absolute h-full w-full top-0 z-0"
        alt=""
      />
    </section>
  );
};
