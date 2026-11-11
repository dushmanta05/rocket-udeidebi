import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'
import { CREW_COPY, SECTIONS } from '../data/sections'
import { ASSETS } from '../data/assets'
import { useWishes } from '../hooks/useWishes'
import { Pengu } from '../components/Pengu'
import { Hint, SectionHeader } from '../components/SectionHeader'
import type { StepSectionProps } from './types'

const copy = SECTIONS[12]

export function CrewMessages({ setTotalSteps, onNext }: StepSectionProps) {
  const wishes = useWishes()
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [videoFailed, setVideoFailed] = useState(false)
  const [remoteFlash, setRemoteFlash] = useState(false)

  const filmSource = ASSETS.crewFilm || (wishes.length > 0 && wishes[0].video ? wishes[0].video : null)

  useEffect(() => {
    setTotalSteps(1)
  }, [setTotalSteps])

  const triggerRemote = () => {
    setRemoteFlash(true)
    setTimeout(() => setRemoteFlash(false), 350)
    confetti({
      particleCount: 24,
      spread: 60,
      origin: { x: 0.75, y: 0.6 },
      colors: ['#ff4d6d', '#ffd27a', '#8ec5ff']
    })

    if (!videoRef.current) return

    if (isPlaying) {
      videoRef.current.pause()
    } else {
      videoRef.current.play().catch(() => {})
    }
  }

  const handleVideoClick = () => {
    if (!videoRef.current) return
    if (isPlaying) {
      videoRef.current.pause()
    } else {
      videoRef.current.play().catch(() => {})
    }
  }

  return (
    <div className="section crew-section">
      <SectionHeader copy={copy} />

      <div className="cinema-stage">
        <div className="cinema-screen-wrap">
          <div className="cinema-bezel">
            <div className="cinema-screen">
              {filmSource && !videoFailed ? (
                <video
                  ref={videoRef}
                  className="cinema-video"
                  src={filmSource}
                  playsInline
                  controls
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onEnded={onNext}
                  onError={() => setVideoFailed(true)}
                  onClick={handleVideoClick}
                />
              ) : (
                <div className="cinema-standby" onClick={triggerRemote}>
                  <div className="cinema-standby-curtain" />
                  <motion.div
                    className="cinema-play-orb"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="play-triangle">
                      <polygon points="6,4 20,12 6,20" />
                    </svg>
                  </motion.div>
                  <h3 className="standby-title">{CREW_COPY.filmTitle}</h3>
                  <p className="standby-sub">{CREW_COPY.filmSubtitle}</p>
                  <span className="standby-badge">{CREW_COPY.filmPlaceholder}</span>
                </div>
              )}
            </div>
          </div>

          <div className="cinema-status-bar">
            <span className={`status-led ${isPlaying ? 'live' : ''}`} />
            <span className="status-text">{isPlaying ? CREW_COPY.nowPlaying : CREW_COPY.playPrompt}</span>
          </div>
        </div>

        <motion.div
          className="remote-pengu-wrap"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', damping: 14 }}
          onClick={triggerRemote}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="pengu-speech-bubble">
            {isPlaying ? 'Enjoy the show!' : 'Tap me for remote!'}
          </div>
          {remoteFlash && <div className="infrared-beam" />}
          <Pengu size={180} variant="remote" />
          <span className="name-pill pengu-remote-pill">Pengu Remote</span>
        </motion.div>
      </div>

      <Hint>{copy.hint}</Hint>
    </div>
  )
}
