import { motion } from 'framer-motion'
import { Hippo } from '../components/Hippo'
import { PenguinRocketArt } from '../components/art/PenguinRocketArt'
import { SECTIONS, WELCOME_COPY } from '../data/sections'

interface WelcomeProps {
  onStart: () => void
}

const copy = SECTIONS[0]

export function Welcome({ onStart }: WelcomeProps) {
  return (
    <div className="section welcome-section">
      <motion.div
        className="welcome-flyby"
        initial={{ x: '-15vw', y: '10vh', rotate: 0 }}
        animate={{ x: '105vw', y: '-30vh' }}
        transition={{ duration: 9, repeat: Infinity, repeatDelay: 3, ease: 'linear' }}
      >
        <PenguinRocketArt size={72} />
      </motion.div>

      <div className="welcome-grid">
        <motion.div
          initial={{ scale: 0.6, opacity: 0, y: 40 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ type: 'spring', damping: 11, stiffness: 120 }}
          className="welcome-hippo"
        >
          <div className="welcome-glow" />
          <Hippo size={210} speechText={WELCOME_COPY.greeting} />
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
