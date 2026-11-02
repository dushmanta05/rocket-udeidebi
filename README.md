# Arpita's Launch Pad 🚀

An interactive PPT-style bachelorette party website for Arpita ("Rocket udeidebi!"). Designed for projection from a laptop connected to a TV, and fully responsive on mobile.

## Prerequisites

- **Node.js**: v24 (see `.nvmrc`)
- **Package Manager**: `pnpm` (v12+)

If using `nvm`:
```bash
nvm use
```

## Getting Started

1. **Install dependencies:**
   ```bash
   pnpm install
   ```

2. **Start the development server:**
   ```bash
   pnpm dev
   ```
   Open the printed local URL (e.g., `http://localhost:5173`) in your browser.

3. **Build for production:**
   ```bash
   pnpm build
   ```
   Outputs a standalone, offline-ready build into `dist/` with relative asset links (`base: './'`).

4. **Preview the production build:**
   ```bash
   pnpm preview
   ```

## Offline Party Setup (TV / Laptop)

To run the presentation offline at the venue without relying on party Wi-Fi:

1. Build the application beforehand:
   ```bash
   pnpm build
   ```
2. Start the local preview server:
   ```bash
   pnpm preview --host
   ```
3. Open the browser in fullscreen (`F` or `F11`), plug the HDMI cable into the TV, and click **Tap to Start** to initiate the party soundtrack!

## Controls & Navigation

| Input | Action |
|---|---|
| `→` (Right Arrow) / `Space` / `Enter` | Next step or section |
| `←` (Left Arrow) | Previous step or section |
| `F` | Toggle Fullscreen |
| `M` | Toggle Audio Mute |
| Swipe Left / Right | Next / Previous on touch devices |
| Bottom Progress Bar | Click any milestone dot to jump directly to that section |
| Character Taps | Easter eggs: Tap Hoppi or Arpita for witty dialogue and confetti |

## Adding Real Photos & Content

All content is cleanly decoupled from the UI:

- **Data & Text**: Edit captions, roasts, awards, and terms in `src/data/`.
- **Photos & Videos**: Add files to `public/images/` and `public/videos/`, then set the `src` paths in the corresponding data file in `src/data/`. Missing media falls back automatically to cute camera placeholders.
- **Penguin Palette**: Tweak Arpita Penguin colors centrally in `src/styles/variables.css` via `--color-penguin-body` and `--color-penguin-body-dark`.

## Tech Stack

- **Framework**: Vite + React 19 + TypeScript
- **Motion**: Framer Motion & GSAP (MotionPath)
- **Styling**: Plain CSS with CSS Custom Properties
- **Effects**: canvas-confetti
