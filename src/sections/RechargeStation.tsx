import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'
import { SECTIONS } from '../data/sections'
import { Pengu } from '../components/Pengu'
import { Hint, SectionHeader } from '../components/SectionHeader'

interface RechargeStationProps {
  onNext: () => void
}

export function RechargeStation({ onNext }: RechargeStationProps) {
  const [seconds, setSeconds] = useState(0)
  const isLoaded = seconds >= 5
  const copy = SECTIONS[7]

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => {
        if (prev >= 5) {
          clearInterval(interval)
          return 5
        }
        return prev + 1
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (isLoaded) {
      confetti({
        particleCount: 90,
        spread: 100,
        origin: { y: 0.5 },
        colors: ['#ffd27a', '#7ee2a8', '#ff8fb1', '#ffffff']
      })
    }
  }, [isLoaded])

  const percent = Math.min(100, Math.round((seconds / 5) * 100))

  return (
    <div className="section recharge-section">
      <SectionHeader copy={copy} />

      <motion.article
        className="recharge-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <motion.div
          className="recharge-hero-pengu"
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Pengu size={260} variant="energy" />
        </motion.div>

        <p className="recharge-roast-curved">
          Hold on! Hippo gets tired a lot from carrying this infinite bag and locating the nearest chair.
          Energy loading in progress...
        </p>

        <div className="recharge-hud">
          <div className="recharge-hud-head">
            <span className="recharge-label">{isLoaded ? '100%' : 'Charging...'}</span>
            <span className="recharge-percent">{percent}%</span>
          </div>
          <div className="recharge-hud-bar">
            <motion.div
              className="recharge-hud-fill"
              style={{ width: `${percent}%` }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />
          </div>
        </div>

        <motion.button
          type="button"
          className={`primary-btn recharge-resume-btn ${isLoaded ? 'ready' : 'locked'}`}
          disabled={!isLoaded}
          onClick={isLoaded ? onNext : undefined}
          whileHover={isLoaded ? { scale: 1.05 } : {}}
          whileTap={isLoaded ? { scale: 0.95 } : {}}
          animate={isLoaded ? { scale: [1, 1.06, 1] } : {}}
          transition={isLoaded ? { repeat: Infinity, duration: 1.2 } : {}}
        >
          {isLoaded ? 'Resume Party →' : `⚡ Charging... (${5 - seconds}s)`}
        </motion.button>
      </motion.article>

      <Hint>{isLoaded ? 'Click the button to continue' : 'Wait for battery to reach 100%'}</Hint>
    </div>
  )
}
