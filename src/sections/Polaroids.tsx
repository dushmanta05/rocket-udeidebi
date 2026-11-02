import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { POLAROID_ITEMS, PolaroidItem } from '../data/polaroids'
import { Placeholder } from '../components/Placeholder'

interface PolaroidsProps {
  currentStep: number
  setTotalSteps: (steps: number) => void
  onNext: () => void
}

const TAPE_COLORS = ['#f472b6', '#38bdf8', '#facc15', '#a78bfa']

export function Polaroids({ currentStep, setTotalSteps }: PolaroidsProps) {
  const [selectedItem, setSelectedItem] = useState<PolaroidItem | null>(null)
  const activePage = (currentStep + 1) as 1 | 2 | 3

  useEffect(() => {
    setTotalSteps(3)
  }, [setTotalSteps])

  const pageItems = POLAROID_ITEMS.filter((item) => item.page === activePage)
  const currentTheme = pageItems[0]?.theme || 'Photo Gallery'

  return (
    <div className="section-container polaroids-section">
      <div className="section-header">
        <span className="chapter-badge purple-badge">Exhibit {activePage} of 3</span>
        <h2 className="section-heading">{currentTheme}</h2>
        <p className="section-subtext">Click any polaroid to inspect the candid evidence</p>
      </div>

      <motion.div
        key={activePage}
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.08 }}
        transition={{ duration: 0.35 }}
        className="polaroid-grid"
      >
        {pageItems.map((item, idx) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.08, zIndex: 10, rotate: 0 }}
            whileTap={{ scale: 0.96 }}
            style={{ rotate: item.rotation }}
            className="polaroid-frame"
            onClick={() => setSelectedItem(item)}
          >
            <div
              className="polaroid-tape"
              style={{ backgroundColor: TAPE_COLORS[idx % TAPE_COLORS.length] }}
            />
            <div className="polaroid-photo">
              <Placeholder
                label={item.label}
                src={item.src}
                aspectRatio="1"
              />
            </div>
            <div className="polaroid-caption">{item.label}</div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="polaroid-modal-backdrop"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.6, rotate: -6 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.6, rotate: 6 }}
              transition={{ type: 'spring', damping: 18 }}
              className="polaroid-modal-card"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="polaroid-modal-photo">
                <Placeholder
                  label={selectedItem.label}
                  src={selectedItem.src}
                  width={380}
                  aspectRatio="1"
                />
              </div>
              <div className="polaroid-modal-caption">
                <h3>{selectedItem.label}</h3>
                <span className="category-pill">{selectedItem.theme}</span>
              </div>
              <button
                className="close-modal-btn"
                onClick={() => setSelectedItem(null)}
              >
                ✕ Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="step-indicator-bar">
        Theme {activePage} of 3 • Arrow keys to switch sets
      </div>
    </div>
  )
}
