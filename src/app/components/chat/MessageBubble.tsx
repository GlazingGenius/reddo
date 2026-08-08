import { useState } from "react";
import { Check, Copy } from "lucide-react";
import type { ChatMessage } from "./types";
import { FormattedText } from "./FormattedText";

function formatTime(timestamp: number) {
  return new Date(timestamp).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
}

export function MessageBubble({ message }: { message: ChatMessage }) {
  const [copied, setCopied] = useState(false);
  const isUser = message.role === "user";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(message.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // Clipboard API unavailable — silently ignore.
    }
  };

  return (
    <div className={`group flex flex-col ${isUser ? "items-end" : "items-start"}`}>
      <div
        className="max-w-[85%] min-w-0 px-4 py-2.5"
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "0.85rem",
          lineHeight: 1.6,
          color: isUser ? "#ffffff" : "#0C1A0D",
          background: isUser ? "linear-gradient(135deg, #178B4C, #0D8239)" : "#ffffff",
          border: isUser ? "none" : "1px solid rgba(23,139,76,0.14)",
          borderRadius: isUser ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
          boxShadow: isUser ? "0 6px 16px rgba(13,130,57,0.22)" : "0 4px 14px rgba(5,49,20,0.06)",
          overflowWrap: "anywhere",
          wordBreak: "break-word",
        }}
      >
        <FormattedText text={message.content} />
      </div>

      <div className="flex items-center gap-2 mt-1 px-1" style={{ minHeight: "16px" }}>
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "10px", color: "#9AA89B" }}>
          {formatTime(message.timestamp)}
        </span>

        {!isUser && (
          <button
            onClick={handleCopy}
            aria-label="Copy response"
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-150 flex items-center gap-1"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "10px", color: "#8A9E8B" }}
          >
            {copied ? (
              <>
                <Check className="w-2.5 h-2.5" style={{ color: "#178B4C" }} />
                <span style={{ color: "#178B4C" }}>Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-2.5 h-2.5" />
                Copy
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
