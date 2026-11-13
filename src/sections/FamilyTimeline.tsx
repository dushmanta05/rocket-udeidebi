import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'
import { FAMILY_PHOTOS } from '../data/familyPhotos'
import { SECTIONS } from '../data/sections'
import { Placeholder } from '../components/Placeholder'
import { Hint, SectionHeader } from '../components/SectionHeader'
import type { StepSectionProps } from './types'

const copy = SECTIONS[2]
const TAPE_COLORS = ['#ffd27a', '#ff8fb1', '#8ec5ff', '#b9a6ff', '#7ee2a8', '#ffd27a', '#ff8fb1', '#8ec5ff']
const PHOTO_TILTS = [-1.8, 1.6, -2.2, 1.8, -1.5, 2, -1.8, 1.4]

export function FamilyTimeline({ setTotalSteps }: StepSectionProps) {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null)

  useEffect(() => {
    setTotalSteps(1)
  }, [setTotalSteps])

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

      <div className="family-grid-stage">
        <div className="family-rows">
          <div className="family-row family-row-arpita">
            {FAMILY_PHOTOS.slice(0, 4).map((photo, idx) => (
              <motion.div
                key={photo.id}
                className="family-card"
                style={{ rotate: PHOTO_TILTS[idx % PHOTO_TILTS.length] }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.04 + idx * 0.04 }}
                whileHover={{ scale: 1.06, rotate: 0, zIndex: 6 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => openPhoto(idx)}
              >
                <span
                  className="family-tape"
                  style={{ background: TAPE_COLORS[idx % TAPE_COLORS.length] }}
                />
                <div className="family-photo-frame">
                  <Placeholder label={photo.title} src={photo.src} aspectRatio="1 / 1" />
                </div>
                <div className="family-card-body">
                  <div className="family-card-meta">
                    <span className="family-photo-num">{String(idx + 1).padStart(2, '0')}</span>
                    <span className="family-card-title">{photo.title}</span>
                  </div>
                  <p className="family-card-caption">{photo.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="family-row family-row-family">
            {FAMILY_PHOTOS.slice(4).map((photo, idx) => {
              const actualIdx = idx + 4
              return (
                <motion.div
                  key={photo.id}
                  className="family-card"
                  style={{ rotate: PHOTO_TILTS[actualIdx % PHOTO_TILTS.length] }}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 + actualIdx * 0.04 }}
                  whileHover={{ scale: 1.06, rotate: 0, zIndex: 6 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => openPhoto(actualIdx)}
                >
                  <span
                    className="family-tape"
                    style={{ background: TAPE_COLORS[actualIdx % TAPE_COLORS.length] }}
                  />
                  <div className="family-photo-frame">
                    <Placeholder label={photo.title} src={photo.src} aspectRatio="1 / 1" />
                  </div>
                  <div className="family-card-body">
                    <div className="family-card-meta">
                      <span className="family-photo-num">{String(actualIdx + 1).padStart(2, '0')}</span>
                      <span className="family-card-title">{photo.title}</span>
                    </div>
                    <p className="family-card-caption">{photo.caption}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
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

      <Hint>{copy.hint}</Hint>
    </div>
  )
}
