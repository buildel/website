import { useLoaderData } from "@remix-run/react";
import { Footer } from "~/components/layout/Footer";
import { Header } from "~/components/layout/Header";
import { JoinCommunity } from "~/components/sections/community/JoinCommunity";
import {
  AnimatedWords,
  HeroContainer,
  HeroHeader,
  HeroPreHeader,
} from "~/components/sections/hero/Hero";
import { loader } from "~/routes/blog_.$slug";
import { posts } from "../BlogPostsData/blogPosts";

export const Page = () => {
  const data = useLoaderData<typeof loader>();

  return (
    <main className="bg-white w-full h-full">
      <Header />
      {data && (
        <>
          <Hero title={data.title} date={data.date} />
          <Post slug={data.slug} />
        </>
      )}
      <JoinCommunity />
      <Footer />
    </main>
  );
};

const Hero = ({
  date,
  title: { text, animatedText },
}: {
  date: string;
  title: { text: string; animatedText?: string };
}) => {
  return (
    <HeroContainer className="max-h-[30rem]">
      <HeroPreHeader>{date}</HeroPreHeader>
      <HeroHeader>
        {`${text} `}
        {animatedText && <AnimatedWords words={[animatedText, animatedText]} />}
      </HeroHeader>
    </HeroContainer>
  );
};

const Post = ({ slug }: { slug: string }) => {
  return (
    <article
      className="layout prose lg:prose-xl color-black prose-p:color-black pb-16"
      style={{ color: "var(--tw-prose-body)" }}
    >
      {posts.find((blogPostData) => blogPostData.slug === slug)?.article}
    </article>
  );
};
