import { LinksFunction, MetaFunction } from "@remix-run/node";
import { Pricing } from "~/views/Pricing/Page";

export const meta: MetaFunction = () => {
  return [
    { title: "BuildEL" },
    { name: "description", content: "Build your own AI app without hassle." },
  ];
};

export async function loader() {
  return {};
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
export default Pricing;
