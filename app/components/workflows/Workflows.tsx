import React from "react";

import { WorkflowsAnimatedList } from "~/components/workflows/AnimatedList";
import { Button } from "~/components/buttons/Button";
interface WorkflowsProps {}

export const Workflows: React.FC<WorkflowsProps> = () => {
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

      <WorkflowsAnimatedList />

      <a href="#" className="mx-auto mt-20">
        Learn more
      </a>
    </section>
  );
};
