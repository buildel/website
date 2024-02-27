import { Header } from "~/components/layout/Header";
import { Button } from "~/components/shared/Button";

export const buttons = {
  main: {
    label: "Start building ✨",
  },
  second: {
    label: "Book a demo",
  },
};

export const Hero = () => {
  return (
    <section className="bg-white h-[90vh] w-full relative overflow-hidden">
      <Header />

      <div className="w-full flex items-center h-3/4 layout mx-auto">
        <div className="text-black relative z-10 flex flex-col w-full lg:w-1/2">
          <h1 className="h1-mobile lg:h1-desktop text-neutral-950">
            AI Automation
            <br /> for{" "}
            <span className="bg-gradient-to-b from-brand-blue-900 to-brand-blue-100 text-transparent bg-clip-text">
              everybody
            </span>
          </h1>

          <p className="text-neutral-800 max-w-[505px] w-full mt-5">
            Boost Efficiency & Automate Tasks: Build Your AI Dream Team in
            Minutes without Writing a Line of Code
          </p>
          <div className="flex items-center gap-x-4 mt-10">
            <Button mode="dark">{buttons.main.label}</Button>
            <Button mode="dark" variant="secondary">
              {buttons.second.label}
            </Button>
          </div>
        </div>
      </div>

      <div className="hidden lg:block bg-accent-blue rounded-full absolute w-[530px] h-[530px] top-0 right-0 blur-accent" />
      <img
        src="./dots-constellation.png"
        className="object-cover absolute h-full w-full top-0 z-0"
        alt=""
      />
    </section>
  );
};
