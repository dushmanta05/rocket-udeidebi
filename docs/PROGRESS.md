# Project Progress Tracker

Track the development progress of **Arpita's Launch Pad** (`rocket-udeidebi`).
Every agent must update this document upon completing a task or before ending a session.

## Current Status

- **Phase:** Feature-complete for the party; waiting on real photos, videos and names
- **Active Task:** None
- **Next Task:** Drop in real assets (below), fill `src/data/crew.ts`, then a full run-through on the TV and on a phone

## Assets still to add

| What | Where | Until then |
|---|---|---|
| Per-slot photos (timelines, polaroids, awards, bag items) | `public/images/`, then `src:` on the item in `src/data/` | `arpita.jpeg` everywhere |
| Baby photo for the hatching | `public/images/baby-arpita.jpg` | `arpita.jpeg` |
| Pengu chef sticker | `public/images/pengu-chef.gif` | Drawn chef penguin |
| Pranjal | `public/images/pranjal.png` | Drawn groom penguin |
| Crew videos | `public/videos/wishes/*.mp4` listed in `wishes.json` | Name over the stand-in photo |
| Every name for the thank-you star rain | `src/data/crew.ts` | Four sample names |

## Story ideas not built yet

Ideas raised for possible extra sections; none is started.

- **How Well Do You Know Hippo?** A quick quiz for the room with multiple-choice answers about her, revealed one by one.
- **Pranjal's Side of the Story:** a short chapter of how they met, told from his side.
- **Chai Break Chronicles:** a map of her favourite chai spots and the chair she found at each.
- **Hippo's Dance Floor:** a tap-to-dance mini scene set to "generator beats", tying back to the Unstoppable Dancer roast.
- **Before and After Marriage:** split-screen predictions of everyday habits, with photos.

## Section Checklist

| # | Section | Status | Notes |
|---|---|---|---|
| 01 | Welcome | Done | `hippo.png` host, Fredoka + Caveat title, full-width rocket fly-by |
| 02 | Antarctica + rebirth | Done | Full-screen lone penguin (`pengu.webp`), two caption steps, glowing egg, 3-stage crack, baby photo rises |
| 03 | Family timeline | Done | Rocket follows the curve, lit path, two-column card (no overlap) |
| 04 | Work timeline | Done | Same component, faster wavier gold path |
| 05 | Polaroids | Done | 4 sets, 2 of them Weird Expressions (6 photos each) |
| 06 | Awards | Done | Gold-framed photo only, no trophy, confetti both sides |
| 07 | Doraemon pocket | Done | 7 items, drawn tote bag, photo + details beside it, no flip |
| 08 | Tubelight | Done | Timestamped log, flicker, comprehension meter, room lights up |
| 09 | Terms & Conditions | Done | 10 clickable clauses in modal, cursive Arpita Nayak signature, Hippo & Pengu pills |
| 10 | Say NO | Done | Chat requests, dodging No, final exam breakthrough NO, SEE HOW EASILY YOU SAID NO verdict |
| 11 | Cloud Kitchen | Done | Fits without scrolling, chef sticker slot, printed receipt |
| 12 | Predictions | Done | Large card, future-lens Pengu cycling positions, scrolling revealed tray |
| 13 | Crew messages | Done | 16:9 widescreen cinema feature film player with remote-holding Pengu |
| 14 | Launch | Done | Name pills, every countdown number, "Next stop: Happily Ever After!", thank-you from the crew, names from `crew.ts`, continuous confetti |

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

### Session 3 (2026-11-03)
- Perspective: the party is from the crew to Arpita. Rewrote titles and the welcome and thank-you copy to speak to her ("Welcome, Hippo!", "Thank You, Hippo").
- Antarctica: full-screen lone penguin journey (`pengu.webp`) in two caption steps, then the rebirth through the egg.
- Timelines: the rocket flies slowly along the curve with the lit path drawn in step.
- Margin fly-by (`RocketFlyby`) on most pages: per-section paths through empty corners and edges, always climbing or cruising.
- Doraemon pocket: seven items, a drawn tote bag, no flip at the end.
- Launch: every countdown number shows, name pills on Arpita and Pranjal, new blast-off line, names list (`crew.ts`) and continuous confetti on the thank-you screen.
- One frosted-glass card style everywhere, no highlighted borders.
- Say NO: chat-message requests, taunts, and a scoreboard ending.
- Phones and tablets: launch scene fixed (it collapsed), stacked text centred, fly-by hidden under 900px. Checked at 390x844 and 820x1180.
- Every commit was built on its own before committing (see "Committing" in `AGENTS.md`).

### Session 4 (2026-11-09)
- Increased Hippo mascot size on the welcome slide to 280px with responsive max bounds on desktop and mobile.
- Verified typography hierarchy and font family mappings (Fredoka for title, Nunito for subtitle/lead, Caveat for handwritten lines).
- Configured Hippo image as site favicon and apple-touch-icon in `index.html`.
- Removed bounce animation on the bottom timeline rocket and positioned it steadily on top of the track dots.

### Session 5 (2026-11-11)
- Timeline synchronization: keyframed `lit` along 31 identical sample points as `left` and `top`, eliminating line lag behind the rocket.
- Mobile responsiveness: tuned Family & Work Timelines, Doraemon Pocket, and Tubelight with compact heights, responsive fonts, and scrollable logs.
- Terms & Conditions: clickable clauses open a modal with Previous / Next navigation to cycle through all 10 clauses; cursive "Arpita Nayak" signature with "Hippo" and "Pengu" witness pills.
- Predictions section revamp: removed crystal ball, added large card, cycling Pengu with future lens in dynamic positions, and horizontal scrolling chip tray for 14-15 items.
- Say NO game enhancement: added 6th Final Exam challenge ("Can you say NO to this question right now?"), inverted dodging so YES runs away, and rewarded her breakthrough with "SEE? LOOK HOW EASILY YOU SAID NO!" celebration and scoreboard.
- Message for you: converted into a 16:9 widescreen cinema feature film player with Pengu holding a TV remote; tapping Pengu or screen toggles play/pause with infrared beam effects.
- Launch Pad mobile polish: centered gantry platform and scaled rocket to fit 390px mobile screens without overflow.
- Thank You screen: enlarged Hippo to match hero size (380px) and added slot for `pengu-dance.gif`.
- Custom transparent GIFs integration: wired all transparent GIFs into their respective locations:
  - `pengu-future.gif`: animated future-vision Pengu shifting around the Predictions card.
  - `pengu-remote.gif`: animated TV-remote Pengu in Crew Messages controlling the feature film player.
  - `pengu-dance.gif`: celebratory dancing badge at the top-right of the Thank You card.
  - `thank-you.gif`: animated thank you badge in the Thank You card header.
  - `dancing-dance-3.gif`: party co-dancer beside the final crew sign-off.
  - `pengu-dance-1.gif`: party greeter dancing beside the "Let's Begin" button on the Welcome screen.
  - `pengu-dance-2.gif`: triumphant victory dancer above the Say NO breakthrough scoreboard.
  - `pengu-love.gif`: celebratory love Pengu popping onto the Terms covenant when Arpita signs.
  - `pengu-love-1.gif`: romantic boarding Pengu when Pranjal hops onto the rocket with Arpita.
