import { useState } from 'react'
import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'
import { TERMS_DATA } from '../data/terms'
import { Stamp } from '../components/Stamp'

interface TermsProps {
  onNext: () => void
}

export function Terms({ onNext }: TermsProps) {
  const [isAgreed, setIsAgreed] = useState(false)
  const [disagreeOffset, setDisagreeOffset] = useState({ x: 0, y: 0 })
  const [evadeCount, setEvadeCount] = useState(0)

  const handleEvade = () => {
    if (evadeCount >= 5) {
      handleAccept()
      return
    }
    const randomX = (Math.random() - 0.5) * 260
    const randomY = (Math.random() - 0.5) * 160
    setDisagreeOffset({ x: randomX, y: randomY })
    setEvadeCount((prev) => prev + 1)
  }

  const handleAccept = () => {
    setIsAgreed(true)
    confetti({
      particleCount: 65,
      spread: 95,
      origin: { y: 0.6 }
    })
    setTimeout(() => {
      onNext()
    }, 2400)
  }

  return (
    <div className="section-container terms-section">
      <div className="section-header">
        <span className="chapter-badge">⚖️ Supreme Bachelorette Tribunal ⚖️</span>
        <h2 className="section-heading">Bride's Terms & Conditions</h2>
        <p className="section-subtext">Legally binding clauses drafted by Friends, Siblings & Cousins</p>
      </div>

      <div className="parchment-deed-card">
        <div className="parchment-top-bar">
          <span className="parchment-ribbon">OFFICIAL COVENANT</span>
        </div>

        <div className="parchment-scrollable-body">
          {TERMS_DATA.map((term) => (
            <div key={term.id} className="contract-rule-row">
              <span className="rule-number">Clause {term.id}.</span>
              <span className="rule-text">{term.rule}</span>
            </div>
          ))}
        </div>

        {isAgreed && (
          <div className="stamp-overlay">
            <Stamp text="ACCEPTED" subtext="NO DISAGREEMENT ALLOWED • CASE CLOSED" color="#dc2626" />
          </div>
        )}

        <div className="contract-footer-actions">
          <button
            className={`agree-action-btn ${isAgreed ? 'btn-active' : ''}`}
            onClick={handleAccept}
          >
            ✓ I Agree (I Understand Everything)
          </button>

          <motion.button
            animate={{ x: disagreeOffset.x, y: disagreeOffset.y }}
            transition={{ type: 'spring', damping: 10, stiffness: 260 }}
            onMouseEnter={handleEvade}
            onClick={handleEvade}
            className="disagree-runaway-btn"
          >
            {evadeCount >= 5 ? 'Fine, I Surrender & Agree!' : 'Disagree'}
          </motion.button>
        </div>
      </div>
    </div>
  )
}
