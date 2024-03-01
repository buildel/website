import { Button } from "~/components/shared/Button";
import { DiscordLogo } from "~/icons/DiscordLogo";

export const JoinCommunity = () => {
  return (
    <div className="w-full flex justify-center items-center py-16 relative px-4 lg:px-0">
      <div className="layout !p-4 lg:!p-8 flex flex-col bg-black rounded-2xl z-[1] relative">
        <h4 className="h4-mobile lg:h4-desktop w-full lg:w-2/3 mb-7">
          Join our growing community. Find inspiration, support and connect with
          other builders
        </h4>

        <Button mode="light" className="w-full lg:w-max">
          <DiscordLogo className="text-xl" />
          Join on Discord
        </Button>
        <img
          src="/assets/community-banner.png"
          className="hidden lg:block absolute top-0 right-0 w-full h-full object-cover"
          alt="community banner background"
        />
      </div>

      <img
        src="/assets/background-transition.png"
        alt="transition"
        className="absolute top-0 left-0 w-full h-full object-cover bg-dark-background"
      />
    </div>
  );
};
