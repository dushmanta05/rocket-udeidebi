import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'
import { AWARDS_DATA } from '../data/awards'
import { SECTIONS } from '../data/sections'
import { Placeholder } from '../components/Placeholder'
import { Pengu } from '../components/Pengu'
import { Hint, SectionHeader } from '../components/SectionHeader'
import type { StepSectionProps } from './types'

const copy = SECTIONS[5]

export function Awards({ currentStep, setTotalSteps, onNext }: StepSectionProps) {
  useEffect(() => {
    setTotalSteps(AWARDS_DATA.length)
  }, [setTotalSteps])

  const index = Math.min(currentStep, AWARDS_DATA.length - 1)
  const award = AWARDS_DATA[index]

  useEffect(() => {
    const colors = ['#ffd27a', '#ff8fb1', '#8ec5ff', '#ffffff']
    confetti({ particleCount: 70, angle: 60, spread: 70, origin: { x: 0, y: 0.7 }, colors })
    confetti({ particleCount: 70, angle: 120, spread: 70, origin: { x: 1, y: 0.7 }, colors })
  }, [index])

  return (
    <div className="section awards-section" onClick={onNext}>
      <div className="spotlight spotlight-left" />
      <div className="spotlight spotlight-right" />
      <SectionHeader copy={copy} kicker={`${copy.kicker} · Award ${index + 1} of ${AWARDS_DATA.length}`} />

      <AnimatePresence mode="wait">
        <motion.div
          key={award.id}
          className="award-stage"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9, y: -20 }}
          transition={{ type: 'spring', damping: 15 }}
        >
          <motion.div
            className="award-frame"
            initial={{ rotate: -20, scale: 0.5 }}
            animate={{ rotate: -3, scale: 1 }}
            transition={{ type: 'spring', damping: 9, stiffness: 120 }}
          >
            <Placeholder label={award.label} src={award.src} aspectRatio="1 / 1" />
          </motion.div>

          <div className="award-text">
            <div className="award-head-row">
              <span className="award-number">No. {String(index + 1).padStart(2, '0')}</span>
              <motion.div
                className="award-mic-pengu"
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: [-4, 4, -4] }}
                transition={{
                  scale: { delay: 0.2, type: 'spring', damping: 11 },
                  rotate: { repeat: Infinity, duration: 2.2, ease: 'easeInOut' }
                }}
              >
                <Pengu size={74} variant="mic" />
              </motion.div>
            </div>
            <h3 className="award-title">{award.title}</h3>
            <motion.p
              className="award-roast"
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              animate={{ clipPath: 'inset(0 0% 0 0)' }}
              transition={{ delay: 0.3, duration: 1.2, ease: 'easeOut' }}
            >
              {award.roast}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>

      <Hint>{copy.hint}</Hint>
    </div>
  )
}
