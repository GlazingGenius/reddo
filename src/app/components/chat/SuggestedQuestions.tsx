const SUGGESTIONS = [
  "What products do you offer?",
  "How does an organic waste converter work?",
  "Tell me about your biogas plants",
  "How do I get a quote?",
];

export function SuggestedQuestions({ onSelect }: { onSelect: (question: string) => void }) {
  return (
    <div className="flex flex-wrap gap-2 px-1 pb-1">
      {SUGGESTIONS.map((q) => (
        <button
          key={q}
          onClick={() => onSelect(q)}
          className="transition-all duration-200 hover:-translate-y-0.5"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "11.5px",
            fontWeight: 500,
            color: "#178B4C",
            background: "rgba(23,139,76,0.08)",
            border: "1px solid rgba(23,139,76,0.25)",
            borderRadius: "999px",
            padding: "6px 12px",
          }}
        >
          {q}
        </button>
      ))}
    </div>
  );
}
