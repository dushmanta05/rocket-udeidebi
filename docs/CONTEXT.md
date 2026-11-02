# Arpita's Launch Pad: Project Context & Blueprint

A PPT-style interactive website for Arpita's bachelorette party. Runs offline on a laptop connected to a TV, and is responsive on phones.

## 1. High-Level Concept

Arpita is our Penguin and our Hippo. The site opens with the Hippo welcoming guests to "Arpita's Launch Pad". A lonely penguin leaves the colony, finds an egg, and baby Arpita hatches out of it. Arpita, as Pengu riding a rocket, then flies a winding path through her family years and her work friendships, honouring her Odia catchphrase **"Rocket udeidebi"** ("I will fly the rocket").

After the roasts and the crew's video messages, the finale: Pranjal waits at the launch pad, Arpita flies in on her rocket and picks him up, they blast off together, and a thank-you note closes the night.

**Tone:** full chaos roasts among work friends, siblings and cousins.

**Look:** one dark theme, a night sky with twinkling stars, drifting nebulae and shooting stars behind every screen. Glass cards, warm accents (pink, gold, sky blue). Fonts: **Fredoka** for headings (rounded, playful), **Nunito** for body text, **Caveat** for every handwritten line (roasts, names, captions). Fonts are bundled with the build.

## 2. Characters, Images & Motifs

Every image has a drawn fallback, so a missing file never breaks a screen. Paths are in `src/data/assets.ts`.

- **Hippo (`public/images/hippo.png`):** the host, and Arpita's own nickname. Welcomes guests on the first screen and thanks everyone on the last. Tapping it gives a quip and confetti.
- **Arpita photo (`public/images/arpita.jpeg`):** the stand-in for every photo slot with no photo of its own (`Placeholder` component). Any item in `src/data/` with a `src` uses that instead.
- **Pengu on the rocket (`public/images/pengu-on-rocket.png`):** Arpita riding her rocket. Used on the timelines, the bottom progress bar, the welcome fly-by and the finale.
- **Pengu (`public/images/pengu.png`, optional):** the original Pengu meme penguin in the egg-hatching scene. Falls back to a drawn blue Pengu-style penguin.
- **Pengu chef (`public/images/pengu-chef.gif`, optional):** a Pengu sticker GIF for the Cloud Kitchen. Falls back to the drawn penguin in a chef hat.
- **Pranjal (`public/images/pranjal.png`, optional):** the groom at the launch pad. Falls back to a drawn navy penguin with a red bow tie.
- **Colours** for the drawn penguins: `--pengu-body`, `--pengu-body-dark`, `--pengu-groom` in `src/styles/variables.css`.

## 3. The 14 Sections

Section titles, hints and short names live in `src/data/sections.ts`.

1. **Welcome:** the Hippo with a speech bubble, the title ("Arpita's" in Caveat, "Launch Pad" in Fredoka), the catchphrase, and **Begin the Journey**. Pengu's rocket flies across the whole screen in the background.
2. **Hatching:** a muted penguin colony on an ice floe; Pengu waddles away ("Wait, where is everyone going?"). Next, Pengu stands beside a wobbling egg. Next, the egg shakes harder and cracks in three stages. Last, a white flash, the top shell flies off, baby Arpita's photo rises out of the bottom shell, and confetti: "Arpita is Born!"
3. **Family & Early Years:** Pengu's rocket flies along a winding path, nose following the curve, through the family stops (`timeline.ts`). The path behind lights up; each stop shows a photo card beside its year, title and handwritten roast. Photo and text never overlap: a two-column card on desktop, stacked on phones.
4. **Then We Met:** the same, for the work stops, on a faster, wavier path in gold.
5. **Polaroids:** four sets (two of Weird Expressions, the Office Era, Trips & Parties), six or four polaroids each. They drop in, blow away on the next set, and open large on tap.
6. **Awards:** one award at a time. A gold-framed photo (no trophy art), the award number, title and roast written on, and confetti from both sides each time.
7. **Doraemon Pocket:** tap the bag to pull out the next item. A card beside the bag shows the item's photo, name and roast (no emoji). A tray of chips below fills in as items are found; the last item flips the bag over.
8. **Tubelight Moment:** a tubelight above Arpita's photo, and a timestamped log (10:00 AM joke, 10:45 AM laugh). The light flickers while she buffers, a comprehension meter fills, and at the end the whole room lights up.
9. **Terms & Conditions:** a contract card with ten clauses, each a number, a short title and one line. **I Agree** signs it in her handwriting and slams an ACCEPTED stamp; **Disagree** runs away and gives up after five tries.
10. **Say NO:** the title's NO is huge. Each request card has a big **No** that dodges every attempt and a small **Yes** that grows a little each time No escapes. Yes sends the card flying; the end is a "Cannot say no" verdict stamp.
11. **Cloud Kitchen:** Pengu chef, a chalkboard menu that fits on screen without scrolling, and a receipt that prints from a slot when a dish is tapped.
12. **Predictions:** a floating crystal ball; each tap flips in the next fortune card, and earlier ones stack to the side with their authors.
13. **Messages from the Crew:** one vertical (9:16) video per person in a phone frame, with their name, relation and one-line message beside it and an "Up next" list. It moves on when a video ends. The list comes from `public/videos/wishes/wishes.json` (see `README.md`), so the count follows the file.
14. **Launch:** Pranjal waits on the pad ("Where is my rocket?"). Arpita flies in on her rocket ("Hop on!"). Pranjal hops onto the rocket with a heart. Countdown 3, 2, 1, then the rocket turns upward and blasts off with a screen shake: "ROCKET UDEIDEBI!". Last, the thank-you screen: the Hippo, a thank-you note, and the crew's names falling like stars.

