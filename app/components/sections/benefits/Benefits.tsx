import { Grid } from "~/icons/Grid";
import { Benefit, IBenefit } from "~/components/sections/benefits/Benefit";
import { UserGroup } from "~/icons/UserGroup";
import { Keys } from "~/icons/Keys";
import { Shapes } from "~/icons/Shapes";
import { Puzzle } from "~/icons/Puzzle";
import { SupportedProviders } from "~/components/sections/benefits/SupportedProviders";
import { Button } from "~/components/shared/Button";

const benefits: IBenefit[] = [
  {
    icon: <Puzzle className="text-2xl" />,
    title: "No code required",
    description:
      "You don't need to write a single line of code. Just pick and connect the blocks and you are good to go",
  },
  {
    icon: <Grid className="text-2xl" />,
    title: "Pre-built use-cases",
    description:
      "We have pre-built use cases that you can use to get started quickly",
  },
  {
    icon: <Keys className="text-2xl" />,
    title: "Bring your own keys",
    description: "You can use your own API keys for the blocks that need them",
  },
  {
    icon: <UserGroup className="text-2xl" />,
    title: "Open source",
    description:
      "Buildel is open source. You can host it for free on your own and contribute to it",
  },
  {
    icon: <Shapes className="text-2xl" />,
    title: "Different interfaces",
    description:
      "You can build different interfaces for the same workflow. Use chat, api, or any other interface",
  },
];

export const Benefits = () => {
  return (
    <section className="layout flex flex-col items-center justify-center pt-20 pb-10">
      <h2 className="h2-mobile lg:h2-desktop text-neutral-950">
        From <span className="gradient-text">idea</span> to production
      </h2>
      <p className="text-neutral-800 w-full lg:w-2/3 text-left lg:text-center mt-4">
        Whether crafting a basic application or architecting an advanced
        AI-driven solution, Buildel supports your development journey at every
        step
      </p>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-11 gap-5">
        {benefits.map((benefit, index) => (
          <Benefit key={index} benefit={benefit} />
        ))}
      </ul>

      <SupportedProviders />

      <Button mode="dark" className='mt-7 lg:mt-11 w-full lg:w-max'>Start building ✨</Button>
    </section>
  );
};
