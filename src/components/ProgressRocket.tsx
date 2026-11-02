import { RocketArt } from './art/RocketArt'

interface ProgressRocketProps {
  currentSection: number
  totalSections: number
  currentStep: number
  totalSteps: number
  onSectionClick: (section: number) => void
}

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
      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: `${progressPercent}%` }}
        />
        <div
          className="progress-rocket-marker"
          style={{ left: `${progressPercent}%` }}
        >
          <div className="rocket-icon-wrapper">
            <RocketArt size={28} hasFlame={true} />
          </div>
        </div>
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
            title={`Go to section ${idx + 1}`}
            aria-label={`Go to section ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
