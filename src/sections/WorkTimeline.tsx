import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TIMELINE_STOPS } from '../data/timeline'
import { Placeholder } from '../components/Placeholder'
import { RocketArt } from '../components/art/RocketArt'

interface WorkTimelineProps {
  currentStep: number
  setTotalSteps: (steps: number) => void
  onNext: () => void
}

export function WorkTimeline({ currentStep, setTotalSteps, onNext }: WorkTimelineProps) {
  const workStops = TIMELINE_STOPS.filter((stop) => stop.chapter === 'work')

  useEffect(() => {
    setTotalSteps(workStops.length)
  }, [setTotalSteps, workStops.length])

  const activeStop = workStops[Math.min(currentStep, workStops.length - 1)]

  return (
    <div className="section-container timeline-section work-theme" onClick={onNext}>
      <div className="timeline-header">
        <span className="chapter-badge work-badge">Chapter 2: Work Fam Chaos</span>
        <h2 className="timeline-heading">Then We Met: The Rocket Era</h2>
      </div>

      <div className="speed-lines-container">
        <div className="speed-line line-1" />
        <div className="speed-line line-2" />
        <div className="speed-line line-3" />
      </div>

      <div className="timeline-stage">
        <div className="svg-path-wrapper">
          <svg className="timeline-svg" viewBox="0 0 1000 240" fill="none">
            <path
              d="M 50 140 C 200 40, 380 240, 520 100 C 660 -20, 820 220, 950 80"
              stroke="#fb7185"
              strokeWidth="6"
              strokeDasharray="8 8"
            />
            {workStops.map((_, idx) => {
              const xPos = 50 + idx * (900 / (workStops.length - 1))
              const yPos = 140 - idx * 10 + (idx % 2 === 0 ? 30 : -30)
              return (
                <circle
                  key={idx}
                  cx={xPos}
                  cy={yPos}
                  r={idx === currentStep ? "13" : "8"}
                  fill={idx <= currentStep ? "#ef4444" : "#fda4af"}
                  stroke="#ffffff"
                  strokeWidth="3"
                />
              )
            })}
          </svg>

          <motion.div
            className="traveling-rocket accelerated-rocket"
            animate={{
              x: `${(currentStep / (workStops.length - 1)) * 85}%`,
              y: (currentStep % 2 === 0 ? 25 : -25)
            }}
            transition={{ type: 'spring', damping: 12, stiffness: 180 }}
          >
            <RocketArt size={82} withPenguin={true} />
            <div className="rocket-speed-sparks">⚡ FULL BOOST</div>
          </motion.div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeStop.id}
            initial={{ opacity: 0, x: 50, scale: 0.92 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -50, scale: 0.92 }}
            transition={{ duration: 0.28 }}
            className="stop-card work-card"
          >
            <div className="stop-photo-box">
              <Placeholder
                label={`PHOTO: ${activeStop.title}`}
                src={activeStop.src}
                width={320}
                aspectRatio="4 / 3"
                tilt={currentStep % 2 === 0 ? 4 : -4}
              />
            </div>

            <div className="stop-content">
              <span className="stop-year work-year">{activeStop.year}</span>
              <h3 className="stop-title">{activeStop.title}</h3>
              <p className="stop-caption">{activeStop.caption}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="step-indicator-bar">
        Stop {currentStep + 1} of {workStops.length} • Click to accelerate →
      </div>
    </div>
  )
}
