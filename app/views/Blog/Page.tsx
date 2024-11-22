import { Footer } from "~/components/layout/Footer";
import { Header } from "~/components/layout/Header";

import { Hero } from "~/views/Blog/Hero";
import { Posts, PostsSection } from "~/views/Blog/Posts.components";

export const Blog = () => (
  <main className="bg-white w-full h-full">
    <Header />

    <Hero />

    <PostsSection />

    <Footer />
  </main>
);
