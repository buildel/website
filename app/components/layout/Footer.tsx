import { DiscordLogo } from "~/icons/DiscordLogo";
import { GithubLogo } from "~/icons/GithubLogo";
import { urls } from "~/utils/urls";
import { NavLink } from "@remix-run/react";

const sitemap = [
  {
    groupName: "Product",
    links: [
      { label: "How it works", href: "/new" },
      { label: "About us", href: "/new" },
    ],
  },
  {
    groupName: "Resources",
    links: [
      { label: "Documentation", href: "/new" },
      { label: "Changelog", href: "/new" },
      { label: "Privacy Policy", href: "/new" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="flex w-full py-10 bg-dark-background border-t border-neutral-950">
      <div className="layout w-full flex flex-col lg:flex-row justify-between">
        <div className="flex justify-between lg:flex-col w-full lg:w-1/2 items-start">
          <img
            src="/buildel-by-elp-logo-white.svg"
            className="h-11"
            alt="buildel logo"
          />

          <div className="flex items-center lg:mt-8 gap-x-5 text-neutral-800">
            <a href={urls.discordServer} target="_blank" rel="noreferrer">
              <DiscordLogo className="text-2xl" />
            </a>
            <a href={urls.githubRepo} target="_blank" rel="noreferrer">
              <GithubLogo className="text-2xl" />
            </a>
          </div>
        </div>

        <div className="w-full flex gap-x-20 mt-12 lg:mt-0">
          {sitemap.map((item) => (
            <div key={item.groupName}>
              <p>{item.groupName}</p>
              <ul className="mt-3 flex flex-col">
                {item.links.map((link) => (
                  <li key={link.label} className='mt-2'>
                    <NavLink to={link.href} className='text-neutral-400 hover:text-neutral-100'>{link.label}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};
