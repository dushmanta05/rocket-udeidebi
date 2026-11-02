import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BAG_ITEMS } from '../data/bagItems'
import { SECTIONS } from '../data/sections'
import { BagArt } from '../components/art/BagArt'
import { Placeholder } from '../components/Placeholder'
import { Hint, SectionHeader } from '../components/SectionHeader'
import type { StepSectionProps } from './types'

const copy = SECTIONS[6]

export function BagReveal({ currentStep, setTotalSteps, onNext }: StepSectionProps) {
  const [wiggling, setWiggling] = useState(false)

  useEffect(() => {
    setTotalSteps(BAG_ITEMS.length)
  }, [setTotalSteps])

  const index = Math.min(currentStep, BAG_ITEMS.length - 1)
  const item = BAG_ITEMS[index]
  const isFinal = index === BAG_ITEMS.length - 1

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
            animate={isFinal ? { rotate: [0, -12, 12, -160, 180, 0], scale: [1, 1.1, 0.95, 1] } : { scale: [1, 1.03, 1] }}
            transition={isFinal ? { duration: 0.9 } : { duration: 2.4, repeat: Infinity }}
          >
            <BagArt size={240} isWiggling={wiggling} />
          </motion.div>
          <div className="bag-counter">
            <span className="bag-counter-num">{index + 1}</span>
            <span className="bag-counter-of">of {BAG_ITEMS.length} artifacts</span>
          </div>
        </div>

        <AnimatePresence mode="wait">
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
        </AnimatePresence>
      </div>

      <div className="bag-tray">
        {BAG_ITEMS.map((bagItem, idx) => (
          <span key={bagItem.id} className={`tray-chip ${idx <= index ? 'found' : ''}`}>
            {idx <= index ? bagItem.name : '?'}
          </span>
        ))}
      </div>

      <Hint>{copy.hint}</Hint>
    </div>
  )
}
