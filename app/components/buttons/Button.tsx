import React, { HTMLAttributes } from "react";
import clsx from "clsx";
interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: "filled" | "ghost";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = "filled",
  ...rest
}) => {
  const variantStyles = () => {
    switch (variant) {
      case "filled":
        return "border-primary-500 bg-primary-500 hover:bg-primary-600 text-white";
      case "ghost":
        return "bg-transparent hover:border-primary-500";
    }
  };

  return (
    <button
      className={clsx(
        "border px-2 py-3 rounded-md transition md:px-6 md:py-3 lg:text-lg",
        variantStyles(),
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
