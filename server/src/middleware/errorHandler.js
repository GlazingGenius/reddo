// Centralised error handler — keeps error shapes consistent and never leaks internals.
export function errorHandler(err, req, res, _next) {
  const status = err.status && Number.isInteger(err.status) ? err.status : 500;

  if (status >= 500) {
    console.error("[chat-server]", err);
  }

  const friendlyMessage =
    status === 429
      ? "Our assistant is receiving a lot of requests right now. Please try again in a moment."
      : "Something went wrong on our end. Please try again or contact our team at info@reddonatura.com.";

  res.status(status).json({ error: friendlyMessage });
}
