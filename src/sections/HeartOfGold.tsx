import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'
import { TRIBUTES_DATA } from '../data/tributes'
import { SECTIONS } from '../data/sections'
import { Placeholder } from '../components/Placeholder'
import { Hint, SectionHeader } from '../components/SectionHeader'
import type { StepSectionProps } from './types'

const copy = SECTIONS[13]

export function HeartOfGold({ currentStep, setTotalSteps, onNext }: StepSectionProps) {
  useEffect(() => {
    setTotalSteps(TRIBUTES_DATA.length)
  }, [setTotalSteps])

  const index = Math.min(currentStep, TRIBUTES_DATA.length - 1)
  const tribute = TRIBUTES_DATA[index]

  useEffect(() => {
    confetti({
      particleCount: 38,
      spread: 60,
      origin: { y: 0.65 },
      colors: ['#ff8fb1', '#ffd27a', '#a78bfa', '#ffffff']
    })
  }, [index])

  return (
    <div className="section heart-section" onClick={onNext}>
      <SectionHeader
        copy={copy}
        kicker={`${copy.kicker} · Truth ${index + 1} of ${TRIBUTES_DATA.length}`}
      />

      <div className="heart-layout">
        <div className="heart-side">
          <motion.div
            key={`heart-gif-${tribute.id}`}
            className="heart-hero-gif"
            initial={{ scale: (tribute.scale ?? 1) * 0.85, opacity: 0, rotate: -4 }}
            animate={{ scale: tribute.scale ?? 1, opacity: 1, rotate: 0 }}
            exit={{ scale: (tribute.scale ?? 1) * 0.85, opacity: 0 }}
            transition={{ type: 'spring', damping: 14 }}
          >
            <Placeholder label={tribute.photoLabel} src={tribute.src} aspectRatio="1 / 1" />
          </motion.div>
          <div className="heart-counter">
            <span className="heart-counter-num">{index + 1}</span>
            <span className="heart-counter-of">of {TRIBUTES_DATA.length} truths</span>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.article
            key={tribute.id}
            className="heart-card"
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.96 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <div className="heart-head-row">
              <span className="pill">{tribute.badge}</span>
              <span className="heart-badge-sub">Truth #{index + 1}</span>
            </div>

            <h3 className="heart-title">{tribute.title}</h3>
            <p className="heart-quote">"{tribute.quote}"</p>
            <p className="heart-text">{tribute.text}</p>

            <div className="heart-card-footer">
              <span className="heart-prompt">
                {index < TRIBUTES_DATA.length - 1 ? 'Tap anywhere for next truth →' : 'Next up: A Special Film for Hippo →'}
              </span>
            </div>
          </motion.article>
        </AnimatePresence>
      </div>

      <div className="heart-tray">
        {TRIBUTES_DATA.map((item, idx) => (
          <span
            key={item.id}
            className={`tray-chip ${idx === index ? 'current' : idx < index ? 'found' : ''}`}
          >
            {idx <= index ? item.badge : '✦'}
          </span>
        ))}
      </div>

      <Hint>{copy.hint}</Hint>
    </div>
  )
}
