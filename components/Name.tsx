import type { CSSProperties } from "react";

// The big name. Every letter rises through a baseline mask on load and
// dips like a piano key on hover.

export function Name({ first, last }: { first: string; last: string }) {
  const words = [first, last];
  let n = 0;
  return (
    <h1 className="name">
      <span className="sr-only">
        {first} {last}
      </span>
      {words.map((word) => (
        <span className="name-word" aria-hidden="true" key={word}>
          {Array.from(word).map((ch, i) => (
            <span className="ltr" key={i} style={{ "--i": n++ } as CSSProperties}>
              <span className="ltr-in">{ch}</span>
            </span>
          ))}
        </span>
      ))}
    </h1>
  );
}
