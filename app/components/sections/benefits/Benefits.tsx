import { Grid } from "~/icons/Grid";
import { Benefit, IBenefit } from "~/components/sections/benefits/Benefit";
import { UserGroup } from "~/icons/UserGroup";
import { Keys } from "~/icons/Keys";
import { Shapes } from "~/icons/Shapes";
import { Puzzle } from "~/icons/Puzzle";
import { SupportedProviders } from "~/components/sections/benefits/SupportedProviders";
import { Button } from "~/components/shared/Button";
import { motion } from "framer-motion";

const benefits: IBenefit[] = [
  {
    icon: <Puzzle className="text-2xl" />,
    title: "No code required",
    description:
      "You <span class='font-bold'>don't need to write a single line of code.</span> Just pick and connect the blocks and you are good to go",
  },
  {
    icon: <Grid className="text-2xl" />,
    title: "Pre-built use-cases",
    description:
      "We have pre-built use cases that you can use to <span class='font-bold'>get started quickly</span>",
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
      "Buildel is open source. You can <span class='font-bold'>host it for free</span> on your own and contribute to it",
  },
  {
    icon: <Shapes className="text-2xl" />,
    title: "Different interfaces",
    description:
      "You can build <span class='font-bold'>different interfaces for the same workflow.</span> Use chat, api, or any other interface",
  },
];

const content = {
  title: 'From <span class="gradient-text">idea</span> to production',
  subtitle:
    "Whether crafting a basic application or architecting an advanced AI-driven solution, Buildel supports your development journey at every step",
  cta: { label: "Start building ✨", href: "https://app.buildel.ai/register" },
};

export const Benefits = () => {
  return (
    <section className="relative">
      <div className="layout flex flex-col items-start lg:items-center justify-center pt-20 pb-10">
        <h2
          className="h2-mobile lg:h2-desktop text-neutral-950 z-[1]"
          dangerouslySetInnerHTML={{ __html: content.title }}
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-neutral-800 w-full lg:w-2/3 text-left lg:text-center mt-4 z-[1]"
        >
          {content.subtitle}
        </motion.p>

        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                ease: "easeInOut",
                bounce: 0,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-11 gap-5 z-[1]"
        >
          {benefits.map((benefit, index) => (
            <Benefit key={index} benefit={benefit} />
          ))}
        </motion.ul>

        <SupportedProviders />

        <Button
          mode="dark"
          externalHref={content.cta.href}
          className="mt-7 lg:mt-11 w-full flex justify-center lg:w-max"
        >
          {content.cta.label}
        </Button>
      </div>

      <img
        src="/assets/dots-constellation-1.svg"
        className="absolute top-0 left-0 object-cover w-full h-1/5 lg:h-auto"
        alt="dots constellation"
      />
    </section>
  );
};
