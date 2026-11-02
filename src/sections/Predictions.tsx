import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PREDICTIONS_DATA } from '../data/predictions'
import { CrystalBallArt } from '../components/art/CrystalBallArt'

interface PredictionsProps {
  currentStep: number
  setTotalSteps: (steps: number) => void
  onNext: () => void
}

export function Predictions({ currentStep, setTotalSteps, onNext }: PredictionsProps) {
  const [swirling, setSwirling] = useState(false)

  useEffect(() => {
    setTotalSteps(PREDICTIONS_DATA.length)
  }, [setTotalSteps])

  const activeIndex = Math.min(currentStep, PREDICTIONS_DATA.length - 1)
  const currentPrediction = PREDICTIONS_DATA[activeIndex]

  const handleTap = () => {
    setSwirling(true)
    setTimeout(() => setSwirling(false), 700)
    onNext()
  }

  return (
    <div className="section-container predictions-section" onClick={handleTap}>
      <div className="section-header">
        <span className="chapter-badge purple-badge">Astral Forecast</span>
        <h2 className="section-heading">Arpita's Married Life: Predicted</h2>
        <p className="section-subtext">Tap the crystal orb to consult the mystic foresight</p>
      </div>

      <div className="predictions-stage">
        <motion.div
          animate={swirling ? { scale: [1, 1.15, 1], filter: ['drop-shadow(0 0 10px #c084fc)', 'drop-shadow(0 0 25px #c084fc)', 'drop-shadow(0 0 10px #c084fc)'] } : {}}
          className="crystal-ball-wrap"
        >
          <CrystalBallArt size={220} isSwirling={swirling} />
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentPrediction.id}
            initial={{ rotateY: 90, scale: 0.7, opacity: 0 }}
            animate={{ rotateY: 0, scale: 1, opacity: 1 }}
            exit={{ rotateY: -90, scale: 0.7, opacity: 0 }}
            transition={{ type: 'spring', damping: 14 }}
            className="prediction-card"
          >
            <div className="prediction-symbol">🔮</div>
            <p className="prediction-text">"{currentPrediction.text}"</p>
            <div className="prediction-author">— {currentPrediction.author}</div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="step-indicator-bar">
        Vision {activeIndex + 1} of {PREDICTIONS_DATA.length} • Click to peer further into destiny →
      </div>
    </div>
  )
}
