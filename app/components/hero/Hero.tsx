import React, { PropsWithChildren } from "react";
import { Link } from "@remix-run/react";
import { Button } from "~/components/buttons/Button";
interface HeroProps {}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:items-center">
      <div className="flex flex-col gap-4 lg:gap-8">
        <p>
          Buildel 1.2 is now available! <Link to="#">Learn more</Link>
        </p>
        <h1 className="text-4xl md:text-6xl">
          AI Automation for{" "}
          <span className="text-secondary-500">Everybody</span>
        </h1>
        <h2 className="md:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
          consequuntur non repellat soluta, totam voluptatem?
        </h2>

        <div className="flex gap-3 lg:gap-4">
          <Button>Start building</Button>
          <Button variant="ghost">Book A Demo</Button>
        </div>
      </div>

      <div className="min-h-[40vh]">Animation here</div>
    </section>
  );
};
