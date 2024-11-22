import { Button } from "~/components/shared/New-button";
import { DiscordLogo } from "~/icons/DiscordLogo";
import { urls } from "~/utils/urls";
import { BasicLink } from "~/components/shared/BasicLink";

export const JoinCommunity = () => {
  return (
    <div className="w-full flex justify-center items-center py-16 relative px-4 lg:px-0 h-[400px] lg:h-[500px]">
      <div className="layout !p-8 lg:!p-12 flex flex-col bg-black rounded-3xl z-[2] relative overflow-hidden">
        <h4 className="text-2xl md:text-3xl font-semibold text-secondary w-full lg:w-2/3 mb-7">
          Join our growing community. Find inspiration, support and connect with
          other builders
        </h4>

        <Button variant="secondary" asChild className="w-fit" size="xl">
          <BasicLink to={urls.discordServer}>
            <DiscordLogo className="text-xl" />
            Join on Discord
          </BasicLink>
        </Button>
        <img
          src="/assets/community-banner.png"
          className="hidden lg:block absolute top-0 bottom-0 right-0 w-full h-full pointer-events-none"
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
