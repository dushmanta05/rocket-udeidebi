export interface FriendPhoto {
  id: string
  title: string
  caption: string
  src: string
  aspectRatio?: string
  orientation?: 'portrait' | 'landscape' | 'square' | 'wide'
}

export interface FriendSet {
  id: string
  pill: string
  title: string
  kicker: string
  subtitle: string
  gif?: string
  gifAlt?: string
  items: FriendPhoto[]
  offset: number
  isHero?: boolean
}

export const FRIENDS_SETS: FriendSet[] = [
  {
    id: 'first-trip',
    pill: 'The 1st Trip',
    title: 'When Our Group First Got Together',
    kicker: 'Chapter 2 · Act 1',
    subtitle: 'Where the story began — our very first road trip, lawn Uno, beach strolls, and golden hour leaps.',
    gif: 'images/gifs/penguin-travel.gif',
    gifAlt: 'Pengu traveling with luggage',
    offset: 0,
    items: [
      {
        id: 'trip-1',
        title: 'The Genesis Trip',
        caption: 'When our group got together for the very first time on a trip — packing bags, hitting the road, and officially unleashing the chaos.',
        src: 'images/friends/1.jpeg'
      },
      {
        id: 'trip-2',
        title: '1st Lawn Uno Tournament',
        caption: 'Playing Uno together as a group on the grass for the first time — friendships were tested and Draw 4s were played with zero remorse.',
        src: 'images/friends/2.jpeg'
      },
      {
        id: 'trip-3',
        title: 'Beach Squad Assembled',
        caption: 'Sandy breeze, matching sunglasses energy, and our favorite group stroll along the coastline.',
        src: 'images/friends/3.jpeg'
      },
      {
        id: 'trip-4',
        title: 'Lawn Volleyball Shenanigans',
        caption: 'None of us knew the official volleyball rules, but every point was contested like an Olympic gold medal.',
        src: 'images/friends/4.jpeg'
      },
      {
        id: 'trip-5',
        title: 'Chasing the Sunset',
        caption: 'Jumping together into the golden hour sky — proof that every single trip with you turns into pure happiness.',
        src: 'images/friends/5.jpeg'
      }
    ]
  },
  {
    id: 'holi',
    pill: 'Holi Colors',
    title: 'Colors of Chaos',
    kicker: 'Chapter 2 · Act 2',
    subtitle: "Good luck finding who's who — we just know you were somewhere in this rainbow madness!",
    offset: 5,
    items: [
      {
        id: 'holi-1',
        title: 'Rainbow Warfare',
        caption: "Good luck finding who's who — 100% gulal coverage, zero facial recognition, and pure laughter.",
        src: 'images/friends/holi-1.jpeg'
      },
      {
        id: 'holi-2',
        title: 'Somewhere in the Rainbow',
        caption: "We just know you were somewhere in this rainbow madness, laughing louder than anyone else!",
        src: 'images/friends/holi-2.jpeg'
      }
    ]
  },
  {
    id: 'eating',
    pill: 'Eating Together',
    title: 'Eating Together',
    kicker: 'Chapter 2 · Act 3',
    subtitle: 'The crew that eats together, stays together. From hot soup bowls to street chaat and the legendary gupchup tower.',
    offset: 7,
    items: [
      {
        id: 'eat-1',
        title: 'Soup Bowl Cheers',
        caption: 'Raising our soup bowls like champagne flutes — the official kickoff ritual for every feast.',
        src: 'images/friends/eating-1.jpeg'
      },
      {
        id: 'eat-2',
        title: 'Chaat & Dahi Puri Attack',
        caption: 'Zero debates, clean plates, and immediately ordering three extra rounds of spicy dahi puri.',
        src: 'images/friends/eating-2.jpeg'
      },
      {
        id: 'eat-3',
        title: 'Shell-Served Ice Creams',
        caption: 'Sweet treats served straight inside fruit shells because ordinary cups could not match our dessert standards.',
        src: 'images/friends/eating-3.jpeg',
        aspectRatio: '3 / 4',
        orientation: 'portrait'
      },
      {
        id: 'eat-4',
        title: 'The Gupchup Birthday "Cake"',
        caption: 'Holding her favorite gupchup — which we celebrated as the ultimate birthday cake replacement!',
        src: 'images/friends/gupchup-1.jpeg',
        aspectRatio: '3 / 4',
        orientation: 'portrait'
      }
    ]
  },
  {
    id: 'dinners',
    pill: 'Dinners & Lunches',
    title: 'Going Out With Friends',
    kicker: 'Chapter 2 · Act 4',
    subtitle: 'Midnight food runs, Friends Day celebrations, and an authentic Odisha Pakhala feast on the floor.',
    offset: 11,
    items: [
      {
        id: 'dine-1',
        title: 'Authentic Odisha Pakhala Feast',
        caption: 'Sitting on the floor, sharing authentic Odia pakhala bhata with all the crispy bhajis — the true soul food of our crew.',
        src: 'images/friends/lunch-1.jpeg'
      },
      {
        id: 'dine-2',
        title: 'Midnight Run at Charlie',
        caption: 'Late-night dinner at Hotel Charlie — Arpita keeping the helmet securely on because safety never takes a dinner break!',
        src: 'images/friends/dinner-1.jpeg'
      },
      {
        id: 'dine-3',
        title: 'Friends Day Dinner',
        caption: 'Gathered around the banquet table celebrating Friends Day with toasts, stories, and non-stop laughter.',
        src: 'images/friends/dinner-2.jpeg'
      },
      {
        id: 'dine-4',
        title: 'Late-Night Post-Feast Squad',
        caption: 'Stepping outside under the streetlights, completely stuffed, happy, and ready for the next round.',
        src: 'images/friends/dinner-3.jpeg'
      }
    ]
  },
  {
    id: 'celebrations',
    pill: 'Celebrating Together',
    title: 'Celebrating Together',
    kicker: 'Chapter 2 · Act 5',
    subtitle: 'Every desk celebration, surprise gathering, and sweet moment shared as a crew.',
    offset: 15,
    items: [
      {
        id: 'celeb-1',
        title: 'The Desk-Side Gathering',
        caption: 'Crowding around the workstation, sparking the celebration, and pretending any actual work was getting done.',
        src: 'images/friends/bday-1.jpeg'
      },
      {
        id: 'celeb-2',
        title: 'Smiles & Flower Bouquets',
        caption: 'Surrounded by colorful blooms, radiant smiles, and the loudest cheering squad in the room.',
        src: 'images/friends/bday-2.jpeg'
      },
      {
        id: 'celeb-3',
        title: 'Cake Cutting Moments',
        caption: 'That breathless moment right before the knife slices down and everyone eyes the best chocolate piece.',
        src: 'images/friends/bday-3.jpeg'
      },
      {
        id: 'celeb-4',
        title: 'Release Letter Day',
        caption: 'The day she got her official release letter — celebrating around the desk, and yes, Astha was missing that day!',
        src: 'images/friends/last-day.jpeg',
        aspectRatio: '4 / 3',
        orientation: 'landscape'
      }
    ]
  },
  {
    id: 'outings',
    pill: 'Outings & Trips',
    title: 'Trips & Adventures',
    kicker: 'Chapter 2 · Act 6',
    subtitle: 'Coastal trails, poolside splashes, handwoven garlands, and sweet send-offs on the road.',
    offset: 19,
    items: [
      {
        id: 'outing-1',
        title: 'Beach Garlands & Sunshine',
        caption: 'Sporting handwoven seashell necklaces, soaking in the sunny coastal breeze, and discovering scenic new paths.',
        src: 'images/friends/outing-1.jpeg'
      },
      {
        id: 'outing-2',
        title: 'Poolside Splash Day',
        caption: 'Beating the heat with poolside loungers, giant splashes, and endless sunny shenanigans.',
        src: 'images/friends/outing-2.jpeg'
      },
      {
        id: 'outing-3',
        title: 'The Farewell Cake',
        caption: 'Holding the cake we gave her for farewell — sending off our favorite teammate with chocolate, cheers, and big hugs!',
        src: 'images/friends/farewell.jpeg',
        aspectRatio: '3 / 4',
        orientation: 'portrait'
      }
    ]
  },
  {
    id: 'finale',
    pill: 'Cherished Moments',
    title: 'Forever In Our Hearts',
    kicker: 'Chapter 2 · Finale',
    subtitle: "We'll cherish these moments.",
    offset: 22,
    isHero: true,
    items: [
      {
        id: 'hero-finale',
        title: "We'll Cherish These Moments",
        caption: "From that very first trip to late-night dinners, laughter across desks, and every shared adventure — we'll cherish these moments forever.",
        src: 'images/friends/outing-3.jpeg'
      }
    ]
  }
]

export const FRIENDS_PHOTOS: FriendPhoto[] = FRIENDS_SETS.flatMap((s) => s.items)
