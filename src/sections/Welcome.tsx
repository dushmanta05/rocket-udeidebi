import { motion } from 'framer-motion'
import { Hippo } from '../components/Hippo'

interface WelcomeProps {
  onStart: () => void
}

export function Welcome({ onStart }: WelcomeProps) {
  return (
    <div className="section-container welcome-section">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="welcome-stage-content"
      >
        <div className="welcome-pedestal">
          <div className="pedestal-glow-ring" />
          <Hippo size={210} waving={true} speechText="Hoppi welcomes you! 🎉" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="welcome-hero-text"
        >
          <span className="party-kicker-badge">The Bachelorette Special</span>
          <h1 className="welcome-main-title">
            <span className="title-gradient">Arpita's</span> Launch Pad
          </h1>
          <p className="welcome-lead">
            A celebration & chaotic roast reel for our favourite Jagatmata.
          </p>
          <div className="welcome-quote">"Rocket udeidebi!" 🚀</div>
        </motion.div>

        <motion.button
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          onClick={onStart}
          className="welcome-launch-btn"
        >
          <span>Begin the Journey</span>
          <span className="btn-icon">→</span>
        </motion.button>
      </motion.div>
    </div>
  )
}
