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
| 02 | Antarctica + rebirth | Done | Full-screen lone penguin journey, `pengu-egg.gif`, baby photo rises with enlarged caption & pill |
| 03 | Family timeline | Done | Rocket follows the curve, lit path, two-column card (no overlap) |
| 04 | Work timeline | Done | Faster wavier gold path, `pnngu-greet.gif` when crew meets her |
| 05 | Polaroids | Done | 4 sets, 2 of them Weird Expressions (6 photos each) |
| 06 | Awards | Done | Neutral frosted glass frames with gold titles; custom GIFs for chair, laugh, walk |
| 07 | Doraemon pocket | Done | 7 bag artifacts, drawn tote bag, item details beside it |
| 08 | Hippo Recharge Station | Done | Dedicated section, 5s battery charging (0-100%), locked resume button, `pengu-energy.gif` |
| 09 | Tubelight | Done | Timestamped log, flicker, comprehension meter, room lights up |
| 10 | Terms & Conditions | Done | Zig-zag 8 clauses, modal viewer, cursive Arpita Nayak signature, `pengu-yes.gif` badge |
| 11 | Say NO | Done | Chat requests, enlarged dodging NO, weekend work & heavy bag roasts, `beleive-in-pengu.gif` on final exam |
| 12 | Cloud Kitchen | Done | Scattered recipe board, modal view with cycling chef cooking GIFs and itemized bill with PAID stamp |
| 13 | Predictions | Done | Large card, future-lens Pengu, wrapping 2-row revealed name tray (no horizontal scrollbar) |
| 14 | Crew messages | Done | Retro marquee, cinema curtains, clapperboard, film reel, fullscreen toggle, remote-holding Pengu |
| 15 | Launch & Finale | Done | Name pills, countdown, blast-off, pink thank-you title, strictly 13 crew wish-stars, continuous confetti |

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
  - `pengu-kitchen.gif`, `pengu-kitchen-2.gif`, `pengu-kitchen-3.gif`: chef cooking animations cycling in Cloud Kitchen.
  - `pengu-run.gif`: delivery Pengu sprinting next to the free delivery notice in Cloud Kitchen.
  - `pengu-no.gif`, `pengu-no-2.gif`, `pengu-no-3.gif`, `pengu-no-4.gif`, `pengu-no-5.gif`: animated refusing Pengus accompanying the dodging NO button in Say NO.
  - `penguin-mic.gif`: animated MC announcer Pengu presenting each roast in Awards.
- Cloud Kitchen direct bill: directly displays the printed complimentary bill with "PAID" stamp, updating live on each order.
- Predictions layout safety: relocated Pengu future poses to side and lower deck positions, preventing overlap on the section title/header.
- Finale & Thank You refinement: scaled down "Thank You, Hippo" text, matched dancing badge sizes, placed `thank-you.gif` in a dedicated header, and restored the Arpita & Pranjal couple on the flyby rocket with heart pop.
- Launch stage stabilization: locked `.launch-header` and `.launch-title-slot` height, completely preventing the moon, ground, and pad from shifting when the title changes or clears.
- Pranjal standing with flowers: connected `pengu-flower.gif` for Pranjal waiting at the launch pad; wired `ASSETS.pranjal` with graceful fallback to `pengu-love-1.gif` (never the rocket image).
- Tubelight power-up: integrated `pengu-energy.gif` triggering with full voltage when comprehension buffers to 100%.
- Hippo Mid-Party Recharge Station: added interactive 8th milestone in Doraemon Pocket (`BagReveal.tsx`) featuring `pengu-energy.gif`, 12% to 100% animated battery voltage bar, confetti, and roast about Hippo getting tired carrying the heavy bag and searching for chairs.
- Flower Pengu on covenant: added `pengu-flower.gif` beside the cursive signature and witness pills in `Terms.tsx` on acceptance, plus inside the individual clause modal view.
- Animated character GIFs: wired `pengu-bag.gif` into Doraemon Pocket and Awards; wired `pengu-jagat-mata.gif` into Jagatmata Award; wired `pengu-tubelight.gif` into Tubelight Moment section and award.
- Restored rocket illustration: restored original `pengu-on-rocket.png` across timeline, margin flybys, and finale launch; wired `pengu-rocket.gif` into `PenguinBirth` rebirth and Subhasree's "Rocket udeidebi!" prediction.
- Mirrored Pranjal flower greeting: horizontally mirrored Pranjal at the launch pad so the bouquet points left toward Arpita arriving in her rocket.
- 13 Crew Predictions & Wish-Star Rain: created 13 tailored roast predictions from Dushmanta, Niyaz, Astha, Subhasree, Tapan, Shyam, Soumya, Tanu, Asutosh, Paresh, Amit, Anchal, and Ankita; all 13 names cascade down as glowing wish-stars in the finale.
- Thank You Card Polish: restored signature bachelorette pink color (`var(--pink)`) and soft glow to "Thank You, Hippo" title; matched top-right and bottom-left dancing Pengu GIFs to exact identical size (`clamp(74px, 9vw, 96px)`); enlarged `thank-you.gif` badge with pink drop-shadow and snug placement.
- Extended Custom GIFs Integration: wired `pengu-asking.gif` into Say NO chat requester avatars; `pengu-use-head.gif` into the final exam and Award #5; `pengu-think.gif` and `pengu-idea.gif` into Tubelight comprehension stages; and `penguin-travel.gif` into Award #3 (Chair Seeker).
- Strictly 13 Finale Names: purged generic placeholders ("Siblings & Cousins", "The Office Gang", "Childhood Besties") from finale wish rain; the falling wish-stars now exclusively feature the 13 specified names (Dushmanta, Niyaz, Astha, Subhasree, Tapan, Shyam, Soumya, Tanu, Asutosh, Paresh, Amit, Anchal, Ankita).
- Final Card Clean Up: deleted `thank-you.gif` from the card header so the script title stands clean; bumped the top-right dancing Pengu size to `clamp(86px, 12vw, 118px)` for balanced visual weight.

