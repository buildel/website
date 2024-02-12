import React from "react";
import { NavLink, NavLinkProps } from "@remix-run/react";
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

export const NavigationLink = (props: NavLinkProps) => {
  return <NavLink to="#" {...props} />;
};
