import { Button } from "~/components/shared/Button";
import { DiscordLogo } from "~/icons/DiscordLogo";
import { urls } from "~/utils/urls";

export const JoinCommunity = () => {
  return (
    <div className="w-full flex justify-center items-center py-16 relative px-4 lg:px-0 lg:h-[500px]">
      <div className="layout !p-4 lg:!p-8 flex flex-col bg-black rounded-2xl z-[2] relative">
        <h4 className="h4-mobile lg:h4-desktop w-full lg:w-2/3 mb-7">
          Join our growing community. Find inspiration, support and connect with
          other builders
        </h4>

        <Button
          mode="light"
          className="w-full lg:w-max z-[1]"
          externalHref={urls.discordServer}
        >
          <DiscordLogo className="text-xl" />
          Join on Discord
        </Button>
        <img
          src="/assets/community-banner.png"
          className="hidden lg:block absolute top-0 right-0 w-full"
          alt="community banner background"
        />
      </div>

      <div className="w-3/4 bottom-[100px] absolute bg-[#7177FF] h-[60px] z-[1] rounded-full blur-[200px]" />

      <img
        src="/assets/background-transition1.webp"
        alt="transition"
        className="absolute top-0 left-0 w-full h-full object-cover bg-dark-background"
      />
    </div>
  );
};
