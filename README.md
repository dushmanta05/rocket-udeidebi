# Arpita's Launch Pad

An interactive, PPT-style bachelorette website for Arpita ("Rocket udeidebi!"). Built to run from a laptop on a TV, and responsive on phones. Dark night-sky theme with twinkling stars throughout.

## Prerequisites

- **Node.js**: v24 (see `.nvmrc`)
- **Package manager**: `pnpm`

## Getting started

```bash
pnpm install
pnpm dev        # http://localhost:5173
pnpm build      # offline-ready build in dist/ (relative paths, fonts bundled)
pnpm preview    # serve the build
```

## At the party (offline)

1. `pnpm build` beforehand.
2. `pnpm preview --host` and open the printed URL. Use the preview server, not `dist/index.html` opened as a file: the crew video list (`wishes.json`) is loaded over HTTP.
3. Press `F` for fullscreen, connect the TV, and click **Begin the Journey**.

Fonts (Fredoka, Nunito, Caveat) are bundled with the build, so nothing is fetched from the internet.

## Controls

| Input | Action |
|---|---|
| `→`, `Space`, `Enter` | Next step or section |
| `←` | Previous step or section |
| `F` | Toggle fullscreen |
| Swipe left / right | Next / previous on touch screens |
| Progress dots (bottom) | Jump to a section |
| Tap the hippo | A random quip and confetti |

## Images

All images live in `public/images/`. A missing file never breaks a screen; it falls back as shown.

| File | Used for | If missing |
|---|---|---|
| `hippo.png` | The host on the welcome and thank-you screens (Arpita is also called Hippo) | Drawn hippo |
| `arpita.jpeg` | Stand-in for every photo slot that has no photo of its own | Dashed placeholder |
| `pengu-on-rocket.png` | Arpita on her rocket: timelines, progress bar, welcome fly-by, finale | Drawn rocket |
| `pengu.png` (optional) | Pengu in the egg-hatching scene (transparent PNG or GIF renamed to `.png`) | Drawn blue penguin |
| `pengu-chef.gif` (optional) | Chef sticker in the Cloud Kitchen | Drawn penguin in a chef hat |
| `pranjal.png` (optional) | Pranjal at the launch pad | Drawn penguin with a bow tie |

To give a specific slot its own photo, add the file to `public/images/` and set `src: './images/your-photo.jpg'` on that item in `src/data/`:

| Screen | Data file |
|---|---|
| Family and work timelines | `timeline.ts` |
| Polaroids (four sets) | `polaroids.ts` |
| Awards | `awards.ts` |
| Doraemon pocket items | `bagItems.ts` |

## Crew video messages

Put one vertical video per person in `public/videos/wishes/` and list them in `public/videos/wishes/wishes.json`. The screen shows as many messages as the file lists, in order, and moves to the next when a video ends.

```json
{
  "wishes": [
    {
      "name": "Dushmanta",
      "relation": "Work crew",
      "message": "May your rocket fly higher than ever.",
      "video": "dushmanta.mp4",
      "poster": "dushmanta.jpg"
    }
  ]
}
```

| Field | Required | Shown as |
|---|---|---|
| `name` | yes | Big handwritten name beside the video |
| `relation` | no | Small tag above the name ("Cousin", "Work crew") |
| `message` | no | One line under the name, readable even with the sound low |
| `video` | no | File name in the same folder (`.mp4` plays everywhere) |
| `poster` | no | Still image shown before the video starts |

A person with no video yet shows their name over the stand-in photo. If `wishes.json` is missing or broken, the list in `src/data/wishes.ts` is used.

## Text

All on-screen copy is in `src/data/`: section titles in `sections.ts`, and each screen's content in its own file.

## Tech stack

Vite, React 19, TypeScript, Framer Motion, plain CSS with custom properties, canvas-confetti.
