import React, { useEffect, useState } from "react";
import clsx from "clsx";
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
          className={clsx(
            `text-secondary-500 absolute w-full transition-opacity duration-700`,
            {
              "opacity-100": currentWordIndex === index,
              "opacity-0": currentWordIndex !== index,
            }
          )}
        >
          {word}
        </div>
      ))}
    </div>
  );
};
