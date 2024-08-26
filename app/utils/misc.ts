import { ServerBuild } from "@remix-run/node";

export async function getBuild() {
  return (await (import.meta.env.DEV
    ? //@ts-ignore
      import("../../build/server/index.js")
    : import(
        /* @vite-ignore */
        import.meta.resolve("../../build/server/index.js")
      ))) as unknown as ServerBuild;
}

export function getDomainUrl(request: Request) {
  const host =
    request.headers.get("X-Forwarded-Host") ??
    request.headers.get("host") ??
    new URL(request.url).host;
  const protocol = host.includes("localhost") ? "http" : "https";
  return `${protocol}://${host}`;
}
