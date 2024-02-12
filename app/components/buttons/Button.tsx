import React, { HTMLAttributes } from "react";
import clsx from "clsx";

type ButtonType = "filled" | "outlined";
type ButtonVariant = "primary" | "basic";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  type?: ButtonType;
  variant?: ButtonVariant;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  type = "filled",
  variant = "primary",
  ...rest
}) => {
  const typeStyles = () => {
    switch (concatVariantAndType(type, variant)) {
      case "primaryFilled":
        return "border-primary-500 bg-primary-500 hover:bg-primary-600 text-white";
      case "basicFilled":
        return "border-white bg-white hover:bg-neutral-50 text-dark";
      case "primaryOutlined":
        return "bg-transparent hover:border-primary-500";
      case "basicOutlined":
        return "bg-transparent hover:border-white text-white";
      default:
        return "";
    }
  };

  return (
    <button
      className={clsx(
        "border px-2 py-3 rounded-md transition md:px-6 lg:text-lg",
        typeStyles(),
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

function concatVariantAndType(type: ButtonType, variant: ButtonVariant) {
  return variant + type.charAt(0).toUpperCase() + type.slice(1);
}
