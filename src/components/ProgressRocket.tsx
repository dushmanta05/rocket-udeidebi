import { motion } from 'framer-motion'
import { SECTIONS } from '../data/sections'
import { PenguinRocketArt } from './art/PenguinRocketArt'

interface ProgressRocketProps {
  currentSection: number
  totalSections: number
  currentStep: number
  totalSteps: number
  onSectionClick: (section: number) => void
  onPrev?: () => void
  onNext?: () => void
}

export function ProgressRocket({
  currentSection,
  totalSections,
  currentStep,
  totalSteps,
  onSectionClick,
  onPrev,
  onNext
}: ProgressRocketProps) {
  const stepRatio = totalSteps > 1 ? currentStep / totalSteps : 0
  const percent = Math.min(100, Math.max(0, ((currentSection + stepRatio) / (totalSections - 1)) * 100))

  return (
    <nav className="progress" aria-label="Sections">
      {onPrev && (
        <button
          type="button"
          className="dock-nav-btn prev"
          onClick={(e) => {
            e.stopPropagation()
            onPrev()
          }}
          aria-label="Previous"
        >
          ‹
        </button>
      )}
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${percent}%` }} />
        {SECTIONS.map((section, idx) => (
          <button
            key={section.short}
            type="button"
            className={`progress-dot ${idx <= currentSection ? 'active' : ''} ${idx === currentSection ? 'current' : ''}`}
            style={{ left: `${(idx / (totalSections - 1)) * 100}%` }}
            onClick={(e) => {
              e.stopPropagation()
              onSectionClick(idx)
            }}
            aria-label={section.short}
          >
            <span className="progress-tip">{section.short}</span>
          </button>
        ))}
        <motion.div
          className="progress-rocket"
          animate={{ left: `${percent}%` }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          <PenguinRocketArt size={36} tilt={40} />
        </motion.div>
      </div>
      {onNext && currentSection < totalSections - 1 && (
        <button
          type="button"
          className="dock-nav-btn next"
          onClick={(e) => {
            e.stopPropagation()
            onNext()
          }}
          aria-label="Next"
        >
          ›
        </button>
      )}
    </nav>
  )
}
