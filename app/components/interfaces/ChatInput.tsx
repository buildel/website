import { FormEvent, ChangeEvent, useMemo, useState, createRef } from "react";
import clsx from "clsx";

interface ChatInputProps {
  onSubmit: (message: string) => void;
  generating?: boolean;
  disabled?: boolean;
}

export function ChatInput({ onSubmit, generating, disabled }: ChatInputProps) {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = createRef<HTMLInputElement>();

  const isDisabled = useMemo(() => {
    return disabled || generating || !value.trim();
  }, [value, generating, disabled]);

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const updateValue = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setValue(target.value);
  };

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    if (isDisabled) return;
    event.preventDefault();
    onSubmit(value);
    setValue("");
    inputRef.current?.focus();
  };

  return (
    <form
      onSubmit={submitForm}
      className={clsx(
        "relative w-full flex items-center gap-x-2",
        {
          "outline-offset-1 outline-primary-400": isFocused,
        }
      )}
    >
      <input
        disabled={disabled}
        className="bg-neutral-100 w-full text-base text-neutral-950 py-2 px-4 placeholder:text-neutral-400 rounded-lg focus:outline focus:outline-neutral-700"
        placeholder="Ask a question..."
        value={value}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={updateValue}
        ref={inputRef}
      />
      <button className="px-4 py-2 rounded-lg bg-neutral-900 text-white">Send</button>
    </form>
  );
}
