import { motion } from 'framer-motion'
import { Hippo } from '../components/Hippo'

interface WelcomeProps {
  onStart: () => void
}

export function Welcome({ onStart }: WelcomeProps) {
  return (
    <div className="section-container welcome-section">
      <motion.div
        initial={{ y: 80, opacity: 0, scale: 0.8 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ type: 'spring', damping: 14, stiffness: 180 }}
        className="welcome-card"
      >
        <div className="welcome-hippo-area">
          <Hippo size={220} waving={true} speechText="Hoppi welcomes you to Arpita's Launch Pad!" />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="welcome-title"
        >
          Arpita's Launch Pad
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="welcome-subtitle"
        >
          The official bachelorette chaos reel • "Rocket udeidebi!"
        </motion.p>

        <motion.button
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.7 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={onStart}
          className="welcome-start-btn"
        >
          <span>Tap to Start</span>
          <span className="btn-rocket-icon">🚀</span>
        </motion.button>
      </motion.div>
    </div>
  )
}
