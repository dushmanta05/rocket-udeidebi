import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'
import { BAG_ITEMS } from '../data/bagItems'
import { SECTIONS } from '../data/sections'
import { Placeholder } from '../components/Placeholder'
import { Pengu } from '../components/Pengu'
import { Hint, SectionHeader } from '../components/SectionHeader'
import type { StepSectionProps } from './types'

const copy = SECTIONS[6]

export function BagReveal({ currentStep, setTotalSteps, onNext }: StepSectionProps) {
  const [wiggling, setWiggling] = useState(false)

  useEffect(() => {
    setTotalSteps(BAG_ITEMS.length + 1)
  }, [setTotalSteps])

  const isRecharge = currentStep >= BAG_ITEMS.length
  const index = Math.min(currentStep, BAG_ITEMS.length - 1)
  const item = BAG_ITEMS[index]

  useEffect(() => {
    if (isRecharge) {
      confetti({
        particleCount: 80,
        spread: 90,
        origin: { y: 0.5 },
        colors: ['#ffd27a', '#7ee2a8', '#ff8fb1', '#ffffff']
      })
    }
  }, [isRecharge])

  const handleTap = () => {
    setWiggling(true)
    setTimeout(() => setWiggling(false), 500)
    onNext()
  }

  return (
    <div className="section bag-section" onClick={handleTap}>
      <SectionHeader copy={copy} />

      <div className="bag-layout">
        <div className="bag-side">
          <motion.div
            className="bag-art"
            animate={wiggling ? { rotate: [-8, 8, -6, 6, 0], scale: [1, 1.06, 1] } : { scale: [1, 1.03, 1] }}
            transition={wiggling ? { duration: 0.5 } : { duration: 2.4, repeat: Infinity }}
          >
            <Pengu size={240} variant="bag" />
          </motion.div>
          <div className="bag-counter">
            <span className="bag-counter-num">{isRecharge ? '⚡' : index + 1}</span>
            <span className="bag-counter-of">
              {isRecharge ? 'Recharge station' : `of ${BAG_ITEMS.length} artifacts`}
            </span>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {!isRecharge ? (
            <motion.div
              key={item.id}
              className="artifact-card"
              initial={{ x: -140, y: 40, scale: 0.4, opacity: 0, rotate: -12 }}
              animate={{ x: 0, y: 0, scale: 1, opacity: 1, rotate: 0 }}
              exit={{ y: 60, opacity: 0, scale: 0.8 }}
              transition={{ type: 'spring', damping: 13 }}
            >
              <div className="artifact-photo">
                <Placeholder label={`Photo: ${item.name}`} src={item.src} aspectRatio="4 / 3" />
              </div>
              <div className="artifact-text">
                <span className="pill">Artifact {String(index + 1).padStart(2, '0')}</span>
                <h3 className="artifact-name">{item.name}</h3>
                <p className="artifact-roast">{item.roast}</p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="recharge"
              className="recharge-card"
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ type: 'spring', damping: 14 }}
            >
              <span className="pill recharge-pill">MID-PARTY PIT STOP · RECHARGE TIME</span>
              <div className="recharge-pengu-wrap">
                <Pengu size={160} variant="energy" />
              </div>
              <h3 className="recharge-title">Hippo Recharge Station</h3>
              <p className="recharge-roast">
                Hold on! Hippo gets tired a lot from carrying this infinite bag and locating the nearest chair.
                Energy loading in progress...
              </p>
              <div className="recharge-battery">
                <div className="recharge-battery-head">
                  <span>CHARGING STATUS</span>
                  <strong>100% ⚡ FULL VOLTAGE</strong>
                </div>
                <div className="recharge-battery-bar">
                  <motion.div
                    className="recharge-battery-fill"
                    initial={{ width: '12%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1.1, ease: 'easeOut' }}
                  />
                </div>
              </div>
              <span className="recharge-badge">Battery fully loaded! Chai power restored. Tap to resume →</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="bag-tray">
        {BAG_ITEMS.map((bagItem, idx) => (
          <span key={bagItem.id} className={`tray-chip ${idx <= index ? 'found' : ''}`}>
            {idx <= index ? bagItem.name : '?'}
          </span>
        ))}
        <span className={`tray-chip ${isRecharge ? 'found recharge-chip' : ''}`}>
          {isRecharge ? '⚡ Full Charge' : '⚡ ?'}
        </span>
      </div>

      <Hint>{isRecharge ? 'Tap to continue to Tubelight Moments' : copy.hint}</Hint>
    </div>
  )
}
