# Amanda Ireri — Portfolio

A Vite + React + TypeScript + Tailwind CSS v4 project, migrated 1:1 from the
Figma Make export — same components, same inline styles, same interactions
(scroll-reveal, hover states, mobile nav).

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## What I added (these weren't in the Figma export)

- **`src/app/components/figma/ImageWithFallback.tsx`** — your components
  import this but it wasn't included. I wrote a standard version: shows
  your image, falls back to a placeholder graphic if it fails to load.
- **`src/imports/Headshot.jpeg`** — placeholder image (gold silhouette).
  **Replace this file with your real headshot**, keeping the same filename
  and path, and everything (Nav, Hero, About, Footer) updates automatically.
- **`src/vite-env.d.ts`** — standard Vite file that tells TypeScript how to
  handle image imports like `.jpeg`.
- Standard scaffolding: `package.json`, `vite.config.ts`, `tsconfig*.json`,
  `index.html`.

## Project structure

```
src/
  main.tsx              → entry point
  vite-env.d.ts
  app/
    App.tsx              → page composition
    components/
      Navigation.tsx, Hero.tsx, ProofStrip.tsx, SelectedWork.tsx,
      HowIWork.tsx, AboutTeaser.tsx, ContactCTA.tsx, Footer.tsx,
      useScrollReveal.tsx
      figma/
        ImageWithFallback.tsx
  imports/
    Headshot.jpeg        → replace with your real photo
  styles/
    index.css, fonts.css, tailwind.css, theme.css, globals.css
```

## Adding new pages

Since routing wasn't part of the original export, `App.tsx` is just a single
page. When you're ready to add more pages, the simplest option is
`react-router-dom`:

```bash
npm install react-router-dom
```

Then wrap `App.tsx`'s content in a `<Routes>`/`<Route>` setup, keeping
`Navigation` and `Footer` shared across pages, and only swapping the `<main>`
content per route.

## Verified

This was installed and built locally before zipping — `npm run build` and
`npm run dev` both run clean with no errors.
