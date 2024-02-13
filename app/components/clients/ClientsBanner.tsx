import React from "react";
interface ClientsBannerProps {}

export const ClientsBanner: React.FC<ClientsBannerProps> = () => {
  return (
    <section className="text-center">
      <h2 className="text-xl md:text-2xl mb-4">
        Trusted by thousands of fast-scaling organizations around the globe
      </h2>
      <ClientsList />
    </section>
  );
};

function ClientsList() {
  return (
    <ul className="flex gap-4 justify-center">
      <li>google</li>
      <li>ey</li>
      <li>google</li>
      <li>ey</li>
      <li>google</li>
      <li>ey</li>
      <li>google</li>
      <li>ey</li>
    </ul>
  );
}
