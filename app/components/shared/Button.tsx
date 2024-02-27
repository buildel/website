import { PropsWithChildren, ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  mode: "light" | "dark";
}

export const Button = ({
  children,
  variant = "primary",
  mode,
  className,
  ...restProps
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      className={twMerge(
        clsx(`px-6 py-3 rounded-lg bg-black text-white ${className}`, {
          "bg-white text-black": mode === "light",
          "bg-transparent border border-black text-black hover:bg-black hover:text-white transition-colors":
            mode === "dark" && variant === "secondary",
          "bg-black text-white": mode === "dark" && variant === "primary",
        })
      )}
      {...restProps}
    >
      {children}
    </button>
  );
};
