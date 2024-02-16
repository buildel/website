import React from "react";
import { Logo } from "~/icons/Logo";
import { Navigation } from "~/components/layout/Navigation";
import { Button } from "~/components/buttons/Button";

export const Header: React.FC = () => {
  return (
    <header className="flex gap-4 justify-between items-center">
      <Logo className="h-[24px]" />

      <div className="flex items-center gap-6">
        <Navigation />

        <a href="https://app.buildel.ai/register">
          <Button variant="basic" type="filled" className="!py-1" tabIndex={-1}>
            Sign up
          </Button>
        </a>
      </div>
    </header>
  );
};
