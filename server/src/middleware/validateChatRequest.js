const MAX_MESSAGE_LENGTH = 2000;
const MAX_HISTORY_MESSAGES = 20;
const MAX_HISTORY_MESSAGE_LENGTH = 4000;

/**
 * Validates the POST /api/chat request body and normalises the
 * conversation history into the {role, content} shape the Groq API expects.
 */
export function validateChatRequest(req, res, next) {
  const { message, history } = req.body ?? {};

  if (typeof message !== "string" || message.trim().length === 0) {
    return res.status(400).json({ error: "Field 'message' is required and must be a non-empty string." });
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    return res.status(400).json({
      error: `Field 'message' must be ${MAX_MESSAGE_LENGTH} characters or fewer.`,
    });
  }

  let safeHistory = [];
  if (history !== undefined) {
    if (!Array.isArray(history)) {
      return res.status(400).json({ error: "Field 'history' must be an array when provided." });
    }

    safeHistory = history
      .filter(
        (entry) =>
          entry &&
          (entry.role === "user" || entry.role === "assistant") &&
          typeof entry.content === "string" &&
          entry.content.trim().length > 0
      )
      .slice(-MAX_HISTORY_MESSAGES)
      .map((entry) => ({
        role: entry.role,
        content: entry.content.slice(0, MAX_HISTORY_MESSAGE_LENGTH),
      }));
  }

  req.body.message = message.trim();
  req.body.history = safeHistory;
  next();
}
