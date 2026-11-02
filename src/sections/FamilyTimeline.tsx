import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TIMELINE_STOPS } from '../data/timeline'
import { Placeholder } from '../components/Placeholder'
import { RocketArt } from '../components/art/RocketArt'

interface FamilyTimelineProps {
  currentStep: number
  setTotalSteps: (steps: number) => void
  onNext: () => void
}

export function FamilyTimeline({ currentStep, setTotalSteps, onNext }: FamilyTimelineProps) {
  const familyStops = TIMELINE_STOPS.filter((stop) => stop.chapter === 'family')

  useEffect(() => {
    setTotalSteps(familyStops.length)
  }, [setTotalSteps, familyStops.length])

  const activeStop = familyStops[Math.min(currentStep, familyStops.length - 1)]

  return (
    <div className="section-container timeline-section family-theme" onClick={onNext}>
      <div className="timeline-header">
        <span className="chapter-badge">Chapter 1: The Origin Story</span>
        <h2 className="timeline-heading">Family & Early Years</h2>
      </div>

      <div className="timeline-stage">
        <div className="svg-path-wrapper">
          <svg className="timeline-svg" viewBox="0 0 1000 240" fill="none">
            <path
              d="M 50 120 C 250 20, 350 220, 500 120 C 650 20, 750 220, 950 120"
              stroke="#cbd5e1"
              strokeWidth="6"
              strokeDasharray="10 10"
            />
            {familyStops.map((_, idx) => {
              const xPos = 50 + idx * (900 / (familyStops.length - 1))
              const yPos = 120 + Math.sin(idx * 1.5) * 50
              return (
                <circle
                  key={idx}
                  cx={xPos}
                  cy={yPos}
                  r={idx === currentStep ? "12" : "8"}
                  fill={idx <= currentStep ? "#f97316" : "#94a3b8"}
                  stroke="#ffffff"
                  strokeWidth="3"
                />
              )
            })}
          </svg>

          <motion.div
            className="traveling-rocket"
            animate={{
              x: `${(currentStep / (familyStops.length - 1)) * 85}%`,
              y: Math.sin(currentStep * 1.5) * 35
            }}
            transition={{ type: 'spring', damping: 15, stiffness: 120 }}
          >
            <RocketArt size={75} withPenguin={true} />
            <div className="rocket-burst-tag">Udeidebi!</div>
          </motion.div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeStop.id}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.35 }}
            className="stop-card"
          >
            <div className="stop-photo-box">
              <Placeholder
                label={`PHOTO: ${activeStop.title} (${activeStop.year})`}
                src={activeStop.src}
                width={300}
                aspectRatio="4 / 3"
                tilt={currentStep % 2 === 0 ? -3 : 3}
              />
            </div>

            <div className="stop-content">
              <span className="stop-year">{activeStop.year}</span>
              <h3 className="stop-title">{activeStop.title}</h3>
              <p className="stop-caption">{activeStop.caption}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="step-indicator-bar">
        Stop {currentStep + 1} of {familyStops.length} • Click or press right arrow to glide →
      </div>
    </div>
  )
}
