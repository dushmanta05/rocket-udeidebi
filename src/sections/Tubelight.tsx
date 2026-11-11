import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'
import { TUBELIGHT_STEPS } from '../data/tubelight'
import { SECTIONS, TUBELIGHT_COPY } from '../data/sections'
import { Placeholder } from '../components/Placeholder'
import { Pengu } from '../components/Pengu'
import { Hint, SectionHeader } from '../components/SectionHeader'
import type { StepSectionProps } from './types'

const copy = SECTIONS[7]

export function Tubelight({ currentStep, setTotalSteps, onNext }: StepSectionProps) {
  useEffect(() => {
    setTotalSteps(TUBELIGHT_STEPS.length)
  }, [setTotalSteps])

  const index = Math.min(currentStep, TUBELIGHT_STEPS.length - 1)
  const active = TUBELIGHT_STEPS[index]
  const isDone = index === TUBELIGHT_STEPS.length - 1
  const percent = Math.round(active.brightness * 100)

  useEffect(() => {
    if (isDone) {
      confetti({ particleCount: 80, spread: 110, origin: { y: 0.3 }, colors: ['#ffffff', '#fff3b0', '#8ec5ff'] })
    }
  }, [isDone])

  return (
    <div
      className={`section tubelight-section ${isDone ? 'lit' : ''}`}
      style={{ ['--glow' as string]: active.brightness }}
      onClick={onNext}
    >
      <div className="room-light" />
      <SectionHeader copy={copy} />

      <div className="tubelight-layout">
        <div className="tube-room">
          <div className="tube-fixture">
            <div className={`tube ${active.flicker ? 'flicker' : ''}`} />
            <div className="tube-cap left" />
            <div className="tube-cap right" />
          </div>
          <div className="tube-beam" />
          <div className="tube-subject">
            <Placeholder label="Photo: Arpita's tubelight face" aspectRatio="1 / 1" />
          </div>
          <div className="meter">
            <div className="meter-head">
              <span>{TUBELIGHT_COPY.meterLabel}</span>
              <strong>{isDone ? TUBELIGHT_COPY.done : `${percent}%`}</strong>
            </div>
            <div className="meter-bar">
              <motion.div className="meter-fill" animate={{ width: `${Math.max(percent, 3)}%` }} transition={{ duration: 0.8 }} />
            </div>
          </div>
          {isDone && (
            <motion.div
              className="tubelight-energy-wrap"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', damping: 11 }}
            >
              <Pengu size={100} variant="energy" />
            </motion.div>
          )}
        </div>

        <div className="tube-log">
          <AnimatePresence initial={false}>
            {TUBELIGHT_STEPS.slice(0, index + 1).map((step, idx) => (
              <motion.div
                key={step.step}
                className={`log-row speaker-${step.speaker} ${idx === index ? 'latest' : ''}`}
                initial={{ opacity: 0, x: 30, scale: 0.95 }}
                animate={{ opacity: idx === index ? 1 : 0.55, x: 0, scale: 1 }}
                transition={{ type: 'spring', damping: 18 }}
              >
                <span className="log-time">{step.time}</span>
                <p className="log-text">{step.text}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <Hint>{copy.hint}</Hint>
    </div>
  )
}
