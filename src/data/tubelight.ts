export interface TubelightStep {
  step: number
  text: string
  brightness: number
  sound?: string
}

export const TUBELIGHT_STEPS: TubelightStep[] = [
  { step: 1, text: 'The group cracks a hilarious punchline. Everyone roars with laughter.', brightness: 0 },
  { step: 2, text: 'Arpita smiles politely, nodding along while scanning the ceiling.', brightness: 0.1 },
  { step: 3, text: 'Electric buzzing sound... Lamp filament starts flickering...', brightness: 0.4 },
  { step: 4, text: '"Wait... what was the joke? Can someone explain?"', brightness: 0.7 },
  { step: 5, text: 'FULL BRIGHTNESS! Arpita has understood. Buffering 100% complete.', brightness: 1.0 }
]
