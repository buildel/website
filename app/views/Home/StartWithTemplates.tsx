import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "~/components/shared/Button";
import { BasicLink } from "~/components/shared/BasicLink";
import {
  SectionWrapper,
  Section,
  SectionHeading,
} from "~/components/layout/Layout.components";

export function StartWithTemplates() {
  const { scrollYProgress } = useScroll();
  const mdy = useTransform(scrollYProgress, [0, 1], [500, -300]);
  const y = useTransform(scrollYProgress, [0, 1], [400, -200]);
  return (
    <SectionWrapper className="border-b">
      <Section className="border-x bg-primary grid grid-cols-1 md:grid-cols-2 gap-10 overflow-hidden">
        <div className="pt-14 pb-[120px] md:py-20 flex flex-col gap-6">
          <SectionHeading className="text-secondary">
            <span>Start with templates</span>
          </SectionHeading>

          <p className="text-base md:text-lg text-secondary">
            We offers a variety of templates to help you get started with your
            AI projects.
          </p>

          <Button asChild size="lg" className="w-fit" variant="secondary">
            <BasicLink to="https://app.buildel.ai" target="_blank">
              Explore
            </BasicLink>
          </Button>
        </div>

        <div className="relative w-full">
          <motion.img
            alt="templates"
            src="/new/templates.png"
            className="hidden md:block absolute bottom-0 w-[350px] md:w-auto translate-y-2/3 md:translate-y-1/2 rounded-3xl"
            style={{ y: mdy }}
          />

          <motion.img
            alt="templates"
            src="/new/templates.png"
            className="md:hidden absolute bottom-0 w-[350px] md:w-auto translate-y-2/3 md:translate-y-1/2 rounded-3xl"
            style={{ y: y }}
          />
        </div>
      </Section>
    </SectionWrapper>
  );
}
