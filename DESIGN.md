---
name: Dillon Kao
description: A quiet single-column personal index on a plain black page, where each project shows its progress as a signal running along a trace.
colors:
  black: "#000000"
  ink: "#f3f3f4"
  body-ink: "#cfcfd4"
  muted-ink: "#a1a1a8"
  surface: "#141416"
  mark: "#232326"
  hairline: "rgba(255, 255, 255, 0.1)"
  hairline-strong: "rgba(255, 255, 255, 0.24)"
  signal-orange: "#ff8a2a"
  signal-orange-text: "#ff9a45"
typography:
  display:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 1.9rem + 3.6vw, 3.75rem)"
    fontWeight: 600
    lineHeight: 1.06
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.4rem, 1.7rem + 3vw, 3.25rem)"
    fontWeight: 600
    lineHeight: 1.06
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.015em"
  item:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: "-0.01em"
  lead:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
  link:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.6
  small:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.45
  label:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.4
  tag:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.4
rounded:
  hairline: "1px"
  bullet: "1.5px"
  mark: "0.08em"
  focus: "6px"
  md: "10px"
  avatar: "12px"
  pill: "999px"
spacing:
  gutter-mobile: "16px"
  gutter: "24px"
  section: "72px"
  column: "680px"
  measure: "552px"
components:
  social-icon:
    textColor: "{colors.muted-ink}"
    rounded: "{rounded.md}"
    size: "40px"
  social-icon-hover:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
  social-tooltip:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.focus}"
    padding: "3px 8px"
  project-row:
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "17.6px 14.4px 18.4px"
  project-row-hover:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
  flow-step:
    backgroundColor: "{colors.black}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "4.5px 11.2px"
  name-mark:
    backgroundColor: "{colors.mark}"
    textColor: "{colors.ink}"
  link-quiet:
    textColor: "{colors.muted-ink}"
    height: "44px"
---

# Design System: Dillon Kao

## Overview

**Creative North Star: "One Signal in the Dark"**

The site is a quiet single column of white ink on a plain black page. There is no background texture, no grid, and no ambient effect: the black is the whole ground, at the user's request. The layout follows elliotlindberg.com, as the user originally asked: a big name with a boxed surname, a short line about Dillon, the bio, then the work. The only moving signal on the page is progress. Projects are an index of ideas, and each one shows how far along it is as a signal running along a thin trace.

Density is low and the rhythm is generous. A modern grotesque with character (Bricolage Grotesque) sets the name and every heading; the native system sans sets everything a visitor reads. Color is almost absent: a single orange (UVA orange) marks whatever is live, the current milestone and the focus ring, and nothing else carries hue. Depth is tonal, never shadowed.

The user rejected cursor-following effects ("a weird glow around the cursor"), a light mode, and decoration on the background. Social links are logos, not words, and they sit at the top of every page.

**Key Characteristics:**
- A plain black page, one theme, nothing drawn on the background.
- Bricolage Grotesque for names and headings, the system sans for all reading text.
- Logo icons (GitHub, LinkedIn, Instagram, email) at the top right of every page.
- Progress is drawn: nodes on a thin trace, filled when done, orange when next.
- A highlighter-wipe mark that recurs: behind the surname, and as the project-row hover.

## Colors

White ink on black, with a single orange signal.

### Primary
- **Signal Orange** (signal-orange): the current milestone node, its "Next up" label (signal-orange-text, for text contrast), the focus ring, and the text-selection tint at 28% opacity. It never fills a region.

### Neutral
- **Black** (black): the page, everywhere. Nothing is drawn on it.
- **Ink** (ink): the name, headings, the tagline, filled trace nodes, trace fills, and tooltips.
- **Body Ink** (body-ink): paragraphs in About and on project pages.
- **Muted Ink** (muted-ink): icons at rest, summaries, status, counts, and fun facts. It holds 8:1 contrast on black.
- **Surface** (surface): the hover fill behind icons and project rows, and the tooltip background.
- **Mark** (mark): the highlighter box behind the surname.
- **Hairline / Hairline Strong** (hairline, hairline-strong): row separators, the footer rule, the trace track, and tooltip borders (hairline); empty nodes, bullets, and separators (hairline-strong).

### Named Rules
**The One Signal Rule.** Orange marks what is live, meaning the current milestone, the focus ring, and selection. If it is decorative, it is not orange.

