import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BAG_ITEMS } from '../data/bagItems'
import { BagArt } from '../components/art/BagArt'

interface BagRevealProps {
  currentStep: number
  setTotalSteps: (steps: number) => void
  onNext: () => void
}

export function BagReveal({ currentStep, setTotalSteps, onNext }: BagRevealProps) {
  const [wiggling, setWiggling] = useState(false)

  useEffect(() => {
    setTotalSteps(BAG_ITEMS.length)
  }, [setTotalSteps])

  const itemIndex = Math.min(currentStep, BAG_ITEMS.length - 1)
  const currentItem = BAG_ITEMS[itemIndex]
  const isFinal = currentStep >= BAG_ITEMS.length - 1

  const handleTap = () => {
    setWiggling(true)
    setTimeout(() => setWiggling(false), 500)
    onNext()
  }

  return (
    <div className="section-container bag-section" onClick={handleTap}>
      <div className="section-header">
        <span className="chapter-badge">Inspection Protocol</span>
        <h2 className="section-heading">Arpita's Doraemon Pocket</h2>
        <p className="section-subtext">Tap the 4D bag to extract emergency survival artifacts</p>
      </div>

      <div className="bag-stage">
        <motion.div
          animate={isFinal ? { rotate: [0, -15, 15, -180, 180, 0], scale: [1, 1.15, 0.95, 1] } : {}}
          transition={{ duration: 0.8 }}
          className="bag-container"
        >
          <BagArt size={220} isWiggling={wiggling} />
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentItem.id}
            initial={{ y: 50, scale: 0.3, opacity: 0 }}
            animate={{ y: -20, scale: 1, opacity: 1 }}
            exit={{ y: 80, scale: 0.5, opacity: 0 }}
            transition={{ type: 'spring', damping: 12 }}
            className="bag-item-card"
          >
            <span className="item-icon">{currentItem.icon}</span>
            <h3 className="item-name">{currentItem.name}</h3>
            <p className="item-roast">"{currentItem.roast}"</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="bag-inventory-tray">
        <span className="tray-counter">ARTIFACTS EXTRACTED: {itemIndex + 1} / {BAG_ITEMS.length}</span>
        <div className="tray-icons">
          {BAG_ITEMS.slice(0, itemIndex + 1).map((item) => (
            <span key={item.id} className="tray-badge" title={item.name}>
              {item.icon}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
