export interface CrewWish {
  name: string
  relation?: string
  message?: string
  video?: string
  poster?: string
}

export const FALLBACK_WISHES: CrewWish[] = [
  {
    name: 'Dushmanta',
    relation: 'Work crew',
    message: 'May your rocket fly higher than ever, and may Pranjal always keep a chair ready for you.'
  },
  {
    name: 'Siblings & Cousins',
    relation: 'Family',
    message: 'To our forever Jagatmata: endless laughter, zero arguments and bottomless chai.'
  },
  {
    name: 'The Office Gang',
    relation: 'Work crew',
    message: 'Never lose that electric laugh. Have the happiest married life, Penguin.'
  },
  {
    name: 'Childhood Besties',
    relation: 'School friends',
    message: 'From school desks to the launch pad, you will always be our favourite tubelight.'
  }
]
