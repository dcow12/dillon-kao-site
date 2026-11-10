// Everything about you that appears on the home page lives here.

export const site = {
  firstName: "Dillon",
  lastName: "Kao",
  tagline: "2nd year Computer Science & Math @ UVA",
  description:
    "Dillon Kao is a second-year Computer Science and Math student at the University of Virginia building across software, AI, and embedded systems.",

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

  // From your resume. Newest first; "Present" for ongoing roles. Logos live in /public/logos.
  // The home page shows the first `experiencePreview` entries; /experience shows them all.
  experiencePreview: 3,
  experience: [
    {
      role: "Webmaster Intern",
      org: "Taiwanese Student Association",
      logo: "/logos/tsa.png",
      dates: "Sept 2026 – Present",
      points: [
        "Build and maintain the club website with React, TypeScript, and Vercel, keeping event info current for events with 200+ attendees.",
      ],
    },
    {
      role: "Hardware Integration Subteam Member",
      org: "Solar Car Team",
      logo: "/logos/solar-car.png",
      dates: "Sept 2026 – Present",
      points: ["PCB design, schematic capture, and circuit layout in KiCad."],
    },
    {
      role: "Appropriations Member and Data Tooler",
      org: "UVA Student Council",
      logo: "/logos/student-council.png",
      dates: "Sept 2025 – Present",
      points: [
        "Review and approve funding for student organizations (CIOs).",
        "Built a data-cleaning pipeline that flags missing information in funding CSVs, deployed through a Streamlit front end for the funding dashboard.",
      ],
    },
    {
      role: "Independent Developer",
      org: "Roblox",
      logo: "/logos/roblox.png",
      dates: "June 2024 – Present",
      points: [
        "Grew sales through 3D modeling, trend research, and social media outreach, reaching 55,000+ in-game sales.",
        "Accepted into Roblox's Developer Exchange (DevEx) program; converted $20,000 of in-game currency into $5,500+ USD.",
      ],
    },
    {
      role: "Friendship Buddy and Board Member",
      org: "Friendship Circle of Virginia",
      logo: "/logos/friendship-circle.png",
      dates: "Dec 2021 – Present",
      points: [
        "Mentor children with special needs through the Teen Buddy program; featured in an article that helped raise $5,000+ in donations.",
        "Organized a charity cricket tournament with national-level players that raised about $500.",
      ],
    },
  ],

  funFacts: [
    "I love playing the piano.",
    "My all-you-can-eat sushi record is 130 pieces.",
    "I'm a Roblox developer.",
  ],
} as const;
