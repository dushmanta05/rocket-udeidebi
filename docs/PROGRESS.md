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
| 02 | Antarctica + rebirth | Done | Full-screen lone penguin journey, `pengu-egg.gif`, `arpita.png` transparent cutout rises directly from hatching egg shell |
| 03 | Family & Early Years | Done | 12-photo balanced album in two 3x2 sets (Set 1: 6 early journey photos, Set 2: 6 family, 'A' squad & Tripling photos) with enlarged cards, washi tape, and full-view modal (`familyPhotos.ts`) |
| 04 | Friends (Then We Met You) | Done | 7-page interactive stepped memory album with 23 photos from 'public/images/friends/' across 7 acts (1st Trip & Uno + travel GIF, Holi, Eating Together & Gupchup tower, Dinners & Pakhala lunch, Celebrating Together, Outings & Trips, and single Hero finale card 'We\'ll cherish these moments'), washi tape, and modal viewer |
| 05 | Polaroids | Done | 3 volumes of Weird Expressions with all 18 real photos wired (6 photos each) in 3x2 grid, with bounded modal navigation (cycling strictly within current volume) |
| 06 | Awards | Done | Neutral frosted glass frames with gold titles; custom GIFs for chair, laugh, walk |
| 07 | Doraemon pocket | Done | 6 transparent PNG artifacts (pocket-chair, hand-cream, hajmola, zandu-balm, perfume, biscuit) with normalized 520px viewing sizes, drawn tote bag, item details beside it |
| 08 | Hippo Recharge Station | Done | Dedicated section, 5s battery charging (0-100%), locked resume button, `pengu-energy.gif` |
| 09 | Tubelight | Done | Timestamped log, flicker, comprehension meter, room lights up |
| 10 | Terms & Conditions | Done | 3+3+2 matrix, modal viewer with Esc close, proportional Arpita Nayak cursive signature, pengu-flower.gif |
| 11 | Say NO | Done | 2-column stage, scenario-themed GIFs (boss, bag, Jagatmata, 7am, chair, believe), stabilized card layout, bounded dodging, PASSED stamp |
| 12 | Cloud Kitchen | Done | Scattered recipe board, modal view with cycling chef cooking GIFs and itemized bill with PAID stamp |
| 13 | Predictions | Done | Large card, future-lens Pengu, wrapping 2-row revealed name tray (no horizontal scrollbar) |
| 14 | Why We Love You (Heart) | Done | Pre-video heartfelt tribute section highlighting 6 true qualities of Arpita with hero GIFs, quotes & badge tray |
| 15 | Crew messages | Done | Retro marquee, cinema curtains, clapperboard, film reel, fullscreen toggle, remote & popcorn Pengu |
| 16 | Launch & Finale | Done | Name pills, countdown, blast-off, pink thank-you title, strictly 13 crew wish-stars, continuous confetti |

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
- Terms & Conditions Signature CSS Cascade Fix: Purged dead `.signature-name` selector (`font-size: 2.4rem`, `min-height: 2.6rem`) that was cascading over `.cursive-signature`; scaled Arpita Nayak signature directly via `.cursive-signature` to `clamp(1.05rem, 1.3vw, 1.25rem)` with delicate underline, harmonizing its visual weight with the 8 clause cards above.
- Say NO Scenario-Themed Hero GIFs: Replaced repeated generic refusal GIFs with contextual story GIFs matching each roast situation (pleading boss with puppy eyes, 20kg heavy bag, multi-armed Jagatmata, awkward 7 AM morning shift ask, prized comfy chair, and final exam cheerleader), aligning the hero visual, dialogue bubble, and dodge gameplay.
- Say NO Button Proportion & Layout Stabilization: Rescaled the oversize NO button to a balanced, glowing pill (`padding: 12px 38px`, `font-size: clamp(1.25rem, 1.8vw, 1.55rem)`); calibrated dodging offsets safely inside card boundaries (`60-110px` x, `-10 to +10px` y); locked `.sayno-card` with `min-height: 380px` and reserved 28px taunt slot so card dimensions never stretch, jitter, or wrap text upon hovering.
- Say NO Final Boss YES Button Spring Symmetry: Added identical spring transition (`damping: 12, stiffness: 260`) and symmetrical bounded dodging to the YES button on the Final Exam test, keeping both buttons perfectly contained and fluid.
- Say NO Custom Bags GIF Integration: Wired `pengu-bags.gif` into Test 2 (`bags` variant) for the heavy bag request, pairing the 20kg bag roast with the new animated penguin carrying heavy bags.
- Doraemon Bag Artifacts Refresh: Added Hand Cream, Hajmola, Jhandu Balm, and Perfume with tailored affectionate roasts; removed phone charger, snack stash, medicine strip, and leftover biscuit; updated Doraemon Pocket Award copy.
- Special Film Screen Popcorn & Cute Hippo Update: Renamed subtitle to "Special feature film for cute hippo", added handwritten "Get ready with popcorn!" line and clapper text, integrated `pengu-popcorn.gif` inside standby cinema player and dynamic playback state on side remote Pengu.
- Cloud Kitchen Signature Dishes: Added Arpita's real specialty culinary creations (Royal Afghani Chicken, Signature Dum Biryani, Masterclass Chocolate Cake) alongside the roast classics in a balanced 6-dish grid with chef tags and recipe tickets.
- Heart of Gold Tribute Section: Built dedicated 14th section "Why We Love You, Hippo" before the video screen, showcasing 6 heartfelt genuine qualities (empathy, master cooking, electric laughter, unwavering loyalty, gentle spirit, and irreplaceable friendship) with matching transparent Pengu GIFs, Caveat quotes, and badge chips tray.
- Pengu Remote Orientation & Beam Clean Up: Removed the infrared beam direction artifact and mirrored Pengu horizontally (`transform: scaleX(-1)`) so it faces and aims directly towards the cinema screen.
- Family & Early Years Photo Album: Converted timeline into an 8-photo memory album grid (`familyPhotos.ts`), styled with washi tape, titles, and handwritten Caveat captions, backed by full-view modal viewer with previous/next photo flipping and keyboard navigation.
- Family Photos Integration: Wired the 8 real family images from `public/images/family/` (`arpita-1` to `arpita-4` and `family-1` to `family-4`) featuring childhood Hippo, twenties era, saree elegance, dog Zoxo, core family with parents & Ankita Didi, and brother Amit; calibrated 1:1 square aspect ratio for optimal framing.
- The "A" Squad Sibling Photo: Added 9th photo `siblings.jpeg` featuring Arpita, Ankita Didi, Amit, and cousin Anchal ("The 'A' Squad" roast celebrating four names starting with 'A'); upgraded gallery to a 3×3 grid with scrollable stage and responsive 2-column mobile wrapping.
- Zero-Scroll 2-Row Album Architecture: Eliminated the vertical scrollbar on laptops and TVs by restructuring the 9 photos into 2 balanced rows (Row 1: 4 Arpita photos, Row 2: 5 Family & Sibling photos), featuring compact cards with single-line previews and full-screen modal zoom.
- Paginated 2-Set Family Album (2x2 + 3+2): Re-architected Family & Early Years into 2 stepped sets (Set 1: 4 photos in 2x2 grid featuring Arpita's personal journey; Set 2: 5 photos in 3+2 layout featuring family and the 'A' Squad), enlarging photo dimensions, eliminating all scrollbars, and connecting to app step navigation with toggle tabs.
- Family Layout Stabilization & Collision Fix: Calibrated `.family-section` and `.family-stage` with top-aligned flex flow and compact header sizing (`clamp(1.4rem, 2.6vw, 2.1rem)`), eliminating the header text, subtitle, and set toggle overlap; adjusted card proportions to `4 / 3` photo aspect ratio so both sets (2x2 in Set 1 and 3+2 in Set 2) fit within 100% viewport height with zero clipping or phantom 10px card slivers; unified the next button and tap hint into a single flex footer row (`.family-footer`), resolving footer button and hint collisions across all screens.
- Family Photo Sizing Expansion & Bottom Next Removal: Enlarged family cards and photos by ~45% (`height: clamp(135px, 18vh, 180px)`, card widths up to 320px in Set 1 and 280px in Set 2) to eliminate empty gaps and present the 9 family photos boldly on TVs and laptops; removed the redundant bottom "Next" button in favor of the existing top tab pills, side navigation arrows, and keyboard shortcuts, leaving a clean zoom hint at the base.
- Presented By Grand Finale Sponsor Board: Added dedicated parody sponsors & credits step (`STEP_SPONSORS = 5`) directly after the "Thank You, Hippo" screen, showcasing all 10 certified agencies and syndicates with member attributions (Talcher Coalfield Syndicate for Dushmanta Behera, Maobadi Event Management Service for Astha Niharika, Salt Water Inc for Subhasree Croco Lenka, Jajpur Airlines for Paresh & Niyaz, Dhamara Cyclone Landfall Agency for Tapan, Puri Sevayat Sangha for Asutosh, Mohapatra Explanation Therapy Centre for Shyamalendu, Kendrapada Ignored Community for Soumya, Interstate Roaming Network for Tanushree, and Ganjam Immigrants for Ankita, Amit & Anchal), styled with frosted glass cards, gold headers, wish-star rain, and dancing Pengu.
- Thank You Screen Layout Refinement: Moved the "Presented By: Official Sponsors →" golden pill button out of the Thank You note card and positioned it centered at the bottom of the page (`.thanks-bottom-action`), preserving the card's heartfelt aesthetic while providing a clear call-to-action to the credits board.
- Sponsors Screen Visual Refinement & Rocket Layering: Scaled up sponsor card typography (title `clamp(0.96rem, 1.2vw, 1.15rem)`, name `clamp(0.82rem, 0.98vw, 0.92rem)`, tag `clamp(0.92rem, 1.15vw, 1.05rem)`) for enhanced legibility on laptops and TVs; layered the couple penguin rocket (`ThanksCoupleFlyby`) underneath the frosted sponsor cards (`z-index: 0` vs `z-index: 2`); removed the redundant wish-star name shower from the sponsors screen to keep the starry backdrop clear; eliminated vertical scrollbars with tight card padding and gaps.
- Sponsors Scattered Board & 3rd-Line Removal: Removed the 3rd tagline line entirely from all sponsor cards, keeping only the bold parody title and member name in parentheses; converted the rigid 2-column grid into an organic 3-tier scattered board (3 cards on top, 4 cards in middle, 3 cards on bottom) with dynamic rotations (`-2.6deg to +2.4deg`), vertical offsets, and interactive hover pop (`scale: 1.08, rotate: 0deg, zIndex: 10`); expanded card dimensions (`max-width: 420px`) and typography (title `clamp(1.12rem, 1.5vw, 1.38rem)`, name `clamp(0.95rem, 1.18vw, 1.12rem)`) so cards comfortably fill the widescreen space without collisions or vertical scrollbars.
- Full-Viewport Rocket Flyby & Party Penguins: Fixed the rocket flyby layer bounds by switching `.thanks-flyby-layer` to `position: fixed; inset: 0; width: 100vw; height: 100vh;` so the couple penguin rocket flies unhindered across the entire screen from edge to edge without being clipped by `.section`'s 1320px width constraint; integrated `pengu-party-1.gif` (live penguin rock band) and `pengu-party-2.gif` (party-hat conga dance trio) flanking the footer roast tagline on the sponsors screen.
- Why We Love You Tribute Custom GIFs: Wired `pengu-heart.gif` (penguin offering glowing red hearts) into Truth #1 (Boundless Heart & Empathy); wired `pengu-food.gif` (penguin carrying roast chicken & burger feast) into Truth #2 (Culinary Magic With Love); wired `pengu-pari.gif` (fairy angel penguin with wings) into Truth #5 ("A Gentle, Playful Spirit") in `tributes.ts` and `assets.ts`.
- Tribute Visual Scale Harmonization & Smile/Friend GIFs: Wired `pengu-smile.gif` (radiant wide-smile penguin) into Truth #3 and `pengu-friend.gif` (comforting penguin friends holding hands) into Truth #4; expanded `.heart-hero-gif` base container to `clamp(220px, 28vw, 320px)` and applied calibrated visual scale multipliers (`scale: 1.38` for heart, `1.3` for food, `1.12` for smile, `1.08` for friend, `1.25` for pari) so all 6 tribute GIFs match the prominent visual size and presence of Truth #6 (`pengu-cute.gif`).
- Tributes Refinement, Trio Party GIFs & Film Activation: Restored Truth #6 ("Simply Irreplaceable Hippo") in `tributes.ts` and removed the "Truth #X" badge tag from card rendering, leaving clean pill badges; removed kicker truth counter; scaled GIFs 3, 4, 6 to `0.86` for tight visual proportion; integrated `pengu-party-3.gif` alongside enlarged `pengu-party-1.gif` and `pengu-party-2.gif` in the Presented By screen; renamed `hippo.MP4` to `crew-film.mp4` for immediate playback in the cinema section; enlarged Family Era photo cards (widths up to 390px/315px and frame height `clamp(155px, 21vh, 215px)`) for bold presentation on TVs and laptops.
- Cinema Standby Architecture & Mobile Sizing Stabilization: Upgraded film section (`CrewMessages.tsx`) to show initial standby curtain card first (`hasStarted: false`); video only mounts and plays upon tapping the screen or Remote Pengu; purged clipping header clapper and footer badges from standby card; calibrated `.cinema-bezel` to portrait 9:16 mobile aspect ratio matching the 1080x1920 video dimensions, eliminating all screen size fluctuation between standby and active playback; removed redundant bottom status bar (live indicator, tap prompt, and extra fullscreen button), keeping browser native video controls for smooth timeline scrubbing, volume, and full-screen view; enlarged party penguin GIFs on Presented By screen (desktop size ~160/148, mobile 100/92).
- Cloud Kitchen Dedicated Dish Animation Mapping: Fully integrated bespoke animations for all 6 Cloud Kitchen recipes: Dish 1 Royal Afghani Chicken -> `pengu-cook-6`, Dish 2 Dum Biryani -> `pengu-cook-2`, Dish 3 Chocolate Cake -> `pengu-cook-3`, Dish 4 Chai Combo -> `pengu-tea.gif`, Dish 5 Never-Throw Thali -> `pengu-thali.gif`, Dish 6 Jagatmata Feast -> `pengu-feast.gif`; modal navigation tray and arrow keys cycle interactively across all 6 dishes; removed the tap-to-cycle action and prompt from the modal chef, locking each dish permanently to its dedicated animation; increased chef size from `150px` to `195px` to match the visual height of the receipt bill.
- Cloud Kitchen Recipe Modal Navigation & Tea Pengu: Added previous/next navigation buttons, recipe dots indicator tray, and keyboard arrow key navigation to `CloudKitchen.tsx` modal (matching Family Photos); upgraded header with `Recipe 0X of 06`; wired `pengu-tea.gif` into "Chai With A Chair Combo" and Work Timeline "The Chai Break Protocol" (`work-2`).
- Cloud Kitchen Policy Bar Update: Replaced confusing "HEAD CHEF / OWNER: Physically Cannot Say No" with "EXTRA SERVINGS: Unlimited Seconds Guaranteed" in `KITCHEN_COPY` (`sections.ts`) and `CloudKitchen.tsx`, creating a cohesive trio of restaurant policies (DELIVERY: 100% Free Forever, PAYMENT: Strictly Not Accepted, EXTRA SERVINGS: Unlimited Seconds Guaranteed).
- Cloud Kitchen Modal Header Cleanup & Sponsor Board Breathing Room: Removed the redundant `Recipe 0X of 06 · Tag` pill from `CloudKitchen.tsx` modal; centered the recipe title with calibrated font size (`clamp(1.2rem, 2.1vw, 1.65rem)`) and absolute close button with 36px safe padding; added `padding-top: clamp(16px, 2.8vh, 32px)` to `.sponsors-scatter-grid` matching the Cloud Kitchen stage, giving generous airy breathing room between the "Presented By" header and the sponsor cards on both desktop and mobile.
- Sponsor Card Kitchen Styling & Angul Coalfield Update: Aligned sponsor card layout directly with the Cloud Kitchen recipe cards (top header row with `SPONSOR #XX` gold tag and `OFFICIAL` emerald pill badge, full-width Fredoka white title, Caveat handwritten member name in pink, `var(--radius-lg)` 20px radius, `var(--shadow-card)` and subtle hover glow); updated Sponsor #01 title from "Talcher Coalfield Syndicate" to "Angul Coalfield Syndicate" in `sponsors.ts` and `LaunchFinale.tsx`.
- Cloud Kitchen Modal Left-Aligned Title: Resized recipe modal title to a compact, well-proportioned scale (`clamp(1.15rem, 1.8vw, 1.45rem)`) and aligned it left, paired with a circular frosted close button on the right in `.kitchen-modal-header`.
- Say NO Custom GIFs & Active Tag State Fix: Wired `pengu-plan.gif` into Test 03 ("Trip Planning Jagatmata") and `pengu-sofa.gif` into Test 05 ("Comfy Chair/Sofa Defense") with updated speech bubbles in `SayNo.tsx` and `assets.ts`; added `.tray-chip.current` glow styling (solid gold border, scale 1.06, white text, and golden box shadow) alongside green checkmark `✓` badges on passed `.found` chips, ensuring the active bottom tag cleanly matches the current test on screen.
- Say NO Test 04 Help GIF Integration: Wired `pengu-help.gif` into Test 04 ("Office Bestie 7:00 AM shift cover request") in `assets.ts`, `Pengu.tsx` (`help` variant), and `SayNo.tsx`.
- Terms Modal Navigation with Dots Tray: Replaced text buttons and counter in `Terms.tsx` modal with interactive `.family-modal-nav` navigation featuring `‹ Previous` / `Next ›` pills, 8 interactive indicator dots for all 8 clauses, keyboard arrow key navigation (`ArrowLeft` / `ArrowRight`), and confetti feedback.
- Assets GIF Directory Restructure: Created dedicated `public/images/gifs/` folder and moved all 48 actively used GIFs into it while leaving the 13 unused ones in `public/images/`; updated `src/data/assets.ts` with clean paths.
- Doraemon Bag Safety Pin Removal: Removed Safety Pin from `bagItems.ts` (down to 6 items: Pocket Chair, Hand Cream, Hajmola, Jhandu Balm, Perfume, Dog Biscuit) and updated Doraemon Pocket Award copy in `awards.ts`.
- Weird Expressions 3-Volume Consolidation & Bounded Modal Navigation: Merged polaroid pages into 3 volumes titled "Weird Expressions, Vol. 1", "Weird Expressions, Vol. 2", and "Weird Expressions, Vol. 3" (merging old Office Era and Trips pages into Vol. 3); upgraded polaroid modal viewer with header pill, close button, Previous/Next buttons, interactive indicator dots, and keyboard navigation (ArrowLeft/ArrowRight/Escape) bounded strictly within the active volume so modal cycling never crosses into another page.
- Weird Expressions 6-Photo Balance: Calibrated each of the 3 volumes to 6 photos each (18 photos total) in a spacious 3x2 grid (`repeat(3, minmax(0, 1fr))`); modal viewer dynamically displays 6 indicator dots and bounded Previous/Next cycling strictly across the 6 photos of that volume.
- Weird Expressions 18 Photos Integration: Wired all 18 real user photos from `public/images/weird/` (`1.jpeg` through `18.jpeg`) across the 3 volumes in `polaroids.ts` with customized expression labels (The HyScale Stare, Street Market Side-Eye, Tubelight Rebooting..., Dramatic CEO Pout, Restaurant Gossip Radar, Cafeteria Food Focus, Undercover Dadi Mode, Turtle Hippo in Plaid, Wait, Who Are You?, 3 AM Train Berth Panic, Masterchef Threat Mode, Critique Bite Face, Rainy Chai Devotion, Why Did I Agree To Hike?, Holi Battle Survivor, Office Inspector Auntie, Gyaan Distribution Mode, Chai Tapri Debates); added centered object-position styling in `global.css` for 1:1 square framing.
- Weird Expressions Captions & Modal Subtitles: Reviewed all 18 photos and crafted bespoke titles and witty punchline subcaptions for each image (e.g. Chai Detective, Tubelight Rebooting..., Undercover Dadi Mode, Turtle Hippo in Plaid, 3 AM Berth Panic, Spatula Commander, Holi Battle Survivor, Office Inspector Auntie, Rainy Chai Devotion); wired subcaptions into the modal viewer with italic quotes, added card title tooltips on hover, and constrained modal photo height to 50vh.
- Egg Hatching Cutout Integration: Wired `public/images/arpita.png` transparent cutout into `PenguinBirth.tsx` (`ASSETS.babyArpita`), replacing the placeholder photo with Arpita's smiling cutout emerging directly from the bottom egg shell.
- Doraemon Bag Artifacts Normalization: Wired all 6 transparent PNGs from `public/images/bag/` (`pocket-chair.png`, `hand-cream.png`, `hajmola.png`, `zandu-balm.png`, `perfume.png`, `biscuit.png`) into `bagItems.ts`; normalized content bounds to uniform 520px in 600x600 transparent canvases so all items appear at the exact same viewing size; updated `.artifact-photo` with glowing radial backlight, contain fitting, and drop-shadows.
- Family Album 12-Photo Expansion (6+6): Added `tripling.jpeg` (Amit, Ankita, Arpita with TVF Tripling caption) and expanded Set 1 to 6 photos (`arpita-1` to `arpita-6`, swapping 4 and 6 so 4 is the braids selfie and 6 is Arpita & Zoxo); balanced Set 2 to 6 photos; upgraded both sets to a clean, spacious 3x2 grid (`repeat(3, minmax(0, 340px))`) on desktop and 2-column grid on mobile.
- Friends Chapter 2 Stepped Album with 23 Photos & Hero Finale: Re-architected Chapter 2 ("Then We Met You") into an interactive 7-page memory album wired with all 23 real photos from `public/images/friends/` across 7 acts: Act 1 The 1st Trip (5 photos of the genesis trip, lawn Uno, beach squad, volleyball, sunset jump + animated `penguin-travel.gif` mascot badge), Act 2 Holi Colors (2 photos with "Good luck finding who's who" caption), Act 3 Eating Together (4 photos: soup bowls, chaat & dahi puri, fruit shell ice creams, and the legendary gupchup tower cake), Act 4 Dinners & Lunches (4 photos: authentic Odisha pakhala feast on the floor, Charlie's midnight helmet run, Friends Day banquet, and night squad), Act 5 Celebrating Together (4 photos: desk celebrations, flowers, cake cutting, and milestones), Act 6 Outings & Trips (3 photos: seashell garlands, pool day, farewell cake), and Act 7 Hero Finale featuring `outing-3.jpeg` as a standalone grand hero card with gold border and "We'll cherish these moments forever" tribute. Backed by full-screen modal viewer with 23 indicator dots, Previous/Next navigation, isolated keyboard shortcuts (`ArrowLeft`/`ArrowRight`/`Escape`), and confetti bursts.
- Friends Special Story Captions & Portrait Photo Sizing Optimization: Updated `gupchup-1.jpeg` title to "The Gupchup Birthday 'Cake'" with caption celebrating her holding her favorite gupchup as the birthday cake replacement; updated `last-day.jpeg` title to "Release Letter Day" noting Astha was missing that day; updated `farewell.jpeg` title to "The Farewell Cake" holding the farewell cake given to her; resolved portrait photo cropping by adding `.friends-card.portrait` styling (`object-fit: contain` with soft dark glass backdrop) so neither heads nor hands holding the cakes/gupchup are clipped on cards; upgraded modal photo view to `clamp(280px, 50vh, 480px)` with `width: min(94vw, 680px)` and unconstrained aspect ratio rendering so all landscape and portrait photos display large, sharp, and fully uncropped.
