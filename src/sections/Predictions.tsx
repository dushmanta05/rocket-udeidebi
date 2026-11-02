import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PREDICTIONS_DATA } from '../data/predictions'
import { PREDICTIONS_COPY, SECTIONS } from '../data/sections'
import { CrystalBallArt } from '../components/art/CrystalBallArt'
import { Hint, SectionHeader } from '../components/SectionHeader'
import type { StepSectionProps } from './types'

const copy = SECTIONS[11]

function Sparkle({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path d="M12 0 L14.2 9.8 L24 12 L14.2 14.2 L12 24 L9.8 14.2 L0 12 L9.8 9.8 Z" fill="currentColor" />
    </svg>
  )
}

export function Predictions({ currentStep, setTotalSteps, onNext }: StepSectionProps) {
  const [swirling, setSwirling] = useState(false)

  useEffect(() => {
    setTotalSteps(PREDICTIONS_DATA.length)
  }, [setTotalSteps])

  const index = Math.min(currentStep, PREDICTIONS_DATA.length - 1)
  const prediction = PREDICTIONS_DATA[index]
  const revealed = PREDICTIONS_DATA.slice(0, index)

  const handleTap = () => {
    setSwirling(true)
    setTimeout(() => setSwirling(false), 800)
    onNext()
  }

  return (
    <div className="section predictions-section" onClick={handleTap}>
      <SectionHeader copy={copy} />

      <div className="oracle-layout">
        <motion.div
          className="orb"
          animate={swirling ? { scale: [1, 1.12, 1], rotate: [0, 8, 0] } : { y: [0, -8, 0] }}
          transition={swirling ? { duration: 0.8 } : { duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="orb-aura" />
          <CrystalBallArt size={230} isSwirling={swirling} />
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={prediction.id}
            className="fortune-card"
            initial={{ rotateY: 90, opacity: 0, scale: 0.8 }}
            animate={{ rotateY: 0, opacity: 1, scale: 1 }}
            exit={{ x: 260, y: -40, rotate: 10, scale: 0.4, opacity: 0 }}
            transition={{ type: 'spring', damping: 15 }}
          >
            <Sparkle className="fortune-sparkle tl" />
            <Sparkle className="fortune-sparkle br" />
            <span className="fortune-num">Vision {index + 1} of {PREDICTIONS_DATA.length}</span>
            <p className="fortune-text">{prediction.text}</p>
            <span className="fortune-author">
              {PREDICTIONS_COPY.foreseenBy} <strong>{prediction.author}</strong>
            </span>
          </motion.div>
        </AnimatePresence>

        <div className="fortune-stack">
          {revealed.length > 0 && <span className="fortune-stack-label">{PREDICTIONS_COPY.revealed}</span>}
          {revealed.map((item, idx) => (
            <motion.div
              key={item.id}
              className="fortune-mini"
              initial={{ opacity: 0, x: -40, rotate: 0 }}
              animate={{ opacity: 1, x: 0, rotate: idx % 2 === 0 ? -3 : 3 }}
            >
              <span>{item.author}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <Hint>{copy.hint}</Hint>
    </div>
  )
}
