import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'
import { PREDICTION_SETS, type PredictionItem } from '../data/predictions'
import { SECTIONS } from '../data/sections'
import { Pengu } from '../components/Pengu'
import { SectionHeader } from '../components/SectionHeader'
import type { StepSectionProps } from './types'

const copy = SECTIONS[12]
const CARD_TILTS = [-1.5, 1.8, -1.2, 1.5, -1.8, 1.2]

function Sparkle({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <path d="M12 0 L14.2 9.8 L24 12 L14.2 14.2 L12 24 L9.8 14.2 L0 12 L9.8 9.8 Z" fill="currentColor" />
    </svg>
  )
}

export function Predictions({ currentStep, setTotalSteps, onNext, onStepChange }: StepSectionProps) {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null)

  useEffect(() => {
    setTotalSteps(PREDICTION_SETS.length)
  }, [setTotalSteps])

  const pageIdx = Math.min(Math.max(0, currentStep), PREDICTION_SETS.length - 1)
  const currentSet = PREDICTION_SETS[pageIdx]
  const items = currentSet.items

  useEffect(() => {
    setSelectedIdx(null)
    confetti({
      particleCount: 22,
      spread: 50,
      origin: { y: 0.6 },
      colors: ['#ffd27a', '#b9a6ff', '#ff8fb1']
    })
  }, [pageIdx])

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
        navigateModal((selectedIdx + 1) % items.length)
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        e.stopImmediatePropagation()
        navigateModal((selectedIdx - 1 + items.length) % items.length)
      }
    }
    window.addEventListener('keydown', handleKeyDown, true)
    return () => window.removeEventListener('keydown', handleKeyDown, true)
  }, [selectedIdx, items.length, navigateModal])

  const openCard = (idx: number) => {
    setSelectedIdx(idx)
    confetti({
      particleCount: 26,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#ffd27a', '#b9a6ff', '#ff8fb1']
    })
  }

  const handleSelectSet = (idx: number) => {
    if (idx === pageIdx) return
    if (onStepChange) {
      onStepChange(idx)
    } else {
      onNext()
    }
  }

  const activeItem: PredictionItem | null = selectedIdx !== null ? items[selectedIdx] : null

  return (
    <div className="section predictions-section">
      <SectionHeader
        copy={copy}
        kicker={currentSet.kicker}
        title={currentSet.title}
        subtitle={currentSet.subtitle}
      />

      <div className="predictions-stage">
        <div className="predictions-set-toggle">
          {PREDICTION_SETS.map((s, idx) => (
            <button
              key={s.id}
              type="button"
              className={`predictions-set-pill ${idx === pageIdx ? 'active' : ''}`}
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
            key={currentSet.id}
            className="predictions-grid-wrap"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.98 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <div className="predictions-grid">
              {items.map((item, idx) => (
                <motion.div
                  key={item.id}
                  className="fortune-grid-card"
                  style={{ rotate: CARD_TILTS[idx % CARD_TILTS.length] }}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 + idx * 0.04 }}
                  whileHover={{ scale: 1.04, rotate: 0, zIndex: 6 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={(e) => {
                    e.stopPropagation()
                    openCard(idx)
                  }}
                >
                  <Sparkle className="fortune-sparkle tl" />
                  <Sparkle className="fortune-sparkle br" />

                  <div className="fortune-grid-head">
                    <span className="fortune-grid-num">Vision {String(idx + 1).padStart(2, '0')}</span>
                    {item.tag && <span className="fortune-grid-tag">{item.tag}</span>}
                  </div>

                  <p className="fortune-grid-text">"{item.text}"</p>

                  {item.author && (
                    <div className="fortune-grid-author">
                      <span className="fortune-author-label">Foreseen by</span>
                      <strong className="fortune-author-name">{item.author}</strong>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <footer className="predictions-footer">
          <span className="predictions-hint-text">Tap any card to spotlight · Space / Arrow keys flip page</span>
        </footer>
      </div>

      <AnimatePresence>
        {selectedIdx !== null && activeItem && (
          <motion.div
            className="fortune-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIdx(null)}
          >
            <motion.div
              className="fortune-modal-card"
              initial={{ scale: 0.85, opacity: 0, y: 24 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.88, opacity: 0, y: 16 }}
              transition={{ type: 'spring', damping: 18 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="fortune-modal-mascot">
                <Pengu size={110} variant={activeItem.text.includes('Rocket udeidebi') ? 'rocket' : 'future'} />
              </div>

              <div className="fortune-modal-header">
                <span className="pill">Vision {String(selectedIdx + 1).padStart(2, '0')} of {String(items.length).padStart(2, '0')} · {currentSet.pill}</span>
                <button
                  type="button"
                  className="fortune-modal-close"
                  onClick={() => setSelectedIdx(null)}
                  aria-label="Close prophecy"
                >
                  ✕
                </button>
              </div>

              <div className="fortune-modal-body">
                <Sparkle className="fortune-sparkle tl" />
                <Sparkle className="fortune-sparkle br" />
                <p className="fortune-modal-text">"{activeItem.text}"</p>
                {activeItem.author ? (
                  <div className="fortune-modal-author">
                    <span className="fortune-author-label">Foreseen by</span>
                    <strong className="fortune-author-name">{activeItem.author}</strong>
                  </div>
                ) : (
                  <div className="fortune-modal-cosmic-tag">{activeItem.tag || '✦ Cosmic Oracle ✦'}</div>
                )}
              </div>

              <div className="fortune-modal-nav">
                <button
                  type="button"
                  className="fortune-nav-btn"
                  onClick={() => navigateModal((selectedIdx - 1 + items.length) % items.length)}
                  aria-label="Previous prophecy"
                >
                  ‹ Previous
                </button>

                <div className="fortune-dots-tray">
                  {items.map((_, dotIdx) => (
                    <span
                      key={dotIdx}
                      className={`fortune-dot ${dotIdx === selectedIdx ? 'active' : ''}`}
                      onClick={() => navigateModal(dotIdx)}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  className="fortune-nav-btn"
                  onClick={() => navigateModal((selectedIdx + 1) % items.length)}
                  aria-label="Next prophecy"
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
