import React, { useEffect, useState } from "react";
interface HeroAnimatedWordProps {
  words: string[];
}

export const HeroAnimatedWord: React.FC<HeroAnimatedWordProps> = ({
  words,
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="overflow-hidden h-[72px] relative">
      {words.map((word, index) => (
        <div
          key={word}
          className={`text-secondary-500 absolute w-full transition-opacity duration-400 ease-out transform ${
            index === currentWordIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          {word}
        </div>
      ))}
    </div>
  );
};
