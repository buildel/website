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
    <video src={src} controls className="rounded-xl" autoPlay muted>
      <track kind="captions" />
    </video>
  );
};

const Image = ({ src, alt }: { src: string; alt: string }) => {
  return <img src={src} alt={alt} className="w-full rounded-xl object-cover" />;
};

export const posts: IPost[] = [
  {
    slug: "buildel-0_4",
    title: {
      text: "Unveiling BuildEL 0.4 - A Leap Towards Greater Usability and Flexibility",
      animatedText: "v0.4",
    },
    date: "Thu, Oct 17 2024",
    description:
      "BuildEL 0.4 is bringing seamless voice interaction, improved logs, and enhanced workflow control to elevate your AI projects.",
    image: { url: "https://buildel.ai/og-image-0_3.png" },
    article: (
      <>
        <p className="lead">
          We’re thrilled to introduce BuildEL 0.4, an update focused on
          enhancing the user experience, improving workflow management, and
          adding new dimensions to how you interact with AI applications ✨
        </p>

        <p className="lead">
          This release introduces several features that will streamline your
          processes and bring more control and flexibility to your workflow.
        </p>

        <h2>Webchat Improvements: Seamless Conversation Management</h2>

        <p>
          We’ve redesigned the chat interface, making it much more intuitive and
          readable. The updated design enhances clarity and ease of use.
        </p>

        <p>
          Additionally, BuildEL’s Webchat experience has been reimagined to
          ensure smoother transitions between runs. Now, users can easily rejoin
          ongoing conversations without losing context, enabling more fluid and
          consistent interactions!
        </p>

        <Video src="/assets/posts/v04/re-joinning.webm" />

        <p>
          This improvement is especially useful for projects that rely on
          long-running conversations, whether for customer service applications
          or complex problem-solving tasks.
        </p>

        <p>
          On top of these enhancements, we’ve also added functionality that
          allows the chat to provide references to specific chunks of data from
          the knowledge base (RAG). Whenever the chat retrieves information from
          documents, it now includes links to the exact sources and references
          to the data chunks used. This gives users full transparency and the
          ability to trace the origins of the information, ensuring accuracy and
          reliability in responses.
        </p>

        <h2>Logs Enhancements: More Transparency and Control</h2>
        <p>
          Now, you can access logs directly in the workflow builder! This means
          you no longer have to jump between tabs or windows to troubleshoot
          your workflows.
        </p>

        <Video src="/assets/posts/v04/logs.webm" />

        <p>
          With logs integrated right into your building interface, monitoring
          execution, tracking errors, and debugging has never been easier. Logs
          are displayed in real-time as workflows are executed, making it
          simpler to pinpoint issues and optimize processes as you go. This
          enhancement is aimed at giving you deeper visibility and more control
          over your workflows, saving valuable time.
        </p>

        <p>
          We’ve also added the option to use the Webchat interface directly
          within the workflow builder, allowing users to test and interact with
          their workflows in real-time without leaving the builder environment.
          This makes it easier to see how conversations and workflows behave
          together in a seamless manner.
        </p>

        <h2>Workflow Management</h2>

        <p>
          Managing workflows can sometimes get overwhelming, but with workflow
          pinning, you can now have your most critical workflows always at the
          top of your list. This enhancement provides you with greater
          flexibility to organize and prioritize your workflows, ensuring quick
          access to the ones that matter most.
        </p>

        <Video src="/assets/posts/v04/favorites.webm" />

        <blockquote>
          This is especially useful for users who take a compositional approach
          to their workflows and frequently use the workflow call block to
          trigger one workflow within another.
        </blockquote>

        <p>
          By pinning important workflows, you can quickly access and manage
          them, streamlining your process and keeping everything organized.
        </p>

        <p>
          Additionally, we’ve redesigned the workflow cards to display more key
          information at a glance, making it easier to identify important
          details without needing to open each workflow. This further enhances
          the overall management experience and keeps everything in one easily
          accessible place.
        </p>

        <h2>Voice Chat: The Future of AI Interaction 🎙️</h2>
        <p>
          We’re excited to introduce the new Voice Chat interface in BuildEL!
          Now, users can engage in real-time, voice-based conversations with
          their workflows! This feature opens up a world of possibilities for a
          more natural and intuitive interaction with AI applications.
        </p>

        <Video src="/assets/posts/v04/voicechat.mp4" />

        <p>
          Whether you're developing customer service bots, voice-activated
          systems, or accessible interfaces, the Voice Chat functionality opens
          up new possibilities for more natural and intuitive communication.
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
          . If you want to build AI apps with or without BuildEL hit us up
          <a href="https://www.elpassion.com" className="ml-1">
            @EL Passion
          </a>
          .
        </p>
      </>
    ),
  },
  {
    slug: "buildel-0_3",
    title: {
      text: "Unleashing the power of Knowledge Graphs - Release",
      animatedText: "v0.3",
    },
    date: "Thu, Aug 22, 2024",
    description:
      "BuildEL 0.3 releases with datasets, experiments, graphs, document search improvements and images support. All of that plus UX improvements and bug fixes.",
    image: { url: "https://buildel.ai/og-image-0_3.png" },
    article: (
      <>
        <p className="lead">
          The BuildEL team has been on fire these past few weeks, and we're
          excited to unveil a massive update packed with features that will
          revolutionize the way you build and manage AI applications! ✨ We've
          added new features to help improve your workflows and check for
          regressions in a timely manner. Adittionally we've explored a
          completely new (<i>even in our fast AI world</i>), topic of displaying
          embeddings in a <b>2d graph</b> Besides that minor updates to some
          tools and UX improvements. All together makes this a huge release that
          we hope you will like as much as we do!
        </p>
        <h2>
          Dive Deep into Your Knowledge Base with the All-New Knowledge Graph!
        </h2>
        <p>
          Imagine seeing the intricate relationships between your data
          visualized in a stunning 2D graph. That's exactly what BuildEL 0.3
          brings to the table!
        </p>
        <Image
          src="/assets/posts/graph-1.png"
          alt="BuildEL 0.3 new graph view of knowledge base"
        />
        <h3>How it works?</h3>
        <p>
          The graph is an approximation of how a multi level embedding structure
          we generate for the knowledge base search would look like in 2d. It's
          a lot of complicated math to do that but overall the outcome is:
        </p>
        <ul>
          <li>
            <b>Uncover hidden connections:</b> Related texts cluster together,
            while irrelevant ones stay far apart, giving you a clear picture of
            your knowledge base's structure
          </li>
          <li>
            <b>Effortless exploration:</b> Click on any node to access details,
            navigate through your data with ease, and unearth valuable insights.
            Go to next, previous chunk in the document. Find related chunks and
            all other information about the chunk.
          </li>
          <li>
            <b>Search made simple:</b> Find specific information quickly by
            searching directly within the graph interface. Understand what your
            search returns and why it does that. Optimize your search parameters
            for your usecase.
          </li>
        </ul>

        <Image
          src="/assets/posts/graph-2.png"
          alt="BuildEL 0.3 new graph details view of knowledge base"
        />
        <h3>Examples of what information it provides us</h3>
        <ul>
          <li>
            If you or your bot searches for something there's a small chance
            that 1 query would return chunks that are far away from eachother.
          </li>
          <li>
            If there are many different chunks clustered together you should
            probably filter unneeded ones before doing a search.
          </li>
        </ul>
        <blockquote>
          We will explore more about this topic in an upcoming technical blog
          post. Keep getting informed by joining our discord or registering at{" "}
          <a href={"https://app.buildel.ai"}>https://app.buildel.ai/</a>
        </blockquote>
        <h2>Experiments & Datasets: Say Goodbye to Manual Testing!</h2>
        <p>
          Being in production with BuildEL projects keeps us busy with
          maintanance. What proved to be timeconsuming and complicated in those
          projects was checking the performance / improvements / degradations of
          our changes to workflows and knowledge bases. To improve ours and
          yours lives we're introducing Experiments and Datasets.
        </p>
        <h3>Datasets</h3>
        <p>
          Datasets are used to store multiple rows of data to run with your
          workflows. You can upload CSV files filed with rows of your data or
          manually add them with a JSON editor.
        </p>

        <Image
          src="/assets/posts/dataset-1.png"
          alt="BuildEL 0.3 new datasets"
        />

        <blockquote>
          Currently we support only JSON dataset rows but we're planning to
          introduce others soon.
        </blockquote>

        <h3>Experiments</h3>
        <p>
          After setting up your datasets you can now use them to automate your
          testing with experiments. See the progress of your setup with our
          summaries for each row of the dataset, each run of the experiment and
          the experiment as a whole.
        </p>
        <Image
          src="/assets/posts/experiment-1.png"
          alt="BuildEL 0.3 new experiments"
        />
        <blockquote>
          We're working now on improving the documentation and blocks to ensure
          that you can easily evaluate your workflows.
        </blockquote>
        <Image
          src="/assets/posts/experiment-2.png"
          alt="BuildEL 0.3 new experiments"
        />
        <h2>Images</h2>
        <h3>Image Input</h3>
        <p>
          We've added an image input to allow you to send images both to blocks
          used to ie. transform images to text, but also directly to chat block.
        </p>
        <Image
          src="/assets/posts/image-1.png"
          alt="BuildEL 0.3 new experiments"
        />
        <p>
          When picking image input in your Chat config you will now be able to
          send images directly through chat input. Similar to ie. ChatGPT
          interface.
        </p>
        <Image
          src="/assets/posts/image-2.png"
          alt="BuildEL 0.3 new experiments"
        />
        <h3>Hugging Face Image Classification</h3>
        <p>
          We've also added hugging face compliant block for Image
          Classification. Now you can input an image directly through Image
          Input and later send it to this new block and receive the result
          directly from HF.
        </p>
        <Image
          src="/assets/posts/image-3.png"
          alt="Hugging Face Image Classification block"
        />
        <p>
          In the near future we're planning to support more Inherence endpoints
          from hugging face
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
          . If you want to build AI apps with or without BuildEL hit us up
          <a href="https://www.elpassion.com" className="ml-1">
            @EL Passion
          </a>
          .
        </p>
      </>
    ),
  },
  {
    slug: "buildel-0_2",
    title: { text: "Release", animatedText: "v0.2" },
    date: "Mon, Jul 24, 2024",
    description:
      "After a month a new release is ready. Here is BuildEL 0.2 introducing new design, interfaces, bug fixes and UX improvements.",
    image: { url: "https://buildel.ai/og-image-0_2.png" },
    article: (
      <>
        <p className="lead">
          BuildEL 0.2 is here! We've managed to do a lot in the last month
          including new features, bug fixes and UX improvements. All of this is
          thanks to our team of developers who worked hard to make the new
          version a reality.
        </p>
        <h2>New design</h2>
        <h3>Colors</h3>
        <p>
          BuildEL 0.2 has a new lighter design that is more modern and less
          cluttered. We've changed the sidebar with all the tools you need to
          build your workflows.
        </p>
        <Image
          src="/assets/posts/buildel-0_2-design.png"
          alt="BuildEL 0.2 new main view"
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
          alt="BuildEL 0.2 new workflow editor"
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
          alt="BuildEL 0.2 new graph database traversal"
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
          . If you want to build AI apps with or without BuildEL hit us up
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
    title: { text: "Introducing BuildEL", animatedText: "0.1" },
    date: "Mon, Jun 10, 2024",
    description:
      "We are thrilled to unveil the latest milestone in our journey: BuildEL 0.1! With each iteration, we aim to enhance your experience, empower your creativity, and streamline your workflow. Today, we're excited to share the highlights of what's in store with this new version.",
    image: { url: "https://buildel.ai/og-image-0_1.png" },
    article: (
      <>
        <p className="lead">
          We are thrilled to unveil the latest milestone in our journey: BuildEL
          0.1! Our fully open source tool for AI workflow automations. For the
          past few weeks we've been working very hard to polish the app enough
          to release the new features and we're excited to share with you some
          of the highlights of this release.
        </p>
        <h2>New blocks</h2>
        <p>
          We've added new blocks to BuildEL that allow you to build more complex
          workflows. Browser Tool and CSV Search should help you with that.
        </p>
        <h3>Browser Tool</h3>
        <p>
          Your BuildEL workflows will now be able to read any webpage you want.
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
          Later if you want you can use BuildEL built in Chat interface to
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
          BuildEL now supports creating <b>in memory</b> databases based on your
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
          BuildEL now supports Mermaid Diagrams. You can ask chat to create a
          Mermaid diagram for you and it will be rendered in our UI.
        </p>
        <Video src="/assets/posts/mermaid.mp4" />
        <blockquote>
          You can read more about Mermaid and it's capabilities here:
          <a href="https://mermaid.js.org/">Mermaid</a>
        </blockquote>
        <h2>Chat File Input Support</h2>
        <p>
          Finally BuildEL Chat Interface has file support. You can now add and
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
          build AI apps with or without BuildEL hit us up
          <a href="https://www.elpassion.com">@EL Passion</a>.
        </p>
      </>
    ),
  },
];
