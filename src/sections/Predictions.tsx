import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PREDICTIONS_DATA } from '../data/predictions'
import { PREDICTIONS_COPY, SECTIONS } from '../data/sections'
import { Pengu } from '../components/Pengu'
import { Hint, SectionHeader } from '../components/SectionHeader'
import type { StepSectionProps } from './types'

const copy = SECTIONS[12]

const PENGU_POSES = [
  { className: 'pos-side-right', rotate: 6 },
  { className: 'pos-side-left', rotate: -6 },
  { className: 'pos-bottom-right', rotate: 4 },
  { className: 'pos-bottom-left', rotate: -4 },
  { className: 'pos-deck-right', rotate: 8 }
]

function Sparkle({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path d="M12 0 L14.2 9.8 L24 12 L14.2 14.2 L12 24 L9.8 14.2 L0 12 L9.8 9.8 Z" fill="currentColor" />
    </svg>
  )
}

export function Predictions({ currentStep, setTotalSteps, onNext }: StepSectionProps) {
  useEffect(() => {
    setTotalSteps(PREDICTIONS_DATA.length)
  }, [setTotalSteps])

  const index = Math.min(currentStep, PREDICTIONS_DATA.length - 1)
  const prediction = PREDICTIONS_DATA[index]
  const revealed = PREDICTIONS_DATA.slice(0, index)
  const pose = PENGU_POSES[index % PENGU_POSES.length]

  return (
    <div className="section predictions-section" onClick={onNext}>
      <SectionHeader copy={copy} />

      <div className="oracle-layout">
        <div className="fortune-arena">
          <AnimatePresence mode="wait">
            <motion.div
              key={prediction.id}
              className="fortune-bundle"
              initial={{ opacity: 0, scale: 0.9, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -16, transition: { duration: 0.24 } }}
              transition={{ type: 'spring', damping: 16, stiffness: 140 }}
            >
              <div
                className={`pengu-teller-wrap ${pose.className}`}
                style={{ transform: `rotate(${pose.rotate}deg)` }}
              >
                <Pengu size={130} variant={prediction.text.includes('Rocket udeidebi') ? 'rocket' : 'future'} />
              </div>

              <div className="fortune-card">
                <Sparkle className="fortune-sparkle tl" />
                <Sparkle className="fortune-sparkle br" />
                <span className="fortune-num">Vision {index + 1} of {PREDICTIONS_DATA.length}</span>
                <p className="fortune-text">{prediction.text}</p>
                <span className="fortune-author">
                  {PREDICTIONS_COPY.foreseenBy} <strong>{prediction.author}</strong>
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="revealed-tray-wrap">
          {revealed.length > 0 && <span className="revealed-tray-label">{PREDICTIONS_COPY.revealed}</span>}
          {revealed.length > 0 && (
            <div className="revealed-tray" aria-label="Foreseen futures">
              {revealed.map((item, idx) => (
                <div key={item.id} className="revealed-chip">
                  <span className="revealed-idx">#{idx + 1}</span>
                  <span className="revealed-author">{item.author}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Hint>{copy.hint}</Hint>
    </div>
  )
}
