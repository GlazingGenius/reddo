import type { ChatMessage } from "./types";

const API_BASE_URL = (import.meta.env.VITE_CHAT_API_URL as string | undefined)?.replace(/\/$/, "");

export class ChatApiError extends Error {}

/**
 * Sends the user's message plus recent conversation history to the backend
 * /api/chat endpoint and returns the assistant's reply.
 */
export async function sendChatMessage(message: string, history: ChatMessage[]): Promise<string> {
  if (!API_BASE_URL) {
    throw new ChatApiError(
      "Chat backend URL is not configured. Set VITE_CHAT_API_URL in your .env file."
    );
  }

  const response = await fetch(`${API_BASE_URL}/api/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      message,
      history: history.slice(-12).map((m) => ({ role: m.role, content: m.content })),
    }),
  });

  if (!response.ok) {
    const body = await response.json().catch(() => null);
    throw new ChatApiError(body?.error || `Chat request failed (${response.status}).`);
  }

  const data = await response.json();
  if (!data?.reply) {
    throw new ChatApiError("Chat response was empty.");
  }

  return data.reply as string;
}
