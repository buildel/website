import { generateRobotsTxt } from "@nasa-gcn/remix-seo";
import { LoaderFunctionArgs } from "@remix-run/node";
import { getDomainUrl } from "~/utils/misc";

export function loader({ request }: LoaderFunctionArgs) {
  return generateRobotsTxt([
    { type: "sitemap", value: `${getDomainUrl(request)}/sitemap.xml` },
  ]);
}
