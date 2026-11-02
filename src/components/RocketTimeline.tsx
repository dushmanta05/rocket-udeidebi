import { useEffect, useMemo, useRef } from 'react'
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

const ROCKET_NOSE_OFFSET = 40
const SAMPLES = 160

function headingAt(t: number, variant: 'family' | 'work', forward: boolean) {
  const a = pointAt(Math.max(0, t - 0.005), variant)
  const b = pointAt(Math.min(1, t + 0.005), variant)
  const deg = Math.atan2(b.y - a.y, b.x - a.x) * (180 / Math.PI)
  return (forward ? deg : deg + 180) + ROCKET_NOSE_OFFSET
}

function arcFractions(variant: 'family' | 'work') {
  const lengths = [0]
  for (let i = 1; i <= SAMPLES; i++) {
    const p = pointAt((i - 1) / SAMPLES, variant)
    const q = pointAt(i / SAMPLES, variant)
    lengths.push(lengths[i - 1] + Math.hypot(q.x - p.x, q.y - p.y))
  }
  const total = lengths[SAMPLES]
  return (t: number) => lengths[Math.round(t * SAMPLES)] / total
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

  const arcAt = useMemo(() => arcFractions(variant), [variant])
  const previous = useRef(index)
  const duration = variant === 'family' ? 2.8 : 2.2

  const flight = useMemo(() => {
    const from = tFor(previous.current)
    const to = tFor(index)
    const forward = to >= from
    const frames = Array.from({ length: 31 }, (_, i) => from + ((to - from) * i) / 30)
    return {
      left: frames.map((t) => `${(pointAt(t, variant).x / VIEW_W) * 100}%`),
      top: frames.map((t) => `${(pointAt(t, variant).y / VIEW_H) * 100}%`),
      rotate: frames.map((t) => headingAt(t, variant, forward)),
      lit: arcAt(to)
    }
  }, [index, variant, arcAt])

  useEffect(() => {
    previous.current = index
  }, [index])

  return (
    <div className={`section timeline-section timeline-${variant}`} onClick={onNext}>
      <SectionHeader copy={copy} />

      <div className="timeline-track">
        <svg viewBox={`0 0 ${VIEW_W} ${VIEW_H}`} className="timeline-svg" preserveAspectRatio="none">
          <path d={pathD} className="timeline-path" />
          <motion.path
            d={pathD}
            className="timeline-path-done"
            initial={false}
            animate={{ pathLength: Math.max(flight.lit, 0.001) }}
            transition={{ duration, ease: 'easeInOut' }}
          />
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
          initial={false}
          animate={{ left: flight.left, top: flight.top, rotate: flight.rotate }}
          transition={{ duration, ease: 'easeInOut' }}
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
