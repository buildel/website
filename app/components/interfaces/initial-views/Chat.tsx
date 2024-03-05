interface ChatProps {
  onPredefinedMessageClick: (message: string) => void;
}
export const Chat = ({ onPredefinedMessageClick }: ChatProps) => {
  const topics = ["Tell a joke", "What was first, egg or chicken?"];

  return (
    <div className="h-full p-4 rounded-xl text-neutral-950 text-sm flex flex-col items-center justify-center">
      <div className="flex items-start gap-x-4">
        <div className="h-14 w-14 rounded-full bg-yellow-50 border border-yellow-100 flex items-center justify-center text-3xl">
          👋
        </div>
        <div className="flex flex-col">
          <p className="font-primaryBold text-lg">Hey!</p>
          <p className="text-neutral-800 mt-1 text-base">Ask me anything</p>
        </div>
      </div>

      <div className="w-full flex justify-between items-center gap-x-3 my-4">
        <span className="border-t border-neutral-100 w-full h-0" />
        <p className="font-primaryBold text-neutral-400">or</p>
        <span className="border-t border-neutral-100 w-full h-0" />
      </div>

      <div className="flex flex-col items-center">
        <p>Choose topic</p>

        <div className="flex flex-wrap gap-x-3 items-center w-full mt-2">
          {topics.map((topic, index) => (
            <button
              key={index}
              onClick={() => onPredefinedMessageClick(topic)}
              className="px-2 py-1 rounded-full bg-neutral-100 hover:bg-neutral-200"
            >
              {topic}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
