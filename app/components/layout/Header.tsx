import { NavLink } from "@remix-run/react";
import { Button } from "~/components/shared/Button";
import { GithubLogo } from "~/icons/GithubLogo";
import { DiscordLogo } from "~/icons/DiscordLogo";
import { MobileMenu } from "~/components/shared/MobileMenu";
import { useEffect, useRef } from "react";
import { urls, routes } from "~/utils/urls";
import { BasicLink } from "~/components/shared/BasicLink";

export const Header = () => {
  const afterScrollClasses = ["bg-white"];
  const hasRendered = useRef(false);

  useEffect(() => {
    const toggleHeaderClasses = () => {
      const header = document.querySelector("header");
      if (window.scrollY > 50) {
        afterScrollClasses.forEach((className) =>
          header?.classList.add(className)
        );
      } else {
        afterScrollClasses.forEach((className) =>
          header?.classList.remove(className)
        );
      }
    };

    if (!hasRendered.current) {
      toggleHeaderClasses();
      hasRendered.current = true;
    }

    window.addEventListener("scroll", toggleHeaderClasses);

    return () => {
      window.removeEventListener("scroll", toggleHeaderClasses);
    };
  }, []);

  return (
    <header className="flex items-center justify-center fixed top-0 z-20 w-full transition-all border-b h-[64px]">
      <div className="flex items-center justify-between layout border-x h-full py-2">
        <div className="flex items-center gap-10">
          <a href="/" className="flex items-center">
            <img
              src="/buildel-by-elp-logo-black.svg"
              alt="BuildEL: built by EL Passion logo"
              className="h-10"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-10">
            {routes.map((route) => {
              if (route.external) {
                return (
                  <a
                    key={route.path}
                    href={route.path}
                    rel="noreferrer"
                    target="_blank"
                    className="text-neutral-950/70 hover:text-neutral-950 transition text-sm"
                  >
                    {route.name}
                  </a>
                );
              }
              return (
                <NavLink
                  to={route.path}
                  key={route.path}
                  className="text-neutral-950/70 hover:text-neutral-950 transition text-sm"
                >
                  {route.name}
                </NavLink>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-x-5">
          <a
            href={urls.githubRepo}
            target="_blank"
            rel="noreferrer"
            className="h-8 w-8 hidden lg:flex justify-center items-center"
          >
            <GithubLogo className="text-2xl text-neutral-950/50 hover:text-neutral-950" />
          </a>

          <a
            href={urls.discordServer}
            target="_blank"
            rel="noreferrer"
            className="h-8 w-8 hidden lg:flex justify-center items-center"
          >
            <DiscordLogo className="text-2xl text-neutral-950/50 hover:text-neutral-950" />
          </a>

          <MobileMenu />

          <Button className="hidden lg:flex" asChild size="sm">
            <BasicLink to={urls.registerBuildel} target="_blank">
              Sign up
            </BasicLink>
          </Button>
        </div>
      </div>
    </header>
  );
};
