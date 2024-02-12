import React from "react";
interface NavigationProps {}

export const Navigation: React.FC<NavigationProps> = () => {
  return (
    <nav>
      <ul className="flex items-center gap-3">
        <li>
          <button>Sign in</button>
        </li>
        <li>
          <button>Sign up</button>
        </li>
      </ul>
    </nav>
  );
};
