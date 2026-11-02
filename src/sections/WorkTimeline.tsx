import { RocketTimeline } from '../components/RocketTimeline'
import { SECTIONS } from '../data/sections'
import { TIMELINE_STOPS } from '../data/timeline'
import type { StepSectionProps } from './types'

const stops = TIMELINE_STOPS.filter((stop) => stop.chapter === 'work')

export function WorkTimeline(props: StepSectionProps) {
  return <RocketTimeline {...props} stops={stops} copy={SECTIONS[3]} variant="work" />
}
