export interface PolaroidItem {
  id: string
  label: string
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
  { id: 'pol-1', label: 'The HyScale Stare', src: './images/weird/1.jpeg', page: 1, rotation: -6 },
  { id: 'pol-2', label: 'Street Market Side-Eye', src: './images/weird/2.jpeg', page: 1, rotation: 5 },
  { id: 'pol-3', label: 'Tubelight Rebooting...', src: './images/weird/3.jpeg', page: 1, rotation: -3 },
  { id: 'pol-4', label: 'Dramatic CEO Pout', src: './images/weird/4.jpeg', page: 1, rotation: 7 },
  { id: 'pol-5', label: 'Restaurant Gossip Radar', src: './images/weird/5.jpeg', page: 1, rotation: -8 },
  { id: 'pol-6', label: 'Cafeteria Food Focus', src: './images/weird/6.jpeg', page: 1, rotation: 4 },
  { id: 'pol-7', label: 'Undercover Dadi Mode', src: './images/weird/7.jpeg', page: 2, rotation: 6 },
  { id: 'pol-8', label: 'Turtle Hippo in Plaid', src: './images/weird/8.jpeg', page: 2, rotation: -5 },
  { id: 'pol-9', label: 'Wait, Who Are You?', src: './images/weird/9.jpeg', page: 2, rotation: 3 },
  { id: 'pol-10', label: '3 AM Train Berth Panic', src: './images/weird/10.jpeg', page: 2, rotation: -7 },
  { id: 'pol-11', label: 'Masterchef Threat Mode', src: './images/weird/11.jpeg', page: 2, rotation: 8 },
  { id: 'pol-12', label: 'Critique Bite Face', src: './images/weird/12.jpeg', page: 2, rotation: -4 },
  { id: 'pol-13', label: 'Rainy Chai Devotion', src: './images/weird/13.jpeg', page: 3, rotation: -6 },
  { id: 'pol-14', label: 'Why Did I Agree To Hike?', src: './images/weird/14.jpeg', page: 3, rotation: 7 },
  { id: 'pol-15', label: 'Holi Battle Survivor', src: './images/weird/15.jpeg', page: 3, rotation: -3 },
  { id: 'pol-16', label: 'Office Inspector Auntie', src: './images/weird/16.jpeg', page: 3, rotation: 5 },
  { id: 'pol-17', label: 'Gyaan Distribution Mode', src: './images/weird/17.jpeg', page: 3, rotation: -6 },
  { id: 'pol-18', label: 'Chai Tapri Debates', src: './images/weird/18.jpeg', page: 3, rotation: 8 }
]
