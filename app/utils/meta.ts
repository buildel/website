export function generateMetadata({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  keywords: string[];
  image: string;
}): Record<string, unknown>[] {
  return [
    { title: title },
    { name: "og:title", content: title },
    { name: "twitter:title", content: title },

    {
      name: "description",
      content: description,
    },
    {
      name: "twitter:description",
      content: description,
    },

    { name: "og:image", content: image },
    { name: "twitter:image", content: image },
  ];
}
