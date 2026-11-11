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

      <div className="award-layout">
        <div className="award-side">
          <motion.div
            key={`award-gif-${award.id}`}
            className="award-hero-gif"
            initial={{ scale: 0.8, opacity: 0, rotate: -6 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', damping: 13 }}
          >
            <Placeholder label={award.label} src={award.src} aspectRatio="1 / 1" />
          </motion.div>
          <div className="award-counter">
            <span className="award-counter-num">{index + 1}</span>
            <span className="award-counter-of">of {AWARDS_DATA.length} honors</span>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.article
            key={award.id}
            className="award-card"
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.96 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <div className="award-head-row">
              <span className="pill">Award {String(index + 1).padStart(2, '0')}</span>
              <motion.div
                className="award-mic-pengu"
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: [-4, 4, -4] }}
                transition={{
                  scale: { delay: 0.2, type: 'spring', damping: 11 },
                  rotate: { repeat: Infinity, duration: 2.2, ease: 'easeInOut' }
                }}
              >
                <Pengu size={68} variant="mic" />
              </motion.div>
            </div>
            <h3 className="award-title">{award.title}</h3>
            <p className="award-roast">{award.roast}</p>
          </motion.article>
        </AnimatePresence>
      </div>

      <Hint>{copy.hint}</Hint>
    </div>
  )
}
