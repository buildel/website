import React from "react";
interface ClientsBannerProps {}

export const ClientsBanner: React.FC<ClientsBannerProps> = () => {
  return (
    <section>
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
