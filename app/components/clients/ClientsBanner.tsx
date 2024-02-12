import React from "react";
interface ClientsBannerProps {}

export const ClientsBanner: React.FC<ClientsBannerProps> = () => {
  return (
    <section className="bg-neutral-950">
      <ClientsList />
    </section>
  );
};

function ClientsList() {
  return (
    <ul className="flex gap-4">
      <li>google</li>
      <li>ey</li>
    </ul>
  );
}
