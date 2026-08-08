import { buildSystemPrompt } from "../utils/systemPrompt.js";

const GROQ_ENDPOINT = "https://api.groq.com/openai/v1/chat/completions";

/**
 * Calls the Groq chat completions API with the Reddonatura system prompt,
 * recent conversation history, and the user's latest message.
 *
 * @param {{ message: string, history: Array<{role: 'user'|'assistant', content: string}> }} params
 * @returns {Promise<string>} the assistant's reply text
 */
export async function getChatCompletion({ message, history }) {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    const error = new Error("Server is missing GROQ_API_KEY.");
    error.status = 500;
    throw error;
  }

  const model = process.env.GROQ_MODEL || "llama-3.3-70b-versatile";

  const messages = [
    { role: "system", content: buildSystemPrompt() },
    ...history,
    { role: "user", content: message },
  ];

  const response = await fetch(GROQ_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      messages,
      temperature: 0.4,
      max_tokens: 600,
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text().catch(() => "");
    const error = new Error(
      `Groq API request failed (${response.status}): ${errorBody || response.statusText}`
    );
    error.status = response.status === 429 ? 429 : 502;
    throw error;
  }

  const data = await response.json();
  const reply = data?.choices?.[0]?.message?.content?.trim();

  if (!reply) {
    const error = new Error("Groq API returned an empty response.");
    error.status = 502;
    throw error;
  }

  return reply;
}
