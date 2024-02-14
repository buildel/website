import React from "react";
import { Link } from "@remix-run/react";
import { Button } from "~/components/buttons/Button";
import { HeroAnimatedWord } from "~/components/hero/HeroAnimatedWord";
import { ArrowRight } from "~/icons/ArrowRight";
interface HeroProps {}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="relative z-10 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:items-center">
      <div className="flex flex-col gap-4 lg:gap-8">
        <p className="text-sm flex gap-1 items-center">
          <Link
            to="https://app.buildel.ai"
            className="flex gap-2 items-center group"
          >
            <span className="px-2 py-0.5 rounded-full bg-secondary-300 text-secondary-900">
              New!
            </span>
            <span className="group-hover:underline">Try Buildel Beta</span>
          </Link>
        </p>

        <h1 className="text-5xl md:text-7xl">
          AI Automation for{" "}
          <HeroAnimatedWord
            words={["Everybody", "Sales", "Engineers", "Marketeers", "You"]}
          />
        </h1>

        <h2 className="md:text-xl">
          Boost Efficiency & Automate Tasks: Build Your AI Dream Team in Minutes
          without Writing a Line of Code
        </h2>

        <div className="flex gap-3 lg:gap-4">
          <a href="https://app.buildel.ai">
            <Button className="group flex gap-1 items-center" tabIndex={-1}>
              <div>Start building</div>

              <ArrowRight className="w-5 h-5 group-hover:translate-x-[3px] transition " />
            </Button>
          </a>
          <a href="https://forms.gle/ZYJKCNuX4XySTdMz7">
            <Button tabIndex={-1} type="outlined">
              Book A Demo
            </Button>
          </a>
        </div>
      </div>
      {/* 
      <div className="min-h-[40vh] flex justify-center items-center">
        Animation here
      </div> */}
    </section>
  );
};
