import React from "react";
import { IconProps } from "~/icons/icons.types";

export const Logo: React.FC<IconProps> = ({ className }) => {
  return <img src="./logo.svg" className={className} />;
};
