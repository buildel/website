import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Header } from "~/components/layout/Header";
import { Hero } from "~/components/hero/Hero";
import { Navigation } from "~/components/layout/Navigation";
import { Logo } from "~/icons/Logo";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

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
export default function Index() {
  return (
    <main className="min-h-[200vh]">
      <div className="max-w-7xl mx-auto">
        <Header>
          <Logo className="text-white w-[84px]" />

          <Navigation />
        </Header>
      </div>

      <Hero />
    </main>
  );
}
