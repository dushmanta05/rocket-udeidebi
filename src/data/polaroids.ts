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
  { id: 'pol-1', label: 'Weird Face #1', page: 1, rotation: -5 },
  { id: 'pol-2', label: 'Mid-Laugh Shock', page: 1, rotation: 4 },
  { id: 'pol-3', label: 'Current Laugh Caught', page: 1, rotation: -3 },
  { id: 'pol-4', label: 'Tubelight Face', page: 1, rotation: 5 },
  { id: 'pol-5', label: 'Eyes Closed, Again', page: 1, rotation: -6 },
  { id: 'pol-6', label: 'Mouth Full of Snacks', page: 1, rotation: 4 },
  { id: 'pol-7', label: 'Suspicious Side-Eye', page: 1, rotation: -4 },
  { id: 'pol-8', label: 'Jaw Drop Drama', page: 1, rotation: 5 },
  { id: 'pol-9', label: 'Confused Penguin', page: 2, rotation: -5 },
  { id: 'pol-10', label: 'The Serious Stare', page: 2, rotation: 4 },
  { id: 'pol-11', label: 'Blurry Dance Move', page: 2, rotation: -3 },
  { id: 'pol-12', label: 'Sneeze Incoming', page: 2, rotation: 5 },
  { id: 'pol-13', label: 'Selfie Gone Wrong', page: 2, rotation: -6 },
  { id: 'pol-14', label: 'Double Chin Special', page: 2, rotation: 4 },
  { id: 'pol-15', label: 'The Overwhelmed Stare', page: 2, rotation: -4 },
  { id: 'pol-16', label: 'Brain Rebooting...', page: 2, rotation: 5 },
  { id: 'pol-17', label: 'Office Desk Chaos', page: 3, rotation: -5 },
  { id: 'pol-18', label: 'Chai Hunt Mission', page: 3, rotation: 4 },
  { id: 'pol-19', label: 'Mimicry In Action', page: 3, rotation: -3 },
  { id: 'pol-20', label: 'Snack Hoard Exposed', page: 3, rotation: 5 },
  { id: 'pol-21', label: 'Trip Nap Caught', page: 3, rotation: -6 },
  { id: 'pol-22', label: 'Generator Dance Mode', page: 3, rotation: 4 },
  { id: 'pol-23', label: 'Roadside Chair Found', page: 3, rotation: -4 },
  { id: 'pol-24', label: 'Bachelorette Queen Chaos', page: 3, rotation: 5 }
]
