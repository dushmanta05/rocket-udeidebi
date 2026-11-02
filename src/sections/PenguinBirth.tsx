import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import confetti from 'canvas-confetti'
import { Pengu } from '../components/Pengu'
import { PenguinArt } from '../components/art/PenguinArt'
import { EggArt, EggShellBottom, EggShellTop } from '../components/art/EggArt'
import { Placeholder } from '../components/Placeholder'
import { Hint, SectionHeader } from '../components/SectionHeader'
import { BIRTH_COPY, SECTIONS } from '../data/sections'
import type { StepSectionProps } from './types'

const copy = SECTIONS[1]
const COLONY_SIZES = [70, 86, 64, 78, 92]

function useCrackProgress(active: boolean) {
  const [cracks, setCracks] = useState(0)

  useEffect(() => {
    if (!active) {
      setCracks(0)
      return
    }
    setCracks(1)
    const timers = [setTimeout(() => setCracks(2), 700), setTimeout(() => setCracks(3), 1400)]
    return () => timers.forEach(clearTimeout)
  }, [active])

  return cracks
}

export function PenguinBirth({ currentStep, setTotalSteps, onNext }: StepSectionProps) {
  const reduceMotion = useReducedMotion()
  const cracks = useCrackProgress(currentStep === 2)

  useEffect(() => {
    setTotalSteps(4)
  }, [setTotalSteps])

  useEffect(() => {
    if (currentStep === 3) {
      confetti({ particleCount: 90, spread: 100, origin: { y: 0.55 }, colors: ['#ffd27a', '#ff8fb1', '#8ec5ff', '#ffffff'] })
    }
  }, [currentStep])

  const shake = reduceMotion ? {} : currentStep === 1
    ? { rotate: [-3, 3, -2, 2, 0] }
    : { rotate: [-7, 7, -9, 9, -5, 5, 0], x: [-3, 3, -3, 3, 0] }

  return (
    <div className="section birth-section" onClick={onNext}>
      <SectionHeader copy={copy} />

      <div className="birth-stage">
        <AnimatePresence mode="wait">
          {currentStep === 0 && (
            <motion.div key="colony" className="colony-scene" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="ice-floe" />
              <div className="colony-row">
                {COLONY_SIZES.map((size, idx) => (
                  <motion.div
                    key={idx}
                    animate={reduceMotion ? {} : { y: [0, -4, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity, delay: idx * 0.2 }}
                  >
                    <PenguinArt size={size} muted />
                  </motion.div>
                ))}
              </div>
              <motion.div
                className="lonely-pengu"
                initial={{ left: '18%' }}
                animate={{ left: '58%' }}
                transition={{ duration: 3, ease: 'easeInOut' }}
              >
                <motion.div
                  animate={reduceMotion ? {} : { rotate: [-6, 6, -6] }}
                  transition={{ duration: 0.6, repeat: Infinity }}
                >
                  <Pengu size={140} />
                </motion.div>
                <div className="thought-bubble">{BIRTH_COPY.colonyThought}</div>
              </motion.div>
            </motion.div>
          )}

          {(currentStep === 1 || currentStep === 2) && (
            <motion.div key="egg" className="egg-scene" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}>
              <motion.div className="egg-pengu" initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                <Pengu size={150} />
              </motion.div>
              <div className="egg-wrap">
                <motion.div
                  key={currentStep}
                  animate={shake}
                  transition={{ duration: currentStep === 1 ? 1.4 : 0.5, repeat: Infinity, repeatDelay: currentStep === 1 ? 0.6 : 0.1 }}
                >
                  <EggArt size={200} cracks={currentStep === 2 ? cracks : 0} />
                </motion.div>
                <motion.h3 key={`title-${currentStep}-${cracks}`} className="egg-title" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
                  {currentStep === 1 ? BIRTH_COPY.eggTitles[0] : BIRTH_COPY.eggTitles[Math.max(1, Math.min(cracks, 2))]}
                </motion.h3>
              </div>
            </motion.div>
          )}

          {currentStep >= 3 && (
            <motion.div key="hatched" className="hatch-scene" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <motion.div className="hatch-flash" initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ duration: 0.7 }} />
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
