import React, { PropsWithChildren } from "react";
import { Link } from "@remix-run/react";
interface HeroProps {}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2">
      <div className="flex flex-col gap-4">
        <p>
          Buildel 1.2 is now available! <Link to="#">Learn more</Link>
        </p>
        <h1 className="text-4xl md:text-6xl">
          AI Automation for <span className="text-orange-400">Everybody</span>
        </h1>
        <h2 className="md:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
          consequuntur non repellat soluta, totam voluptatem?
        </h2>

        <div>
          <button className="bg-primary-500">Start building</button>
          <button>Github</button>
        </div>
      </div>
    </section>
  );
};
