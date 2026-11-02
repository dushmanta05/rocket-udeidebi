import { motion } from 'framer-motion'
import { Hippo } from '../components/Hippo'

interface WelcomeProps {
  onStart: () => void
}

export function Welcome({ onStart }: WelcomeProps) {
  return (
    <div className="section-container welcome-section">
      <div className="welcome-stage-ambient">
        <div className="ambient-sparkle star-1">✨</div>
        <div className="ambient-sparkle star-2">⭐</div>
        <div className="ambient-sparkle star-3">🚀</div>
        <div className="ambient-sparkle star-4">💫</div>
        <div className="ambient-sparkle star-5">✨</div>
      </div>

      <motion.div
        initial={{ y: 50, opacity: 0, scale: 0.9 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ type: 'spring', damping: 16, stiffness: 180 }}
        className="welcome-stage-content"
      >
        <div className="welcome-pedestal">
          <div className="pedestal-glow-ring" />
          <Hippo size={220} waving={true} speechText="Hoppi welcomes you to Arpita's Launch Pad! 🎉" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="welcome-hero-text"
        >
          <span className="party-kicker-badge">🔥 THE BACHELORETTE SPECIAL 🔥</span>
          <h1 className="welcome-main-title">
            <span className="title-gradient">Arpita's</span> Launch Pad
          </h1>
          <p className="welcome-lead">
            A chaotic tribute to our favourite Jagatmata, Tubelight & Penguin.
          </p>
          <div className="welcome-quote">"Rocket udeidebi!" 🚀</div>
        </motion.div>

        <motion.button
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.45 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={onStart}
          className="welcome-launch-btn"
        >
          <span className="btn-glow-layer" />
          <span className="btn-label">Tap to Launch</span>
          <span className="btn-icon">🚀</span>
        </motion.button>
      </motion.div>
    </div>
  )
}
