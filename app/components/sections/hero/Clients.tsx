import { motion } from "framer-motion";

const clients = [
  { name: "EL Passion", logo: "elp_logo_default.svg" },
  { name: "EY", logo: "EY-logo.svg" },
];

export const Clients = () => (
  <div className="flex flex-col layout py-10 items-start lg:items-center z-[2] relative">
    <h3 className="text-neutral-800 font-primaryBold w-full max-w-[400px] text-xl text-left lg:text-center">
      Trusted by multiple clients from various industries with individual needs
    </h3>
    <motion.ul
      variants={{
        visible: {
          transition: { staggerChildren: 0.1, bounce: 0, ease: "easeInOut" },
        },
      }}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-3 lg:justify-center lg:flex lg:items-center mt-10 gap-11 lg:gap-x-14 w-full overflow-x-auto overflow-y-hidden"
    >
      {clients.map((client, index) => (
        <motion.li
          key={`${client.name}-${index}`}
          className="h-full"
          variants={{
            hidden: { y: 100 },
            visible: { y: 0, transition: { bounce: 0, ease: "easeInOut" } },
          }}
        >
          <img
            src={`/assets/clients/${client.logo}`}
            className="opacity-20 hover:opacity-100 transition-opacity h-10"
            alt={client.name}
          />
        </motion.li>
      ))}
    </motion.ul>
  </div>
);
