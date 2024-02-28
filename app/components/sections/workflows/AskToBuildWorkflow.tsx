import { Button } from "~/components/shared/Button";

export const AskToBuildWorkflow = () => (
  <section className="flex items-center bg-grey-background pb-20">
    <div className="layout flex flex-col-reverse lg:flex-row items-center justify-between mt-11 lg:mt-0">
      <div className="flex flex-col w-full lg:w-1/3 mt-8 lg:mt-0">
        <h2 className="h2-mobile lg:h2-desktop text-neutral-950">
          Ask <span className="gradient-text">EL</span> to build a workflow for
          you
        </h2>
        <p className="mt-4 mb-6 text-neutral-800">
          You can use EL to build sophisticated workflows that fulfill all your
          needs. No need to write code, just ask EL to do it for you.
        </p>
        <Button mode="dark" className="w-max">
          Book a demo
        </Button>
      </div>

      <img
        src="/assets/views/ask-el.png"
        className="w-full lg:w-auto lg:h-[400px] lg:mr-14"
        alt="ask el view"
      />
    </div>
  </section>
);
