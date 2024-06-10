import { Button } from "~/components/shared/Button";
import { AnimatePresence, motion } from "framer-motion";
import {
  wrapperVariants,
  letterVariants,
} from "~/components/sections/hero/animations";
import { useEffect, useState } from "react";
import clsx from "clsx";

export const Hero = () => {
  return (
    <HeroContainer>
      <HeroHeader>
        AI Automation for <br />
        <AnimatedWords
          words={["everybody", "sales", "engineers", "marketeers", "you"]}
        />
      </HeroHeader>

      <HeroSubheader>
        Boost Efficiency & Automate Tasks: Build Your AI Dream Team in Minutes
        without Writing a Line of Code
      </HeroSubheader>
      <div className="flex items-center gap-x-4 mt-10">
        <Button mode="dark" externalHref="https://app.buildel.ai/register">
          Start building ✨
        </Button>
        <Button
          mode="dark"
          variant="secondary"
          externalHref="https://forms.gle/ZYJKCNuX4XySTdMz7"
        >
          Book a demo
        </Button>
      </div>
    </HeroContainer>
  );
};

export const HeroContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section
      className={clsx(
        "bg-white max-h-[600px] h-[40vh] md:max-h-[800px] md:h-[75vh] w-full relative",
        className
      )}
      id="hero"
    >
      <div className="w-full flex items-center h-full layout pt-24">
        <div className="relative z-10 flex flex-col w-full items-start lg:items-center">
          {children}
        </div>
      </div>
      <div className="hidden lg:block bg-accent-blue rounded-full absolute w-[530px] h-[530px] z-[2] -top-1/3 right-0 blur-accent" />
      <img
        src="/dots-constellation.png"
        className="object-cover absolute h-full w-full top-0 z-0"
        alt=""
      />
    </section>
  );
};

export const HeroHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="h1-mobile lg:h1-desktop text-neutral-950 text-left lg:text-center leading-tight">
      {children}
    </h1>
  );
};

export const HeroPreHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="text-neutral-800 max-w-[570px] w-full mb-5 font-secondary text-base lg:text-lg text-left lg:text-center">
      {children}
    </p>
  );
};

export const HeroSubheader = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="text-neutral-800 max-w-[570px] w-full mt-5 font-secondary text-base lg:text-lg text-left lg:text-center">
      {children}
    </p>
  );
};

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
