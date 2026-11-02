import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'
import { REQUESTS_DATA } from '../data/requests'
import { SAYNO_COPY, SECTIONS } from '../data/sections'
import { Stamp } from '../components/Stamp'
import { Hint, SectionHeader } from '../components/SectionHeader'
import type { StepSectionProps } from './types'

const copy = SECTIONS[9]

export function SayNo({ currentStep, setTotalSteps, onNext }: StepSectionProps) {
  const [noPos, setNoPos] = useState({ x: 0, y: 0 })
  const [dodges, setDodges] = useState(0)

  useEffect(() => {
    setTotalSteps(REQUESTS_DATA.length + 1)
  }, [setTotalSteps])

  useEffect(() => {
    setNoPos({ x: 0, y: 0 })
    setDodges(0)
  }, [currentStep])

  const dodge = () => {
    setNoPos({ x: (Math.random() - 0.5) * 360, y: (Math.random() - 0.5) * 160 })
    setDodges((n) => n + 1)
  }

  const sayYes = () => {
    confetti({ particleCount: 40, spread: 70, origin: { y: 0.6 }, colors: ['#7ee2a8', '#ffd27a', '#ffffff'] })
    onNext()
  }

  const isDone = currentStep >= REQUESTS_DATA.length
  const request = REQUESTS_DATA[Math.min(currentStep, REQUESTS_DATA.length - 1)]

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
          <AnimatePresence mode="wait">
            <motion.div
              key={request.id}
              className="request-card"
              initial={{ scale: 0.85, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ x: 500, rotate: 18, opacity: 0 }}
              transition={{ type: 'spring', damping: 16 }}
            >
              <span className="pill">
                Request {request.id} of {REQUESTS_DATA.length}
              </span>
              <h3 className="request-question">"{request.question}"</h3>
              <p className="request-sub">{request.subtext}</p>

              <div className="request-actions">
                <motion.button
                  type="button"
                  className="no-btn"
                  animate={{ x: noPos.x, y: noPos.y }}
                  transition={{ type: 'spring', damping: 11, stiffness: 240 }}
                  onMouseEnter={dodge}
                  onClick={dodge}
                >
                  {SAYNO_COPY.no}
                </motion.button>
                <motion.button
                  type="button"
                  className="yes-btn"
                  animate={{ scale: 1 + Math.min(dodges, 6) * 0.04 }}
                  whileTap={{ scale: 0.92 }}
                  onClick={sayYes}
                >
                  {SAYNO_COPY.yes}
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>
        ) : (
          <motion.div className="verdict" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
            <Stamp text={SAYNO_COPY.verdict} subtext={SAYNO_COPY.verdictSub} color="#ff9f5a" />
          </motion.div>
        )}
      </div>

      <Hint>{copy.hint}</Hint>
    </div>
  )
}
