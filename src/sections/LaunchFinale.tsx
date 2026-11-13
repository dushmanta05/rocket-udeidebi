import { useEffect, useState, useMemo } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import confetti from 'canvas-confetti'
import { FINALE_COPY, SECTIONS } from '../data/sections'
import { CREW_NAMES } from '../data/crew'
import { SPONSORS } from '../data/sponsors'
import { Pengu } from '../components/Pengu'
import { Hippo } from '../components/Hippo'
import { PenguinRocketArt } from '../components/art/PenguinRocketArt'
import { LaunchPadArt } from '../components/art/LaunchPadArt'
import { Hint } from '../components/SectionHeader'
import { computeTrajectoryPose, type FlightTrajectory } from '../components/RocketFlyby'
import type { StepSectionProps } from './types'

const copy = SECTIONS[15]
const STEP_PAD = 0
const STEP_ARRIVE = 1
const STEP_BOARD = 2
const STEP_LAUNCH = 3
const STEP_THANKS = 4
const STEP_SPONSORS = 5

const THANKS_TRAJECTORIES: FlightTrajectory[] = [
  { from: [-15, 72], to: [115, 18], duration: 11 },
  { from: [115, 20], to: [-15, 65], duration: 12 },
  { from: [-15, 45], to: [115, 12], duration: 10 },
  { from: [115, 80], to: [-15, 15], duration: 13 },
  { from: [-15, 55], to: [115, 28], duration: 11 }
]

function ThanksCoupleFlyby() {
  const [flightIdx, setFlightIdx] = useState(() => Math.floor(Math.random() * THANKS_TRAJECTORIES.length))
  const traj = THANKS_TRAJECTORIES[flightIdx]
  const pose = useMemo(() => computeTrajectoryPose(traj), [traj])

  return (
    <div className="thanks-flyby-layer" aria-hidden="true">
      <motion.div
        key={flightIdx}
        className="thanks-flyby-rocket"
        initial={{ left: `${traj.from[0]}vw`, top: `${traj.from[1]}vh` }}
        animate={{ left: `${traj.to[0]}vw`, top: `${traj.to[1]}vh` }}
        transition={{ duration: traj.duration, ease: 'linear' }}
        onAnimationComplete={() =>
          setFlightIdx((prev) => (prev + 1 + Math.floor(Math.random() * (THANKS_TRAJECTORIES.length - 1))) % THANKS_TRAJECTORIES.length)
        }
        style={{ rotate: pose.rotate }}
      >
        <div style={{ transform: `scaleX(${pose.flip})` }} className="couple-rocket-wrap">
          <PenguinRocketArt size={88} sparks />
          <div className="couple-pranjal">
            <Pengu size={34} variant="pranjal" />
          </div>
          <span className="couple-heart">♥</span>
        </div>
      </motion.div>
    </div>
  )
}

function useCountdown(active: boolean) {
  const [tick, setTick] = useState(-1)

  useEffect(() => {
    if (!active) {
      setTick(-1)
      return
    }
    setTick(0)
    const timers = FINALE_COPY.countdown.map((_, i) => setTimeout(() => setTick(i + 1), (i + 1) * 1100))
    return () => timers.forEach(clearTimeout)
  }, [active])

  return tick
}

const SPONSOR_SCATTERS = [
  { rotate: -2.4, y: -6, x: -4 },
  { rotate: 1.8, y: -4, x: 2 },
  { rotate: -1.6, y: -6, x: 3 },
  { rotate: 2.4, y: 2, x: -4 },
  { rotate: -2.0, y: 0, x: -1 },
  { rotate: 1.6, y: 2, x: 2 },
  { rotate: -2.6, y: -2, x: 4 },
  { rotate: 2.0, y: 6, x: -3 },
  { rotate: -1.8, y: 8, x: 2 },
  { rotate: 2.4, y: 6, x: 3 }
]