### Session 6 (2026-11-12)
- Added and registered 10 new custom transparent GIFs: `pengu-egg.gif`, `beleive-in-pengu.gif`, `pengu-chair.gif`, `pengu-cute.gif`, `pengu-dance-3.gif`, `pengu-fly.gif`, `pengu-laugh.gif`, `pengu-walk.gif`, `pengu-yes.gif`, and `pnngu-greet.gif`.
- Antarctica Rebirth: Integrated `pengu-egg.gif` for the hatching egg step; added `penguin-travel.gif` and `pengu-walk.gif` during caption steps; increased paragraph text clamp and pill badge sizes for the rebirth finale step.
- "Then We Met You" Timeline: Assigned `pnngu-greet.gif` to the first work timeline milestone.
- Awards: Swapped metallic yellow background for neutral frosted glass (`--glass-bg`) on `.award-frame` so transparent GIFs display seamlessly while keeping titles golden; wired `pengu-chair.gif` (Chair Seeker), `pengu-laugh.gif` (Current Laugh), and `pengu-walk.gif` (Penguin Walk).
- Dedicated Hippo Recharge Station (Section 7): Extracted recharge into its own dedicated section between Bag Reveal and Tubelight with 5-second animated charging bar (0% to 100%), big `pengu-energy.gif`, curved text roast, and locked resume button.
- Terms & Conditions: Curated 8 clauses laid out in a playful zig-zag pattern with hover resets; clicking opens modal with Next / Prev navigation; prominently features curvy "Arpita Nayak" signature and `pengu-yes.gif` badge.
- Say NO: Increased dodging NO Pengu size from 60 to 100+; refined 6 requests (weekend work, holding heavy bag, organizing trip, 7 AM shift, giving up chair, and Final Exam); integrated `beleive-in-pengu.gif` as Hippo's cheerleader on the Final Exam.
- Cloud Kitchen: Scattered recipe cards across the counter; clicking any card opens modal with dish info, cycling chef cooking GIFs, delivery runner, and itemized bill with PAID stamp.
- Predictions: Wrapped revealed chips tray across rows (`flex-wrap: wrap; justify-content: center;`), eliminating horizontal scrollbar.
- Cinema Screen: Added retro marquee header, theater velvet curtains, clapperboard details, film reel glow ring, metadata badges, fullscreen toggle, and Pengu Remote with infrared beam.
- Catchphrase Unlocked: Upgraded "Catchphrase unlocked" into a dedicated achievement card with glowing cursive quote and enlarged animated rocket Pengu (`size={115}`).
- Unified Card Styling: Rebuilt `Awards` and `RechargeStation` cards with the identical two-column frosted glass layout from `RocketTimeline` and `BagReveal`.
- Recharge Station HUD Clean-Up: Simplified charging bar to "Charging... X%" and "100%", removing "CHARGING STATUS" header and "FULL VOLTAGE" text.
- Tubelight Refinement: Swapped initial stage GIF to `pengu-asking.gif` (clueless polite smile); removed duplicate `pengu-energy.gif` from the 100% comprehension stage.
- Terms & Conditions Tiles: Converted clauses to interactive tiles within the contract, eliminated horizontal desktop scrollbars, styled witness tags with curvy cursive script, and moved celebratory `pengu-yes.gif` (`size={130}`) exclusively inside the inspection modal.
- Say NO Side Showcase: Extracted animated refusing Pengus to a prominent left-side reaction stage (`size={210}`), with `beleive-in-pengu.gif` cheering on the Final Exam; wired `pengu-please.gif` into the requester profile avatar.
- Cloud Kitchen Policy Dock: Replaced tiny delivery footer with a full-width delivery and policy marquee featuring `pengu-run.gif` (`size={105}`) and bold free delivery tags.
- Predictions Synchronized Motion: Wrapped the future Pengu and prediction card inside a shared `AnimatePresence` bundle so both render and animate at the exact same instant.
- Cinema Velvet Curtains: Styled realistic repeating velvet drapery folds with deep ruby shadows and gold trim; removed the two extra standby pills.
- Modal Escape Key Close: Added keyboard listener closing both the Terms clause modal and Cloud Kitchen recipe modal when pressing the `Escape` key.
- Timeline Photos Frosted Glass: Replaced polaroid white `#ffffff` background on `.milestone-photo` with dark frosted glass (`rgba(18, 24, 44, 0.65)`), letting transparent GIFs in Family & Work timelines float seamlessly without box artifacts.
- Universal Card & Modal Frosted Glass: Enforced standard `--glass-border` and `--glass-bg` on `.catchphrase-unlock-card`, `.term-modal`, `.kitchen-modal`, and `.kitchen-policy-bar`, eliminating all colored or highlighted borders.
- Award Cards Natural GIF & MC Pengu Rotation: Removed the nested inner card/box from `.award-gif-wrap` so transparent GIFs float cleanly; vertically centered card content; mirrored top-right MC announcer Pengu by 180 degrees (`scaleX(-1)`) to face the title; verified 28px outer border radius.
- Awards Stage Structure: Rebuilt Awards with the exact layout of Doraemon Pocket (`award-layout`), placing the hero GIF and honors counter on the left outside the card, with the frosted card dedicated to the copy and title on the right.
- Recharge Station Top-Stacked & Centered: Kept `pengu-energy.gif` directly on top with no background box; vertically centered the card within the viewport with 28px border radius.
- Terms & Conditions Zero-Scroll Matrix: Switched clauses to a compact 4-column x 2-row layout (`overflow: hidden`), eliminating all vertical scrollbars on desktop while keeping responsive 2-column mobile scrolling.
- Recharge Station 1st Version Layout Restoration: Restored the single centered card layout with large `Pengu` energy GIF (`size={260}`), curved Caveat roast text, and simplified live charging HUD, styled with modern frosted glass (`var(--glass-bg)`, `var(--glass-border)`, 28px border radius) and vertical centering.
- Terms & Conditions Card Height & Gap Fix: Removed `flex: 1` and `justify-content: space-between` from `.contract`, allowing the card to wrap its 2 rows of clauses naturally with unified spacing and vertical centering (`margin: auto 0;`), completely eliminating awkward vertical stretching and dead space.
- Awards & Terms Modal Typography Reduction: Reduced `.award-title` and `.award-roast` to match Doraemon Bag font sizes; reduced `.term-modal-title` and `.term-modal-rule` for proportional readability.
- Award MC Pengu Mirror Wrap: Wrapped top-right MC announcer in `.award-mic-pengu-wrap` with `transform: scaleX(-1)` so it reliably faces inward toward the card title without Framer Motion override.
- Recharge Screen Eyebrow Purge: Removed the "Mid-Party Pit Stop" / "Pitstop Power-Up" kicker tag from `SECTIONS[7]` and `RechargeStation.tsx`.
- Impossible NO UI Upgrade: Removed the top-left profile avatar from `.chat-card`; styled clean request counter pill and sender badge; updated request balloon with soft shadow and 28px frosted glass.
- Cloud Kitchen Desktop Grid Centering: Converted dish grid to flex-wrap with centered items so the 2 items in row 2 center horizontally on desktop; added top spacing and vertically centered the stage.
- Timeline Adaptive Photo Framing: Dynamically detect GIF vs image; GIFs have zero background, zero border, and zero box-shadow; static photos retain the classic small white photo border.
- Terms 3+3+2 Matrix & Signature Resize: Switched desktop clause layout to 3+3+2 with centered 2-card bottom row; increased card width and padding; reduced Arpita Nayak cursive signature and witness pills for graceful card proportions.
- Recharge Station Free-Floating Hero GIF: Extracted `pengu-energy.gif` outside and above the frosted card within `.recharge-stage`, letting the animated GIF float freely with zero enclosing card box.
- Say NO Verdict Simplification: Removed the 3 score cards (`.score-row`) from the test result, leaving the victory banner, dancing penguin, and green PASSED stamp.
- Tubelight Prominent Time & Latency Clock: Added real-time digital clock HUD in the room displaying live time and elapsed latency (e.g. `+20m DELAY`, `+45m DELAY`); upgraded each log entry with prominent time chips and elapsed duration badges (`T+0m`, `+1m`, `+20m later`, `+38m later`, `+45m later ⚡ Full Voltage!`) so the 45-minute joke buffering delay is unmissable.
- Terms Footer Fine-Tuning: Further reduced cursive signature font size (`clamp(1.1rem, 1.5vw, 1.35rem)`), witness pills, and agree/disagree button padding (`8px 18px`) for tight, elegant proportion.
- Say NO Card Redesign: Rebuilt the 5 NO challenges with the two-column stage architecture matching Awards and Doraemon Pocket; replaced generic SMS bubbles with integrated frosted glass typography (`.sayno-question` in Fredoka and `.sayno-roast` in Caveat); paired each round with tailored character dialogue in `.side-speech-bubble`; added bottom progress chip tray (`.sayno-tray`) tracking test progression while keeping the victory verdict intact.
