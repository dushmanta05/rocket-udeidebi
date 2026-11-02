import { motion } from 'framer-motion'
import { PenguinRocketArt } from './art/PenguinRocketArt'

interface ProgressRocketProps {
  currentSection: number
  totalSections: number
  currentStep: number
  totalSteps: number
  onSectionClick: (section: number) => void
}

const SECTION_SHORT_NAMES = [
  'Welcome',
  'Birth',
  'Family',
  'Work',
  'Polaroids',
  'Awards',
  'Bag Reveal',
  'Tubelight',
  'T&C',
  'Say No',
  'Kitchen',
  'Predictions',
  'Finale'
]

export function ProgressRocket({
  currentSection,
  totalSections,
  currentStep,
  totalSteps,
  onSectionClick
}: ProgressRocketProps) {
  const stepRatio = totalSteps > 1 ? currentStep / totalSteps : 0
  const progressPercent = Math.min(100, Math.max(0, ((currentSection + stepRatio) / (totalSections - 1)) * 100))

  return (
    <div className="progress-container">
      <div className="progress-glass-bar">
        <div className="progress-track">
          <div
            className="progress-fill"
            style={{ width: `${progressPercent}%` }}
          />

          <motion.div
            className="progress-rocket-marker"
            style={{ left: `${progressPercent}%` }}
            animate={{
              y: [-1, 2, -1],
              rotate: [0, 1.5, -1, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            <div className="rocket-pilot-wrapper">
              <PenguinRocketArt size={58} hasFlame={true} />
            </div>
            <div className="progress-speed-indicator">
              <span>{Math.round(progressPercent)}%</span>
            </div>
          </motion.div>
        </div>

        <div className="progress-milestones">
          {Array.from({ length: totalSections }).map((_, idx) => (
            <button
              key={idx}
              className={`milestone-dot ${idx <= currentSection ? 'active' : ''} ${idx === currentSection ? 'current' : ''}`}
              onClick={(e) => {
                e.stopPropagation()
                onSectionClick(idx)
              }}
              title={SECTION_SHORT_NAMES[idx] || `Section ${idx + 1}`}
              aria-label={SECTION_SHORT_NAMES[idx] || `Section ${idx + 1}`}
            >
              <span className="milestone-tooltip">{SECTION_SHORT_NAMES[idx]}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
