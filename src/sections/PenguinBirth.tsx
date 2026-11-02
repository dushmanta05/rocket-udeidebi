import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import confetti from 'canvas-confetti'
import { EggArt, EggShellBottom, EggShellTop } from '../components/art/EggArt'
import { Placeholder } from '../components/Placeholder'
import { Hint } from '../components/SectionHeader'
import { ASSETS } from '../data/assets'
import { BIRTH_COPY, SECTIONS } from '../data/sections'
import type { StepSectionProps } from './types'

const copy = SECTIONS[1]
const JOURNEY_STEPS = BIRTH_COPY.journey.length
const EGG_STEP = JOURNEY_STEPS
const HATCH_STEP = JOURNEY_STEPS + 1

function useCrackProgress(active: boolean) {
  const [cracks, setCracks] = useState(0)

  useEffect(() => {
    if (!active) {
      setCracks(0)
      return
    }
    const timers = [1, 2, 3].map((n) => setTimeout(() => setCracks(n), 900 + n * 700))
    return () => timers.forEach(clearTimeout)
  }, [active])

  return cracks
}

export function PenguinBirth({ currentStep, setTotalSteps, onNext }: StepSectionProps) {
  const reduceMotion = useReducedMotion()
  const cracks = useCrackProgress(currentStep === EGG_STEP)
  const journey = BIRTH_COPY.journey[Math.min(currentStep, JOURNEY_STEPS - 1)]
  const inJourney = currentStep < JOURNEY_STEPS

  useEffect(() => {
    setTotalSteps(HATCH_STEP + 1)
  }, [setTotalSteps])

  useEffect(() => {
    if (currentStep === HATCH_STEP) {
      confetti({ particleCount: 90, spread: 100, origin: { y: 0.55 }, colors: ['#ffd27a', '#ff8fb1', '#8ec5ff', '#ffffff'] })
    }
  }, [currentStep])

  return (
    <div className="section birth-section" onClick={onNext}>
      <motion.div
        className="journey-backdrop"
        style={{ backgroundImage: `url(${ASSETS.penguJourney})` }}
        initial={{ scale: 1, opacity: 0 }}
        animate={{
          opacity: 1,
          scale: reduceMotion ? 1 : inJourney ? 1.06 + currentStep * 0.12 : 1.35,
          filter: inJourney ? 'blur(0px) brightness(0.9)' : 'blur(10px) brightness(0.35)'
        }}
        transition={{ duration: inJourney ? 9 : 1.6, ease: 'easeOut', opacity: { duration: 1.2 } }}
      />
      <div className="journey-shade" />

      <div className="birth-stage">
        <AnimatePresence mode="wait">
          {inJourney && (
            <motion.div
              key={`journey-${currentStep}`}
              className="journey-caption"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.9 }}
            >
              <span className="kicker">{journey.kicker}</span>
              <h2 className="journey-line">{journey.line}</h2>
              <motion.p className="journey-sub" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4, duration: 1 }}>
                {journey.sub}
              </motion.p>
            </motion.div>
          )}

          {currentStep === EGG_STEP && (
            <motion.div key="egg" className="egg-scene" initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
              <p className="rebirth-line">{BIRTH_COPY.rebirthLine}</p>
              <div className="egg-glow" />
              <motion.div
                animate={reduceMotion || cracks === 0 ? { y: [0, -6, 0] } : { rotate: [-7, 7, -9, 9, -5, 5, 0], x: [-3, 3, -3, 3, 0] }}
                transition={{ duration: cracks === 0 ? 2 : 0.5, repeat: Infinity, repeatDelay: cracks === 0 ? 0 : 0.15 }}
              >
                <EggArt size={190} cracks={cracks} />
              </motion.div>
              <motion.h3 key={`title-${cracks}`} className="egg-title" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
                {BIRTH_COPY.eggTitles[Math.min(cracks, 2)]}
              </motion.h3>
            </motion.div>
          )}

          {currentStep >= HATCH_STEP && (
            <motion.div key="hatched" className="hatch-scene" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <motion.div className="hatch-flash" initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ duration: 0.8 }} />
              <div className="hatch-egg">
                <motion.div
                  className="shell-top"
                  initial={{ y: 0, rotate: 0, opacity: 1 }}
                  animate={{ y: -220, x: 120, rotate: 70, opacity: 0 }}
                  transition={{ duration: 1.1, ease: 'easeOut' }}
                >
                  <EggShellTop size={200} />
                </motion.div>
                <motion.div
                  className="baby-photo"
                  initial={{ y: 120, scale: 0.4, opacity: 0 }}
                  animate={{ y: 0, scale: 1, opacity: 1 }}
                  transition={{ delay: 0.35, type: 'spring', damping: 10, stiffness: 120 }}
                >
                  <Placeholder label={BIRTH_COPY.babyPhotoLabel} aspectRatio="1 / 1" />
                </motion.div>
                <div className="shell-bottom">
                  <EggShellBottom size={200} />
                </div>
              </div>
              <motion.div className="hatch-text" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.7 }}>
                <h3 className="script-title">{BIRTH_COPY.bornTitle}</h3>
                <p>{BIRTH_COPY.bornText}</p>
                <span className="pill">{BIRTH_COPY.bornTag}</span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Hint>{copy.hint}</Hint>
    </div>
  )
}
