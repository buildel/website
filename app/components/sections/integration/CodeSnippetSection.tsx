import { ReactElement } from "react";
import { Button } from "~/components/shared/Button";
import { Tab } from "~/components/shared/Tab";
import clsx from "clsx";
import { BasicLink } from "~/components/shared/BasicLink";

interface CodeSnippetSectionProps {
  title: ReactElement;
  subtitle: string;
  cta: {
    label: string;
    href: string;
  };
  technologiesTabs: string[];
  activeTab: string;
  imageDirectory:
    | "snippets/js-client-sdk"
    | "snippets/embed"
    | "snippets/openai-interface";
  onTabChange: (tab: string) => void;
}
export const CodeSnippetSection = ({
  title,
  subtitle,
  cta,
  technologiesTabs,
  activeTab,
  onTabChange,
  imageDirectory,
}: CodeSnippetSectionProps) => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-start justify-between layout pb-14 lg:h-[500px]">
      <div className="flex flex-col w-full lg:w-2/5 mt-14">
        {title}

        <p className="mt-4 mb-6 text-secondary/80 font-secondary">{subtitle}</p>

        <Button className="w-max" asChild size="lg" variant="secondary">
          <BasicLink to={cta.href} target="_blank">
            {cta.label}
          </BasicLink>
        </Button>
      </div>

      <div className="flex flex-col items-end">
        {technologiesTabs.length > 1 && (
          <div className="flex items-center p-1 bg-black rounded-full mb-4">
            {technologiesTabs.map((tab) => (
              <Tab
                key={tab}
                active={activeTab === tab}
                onClick={() => onTabChange(tab)}
                mode="dark"
                gradientText
              >
                {tab}
              </Tab>
            ))}
          </div>
        )}
        <img
          src={`/assets/${imageDirectory}/${activeTab.toLowerCase()}.png`}
          className={clsx("w-full max-w-[630px] rounded-lg lg:rounded-2xl", {
            "mt-14": technologiesTabs.length === 1,
          })}
          alt=""
        />
      </div>
    </div>
  );
};
