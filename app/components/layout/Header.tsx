import { NavLink } from "@remix-run/react";
import { Button } from "~/components/shared/Button";
import { GithubLogo } from "~/icons/GithubLogo";
import { DiscordLogo } from "~/icons/DiscordLogo";
import { MobileMenu } from "~/components/shared/MobileMenu";
import { useEffect } from "react";
import { urls } from "~/utils/urls";

const routes = [
  { name: "Product", path: "/product" },
  { name: "Docs", path: "/docs" },
  { name: "Pricing", path: "/pricing" },
];

export const Header = () => {
  const afterScrollClasses = ["border-b", "border-neutral-100", "bg-white"];

  useEffect(() => {
    const toggleHeaderClasses = () => {
      const header = document.querySelector("header");
      if (window.scrollY > 250) {
        afterScrollClasses.forEach((className) =>
          header?.classList.add(className)
        );
      } else {
        afterScrollClasses.forEach((className) =>
          header?.classList.remove(className)
        );
      }
    };

    window.addEventListener("scroll", toggleHeaderClasses);

    return () => {
      window.removeEventListener("scroll", toggleHeaderClasses);
    };
  }, []);

  return (
    <header className="flex items-center justify-center h-20 fixed top-0 z-20 w-full transition-all">
      <div className="flex items-center justify-between layout">
        <div className="flex items-center">
          <img
            src="/buildel-by-elp-logo-black.svg"
            alt="Buildel: built by EL Passion logo"
          />

          <nav className="hidden lg:flex items-center gap-x-10 ml-16">
            {routes.map((route) => (
              <NavLink
                to={route.path}
                key={route.path}
                className="ml-4 text-neutral-950/50 hover:text-neutral-950 transition"
              >
                {route.name}
              </NavLink>
            ))}
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
          <Button mode="dark" className="hidden lg:flex">
            Sign up
          </Button>
        </div>
      </div>
    </header>
  );
};
