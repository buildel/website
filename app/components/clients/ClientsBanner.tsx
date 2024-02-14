import React from "react";
interface ClientsBannerProps {}

export const ClientsBanner: React.FC<ClientsBannerProps> = () => {
  return (
    <section className="text-center">
      <h2 className="text-xl md:text-2xl mb-4">
        Trusted by multiple clients from various industries
      </h2>
      {/* <ClientsList /> */}
    </section>
  );
};

function ClientsList() {
  return (
    <ul className="flex gap-4 justify-center">
      <li className="flex">
        <ClientImage src="/assets/ELP-logo.png" alt="EL Passion" />
      </li>
      <li>
        <ClientImage src="/assets/EY-logo.svg" alt="EY" />
      </li>
    </ul>
  );
}

function ClientImage({
  src,
  alt,
  ...rest
}: {
  src: string;
  alt: string;
  height?: number;
  width?: number;
}) {
  return (
    <div className="rounded-sm bg-white p-2">
      <img src={src} alt={alt} className="h-[2rem]" {...rest} />
    </div>
  );
}
