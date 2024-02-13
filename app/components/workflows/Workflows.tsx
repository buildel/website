import React from "react";

import {
  WorkflowsAnimatedList,
  WorkflowsAnimatedMobileList,
} from "~/components/workflows/AnimatedList";
import { Button } from "~/components/buttons/Button";

const data = [
  {
    id: 0,
    heading: "Lorem ipsum dolor sit amet.",
    paragraph: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          assumenda aut autem consequuntur debitis dignissimos distinctio dolore
          dolorum est in inventore, ipsam necessitatibus, nesciunt officiis
          pariatur placeat reiciendis, ut vel.`,
    src: "#",
  },
  {
    id: 1,
    heading: "Lorem ipsum sit amet.",
    paragraph: `Debitis dignissimos distinctio dolore
          dolorum est in inventore, ipsam necessitatibus, nesciunt officiis
          pariatur placeat reiciendis, ut vel.`,
    src: "#",
  },
  {
    id: 2,
    heading: "Lorem ipsum dolor sit amet dolor sit amet.",
    paragraph: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          assumenda aut autem consequuntur debitis dignissimos distinctio dolore
          dolorum est in inventore, ipsam.`,
    src: "#",
  },
];

export const Workflows: React.FC = () => {
  return (
    <section>
      <header className="text-center mb-10 lg:mb-14">
        <h2 className="text-3xl md:text-5xl mb-2">Some of what's possible</h2>
        <p className="text-sm md:text-base max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At fuga
          pariatur repellendus. Ad asperiores beatae facilis id, illo molestiae
          qui.
        </p>
      </header>

      <div className="hidden lg:block">
        <WorkflowsAnimatedList list={data} />
      </div>

      <div className="lg:hidden">
        <WorkflowsAnimatedMobileList list={data} />
      </div>

      <a href="#" className="block w-fit mx-auto mt-10 lg:mt-20">
        <Button tabIndex={-1} variant="basic">
          Learn more
        </Button>
      </a>
    </section>
  );
};
