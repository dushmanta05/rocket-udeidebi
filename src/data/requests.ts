export interface RequestItem {
  id: number
  from: string
  question: string
  subtext: string
}

export const REQUESTS_DATA: RequestItem[] = [
  { id: 1, from: 'Office Bestie', question: 'Can you take my shift tomorrow?', subtext: 'Starts at 7:00 AM sharp.' },
  { id: 2, from: 'Cousin', question: 'Can you lend me 500 rupees until Friday?', subtext: 'Which Friday remains unverified.' },
  { id: 3, from: 'Flatmate', question: 'Can you taste this weird experiment I cooked? Be honest.', subtext: 'Looks suspicious, smells worse.' },
  { id: 4, from: 'Random Stranger', question: 'Can you hold my heavy bag for just 5 minutes?', subtext: 'Returns approximately 3 hours later.' },
  { id: 5, from: 'Stray Puppy', question: 'Can you adopt me?', subtext: 'Already looks like family.' },
  { id: 6, from: 'The Entire Crew', question: 'Final Exam: Can you say NO to this question right now?', subtext: 'Just one simple tap on NO. We believe in you, Hippo.' }
]
