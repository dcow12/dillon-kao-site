// Everything about you that appears on the home page lives here.

export const site = {
  firstName: "Dillon",
  lastName: "Kao",
  tagline: "2nd year Computer Science @ UVA",
  description:
    "Dillon Kao is a second-year Computer Science student at the University of Virginia building across software, AI, and embedded systems.",

  // Add a profile photo later: put the file in /public (for example /public/me.jpg)
  // and set this to { src: "/me.jpg", alt: "Dillon Kao" }.
  avatar: null as { src: string; alt: string } | null,

  email: "dillonkao@gmail.com",

  // Shown as logo icons at the top of every page, followed by a copy-email icon.
  links: [
    { label: "GitHub", href: "https://github.com/dcow12", icon: "github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/dillonkao", icon: "linkedin" },
    { label: "Instagram", href: "https://www.instagram.com/kaodillon/", icon: "instagram" },
  ],

  about: [
    "I'm Dillon, a second-year Computer Science student at the University of Virginia. I like projects where software meets hardware: code that has to deal with real devices, real data, and the people using them.",
    "I'm most interested in software development, artificial intelligence, and embedded systems. Lately that has meant a native C++ engine that turns game controllers into a keyboard and mouse, experiments on whether a 70‑billion‑parameter language model can tell when it's being tested, and a single-cell dashboard for studying leptin resistance in the brain.",
    "I learn fastest by building, so I'm always picking up new skills, looking for interesting problems, and hoping to work with people who care about the details. If something here catches your eye, reach out.",
  ],

  funFacts: [
    "I love playing the piano.",
    "My all-you-can-eat sushi record is 130 pieces.",
    "I'm a Roblox developer.",
  ],
} as const;
