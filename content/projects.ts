// Your projects, written from their READMEs.
//
// PLEASE CHECK: `status` labels were written from each README, and `started` dates come
// from when each GitHub repo was created. Milestones marked "INFERRED" below are my best
// guess at what's next; the README doesn't say so outright. Edit anything that's off.
//
// Each project has an idea, a progress list (milestones), and a short "how it works".
// To add links later, fill in `links`, for example:
//   links: [{ label: "Code", href: "https://github.com/..." }, { label: "Demo", href: "https://..." }]
// To add a cover image later, put it in /public/projects and set
//   cover: { src: "/projects/controllerbridge.jpg", alt: "The ControllerBridge mapping editor" }

export type Milestone = { label: string; done: boolean };

export type Project = {
  slug: string;
  name: string;
  /** One line: the idea. Shown on the home page. */
  summary: string;
  /** A few words on where it stands. */
  status: string;
  started: string;
  team?: string;
  stack: string[];
  idea: string[];
  milestones: Milestone[];
  how: { flow: string[]; notes: string[] };
  links?: { label: string; href: string }[];
  cover?: { src: string; alt: string };
};

export const projects: Project[] = [
  {
    slug: "controllerbridge",
    name: "ControllerBridge",
    summary: "Use a game controller as a keyboard and mouse on macOS and Windows.",
    status: "Working build",
    started: "Oct 2026",
    stack: ["C++", "Rust", "TypeScript", "React", "SDL3", "Tauri"],
    idea: [
      "I grew up playing Roblox with a controller. When I wanted to play the same way on my Mac, nearly every remapping tool I found was a Windows-only .exe, so I decided to build my own.",
      "ControllerBridge turns DualSense, DualShock 4, Xbox, Switch Pro, and other SDL-supported controllers into keystrokes, mouse movement, and timed macros. A visual editor shows the controller's live input, and mappings are saved as JSON profiles you can import, export, and share.",
    ],
    milestones: [
      { label: "Native C++ engine that turns controller input into real keyboard and mouse events", done: true },
      { label: "Mapping editor with a live input monitor and per-controller artwork", done: true },
      { label: "Sticks as WASD or mouse movement, with deadzone and sensitivity controls", done: true },
      { label: "JSON profiles you can import, export, and duplicate", done: true },
      { label: "Builds and tests for both macOS and Windows", done: true },
      { label: "Switch profiles automatically for each game", done: false }, // README: "future work"
      { label: "Gyro aiming, touchpad gestures, and rumble", done: false }, // INFERRED from the README's limitations list
    ],
    how: {
      flow: ["Controller", "SDL3", "C++ mapper", "CGEvent / SendInput"],
      notes: [
        "The engine runs as its own process and polls the controller at about 250 Hz. It reports state to the interface at about 30 Hz, so rendering never slows input down.",
        "A Tauri bridge written in Rust passes commands and state between the engine and the React editor as JSON lines over stdin and stdout.",
        "Output starts paused, pauses again while you edit a mapping, and releases any held keys if the controller disconnects.",
      ],
    },
  },
  {
    slug: "privy",
    name: "Privy",
    summary: "Can we tell when an AI agent thinks it's being tested, even when it doesn't say so?",
    status: "Research in progress",
    started: "Oct 2026",
    stack: ["Python", "FastAPI", "nnsight", "NDIF", "Llama-3.3-70B"],
    idea: [
      "Privy is an AI safety experiment. Two identical agents get the same operator request and the same safety policy. One sees an environment that looks like a test sandbox (ci-runner-14, a scratch volume, test_user). The other sees one that looks like production (payments-api-14, a replicated volume, 312 active users).",
      "It asks three questions. Inside: does the model's internal state encode “this is a test” even though the prompt never says so? Out loud: when it reasons, does it say it thinks it's being tested? Behavior: does that belief change what the agent does?",
    ],
    milestones: [
      { label: "880-prompt design: 20 operator requests across 6 environment families", done: true },
      { label: "White-box pipeline on Llama-3.3-70B: probes, verbalization, and steering", done: true },
      { label: "Web app that runs paired agent experiments on Claude, GPT, Gemini, and OpenRouter models", done: true },
      { label: "Read-only demo of the app on GitHub Pages", done: true },
      { label: "Run the full 70B experiments and write up the findings", done: false }, // INFERRED: the README's result sentences are still placeholders
    ],
    how: {
      flow: ["Paired prompts", "Llama-3.3-70B on NDIF", "Evaluation probe", "Behavior and steering"],
      notes: [
        "The key tool is an evaluation-awareness probe, trained only on prompts that say outright “this episode is part of an automated agent evaluation” and then tested on environments that never mention testing.",
        "A bag-of-words baseline scores exactly 0.5 on those environments by construction, so if the probe still separates sandbox from production, the signal comes from the model rather than the wording.",
        "Frontier APIs never return hidden states, so the internals come from an open 70B model on NDIF, while Claude, GPT, and Gemini serve as behavioral comparisons.",
      ],
    },
  },
  {
    slug: "r3-funding-pipeline",
    name: "R3 Funding Pipeline",
    summary: "Cleans and audits student-organization funding requests so reviewers see the problems first.",
    status: "Working pipeline",
    started: "Apr 2026",
    stack: ["Python", "Pandas", "Jupyter"],
    idea: [
      "Funding requests from student organizations arrive as raw CSV files with inconsistent headers, mixed formats for money, percentages, and yes/no answers, duplicate rows, and deductions with no stated reason. Checking them by hand is slow and easy to get wrong.",
      "This pipeline cleans, standardizes, and validates every request, then flags the records that need a person: missing values, duplicates, and unexplained deductions. It was recently updated for the DS Appropriations R3 funding round.",
    ],
    milestones: [
      { label: "Ingests raw CSVs and validates them against the expected schema", done: true },
      { label: "Standardizes currency, percentages, Y/N fields, and text", done: true },
      { label: "Removes duplicate requests and flags missing values", done: true },
      { label: "Flags deductions with no documented reason", done: true },
      { label: "Exports clean, analysis-ready CSVs", done: true },
      { label: "A front end so reviewers can run it without the notebook", done: false }, // INFERRED from your "R3-Funding-with-Front-End" repo
    ],
    how: {
      flow: ["Raw CSV", "Schema check", "Standardize", "Deduplicate", "Audit", "Clean CSV"],
      notes: [
        "Each stage is a step in a Python notebook built on Pandas, so the whole cleanup can be rerun from the raw files at any time.",
        "The goal is auditability: repetitive cleanup is automated, and anything that needs a human decision is surfaced instead of buried.",
      ],
    },
  },
  {
    slug: "obesimap",
    name: "ObesiMap",
    summary: "Targeting obesity at the cellular source: an explorer for the brain cells that sense leptin.",
    status: "Working prototype",
    started: "Apr 2026",
    team: "Team project",
    stack: ["Python", "Scanpy", "AnnData", "Streamlit", "Plotly", "R"],
    idea: [
      "Obesity is a metabolic disorder, but it is also a breakdown in brain signaling. In leptin resistance, the brain's appetite control center, the arcuate nucleus and median eminence (Arc-ME), stops responding to leptin, the hormone that signals fullness.",
      "ObesiMap is an end-to-end bioinformatics dashboard for single-cell RNA sequencing data from the Arc-ME. It isolates the cells that carry the leptin receptor (Lepr+) and compares fed and fasted states to find the genetic pathways behind hunger and satiety.",
    ],
    milestones: [
      { label: "Pipeline for quality control, PCA and UMAP, clustering, and cell-type annotation", done: true },
      { label: "Isolates Lepr+ (leptin receptor) cells from the full hypothalamic atlas", done: true },
      { label: "Interactive UMAP explorer with gene search for markers like Agrp, Pomc, and Npy", done: true },
      { label: "Fed vs. fasted differential expression", done: true },
      { label: "Pathway enrichment and cell-to-cell communication analysis in R", done: true },
    ],
    how: {
      flow: ["20,921 cells", "QC and UMAP", "Clusters", "Lepr+ cells", "Fed vs. fasted"],
      notes: [
        "The data is the Arc-ME single-cell atlas from Campbell et al., 2017 (GEO accession GSE93374).",
        "Processing uses Scanpy and AnnData, the dashboard uses Streamlit and Plotly, and the pathway and cell-communication analysis uses clusterProfiler and CellChat in R.",
      ],
    },
  },
  {
    slug: "misty",
    name: "Misty",
    summary: "Making the invisible impact visible: a Chrome extension that shows the water behind your AI use.",
    status: "Hackathon prototype",
    started: "Mar 2026",
    team: "Built at our first hackathon",
    stack: ["JavaScript", "Chrome Extensions", "Figma", "Procreate"],
    idea: [
      "AI and cloud data centers use a lot of water for cooling, and none of it is visible to the person typing the prompt. Misty makes it visible.",
      "Misty is a Chrome extension with a teardrop character who reacts to how much you use AI. Light use keeps Misty happy, heavy use makes Misty sad, and a water-level tracker shows the estimated water behind your prompts. We drew Misty in Figma and Procreate.",
    ],
    milestones: [
      { label: "Detects prompts sent on ChatGPT and Gemini", done: true },
      { label: "Estimates the water behind each prompt and keeps a running total", done: true },
      { label: "Misty's mood changes with your usage, from happy to completely dried up", done: true },
      { label: "Notifications as Misty's happiness drops", done: true },
      // These three come from the README's "What's next" list (reworded slightly).
      { label: "Map of the data centers behind your prompts", done: false },
      { label: "Comments and tips for using AI more lightly", done: false },
      { label: "Dress-up feature", done: false },
    ],
    how: {
      flow: ["Prompt sent", "Content script", "Service worker", "Mood and water level"],
      notes: [
        "A content script watches for the Enter key or a send button on ChatGPT and Gemini, then messages the extension's service worker.",
        "The worker applies a five-second cooldown, lowers Misty's happiness, adds to the water total, resets each day, and swaps the toolbar icon through hand-drawn droplet stages.",
        "Real water use varies between data centers, so Misty uses a generalized estimate rather than a precise number.",
      ],
    },
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function doneCount(p: Project) {
  return p.milestones.filter((m) => m.done).length;
}
