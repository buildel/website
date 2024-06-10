import {
  Links,
  Meta,
  MetaFunction,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import "./tailwind.css";
import { generateMetadata } from "./utils/meta";

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://buildel.ai/og-image.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="buildel.ai" />
        <meta name="twitter:image" content="https://buildel.ai/og-image.png" />

        <script
          defer
          data-domain="buildel.ai"
          src="https://plausible.io/js/script.js"
        ></script>

        <Meta />
        <Links />
      </head>
      <body className="bg-dark text-neutral-50">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export const meta: MetaFunction = (a) => {
  const title = "Buildel";
  const description = "Build your own AI app without hassle.";

  return generateMetadata({
    title,
    description,
    image: "https://buildel.ai/og-image.png",
    keywords: [],
  });
};
