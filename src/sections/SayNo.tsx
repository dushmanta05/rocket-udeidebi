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
  const [dodgePos, setDodgePos] = useState({ x: 0, y: 0 })
  const [dodges, setDodges] = useState(0)
  const [totalDodges, setTotalDodges] = useState(0)

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
    setDodgePos({ x: side * (120 + Math.random() * 200), y: (Math.random() - 0.5) * 140 })
    setDodges((n) => n + 1)
    setTotalDodges((n) => n + 1)
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

              <motion.div
                className="chat-bubble"
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.25, type: 'spring', damping: 12 }}
              >
                {request.question}
              </motion.div>
              <p className="chat-sub">{request.subtext}</p>

              <div className="request-actions">
                <motion.button
                  type="button"
                  className={`no-btn ${isFinalTest ? 'pulse-no' : ''}`}
                  animate={
                    isFinalTest
                      ? { scale: [1, 1.08, 1], transition: { repeat: Infinity, duration: 1.2 } }
                      : { x: dodgePos.x, y: dodgePos.y, rotate: dodges > 0 ? (dodgePos.x > 0 ? 8 : -8) : 0 }
                  }
                  whileTap={{ scale: 0.94 }}
                  onMouseEnter={!isFinalTest ? dodge : undefined}
                  onClick={handleNo}
                >
                  {SAYNO_COPY.no}
                </motion.button>
                <motion.button
                  type="button"
                  className="yes-btn"
                  animate={
                    isFinalTest
                      ? { x: dodgePos.x, y: dodgePos.y, rotate: dodges > 0 ? (dodgePos.x > 0 ? 8 : -8) : 0 }
                      : { scale: 1 + Math.min(dodges, 6) * 0.05 }
                  }
                  whileTap={{ scale: 0.92 }}
                  onMouseEnter={isFinalTest ? dodge : undefined}
                  onClick={handleYes}
                >
                  {SAYNO_COPY.yes}
                </motion.button>
              </div>

              <AnimatePresence>
                {dodges > 0 && (
                  <motion.span
                    key={dodges}
                    className="dodge-taunt"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    {isFinalTest
                      ? SAYNO_COPY.yesTaunts[(dodges - 1) % SAYNO_COPY.yesTaunts.length]
                      : SAYNO_COPY.taunts[(dodges - 1) % SAYNO_COPY.taunts.length]}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>
          </AnimatePresence>
        ) : (
          <motion.div className="verdict" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="verdict-banner">
              <h3 className="verdict-title">{SAYNO_COPY.verdictTitle}</h3>
              <p className="verdict-subtitle">{SAYNO_COPY.verdictSubtitle}</p>
            </div>
            <div className="score-row">
              <div className="score-tile">
                <span className="score-num yes">{REQUESTS_DATA.length - 1}</span>
                <span className="score-label">{SAYNO_COPY.scoreYes}</span>
              </div>
              <div className="score-tile">
                <span className="score-num no">1</span>
                <span className="score-label">{SAYNO_COPY.scoreNo}</span>
              </div>
              <div className="score-tile">
                <span className="score-num">{totalDodges}</span>
                <span className="score-label">{SAYNO_COPY.scoreEscapes}</span>
              </div>
            </div>
            <Stamp text={SAYNO_COPY.verdict} subtext={SAYNO_COPY.verdictSub} color="#7ee2a8" />
          </motion.div>
        )}
      </div>

      <Hint>{copy.hint}</Hint>
    </div>
  )
}
