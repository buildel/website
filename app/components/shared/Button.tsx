import { PropsWithChildren, ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  mode: "light" | "dark";
  href?: string;
}

export const Button = ({
  children,
  variant = "primary",
  mode,
  className,
  href,
  ...restProps
}: PropsWithChildren<ButtonProps>) => {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={twMerge(
          clsx(
            `font-primaryBold px-6 py-3 rounded-lg bg-black text-white ${className}`,
            {
              "bg-white text-black": mode === "light",
              "bg-transparent border border-black text-black hover:bg-black hover:text-white transition-colors hover:-translate-y-1":
                mode === "dark" && variant === "secondary",
              "bg-black text-white transition-all hover:-translate-y-1 hover:drop-shadow-2xl":
                mode === "dark" && variant === "primary",
            }
          )
        )}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={twMerge(
        clsx(
          `font-primaryBold px-6 py-3 rounded-lg bg-black text-white ${className}`,
          {
            "bg-white text-black": mode === "light",
            "bg-transparent border border-black text-black hover:bg-black hover:text-white transition-colors hover:-translate-y-1":
              mode === "dark" && variant === "secondary",
            "bg-black text-white transition-all hover:-translate-y-1 hover:drop-shadow-2xl":
              mode === "dark" && variant === "primary",
          }
        )
      )}
      {...restProps}
    >
      {children}
    </button>
  );
};
