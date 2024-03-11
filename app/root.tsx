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
        <meta property="og:image" content="https://buildel.ai/og-image.png" />
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
