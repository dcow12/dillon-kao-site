---
version: 1
slug: "app-page-tsx"
primary_target: "app/page.tsx"
related_targets: ["app/projects/[slug]/page.tsx"]
---

# Home and project pages

Scope: `app/page.tsx` (home) and `app/projects/[slug]/page.tsx` (one page per project). Mode: Experience (a personal portfolio; the person and the work lead).

Audience and job: recruiters, professors, teammates and classmates arriving from a résumé or a social bio, deciding in about a minute whether Dillon's work is interesting and how to reach them.

Action: copy the email or open GitHub, LinkedIn, or Instagram. Open a project to read the idea and its progress.

Content: bio and fun facts from the GitHub profile README; five projects (ControllerBridge, Privy, R3 funding pipeline, ObesiMap, Misty) written from their READMEs as idea plus progress. No repository links, cover images, or photo until the user supplies them.

Constraints: brief-pinned to elliotlindberg.com's layout and register; no cursor glow; English only; no newsletter; links limited to email, GitHub, LinkedIn, Instagram.

Memorable moment: each project's progress is drawn as a thin trace with milestone nodes. When it scrolls into view, a signal runs along the trace and fills the nodes it reaches, stopping at the current milestone.

Unresolved: deploy target; project links and covers; profile photo; confirmation of each project's status and next steps.

## Direction contract

THESIS: A quiet personal index where every project shows how far along it is, as a signal running along a trace. It refuses the default student portfolio: hero banner, skill bars, and a wall of same-size project cards with tech logos.

OWN-WORLD: White ink on a plain black page (#000000), with one UVA-orange accent used only for the current milestone, the focus ring, and selection. Nothing on the background: no grid, pulses, stars, or glow (user revision). Bricolage Grotesque for the name and headings with a highlighter-boxed surname, system sans for text, hairline rules, drawn SVG nodes and checks, and official logo marks for the links.

STORY: The visitor learns who Dillon is (2nd year Computer Science at UVA; software, AI, embedded), sees five real projects with honest done and next items, opens one for the idea and how it works, then copies the email or follows a logo link.

FIRST VIEWPORT: Logo icons (GitHub, LinkedIn, Instagram, email) sit top right with hover labels. The name is about 60px Bricolage Grotesque, its letters rising through a baseline mask while a highlighter wipes in behind "Kao". Below it the tagline "2nd year Computer Science @ UVA", then the About summary starting in the fold. The icon row is the primary action.

FORM: elliotlindberg.com's single-column personal index, pinned by the brief and translated: Writing grid becomes a Projects index with progress traces; the cursor glow is removed; at the user's revision the background is plain black, there is one theme, and links are logos at the top. Motion keeps the staggered entrance but changes its choreography (mask rise, highlighter wipe, piano-key letter dip on hover). Position: brief-pinned, no candidate list. seed: none (brief-pinned; concept-seed not run because a pinned direction beats the roll)

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