**The Plain Black Rule.** The page is pure black (#000000) with nothing behind the content: no grid, no pattern, no glow, no light mode.

## Typography

**Display Font:** Bricolage Grotesque (system sans fallback), self-hosted through next/font with its optical-size and width axes.
**Body Font:** the platform system sans (ui-sans-serif, system-ui, then Segoe UI, Roboto, Helvetica Neue, Arial).

**Character:** a contemporary grotesque with ink-trap details and a little warmth carries the names and headings. The native sans carries everything a visitor reads, so the page feels like the device it's on.

### Hierarchy
- **Display** (600, clamp 44 to 60px, 1.06, -0.03em): the person's name on the home page only.
- **Headline** (600, clamp 38 to 52px, 1.06, -0.03em): project titles on project pages.
- **Title** (600, 20px, 1.3): section headings (Projects, Fun facts, The idea, Progress, How it works).
- **Item** (600, 17px, 1.35): project names in the home index. The same 17px step sets body text on phones.
- **Lead** (400, 18px, 1.55): the tagline and each project's one-line summary on its page.
- **Body** (400, 16px desktop and 17px on phones, 1.75): bio and project prose, held to about 75 characters (34.5rem).
- **Link** (400, 15px): one-line project summaries in the index, and project links once added.
- **Small** (400, 14px): project meta and stack lines, the back link, pipeline steps, and the footer.
- **Label** (400, 13px): status and counts (tabular numerals).
- **Tag** (600, 12px): the orange "Next up" marker. Icon tooltips use the same 12px size at regular weight.

### Named Rules
**The Grotesque-for-Names Rule.** Bricolage Grotesque sets names and headings only. Paragraphs, labels, and meta stay in the system sans.

**The No-Eyebrow Rule.** Nothing sits above a heading. Status and dates go beside or below it.

## Layout

A single centered column at most 680px wide (42.5rem), with 24px side gutters (16px at 640px and below). The page opens 72px from the top on desktop (20px on phones) with the top bar: logo icons at the right on every page, the back link at the left on project pages, and a left slot reserved for a 64px profile photo once one exists. The icon row bleeds 10px past the column so the last glyph lines up with the column edge.

Sections are separated by 72px (56px for Projects on phones), with headings 12px above their content, always more space above a heading than below. Prose blocks cap at 34.5rem inside the column. Project rows bleed 14px past the column on each side so their hover fill frames the text, while their separators stay aligned to the column. The breakpoint is 640px.

## Elevation & Depth

Flat. There are no shadows anywhere, and nothing sits behind the content. Depth comes from tonal fills (surface on hover, mark behind the surname) and 1px hairlines.

### Named Rules
**The Flat Page Rule.** Surfaces never lift. A state change is shown with a fill wiping or fading in, not a shadow.

## Shapes

Circles for every progress node (9px on the home trace, 18px with a check on project pages). A gently rounded 10px square for icon buttons and hover fills, 6px for tooltips and the focus ring, and 12px for the future profile photo. Fully rounded pills only for pipeline steps. A barely rounded box (0.08em) for the surname mark. Small 6px squares with 1.5px corners for fun-fact bullets. Lines are 1px hairlines, except trace lines at 1.5px with 1px rounded ends.

## Components

### Social icons (top bar)
- **Set:** the official GitHub and LinkedIn marks (solid), the Instagram glyph and an envelope (2.1px outline), in that order. Solid marks are drawn slightly smaller (19px and 18px against 20px) so all four read at the same weight.
- **Shape:** 40px square hit areas with a 10px radius and 4px gaps.
- **Rest / Hover / Focus:** muted ink at rest. On hover the icon turns ink, lifts 1px, and gains a surface fill, and a small tooltip with its name fades in 6px below. Focus shows the orange ring and the same tooltip.
- **Email:** the envelope copies the address. Its tooltip reads "Copy email", then "Copied!" for about 2 seconds, and a polite live region announces it. It falls back to mailto if the clipboard is unavailable. The last tooltip anchors to the right edge so it never leaves the screen.
- **Entrance:** the icons blur up in sequence (180ms, then 70ms apart) as the page opens.

### Project row (home index)
- **Structure:** the name (Item) with a status label at the right (Label), a one-line summary (Link), then the progress trace with an "N of M done" count.
- **Hover / Focus:** a surface fill wipes in from the left with a 10px radius (520ms, expo-out), and an arrow slides in beside the name. The whole row is the link's hit area, but the link's accessible name is only the project name.

### Progress trace (signature)
- **Home:** 9px nodes on a 1.5px track, spaced 14px apart. Done nodes are filled ink; the current one is an orange ring with an orange dot; the rest are hollow.
- **Motion:** when the row scrolls into view, the fill runs left to right at 110ms per milestone. Each done node fills as the signal reaches it, then the current node arrives.
- **Project page:** a vertical list with 18px nodes, done nodes carrying a check, and ink connectors between finished steps. The signal runs down the list at 150ms per step, and the current step carries a "Next up" label in orange text.

### Pipeline flow
- **Style:** hairline-bordered pills in 14px ink, joined by small muted arrows, wrapping freely. Used only for "How it works".

### Name lockup
- **Style:** the first name's letters rise through a baseline mask (1s expo-out, 48ms stagger). A mark-colored box then wipes in behind the surname, and the surname rises inside it.
- **Hover:** each letter presses down like a piano key (scaleY 0.955, 0.055em down, 110ms) and springs back (600ms gentle spring).

## Do's and Don'ts

### Do:
- **Do** keep the page pure black (#000000) with nothing drawn behind the content.
- **Do** keep orange to the live signal: the current milestone, the focus ring, and selection.
- **Do** keep content visible by default. Reveal starting states apply only behind the data-js flag, with the 2.5-second fallback, and reduced motion shows every final state.
- **Do** use the expo-out curve (cubic-bezier(0.16, 1, 0.3, 1)) for entrances and the gentle spring only for small settle-backs.
- **Do** keep the social links as logo icons at the top right of every page.
- **Do** leave room for a 64px rounded profile photo in the top-left slot when one is added.

### Don't:
- **Don't** add a light mode or a theme toggle.
- **Don't** add background grids, patterns, particles, or glows, and never anything that follows the cursor. The user explicitly rejected all of these.
- **Don't** use bounce or elastic easing, or shadows of any kind.
- **Don't** put labels or eyebrows above headings, or turn the project index into same-size icon cards.
- **Don't** set paragraphs or labels in Bricolage Grotesque. It is for names and headings only.
- **Don't** introduce a second accent hue.
