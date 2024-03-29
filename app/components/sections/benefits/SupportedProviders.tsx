const providers = [
  "openai.svg",
  "mistral-ai-black.png",
  "gemini.svg",
  "azure.svg",
];

export const SupportedProviders = () => {
  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center w-full justify-between p-5 bg-neutral-50 mt-8 rounded-xl">
      <p className="text-neutral-950 text-2xl font-primaryBold">
        Supported providers
      </p>

      <ul className="grid grid-cols-2 lg:flex items-center lg:gap-x-10 mt-5 lg:mt-0 w-3/4 lg:w-auto">
        {providers.map((provider, index) => (
          <li key={index} className="h-14 flex items-center justify-center w-max">
            <img
              src={`/assets/models/${provider}`}
              className="grayscale"
              alt={provider.split(".")[0]}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
