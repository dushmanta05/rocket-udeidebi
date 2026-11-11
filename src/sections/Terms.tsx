import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'
import { TERMS_DATA } from '../data/terms'
import { SECTIONS, TERMS_COPY } from '../data/sections'
import { Stamp } from '../components/Stamp'
import { Pengu } from '../components/Pengu'
import { Hint, SectionHeader } from '../components/SectionHeader'

interface TermsProps {
  onNext: () => void
}

const copy = SECTIONS[9]
const ESCAPES_BEFORE_SURRENDER = 5
const CLAUSE_TILTS = [-2.2, 1.8, -1.5, 2, -2, 1.6, -1.8, 2.2]

export function Terms({ onNext }: TermsProps) {
  const [agreed, setAgreed] = useState(false)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const [escapes, setEscapes] = useState(0)
  const [activeTermIdx, setActiveTermIdx] = useState<number | null>(null)

  const accept = () => {
    if (agreed) return
    setAgreed(true)
    confetti({ particleCount: 90, spread: 100, origin: { y: 0.6 } })
    setTimeout(onNext, 2600)
  }

  const evade = () => {
    if (escapes >= ESCAPES_BEFORE_SURRENDER) {
      accept()
      return
    }
    setOffset({ x: (Math.random() - 0.5) * 320, y: -Math.random() * 140 })
    setEscapes((n) => n + 1)
  }

  const surrendered = escapes >= ESCAPES_BEFORE_SURRENDER

  return (
    <div className="section terms-section">
      <SectionHeader copy={copy} />

      <div className="contract">
        <div className="contract-head">
          <span className="contract-seal">{TERMS_COPY.seal}</span>
          <div>
            <span className="contract-label">{TERMS_COPY.heading}</span>
            <span className="contract-sub">{TERMS_DATA.length} {TERMS_COPY.headingSub}</span>
          </div>
        </div>

        <div className="clause-grid">
          {TERMS_DATA.map((term, idx) => (
            <motion.div
              key={term.id}
              className="clause"
              style={{ rotate: CLAUSE_TILTS[idx % CLAUSE_TILTS.length] }}
              whileHover={{ scale: 1.04, rotate: 0 }}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + idx * 0.06 }}
              onClick={() => setActiveTermIdx(idx)}
            >
              <span className="clause-num">{String(term.id).padStart(2, '0')}</span>
              <div>
                <h4 className="clause-title">{term.title}</h4>
                <p className="clause-rule">{term.rule}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="contract-foot">
          <div className="terms-pengu-yes-badge">
            <Pengu size={110} variant="yes" />
          </div>

          <div className="signature">
            <div className="signature-line">
              <span className="signature-name cursive-signature">{TERMS_COPY.signature}</span>
              <div className="witness-pills">
                <span className="name-pill">Hippo</span>
                <span className="name-pill">Pengu</span>
                <Pengu size={34} variant="flower" />
              </div>
            </div>
            <span className="signature-label">{TERMS_COPY.signatureLabel}</span>
          </div>
          <div className="contract-actions">
            <motion.button
              type="button"
              className="primary-btn"
              whileTap={{ scale: 0.95 }}
              animate={surrendered ? { scale: [1, 1.12, 1] } : {}}
              transition={{ repeat: surrendered ? Infinity : 0, duration: 0.9 }}
              onClick={accept}
            >
              {TERMS_COPY.agree}
            </motion.button>
            <motion.button
              type="button"
              className="ghost-btn"
              animate={{ x: offset.x, y: offset.y, rotate: surrendered ? [0, -6, 6, 0] : 0 }}
              transition={{ type: 'spring', damping: 10, stiffness: 260 }}
              onMouseEnter={evade}
              onClick={evade}
            >
              {surrendered ? TERMS_COPY.surrender : TERMS_COPY.disagree}
            </motion.button>
          </div>
        </div>

        {agreed && (
          <div className="stamp-overlay">
            <motion.div
              className="terms-love-pengu"
              initial={{ scale: 0, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ delay: 0.15, type: 'spring', damping: 11 }}
            >
              <Pengu size={120} variant="love" />
            </motion.div>
            <Stamp text={TERMS_COPY.stamp} subtext={TERMS_COPY.stampSub} color="#ff5a6e" />
          </div>
        )}
      </div>

      <AnimatePresence>
        {activeTermIdx !== null && (
          <motion.div
            className="term-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveTermIdx(null)}
          >
            <motion.div
              className="term-modal"
              initial={{ scale: 0.8, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 18 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="term-modal-header">
                <span className="pill">Clause {String(TERMS_DATA[activeTermIdx].id).padStart(2, '0')} of {TERMS_DATA.length}</span>
                <button type="button" className="term-modal-close" onClick={() => setActiveTermIdx(null)}>✕</button>
              </div>
              <h3 className="term-modal-title">{TERMS_DATA[activeTermIdx].title}</h3>
              <p className="term-modal-rule">"{TERMS_DATA[activeTermIdx].rule}"</p>
              <div className="term-modal-witnesses">
                <span className="name-pill">Hippo</span>
                <span className="name-pill">Pengu</span>
                <Pengu size={34} variant="flower" />
              </div>
              <div className="term-modal-nav">
                <button
                  type="button"
                  className="ghost-btn"
                  onClick={() => setActiveTermIdx((prev) => (prev! > 0 ? prev! - 1 : TERMS_DATA.length - 1))}
                >
                  Previous
                </button>
                <span className="term-modal-counter">{activeTermIdx + 1} / {TERMS_DATA.length}</span>
                <button
                  type="button"
                  className="primary-btn"
                  onClick={() => setActiveTermIdx((prev) => (prev! < TERMS_DATA.length - 1 ? prev! + 1 : 0))}
                >
                  Next
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
