import { useCallback, useEffect, useState } from "react";
import type { ChatMessage } from "./types";
import { sendChatMessage } from "./chatApi";

const STORAGE_KEY = "reddonatura_chat_history";

const WELCOME_MESSAGE: ChatMessage = {
  id: "welcome",
  role: "assistant",
  content:
    "Hi! I'm the Reddonatura Assistant 👋 I can answer questions about our organic waste converters, biogas plants, solar solutions, and more. What would you like to know?",
  timestamp: Date.now(),
};

const FALLBACK_REPLY =
  "Sorry, I'm having trouble connecting right now. Please try again in a moment, or reach our team directly at info@reddonatura.com or +91 77609 87934.";

function loadHistory(): ChatMessage[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [WELCOME_MESSAGE];
    const parsed = JSON.parse(raw) as ChatMessage[];
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : [WELCOME_MESSAGE];
  } catch {
    return [WELCOME_MESSAGE];
  }
}

export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>(() => loadHistory());
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch {
      // localStorage unavailable (e.g. private browsing) — history just won't persist.
    }
  }, [messages]);

  const sendMessage = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || loading) return;

      const userMessage: ChatMessage = {
        id: `${Date.now()}-user`,
        role: "user",
        content: trimmed,
        timestamp: Date.now(),
      };

      const historyForRequest = messages.filter((m) => m.id !== "welcome" || m.content !== WELCOME_MESSAGE.content);
      setMessages((prev) => [...prev, userMessage]);
      setLoading(true);

      try {
        const reply = await sendChatMessage(trimmed, historyForRequest);
        setMessages((prev) => [
          ...prev,
          { id: `${Date.now()}-assistant`, role: "assistant", content: reply, timestamp: Date.now() },
        ]);
      } catch {
        setMessages((prev) => [
          ...prev,
          {
            id: `${Date.now()}-assistant-error`,
            role: "assistant",
            content: FALLBACK_REPLY,
            timestamp: Date.now(),
            isError: true,
          },
        ]);
      } finally {
        setLoading(false);
      }
    },
    [messages, loading]
  );

  const clearChat = useCallback(() => {
    setMessages([{ ...WELCOME_MESSAGE, id: `welcome-${Date.now()}`, timestamp: Date.now() }]);
  }, []);

  return { messages, loading, sendMessage, clearChat };
}
