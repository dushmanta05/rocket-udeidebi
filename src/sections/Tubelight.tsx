import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TUBELIGHT_STEPS } from '../data/tubelight'
import { TubelightArt } from '../components/art/TubelightArt'

interface TubelightProps {
  currentStep: number
  setTotalSteps: (steps: number) => void
  onNext: () => void
}

export function Tubelight({ currentStep, setTotalSteps, onNext }: TubelightProps) {
  useEffect(() => {
    setTotalSteps(TUBELIGHT_STEPS.length)
  }, [setTotalSteps])

  const activeIndex = Math.min(currentStep, TUBELIGHT_STEPS.length - 1)
  const activeStep = TUBELIGHT_STEPS[activeIndex]

  return (
    <div
      className={`section-container tubelight-section ${activeIndex === 4 ? 'full-bright' : ''}`}
      onClick={onNext}
    >
      <div className="section-header">
        <span className="chapter-badge gold-badge">⚡ Voltage Laboratory ⚡</span>
        <h2 className="section-heading tubelight-heading">The Tubelight Moment</h2>
        <p className="section-subtext tubelight-subtext">Tracking the neural propagation of a punchline</p>
      </div>

      <div className="tubelight-fixture-area">
        <TubelightArt size={360} brightness={activeStep.brightness} />
      </div>

      <div className="tubelight-dialogue-stage">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep.step}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className={`tubelight-dialog-bubble step-${activeStep.step}`}
          >
            <div className="buffering-indicator">
              <span className="buffer-bar" style={{ width: `${(activeStep.step / 5) * 100}%` }} />
            </div>
            <p className="tubelight-text">{activeStep.text}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="step-indicator-bar tubelight-step-bar">
        Phase {activeIndex + 1} of 5 • Click to advance comprehension stream →
      </div>
    </div>
  )
}
