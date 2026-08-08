import rateLimit from "express-rate-limit";

// Keeps the free Groq quota safe from abuse: 20 requests/minute per IP.
export const chatRateLimiter = rateLimit({
  windowMs: 60 * 1000,
  limit: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many messages sent. Please wait a moment and try again." },
});
