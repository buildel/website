import { ReactNode } from "react";

export interface IPost {
  title: { text: string; animatedText?: string };
  date: string;
  description: string;
  slug: string;
  article: any;
}

export const posts: IPost[] = [
  {
    slug: "buildel-0_1",
    title: { text: "Introducing Buildel", animatedText: "0.1" },
    date: "Mon, Jun 10, 2024",
    description:
      "We are thrilled to unveil the latest milestone in our journey: Buildel 0.1! With each iteration, we aim to enhance your experience, empower your creativity, and streamline your workflow. Today, we're excited to share the highlights of what's in store with this new version.",
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
        <video src="/assets/posts/browser-url.webm" />
        <p>
          Attach an input with a URL and the tool will fetch the data from that
          URL parse it for you and return in a text form. You can later input
          this text into another block like a Chat or TextOutput.
        </p>
        <h4>Give tool access to it to your chat block</h4>
        <video src="/assets/posts/browser-llm.webm" />
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
        <video src="/assets/posts/browser-chat.mp4" />
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
        <img src="/assets/posts/csv_search.webp" alt={"CSV Search"} />
        <p>
          You can then use the search tool to query that database or give your
          Chat block access to it. It supports multiple tables at the same time
          so don't be afraid to challenge the LLM.
        </p>
        <p>
          Read an awesome article about it here:{" "}
          <a href="https://www.elpassion.com/blog/financial-data-analysis-with-ai">
            How to create an in memory database from your CSV
          </a>
        </p>
        <h2>Mermaid Support</h2>
        <p>
          Buildel now supports Mermaid Diagrams. You can ask chat to create a
          Mermaid diagram for you and it will be rendered in our UI.
        </p>
        <video src="/assets/posts/mermaid.mp4" />
        <blockquote>
          You can read more about Mermaid and it's capabilities here:{" "}
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
        <video src="/assets/posts/file_input.mp4" />
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
          If you're interested in our technology you can find us on{" "}
          <a href="https://github.com/elpassion/buildel">GitHub</a> or{" "}
          <a href="https://discord.gg/SUXs7FyRT2">Discord</a>. If you want to
          build AI apps with or without Buildel hit us up{" "}
          <a href="https://www.elpassion.com">@EL Passion</a>.
        </p>
      </>
    ),
  },
];
