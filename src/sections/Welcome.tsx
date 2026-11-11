import { useState, useMemo } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Hippo } from '../components/Hippo'
import { PenguinRocketArt } from '../components/art/PenguinRocketArt'
import { computeTrajectoryPose, type FlightTrajectory } from '../components/RocketFlyby'
import { SECTIONS, WELCOME_COPY } from '../data/sections'

interface WelcomeProps {
  onStart: () => void
}

const copy = SECTIONS[0]

const WELCOME_TRAJECTORIES: FlightTrajectory[] = [
  { from: [-15, 65], to: [115, 18], duration: 10 },
  { from: [115, 22], to: [-15, 62], duration: 11 },
  { from: [-15, 40], to: [115, 12], duration: 9 },
  { from: [115, 78], to: [-15, 20], duration: 12 },
  { from: [-15, 52], to: [115, 30], duration: 10 }
]

export function Welcome({ onStart }: WelcomeProps) {
  const reduceMotion = useReducedMotion()
  const [flightIdx, setFlightIdx] = useState(() => Math.floor(Math.random() * WELCOME_TRAJECTORIES.length))
  const traj = WELCOME_TRAJECTORIES[flightIdx]
  const pose = useMemo(() => computeTrajectoryPose(traj), [traj])

  return (
    <div className="section welcome-section">
      {!reduceMotion && (
        <div className="welcome-flyby-layer" aria-hidden="true">
          <motion.div
            key={flightIdx}
            className="welcome-flyby"
            initial={{ left: `${traj.from[0]}vw`, top: `${traj.from[1]}vh` }}
            animate={{ left: `${traj.to[0]}vw`, top: `${traj.to[1]}vh` }}
            transition={{ duration: traj.duration, ease: 'linear' }}
            onAnimationComplete={() =>
              setFlightIdx((prev) => (prev + 1 + Math.floor(Math.random() * (WELCOME_TRAJECTORIES.length - 1))) % WELCOME_TRAJECTORIES.length)
            }
            style={{ rotate: pose.rotate }}
          >
            <div style={{ transform: `scaleX(${pose.flip})` }}>
              <PenguinRocketArt size={72} sparks />
            </div>
          </motion.div>
        </div>
      )}

      <div className="welcome-grid">
        <motion.div
          initial={{ scale: 0.6, opacity: 0, y: 40 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ type: 'spring', damping: 11, stiffness: 120 }}
          className="welcome-hippo"
        >
          <div className="welcome-glow" />
          <Hippo size={280} speechText={WELCOME_COPY.greeting} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="welcome-copy"
        >
          <span className="kicker">{copy.kicker}</span>
          <h1 className="welcome-title">
            <span className="script-word">{WELCOME_COPY.titleScript}</span>
            <span className="welcome-title-main">{WELCOME_COPY.titleMain}</span>
          </h1>
          <p className="welcome-lead">{copy.subtitle}</p>
          <p className="welcome-catchphrase">"{WELCOME_COPY.catchphrase}"</p>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={onStart}
            className="primary-btn"
          >
            {WELCOME_COPY.button}
            <span aria-hidden="true">→</span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}
