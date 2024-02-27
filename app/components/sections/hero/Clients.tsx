const clients = [
  { name: "EL Passion", logo: "el-passion-logo.svg" },
  { name: "EL Passion", logo: "el-passion-logo.svg" },
  { name: "EL Passion", logo: "el-passion-logo.svg" },
  { name: "EL Passion", logo: "el-passion-logo.svg" },
  { name: "EL Passion", logo: "el-passion-logo.svg" },
];

export const Clients = () => (
  <div className="flex flex-col layout py-10">
    <h3 className="text-neutral-800 font-primaryBold w-full max-w-[400px] text-xl">
      Trusted by multiple clients from various industries with individual needs
    </h3>
    <ul className="grid grid-cols-3 lg:flex lg:items-center mt-10 gap-11 lg:gap-x-14 w-full overflow-x-auto">
      {clients.map((client, index) => (
        <li key={index}>
          <img
            src={`/assets/clients/${client.logo}`}
            className="opacity-20 hover:opacity-100 transition-opacity h-10"
            alt={client.name}
          />
        </li>
      ))}
    </ul>
  </div>
);
