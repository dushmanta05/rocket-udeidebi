export interface SectionCopy {
  short: string
  kicker: string
  title: string
  subtitle: string
  hint: string
}

export const SECTIONS: SectionCopy[] = [
  {
    short: 'Welcome',
    kicker: 'The Bachelorette Special',
    title: "Arpita's Launch Pad",
    subtitle: 'A celebration, a roast and a rocket launch for our favourite Jagatmata.',
    hint: 'Tap the button to begin'
  },
  {
    short: 'Hatching',
    kicker: 'Chapter 0',
    title: 'Somewhere in Antarctica',
    subtitle: 'One little penguin had other plans.',
    hint: 'Tap or press Space'
  },
  {
    short: 'Family',
    kicker: 'Chapter 1',
    title: 'Family & Early Years',
    subtitle: 'Before us, there was already a legend in the making.',
    hint: 'Tap or press the right arrow to fly to the next stop'
  },
  {
    short: 'Work',
    kicker: 'Chapter 2',
    title: 'Then We Met',
    subtitle: 'The rocket found its crew, and the chai breaks got longer.',
    hint: 'Tap to boost to the next stop'
  },
  {
    short: 'Polaroids',
    kicker: 'The Evidence Wall',
    title: 'Caught on Camera',
    subtitle: 'Tap any photo to inspect the evidence.',
    hint: 'Arrow keys switch between sets'
  },
  {
    short: 'Awards',
    kicker: 'The Hall of Fame',
    title: 'And the Award Goes To',
    subtitle: 'Recognising a lifetime of unmatched achievements.',
    hint: 'Tap for the next award'
  },
  {
    short: 'Bag',
    kicker: 'Inspection Protocol',
    title: "Arpita's Doraemon Pocket",
    subtitle: 'Tap the bag to pull out the next survival artifact.',
    hint: 'Tap the bag'
  },
  {
    short: 'Tubelight',
    kicker: 'Live Experiment',
    title: 'The Tubelight Moment',
    subtitle: 'Tracking how long a punchline takes to reach Arpita.',
    hint: 'Tap to advance the buffering'
  },
  {
    short: 'T&C',
    kicker: 'Legally Binding',
    title: "The Bride's Terms & Conditions",
    subtitle: 'Drafted by friends, siblings and cousins. Non-negotiable.',
    hint: 'Read carefully, then try disagreeing'
  },
  {
    short: 'Say No',
    kicker: 'Mission Impossible',
    title: 'Say',
    subtitle: 'A scientific test: can Arpita physically decline a request?',
    hint: 'Try pressing No. We dare you.'
  },
  {
    short: 'Kitchen',
    kicker: 'Now Open, Forever Free',
    title: 'Penguin & Hippo Cloud Kitchen',
    subtitle: 'Tap a dish to place your order.',
    hint: 'Tap any dish'
  },
  {
    short: 'Predictions',
    kicker: 'The Oracle Speaks',
    title: 'Married Life: Predicted',
    subtitle: 'Tap the crystal ball to see what the future holds.',
    hint: 'Tap the crystal ball'
  },
  {
    short: 'Crew',
    kicker: 'Incoming Transmissions',
    title: 'Messages from the Crew',
    subtitle: 'Recorded before ignition, with love and some roasting.',
    hint: 'Tap or press the right arrow for the next message'
  },
  {
    short: 'Launch',
    kicker: 'Final Countdown',
    title: 'The Launch Pad',
    subtitle: '',
    hint: 'Tap to continue the launch'
  }
]

export const HIPPO_QUIPS = [
  'Rocket udeidebi!',
  'Arpita is looking for a chair again.',
  'Welcome to the Launch Pad!',
  'Did someone say chai break?',
  'Certified Jagatmata.'
]

export const WELCOME_COPY = {
  greeting: 'Hippo welcomes you!',
  catchphrase: 'Rocket udeidebi!',
  button: 'Begin the Journey'
}

export const BIRTH_COPY = {
  journey: [
    { kicker: 'Somewhere in Antarctica', line: 'One penguin left the colony.', sub: 'Alone.' },
    { kicker: 'Day 1, day 100, day 1000', line: 'No map. No plan.', sub: 'Just the mountains, and a feeling.' }
  ],
  rebirthLine: 'Somewhere past the mountains, she was reborn...',
  eggTitles: ['Something is moving...', 'Crack...', 'CRACK CRACK!'],
  bornTitle: 'Reborn as a human!',
  bornText: 'And just like that, the penguin became Arpita: a Jagatmata, a Tubelight and still a Penguin at heart.',
  bornTag: 'Catchphrase unlocked: "Rocket udeidebi!"',
  babyPhotoLabel: 'Baby Arpita photo'
}

export const TUBELIGHT_COPY = {
  meterLabel: 'Joke comprehension',
  done: 'Buffering complete'
}

export const TERMS_COPY = {
  seal: 'A+P',
  heading: 'Official Covenant',
  headingSub: 'clauses, effective immediately',
  agree: 'I Agree',
  disagree: 'Disagree',
  surrender: 'Fine, I Agree',
  signatureLabel: 'Signed by the bride',
  signature: 'Arpita',
  stamp: 'ACCEPTED',
  stampSub: 'No disagreement allowed. Case closed.'
}

export const SAYNO_COPY = {
  yes: 'Yes',
  no: 'No',
  verdict: 'VERDICT: CANNOT SAY NO',
  verdictSub: 'All requests accepted. Jagatmata status: permanent.'
}

export const KITCHEN_COPY = {
  chefSays: 'Food is free, hugs are unlimited!',
  footer: 'Delivery: free. Payment: not accepted. Owner: cannot say no.',
  receiptTitle: 'Order Received',
  receiptTotal: 'Total: Rs 0.00',
  receiptNote: 'Paid in full by a generous heart',
  receiptEmpty: 'Your order will print here',
  receiptClose: 'Collect slip'
}

export const PREDICTIONS_COPY = {
  foreseenBy: 'Foreseen by',
  revealed: 'Revealed'
}

export const CREW_COPY = {
  noVideo: 'Video coming soon',
  upNext: 'Up next'
}

export const FINALE_COPY = {
  padTitle: 'Pranjal is waiting at the launch pad',
  pranjalSays: 'Where is my rocket?',
  arrivalTitle: 'Here comes Arpita!',
  arpitaSays: 'Hop on!',
  boardTitle: 'Boarding complete',
  countdown: ['3', '2', '1'],
  blastOff: 'ROCKET UDEIDEBI!',
  thankYouTitle: 'Thank You',
  thankYouNote: [
    'To everyone who laughed, roasted, recorded, planned and showed up tonight: thank you.',
    'Arpita and Pranjal, may the chai always be hot, the chairs always be free, and the laughter always be electric.'
  ],
  hippoSays: 'The rocket has launched. Thank you, everyone!',
  signOff: 'With love, the whole crew'
}
