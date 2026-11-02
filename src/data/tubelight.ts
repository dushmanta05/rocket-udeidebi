export type TubelightSpeaker = 'room' | 'arpita' | 'system'

export interface TubelightStep {
  step: number
  time: string
  speaker: TubelightSpeaker
  text: string
  brightness: number
  flicker?: boolean
  sound?: string
}

export const TUBELIGHT_STEPS: TubelightStep[] = [
  { step: 1, time: '10:00 AM', speaker: 'room', text: 'Someone cracks a joke. The whole room bursts out laughing.', brightness: 0 },
  { step: 2, time: '10:01 AM', speaker: 'arpita', text: 'Smiles politely. Nods. Looks at the ceiling.', brightness: 0.08 },
  { step: 3, time: '10:20 AM', speaker: 'system', text: 'Bzzzt... bzzt... signal received. Processing...', brightness: 0.45, flicker: true },
  { step: 4, time: '10:38 AM', speaker: 'arpita', text: 'Wait... what was the joke? Can someone explain?', brightness: 0.7, flicker: true },
  { step: 5, time: '10:45 AM', speaker: 'arpita', text: 'HAHAHAHA! Got it! Laughs alone, at full voltage.', brightness: 1 }
]
