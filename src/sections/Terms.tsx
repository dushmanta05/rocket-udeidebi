import { useState } from 'react'
import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'
import { TERMS_DATA } from '../data/terms'
import { SECTIONS, TERMS_COPY } from '../data/sections'
import { Stamp } from '../components/Stamp'
import { Hint, SectionHeader } from '../components/SectionHeader'

interface TermsProps {
  onNext: () => void
}

const copy = SECTIONS[8]
const ESCAPES_BEFORE_SURRENDER = 5

export function Terms({ onNext }: TermsProps) {
  const [agreed, setAgreed] = useState(false)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const [escapes, setEscapes] = useState(0)

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
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + idx * 0.07 }}
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
          <div className="signature">
            <span className="signature-name">{agreed ? TERMS_COPY.signature : ''}</span>
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
            <Stamp text={TERMS_COPY.stamp} subtext={TERMS_COPY.stampSub} color="#ff5a6e" />
          </div>
        )}
      </div>

      <Hint>{copy.hint}</Hint>
    </div>
  )
}
