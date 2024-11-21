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
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="buildel.ai" />

        <script
          defer
          data-domain="buildel.ai"
          src="https://plausible.io/js/script.js"
        ></script>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />

        <Meta />
        <Links />
      </head>
      <body className="bg-white text-foreground">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export const meta: MetaFunction = (a) => {
  const title = "BuildEL";
  const description = "Build your own AI app without hassle.";

  return generateMetadata({
    title,
    description,
    type: "website",
    image: "https://buildel.ai/og-image.png",
    keywords: [],
  });
};
