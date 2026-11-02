import { useMemo } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { PenguinRocketArt } from './art/PenguinRocketArt'

interface Flight {
  from: [number, number]
  to: [number, number]
}

const ACROSS_TOP_RIGHT: Flight = { from: [-10, 40], to: [26, -12] }
const ACROSS_TOP_LEFT: Flight = { from: [110, 40], to: [74, -12] }
const CLIMB_LEFT_EDGE: Flight = { from: [3, 110], to: [15, -12] }
const CLIMB_RIGHT_EDGE: Flight = { from: [97, 110], to: [85, -12] }

const FLIGHTS: Record<number, Flight> = {
  4: ACROSS_TOP_RIGHT,
  5: CLIMB_LEFT_EDGE,
  6: ACROSS_TOP_LEFT,
  7: CLIMB_RIGHT_EDGE,
  8: ACROSS_TOP_RIGHT,
  9: ACROSS_TOP_LEFT,
  10: CLIMB_LEFT_EDGE,
  11: CLIMB_RIGHT_EDGE,
  12: ACROSS_TOP_LEFT
}

const ROCKET_NOSE_ANGLE = -40

interface RocketFlybyProps {
  section: number
}

export function RocketFlyby({ section }: RocketFlybyProps) {
  const reduceMotion = useReducedMotion()
  const flight = FLIGHTS[section] ?? ACROSS_TOP_RIGHT

  const pose = useMemo(() => {
    const dx = (flight.to[0] - flight.from[0]) * window.innerWidth
    const dy = (flight.to[1] - flight.from[1]) * window.innerHeight
    const heading = Math.atan2(dy, dx) * (180 / Math.PI)
    const leftward = dx < 0
    const nose = leftward ? 180 - ROCKET_NOSE_ANGLE : ROCKET_NOSE_ANGLE
    return { rotate: heading - nose, flip: leftward ? -1 : 1 }
  }, [flight])

  if (reduceMotion || !(section in FLIGHTS)) return null

  return (
    <div className="flyby-layer" aria-hidden="true">
      <motion.div
        key={section}
        className="flyby-rocket"
        initial={{ left: `${flight.from[0]}vw`, top: `${flight.from[1]}vh` }}
        animate={{ left: `${flight.to[0]}vw`, top: `${flight.to[1]}vh` }}
        transition={{ duration: 7, delay: 1.2, ease: 'easeIn', repeat: Infinity, repeatDelay: 8 }}
        style={{ rotate: pose.rotate }}
      >
        <div style={{ transform: `scaleX(${pose.flip})` }}>
          <PenguinRocketArt size={64} />
        </div>
      </motion.div>
    </div>
  )
}
