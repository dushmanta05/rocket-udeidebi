export interface PredictionItem {
  id: string
  text: string
  author?: string
  tag?: string
}

export interface PredictionSet {
  id: string
  pill: string
  title: string
  kicker: string
  subtitle: string
  items: PredictionItem[]
}

export const PREDICTION_SETS: PredictionSet[] = [
  {
    id: 'crew',
    pill: "The Crew",
    title: "The Crew's Prophecies",
    kicker: 'Future Visions · Part 1',
    subtitle: 'What your closest work besties foresee for your married life.',
    items: [
      {
        id: 'pred-astha',
        author: 'Astha Niharika',
        text: 'She’ll be the Anjali to Pranjal’s Rahul from Kabhi Khushi Kabhie Gham, and her mornings will look straight out of the London scenes in the movie! ❤️'
      },
      {
        id: 'pred-subhasree',
        author: 'Subhasree Lenka',
        text: 'In the next 5 years, I see you in your dream job, building a happy family with Pranjal and a cute baby! And your in-laws will be endlessly praising your Krishna bhakti and world-famous cooking. ❤️'
      },
      {
        id: 'pred-tapan',
        author: 'Tapan Swain',
        text: 'MasterChef India 2032 Champion! Lifting the golden trophy with a grand biryani feast and a bright Hippo grin. 😃'
      },
      {
        id: 'pred-asutosh',
        author: 'Asutosh Baral',
        text: 'We are all officially waiting for little Pandu! 😂😂 The countdown to Baby Penguin has officially begun.'
      },
      {
        id: 'pred-paresh',
        author: 'Paresh Singh',
        text: 'Husband will be the CEO on paper, but Didi will be the actual management. One thing is certain: shaadi ke baad bhi Didi hi boss rahegi! 😎🌻'
      },
      {
        id: 'pred-niyaz',
        author: 'Niyaz Noor',
        text: 'She will be the proud mother of three children — including Dushmanta and Niyaz, who will still be asking for snacks every day!'
      }
    ]
  },
  {
    id: 'siblings-gang',
    pill: 'Siblings & Gang',
    title: 'Siblings & The Gang',
    kicker: 'Future Visions · Part 2',
    subtitle: 'The uncensored truth from the family squad and late-night partners-in-crime.',
    items: [
      {
        id: 'pred-ankita',
        author: 'Ankita (Didi)',
        text: 'A picture-perfect housewife with two beautiful children, and an active, devoted lifetime member of the ISKCON association!'
      },
      {
        id: 'pred-amit',
        author: 'Amit (Brother)',
        text: 'She will be pregnant with baby number two, delightfully jobless, and lounging on the sofa looking deliciously, extremely fat!'
      },
      {
        id: 'pred-anchal',
        author: 'Anchal (Cousin)',
        text: 'Forever slim and hot, happily pregnant with baby Penguin, and living the most joyful, blessed married life!'
      },
      {
        id: 'pred-soumya',
        author: 'Soumya Rout',
        text: "Mother of two: she'll put one to sleep by teaching dance steps, while the other won't listen to a single word! And that sweet 'Baby' she calls Pranjal will permanently convert into: 'OYE, SUNO!' 🤣"
      },
      {
        id: 'pred-tanu',
        author: 'Tanushree Mahato',
        text: 'Cooking dinner with one baby in her arm, another toddler nagging to play, while Pranjal is on the sofa Netflix-and-chilling, ready to be scolded! 🫡😂'
      },
      {
        id: 'pred-dushmanta',
        author: 'Dushmanta Behera',
        text: "You'll finally learn how to say NO! You'll invent even more weird expressions, welcome a tiny baby Penguin, conquer a top corporation, double your food fan club, and make the signature word 'HUSS!' world-famous!"
      }
    ]
  },
  {
    id: 'cosmic',
    pill: 'Cosmic Oracle',
    title: 'The Cosmic Oracle',
    kicker: 'Future Visions · Part 3',
    subtitle: 'Classified prophecies extracted directly from the universal astral database.',
    items: [
      {
        id: 'pred-cloud-kitchen',
        tag: '✦ Cosmic Oracle ✦',
        text: 'In 5 years, her cloud kitchen will boast 50 loyal daily customers, and 49 of them will dine for 100% free with complimentary chai.'
      },
      {
        id: 'pred-chair-officer',
        tag: '✦ Cosmic Oracle ✦',
        text: 'Pranjal will be officially designated as Chief Chair Officer on every single holiday, carrying an emergency folding chair wherever she walks.'
      },
      {
        id: 'pred-delayed-laugh',
        tag: '✦ Cosmic Oracle ✦',
        text: 'At their 5th wedding anniversary dinner, she will suddenly burst out laughing at a joke someone cracked at her bachelorette party.'
      },
      {
        id: 'pred-rocket-puja',
        tag: '✦ Cosmic Oracle ✦',
        text: "She will randomly shout 'Rocket udeidebi!' during an ultra-serious family puja, leaving the entire room delightfully stunned."
      },
      {
        id: 'pred-doraemon-bag',
        tag: '✦ Cosmic Oracle ✦',
        text: 'Her Doraemon handbag will legally qualify as a portable department store, containing three chargers, two snacks, hand cream, and a folding chair.'
      },
      {
        id: 'pred-live-wire',
        tag: '✦ Cosmic Oracle ✦',
        text: 'Her high-voltage live-wire laughter will trip the circuit breakers in their new apartment at least twice a month.'
      }
    ]
  }
]

export const PREDICTIONS_DATA: PredictionItem[] = PREDICTION_SETS.flatMap((s) => s.items)
