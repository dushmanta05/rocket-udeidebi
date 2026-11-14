import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'
import { FRIENDS_SETS, FRIENDS_PHOTOS } from '../data/friendsPhotos'
import { SECTIONS } from '../data/sections'
import { Placeholder } from '../components/Placeholder'
import { SectionHeader } from '../components/SectionHeader'
import type { StepSectionProps } from './types'

const copy = SECTIONS[3]
const TAPE_COLORS = ['#ffd27a', '#ff8fb1', '#8ec5ff', '#b9a6ff', '#7ee2a8', '#ffd27a', '#ff8fb1', '#8ec5ff']
const PHOTO_TILTS = [-2, 1.8, -1.5, 2, -1.8, 1.5, -2, 1.7]

export function WorkTimeline({ currentStep, setTotalSteps, onNext, onStepChange }: StepSectionProps) {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null)

  useEffect(() => {
    setTotalSteps(FRIENDS_SETS.length)
  }, [setTotalSteps])

  const setIndex = Math.min(Math.max(0, currentStep), FRIENDS_SETS.length - 1)
  const currentSet = FRIENDS_SETS[setIndex]

  useEffect(() => {
    if (currentSet.isHero) {
      confetti({
        particleCount: 45,
        spread: 70,
        origin: { y: 0.55 },
        colors: ['#ffd27a', '#ff8fb1', '#8ec5ff', '#ffffff']
      })
    } else {
      confetti({
        particleCount: 22,
        spread: 50,
        origin: { y: 0.6 },
        colors: ['#ffd27a', '#ff8fb1', '#8ec5ff']
      })
    }
  }, [setIndex, currentSet.isHero])

  const navigateModal = useCallback((newIdx: number) => {
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
        navigateModal((selectedIdx + 1) % FRIENDS_PHOTOS.length)
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        e.stopImmediatePropagation()
        navigateModal((selectedIdx - 1 + FRIENDS_PHOTOS.length) % FRIENDS_PHOTOS.length)
      }
    }
    window.addEventListener('keydown', handleKeyDown, true)
    return () => window.removeEventListener('keydown', handleKeyDown, true)
  }, [selectedIdx, navigateModal])

  const openPhoto = (idx: number) => {
    setSelectedIdx(idx)
    confetti({
      particleCount: 26,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#ffd27a', '#ff8fb1', '#8ec5ff']
    })
  }

  const handleSelectSet = (idx: number) => {
    if (idx === setIndex) return
    if (onStepChange) {
      onStepChange(idx)
    } else {
      onNext()
    }
  }

  return (
    <div className="section friends-section">
      <SectionHeader
        copy={copy}
        kicker={currentSet.kicker}
        title={currentSet.title}
        subtitle={currentSet.subtitle}
      />

      <div className="friends-stage">
        <div className="friends-set-toggle">
          {FRIENDS_SETS.map((s, idx) => (
            <button
              key={s.id}
              type="button"
              className={`friends-set-pill ${idx === setIndex ? 'active' : ''} ${s.isHero ? 'hero-pill' : ''}`}
              onClick={(e) => {
                e.stopPropagation()
                handleSelectSet(idx)
              }}
            >
              <span>{s.pill} ({s.items.length})</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={setIndex}
            className={`friends-cards-wrap set-${setIndex} count-${currentSet.items.length} ${currentSet.isHero ? 'hero-stage' : ''}`}
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.98 }}
            transition={{ duration: 0.32, ease: 'easeOut' }}
          >
            {currentSet.gif && (
              <motion.div
                className="friends-gif-badge"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.15 }}
              >
                <img src={currentSet.gif} alt={currentSet.gifAlt || 'Pengu'} className="friends-gif-img" />
                <span className="friends-gif-label">Road Trip Crew</span>
              </motion.div>
            )}

            {currentSet.isHero ? (
              <motion.div
                className="friends-hero-card"
                initial={{ opacity: 0, scale: 0.94, y: 18 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                onClick={(e) => {
                  e.stopPropagation()
                  openPhoto(currentSet.offset)
                }}
              >
                <span className="friends-tape left" style={{ background: '#ffd27a' }} />
                <span className="friends-tape right" style={{ background: '#ff8fb1' }} />
                <div className="friends-hero-sparkle">✨</div>

                <div className="friends-hero-photo-frame">
                  <Placeholder
                    label={currentSet.items[0].title}
                    src={currentSet.items[0].src}
                    aspectRatio="16 / 10"
                  />
                </div>

                <div className="friends-hero-body">
                  <div className="friends-hero-badge">Cherished Forever</div>
                  <h3 className="friends-hero-title">"{currentSet.items[0].title}"</h3>
                  <p className="friends-hero-caption">{currentSet.items[0].caption}</p>
                </div>
              </motion.div>
            ) : (
              currentSet.items.map((photo, itemIdx) => {
                const globalIdx = currentSet.offset + itemIdx
                return (
                  <motion.div
                    key={photo.id}
                    className={`friends-card ${photo.orientation || ''}`}
                    style={{ rotate: PHOTO_TILTS[globalIdx % PHOTO_TILTS.length] }}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.03 + itemIdx * 0.04 }}
                    whileHover={{ scale: 1.04, rotate: 0, zIndex: 6 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={(e) => {
                      e.stopPropagation()
                      openPhoto(globalIdx)
                    }}
                  >
                    <span
                      className="friends-tape"
                      style={{ background: TAPE_COLORS[globalIdx % TAPE_COLORS.length] }}
                    />
                    <div className="friends-photo-frame">
                      <Placeholder label={photo.title} src={photo.src} aspectRatio={photo.aspectRatio || '4 / 3'} />
                    </div>
                    <div className="friends-card-body">
                      <div className="friends-card-meta">
                        <span className="friends-photo-num">{String(globalIdx + 1).padStart(2, '0')}</span>
                        <span className="friends-card-title">{photo.title}</span>
                      </div>
                      <p className="friends-card-caption">{photo.caption}</p>
                    </div>
                  </motion.div>
                )
              })
            )}
          </motion.div>
        </AnimatePresence>

        <footer className="friends-footer">
          <span className="friends-hint-text">{copy.hint}</span>
        </footer>
      </div>

      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            className="friends-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIdx(null)}
          >
            <motion.div
              className="friends-modal-card"
              initial={{ scale: 0.85, opacity: 0, y: 24 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.88, opacity: 0, y: 16 }}
              transition={{ type: 'spring', damping: 18 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="friends-modal-header">
                <span className="pill">Memory {String(selectedIdx + 1).padStart(2, '0')} of {String(FRIENDS_PHOTOS.length).padStart(2, '0')}</span>
                <button
                  type="button"
                  className="friends-modal-close"
                  onClick={() => setSelectedIdx(null)}
                  aria-label="Close photo"
                >
                  ✕
                </button>
              </div>

              <div className={`friends-modal-photo ${FRIENDS_PHOTOS[selectedIdx].orientation || ''}`}>
                <Placeholder
                  label={FRIENDS_PHOTOS[selectedIdx].title}
                  src={FRIENDS_PHOTOS[selectedIdx].src}
                  aspectRatio={FRIENDS_PHOTOS[selectedIdx].aspectRatio || 'auto'}
                />
              </div>

              <div className="friends-modal-info">
                <h3 className="friends-modal-title">{FRIENDS_PHOTOS[selectedIdx].title}</h3>
                <p className="friends-modal-caption">"{FRIENDS_PHOTOS[selectedIdx].caption}"</p>
              </div>

              <div className="friends-modal-nav">
                <button
                  type="button"
                  className="friends-nav-btn"
                  onClick={() =>
                    navigateModal((selectedIdx - 1 + FRIENDS_PHOTOS.length) % FRIENDS_PHOTOS.length)
                  }
                  aria-label="Previous photo"
                >
                  ‹ Previous
                </button>

                <div className="friends-dots-tray">
                  {FRIENDS_PHOTOS.map((_, dotIdx) => (
                    <span
                      key={dotIdx}
                      className={`friends-dot ${dotIdx === selectedIdx ? 'active' : ''}`}
                      onClick={() => navigateModal(dotIdx)}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  className="friends-nav-btn"
                  onClick={() => navigateModal((selectedIdx + 1) % FRIENDS_PHOTOS.length)}
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
