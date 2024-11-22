import { Header } from "~/components/layout/Header";
import { Footer } from "~/components/layout/Footer";

import { Hero } from "~/views/Pricing/Hero";
import { ImplementationSection } from "~/views/Home/Implementations";

export const Pricing = () => (
  <main className="bg-white w-full h-full">
    <Header />

    <Hero />

    <ImplementationSection />

    <Footer />
  </main>
);
