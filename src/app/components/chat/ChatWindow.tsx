import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Bot, Sparkles, Trash2, X } from "lucide-react";
import { useChat } from "./useChat";
import { MessageBubble } from "./MessageBubble";
import { TypingIndicator } from "./TypingIndicator";
import { ChatInput } from "./ChatInput";
import { SuggestedQuestions } from "./SuggestedQuestions";

export function ChatWindow({
  onClose,
  onOpenLeadForm,
}: {
  onClose: () => void;
  onOpenLeadForm: () => void;
}) {
  const { messages, loading, sendMessage, clearChat } = useChat();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  const showSuggestions = messages.length === 1 && messages[0].role === "assistant" && !loading;

  return (
    <motion.div
      initial={{ opacity: 0, y: 18, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 14, scale: 0.94 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="mb-1 flex flex-col w-[calc(100vw-2rem)] sm:w-[380px] h-[min(72vh,560px)] sm:h-[580px] max-h-[640px] overflow-hidden rounded-[22px]"
      style={{ backgroundColor: "#ffffff", boxShadow: "0 30px 70px rgba(5,49,20,0.4), 0 0 0 1px rgba(23,139,76,0.1)" }}
    >
      {/* Header */}
      <div
        className="relative overflow-hidden px-5 py-4 flex-shrink-0"
        style={{ background: "linear-gradient(135deg, #0B1F10 0%, #0D8239 90%)" }}
      >
        <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full" style={{ background: "radial-gradient(circle, rgba(217,182,92,0.35), transparent 70%)" }} />
        <div className="relative flex items-center justify-between gap-2">
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <div
              className="relative flex items-center justify-center w-10 h-10 rounded-full flex-shrink-0"
              style={{ background: "linear-gradient(145deg, #D9B65C, #A0780E)", boxShadow: "0 6px 16px rgba(160,120,14,0.5), inset 0 1px 1px rgba(255,255,255,0.4)" }}
            >
              <Bot className="w-5 h-5" style={{ color: "#0B1F10" }} />
            </div>
            <div className="min-w-0">
              <div
                className="truncate"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontSize: "0.98rem", color: "#ffffff" }}
              >
                Reddonatura Assistant
              </div>
              <div className="flex items-center gap-1.5 mt-0.5 min-w-0">
                <span className="relative flex w-1.5 h-1.5 flex-shrink-0">
                  <span className="absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping" style={{ backgroundColor: "#4ade80" }} />
                  <span className="relative inline-flex rounded-full w-1.5 h-1.5" style={{ backgroundColor: "#4ade80" }} />
                </span>
                <span
                  className="truncate"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "10.5px", letterSpacing: "0.04em", color: "rgba(255,255,255,0.8)" }}
                >
                  Online now · AI-powered
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1 flex-shrink-0">
            <button
              onClick={clearChat}
              aria-label="Clear chat"
              title="Clear chat"
              className="flex items-center justify-center w-7 h-7 rounded-full transition-colors duration-200 hover:bg-white/15"
            >
              <Trash2 className="w-3.5 h-3.5" style={{ color: "rgba(255,255,255,0.85)" }} />
            </button>
            <button
              onClick={onClose}
              aria-label="Close chat"
              className="flex items-center justify-center w-7 h-7 rounded-full transition-colors duration-200 hover:bg-white/15"
            >
              <X className="w-4 h-4" style={{ color: "rgba(255,255,255,0.85)" }} />
            </button>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden px-4 py-4 space-y-4" style={{ backgroundColor: "#F9F8F4" }}>
        {messages.map((m) => (
          <MessageBubble key={m.id} message={m} />
        ))}
        {loading && <TypingIndicator />}
      </div>

      {/* Suggestions + quick action */}
      <div className="flex-shrink-0 px-3 pt-2" style={{ backgroundColor: "#F9F8F4" }}>
        {showSuggestions && <SuggestedQuestions onSelect={sendMessage} />}
        <button
          onClick={onOpenLeadForm}
          className="w-full flex items-center justify-center gap-2 mt-1 mb-2 py-2 rounded-full text-[10.5px] tracking-[0.1em] uppercase transition-all duration-200 hover:-translate-y-0.5"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 600,
            color: "#A0780E",
            background: "rgba(160,120,14,0.08)",
            border: "1px solid rgba(160,120,14,0.25)",
          }}
        >
          <Sparkles className="w-3 h-3" />
          Talk to Our Team / Get a Quote
        </button>
      </div>

      {/* Input */}
      <ChatInput onSend={sendMessage} disabled={loading} />

      <div className="flex-shrink-0 text-center py-1.5" style={{ backgroundColor: "#ffffff" }}>
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "9.5px", color: "#9AA89B" }}>
          Answers are based on official Reddonatura information.
        </span>
      </div>
    </motion.div>
  );
}
