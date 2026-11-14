export interface PolaroidItem {
  id: string
  label: string
  caption?: string
  src?: string
  page: number
  rotation: number
}

export interface PolaroidPage {
  page: number
  theme: string
}

export const POLAROID_PAGES: PolaroidPage[] = [
  { page: 1, theme: 'Weird Expressions, Vol. 1' },
  { page: 2, theme: 'Weird Expressions, Vol. 2' },
  { page: 3, theme: 'Weird Expressions, Vol. 3' }
]

export const POLAROID_ITEMS: PolaroidItem[] = [
  {
    id: 'pol-1',
    label: 'The HyScale Stare',
    caption: 'Zero thoughts, zero motivation, and 100% done with this standup call.',
    src: './images/weird/1.jpeg',
    page: 1,
    rotation: -6
  },
  {
    id: 'pol-2',
    label: 'Chai Detective',
    caption: 'Scanning the street for who took the last cup of adrak chai.',
    src: './images/weird/2.jpeg',
    page: 1,
    rotation: 5
  },
  {
    id: 'pol-3',
    label: 'Tubelight Rebooting...',
    caption: 'Brain buffering at 2G speed... please wait while comprehension loads.',
    src: './images/weird/3.jpeg',
    page: 1,
    rotation: -3
  },
  {
    id: 'pol-4',
    label: 'Dramatic CEO Pout',
    caption: 'Looking at everyone else’s life choices with supreme royal disapproval.',
    src: './images/weird/4.jpeg',
    page: 1,
    rotation: 7
  },
  {
    id: 'pol-5',
    label: 'Table Gossip Radar',
    caption: 'Glasses up, finger pointed: someone just dropped spicy cafeteria tea.',
    src: './images/weird/5.jpeg',
    page: 1,
    rotation: -8
  },
  {
    id: 'pol-6',
    label: 'Food Focus Mode',
    caption: 'Do not speak to Hippo while the plate is still occupied.',
    src: './images/weird/6.jpeg',
    page: 1,
    rotation: 4
  },
  {
    id: 'pol-7',
    label: 'Undercover Dadi Mode',
    caption: 'Park bench surveillance: actively judging every couple walking past.',
    src: './images/weird/7.jpeg',
    page: 2,
    rotation: 6
  },
  {
    id: 'pol-8',
    label: 'Turtle Hippo in Plaid',
    caption: 'Temperature dropped by 0.5 degrees. Fully retracted into shell.',
    src: './images/weird/8.jpeg',
    page: 2,
    rotation: -5
  },
  {
    id: 'pol-9',
    label: 'Wait, Who Are You?',
    caption: 'Squinting with all her might because HD vision requires effort.',
    src: './images/weird/9.jpeg',
    page: 2,
    rotation: 3
  },
  {
    id: 'pol-10',
    label: '3 AM Berth Panic',
    caption: 'Waking up on the middle berth wondering what station and century it is.',
    src: './images/weird/10.jpeg',
    page: 2,
    rotation: -7
  },
  {
    id: 'pol-11',
    label: 'Spatula Commander',
    caption: 'Say one bad word about the Afghani Chicken and face the consequences.',
    src: './images/weird/11.jpeg',
    page: 2,
    rotation: 8
  },
  {
    id: 'pol-12',
    label: 'Critique Bite Face',
    caption: 'Chewing with maximum passion and complete sensory overload.',
    src: './images/weird/12.jpeg',
    page: 2,
    rotation: -4
  },
  {
    id: 'pol-13',
    label: 'Rainy Chai Devotion',
    caption: 'Praise the rain gods for providing the perfect excuse for another cutting.',
    src: './images/weird/13.jpeg',
    page: 3,
    rotation: -6
  },
  {
    id: 'pol-14',
    label: 'Why Did I Agree To Hike?',
    caption: 'Five minutes into the trek and her soul has already reached the peak.',
    src: './images/weird/14.jpeg',
    page: 3,
    rotation: 7
  },
  {
    id: 'pol-15',
    label: 'Holi Battle Survivor',
    caption: 'Stunned, pink, stranded on a scooter, holding emergency snacks.',
    src: './images/weird/15.jpeg',
    page: 3,
    rotation: -3
  },
  {
    id: 'pol-16',
    label: 'Office Inspector Auntie',
    caption: 'Hands locked behind back, supervising the team like a certified panchayat chief.',
    src: './images/weird/16.jpeg',
    page: 3,
    rotation: 5
  },
  {
    id: 'pol-17',
    label: 'Gyaan Distribution Mode',
    caption: 'Unsolicited philosophical lecture in progress. Please take notes.',
    src: './images/weird/17.jpeg',
    page: 3,
    rotation: -6
  },
  {
    id: 'pol-18',
    label: 'Chai Tapri Debates',
    caption: 'Hot cutting tea in hand, passionately defending an opinion nobody asked for.',
    src: './images/weird/18.jpeg',
    page: 3,
    rotation: 8
  }
]
