import { BurgerMenu } from "~/icons/BurgerMenu";

export const MobileMenu = () => {
  return (
    <>
      <button className="md:hidden px-3 py-2 rounded-full bg-black flex items-center gap-x-2">
        <BurgerMenu className="text-white" /> Menu
      </button>
    </>
  );
};
