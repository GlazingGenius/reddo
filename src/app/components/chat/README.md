# Chat widget

Self-contained AI customer-support chat UI, wired into the existing floating action button in `FloatingActions.tsx` (the same `Bot` icon trigger that already existed — only its panel content changed).

| File | Responsibility |
|---|---|
| `ChatWindow.tsx` | The whole chat panel: header (avatar, status, clear/close), scrollable message list with auto-scroll, suggested-question chips, "Get a Quote" quick action, and the input bar. |
| `MessageBubble.tsx` | One chat bubble — user (green, right) or assistant (white, left) — with timestamp and a copy-to-clipboard button on assistant messages. |
| `FormattedText.tsx` | Renders `**bold**` and `- bullet` lines from the assistant's plain-text reply without pulling in a markdown library. |
| `TypingIndicator.tsx` | Three-dot bouncing indicator shown while waiting for a reply. |
| `ChatInput.tsx` | Auto-resizing textarea — Enter sends, Shift+Enter inserts a newline — plus the send button. |
| `SuggestedQuestions.tsx` | Starter question chips shown before the user's first message. |
| `useChat.ts` | State/logic hook: message list (persisted to `localStorage`), sending, loading state, clearing, and the local fallback message used if the API call fails. |
| `chatApi.ts` | Thin `fetch` wrapper that POSTs to `${VITE_CHAT_API_URL}/api/chat`. |
| `types.ts` | `ChatMessage` shape shared across the components. |

No new dependencies were added — the widget reuses `lucide-react` and `motion/react`, which were already in the project, and matches the site's existing color tokens (`#0D8239`/`#178B4C` green, `#A0780E` amber, `#053114` dark green, `'DM Sans'` / `'Playfair Display'` fonts).
