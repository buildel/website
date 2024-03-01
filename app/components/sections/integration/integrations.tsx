export const clientSDK = {
  title: (
    <h3 className="h3-mobile lg:h3-desktop">
      Access Buildel API easily with our{" "}
      <span className="gradient-text">client SDK</span>
    </h3>
  ),
  imageDirectory: "snippets/js-client-sdk" as const,
  subtitle:
    "You can use EL to build sophisticated workflows that fulfill all your needs. No need to write code, just ask EL to do it for you.",
  cta: { label: "See documentation", href: "/docs" },
  technologiesTabs: ["NextJS", "Remix"],
};

export const embed = {
  title: (
    <h3 className="h3-mobile lg:h3-desktop">
      Embed Buildel Chat directly on{" "}
      <span className="gradient-text">your website</span>
    </h3>
  ),
  subtitle:
    "It allows for a straightforward integration, offering your visitors the convenience of engaging with Buildel Chat directly on your site.",
  imageDirectory: "snippets/embed" as const,
  cta: { label: "See documentation", href: "/docs" },
  technologiesTabs: ["HTML", "React"],
};

export const openAI = {
  title: (
    <h3 className="h3-mobile lg:h3-desktop">
      Connect to Buildel through an{" "}
      <span className="gradient-text">OpenAI compliant interface</span>
    </h3>
  ),
  subtitle:
    "It allows for a straightforward integration, offering your visitors the convenience of engaging with Buildel Chat directly on your site.",
  imageDirectory: "snippets/openai-interface" as const,
  cta: { label: "See documentation", href: "/docs" },
  technologiesTabs: ["openai-interface"],
};
