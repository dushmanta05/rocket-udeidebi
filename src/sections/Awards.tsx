import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'
import { AWARDS_DATA } from '../data/awards'
import { TrophyArt } from '../components/art/TrophyArt'
import { Placeholder } from '../components/Placeholder'

interface AwardsProps {
  currentStep: number
  setTotalSteps: (steps: number) => void
  onNext: () => void
}

export function Awards({ currentStep, setTotalSteps, onNext }: AwardsProps) {
  useEffect(() => {
    setTotalSteps(AWARDS_DATA.length)
  }, [setTotalSteps])

  const award = AWARDS_DATA[Math.min(currentStep, AWARDS_DATA.length - 1)]

  useEffect(() => {
    confetti({
      particleCount: 25,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#facc15', '#f59e0b', '#f97316']
    })
  }, [currentStep])

  return (
    <div className="section-container awards-section" onClick={onNext}>
      <div className="gala-spotlight-left" />
      <div className="gala-spotlight-right" />

      <div className="section-header">
        <span className="chapter-badge gold-badge">👑 Annual Gala Accolades 👑</span>
        <h2 className="section-heading gala-heading">The Arpita Hall of Fame</h2>
        <p className="section-subtext gala-subtext">Recognizing unparalleled lifetime achievements</p>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={award.id}
          initial={{ opacity: 0, scale: 0.85, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: -20 }}
          transition={{ type: 'spring', damping: 14 }}
          className="award-gold-plaque"
        >
          <div className="plaque-corner top-left" />
          <div className="plaque-corner top-right" />
          <div className="plaque-corner bottom-left" />
          <div className="plaque-corner bottom-right" />

          <div className="award-visual-row">
            <motion.div
              initial={{ rotate: -15, scale: 0.8 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ type: 'spring', damping: 10 }}
              className="award-trophy-wrap"
            >
              <TrophyArt size={190} />
            </motion.div>

            <motion.div
              initial={{ rotate: 180, scale: 0.4 }}
              animate={{ rotate: -3, scale: 1 }}
              transition={{ duration: 0.45 }}
              className="award-photo-frame"
            >
              <Placeholder
                label={award.label}
                src={award.src}
                width={200}
                aspectRatio="1"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="award-details"
          >
            <span className="award-number-badge">CATEGORY #{currentStep + 1}</span>
            <h3 className="award-title">{award.title}</h3>
            <p className="award-roast">"{award.roast}"</p>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <div className="step-indicator-bar gala-step-bar">
        Award {currentStep + 1} of {AWARDS_DATA.length} • Click to reveal next award →
      </div>
    </div>
  )
}
