import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PenguinArt } from '../components/art/PenguinArt'
import { Placeholder } from '../components/Placeholder'

interface PenguinBirthProps {
  currentStep: number
  setTotalSteps: (steps: number) => void
  onNext: () => void
}

export function PenguinBirth({ currentStep, setTotalSteps, onNext }: PenguinBirthProps) {
  useEffect(() => {
    setTotalSteps(3)
  }, [setTotalSteps])

  return (
    <div className="section-container birth-section" onClick={onNext}>
      <AnimatePresence mode="wait">
        {currentStep === 0 && (
          <motion.div
            key="colony"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="birth-colony-stage"
          >
            <div className="colony-backdrop">
              <div className="mini-penguin-group">
                <PenguinArt size={80} className="colony-penguin" bodyColor="#64748b" flipperColor="#475569" pngSrc="" />
                <PenguinArt size={95} className="colony-penguin" bodyColor="#64748b" flipperColor="#475569" pngSrc="" />
                <PenguinArt size={75} className="colony-penguin" bodyColor="#64748b" flipperColor="#475569" pngSrc="" />
                <PenguinArt size={90} className="colony-penguin" bodyColor="#64748b" flipperColor="#475569" pngSrc="" />
              </div>
            </div>

            <motion.div
              initial={{ x: -100 }}
              animate={{ x: 80 }}
              transition={{ duration: 2.2, ease: 'easeInOut' }}
              className="lonely-penguin"
            >
              <PenguinArt size={160} />
              <div className="speech-bubble">Wait, I walk different... 🐧</div>
            </motion.div>

            <div className="scene-prompt">Click or press Space to follow the lonely penguin →</div>
          </motion.div>
        )}

        {currentStep === 1 && (
          <motion.div
            key="egg-crack"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            className="birth-egg-stage"
          >
            <motion.div
              animate={{
                rotate: [-6, 6, -8, 8, -4, 4, 0],
                scale: [1, 1.05, 1.1, 1.15, 1]
              }}
              transition={{ duration: 1.2, repeat: Infinity }}
              className="wobbling-egg-wrap"
            >
              <PenguinArt size={200} hasEgg={true} />
            </motion.div>
            <h2 className="birth-egg-title">CRACK... CRACK...</h2>
            <p className="birth-egg-subtitle">Something iconic is about to hatch!</p>
          </motion.div>
        )}

        {currentStep === 2 && (
          <motion.div
            key="baby-born"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="birth-reveal-stage"
          >
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="birth-flash"
            />

            <motion.div
              initial={{ scale: 0.2, rotate: -15, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ type: 'spring', damping: 10, stiffness: 160 }}
              className="baby-photo-frame"
            >
              <Placeholder
                label="PHOTO: Baby Arpita (1999)"
                width={340}
                aspectRatio="1"
                tilt={-3}
              />
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="birth-text"
            >
              <h2>Arpita is Born!</h2>
              <p>The universe gave us our Jagatmata, Tubelight, and Penguin all in one.</p>
              <span className="birth-tag">Catchphrase unlocked: "Rocket udeidebi!" 🚀</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
