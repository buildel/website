export function generateMetadata({
  title,
  description,
  image,
  type,
}: {
  title: string;
  description: string;
  keywords: string[];
  image: string;
  type: "website" | "article";
}): Record<string, unknown>[] {
  return [
    { title: title },
    { property: "og:title", content: title },
    { property: "twitter:title", content: title },

    {
      name: "description",
      content: description,
    },
    {
      property: "og:description",
      content: description,
    },
    {
      property: "twitter:description",
      content: description,
    },

    { property: "og:image", content: image },
    { property: "og:image:url", content: image },
    { property: "twitter:image", content: image },

    { property: "og:type", content: type },
  ];
}
