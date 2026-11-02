# Arpita's Launch Pad: Project Context & Blueprint

A PPT-style interactive website for Arpita's bachelorette party. Designed to run offline on a laptop connected to a TV, and fully responsive on mobile devices.

## 1. High-Level Concept

Arpita is our Penguin and Hippo. The website opens with Hoppi the Hippo welcoming guests to "Arpita's Launch Pad". A lonely penguin waddles away from the colony, transforming into baby Arpita. A penguin riding a rocket then travels across a winding path tracing her life and work friendships, honoring her trademark Odia catchphrase: **"Rocket udeidebi"** ("I will fly the rocket").

The journey culminates in a grand finale at a launch pad where groom penguin (Pranjal) awaits Arpita. He hops onto her rocket, and they blast off together as friends' and family's wishes fall like shooting stars.

**Tone:** Full chaos roasts among work friends, siblings, and cousins.

## 2. Characters & Motifs

- **Hippo ("Hoppi"):** The host. Welcomes guests in Section 1 and thanks everyone at the end of Section 13.
- **Penguin (Arpita):** Arpita's alter ego. Styled in soft lavender (`#a78bfa`) matching the Tenor Pengu aesthetic, with expressive kawaii highlights, blush cheeks, and rounded proportions.
  - *PNG Asset Override:* Accepts a real transparent PNG at `public/images/penguin.png`. If present, it replaces the SVG while keeping all bounce and spin animations intact. If missing, it falls back cleanly to the enhanced SVG.
  - *Color Customization:* Centrally defined in `src/styles/variables.css` via `--color-penguin-body` and `--color-penguin-body-dark`. Can also be overridden via props on `PenguinArt` and `Penguin` (`bodyColor`, `flipperColor`).
- **Penguin on Rocket:** The signature motif of Arpita riding her rocket across all pages and the bottom progress slider (`PenguinRocketArt`).
  - *PNG Asset Override:* Accepts a transparent PNG at `public/images/penguin-rocket.png`. If present, it renders automatically on the progress bar, timelines, and finale while maintaining animated floating, tilt, and trail effects.
- **Pranjal Penguin:** The groom penguin, appearing exclusively in the finale at the launch pad. Styled in classic groom navy (`--color-penguin-groom-body: #1e293b`) with a red bow tie.
- **Rocket:** Moves along a winding SVG trajectory across sections. Catchphrase: *"Rocket udeidebi!"*

## 3. The 13 Sections Breakdown

### Section 1: Hippo Welcome
- Headline: *"Welcome to Arpita's Launch Pad"*
- Big prominent *"Tap to start"* button.
- User click initializes audio context (browsers require user interaction for audio playback).
- Hoppi bounces in with squash and stretch, speech bubble reveals welcome text, and page transitions to Section 2.

### Section 2: Lonely Penguin & Baby Arpita
- Wide scene featuring a penguin colony in the background.
- One penguin separates and waddles to the right (bobbing rotation).
- Penguin stops, camera zooms in, and an egg wobbles and cracks into 3 stages.
- White flash covers the screen; baby Arpita photo placeholder scales in with a bounce accompanied by *"Arpita is born"*.

### Section 3: Family Timeline ("Before us")
- Winding S-curve SVG path. Rocket glides along the curve using GSAP MotionPath with auto-rotation.
- Stops: Birth, childhood, school, college, and ages 20 to 25.
- At each stop: rocket pauses, photo card tilts in, year counter ticks, and roast caption types in.
- Milestone effect: Screen shake (4px) with *"Rocket udeidebi!"* burst. Soft pastel background palette.

### Section 4: "Then we met" Chapter (Work Friends)
- Faster rocket speed (~1.6x) with dynamic speed lines and warm sunset orange/pink palette.
- Banner slide-in: *"Then we met"*.
- 5 to 6 stops highlighting work milestones, inside jokes, and photos with roasts.

### Section 5: Polaroid Pages (2 to 3 pages)
- Polaroids drop from above with randomized tilts (-12° to 12°), overlapping casually.
- Categorized by themes: weird expressions, office era, trips & parties.
- Hover/touch elevates polaroids; clicking expands image centered with dimmed backdrop (Framer Motion layout transition).
- Next action triggers cards blowing away like a scattered deck.

