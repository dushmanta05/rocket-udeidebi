# Project Progress Tracker

Track the development progress of **Arpita's Launch Pad** (`rocket-udeidebi`).
Every agent must update this document upon completing a task or before ending a session.

## Current Status

- **Phase:** Redesign done (dark night sky, real images, 14 sections); waiting on real photos and videos
- **Active Task:** None
- **Next Task:** Drop in real assets (see "Assets still to add"), then a full run-through on the TV

## Assets still to add

| What | Where | Until then |
|---|---|---|
| Per-slot photos (timelines, polaroids, awards, bag items) | `public/images/`, then `src:` on the item in `src/data/` | `arpita.jpeg` everywhere |
| Pengu meme image for the hatching | `public/images/pengu.png` | Drawn Pengu |
| Pengu chef sticker | `public/images/pengu-chef.gif` | Drawn chef penguin |
| Pranjal | `public/images/pranjal.png` | Drawn groom penguin |
| Crew videos | `public/videos/wishes/*.mp4` listed in `wishes.json` | Name over the stand-in photo |

## Section Checklist

| # | Section | Status | Notes |
|---|---|---|---|
| 01 | Welcome | Done | `hippo.png` host, Fredoka + Caveat title, full-width rocket fly-by |
| 02 | Hatching | Done | Colony, Pengu waddle, egg wobble, 3-stage crack, shell split, baby photo rises |
| 03 | Family timeline | Done | Rocket follows the curve, lit path, two-column card (no overlap) |
| 04 | Work timeline | Done | Same component, faster wavier gold path |
| 05 | Polaroids | Done | 4 sets, 2 of them Weird Expressions (6 photos each) |
| 06 | Awards | Done | Gold-framed photo only, no trophy, confetti both sides |
| 07 | Doraemon pocket | Done | Photo + details beside the bag, no emoji, item tray |
| 08 | Tubelight | Done | Timestamped log, flicker, comprehension meter, room lights up |
| 09 | Terms & Conditions | Done | Short clause titles, signature, runaway Disagree, stamp |
| 10 | Say NO | Done | Huge NO title, big dodging No, small Yes |
| 11 | Cloud Kitchen | Done | Fits without scrolling, chef sticker slot, printed receipt |
| 12 | Predictions | Done | Floating orb, flip-in fortunes, revealed stack |
| 13 | Crew messages | Done | Vertical videos from `wishes.json`, auto-advance, name/relation/message |
| 14 | Launch | Done | Pranjal on pad, Arpita arrives, he boards, countdown, blast-off, thank-you note |

---

## Infrastructure & Core Systems

- [x] Vite + React + TypeScript (`base: './'`), Node 24, `pnpm`
- [x] Dark night-sky theme with `Starfield` (twinkling stars, nebulae, shooting stars) behind every screen
- [x] Self-hosted fonts via `@fontsource` (Fredoka, Nunito, Caveat); no Google Fonts CDN
- [x] All copy in `src/data/` (`sections.ts` for titles, hints and screen text)
- [x] `Placeholder` uses `arpita.jpeg` when a slot has no photo; `SmartImage` gives characters a drawn fallback
- [x] Image paths in one place: `src/data/assets.ts`
- [x] `useWishes` loads `public/videos/wishes/wishes.json`, falls back to `src/data/wishes.ts`
- [x] Navigation: keys, swipe, progress dots; clicking the current section's dot restarts it without breaking its steps
- [x] No sound: background music, mute button and `useSound` removed (the folder had no audio)
- [x] `prefers-reduced-motion` respected
- [x] `pnpm build` clean; screenshots checked at 1440x900 and 390x844

---

## Session Log

### Session 1 (2026-11-02)
- Added `.gitignore` configured for Vite, build artifacts, and untracking `PLAN.md`.
- Established `AGENTS.md` containing strict coding standards (zero unnecessary comments), conventional commits policy, and workflow rules.
- Created `docs/CONTEXT.md` extracting the complete specification, character motifs, roast ideas, and technical requirements from `PLAN.md`.
- Created `docs/PROGRESS.md` to maintain persistent session continuity for all current and future agents.
- Added `.nvmrc` (Node 24) and configured project to use `pnpm`.
- Bootstrapped Vite + React 19 + TypeScript app with offline `base: './'`.
- Created universal `Placeholder` component and complete set of 8 SVG character and prop artworks.
- Populated typed data sets in `src/data/` for all 10 interactive modules.
- Built navigation, touch swipe, keyboard controls, and audio manager hooks.
- Implemented all 13 interactive sections in `src/sections/` with Framer Motion and confetti effects.
- Themed Arpita Penguin in sweet lavender (`#a78bfa` / `#8b5cf6`) matching the Tenor Pengu gif style, with CSS variable customization in `src/styles/variables.css` and component prop overrides.
- Added mandatory pre-commit verification commands (`grep` comment checks and `pnpm build`) to `AGENTS.md`.
- Documented complete prerequisites, setup, run commands, offline presentation setup, and controls in `README.md`.
- Refined UI styling with glassmorphism, responsive `clamp()` typography, and full mobile/tablet viewport adaptability.
- Redesigned Penguin with kawaii aesthetics, specular catchlights, blush cheeks, and support for transparent PNG overrides (`public/images/penguin.png`).
- Created `PenguinRocketArt` featuring Arpita Penguin riding her rocket with fluttering scarf and exhaust flames; supports `public/images/penguin-rocket.png` PNG override.
- Upgraded bottom progress bar (`ProgressRocket`) into a frosted glass slider dock where the penguin rocket glides across milestones.
- Selected `Outfit` (display) and `Plus Jakarta Sans` (body) for modern party typography with `Caveat` for polaroid handwriting.
- Eliminated generic repetitive white cards in favor of 13 immersive slide atmospheres (cosmic welcome stage, arctic birth floe, scrapbook road trip, neon speedway, dark studio gallery, black-tie awards gala with spotlights, anime bag realm, moody loft tubelight, royal deed parchment, pop-art duel, chalkboard bistro, mystic nebula oracle, and cinematic space launch).
- Refined UI to be minimal and elegant: replaced neon gradients with a serene, warm linen/cream palette (`#faf8f5`), paired with editorial serif typography (**Playfair Display**) for headings, **Plus Jakarta Sans** for body, and **Caveat** for all roast lines and handwritten notes.
- Tested and verified production build with `pnpm build`.

### Session 2 (2026-11-03)
- Switched to one dark night-sky theme with a global starfield; removed the 13 per-section light themes.
- Replaced Playfair Display and Plus Jakarta Sans with Fredoka and Nunito, kept Caveat, and bundled all three locally.
- Used the supplied images: `hippo.png` as the host (renamed Hoppi to Hippo throughout), `pengu-on-rocket.png` for every rocket, `arpita.jpeg` as the stand-in photo everywhere; added optional slots for `pengu.png`, `pengu-chef.gif` and `pranjal.png`.
- Rebuilt the hatching, both timelines (shared `RocketTimeline`), polaroids, awards, Doraemon pocket, tubelight, terms, Say NO, kitchen and predictions as described in `docs/CONTEXT.md`.
- Split the old finale into Crew messages (vertical videos from `wishes.json`) and Launch (pickup, countdown, blast-off, thank-you).
- Removed unused art (`TrophyArt`, `MenuBoardArt`, `TubelightArt`, `Penguin`) and the sound hook.
- Fixed: clicking the current section's progress dot reset its step count, so the next tap skipped the section.
