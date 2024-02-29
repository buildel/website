import { PropsWithChildren, ReactNode } from "react";
import clsx from "clsx";

interface TabProps {
  icon?: ReactNode;
  active: boolean;
  className?: string;
  gradientText?: boolean;
  onClick: () => void;
}
export const Tab = ({
  icon,
  children,
  active,
  className,
  gradientText,
  onClick,
}: PropsWithChildren<TabProps>) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "flex items-center justify-center gap-x-2 rounded-full py-1.5 px-3 text-neutral-950 text-md",
        className,
        {
          "bg-white font-primaryBold": active,
        }
      )}
    >
      {icon}{" "}
      <span
        className={clsx("whitespace-nowrap block font-primaryMedium", {
          "bg-gradient-to-br from-[#3E43BA] to-[#D0D1F5] text-transparent bg-clip-text":
            active && gradientText,
        })}
      >
        {children}
      </span>
    </button>
  );
};
