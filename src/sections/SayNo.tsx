import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'
import { REQUESTS_DATA } from '../data/requests'
import { Stamp } from '../components/Stamp'

interface SayNoProps {
  currentStep: number
  setTotalSteps: (steps: number) => void
  onNext: () => void
}

export function SayNo({ currentStep, setTotalSteps, onNext }: SayNoProps) {
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 })
  const [yesScale, setYesScale] = useState(1)

  useEffect(() => {
    setTotalSteps(REQUESTS_DATA.length + 1)
  }, [setTotalSteps])

  const dodgeNo = () => {
    const rx = (Math.random() - 0.5) * 180
    const ry = (Math.random() - 0.5) * 120
    setNoPosition({ x: rx, y: ry })
    setYesScale((prev) => Math.min(prev + 0.15, 1.8))
  }

  const handleYes = () => {
    setNoPosition({ x: 0, y: 0 })
    setYesScale(1)
    confetti({
      particleCount: 25,
      spread: 60,
      origin: { y: 0.6 }
    })
    onNext()
  }

  const isCompleted = currentStep >= REQUESTS_DATA.length
  const currentRequest = REQUESTS_DATA[Math.min(currentStep, REQUESTS_DATA.length - 1)]

  return (
    <div className="section-container say-no-section">
      <div className="section-header">
        <span className="chapter-badge">🚫 Reflex Challenge 🚫</span>
        <h2 className="section-heading">Mission: Say "No" (Impossible)</h2>
        <p className="section-subtext">Scientific test: Can Arpita physically decline a request?</p>
      </div>

      <div className="say-no-stage">
        {!isCompleted ? (
          <AnimatePresence mode="wait">
            <motion.div
              key={currentRequest.id}
              initial={{ scale: 0.85, opacity: 0, y: 35 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: -35 }}
              className="pop-challenge-card"
            >
              <div className="challenge-bubble-tail" />
              <span className="request-step-badge">CHALLENGE {currentRequest.id} OF 5</span>
              <h3 className="request-question">"{currentRequest.question}"</h3>
              <p className="request-subtext">{currentRequest.subtext}</p>

              <div className="request-buttons-row">
                <motion.button
                  animate={{ scale: yesScale }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleYes}
                  className="say-yes-btn"
                >
                  YES, OF COURSE! 💖
                </motion.button>

                <motion.button
                  animate={{
                    x: noPosition.x,
                    y: noPosition.y,
                    scale: Math.max(0.5, 1 - (yesScale - 1) * 0.5)
                  }}
                  transition={{ type: 'spring', damping: 12 }}
                  onMouseEnter={dodgeNo}
                  onClick={dodgeNo}
                  className="say-no-btn"
                >
                  No...
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>
        ) : (
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="verdict-wrapper"
          >
            <Stamp
              text="VERDICT: CANNOT SAY NO"
              subtext="ALL 5 REQUESTS ACCEPTED • JAGATMATA STATUS PERMANENT"
              color="#ea580c"
            />
          </motion.div>
        )}
      </div>

      <div className="step-indicator-bar">
        {!isCompleted ? `Trial ${currentStep + 1} of 5 • Try clicking No if you dare` : 'Test Concluded • Arrow key to advance →'}
      </div>
    </div>
  )
}
