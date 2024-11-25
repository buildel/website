import { posts } from "~/views/Blog/BlogPostsData/blogPosts";
import {
  Section,
  SectionTLCross,
  SectionTRCross,
  SectionWrapper,
} from "~/components/layout/Layout.components";

import { cn } from "~/lib/utils";

export function PostsSection({
  className,
  children,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <SectionWrapper className={cn("", className)} {...rest}>
      <Section className="border-x flex flex-col items-center justify-center !p-0">
        {children}

        <Posts />

        <SectionTLCross />
        <SectionTRCross />
      </Section>
    </SectionWrapper>
  );
}

export const Posts = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-10">
      {posts.map((post) => (
        <Post key={post.title.text} {...post} />
      ))}
    </div>
  );
};

const Post = ({
  title: { text, animatedText },
  description,
  date,
  slug,
}: {
  title: { text: string; animatedText?: string };
  description: string;
  date: string;
  slug: string;
}) => {
  return (
    <PostCard href={`/blog/${slug}`}>
      <PostCardMeta>{date}</PostCardMeta>
      <PostCardTitle>{`${text} ${animatedText}`}</PostCardTitle>
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
      className={`col-span-1 md:col-span-5 md:first:col-span-6 border-b md:[&:nth-child(2)]:col-span-4 md:[&:nth-child(odd)]:border-r first:bg-primary text-neutral-950 [&:first-child>h2]:text-4xl md:[&:first-child>h2]:text-5xl [&:first-child>*]:text-white md:[&:first-child>p]:text-xl [&:first-child>p]:text-secondary/70 p-6 h-[28rem] flex flex-col`}
    >
      {children}
    </a>
  );
};

const PostCardMeta = ({ children }: { children: React.ReactNode }) => (
  <div className="text-base text-muted-foreground">{children}</div>
);

const PostCardTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mt-auto text-2xl md:text-4xl font-semibold line-clamp-4 w-full md:min-h-[80px]">
    {children}
  </h2>
);

const PostCardDescription = ({ children }: { children: React.ReactNode }) => (
  <p className="text-base mt-4 line-clamp-4 text-muted-foreground md:min-h-[72px]">
    {children}
  </p>
);
