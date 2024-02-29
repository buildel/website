import { PropsWithChildren, ReactNode } from "react";
import clsx from "clsx";

interface TabProps {
  icon: ReactNode;
  active: boolean;
  className?: string;
  onClick: () => void;
}
export const Tab = ({
  icon,
  children,
  active,
  className,
  onClick,
}: PropsWithChildren<TabProps>) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "flex items-center justify-center gap-x-2 rounded-full py-1.5 px-3 text-neutral-950 text-md",
        className,
        {
          "bg-white": active,
        }
      )}
    >
      {icon} <span className='whitespace-nowrap block'>{children}</span>
    </button>
  );
};
