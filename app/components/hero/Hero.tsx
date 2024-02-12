import React, { PropsWithChildren } from "react";
import { Link } from "@remix-run/react";
import { Button } from "~/components/buttons/Button";
import { HeroAnimatedWord } from "~/components/hero/HeroAnimatedWord";
interface HeroProps {}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="relative z-10 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:items-center">
      <div className="flex flex-col gap-4 lg:gap-8">
        <p className="text-sm flex gap-1 items-center">
          <span className="px-2 py-0.5 rounded-full bg-secondary-300 text-secondary-900">
            New!
          </span>
          <Link to="#" className="hover:underline">
            Buildel 1.2
          </Link>
        </p>
        <h1 className="text-5xl md:text-7xl">
          AI Automation for{" "}
          <HeroAnimatedWord
            words={["Everybody", "Technical People", "Marketers", "You"]}
          />
          {/*<span className="text-secondary-500">Everybody</span>*/}
        </h1>

        <h2 className="md:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
          consequuntur non repellat soluta, totam voluptatem?
        </h2>

        <div className="flex gap-3 lg:gap-4">
          <Button>Start building</Button>
          <Button type="outlined">Book A Demo</Button>
        </div>
      </div>

      <div className="min-h-[40vh] flex justify-center items-center">
        Animation here
      </div>
    </section>
  );
};
