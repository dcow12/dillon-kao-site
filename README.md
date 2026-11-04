# dillon-kao-site

My personal website, built with Next.js (App Router, TypeScript) and plain CSS.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Edit the content

Everything you'd want to change lives in two files:

- `content/site.ts`: your tagline, bio paragraphs, fun facts, email, and social links.
- `content/projects.ts`: each project's one-line idea, status, milestones (the progress traces), and "how it works". Comments marked **INFERRED** are guesses about what's next; check them.

### Add a profile photo later

Put the image in `public/` (for example `public/me.jpg`), then in `content/site.ts` set:

```ts
avatar: { src: "/me.jpg", alt: "Dillon Kao" },
```

It appears as a 64px rounded square in the top-left corner.

### Add project links or cover images later

In `content/projects.ts`, add to any project:

```ts
links: [{ label: "Code", href: "https://github.com/..." }, { label: "Demo", href: "https://..." }],
cover: { src: "/projects/controllerbridge.jpg", alt: "The ControllerBridge mapping editor" },
```

Links show up as a **Links** section on that project's page, and the cover shows under the title. Put cover images in `public/projects/`.

### Mark progress

Flip a milestone's `done: false` to `done: true` and the trace updates everywhere. The first unfinished milestone automatically becomes the orange "Next up" node.

## Build and deploy

```bash
npm run build
```

This writes a fully static site to `out/`, which you can host anywhere:

- **Vercel** (easiest for Next.js): import the GitHub repo at vercel.com and keep the defaults.
- **GitHub Pages**: push the repo to `dcow12/dcow12.github.io`, then under *Settings → Pages* choose **GitHub Actions** and use the "Next.js" starter workflow. The site then lives at https://dcow12.github.io.

## Design notes

`DESIGN.md` records the design system (colors, type, motion, components), and `PRODUCT.md` records what the site is for. They're for future edits and aren't published with the site.
