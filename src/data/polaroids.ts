export interface PolaroidItem {
  id: string
  label: string
  src?: string
  page: 1 | 2 | 3
  rotation: number
  theme: string
}

export const POLAROID_ITEMS: PolaroidItem[] = [
  { id: 'pol-1', label: 'Weird Face #1', page: 1, rotation: -6, theme: 'Weird Expressions' },
  { id: 'pol-2', label: 'Mid-Laugh Shock', page: 1, rotation: 8, theme: 'Weird Expressions' },
  { id: 'pol-3', label: 'Current Laugh Caught', page: 1, rotation: -11, theme: 'Weird Expressions' },
  { id: 'pol-4', label: 'Tubelight Moment Face', page: 1, rotation: 5, theme: 'Weird Expressions' },
  { id: 'pol-5', label: 'Office Desk Chaos', page: 2, rotation: -8, theme: 'Office Era' },
  { id: 'pol-6', label: 'Chai Hunt Mission', page: 2, rotation: 10, theme: 'Office Era' },
  { id: 'pol-7', label: 'Mimicry In Action', page: 2, rotation: -4, theme: 'Office Era' },
  { id: 'pol-8', label: 'Snack Hoard Exposed', page: 2, rotation: 7, theme: 'Office Era' },
  { id: 'pol-9', label: 'Goa Trip Sleepy', page: 3, rotation: -9, theme: 'Trips & Parties' },
  { id: 'pol-10', label: 'Generator Dance Mode', page: 3, rotation: 6, theme: 'Trips & Parties' },
  { id: 'pol-11', label: 'Roadside Chair Found', page: 3, rotation: -5, theme: 'Trips & Parties' },
  { id: 'pol-12', label: 'Bachelorette Queen', page: 3, rotation: 8, theme: 'Trips & Parties' }
]
