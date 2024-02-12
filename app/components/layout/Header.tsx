import React, { PropsWithChildren } from "react";

export const Header: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <header className="px-4 py-4 flex justify-between items-center md:px-6">
      {children}
    </header>
  );
};
