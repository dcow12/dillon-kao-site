import type { CSSProperties } from "react";
import { site } from "@/content/site";

type Item = (typeof site.experience)[number];

export function ExperienceList({ items }: { items: readonly Item[] }) {
  return (
    <ul className="exp-list">
      {items.map((item, i) => (
        <li key={item.role + item.org} className="exp-item" data-reveal style={{ "--i": i } as CSSProperties}>
          <div className="exp-logo" aria-hidden="true">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.logo} alt="" loading="lazy" decoding="async" />
          </div>
          <div className="exp-body">
            <div className="exp-head">
              <h3 className="exp-role">
                {item.role} <span className="exp-org">· {item.org}</span>
              </h3>
              <span className="exp-dates">{item.dates}</span>
            </div>
            <ul className="exp-points">
              {item.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  );
}
