import React from "react";
import { Discord } from "~/icons/Discord";

export const CommunitySection: React.FC = () => {
  return (
    <section className="grid gap-4 grid-cols-1 lg:grid-cols-[1fr_300px] items-center">
      <h3 className="text-2xl md:text-4xl">
        <span className="font-bold">Join our growing community.</span> Find
        inspiration, support and connect with other builders.
      </h3>

      <a
        href="https://discord.gg/Yzex6E7e"
        className="lg:ml-auto lg:mr-0 bg-white px-5 py-3 rounded text-dark w-fit flex gap-2 items-center lg:text-xl transition"
      >
        <Discord className="w-6 h-6 lg:w-8 lg:h-8" /> Join on Discord
      </a>
    </section>
  );
};
