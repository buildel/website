import React, { useMemo, useState } from "react";
import clsx from "clsx";
import { Send } from "~/icons/Send";

interface ChatInputProps {
  onSubmit: (message: string) => void;
  generating?: boolean;
  disabled?: boolean;
}

export function ChatInput({ onSubmit, generating, disabled }: ChatInputProps) {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const isDisabled = useMemo(() => {
    return disabled || generating || !value.trim();
  }, [value, generating, disabled]);

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (isDisabled) return;
    e.preventDefault();
    onSubmit(value);
    setValue("");
  };

  return (
    <form
      onSubmit={handleOnSubmit}
      className={clsx(
        "relative w-full overflow-hidden rounded-full border border-neutral-950 bg-dark/50",
        {
          "outline outline-[1px] outline-offset-1 outline-primary-400":
            isFocused,
        }
      )}
    >
      <input
        disabled={disabled}
        className="bg-transparent !border-none w-full !outline-none text-sm text-neutral-200 py-1.5 pl-3 pr-8 placeholder:text-neutral-600"
        placeholder="Ask a question..."
        value={value}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
      />

      <button
        disabled={isDisabled}
        className="absolute top-1/2 right-1 -translate-y-1/2 text-neutral-100 w-6 h-6 rounded-full bg-primary-600 hover:bg-primary-500 flex justify-center items-center disabled:bg-neutral-950 disabled:text-neutral-300"
      >
        <Send className={clsx("w-3 h-3")} />
        {/*<Icon*/}
        {/*  size="none"*/}
        {/*  iconName={generating ? "loader" : "send"}*/}
        {/*  className={clsx("text-sm", { "animate-spin": generating })}*/}
        {/*/>*/}
      </button>
    </form>
  );
}
