import React from "react";
import { NavLink, NavLinkProps } from "@remix-run/react";
import clsx from "clsx";
interface NavigationProps {}

export const Navigation: React.FC<NavigationProps> = () => {
  return (
    <nav>
      <ul className="flex items-center gap-3">
        <li>
          <NavigationLink to="#">Documentation</NavigationLink>
        </li>
        <li>
          <NavigationLink to="#">Pricing</NavigationLink>
        </li>
      </ul>
    </nav>
  );
};

export const NavigationLink = ({ className, ...rest }: NavLinkProps) => {
  return (
    <NavLink
      className={clsx(
        "text-white transition hover:text-neutral-100",
        className
      )}
      {...rest}
    />
  );
};
