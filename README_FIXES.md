# James Mullane Portfolio — Fixed Version

This version has been redesigned and cleaned up for software engineering internship applications.

## What changed

- Rebuilt the home page with a stronger internship-focused hero section.
- Added clear calls to action for CV download, projects, GitHub, LinkedIn, and email.
- Rewrote the About page to better position James as a Computer Science & Economics student.
- Reworked the Experience section with stronger, more professional wording.
- Replaced the fragile projects page that depended on `http://localhost:3000` API calls with curated static project data.
- Added stronger project cards with technologies, impact statements, and cleaner layout.
- Built a proper Contact page.
- Reworked the LeetCode page so it does not break during static builds.
- Removed the Google font dependency that caused `next build` to fail when offline.
- Replaced `/public/cv.pdf` with the cleaned resume PDF.
- Fixed lint and TypeScript issues.

## Verified commands

```bash
npm run lint
npm run build
```

Both commands pass in this fixed version.

## Run locally

```bash
npm install
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Main content file

Most portfolio content now lives in:

```text
src/data/site.ts
```

Edit this file to update projects, skills, links, profile text, and experience.

## Latest navbar/theme update

- Changed the navbar subtitle from “Software Engineering Portfolio” to “CS & Economics · Auckland”.
- Added a Dark/Light toggle button to the navbar.
- Added a site-wide theme provider using `localStorage`, so the selected theme persists between visits.
- Added dark-mode CSS overrides in `src/app/globals.css` so cards, text, borders, backgrounds, and shadows switch cleanly.
- Verified again with `npm run lint` and `npm run build`.


## Latest update

The profile image, image alt text, nav initials, and navbar subtitle are now controlled from `src/data/site.ts` inside the `profile` object:

```ts
image: "/profile.jpg",
imageAlt: "James Mullane",
initials: "JM",
navbarSubtitle: "CS & Economics · Auckland",
```

Change those values in one place to update the site.

## Latest update: company logos and animations

- Added company logo assets to `public/logos/`:
  - `cosmoshop.svg`
  - `nuttall-henderson.svg`
  - `mcdonalds.svg`
- Moved logo configuration into `src/data/site.ts` on each `experience` item using `logo`, `logoAlt`, and `website` fields.
- Updated `src/app/about/Experience.tsx` so each experience card shows the relevant company logo and a small website link.
- Added `src/app/components/ScrollAnimations.tsx` to trigger smooth reveal-on-scroll animations with IntersectionObserver.
- Added global animation CSS in `src/app/globals.css`, including:
  - smooth scroll offset
  - fade-up reveal animations
  - floating hero card animation
  - soft pulsing background glow
  - reduced-motion support for accessibility

Verified with:

```bash
npm run lint
npm run build
```

## Latest repair pass: homepage photo, logos, and animation reliability

- Replaced `public/profile.jpg` with the supplied Auckland/Sky Tower portrait and kept the image path controlled by `src/data/site.ts`.
- Reworked the homepage hero image to use a portrait `4 / 5` aspect ratio so the new photo is not awkwardly square-cropped.
- Replaced the Cosmoshop, Nuttall Henderson Jewellers, and McDonald’s logo assets in `public/logos/`.
- Increased the experience-card logo container width so wide wordmarks, especially Cosmoshop and Nuttall Henderson, are actually readable.
- Rebuilt `src/app/components/ScrollAnimations.tsx` so reveal animations re-run after route changes.
- Made reveal CSS fail-safe: if JavaScript or IntersectionObserver fails, the page remains visible instead of hiding sections.

Verified with:

```bash
npm run lint
NEXT_TELEMETRY_DISABLED=1 npm run build
```
