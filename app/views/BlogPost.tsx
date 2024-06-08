import { Footer } from "~/components/layout/Footer";
import { Header } from "~/components/layout/Header";
import {
  AnimatedWords,
  HeroContainer,
  HeroHeader,
  HeroPreHeader,
} from "~/components/sections/hero/Hero";

export const BlogPost = () => (
  <main className="bg-white w-full h-full">
    <Header />
    <Hero />
    <Post />
    <Footer />
  </main>
);

const Hero = () => {
  return (
    <HeroContainer className="max-h-[30rem]">
      <HeroPreHeader>Thu, Apr 18, 2024</HeroPreHeader>
      <HeroHeader>
        Introducing Buildel <AnimatedWords words={["2.1", "2.1"]} />
      </HeroHeader>
    </HeroContainer>
  );
};

const Post = () => {
  return (
    <article
      className="layout prose lg:prose-xl color-black prose-p:color-black"
      style={{ color: "var(--tw-prose-body)" }}
    >
      <p className="lead">
        We are thrilled to unveil the latest milestone in our journey: Buildel
        2.1! With each iteration, we aim to enhance your experience, empower
        your creativity, and streamline your workflow. Today, we're excited to
        share the highlights of what's in store with this new version.
      </p>
      <h2>What's New</h2>
      <p>
        Buildel 2.1 introduces a range of exciting features to improve your
        workflow, enhance collaboration, and streamline your productivity. Some
        of the key updates include:
      </p>
    </article>
  );
};
