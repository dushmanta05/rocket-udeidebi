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
    kicker: "Arpita's Bachelorette",
    title: 'Welcome, Hippo!',
    subtitle: 'Tonight is all about you: your crew, your story, a lot of roasting and one rocket launch.',
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
    subtitle: 'Before we met you, you were already a legend in the making.',
    hint: 'Tap or press the right arrow to fly to the next stop'
  },
  {
    short: 'Work',
    kicker: 'Chapter 2',
    title: 'Then We Met You',
    subtitle: 'Your rocket found its crew, and the chai breaks got longer.',
    hint: 'Tap to boost to the next stop'
  },
  {
    short: 'Polaroids',
    kicker: 'The Evidence Wall',
    title: 'Caught on Camera',
    subtitle: 'Yes, we kept every one of these. Tap a photo to zoom in.',
    hint: 'Arrow keys switch between sets'
  },
  {
    short: 'Awards',
    kicker: 'The Hall of Fame',
    title: 'And the Award Goes To',
    subtitle: 'For achievements only you could pull off.',
    hint: 'Tap for the next award'
  },
  {
    short: 'Bag',
    kicker: 'Inspection Protocol',
    title: 'Your Doraemon Pocket',
    subtitle: "Tap your bag. Let's see what you are carrying today.",
    hint: 'Tap the bag'
  },
  {
    short: 'Tubelight',
    kicker: 'Live Experiment',
    title: 'The Tubelight Moment',
    subtitle: 'We timed how long a punchline takes to reach you.',
    hint: 'Tap to advance the buffering'
  },
  {
    short: 'T&C',
    kicker: 'Legally Binding',
    title: 'Your Terms & Conditions',
    subtitle: 'Drafted by your friends, siblings and cousins. Non-negotiable.',
    hint: 'Read carefully, Hippo. Then try disagreeing.'
  },
  {
    short: 'Say No',
    kicker: 'Mission Impossible',
    title: 'Say',
    subtitle: 'We tested it scientifically: can you actually say no?',
    hint: 'Try pressing No. We dare you.'
  },
  {
    short: 'Kitchen',
    kicker: 'Now Open, Forever Free',
    title: 'Penguin & Hippo Cloud Kitchen',
    subtitle: 'The restaurant you will open one day. Tap a dish to order.',
    hint: 'Tap any dish'
  },
  {
    short: 'Predictions',
    kicker: 'The Oracle Speaks',
    title: 'Your Married Life: Predicted',
    subtitle: 'Tap the crystal ball to see what the future holds.',
    hint: 'Tap the crystal ball'
  },
  {
    short: 'Crew',
    kicker: 'Incoming Transmissions',
    title: 'Messages for You',
    subtitle: 'Recorded by your crew before launch, with love and some roasting.',
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
  greeting: 'Who, me?',
  titleScript: 'Welcome,',
  titleMain: 'Hippo!',
  catchphrase: 'Rocket udeidebi!',
  button: "Let's Begin"
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
  requestLabel: 'Request',
  taunts: ['Nope, No ran away.', 'No is scared of you.', 'No has left the chat.', 'Even No knows you will say yes.', 'Just press Yes, Hippo.'],
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
  blastOff: 'Next stop: Happily Ever After!',
  arpitaName: 'Arpita',
  pranjalName: 'Pranjal',
  thankYouTitle: 'Thank You, Hippo',
  thankYouNote: [
    'For every chai break, every chair you found us, every snack from that bag and every laugh at full voltage: thank you for being you.',
    'Arpita and Pranjal, may the chai always be hot, the chairs always be free, and the laughter always be electric.'
  ],
  hippoSays: 'Rocket udeidebi!',
  signOff: 'Love, your whole crew'
}
