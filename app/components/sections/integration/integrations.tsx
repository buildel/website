import { urls } from "~/utils/urls";

export const clientSDK = {
  title: (
    <h3 className="text-2xl md:text-3xl text-secondary font-semibold">
      Access BuildEL API easily with our{" "}
      <span className="gradient-text">client SDK</span>
    </h3>
  ),
  imageDirectory: "snippets/js-client-sdk" as const,
  subtitle:
    "You can use EL to build sophisticated workflows that fulfill all your needs. No need to write code, just ask EL to do it for you.",
  cta: { label: "See documentation", href: urls.documentation.interfaces },
  technologiesTabs: ["NextJS", "Remix"],
};

export const embed = {
  title: (
    <h3 className="text-3xl text-secondary">
      Embed BuildEL Chat directly on{" "}
      <span className="gradient-text">your website</span>
    </h3>
  ),
  subtitle:
    "It allows for a straightforward integration, offering your visitors the convenience of engaging with BuildEL Chat directly on your site.",
  imageDirectory: "snippets/embed" as const,
  cta: { label: "See documentation", href: urls.documentation.interfaces },
  technologiesTabs: ["HTML", "React"],
};

export const openAI = {
  title: (
    <h3 className="text-3xl text-secondary">
      Connect to BuildEL through an{" "}
      <span className="gradient-text">OpenAI compliant interface</span>
    </h3>
  ),
  subtitle:
    "It allows for a straightforward integration, offering your visitors the convenience of engaging with BuildEL Chat directly on your site.",
  imageDirectory: "snippets/openai-interface" as const,
  cta: { label: "See documentation", href: urls.documentation.interfaces },
  technologiesTabs: ["openai-interface"],
};
