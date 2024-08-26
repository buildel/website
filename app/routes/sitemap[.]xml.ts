import { generateSitemap } from "@nasa-gcn/remix-seo";
import { type LoaderFunctionArgs } from "@remix-run/node";
import { getBuild, getDomainUrl } from "~/utils/misc";

export async function loader({ request }: LoaderFunctionArgs) {
  const serverBuild = await getBuild();

  return generateSitemap(request, serverBuild.routes, {
    siteUrl: getDomainUrl(request),
  });
}
