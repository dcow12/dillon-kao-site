// Your projects. Each has an idea, a few highlights, and a short "how it works".
//
// To add links later, fill in `links`, for example:
//   links: [{ label: "Code", href: "https://github.com/..." }, { label: "Demo", href: "https://..." }]
// To add a cover image later, put it in /public/projects and set
//   cover: { src: "/projects/privy.jpg", alt: "The Privy results view" }
// Images live in /public/projects.

export type Project = {
  slug: string;
  name: string;
  /** One line: the idea. Shown on the home page. */
  summary: string;
  /** A few words on where it stands, or where it was shown. */
  status: string;
  started: string;
  team?: string;
  stack: string[];
  idea: string[];
  highlights: string[];
  how: { flow: string[]; notes: string[] };
  links?: { label: string; href: string }[];
  cover?: Img;
  gallery?: { title: string; columns?: number; images: Img[] };
};

/** `panel` puts the image on a light background, uncropped (for charts and drawings). */
export type Img = { src: string; alt: string; caption?: string; panel?: string; natural?: boolean };
// `natural` shows the whole image at its own shape (for UI screenshots with small text).

export const projects: Project[] = [
  {
    slug: "controllerbridge",
    name: "ControllerBridge",
    summary: "Use a game controller as a keyboard and mouse on macOS and Windows.",
    status: "Working app",
    started: "Oct 2026",
    stack: ["C++", "SDL3", "Rust", "Tauri", "React", "TypeScript"],
    cover: { src: "/projects/controllerbridge-controller.jpg", alt: "ControllerBridge's controller view, with the A button mapped to Spacebar", caption: "The mapping editor: select a button, choose what it does.", natural: true },
    gallery: { title: "In the app", columns: 1, images: [
      { src: "/projects/controllerbridge-mappings.jpg", alt: "List of controller buttons and the keys or mouse buttons they're mapped to", caption: "Every button maps to a key, a click, or a macro.", natural: true },
      { src: "/projects/controllerbridge-sticks.jpg", alt: "Left stick set to WASD and right stick set to mouse movement, each with a deadzone slider", caption: "Sticks as WASD or mouse, with deadzone and sensitivity.", natural: true },
    ] },
    idea: [
      "I grew up playing Roblox with a controller. When I wanted to do the same thing on my Mac, almost every remapping tool I found was a Windows .exe, so I built my own.",
      "ControllerBridge turns DualSense, DualShock 4, Xbox, Switch Pro, and other SDL-supported controllers into keystrokes, mouse movement, and timed macros. It has a mapping editor, a live input view, and JSON profiles you can import, export, and duplicate.",
    ],
    highlights: [
      "A small C++ engine does the actual input translation, sending real keyboard and mouse events through CGEvent on macOS and SendInput on Windows.",
      "Shows the right controller picture for DualSense, DualShock 4, Xbox, and Switch Pro, plus battery level and connection type when the controller reports them.",
      "Either stick can drive WASD or the mouse, with adjustable deadzone and sensitivity.",
      "Output starts paused, pauses again while you edit a mapping, and releases held keys if the controller disconnects.",
    ],
    how: {
      flow: ["Controller", "SDL3", "C++ mapper", "CGEvent / SendInput"],
      notes: [
        "The engine runs as a separate process and polls the controller at about 250 Hz. It sends state to the UI at about 30 Hz, so rendering never slows down input.",
        "A Tauri bridge written in Rust passes commands and state between the engine and the React UI as JSON lines over stdin and stdout.",
        "Limits for now: one controller drives output at a time, profiles are switched by hand, and there's no gyro, touchpad, or rumble yet.",
      ],
    },
  },
  {
    slug: "privy",
    name: "Privy",
    summary: "Can we detect when an AI model believes it's being tested, even when it doesn't say so?",
    status: "Presented at ML@UVA",
    started: "Oct 2026",
    stack: ["Python", "FastAPI", "nnsight", "NDIF", "Llama-3.3-70B"],
    cover: { src: "/projects/privy-results.jpg", alt: "Privy's Results tab on a demo run, showing a 36-point gap between sandbox-looking and production-looking environments", caption: "The Results tab on a demo run. Simulated agents, not a finding." },
    gallery: { title: "From the ML@UVA talk", images: [{ src: "/projects/privy-compare.jpg", alt: "Slide showing Privy's model comparison screen with provider and model pickers", caption: "Picking up to three models to compare." }] },
    idea: [
      "Safety evaluations run in sandboxes, and sandboxes look like sandboxes: a host called ci-runner-14, an empty disk, a user called test_user. If an agent follows the rules only when it can tell it's being tested, every sandbox-based safety evaluation is hollow.",
      "You can't settle that by watching behavior alone, because any test you build is itself a sandbox. So Privy pairs the environments and reads the model's own activations: two identical agents get the same request and the same safety policy, one in a test-looking sandbox and one in a production-looking environment with 312 active users.",
    ],
    highlights: [
      "Presented to ML@UVA on October 16, 2026.",
      "A web app that runs paired sandbox-vs-production experiments on Claude, GPT, Gemini, and OpenRouter models, with a side-by-side compare view and a transcript browser.",
      "A white-box pipeline on Llama-3.3-70B through NDIF: evaluation-awareness probes, a check for whether the model says it's being tested, and steering.",
      "A read-only demo of the app runs on GitHub Pages.",
      "Honest about limits: a direction that tracks evaluation-like context isn't proof the model believes it's being tested, and it only counts if it beats the embedding baselines.",
    ],
    how: {
      flow: ["Paired prompts", "Llama-3.3-70B on NDIF", "Evaluation probe", "Behavior and steering"],
      notes: [
        "The probe is trained only on prompts that say outright “this is an automated agent evaluation”, then tested on environments that never mention testing. A bag-of-words baseline scores exactly 0.5 there by construction, so any signal comes from the model, not the wording.",
        "Frontier APIs never return hidden states, so the internals come from an open 70B model on NDIF, while Claude, GPT, and Gemini serve as behavioral comparisons.",
        "Next: more realistic environments, to measure how much realism it takes before a model stops treating a test as a test.",
      ],
    },
  },
  {
    slug: "obesimap",
    name: "ObesiMap",
    summary: "Which brain cells listen to leptin? A single-cell map of the brain's hunger and fullness center.",
    status: "Forge Launch data challenge",
    started: "Apr 2026",
    stack: ["Python", "Scanpy", "DESeq2", "GSEA", "LIANA", "Streamlit"],
    cover: { src: "/projects/obesimap-umap.jpg", alt: "UMAP of 20,921 Arc-ME cells colored by cell class", caption: "20,921 cells from the Arc-ME, colored by cell class.", panel: "#ffffff" },
    gallery: { title: "Figures", images: [
      { src: "/projects/obesimap-lepr.jpg", alt: "UMAP highlighting cells that express the leptin receptor", caption: "Where the leptin receptor shows up.", panel: "#ffffff" },
      { src: "/projects/obesimap-subtypes.jpg", alt: "Bar chart of the top 20 neuron subtypes by leptin receptor detection, led by Trh/Cxcl12 at 15%", caption: "Top neuron subtypes by Lepr detection.", panel: "#ffffff" },
      { src: "/projects/obesimap-agrp-fasting.jpg", alt: "Volcano plot of genes that change in AgRP neurons with fasting", caption: "Genes that move in AgRP neurons with fasting.", panel: "#ffffff" },
    ] },
    idea: [
      "Obesity is a metabolic disorder, but it's also a breakdown in brain signaling. In leptin resistance, the arcuate hypothalamus and median eminence (Arc-ME), the brain's hunger and fullness control center, stops responding to leptin, the hormone that signals fullness.",
      "ObesiMap analyzes single-cell RNA sequencing of 20,921 mouse Arc-ME cells to ask which cells carry the leptin receptor (Lepr), how they respond to fasting and a high-fat diet, and which cells talk to them.",
    ],
    highlights: [
      "Rebuilt the cell atlas from raw counts; the clusters match the original authors' cell classes almost exactly (adjusted Rand index 0.99).",
      "Lepr+ cells are mostly neurons (90%) and blood-vessel cells (6.5%), with almost no glia. Among Lepr+ neurons, 62% are AgRP, 12% POMC, and 12% the newer Trh/Cxcl12 type.",
      "Characterized the Trh/Cxcl12 neurons, which have the highest Lepr rate of any population and sit closer to AgRP than to POMC neurons.",
      "With fasting, AgRP neurons change most: Npy and Agrp rise in all four matched pairs, alongside ER-stress chaperones.",
      "Cell-to-cell signaling: fasting cuts active interactions from 10,391 to 9,112, and melanocortin input to AgRP neurons disappears.",
    ],
    how: {
      flow: ["Raw counts", "QC and clusters", "Lepr+ cells", "Fasting and diet", "Pathways", "Cell signaling"],
      notes: [
        "The published “batch-corrected” matrix has no zeros, so it can't say whether a cell expresses Lepr at all. Everything is rebuilt from raw UMI counts, after reconciling three files with three naming schemes and repairing the cluster legend.",
        "Each condition was sequenced on its own day, so comparisons stay within a day: fasting uses four matched fed/fasted pairs with pseudobulk DESeq2.",
        "Data: Campbell et al., 2017 (GEO GSE93374). Delivered as scripts, 31 figures, the processed dataset, and an 18-slide deck.",
      ],
    },
  },
  {
    slug: "misty",
    name: "Misty",
    summary: "Making the invisible impact visible: a Chrome extension that shows the water behind your AI use.",
    status: "Hackathon project",
    started: "Mar 2026",
    team: "Built at our first hackathon",
    stack: ["JavaScript", "Chrome Extensions", "Figma", "Procreate"],
    cover: { src: "/projects/misty-0.png", alt: "Misty, a smiling blue teardrop character", caption: "Misty, drawn in Procreate.", panel: "#e9f5fc" },
    gallery: { title: "Misty's moods", columns: 4, images: [
      { src: "/projects/misty-0.png", alt: "Misty smiling", caption: "Light use", panel: "#e9f5fc" },
      { src: "/projects/misty-20.png", alt: "Misty looking worried", caption: "Getting thirsty", panel: "#e9f5fc" },
      { src: "/projects/misty-40.png", alt: "Misty looking sad", caption: "Heavy use", panel: "#e9f5fc" },
      { src: "/projects/misty-50.png", alt: "Misty dried up into a puddle", caption: "Dried up", panel: "#e9f5fc" },
    ] },
    idea: [
      "AI and cloud data centers use a lot of water for cooling, and none of it is visible to the person typing the prompt. Misty makes it visible.",
      "Misty is a Chrome extension with a teardrop character who reacts to how much you use AI. Light use keeps Misty happy, heavy use makes Misty sad, and a water-level tracker shows the estimated water behind your prompts. We drew Misty in Figma and Procreate.",
    ],
    highlights: [
      "Detects prompts sent on ChatGPT and Gemini.",
      "Estimates the water behind each prompt and keeps a running total.",
      "Misty's mood changes with your usage, from happy to completely dried up, with notifications as it drops.",
      "Ideas for next: a map of the data centers behind your prompts, tips for using AI more lightly, and a dress-up feature.",
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
