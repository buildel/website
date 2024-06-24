import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { generateMetadata } from "~/utils/meta";
import { BlogPost } from "~/views/BlogPost";

export const meta: MetaFunction = () => {
  return generateMetadata({
    title: "Introducing Buildel 0.1",
    description:
      "Introducing new blocks: Browser Tool and CSV Search, Mermaid Support, File Input and more.",
    image: "https://buildel.ai/og-image-0_1.png",
    keywords: [],
    type: "article",
  });
};

export async function loader({ params }: any) {
  return params.slug;
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

export default BlogPost;
