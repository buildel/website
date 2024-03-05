import { motion } from "framer-motion";

export interface IBenefit {
  icon: JSX.Element;
  title: string;
  description: string;
}
interface BenefitProps {
  benefit: IBenefit;
}
export const Benefit = ({ benefit }: BenefitProps) => (
  <motion.li
    variants={{
      hidden: { opacity: 0, y: 20 },
      show: { opacity: 1, y: 0, transition: { ease: "easeInOut" } },
    }}
    className="text-neutral-950 p-5 border border-neutral-100 rounded-xl bg-white"
  >
    {benefit.icon}
    <p className="font-primaryBold text-xl mt-5">{benefit.title}</p>
    <p
      className="font-secondary mt-3"
      dangerouslySetInnerHTML={{ __html: benefit.description }}
    />
  </motion.li>
);
