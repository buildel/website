import { Footer } from "~/components/layout/Footer";
import { Header } from "~/components/layout/Header";
import {
  AnimatedWords,
  HeroContainer,
  HeroHeader,
  HeroSubheader,
} from "~/components/sections/hero/Hero";

interface IPost {
  title: string;
  date: string;
  description: string;
  slug: string;
}

const posts: IPost[] = [
  {
    title: "Introducing Buildel 2.1",
    date: "Thu, Apr 18, 2024",
    description:
      "We are thrilled to unveil the latest milestone in our journey: Buildel 2.1! With each iteration, we aim to enhance your experience, empower your creativity, and streamline your workflow. Today, we're excited to share the highlights of what's in store with this new version.",
    slug: "buildel-2_1",
  },
  {
    title: "Introducing Buildel 2.1",
    date: "Thu, Apr 18, 2024",
    description:
      "We are thrilled to unveil the latest milestone in our journey: Buildel 2.1! With each iteration, we aim to enhance your experience, empower your creativity, and streamline your workflow. Today, we're excited to share the highlights of what's in store with this new version.",
    slug: "buildel-2_1",
  },
  {
    title: "Introducing Buildel 2.1",
    date: "Thu, Apr 18, 2024",
    description:
      "We are thrilled to unveil the latest milestone in our journey: Buildel 2.1! With each iteration, we aim to enhance your experience, empower your creativity, and streamline your workflow. Today, we're excited to share the highlights of what's in store with this new version.",
    slug: "buildel-2_1",
  },
  {
    title: "Introducing Buildel 2.1",
    date: "Thu, Apr 18, 2024",
    description:
      "We are thrilled to unveil the latest milestone in our journey: Buildel 2.1! With each iteration, we aim to enhance your experience, empower your creativity, and streamline your workflow. Today, we're excited to share the highlights of what's in store with this new version.",
    slug: "buildel-2_1",
  },
];

export const Blog = () => (
  <main className="bg-white w-full h-full">
    <Header />
    <Hero />
    <Posts />
    <Footer />
  </main>
);

const Hero = () => {
  return (
    <HeroContainer className="max-h-[30rem] ">
      <HeroHeader>
        News for <br />
        <AnimatedWords
          words={["everybody", "sales", "engineers", "marketeers", "you"]}
        />
      </HeroHeader>

      <HeroSubheader>The latest news from Buildel</HeroSubheader>
    </HeroContainer>
  );
};

const Posts = () => {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-5 md:gap-y-16 md:grid-cols-10 p-4 layout">
      {posts.map((post) => (
        <Post key={post.title} {...post} />
      ))}
    </div>
  );
};

const Post = ({
  title,
  description,
  date,
  slug,
}: {
  title: string;
  description: string;
  date: string;
  slug: string;
}) => {
  return (
    <PostCard href={`/blog/${slug}`}>
      <PostCardMeta>{date}</PostCardMeta>
      <PostCardTitle>{title}</PostCardTitle>
      <PostCardDescription>{description}</PostCardDescription>
    </PostCard>
  );
};

const PostCard = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href?: string;
}) => {
  return (
    <a
      href={href}
      className={`col-span-1 md:col-span-5 md:first:col-span-6 md:[&:nth-child(2)]:col-span-4 bg-grey-background first:bg-dark text-neutral-950 [&:first-child>h2]:text-5xl md:[&:first-child>h2]:text-7xl [&:first-child>*]:text-white md:[&:first-child>p]:text-xl [&:first-child>p]:text-neutral-400 p-6 rounded-2xl h-[32rem] flex flex-col`}
    >
      {children}
    </a>
  );
};

const PostCardMeta = ({ children }: { children: React.ReactNode }) => (
  <div className="text-base">{children}</div>
);

const PostCardTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mt-auto text-4xl font-primaryBold max-w-[12ch]">{children}</h2>
);

const PostCardDescription = ({ children }: { children: React.ReactNode }) => (
  <p className="text-base mt-4 line-clamp-4">{children}</p>
);
