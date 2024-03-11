import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import "./tailwind.css";

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:url" content="https://buildel.ai" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Buildel" />
        <meta property="og:image" content="https://buildel.ai/og-image.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="buildel.ai" />
        <meta property="twitter:url" content="https://buildel.ai" />
        <meta name="twitter:title" content="Buildel" />
        <meta
          name="twitter:description"
          content="Build your own AI app without hassle."
        />
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
