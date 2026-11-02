export interface WishItem {
  id: string
  author: string
  text: string
  videoSrc?: string
}

export const WISHES_DATA: WishItem[] = [
  {
    id: 'wish-1',
    author: 'Dushmanta & The Work Crew',
    text: 'May your rocket fly higher than ever, and may Pranjal always have a chair ready for you! Rocket udeidebi!',
    videoSrc: ''
  },
  {
    id: 'wish-2',
    author: 'Siblings & Cousins',
    text: 'To our forever Jagatmata: wishing you a lifetime of endless laughter, zero arguments, and bottomless chai!',
    videoSrc: ''
  },
  {
    id: 'wish-3',
    author: 'The Office Gang',
    text: 'Never lose that electric current laugh! We love you Penguin! Have the wildest and happiest married life ahead!',
    videoSrc: ''
  },
  {
    id: 'wish-4',
    author: 'Childhood Besties',
    text: 'From school desks to the marriage launch pad, you will always be our favorite tubelight. Congratulations Arpita!',
    videoSrc: ''
  }
]
