# KeazeMusic.com — Artist Site & Discography
- **Production:** https://keazemusic.vercel.app
  
KeazeMusic.com is the main web home for audio engineer and artist keaze. Built to be simple and fast using Next.js 15 and Tailwind. The goal is to keep the layout clean, highlight releases, and leave room for future beat / software drops.

##  Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **UI:** React + Tailwind CSS
- **Fonts:** Geist (via `next/font`)
- **Hosting:** Vercel

##  Features

- **Discography Grid** – Releases displayed as a responsive grid of cover art.
- **Modal Release View** – Clicking a tile opens an overlay with:
  - release / track details
  - credits
  - external links (where applicable)
- **Focused Layout** – Minimal navigation and copy; the site is about the music first.
- **Deploy-Ready** – Standard Next.js dev / build commands, deployed via Vercel.

##  Running Locally

```bash
# install dependencies
npm install

# start dev server
npm run dev

# then visit
# http://localhost:3000
````

##  Project Structure (high level)

```text
keazemusic/
├── app/           # routes and top-level pages
├── components/    # shared UI components
├── data/          # release metadata / config
├── public/        # images, icons, artwork
└── ...
```

##  Future Ideas

* Beat store with audio previews and watermarked downloads
* “Tools & software” page for plugins or utilities
* Subtle visual experiments (transition / color tweaks / beat machine visuals) without losing the current feel
