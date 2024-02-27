import { Hero } from "~/components/sections/hero/Hero";
import { Clients } from "~/components/sections/hero/Clients";

export default function Index() {
  return (
    <main className="bg-white w-full h-full">
      <Hero />
      <Clients />
    </main>
  );
}
