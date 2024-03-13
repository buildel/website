import React from "react";

import {
  WorkflowsAnimatedList,
  WorkflowsAnimatedMobileList,
} from "~/components/workflows/AnimatedList";

const data = [
  {
    id: 0,
    heading: "Access Buildel API easily with our client SDK",
    paragraph: `
Buildel offers a straightforward and secure method for incorporating your Buildel Workflows into end-user web experiences. To ensure secure access to our applications directly from client-side code, we've integrated a Client SDK with an authentication mechanism.`,
    src: "/assets/client-sdk.webp",
  },
  {
    id: 1,
    heading: "Embed Buildel Chat directly on Your Website",
    paragraph: `It allows for a straightforward integration, offering your visitors the convenience of engaging with Buildel Chat directly on your site.`,
    src: "/assets/website-chatbot.webp",
  },
  {
    id: 2,
    heading: "Connect to Buildel through an OpenAI compliant interface",
    paragraph: `Easily integrate your chatbot with our API by just changing the token and url in your app. Later if you want to change the chatbot, you can do it without changing the code.`,
    src: "/assets/open-ai.webp",
  },
];

export const Workflows: React.FC = () => {
  return (
    <section>
      <header className="text-center mb-10 lg:mb-14">
        <h2 className="text-3xl md:text-5xl mb-2">
          Integrate Buildel into your app
        </h2>
        <p className="text-sm md:text-base max-w-3xl mx-auto">
          Seamlessly Integrate Workflows to elevate User Experience and
          Streamline Operations
        </p>
      </header>

      <div className="hidden lg:block">
        <WorkflowsAnimatedList list={data} />
      </div>

      <div className="lg:hidden">
        <WorkflowsAnimatedMobileList list={data} />
      </div>

      {/*<a href="#" className="block w-fit mx-auto mt-10 lg:mt-20">*/}
      {/*  <Button tabIndex={-1} variant="basic">*/}
      {/*    Learn more*/}
      {/*  </Button>*/}
      {/*</a>*/}
    </section>
  );
};
