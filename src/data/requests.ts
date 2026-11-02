export interface RequestItem {
  id: number
  question: string
  subtext: string
}

export const REQUESTS_DATA: RequestItem[] = [
  { id: 1, question: 'Can you take my shift tomorrow?', subtext: 'Starts at 7:00 AM sharp.' },
  { id: 2, question: 'Can you lend me 500 rupees until Friday?', subtext: 'Which Friday remains unverified.' },
  { id: 3, question: 'Can you taste this weird experiment I cooked? Be honest.', subtext: 'Looks suspicious, smells worse.' },
  { id: 4, question: 'Can you hold my heavy bag for just 5 minutes?', subtext: 'Returns approximately 3 hours later.' },
  { id: 5, question: 'Can you adopt this stray puppy?', subtext: 'Already looks like family.' }
]
