import { ASSETS } from './assets'

export interface AwardItem {
  id: string
  title: string
  roast: string
  label: string
  src?: string
}

export const AWARDS_DATA: AwardItem[] = [
  {
    id: 'award-1',
    title: 'Jagatmata Award',
    roast: 'Treats the whole office as her children. Even the ones who definitely do not deserve it.',
    label: 'Award: Jagatmata',
    src: ASSETS.penguJagatMata
  },
  {
    id: 'award-2',
    title: 'Tubelight Award',
    roast: 'The joke is over. Everyone has left the room. She will now ask for an explanation.',
    label: 'Award: Tubelight',
    src: ASSETS.penguTubelight
  },
  {
    id: 'award-3',
    title: 'Chair Seeker Award',
    roast: 'Chai break is for drinking tea. She is strictly there for locating the nearest chair.',
    label: 'Award: Chair Seeker'
  },
  {
    id: 'award-4',
    title: 'Doraemon Pocket Award',
    roast: 'Need a safety pin, 3-pin charger, a biscuit, or emergency medicine? Ask her bag.',
    label: 'Award: Doraemon Pocket',
    src: ASSETS.penguBag
  },
  {
    id: 'award-5',
    title: 'Current Laugh Award',
    roast: 'Laughs like a high-voltage live wire. Spectators are advised to maintain a safe distance.',
    label: 'Award: Current Laugh'
  },
  {
    id: 'award-6',
    title: 'Penguin Walk Award',
    roast: 'Walks with an elite waddle like she is on an urgent mission to a secret polar colony.',
    label: 'Award: Penguin Walk',
    src: ASSETS.penguRun
  }
]
