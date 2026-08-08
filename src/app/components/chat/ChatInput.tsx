import { useRef, useState, type KeyboardEvent } from "react";
import { Send } from "lucide-react";

const MAX_LENGTH = 2000;

export function ChatInput({
  onSend,
  disabled,
}: {
  onSend: (text: string) => void;
  disabled: boolean;
}) {
  const [value, setValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const resize = () => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 110)}px`;
  };

  const submit = () => {
    const trimmed = value.trim();
    if (!trimmed || disabled) return;
    onSend(trimmed);
    setValue("");
    requestAnimationFrame(resize);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submit();
    }
  };

  return (
    <div
      className="flex-shrink-0 flex items-end gap-2 px-3 py-2.5"
      style={{ backgroundColor: "#ffffff", borderTop: "1px solid rgba(5,49,20,0.08)" }}
    >
      <textarea
        ref={textareaRef}
        value={value}
        maxLength={MAX_LENGTH}
        onChange={(e) => {
          setValue(e.target.value);
          resize();
        }}
        onKeyDown={handleKeyDown}
        placeholder="Ask a question…"
        rows={1}
        aria-label="Type a message"
        className="flex-1 resize-none outline-none"
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "0.85rem",
          color: "#0C1A0D",
          background: "#F5F4EF",
          border: "1px solid rgba(5,49,20,0.1)",
          borderRadius: "14px",
          padding: "9px 12px",
          maxHeight: "110px",
        }}
      />
      <button
        onClick={submit}
        disabled={disabled || !value.trim()}
        aria-label="Send message"
        className="flex items-center justify-center flex-shrink-0 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed hover:enabled:-translate-y-0.5"
        style={{
          width: "38px",
          height: "38px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #1FA05A, #178B4C)",
          boxShadow: "0 6px 16px rgba(23,139,76,0.35)",
        }}
      >
        <Send className="w-4 h-4" style={{ color: "#ffffff" }} />
      </button>
    </div>
  );
}
