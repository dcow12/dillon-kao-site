import type { CSSProperties } from "react";

// The big serif name. Each letter of the first name rises through a baseline mask
// on load and dips like a piano key on hover; the last name gets a highlighter box.

export function Name({ first, last }: { first: string; last: string }) {
  return (
    <h1 className="name">
      <span className="sr-only">
        {first} {last}
      </span>
      <span className="name-first" aria-hidden="true">
        {Array.from(first).map((ch, i) => (
          <span className="ltr" key={i} style={{ "--i": i } as CSSProperties}>
            <span className="ltr-in">{ch}</span>
          </span>
        ))}
      </span>
      <span className="name-last" aria-hidden="true">
        <span className="name-last-text">{last}</span>
      </span>
    </h1>
  );
}
