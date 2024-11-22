import { useState } from "react";
import { BurgerMenu } from "~/icons/BurgerMenu";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "@remix-run/react";
import { routes, urls } from "~/utils/urls";
import { Button } from "~/components/shared/Button";
import { DiscordLogo } from "~/icons/DiscordLogo";
import { GithubLogo } from "~/icons/GithubLogo";
import { AnimatedX } from "~/icons/animated/AnimatedX";

export const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {!open && (
        <button
          className="lg:hidden px-3 py-2 rounded-full bg-primary flex items-center gap-x-2 text-secondary text-sm"
          onClick={() => setOpen(true)}
        >
          <BurgerMenu className="text-white" /> Menu
        </button>
      )}

      <AnimatePresence>
        {open && <Menu onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </>
  );
};

interface MenuProps {
  onClose: () => void;
}
const Menu = ({ onClose }: MenuProps) => {
  return (
    <motion.div className="absolute left-0 top-0 bg-primary w-full h-auto z-10 flex flex-col text-secondary">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="w-full flex px-4 h-20 justify-end"
      >
        <button
          className="lg:hidden px-3 py-2 rounded-full bg-primary flex items-center gap-x-2"
          onClick={onClose}
        >
          <AnimatedX />
          Close
        </button>
      </motion.div>
      <motion.ul
        className="px-4 flex flex-col"
        initial="hidden"
        animate="show"
        transition={{ bounce: 0 }}
        variants={{
          hidden: {
            opacity: 0,
          },
          show: {
            opacity: 1,
            transition: {
              delay: 0.1,
              staggerChildren: 0.3,
              ease: "easeIn",
            },
          },
        }}
      >
        {routes.map((route) => (
          <motion.li
            key={route.name}
            style={{ originX: 0, originY: 1 }}
            variants={{
              hidden: { opacity: 0, scale: 0 },
              show: { opacity: 1, scale: 1 },
            }}
          >
            <NavLink to={route.path} className="text-2xl">
              {route.name}
            </NavLink>
          </motion.li>
        ))}
      </motion.ul>

      <div className="flex flex-col px-4 pb-4">
        <div className="w-full flex gap-x-3 mb-3 mt-14">
          <a
            href={urls.discordServer}
            className="flex justify-center items-center w-full py-3 border border-neutral-800 rounded-lg focus:border-white"
          >
            <DiscordLogo className="text-2xl" />
          </a>
          <a
            href={urls.githubRepo}
            className="flex justify-center items-center w-full py-3 border border-neutral-800 rounded-lg focus:border-white"
          >
            <GithubLogo className="text-2xl" />
          </a>
        </div>

        <Button href={urls.registerBuildel} mode="light" className="w-full">
          Sing up
        </Button>
      </div>
    </motion.div>
  );
};
