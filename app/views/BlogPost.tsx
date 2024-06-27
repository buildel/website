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

enum PostElementsTypes {
  VIDEO = "video",
  IMAGE = "img",
  PARAGRAPH = "p",
  HEADINGH2 = "h2",
  HEADINGH3 = "h3",
  HEADINGH4 = "h4",
  ANCHOR = "a",
}

interface IPostElements {
  type: PostElementsTypes;
  props: any;
}

export const BlogPost = () => {
  const data = useLoaderData<typeof loader>();

  return (
    <main className="bg-white w-full h-full">
      <Header />
      {data && (
        <>
          <Hero title={data.title} date={data.date} />
          <Post article={data.article.props.children} />
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

const Post = ({ article }: { article: IPostElements[] }) => {
  return (
    <article
      className="layout prose lg:prose-xl color-black prose-p:color-black pb-16"
      style={{ color: "var(--tw-prose-body)" }}
    >
      {article.map(({ type, props: { className, children, alt, src } }) => {
        switch (type) {
          case PostElementsTypes.PARAGRAPH:
            return (
              <p className={className}>
                {typeof children === "string"
                  ? children
                  : children.map((child: any) => {
                      if (typeof child === "string") {
                        return child;
                      }
                      return (
                        <a key={child.props.children} href={child.props.href}>
                          {child.props.children}
                        </a>
                      );
                    })}
              </p>
            );
          case PostElementsTypes.HEADINGH2:
            return <h2 className={className}>{children}</h2>;
          case PostElementsTypes.HEADINGH3:
            return <h3 className={className}>{children}</h3>;
          case PostElementsTypes.HEADINGH4:
            return <h4 className={className}>{children}</h4>;
          case PostElementsTypes.VIDEO:
            return <Video src={src} />;
          case PostElementsTypes.IMAGE:
            return <Image src={src} alt={alt} />;
          default:
            return null;
        }
      })}
    </article>
  );
};

const Video = ({ src }: { src: string }) => {
  return (
    <video src={src} controls className="rounded-xl" autoPlay>
      <track kind="captions" />
    </video>
  );
};

const Image = ({ src, alt }: { src: string; alt: string }) => {
  return <img src={src} alt={alt} className="w-full rounded-xl object-cover" />;
};
