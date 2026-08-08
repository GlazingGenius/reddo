import "dotenv/config";
import app from "./app.js";

const PORT = process.env.PORT || 5000;

if (!process.env.GROQ_API_KEY) {
  console.warn(
    "[chat-server] Warning: GROQ_API_KEY is not set. Copy .env.example to .env and add your key."
  );
}

app.listen(PORT, () => {
  console.log(`[chat-server] Reddonatura chat API listening on port ${PORT}`);
});
