import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CREW_COPY, SECTIONS } from '../data/sections'
import { useWishes } from '../hooks/useWishes'
import type { CrewWish } from '../data/wishes'
import { Placeholder } from '../components/Placeholder'
import { Hint, SectionHeader } from '../components/SectionHeader'
import type { StepSectionProps } from './types'

const copy = SECTIONS[12]

function VerticalVideo({ wish, onEnded }: { wish: CrewWish; onEnded: () => void }) {
  const [failed, setFailed] = useState(false)

  if (!wish.video || failed) {
    return <Placeholder label={`${wish.name}: ${CREW_COPY.noVideo}`} src={wish.poster} aspectRatio="9 / 16" video />
  }

  return (
    <video
      key={wish.video}
      className="crew-video"
      src={wish.video}
      poster={wish.poster}
      autoPlay
      playsInline
      controls
      onEnded={onEnded}
      onError={() => setFailed(true)}
      onClick={(e) => e.stopPropagation()}
    />
  )
}

export function CrewMessages({ currentStep, setTotalSteps, onNext }: StepSectionProps) {
  const wishes = useWishes()

  useEffect(() => {
    setTotalSteps(wishes.length)
  }, [setTotalSteps, wishes.length])

  const index = Math.min(currentStep, wishes.length - 1)
  const wish = wishes[index]
  const upcoming = wishes.slice(index + 1)

  return (
    <div className="section crew-section" onClick={onNext}>
      <SectionHeader copy={copy} kicker={`${copy.kicker} · ${index + 1} of ${wishes.length}`} />

      <div className="crew-layout">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${wish.name}-${index}`}
            className="crew-phone"
            initial={{ opacity: 0, y: 40, rotate: -4 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            exit={{ opacity: 0, y: -30, rotate: 4 }}
            transition={{ type: 'spring', damping: 16 }}
          >
            <VerticalVideo wish={wish} onEnded={onNext} />
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            key={`caption-${index}`}
            className="crew-caption"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            {wish.relation && <span className="pill">{wish.relation}</span>}
            <h3 className="script-title">{wish.name}</h3>
            {wish.message && <p className="crew-message">{wish.message}</p>}

            {upcoming.length > 0 && (
              <div className="crew-queue">
                <span className="crew-queue-label">{CREW_COPY.upNext}</span>
                {upcoming.slice(0, 4).map((next) => (
                  <span key={next.name} className="crew-queue-item">
                    {next.name}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="crew-dots">
        {wishes.map((w, i) => (
          <span key={`${w.name}-${i}`} className={`crew-dot ${i === index ? 'current' : i < index ? 'done' : ''}`} />
        ))}
      </div>

      <Hint>{copy.hint}</Hint>
    </div>
  )
}
