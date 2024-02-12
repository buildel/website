import React, { PropsWithChildren } from "react";

export const Header: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <header className="flex justify-between items-center">{children}</header>
  );
};
