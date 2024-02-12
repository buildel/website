import React, { PropsWithChildren } from "react";
import { Link } from "@remix-run/react";
import { Button } from "~/components/buttons/Button";
interface HeroProps {}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="relative z-10 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:items-center">
      <div className="flex flex-col gap-4 lg:gap-8">
        <p>
          Buildel 1.2 is now available! <Link to="#">Learn more</Link>
        </p>
        <h1 className="text-5xl md:text-7xl">
          AI Automation for{" "}
          <span className="text-secondary-500">Everybody</span>
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
