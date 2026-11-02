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
  { page: 3, theme: 'The Office Era' },
  { page: 4, theme: 'Trips & Parties' }
]

export const POLAROID_ITEMS: PolaroidItem[] = [
  { id: 'pol-1', label: 'Weird Face #1', page: 1, rotation: -6 },
  { id: 'pol-2', label: 'Mid-Laugh Shock', page: 1, rotation: 5 },
  { id: 'pol-3', label: 'Current Laugh Caught', page: 1, rotation: -3 },
  { id: 'pol-4', label: 'Tubelight Face', page: 1, rotation: 7 },
  { id: 'pol-5', label: 'Eyes Closed, Again', page: 1, rotation: -8 },
  { id: 'pol-6', label: 'Mouth Full of Snacks', page: 1, rotation: 4 },
  { id: 'pol-7', label: 'Confused Penguin', page: 2, rotation: 6 },
  { id: 'pol-8', label: 'The Side Eye', page: 2, rotation: -5 },
  { id: 'pol-9', label: 'Blurry Dance Move', page: 2, rotation: 3 },
  { id: 'pol-10', label: 'Sneeze Incoming', page: 2, rotation: -7 },
  { id: 'pol-11', label: 'Selfie Gone Wrong', page: 2, rotation: 8 },
  { id: 'pol-12', label: 'Double Chin Special', page: 2, rotation: -4 },
  { id: 'pol-13', label: 'Office Desk Chaos', page: 3, rotation: -6 },
  { id: 'pol-14', label: 'Chai Hunt Mission', page: 3, rotation: 7 },
  { id: 'pol-15', label: 'Mimicry In Action', page: 3, rotation: -3 },
  { id: 'pol-16', label: 'Snack Hoard Exposed', page: 3, rotation: 5 },
  { id: 'pol-17', label: 'Trip Nap', page: 4, rotation: -7 },
  { id: 'pol-18', label: 'Generator Dance Mode', page: 4, rotation: 6 },
  { id: 'pol-19', label: 'Roadside Chair Found', page: 4, rotation: -4 },
  { id: 'pol-20', label: 'Bachelorette Queen', page: 4, rotation: 8 }
]
