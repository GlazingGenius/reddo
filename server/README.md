# Reddonatura Chat Server

Express backend that powers the Reddonatura AI customer support chatbot. It receives chat messages from the website's chat widget, adds the Reddonatura knowledge base + system prompt, calls the Groq API, and returns the assistant's reply. The Groq API key never reaches the browser.

## Requirements

- Node.js 18+ (uses the built-in `fetch`)
- A free Groq API key — https://console.groq.com/keys

## Local setup

```bash
cd server
npm install
cp .env.example .env
# edit .env and paste your GROQ_API_KEY
npm run dev
```

The server starts on `http://localhost:5000` (or `PORT` from `.env`). Health check: `GET /health`.

## API

### `POST /api/chat`

Request body:

```json
{
  "message": "What products do you offer?",
  "history": [
    { "role": "user", "content": "Hi" },
    { "role": "assistant", "content": "Hello! How can I help?" }
  ]
}
```

- `message` — required, non-empty string, max 2000 characters.
- `history` — optional array of prior turns (`role` is `"user"` or `"assistant"`). Only the last 20 entries are used.

Response:

```json
{ "reply": "We offer...", "timestamp": "2026-01-01T12:00:00.000Z" }
```

Errors return `{ "error": "..." }` with an appropriate HTTP status (400 for bad input, 429 if rate-limited, 500/502 for upstream failures).

Requests are rate-limited to 20/minute per IP to protect the free Groq quota.

## Environment variables

| Variable | Required | Description |
|---|---|---|
| `GROQ_API_KEY` | yes | Your Groq API key. Kept server-side only. |
| `GROQ_MODEL` | no | Groq model id. Defaults to `llama-3.3-70b-versatile`. |
| `PORT` | no | Port to listen on. Defaults to `5000`. |
| `FRONTEND_ORIGIN` | recommended | Comma-separated list of allowed CORS origins (your local dev URL + your deployed Vercel URL). If unset, all origins are allowed — fine for local testing, not for production. |

## Deploying to Render (free tier)

1. Push this repository to GitHub (the `server/` folder can live inside the same repo as the frontend).
2. In Render, click **New +** → **Web Service**, connect the repo.
3. Set **Root Directory** to `server`.
4. **Build Command**: `npm install`
5. **Start Command**: `npm start`
6. Add environment variables under **Environment**: `GROQ_API_KEY`, `GROQ_MODEL` (optional), `FRONTEND_ORIGIN` (your Vercel URL, e.g. `https://reddonatura.vercel.app`).
7. Deploy. Render gives you a URL like `https://reddonatura-chat-server.onrender.com` — use this as `VITE_CHAT_API_URL` in the frontend's environment variables on Vercel.

Note: Render's free tier spins down after inactivity, so the first request after idle time may take a few seconds to respond — the chat widget's typing indicator covers this gracefully.

## Updating the knowledge base

Edit `src/data/knowledgeBase.json`. It's plain JSON grouped by category (company, productCategories, industriesServed, services, clients, testimonials, contact, policies, generalFaqs, etc.) and is injected into the system prompt on every request — no build step or restart-sensitive caching involved beyond a normal server restart.
