import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { Hippo } from '../components/Hippo'
import { PenguinRocketArt } from '../components/art/PenguinRocketArt'
import { SECTIONS, WELCOME_COPY } from '../data/sections'

interface WelcomeProps {
  onStart: () => void
}

const copy = SECTIONS[0]

export function Welcome({ onStart }: WelcomeProps) {
  const rotate = useMemo(() => {
    const w = typeof window !== 'undefined' ? window.innerWidth : 1440
    const h = typeof window !== 'undefined' ? window.innerHeight : 900
    const dx = 1.2 * w
    const dy = -0.4 * h
    const heading = Math.atan2(dy, dx) * (180 / Math.PI)
    let deg = heading - (-43)
    while (deg > 180) deg -= 360
    while (deg < -180) deg += 360
    return Math.round(deg)
  }, [])

  return (
    <div className="section welcome-section">
      <motion.div
        className="welcome-flyby"
        initial={{ x: '-15vw', y: '10vh', rotate }}
        animate={{ x: '105vw', y: '-30vh', rotate }}
        transition={{ duration: 9, repeat: Infinity, repeatDelay: 3, ease: 'linear' }}
      >
        <PenguinRocketArt size={72} sparks />
      </motion.div>

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
