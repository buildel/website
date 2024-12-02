import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { BlockTypeApi } from "~/api/blockTypesApi";
import { Blog } from "~/views/Blog/Page";

export const meta: MetaFunction = () => {
  return [
    { title: "BuildEL" },
    { name: "description", content: "Build your own AI app without hassle." },
  ];
};

export async function loader() {
  const blockTypesApi = new BlockTypeApi();
  const res = await blockTypesApi.getBlockTypes();

  return { blockTypes: res.data };
}

export const links: LinksFunction = () => {
  return [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,700&display=swap",
    },
  ];
};
export default Blog;