### Section 6: Awards
- Rapid-fire trophy presentations (approx. 5 seconds each, skippable).
- Elastic scale trophy entrance, spinning framed photo, and roast title with typewriter effect.
- Sparkle confetti burst per award.

### Section 7: Arpita's Bag Reveal (Doraemon Pocket)
- Large blue tote bag featuring Doraemon's signature 4D pocket.
- Idle breathing animation.
- Each tap shakes the pocket and ejects a randomized item that hovers before dropping into a bottom collection tray.
- Counter tracks items collected; final item inverts bag with a comical shake.

### Section 8: Tubelight Moment
- Big wall-mounted tubelight lamp in off state alongside a joke setup.
- Step 1: *"Everyone laughs at the joke."*
- Step 2: *"Arpita smiles politely."*
- Step 3: Lamp flickers erratically with buzz audio (opacity stepping pattern).
- Step 4: Speech bubble: *"Wait, what was the joke?"*
- Step 5: Full luminosity flash: *"Arpita has now understood. Buffering complete."*

### Section 9: Bride's Terms and Conditions
- Scrolling comedic legal contract card with sequential rule fade-ins.
- Bottom actions: *"I Agree"* checkbox and an elusive *"Disagree"* button.
- *"Disagree"* button jumps away to random coordinates on hover/touch attempt. After ~5 failed attempts, it transforms into *"Agree"* with a wobble.
- Ticking agreement slams a giant red *"ACCEPTED"* rubber stamp with screen thud and confetti.

### Section 10: Impossible to Say "No"
- Request prompt cards presented sequentially.
- *"No"* button continuously shrinks and dodges pointer/touch; *"Yes"* button expands dynamically.
- Tapping *"Yes"* sends card flying with an affirmative checkmark.
- Completion stamp: *"Verdict: Cannot say no. Case closed."*

### Section 11: Cloud Kitchen Menu
- Parchment menu board unrolling from top titled *"Penguin and Hippo Cloud Kitchen"*.
- All items priced *"Free, because heart"*.
- Tapping an item animates a printed receipt slip tearing out from the bottom slot.
- Animated penguin chef in hat tossing a frying pan on the side.
- Footer note: *"Delivery: free. Payment: not accepted. Owner: cannot say no."*

### Section 12: Predictions
- Glowing crystal ball surrounded by swirling particle mist.
- Tapping accelerates mist vortex and flips up a fortune card featuring a friend's prediction and signature.
- Cards stack neatly to the side.

### Section 13: Recorded Wishes & Grand Finale
- **Wishes Reel:** Video player with TV frame showing friends' 10-20s video clips with author badge, auto-progressing, with skip option.
- **Launch Pad Scene:** Night sky with twinkling stars; Pranjal Penguin waiting on launch pad holding a tiny flag.
- **Countdown:** 3, 2, 1 numbers slam in with subtle screen tremors.
- **Arrival & Boarding:** Arpita arrives on rocket from left, hovers; Pranjal jumps in an arc onto the rocket with heart pop.
- **Blast Off:** Rocket launches upward with exhaust plumes; camera pans up.
- **Star Wishes:** Friends' text wishes float downwards as glowing stars across the night sky.
- **Outro:** Hoppi the Hippo appears at bottom with a closing speech bubble thanking everyone.

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
- **Animation:** GSAP (Core + MotionPathPlugin) for timeline rocket curve; Framer Motion for UI reactions, card flips, and section transitions.
- **Styling:** CSS variables in plain CSS; no bulky CSS utility dependencies.
- **Offline Delivery:** Fully standalone build (`base: './'`). No external web fonts or CDN calls at runtime.
- **Controls:**
  - Keyboard: Arrow keys (Left/Right), Spacebar.
  - Interactive: Click / Tap and swipe gestures for touch devices.
  - Sub-steps within sections consume arrow keys first before advancing section.
- **Fault-Tolerant Media:** `Placeholder` component rendered whenever `src` is missing or fails to load.
