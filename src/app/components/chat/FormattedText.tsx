/** Renders **bold** spans and "- " bullet lines from plain chat text, without pulling in a markdown library. */
function renderInline(text: string, keyPrefix: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean);
  return parts.map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={`${keyPrefix}-${i}`}>{part.slice(2, -2)}</strong>
    ) : (
      <span key={`${keyPrefix}-${i}`}>{part}</span>
    )
  );
}

export function FormattedText({ text }: { text: string }) {
  const lines = text.split("\n");
  const blocks: { type: "bullets" | "text"; lines: string[] }[] = [];

  for (const line of lines) {
    const isBullet = /^\s*[-•]\s+/.test(line);
    const last = blocks[blocks.length - 1];
    const type = isBullet ? "bullets" : "text";
    if (last && last.type === type) {
      last.lines.push(line);
    } else {
      blocks.push({ type, lines: [line] });
    }
  }

  return (
    <>
      {blocks.map((block, bi) =>
        block.type === "bullets" ? (
          <ul key={bi} style={{ margin: "6px 0", paddingLeft: "18px" }}>
            {block.lines.map((line, li) => (
              <li key={li} style={{ marginBottom: "4px" }}>
                {renderInline(line.replace(/^\s*[-•]\s+/, ""), `${bi}-${li}`)}
              </li>
            ))}
          </ul>
        ) : (
          block.lines.map((line, li) =>
            line.trim().length === 0 ? (
              <div key={`${bi}-${li}`} style={{ height: "8px" }} />
            ) : (
              <p key={`${bi}-${li}`} style={{ margin: 0 }}>
                {renderInline(line, `${bi}-${li}`)}
              </p>
            )
          )
        )
      )}
    </>
  );
}
