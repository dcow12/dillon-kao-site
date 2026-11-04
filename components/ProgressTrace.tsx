import type { CSSProperties } from "react";
import type { Milestone } from "@/content/projects";
import { Check } from "./Icons";

// Progress drawn as a trace: one node per milestone. When it scrolls into view,
// a signal runs along the trace and fills each finished milestone in turn.

function states(milestones: Milestone[]) {
  const current = milestones.findIndex((m) => !m.done);
  let last = -1;
  milestones.forEach((m, i) => {
    if (m.done) last = i;
  });
  return {
    last,
    stateOf: (m: Milestone, i: number) => (m.done ? "done" : i === current ? "current" : "todo"),
  };
}

/** Compact horizontal trace for the home page. */
export function ProgressTrace({ milestones }: { milestones: Milestone[] }) {
  const total = milestones.length;
  const { last, stateOf } = states(milestones);
  const done = milestones.filter((m) => m.done).length;
  const fill = total > 1 && last > 0 ? (last / (total - 1)) * 100 : 0;

  return (
    <div className="proj-progress">
      <span className="trace" style={{ "--last": Math.max(last, 0) } as CSSProperties} aria-hidden="true">
        <span className="trace-track">
          <span className="trace-fill" style={{ width: `${fill}%` }} />
        </span>
        {milestones.map((m, i) => (
          <span key={i} className={`node ${stateOf(m, i)}`} style={{ "--n-i": i } as CSSProperties} />
        ))}
      </span>
      <span className="trace-count">
        {done} of {total} done
      </span>
    </div>
  );
}

/** Full milestone list for a project page. */
export function MilestoneList({ milestones }: { milestones: Milestone[] }) {
  const { stateOf } = states(milestones);

  return (
    <ol className="vtrace" data-reveal>
      {milestones.map((m, i) => {
        const state = stateOf(m, i);
        return (
          <li key={i} className={`vstep ${state}`} style={{ "--n-i": i } as CSSProperties}>
            <span className="vdot" aria-hidden="true">
              {m.done ? <Check /> : null}
            </span>
            <span className="vlabel">
              <span className="sr-only">{m.done ? "Done: " : "Planned: "}</span>
              {m.label}
              {state === "current" ? <span className="vnext">Next up</span> : null}
            </span>
          </li>
        );
      })}
    </ol>
  );
}
