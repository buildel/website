import { ReactNode } from "react";

export interface IPost {
  slug: string;
  title: { text: string; animatedText?: string };
  date: string;
  description: string;
  article: ReactNode;
  image: { url: string };
}

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

export const posts: IPost[] = [
  {
    slug: "buildel-0_2",
    title: { text: "Release", animatedText: "v0.2" },
    date: "Mon, Jul 24, 2024",
    description:
      "After a month a new release is ready. Here is Buildel 0.2 introducing new design, interfaces, bug fixes and UX improvements.",
    image: { url: "https://buildel.ai/og-image-0_2.png" },
    article: (
      <>
        <p className="lead">
          Buildel 0.2 is here! We've managed to do a lot in the last month
          including new features, bug fixes and UX improvements. All of this is
          thanks to our team of developers who worked hard to make the new
          version a reality.
        </p>
        <h2>New design</h2>
        <h3>Colors</h3>
        <p>
          Buildel 0.2 has a new lighter design that is more modern and less
          cluttered. We've changed the sidebar with all the tools you need to
          build your workflows.
        </p>
        <Image
          src="/assets/posts/buildel-0_2-design.png"
          alt="Buildel 0.2 new main view"
        />
        <h3>New workflow editor</h3>
        <p>
          We've also increased the area of the editor so that you can better see
          when building. It also now fits our landing page. Blocks now have
          information at a glimpse about some of their most important settings.
          Also if you make any mistakes inside of the editor you will now see
          warnings about it.
        </p>
        <Image
          src="/assets/posts/buildel-0_2-design-2.png"
          alt="Buildel 0.2 new workflow editor"
        />
        <p>
          We're constantly working on improving the designs further to make the
          platform better 😎.
        </p>
        <h2>New graph database traversal</h2>
        <p>
          The document search tool got an update. The bot using it can now
          traverse the graph database, which means that it can now search a part
          of document and then retrieve chunks related to it. This makes the
          search tool more powerful and on average it can find more relevant
          results. It allowed us to deliver more reliable advanced chat bots
          returning critical information like financial data etc.
        </p>
        <Image
          src="/assets/posts/buildel-0_2-database-traversal.png"
          alt="Buildel 0.2 new graph database traversal"
        />
        <p>
          At the same time we've managed to dramatically improve the performance
          of the graph database traversal tool, which makes it much faster and
          more efficient which allows the chat to respond faster.
        </p>
        <h2>New interfaces</h2>
        <p>In this release we've also added new interfaces: Form and Bulk.</p>
        <h3>Form</h3>
        <p>
          The Form interface is a simple way to collect data from your users.
          You can pick which fields from your workflows you would want to
          collect and which outputs you would want to send back to your users.
          This interface is great for example if you want to collect user
          feedback from a survey.
        </p>
        <p>You can use text and file inputs.</p>
        <Image
          src="/assets/posts/buildel-0_2-form.png"
          alt={"Form interface"}
        />
        <p>
          We're working on allowing more input types and more customization to
          the form in the future.
        </p>
        <h3>Bulk</h3>
        <p>
          The Bulk interface is a way to run multiple workflows at once. You can
          create a table with inputs, run the workflows and get outputs in
          return. This is great for example if you want to test if your workflow
          is working correctly with different inputs. Combining it with another
          chat you can also dynamically interpret the results of your workflows.
        </p>
        <Image
          src="/assets/posts/buildel-0_2-bulk.png"
          alt={"Bulk interface"}
        />
        <h2>New tool usage</h2>
        <p>
          In the new version we now support multiple tools at once. You can now
          run multiple tools at once in one workflow, which makes it cheaper
          because the chat no longer needs to make multiple API calls and faster
          because you don't need to wait for each API call to finish before
          moving on to the next one. This works with all of our tools and you
          can combine them in any way you want.
        </p>
        <h2>New blocks</h2>
        <h3>Date tool</h3>
        <p>
          The date tool is a simple way of providing your llm with the current
          date. You can use it as a tool or directly output it into your chat.
        </p>
        <Image
          src="/assets/posts/buildel-0_2-date-tool.png"
          alt={"Bulk interface"}
        />
        <h2>What's next?</h2>
        <p>
          We're working on a new "Dataset" feature allowing you to store, share
          and use data from workflows as test datasets to improve your
          workflows, measure their performance and monitor for regressions.
        </p>
        <h2>Keep up</h2>
        <p>
          If you're interested in our technology you can find us on
          <a href="https://github.com/elpassion/buildel" className="ml-1">
            GitHub
          </a>{" "}
          or
          <a href="https://discord.gg/SUXs7FyRT2" className="ml-1">
            Discord
          </a>
          . If you want to build AI apps with or without Buildel hit us up
          <a href="https://www.elpassion.com" className="ml-1">
            @EL Passion
          </a>
          .
        </p>
      </>
    ),
  },
  {
    slug: "buildel-0_1",
    title: { text: "Introducing Buildel", animatedText: "0.1" },
    date: "Mon, Jun 10, 2024",
    description:
      "We are thrilled to unveil the latest milestone in our journey: Buildel 0.1! With each iteration, we aim to enhance your experience, empower your creativity, and streamline your workflow. Today, we're excited to share the highlights of what's in store with this new version.",
    image: { url: "https://buildel.ai/og-image-0_1.png" },
    article: (
      <>
        <p className="lead">
          We are thrilled to unveil the latest milestone in our journey: Buildel
          0.1! Our fully open source tool for AI workflow automations. For the
          past few weeks we've been working very hard to polish the app enough
          to release the new features and we're excited to share with you some
          of the highlights of this release.
        </p>
        <h2>New blocks</h2>
        <p>
          We've added new blocks to Buildel that allow you to build more complex
          workflows. Browser Tool and CSV Search should help you with that.
        </p>
        <h3>Browser Tool</h3>
        <p>
          Your Buildel workflows will now be able to read any webpage you want.
          If you ever need to extract data from a website, this block will be
          perfect for you.
        </p>
        <p>There are 2 ways you will use this block:</p>
        <h4> Call it directly with a URL as input</h4>
        <Video src="/assets/posts/browser-url.webm" />
        <p>
          Attach an input with a URL and the tool will fetch the data from that
          URL parse it for you and return in a text form. You can later input
          this text into another block like a Chat or TextOutput.
        </p>
        <h4>Give tool access to it to your chat block</h4>
        <Video src="/assets/posts/browser-llm.webm" />
        <p>
          You can attach the browser tool through the I/O interface to chat
          block. It can then call the tool by itself and do whatever is needed
          with the data: summarize it, extract data etc.
        </p>
        <h4>Use in chat</h4>
        <p>
          Later if you want you can use Buildel built in Chat interface to
          interact rather than through our workflow interface.
        </p>
        <Video src="/assets/posts/browser-chat.mp4" />
        <p>
          Browser Tool will also output the webpage it visits as a file so that
          you can input it directly into ie. Document Tool to save it in your
          knowledge base for later usage. This combination of tools will give
          you the ability to scrape any website and later use multiple of those
          for your workflows.
        </p>
        <blockquote>
          We're working on allowing the bot to scrape multiple pages at once for
          you to generate a whole KB with one tool call.
        </blockquote>
        <h3>CSV Search Tool</h3>
        <p>
          Buildel now supports creating <b>in memory</b> databases based on your
          CSVs. You can throw in a CSV file and it will be parsed into an SQLite
          database.
        </p>

        <blockquote>
          For now we support only in memory databases, but we plan on adding
          support for persistent databases in the future.
        </blockquote>
        <Image src="/assets/posts/csv_search.webp" alt={"CSV Search"} />
        <p>
          You can then use the search tool to query that database or give your
          Chat block access to it. It supports multiple tables at the same time
          so don't be afraid to challenge the LLM.
        </p>
        <p>
          Read an awesome article about it here:
          <a href="https://www.elpassion.com/blog/financial-data-analysis-with-ai">
            How to create an in memory database from your CSV
          </a>
        </p>
        <h2>Mermaid Support</h2>
        <p>
          Buildel now supports Mermaid Diagrams. You can ask chat to create a
          Mermaid diagram for you and it will be rendered in our UI.
        </p>
        <Video src="/assets/posts/mermaid.mp4" />
        <blockquote>
          You can read more about Mermaid and it's capabilities here:
          <a href="https://mermaid.js.org/">Mermaid</a>
        </blockquote>
        <h2>Chat File Input Support</h2>
        <p>
          Finally Buildel Chat Interface has file support. You can now add and
          remove files directly from chat.
        </p>
        <p>
          To do that you have to create a FileInput, attach it to a tool you
          wish the file should send the file ie. DocumentTool or the new CSV
          Search
        </p>
        <p>
          After that in the interface Chat select the file input you wish the
          chat should be attached to and use the files directly!
        </p>
        <Video src="/assets/posts/file_input.mp4" />
        <h2>Other things...</h2>
        <p>
          Besides that we've fixed multiple bugs, added file inputs to multiple
          blocks, introduced a possibility to send files through initial_inputs
          in API, added support for tables importing in CSV, XLS, Docs and PDF
          files. Can't wait to add more!
        </p>
        <h2>What's next?</h2>
        <p>
          We're currently working on improving the Browser Tool to allow better
          scraping and more advanced interactions for LLMs with webpages. At the
          same time were improving our image parsing to support extracting data
          from images and more advanced image processing.
        </p>
        <h2>Keep up</h2>
        <p>
          If you're interested in our technology you can find us on
          <a href="https://github.com/elpassion/buildel">GitHub</a> or
          <a href="https://discord.gg/SUXs7FyRT2">Discord</a>. If you want to
          build AI apps with or without Buildel hit us up
          <a href="https://www.elpassion.com">@EL Passion</a>.
        </p>
      </>
    ),
  },
];
