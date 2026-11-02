import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import confetti from 'canvas-confetti'
import { FINALE_COPY, SECTIONS } from '../data/sections'
import { useWishes } from '../hooks/useWishes'
import { Pengu } from '../components/Pengu'
import { Hippo } from '../components/Hippo'
import { PenguinRocketArt } from '../components/art/PenguinRocketArt'
import { Hint } from '../components/SectionHeader'
import type { StepSectionProps } from './types'

const copy = SECTIONS[13]
const STEP_PAD = 0
const STEP_ARRIVE = 1
const STEP_BOARD = 2
const STEP_LAUNCH = 3
const STEP_THANKS = 4

function useCountdown(active: boolean) {
  const [tick, setTick] = useState(-1)

  useEffect(() => {
    if (!active) {
      setTick(-1)
      return
    }
    setTick(0)
    const timers = FINALE_COPY.countdown.map((_, i) => setTimeout(() => setTick(i + 1), (i + 1) * 900))
    return () => timers.forEach(clearTimeout)
  }, [active])

  return tick
}

export function LaunchFinale({ currentStep, setTotalSteps, onNext }: StepSectionProps) {
  const reduceMotion = useReducedMotion()
  const wishes = useWishes()
  const tick = useCountdown(currentStep === STEP_LAUNCH)
  const launched = currentStep === STEP_LAUNCH && tick >= FINALE_COPY.countdown.length

  useEffect(() => {
    setTotalSteps(5)
  }, [setTotalSteps])

  useEffect(() => {
    if (currentStep === STEP_BOARD) {
      setTimeout(() => confetti({ particleCount: 40, spread: 60, origin: { x: 0.4, y: 0.5 }, colors: ['#ff8fb1', '#ffffff'] }), 900)
    }
    if (currentStep === STEP_THANKS) {
      const colors = ['#ffd27a', '#ff8fb1', '#8ec5ff', '#b9a6ff']
      confetti({ particleCount: 120, spread: 120, origin: { y: 0.4 }, colors })
    }
  }, [currentStep])

  const rocketState =
    currentStep === STEP_PAD
      ? { left: '-30%', bottom: '55%', rotate: 0, opacity: 0 }
      : launched
        ? { left: '38%', bottom: '160%', rotate: -50, opacity: 1 }
        : currentStep === STEP_LAUNCH
          ? { left: '38%', bottom: '24%', rotate: -50, opacity: 1 }
          : { left: '30%', bottom: '30%', rotate: 0, opacity: 1 }

  if (currentStep >= STEP_THANKS) {
    return (
      <div className="section thanks-section" onClick={onNext}>
        <div className="wish-rain" aria-hidden="true">
          {wishes.map((wish, idx) => (
            <span
              key={`${wish.name}-${idx}`}
              className="wish-star"
              style={{ left: `${8 + ((idx * 23) % 84)}%`, animationDelay: `${idx * 0.9}s` }}
            >
              {wish.name}
            </span>
          ))}
        </div>

        <div className="thanks-layout">
          <motion.div initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: 'spring', damping: 12 }}>
            <Hippo size={170} speechText={FINALE_COPY.hippoSays} />
          </motion.div>

          <motion.div
            className="thanks-card"
            initial={{ scale: 0.8, opacity: 0, rotate: -3 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ delay: 0.3, type: 'spring', damping: 14 }}
          >
            <h2 className="script-title huge">{FINALE_COPY.thankYouTitle}</h2>
            {FINALE_COPY.thankYouNote.map((line) => (
              <p key={line} className="thanks-line">
                {line}
              </p>
            ))}
            <span className="thanks-sign">{FINALE_COPY.signOff}</span>
          </motion.div>
        </div>
      </div>
    )
  }

  const title =
    currentStep === STEP_PAD
      ? FINALE_COPY.padTitle
      : currentStep === STEP_ARRIVE
        ? FINALE_COPY.arrivalTitle
        : currentStep === STEP_BOARD
          ? FINALE_COPY.boardTitle
          : ''

  return (
    <div className="section launch-section" onClick={onNext}>
      <header className="section-header">
        <span className="kicker">{copy.kicker}</span>
        <AnimatePresence mode="wait">
          {title && (
            <motion.h2 key={title} className="section-title" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              {title}
            </motion.h2>
          )}
        </AnimatePresence>
      </header>

      <div className={`launch-stage ${launched ? 'shaking' : ''}`}>
        <div className="moon" />
        <div className="launch-ground" />
        <div className="launch-pad">
          <div className="pad-tower" />
          <div className="pad-base" />
        </div>

        <AnimatePresence>
          {currentStep < STEP_BOARD && (
            <motion.div
              className="pranjal-standing"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: reduceMotion ? 0 : [0, -6, 0] }}
              exit={{ opacity: 0 }}
              transition={{ y: { duration: 1.6, repeat: Infinity } }}
            >
              {currentStep === STEP_PAD && <div className="speech-bubble">{FINALE_COPY.pranjalSays}</div>}
              <Pengu size={120} variant="pranjal" />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          className="launch-rocket"
          initial={false}
          animate={rocketState}
          transition={launched ? { duration: 2.2, ease: 'easeIn' } : { type: 'spring', damping: 14, stiffness: 60 }}
        >
          {currentStep === STEP_ARRIVE && <div className="speech-bubble">{FINALE_COPY.arpitaSays}</div>}
          <PenguinRocketArt size={170} />
          {currentStep >= STEP_BOARD && (
            <motion.div
              className="pranjal-riding"
              initial={{ x: 260, y: 110, opacity: 1 }}
              animate={{ x: [260, 140, 0], y: [110, -120, 0] }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <Pengu size={60} variant="pranjal" />
            </motion.div>
          )}
          {currentStep >= STEP_BOARD && (
            <motion.span
              className="heart-pop"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.4, 1], opacity: [0, 1, 1], y: [0, -30, -40] }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              ♥
            </motion.span>
          )}
        </motion.div>

        <AnimatePresence mode="wait">
          {currentStep === STEP_LAUNCH && tick >= 0 && tick < FINALE_COPY.countdown.length && (
            <motion.div
              key={tick}
              className="countdown"
              initial={{ scale: 3, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: 'spring', damping: 10 }}
            >
              {FINALE_COPY.countdown[tick]}
            </motion.div>
          )}
          {launched && (
            <motion.h1
              key="blast"
              className="blast-text"
              initial={{ scale: 0.4, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', damping: 9 }}
            >
              {FINALE_COPY.blastOff}
            </motion.h1>
          )}
        </AnimatePresence>
      </div>

      <Hint>{copy.hint}</Hint>
    </div>
  )
}
