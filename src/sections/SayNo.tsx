import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'
import { REQUESTS_DATA } from '../data/requests'
import { SAYNO_COPY, SECTIONS } from '../data/sections'
import { Stamp } from '../components/Stamp'
import { Pengu } from '../components/Pengu'
import { Hint, SectionHeader } from '../components/SectionHeader'
import type { StepSectionProps } from './types'

const copy = SECTIONS[10]
const SCENARIO_VARIANTS = ['please', 'bags', 'jagatMata', 'asking', 'chair', 'believe'] as const
const SIDE_QUOTES = [
  'A wild project lead appears! Can you say NO?',
  'Wait, this bag weighs 20 kilos... resist!',
  'Jagatmata instincts kicking in...',
  '7:00 AM?! You haven’t even had chai!',
  'NOT THE CHAIR! Anything but the chair!',
  'Believe in yourself, Hippo! Say NO right now!'
]

export function SayNo({ currentStep, setTotalSteps, onNext }: StepSectionProps) {
  const [dodgePos, setDodgePos] = useState({ x: 0, y: 0 })
  const [dodges, setDodges] = useState(0)

  useEffect(() => {
    setTotalSteps(REQUESTS_DATA.length + 1)
  }, [setTotalSteps])

  useEffect(() => {
    setDodgePos({ x: 0, y: 0 })
    setDodges(0)
  }, [currentStep])

  const isDone = currentStep >= REQUESTS_DATA.length
  const requestIndex = Math.min(currentStep, REQUESTS_DATA.length - 1)
  const request = REQUESTS_DATA[requestIndex]
  const isFinalTest = requestIndex === REQUESTS_DATA.length - 1

  useEffect(() => {
    if (isDone) {
      confetti({ particleCount: 110, spread: 110, origin: { y: 0.5 }, colors: ['#7ee2a8', '#ffd27a', '#ff8fb1', '#ffffff'] })
    }
  }, [isDone])

  const dodge = () => {
    const side = Math.random() < 0.5 ? -1 : 1
    setDodgePos({ x: side * (60 + Math.random() * 50), y: (Math.random() - 0.5) * 20 })
    setDodges((n) => n + 1)
  }

  const handleYes = () => {
    if (isFinalTest) {
      dodge()
      return
    }
    confetti({ particleCount: 40, spread: 70, origin: { y: 0.65 }, colors: ['#7ee2a8', '#ffd27a', '#ffffff'] })
    onNext()
  }

  const handleNo = () => {
    if (!isFinalTest) {
      dodge()
      return
    }
    confetti({ particleCount: 120, spread: 110, origin: { y: 0.5 }, colors: ['#7ee2a8', '#ffd27a', '#ff8fb1', '#ffffff'] })
    onNext()
  }

  return (
    <div className="section sayno-section">
      <SectionHeader
        copy={copy}
        title={
          <>
            {copy.title} <span className="giant-no">NO</span>
          </>
        }
      />

      <div className="sayno-stage">
        {!isDone ? (
          <div className="sayno-layout">
            <div className="sayno-side">
              <motion.div
                key={`side-pengu-${requestIndex}`}
                className="sayno-hero-wrap"
                initial={{ scale: 0.85, opacity: 0, x: -20 }}
                animate={{ scale: 1, opacity: 1, x: 0 }}
                transition={{ type: 'spring', damping: 14 }}
              >
                <span className="side-speech-bubble">
                  {SIDE_QUOTES[requestIndex % SIDE_QUOTES.length]}
                </span>
                <Pengu
                  size={220}
                  variant={SCENARIO_VARIANTS[requestIndex % SCENARIO_VARIANTS.length]}
                />
              </motion.div>
              <div className="sayno-counter">
                <span className="sayno-counter-num">{requestIndex + 1}</span>
                <span className="sayno-counter-of">of {REQUESTS_DATA.length} tests</span>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={request.id}
                className="sayno-card"
                initial={{ opacity: 0, x: 30, scale: 0.96 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -30, scale: 0.96 }}
                transition={{ type: 'spring', damping: 16 }}
              >
                <div className="sayno-card-head">
                  <span className="pill">
                    {isFinalTest ? 'Final Boss' : `Test ${String(request.id).padStart(2, '0')}`}
                  </span>
                  <span className="sayno-from-badge">From: {request.from}</span>
                </div>

                <div className="sayno-card-content">
                  <h3 className="sayno-question">{request.question}</h3>
                  <p className="sayno-roast">{request.subtext}</p>
                </div>

                <div className="sayno-actions">
                  <div className="sayno-btn-arena">
                    <motion.div
                      className="no-btn-group"
                      animate={
                        isFinalTest
                          ? { scale: [1, 1.06, 1], transition: { repeat: Infinity, duration: 1.2 } }
                          : { x: dodgePos.x, y: dodgePos.y, rotate: dodges > 0 ? (dodgePos.x > 0 ? 6 : -6) : 0 }
                      }
                      transition={{ type: 'spring', damping: 12, stiffness: 260 }}
                    >
                      <motion.button
                        type="button"
                        className={`no-btn ${isFinalTest ? 'pulse-no' : ''}`}
                        whileTap={{ scale: 0.94 }}
                        onMouseEnter={!isFinalTest ? dodge : undefined}
                        onClick={handleNo}
                      >
                        {SAYNO_COPY.no}
                      </motion.button>
                    </motion.div>

                    <motion.button
                      type="button"
                      className="yes-btn"
                      animate={
                        isFinalTest
                          ? { x: dodgePos.x, y: dodgePos.y, rotate: dodges > 0 ? (dodgePos.x > 0 ? 6 : -6) : 0 }
                          : { scale: 1 + Math.min(dodges, 5) * 0.04 }
                      }
                      transition={{ type: 'spring', damping: 12, stiffness: 260 }}
                      whileTap={{ scale: 0.92 }}
                      onMouseEnter={isFinalTest ? dodge : undefined}
                      onClick={handleYes}
                    >
                      {SAYNO_COPY.yes}
                    </motion.button>
                  </div>

                  <div className="sayno-taunt-bar">
                    <AnimatePresence mode="wait">
                      {dodges > 0 && (
                        <motion.span
                          key={dodges}
                          className="sayno-taunt-text"
                          initial={{ opacity: 0, y: 4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                        >
                          {isFinalTest
                            ? SAYNO_COPY.yesTaunts[(dodges - 1) % SAYNO_COPY.yesTaunts.length]
                            : SAYNO_COPY.taunts[(dodges - 1) % SAYNO_COPY.taunts.length]}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        ) : (
          <motion.div className="verdict" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="verdict-banner">
              <h3 className="verdict-title">{SAYNO_COPY.verdictTitle}</h3>
              <p className="verdict-subtitle">{SAYNO_COPY.verdictSubtitle}</p>
            </div>
            <motion.div
              className="verdict-dancer"
              initial={{ scale: 0, rotate: -15 }}
              animate={{ scale: 1, rotate: [-6, 6, -6] }}
              transition={{
                scale: { type: 'spring', damping: 11 },
                rotate: { repeat: Infinity, duration: 2, ease: 'easeInOut' }
              }}
            >
              <Pengu size={140} variant="dance2" />
            </motion.div>
            <Stamp text={SAYNO_COPY.verdict} subtext={SAYNO_COPY.verdictSub} color="#7ee2a8" />
          </motion.div>
        )}
      </div>

      {!isDone && (
        <div className="sayno-tray">
          {REQUESTS_DATA.map((item, idx) => (
            <span
              key={item.id}
              className={`tray-chip ${idx < requestIndex ? 'found' : idx === requestIndex ? 'current' : ''}`}
            >
              {idx === REQUESTS_DATA.length - 1 ? 'Final Boss' : item.from}
            </span>
          ))}
        </div>
      )}

      <Hint>{copy.hint}</Hint>
    </div>
  )
}
