const DOCS_BASE_URL = "https://docs.buildel.ai";
export const urls = {
  githubRepo: "https://github.com/elpassion/buildel",
  discordServer: "https://discord.gg/SUXs7FyRT2",
  registerBuildel: "https://app.buildel.ai/register",
  bookDemo: "https://forms.gle/ZYJKCNuX4XySTdMz7",
  documentation: {
    home: DOCS_BASE_URL,
    blocks: `${DOCS_BASE_URL}/docs/category/blocks`,
    interfaces: `${DOCS_BASE_URL}/docs/interfaces`,
  },
  blog: "/blog",
};

export const routes = [
  // { name: "Product", path: "/product" },
  { name: "Docs", path: urls.documentation.home, external: true },
  { name: "Blog", path: urls.blog, external: false },
  { name: "Pricing", path: "/pricing" },
];
