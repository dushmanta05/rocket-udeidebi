import { useState, useEffect, useMemo } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { PenguinRocketArt } from './art/PenguinRocketArt'

export const ROCKET_NOSE_ANGLE = -43

export interface FlightTrajectory {
  from: [number, number]
  to: [number, number]
  duration: number
}

export function computeTrajectoryPose(traj: FlightTrajectory) {
  const w = typeof window !== 'undefined' ? window.innerWidth : 1440
  const h = typeof window !== 'undefined' ? window.innerHeight : 900
  const dx = ((traj.to[0] - traj.from[0]) / 100) * w
  const dy = ((traj.to[1] - traj.from[1]) / 100) * h
  const heading = Math.atan2(dy, dx) * (180 / Math.PI)
  const leftward = dx < 0
  const flip = leftward ? -1 : 1
  const baseNose = leftward ? -180 - ROCKET_NOSE_ANGLE : ROCKET_NOSE_ANGLE
  let rotate = heading - baseNose
  while (rotate > 180) rotate -= 360
  while (rotate < -180) rotate += 360
  return { rotate, flip }
}

const FLYBY_TRAJECTORIES: FlightTrajectory[] = [
  { from: [-15, 68], to: [115, 18], duration: 9 },
  { from: [115, 22], to: [-15, 62], duration: 10 },
  { from: [-15, 40], to: [115, 12], duration: 9 },
  { from: [115, 76], to: [-15, 20], duration: 11 },
  { from: [-15, 52], to: [115, 28], duration: 10 },
  { from: [6, 112], to: [28, -15], duration: 8 },
  { from: [94, 112], to: [72, -15], duration: 8 }
]

interface RocketFlybyProps {
  section: number
}

export function RocketFlyby({ section }: RocketFlybyProps) {
  const reduceMotion = useReducedMotion()
  const [flightIdx, setFlightIdx] = useState(() => Math.floor(Math.random() * FLYBY_TRAJECTORIES.length))

  useEffect(() => {
    setFlightIdx((prev) => (prev + 1 + Math.floor(Math.random() * (FLYBY_TRAJECTORIES.length - 1))) % FLYBY_TRAJECTORIES.length)
  }, [section])

  const traj = FLYBY_TRAJECTORIES[flightIdx]
  const pose = useMemo(() => computeTrajectoryPose(traj), [traj])

  if (reduceMotion || section < 4 || section > 12) return null

  return (
    <div className="flyby-layer" aria-hidden="true">
      <motion.div
        key={`${section}-${flightIdx}`}
        className="flyby-rocket"
        initial={{ left: `${traj.from[0]}vw`, top: `${traj.from[1]}vh` }}
        animate={{ left: `${traj.to[0]}vw`, top: `${traj.to[1]}vh` }}
        transition={{ duration: traj.duration, delay: 0.8, ease: 'linear' }}
        onAnimationComplete={() =>
          setFlightIdx((prev) => (prev + 1 + Math.floor(Math.random() * (FLYBY_TRAJECTORIES.length - 1))) % FLYBY_TRAJECTORIES.length)
        }
        style={{ rotate: pose.rotate }}
      >
        <div style={{ transform: `scaleX(${pose.flip})` }}>
          <PenguinRocketArt size={64} sparks />
        </div>
      </motion.div>
    </div>
  )
}
