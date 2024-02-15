import React from "react";
import { Logo } from "~/icons/Logo";
import { Discord } from "~/icons/Discord";

export const Footer: React.FC = () => {
  return (
    <footer>
      <Logo className="w-[80px] text-neutral-100" />

      <p className="text-xs mt-2 max-w-[400px] text-neutral-200">
        Boost Efficiency & Automate Tasks: Build Your AI Dream Team in Minutes
        without Writing a Line of Code
      </p>

      <a
        href="https://discord.gg/Yzex6E7e"
        target="_blank "
        className="text-neutral-200 hover:text-neutral-100"
      >
        <Discord className="w-5 h-5 mt-3" />
      </a>
    </footer>
  );
};