export function LaunchFinale({ currentStep, setTotalSteps, onNext }: StepSectionProps) {
  const reduceMotion = useReducedMotion()
  const tick = useCountdown(currentStep === STEP_LAUNCH)
  const launched = currentStep === STEP_LAUNCH && tick >= FINALE_COPY.countdown.length

  useEffect(() => {
    setTotalSteps(6)
  }, [setTotalSteps])

  useEffect(() => {
    if (currentStep === STEP_BOARD) {
      setTimeout(() => confetti({ particleCount: 40, spread: 60, origin: { x: 0.4, y: 0.5 }, colors: ['#ff8fb1', '#ffffff'] }), 900)
    }
  }, [currentStep])

  useEffect(() => {
    if (currentStep < STEP_THANKS) return
    const colors = ['#ffd27a', '#ff8fb1', '#8ec5ff', '#b9a6ff']
    confetti({ particleCount: 120, spread: 120, origin: { y: 0.4 }, colors })
    if (reduceMotion) return
    const timer = setInterval(() => {
      confetti({ particleCount: 18, spread: 80, startVelocity: 12, gravity: 0.5, ticks: 400, origin: { x: Math.random(), y: -0.05 }, colors })
    }, 1400)
    return () => clearInterval(timer)
  }, [currentStep, reduceMotion])

  const names = CREW_NAMES
  const cycle = Math.max(10, names.length * 1.1)

  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768

  const rocketState =
    currentStep === STEP_PAD
      ? { left: '-30%', bottom: '55%', rotate: 0, opacity: 0 }
      : launched
        ? { left: isMobile ? '28%' : '38%', bottom: '160%', rotate: -47, opacity: 1 }
        : currentStep === STEP_LAUNCH
          ? { left: isMobile ? '28%' : '38%', bottom: isMobile ? '20%' : '24%', rotate: -47, opacity: 1 }
          : { left: isMobile ? '22%' : '30%', bottom: isMobile ? '24%' : '30%', rotate: 0, opacity: 1 }

  if (currentStep === STEP_THANKS) {
    return (
      <div className="section thanks-section" onClick={onNext}>
        <div className="wish-rain" aria-hidden="true">
          {names.map((name, idx) => (
            <span
              key={name}
              className="wish-star"
              style={{
                left: `${6 + ((idx * 37) % 86)}%`,
                animationDelay: `${(idx * cycle) / names.length}s`,
                animationDuration: `${cycle}s`
              }}
            >
              {name}
            </span>
          ))}
        </div>

        {!reduceMotion && <ThanksCoupleFlyby />}

        <div className="thanks-layout">
          <motion.div initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: 'spring', damping: 12 }}>
            <Hippo size={380} speechText={FINALE_COPY.hippoSays} />
          </motion.div>

          <motion.div
            className="thanks-card"
            initial={{ scale: 0.8, opacity: 0, rotate: -3 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ delay: 0.3, type: 'spring', damping: 14 }}
          >
            <div className="thanks-dance-badge">
              <Pengu size={isMobile ? 86 : 116} variant="dance" />
            </div>

            <h2 className="script-title thanks-title">{FINALE_COPY.thankYouTitle}</h2>

            {FINALE_COPY.thankYouNote.map((line) => (
              <p key={line} className="thanks-line">
                {line}
              </p>
            ))}
            <div className="thanks-foot">
              <motion.div
                className="thanks-party-dancer"
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: [-4, 4, -4] }}
                transition={{
                  scale: { delay: 0.6, type: 'spring', damping: 10 },
                  rotate: { repeat: Infinity, duration: 1.8, ease: 'easeInOut' }
                }}
              >
                <Pengu size={isMobile ? 70 : 96} variant="dance3" />
              </motion.div>
              <span className="thanks-sign">{FINALE_COPY.signOff}</span>
            </div>
          </motion.div>
        </div>

        <div className="thanks-bottom-action">
          <button
            type="button"
            className="thanks-sponsors-btn"
            onClick={(e) => {
              e.stopPropagation()
              onNext()
            }}
          >
            <span>Presented By: Official Sponsors →</span>
          </button>
        </div>
      </div>
    )
  }

  if (currentStep >= STEP_SPONSORS) {
    return (
      <div className="section sponsors-section">
        {!reduceMotion && <ThanksCoupleFlyby />}

        <header className="section-header sponsors-header">
          <span className="kicker">Brought To You By</span>
          <h2 className="section-title">Presented By</h2>
          <p className="section-subtitle">
            The certified syndicates, agencies & family delegates who made this bachelorette possible.
          </p>
        </header>

        <div className="sponsors-scatter-grid">
          {SPONSORS.map((s, idx) => {
            const scatter = reduceMotion ? { rotate: 0, y: 0, x: 0 } : SPONSOR_SCATTERS[idx % SPONSOR_SCATTERS.length]
            const isTier3 = idx < 3 || idx >= 7

            return (
              <motion.div
                key={s.id}
                className={`sponsor-card ${isTier3 ? 'sponsor-card-tier-3' : 'sponsor-card-tier-4'}`}
                initial={{ opacity: 0, scale: 0.92, y: 18 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: scatter.rotate,
                  x: scatter.x,
                  y: scatter.y
                }}
                transition={{ delay: 0.04 + idx * 0.035, type: 'spring', stiffness: 280, damping: 22 }}
                whileHover={
                  reduceMotion
                    ? { scale: 1.04, zIndex: 10 }
                    : { scale: 1.08, rotate: 0, x: 0, y: -4, zIndex: 10, transition: { duration: 0.18 } }
                }
              >
                <div className="sponsor-card-inner">
                  <div className="sponsor-top">
                    <span className="sponsor-idx">{String(idx + 1).padStart(2, '0')}</span>
                    <h3 className="sponsor-title">{s.title}</h3>
                  </div>
                  <div className="sponsor-name">({s.subtitle})</div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <div className="sponsors-footer">
          <div className="sponsors-party-wrap party-band">
            <Pengu size={isMobile ? 58 : 84} variant="party1" />
          </div>
          <span className="sponsors-tagline">"Zero sponsors were harmed in the making of this launch."</span>
          <div className="sponsors-party-wrap party-dance">
            <Pengu size={isMobile ? 58 : 84} variant="party2" />
          </div>
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
      <header className="section-header launch-header">
        <span className="kicker">{copy.kicker}</span>
        <div className="launch-title-slot">
          <AnimatePresence mode="wait">
            {title && (
              <motion.h2
                key={title}
                className="section-title"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                {title}
              </motion.h2>
            )}
          </AnimatePresence>
        </div>
      </header>

      <div className={`launch-stage ${launched ? 'shaking' : ''}`}>
        <div className="moon" />
        <div className="launch-ground" />
        <div className="launch-pad">
          <LaunchPadArt />
        </div>

        <AnimatePresence>
          {currentStep < STEP_BOARD && (
            <motion.div
              className="pranjal-standing"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              {currentStep === STEP_PAD && <div className="speech-bubble">{FINALE_COPY.pranjalSays}</div>}
              <span className="name-pill">{FINALE_COPY.pranjalName}</span>
              <Pengu size={120} variant="flower" />
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
          <PenguinRocketArt size={170} sparks={currentStep >= STEP_ARRIVE} />
          {currentStep >= STEP_ARRIVE && (
            <motion.span className="name-pill rocket-name" animate={{ rotate: -rocketState.rotate }}>
              {FINALE_COPY.arpitaName}
            </motion.span>
          )}
          {currentStep >= STEP_BOARD && (
            <motion.div
              className="pranjal-flying"
              initial={{ x: isMobile ? 150 : 260, y: 60, opacity: 1 }}
              animate={{ x: [isMobile ? 150 : 260, isMobile ? 75 : 140, 0], y: [60, -120, 0] }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <motion.span className="name-pill" animate={{ rotate: -rocketState.rotate }}>
                {FINALE_COPY.pranjalName}
              </motion.span>
              <Pengu size={isMobile ? 46 : 60} variant="love1" />
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

        <AnimatePresence>
          {currentStep === STEP_LAUNCH && tick >= 0 && tick < FINALE_COPY.countdown.length && (
            <motion.div
              key={tick}
              className="countdown"
              initial={{ scale: 3, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.6, opacity: 0, transition: { duration: 0.2 } }}
              transition={{ type: 'spring', damping: 12, stiffness: 200 }}
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
