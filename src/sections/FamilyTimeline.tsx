import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'
import { FAMILY_PHOTOS } from '../data/familyPhotos'
import { SECTIONS } from '../data/sections'
import { Placeholder } from '../components/Placeholder'
import { SectionHeader } from '../components/SectionHeader'
import type { StepSectionProps } from './types'

const copy = SECTIONS[2]
const TAPE_COLORS = ['#ffd27a', '#ff8fb1', '#8ec5ff', '#b9a6ff', '#7ee2a8', '#ffd27a', '#ff8fb1', '#8ec5ff', '#ffd27a']
const PHOTO_TILTS = [-2, 1.8, -1.8, 2, -1.8, 1.6, -2, 1.8, -1.5]

const SETS = [
  {
    title: 'Her Early Journey',
    items: FAMILY_PHOTOS.slice(0, 4),
    offset: 0
  },
  {
    title: "Family & The 'A' Squad",
    items: FAMILY_PHOTOS.slice(4),
    offset: 4
  }
]

export function FamilyTimeline({ currentStep, setTotalSteps, onNext }: StepSectionProps) {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null)

  useEffect(() => {
    setTotalSteps(SETS.length)
  }, [setTotalSteps])

  const setIndex = Math.min(currentStep, SETS.length - 1)
  const currentSet = SETS[setIndex]

  useEffect(() => {
    confetti({
      particleCount: 24,
      spread: 55,
      origin: { y: 0.6 },
      colors: ['#ffd27a', '#ff8fb1', '#8ec5ff']
    })
  }, [setIndex])

  useEffect(() => {
    if (selectedIdx === null) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedIdx(null)
      } else if (e.key === 'ArrowRight') {
        setSelectedIdx((prev) => (prev !== null ? (prev + 1) % FAMILY_PHOTOS.length : null))
      } else if (e.key === 'ArrowLeft') {
        setSelectedIdx((prev) => (prev !== null ? (prev - 1 + FAMILY_PHOTOS.length) % FAMILY_PHOTOS.length : null))
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedIdx])

  const openPhoto = (idx: number) => {
    setSelectedIdx(idx)
    confetti({
      particleCount: 26,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#ffd27a', '#ff8fb1', '#8ec5ff']
    })
  }

  return (
    <div className="section family-section">
      <SectionHeader copy={copy} />

      <div className="family-stage">
        <div className="family-set-toggle">
          {SETS.map((s, idx) => (
            <button
              key={s.title}
              type="button"
              className={`family-set-pill ${idx === setIndex ? 'active' : ''}`}
              onClick={(e) => {
                e.stopPropagation()
                if (idx !== setIndex) {
                  onNext()
                }
              }}
            >
              <span>{s.title} ({s.items.length})</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={setIndex}
            className={`family-cards-wrap set-${setIndex}`}
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.98 }}
            transition={{ duration: 0.32, ease: 'easeOut' }}
          >
            {currentSet.items.map((photo, itemIdx) => {
              const globalIdx = currentSet.offset + itemIdx
              return (
                <motion.div
                  key={photo.id}
                  className="family-card"
                  style={{ rotate: PHOTO_TILTS[globalIdx % PHOTO_TILTS.length] }}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 + itemIdx * 0.05 }}
                  whileHover={{ scale: 1.05, rotate: 0, zIndex: 6 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={(e) => {
                    e.stopPropagation()
                    openPhoto(globalIdx)
                  }}
                >
                  <span
                    className="family-tape"
                    style={{ background: TAPE_COLORS[globalIdx % TAPE_COLORS.length] }}
                  />
                  <div className="family-photo-frame">
                    <Placeholder label={photo.title} src={photo.src} aspectRatio="4 / 3" />
                  </div>
                  <div className="family-card-body">
                    <div className="family-card-meta">
                      <span className="family-photo-num">{String(globalIdx + 1).padStart(2, '0')}</span>
                      <span className="family-card-title">{photo.title}</span>
                    </div>
                    <p className="family-card-caption">{photo.caption}</p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </AnimatePresence>

        <footer className="family-footer">
          <button
            type="button"
            className="family-stage-btn"
            onClick={onNext}
          >
            {setIndex === 0 ? 'Next: Family & The "A" Squad (5 photos) →' : 'Next: Then We Met You →'}
          </button>
          <span className="family-hint-text">{copy.hint}</span>
        </footer>
      </div>

      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            className="family-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIdx(null)}
          >
            <motion.div
              className="family-modal-card"
              initial={{ scale: 0.85, opacity: 0, y: 24 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.88, opacity: 0, y: 16 }}
              transition={{ type: 'spring', damping: 18 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="family-modal-header">
                <span className="pill">Memory {String(selectedIdx + 1).padStart(2, '0')} of {String(FAMILY_PHOTOS.length).padStart(2, '0')}</span>
                <button
                  type="button"
                  className="family-modal-close"
                  onClick={() => setSelectedIdx(null)}
                  aria-label="Close photo"
                >
                  ✕
                </button>
              </div>

              <div className="family-modal-photo">
                <Placeholder
                  label={FAMILY_PHOTOS[selectedIdx].title}
                  src={FAMILY_PHOTOS[selectedIdx].src}
                  aspectRatio="1 / 1"
                />
              </div>

              <div className="family-modal-info">
                <h3 className="family-modal-title">{FAMILY_PHOTOS[selectedIdx].title}</h3>
                <p className="family-modal-caption">"{FAMILY_PHOTOS[selectedIdx].caption}"</p>
              </div>

              <div className="family-modal-nav">
                <button
                  type="button"
                  className="family-nav-btn"
                  onClick={() =>
                    setSelectedIdx((prev) => (prev! - 1 + FAMILY_PHOTOS.length) % FAMILY_PHOTOS.length)
                  }
                  aria-label="Previous photo"
                >
                  ‹ Previous
                </button>

                <div className="family-dots-tray">
                  {FAMILY_PHOTOS.map((_, dotIdx) => (
                    <span
                      key={dotIdx}
                      className={`family-dot ${dotIdx === selectedIdx ? 'active' : ''}`}
                      onClick={() => setSelectedIdx(dotIdx)}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  className="family-nav-btn"
                  onClick={() => setSelectedIdx((prev) => (prev! + 1) % FAMILY_PHOTOS.length)}
                  aria-label="Next photo"
                >
                  Next ›
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
