export interface TimelineStop {
  id: string
  year: string
  title: string
  caption: string
  src?: string
  chapter: 'family' | 'work'
}

export const TIMELINE_STOPS: TimelineStop[] = [
  {
    id: 'fam-1',
    year: '1999',
    title: 'The Arrival of Jagatmata',
    caption: 'Entered the world with a high-voltage cry that startled the entire nursery.',
    chapter: 'family'
  },
  {
    id: 'fam-2',
    year: '2005',
    title: 'The Chair Seeker Emerges',
    caption: 'Kindergarten sports day. Instead of running, she negotiated for a comfy chair.',
    chapter: 'family'
  },
  {
    id: 'fam-3',
    year: '2012',
    title: 'School Days & Generator Beats',
    caption: 'Discovered she can dance perfectly in sync with the school backup generator.',
    chapter: 'family'
  },
  {
    id: 'fam-4',
    year: '2017',
    title: 'College & Maternal Instincts',
    caption: 'Adopted 4 stray dogs, 2 birds, and fed every hungry soul within a 5km radius.',
    chapter: 'family'
  },
  {
    id: 'fam-5',
    year: '2021',
    title: 'The Doraemon Era',
    caption: 'Her backpack reached critical mass. Capable of surviving an apocalypse for 3 weeks.',
    chapter: 'family'
  },
  {
    id: 'work-1',
    year: 'Day 1',
    title: 'Then We Met: The New Hire',
    caption: 'Walked into the office with the iconic penguin waddle and instant warmth.',
    chapter: 'work'
  },
  {
    id: 'work-2',
    year: 'Month 3',
    title: 'The Chai Break Protocol',
    caption: 'Chai took 3 minutes. Finding her ideal sitting spot took 15.',
    chapter: 'work'
  },
  {
    id: 'work-3',
    year: 'Year 1',
    title: 'Rocket Udeidebi Born',
    caption: 'The legendary catchphrase was coined during an all-hands crisis. The rest is history.',
    chapter: 'work'
  },
  {
    id: 'work-4',
    year: 'Year 2',
    title: 'The Srikant Impersonation',
    caption: 'Flawless imitation unlocked. Management was baffled, friends were in tears.',
    chapter: 'work'
  },
  {
    id: 'work-5',
    year: 'Year 3',
    title: 'Buffering Champion',
    caption: 'Standup joke cracked at 10:00 AM. Arpita burst into laughter at 10:45 AM.',
    chapter: 'work'
  },
  {
    id: 'work-6',
    year: 'Now',
    title: 'Destination: The Launch Pad',
    caption: 'Ready for the biggest launch of her life. Next stop: Pranjal Penguin!',
    chapter: 'work'
  }
]
