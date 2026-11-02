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

  const isDone = currentStep >= REQUESTS_DATA.length
  const request = REQUESTS_DATA[Math.min(currentStep, REQUESTS_DATA.length - 1)]

  const dodge = () => {
    const side = Math.random() < 0.5 ? -1 : 1
    setNoPos({ x: side * (120 + Math.random() * 200), y: (Math.random() - 0.5) * 140 })
    setDodges((n) => n + 1)
  }

  const sayYes = () => {
    confetti({ particleCount: 40, spread: 70, origin: { y: 0.65 }, colors: ['#7ee2a8', '#ffd27a', '#ffffff'] })
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
          <AnimatePresence mode="wait">
            <motion.div
              key={request.id}
              className="chat-card"
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ x: 400, rotate: 10, opacity: 0, transition: { duration: 0.4 } }}
              transition={{ type: 'spring', damping: 16 }}
            >
              <div className="chat-head">
                <span className="chat-avatar">{request.from.charAt(0)}</span>
                <div>
                  <span className="chat-from">{request.from}</span>
                  <span className="chat-meta">
                    {SAYNO_COPY.requestLabel} {request.id} / {REQUESTS_DATA.length}
                  </span>
                </div>
              </div>

              <motion.div className="chat-bubble" initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.25, type: 'spring', damping: 12 }}>
                {request.question}
              </motion.div>
              <p className="chat-sub">{request.subtext}</p>

              <div className="request-actions">
                <motion.button
                  type="button"
                  className="no-btn"
                  animate={{ x: noPos.x, y: noPos.y, rotate: dodges > 0 ? (noPos.x > 0 ? 8 : -8) : 0 }}
                  transition={{ type: 'spring', damping: 11, stiffness: 240 }}
                  onMouseEnter={dodge}
                  onClick={dodge}
                >
                  {SAYNO_COPY.no}
                </motion.button>
                <motion.button
                  type="button"
                  className="yes-btn"
                  animate={{ scale: 1 + Math.min(dodges, 6) * 0.05 }}
                  whileTap={{ scale: 0.92 }}
                  onClick={sayYes}
                >
                  {SAYNO_COPY.yes}
                </motion.button>
              </div>

              <AnimatePresence>
                {dodges > 0 && (
                  <motion.span key={dodges} className="dodge-taunt" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                    {SAYNO_COPY.taunts[(dodges - 1) % SAYNO_COPY.taunts.length]}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>
          </AnimatePresence>
        ) : (
          <motion.div className="verdict" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Stamp text={SAYNO_COPY.verdict} subtext={SAYNO_COPY.verdictSub} color="#ff9f5a" />
          </motion.div>
        )}
      </div>

      <Hint>{copy.hint}</Hint>
    </div>
  )
}
