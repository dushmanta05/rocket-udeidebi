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
    name: 'Amit, Anchal & Ankita',
    relation: 'Family',
    message: 'To our forever Jagatmata: endless laughter, zero arguments and bottomless chai.'
  },
  {
    name: 'Subhasree, Astha & Niyaz',
    relation: 'Work crew',
    message: 'Never lose that electric laugh. Have the happiest married life, Penguin.'
  },
  {
    name: 'Tapan, Shyam, Soumya, Tanu, Paresh & Asutosh',
    relation: 'Crew',
    message: 'From chai breaks to the launch pad, you will always be our favourite tubelight.'
  }
]
