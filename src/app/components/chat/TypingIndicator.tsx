export function TypingIndicator() {
  return (
    <div className="flex items-start">
      <div
        className="flex items-center gap-1.5 px-4 py-3"
        style={{
          background: "#ffffff",
          border: "1px solid rgba(23,139,76,0.14)",
          borderRadius: "16px 16px 16px 4px",
          boxShadow: "0 4px 14px rgba(5,49,20,0.06)",
        }}
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="rounded-full animate-bounce"
            style={{
              width: "6px",
              height: "6px",
              backgroundColor: "#178B4C",
              opacity: 0.6,
              animationDelay: `${i * 0.15}s`,
              animationDuration: "0.9s",
            }}
          />
        ))}
      </div>
    </div>
  );
}
