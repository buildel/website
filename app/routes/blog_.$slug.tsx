import type {
  LinksFunction,
  MetaFunction,
  LoaderFunctionArgs,
} from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { generateMetadata } from "~/utils/meta";
import { BlogPost } from "~/views/BlogPost";
import { posts } from "~/views/BlogPostsData/blogPosts";
import { SEOHandle } from "@nasa-gcn/remix-seo";

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return generateMetadata({
    title: data!.title.text + " " + data!.title.animatedText + " | BuildEL",
    description: data!.description,
    image: data!.image.url,
    keywords: [],
    type: "article",
  });
};

export const handle: SEOHandle = {
  getSitemapEntries: async (request) => {
    return posts.map((post) => {
      return { route: `/blog/${post.slug}`, priority: 0.7 };
    });
  },
};

export async function loader({ params }: LoaderFunctionArgs) {
  const currentBlogPostData = posts.find(
    (blogPostData) => blogPostData.slug === params.slug
  );
  if (!currentBlogPostData) {
    return redirect("/blog");
  }
  return json(currentBlogPostData);
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
