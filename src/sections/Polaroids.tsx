import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'
import { POLAROID_ITEMS, POLAROID_PAGES } from '../data/polaroids'
import { SECTIONS } from '../data/sections'
import { Placeholder } from '../components/Placeholder'
import { Hint, SectionHeader } from '../components/SectionHeader'
import type { StepSectionProps } from './types'

const copy = SECTIONS[4]
const TAPE_COLORS = ['#ff8fb1', '#8ec5ff', '#ffd27a', '#b9a6ff']

export function Polaroids({ currentStep, setTotalSteps }: StepSectionProps) {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null)
  const touchStartXRef = useRef<number | null>(null)

  useEffect(() => {
    setTotalSteps(POLAROID_PAGES.length)
  }, [setTotalSteps])

  useEffect(() => {
    setSelectedIdx(null)
  }, [currentStep])

  const page = POLAROID_PAGES[Math.min(currentStep, POLAROID_PAGES.length - 1)]
  const items = POLAROID_ITEMS.filter((item) => item.page === page.page)
  const activeItem = selectedIdx !== null ? items[selectedIdx] : null

  const navigatePhoto = useCallback((newIdx: number) => {
    setSelectedIdx(newIdx)
    confetti({
      particleCount: 16,
      spread: 45,
      origin: { y: 0.6 }
    })
  }, [])

  useEffect(() => {
    if (selectedIdx === null) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        e.stopImmediatePropagation()
        setSelectedIdx(null)
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        e.stopImmediatePropagation()
        navigatePhoto((selectedIdx + 1) % items.length)
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        e.stopImmediatePropagation()
        navigatePhoto((selectedIdx - 1 + items.length) % items.length)
      }
    }
    window.addEventListener('keydown', handleKeyDown, true)
    return () => window.removeEventListener('keydown', handleKeyDown, true)
  }, [selectedIdx, items.length, navigatePhoto])

  return (
    <div className="section polaroids-section">
      <SectionHeader
        copy={copy}
        kicker={`${copy.kicker} · Set ${currentStep + 1} of ${POLAROID_PAGES.length}`}
        title={page.theme}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={page.page}
          className={`polaroid-grid count-${items.length}`}
          initial="hidden"
          animate="shown"
          exit="gone"
          variants={{ shown: { transition: { staggerChildren: 0.05 } } }}
        >
          {items.map((item, idx) => (
            <motion.button
              key={item.id}
              type="button"
              className="polaroid"
              title={item.caption || item.label}
              style={{ rotate: item.rotation }}
              variants={{
                hidden: { y: -260, opacity: 0, rotate: item.rotation * 3 },
                shown: { y: 0, opacity: 1, rotate: item.rotation, transition: { type: 'spring', damping: 14 } },
                gone: { x: (idx % 2 === 0 ? -1 : 1) * 700, rotate: item.rotation * 6, opacity: 0, transition: { duration: 0.45 } }
              }}
              whileHover={{ scale: 1.07, rotate: 0, zIndex: 5 }}
              onClick={() => navigatePhoto(idx)}
            >
              <span className="polaroid-tape" style={{ background: TAPE_COLORS[idx % TAPE_COLORS.length] }} />
              <Placeholder label={item.label} src={item.src} aspectRatio="1 / 1" />
              <span className="polaroid-caption">{item.label}</span>
            </motion.button>
          ))}
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {activeItem && selectedIdx !== null && (
          <motion.div
            className="modal-backdrop polaroid-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIdx(null)}
          >
            <motion.div
              className="polaroid polaroid-large"
              initial={{ scale: 0.75, rotate: -4, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              exit={{ scale: 0.8, rotate: 4, opacity: 0 }}
              transition={{ type: 'spring', damping: 20 }}
              onClick={(e) => e.stopPropagation()}
              onTouchStart={(e) => {
                touchStartXRef.current = e.touches[0].clientX
              }}
              onTouchEnd={(e) => {
                if (touchStartXRef.current === null) return
                const diff = e.changedTouches[0].clientX - touchStartXRef.current
                if (diff > 45) {
                  navigatePhoto((selectedIdx - 1 + items.length) % items.length)
                } else if (diff < -45) {
                  navigatePhoto((selectedIdx + 1) % items.length)
                }
                touchStartXRef.current = null
              }}
            >
              <div className="polaroid-modal-head">
                <span className="polaroid-pill">
                  {page.theme} · {selectedIdx + 1} of {items.length}
                </span>
                <button
                  type="button"
                  className="polaroid-modal-close"
                  onClick={() => setSelectedIdx(null)}
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>

              <Placeholder label={activeItem.label} src={activeItem.src} aspectRatio="1 / 1" />
              <span className="polaroid-caption large">{activeItem.label}</span>
              {activeItem.caption && <p className="polaroid-subcaption">"{activeItem.caption}"</p>}

              <div className="polaroid-modal-nav">
                <button
                  type="button"
                  className="polaroid-nav-btn"
                  onClick={() => navigatePhoto((selectedIdx - 1 + items.length) % items.length)}
                  aria-label="Previous photo"
                >
                  ‹ Previous
                </button>

                <div className="polaroid-dots-tray">
                  {items.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      className={`polaroid-dot ${i === selectedIdx ? 'active' : ''}`}
                      onClick={() => navigatePhoto(i)}
                      aria-label={`Go to photo ${i + 1}`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  className="polaroid-nav-btn"
                  onClick={() => navigatePhoto((selectedIdx + 1) % items.length)}
                  aria-label="Next photo"
                >
                  Next ›
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Hint>{copy.hint}</Hint>
    </div>
  )
}
