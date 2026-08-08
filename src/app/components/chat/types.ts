export type ChatRole = "user" | "assistant";

export interface ChatMessage {
  id: string;
  role: ChatRole;
  content: string;
  timestamp: number;
  /** True when this assistant message is a local fallback (API call failed). */
  isError?: boolean;
}
