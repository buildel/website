import { PropsWithChildren, ReactNode } from "react";
import clsx from "clsx";

interface TabProps {
  icon?: ReactNode;
  active: boolean;
  className?: string;
  gradientText?: boolean;
  onClick: () => void;
  mode: "light" | "dark";
}
export const Tab = ({
  icon,
  children,
  active,
  className,
  gradientText,
  mode,
  onClick,
}: PropsWithChildren<TabProps>) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "flex items-center justify-center gap-x-2 rounded-full py-1.5 px-3 text-md",
        className,
        {
          "text-neutral-950": !active && mode === "light",
          "bg-white text-neutral-950 font-bold": active && mode === "light",

          "text-white": !active && mode === "dark",
          "bg-dark-background": active && mode === "dark",
        }
      )}
    >
      {icon}{" "}
      <span
        className={clsx("whitespace-nowrap block font-normal", {
          "bg-gradient-to-br from-[#3E43BA] to-[#D0D1F5] text-transparent bg-clip-text":
            active && gradientText,
        })}
      >
        {children}
      </span>
    </button>
  );
};
