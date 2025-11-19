
# KeazeMusic.com — Artist Site & Discography

KeazeMusic.com is the main web home for audio engineer/artist Keaze. Built to be fast and simple, using Next.js 15 and Tailwind.

##  Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **UI:** React + Tailwind CSS
- **Fonts:** Geist (via `next/font`)
- **Infra:** Squarespace (domain + DNS), Vercel (hosting)

##  Features

- **Custom Header Layout**  
  A hand-built header section (not from a template) with tight spacing, simple nav, and typography tuned for the project instead of a generic landing page feel.

- **Discography Grid + Lightbox**  
  Releases are displayed in a responsive grid of cover art. Clicking a tile opens a custom-built lightbox overlay — no external modal library — with:
  - project / track details  
  - credits  
  - external links (where applicable)  
  Background dimming, focus handling, and close behavior are all implemented manually.

- **Fade / VCR-Style Visual Treatment**  
  Subtle VHS-inspired effects on hover and headers:
  - softened fade and “VCR” style interference touches on cover images  
  - gentle distortion and color shift on header / text elements  
  These are done with CSS and small custom components, not a pre-made theme.

- **Focused, Frictionless Layout**  
  Very little copy, no busy multi-section landing page — the site is intentionally narrow in scope so you land on the name, the art, and the music right away.

##  Running Locally

```bash
# install dependencies
npm install

# start dev server
npm run dev

# then visit
# http://localhost:3000
````

##  Project Structure

```text
keazemusic/
├── app/           # routes and top-level pages
├── components/    # shared UI components (layout, header, lightbox, etc.)
├── data/          # release metadata / config for the discography
├── public/        # images, icons, artwork
└── ...
```

##  Future Ideas

* Beat store with audio previews and watermarked downloads
* “Tools & software” page for plugins or utilities
* Additional motion / color passes / beat machine visualsc
