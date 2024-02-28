import { PropsWithChildren } from "react";
import { Header } from "~/components/layout/Header";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <main className="bg-white w-full h-full">
      <Header />
      {children}
    </main>
  );
};
