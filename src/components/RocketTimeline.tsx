import { useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { TimelineStop } from '../data/timeline'
import type { SectionCopy } from '../data/sections'
import { PenguinRocketArt } from './art/PenguinRocketArt'
import { Placeholder } from './Placeholder'
import { Hint, SectionHeader } from './SectionHeader'

interface RocketTimelineProps {
  stops: TimelineStop[]
  copy: SectionCopy
  variant: 'family' | 'work'
  currentStep: number
  setTotalSteps: (steps: number) => void
  onNext: () => void
}

const VIEW_W = 1000
const VIEW_H = 200
const MARGIN = 60

function curveY(t: number, variant: 'family' | 'work') {
  const waves = variant === 'family' ? 1.5 : 2.5
  const amp = variant === 'family' ? 52 : 62
  return VIEW_H / 2 + Math.sin(t * Math.PI * 2 * waves) * amp
}

function pointAt(t: number, variant: 'family' | 'work') {
  return { x: MARGIN + t * (VIEW_W - MARGIN * 2), y: curveY(t, variant) }
}

export function RocketTimeline({ stops, copy, variant, currentStep, setTotalSteps, onNext }: RocketTimelineProps) {
  useEffect(() => {
    setTotalSteps(stops.length)
  }, [setTotalSteps, stops.length])

  const index = Math.min(currentStep, stops.length - 1)
  const stop = stops[index]
  const tFor = (i: number) => (stops.length > 1 ? i / (stops.length - 1) : 0)

  const pathD = useMemo(() => {
    const points = Array.from({ length: 81 }, (_, i) => pointAt(i / 80, variant))
    return points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(' ')
  }, [variant])

  const progressD = useMemo(() => {
    const end = tFor(index)
    const count = Math.max(2, Math.round(end * 80) + 1)
    const points = Array.from({ length: count }, (_, i) => pointAt((i / (count - 1)) * end, variant))
    return points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(' ')
  }, [index, variant, stops.length])

  const here = pointAt(tFor(index), variant)
  const ahead = pointAt(Math.min(1, tFor(index) + 0.01), variant)
  const slope = Math.atan2(ahead.y - here.y, ahead.x - here.x) * (180 / Math.PI)

  return (
    <div className={`section timeline-section timeline-${variant}`} onClick={onNext}>
      <SectionHeader copy={copy} />

      <div className="timeline-track">
        <svg viewBox={`0 0 ${VIEW_W} ${VIEW_H}`} className="timeline-svg" preserveAspectRatio="none">
          <path d={pathD} className="timeline-path" />
          <path d={progressD} className="timeline-path-done" />
          {stops.map((s, i) => {
            const p = pointAt(tFor(i), variant)
            return (
              <g key={s.id}>
                <circle cx={p.x} cy={p.y} r={i === index ? 11 : 7} className={i <= index ? 'stop-dot done' : 'stop-dot'} />
              </g>
            )
          })}
        </svg>
        {stops.map((s, i) => {
          const p = pointAt(tFor(i), variant)
          return (
            <span
              key={s.id}
              className={`stop-label ${i === index ? 'current' : ''}`}
              style={{ left: `${(p.x / VIEW_W) * 100}%`, top: `${(p.y / VIEW_H) * 100}%` }}
            >
              {s.year}
            </span>
          )
        })}
        <motion.div
          className="timeline-rocket"
          animate={{
            left: `${(here.x / VIEW_W) * 100}%`,
            top: `${(here.y / VIEW_H) * 100}%`,
            rotate: slope + 35
          }}
          transition={{ type: 'spring', damping: variant === 'work' ? 13 : 16, stiffness: variant === 'work' ? 160 : 110 }}
        >
          <PenguinRocketArt size={68} />
        </motion.div>
      </div>

      <AnimatePresence mode="wait">
        <motion.article
          key={stop.id}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35 }}
          className="milestone-card"
        >
          <div className="milestone-photo">
            <Placeholder label={`Photo: ${stop.title}`} src={stop.src} aspectRatio="4 / 3" />
          </div>
          <div className="milestone-text">
            <span className="pill">{stop.year}</span>
            <h3 className="milestone-title">{stop.title}</h3>
            <p className="milestone-caption">{stop.caption}</p>
            <span className="milestone-count">
              {index + 1} / {stops.length}
            </span>
          </div>
        </motion.article>
      </AnimatePresence>

      <Hint>{copy.hint}</Hint>
    </div>
  )
}
