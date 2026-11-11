export interface RequestItem {
  id: number
  from: string
  question: string
  subtext: string
}

export const REQUESTS_DATA: RequestItem[] = [
  { id: 1, from: 'Project Lead', question: 'Can you do this work on the weekend?', subtext: 'It is urgent and only you can pull this off.' },
  { id: 2, from: 'Random Stranger', question: 'Can you hold my heavy bag for just 5 minutes?', subtext: 'Returns approximately 3 hours later.' },
  { id: 3, from: 'The Office Crew', question: 'Can you organize the entire trip, bus routes and snacks?', subtext: 'Because you are the certified Jagatmata.' },
  { id: 4, from: 'Office Bestie', question: 'Can you cover my shift tomorrow at 7:00 AM?', subtext: 'Starts in 6 hours. Wake up early, please!' },
  { id: 5, from: 'Chai Buddy', question: 'Can you give up your comfy chair for me?', subtext: 'There are literally zero other chairs in the room.' },
  { id: 6, from: 'The Entire Crew', question: 'Final Exam: Can you say NO to this question right now?', subtext: 'Just one simple tap on NO. We believe in you, Hippo.' }
]