## 4. Roast Material & Personality Traits

- **Jagatmata:** Treats everyone well, considers everyone her own, boundless maternal instinct toward humans and animals.
- **Tubelight:** Gets jokes 5 minutes late, followed by asking for an in-depth breakdown.
- **Chair Seeker:** Searches for a chair even on a 2-minute roadside chai break.
- **Unstoppable Dancer:** Can groove rhythmically to generator rumbles, traffic horns, and ambient noise.
- **Penguin Waddle:** Distinctive penguin-like walking gait.
- **Conflict Avoider:** Will never argue, even when undeniably right.
- **Cannot Say No:** Obligatory yes to every request from anyone.
- **Munch Lover & Food Preserver:** Never throws away food, always salvaging leftovers.
- **High-Voltage Laugh:** Laughs with shaking intensity like an electric current.
- **Doraemon Bag:** An endless pocket containing medicines, extra food, pins, cords, and oddities.
- **Photo Phantom:** Zero standard glamorous photos; endless weird candid faces.
- **Free Cloud Kitchen:** Dreams of opening a food spot but will end up giving everything away for free.
- **Srikant Mimicry:** Expert impersonation of her crush.
- **Catchphrase:** *"Rocket udeidebi!"*

## 5. Draft Content Data

### Awards
1. **Jagatmata Award:** *"Treats the whole office as her children. Even the ones who don't deserve it."*
2. **Tubelight Award:** *"The joke is over. She will now ask for an explanation."*
3. **Chair Seeker Award:** *"Chai break is for chai. She is for finding a chair."*
4. **Doraemon Pocket Award:** *"Needs a pin, a charger, a snack, or a medicine? Ask her bag."*
5. **Current Laugh Award:** *"Laughs like a live wire. Keep a safe distance."*
6. **Penguin Walk Award:** *"Walks like she is heading to a colony only she knows about."*

### Terms & Conditions
1. The bride must never say no to anyone, except to the Disagree button.
2. The bride will not argue, even when she is right. Friends will argue on her behalf.
3. The bride must keep a chair-finding plan for every trip and chai break.
4. The bride's bag must be available for inspection at all times, because Doraemon wants it back.
5. The bride will not throw away food, even when full. Leftovers will be shared with friends.
6. The bride will explain her laugh to the neighbours before they call an electrician.
7. The bride will keep her Srikant mimicry available for performances at every family function.
8. The Penguin and Hippo titles are permanent and cannot be returned.
9. The bride must keep calling her friends after marriage, not only on festivals.
10. By clicking "I Agree", the bride confirms she has understood this agreement. *(Tubelight clause: explanation will be provided later.)*

### Arpita's Bag Items
1. **Phone Charger:** *"Not hers. Belongs to someone who gave up asking."*
2. **Snack Stash:** *"Emergency rations for a war that never comes."*
3. **Pocket Chair:** *"For chai breaks. Found within 3 seconds."*
4. **Medicine Strip:** *"Headache, fever, heartbreak. She has one for each."*
5. **Hair Clip:** *"Yours too, if you ask nicely. Or don't ask."*
6. **Tissue Packet:** *"For your tears and her laughing tears."*
7. **Leftover Biscuit:** *"Never thrown away, even when she is full."*
8. **Tiny Toy:** *"Future mother, always prepared."*
9. **Dog Biscuit:** *"For any animal she meets on the way."*
10. **Safety Pin:** *"Saved three weddings and one office presentation."*

### Impossible Requests
1. *"Can you take my shift tomorrow?"*
2. *"Can you lend me 500 rupees until Friday?"*
3. *"Can you taste this thing I cooked? Be honest."*
4. *"Can you hold my bag for 5 minutes?" (Shows 3 hours later)*
5. *"Can you adopt this puppy?"*

### Cloud Kitchen Menu Items
1. **Never-Throw Thali:** A full plate plus whatever is left on yours.
2. **Munch Mix:** Whatever is currently in the Doraemon pocket.
3. **Chai with a Chair Combo:** Tea, and the best seat in the house.
4. **[Friend name]'s Special Maggi:** One per friend, made from their favourite excuse.
5. **Mother's Special:** A plate for humans and animals alike.

## 6. Technical Stack & Rules

- **Framework:** React 19 + TypeScript on Vite.
- **Animation:** Framer Motion for everything; CSS keyframes for stars, flicker and floating. All motion respects `prefers-reduced-motion`.
- **Styling:** plain CSS with variables (`src/styles/variables.css`, `global.css`); no utility frameworks.
- **Offline:** standalone build (`base: './'`), fonts bundled through `@fontsource`. No CDN calls at runtime. The only runtime request is the local `videos/wishes/wishes.json`, so serve the build with `pnpm preview`.
- **Sound:** none. There is no background music or sound effects; the crew videos play their own sound.
- **Controls:** arrow keys, Space, Enter, `F` for fullscreen, swipe on touch screens, clickable progress dots. Sub-steps inside a section consume the arrow keys before the section changes.
- **Media fallbacks:** `Placeholder` (photos and videos) and `SmartImage` (characters) fall back cleanly when a file is missing or fails to load.
- **Content:** all copy lives in `src/data/`; components do not hardcode text.
