import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'
import { CREW_COPY, SECTIONS } from '../data/sections'
import { ASSETS } from '../data/assets'
import { useWishes } from '../hooks/useWishes'
import { Pengu } from '../components/Pengu'
import { Hint, SectionHeader } from '../components/SectionHeader'
import type { StepSectionProps } from './types'

const copy = SECTIONS[13]

export function CrewMessages({ setTotalSteps, onNext }: StepSectionProps) {
  const wishes = useWishes()
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const bezelRef = useRef<HTMLDivElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [videoFailed, setVideoFailed] = useState(false)
  const [remoteFlash, setRemoteFlash] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const filmSource = ASSETS.crewFilm || (wishes.length > 0 && wishes[0].video ? wishes[0].video : null)

  useEffect(() => {
    setTotalSteps(1)
  }, [setTotalSteps])

  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement))
    }
    document.addEventListener('fullscreenchange', handleFsChange)
    return () => document.removeEventListener('fullscreenchange', handleFsChange)
  }, [])

  const triggerRemote = () => {
    setRemoteFlash(true)
    setTimeout(() => setRemoteFlash(false), 350)
    confetti({
      particleCount: 28,
      spread: 65,
      origin: { x: 0.75, y: 0.6 },
      colors: ['#ff4d6d', '#ffd27a', '#8ec5ff', '#ff8fb1']
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

  const toggleFullscreen = () => {
    if (!bezelRef.current) return
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {})
    } else {
      bezelRef.current.requestFullscreen().catch(() => {})
    }
  }

  return (
    <div className="section crew-section">
      <SectionHeader copy={copy} />

      <div className="cinema-stage">
        <div className="cinema-screen-wrap">
          <div className="cinema-marquee">
            <span className="marquee-sparkle">✦</span>
            <span className="marquee-badge">HIPPO CINEMA · WORLD PREMIERE</span>
            <span className="marquee-sparkle">✦</span>
          </div>

          <div ref={bezelRef} className="cinema-bezel">
            <div className="projector-glow" />
            <div className="curtain-drape curtain-left" />
            <div className="curtain-drape curtain-right" />

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
                  <div className="cinema-clapper">
                    <span className="clapper-stripe">🎬 ROLL 01 · SCENE: ARPITA · TAKE 01</span>
                  </div>

                  <div className="cinema-reel-ring">
                    <motion.div
                      className="cinema-play-orb"
                      whileHover={{ scale: 1.12 }}
                      whileTap={{ scale: 0.94 }}
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="play-triangle">
                        <polygon points="6,4 20,12 6,20" />
                      </svg>
                    </motion.div>
                  </div>

                  <h3 className="standby-title">{CREW_COPY.filmTitle}</h3>
                  <p className="standby-sub">{CREW_COPY.filmSubtitle}</p>

                  <div className="standby-meta-row">
                    <span className="meta-tag">🍿 100% Chaotic</span>
                    <span className="meta-tag">★ Rated Bachelorette Legend</span>
                  </div>

                  <span className="standby-badge">{CREW_COPY.filmPlaceholder}</span>
                </div>
              )}
            </div>
          </div>

          <div className="cinema-status-bar">
            <div className="status-main">
              <span className={`status-led ${isPlaying ? 'live' : ''}`} />
              <span className="status-text">
                {isPlaying ? CREW_COPY.nowPlaying : CREW_COPY.playPrompt}
              </span>
            </div>

            <button
              type="button"
              className="cinema-fs-btn"
              onClick={toggleFullscreen}
              aria-label={isFullscreen ? 'Exit fullscreen' : 'View in fullscreen'}
            >
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                {isFullscreen ? (
                  <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" />
                ) : (
                  <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                )}
              </svg>
              <span>{isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}</span>
            </button>
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
            {isPlaying ? 'Shh... movie rolling! 🍿' : 'Tap me for remote! 🎬'}
          </div>
          {remoteFlash && <div className="infrared-beam" />}
          <Pengu size={185} variant="remote" />
          <span className="name-pill pengu-remote-pill">Pengu Remote</span>
        </motion.div>
      </div>

      <Hint>{copy.hint}</Hint>
    </div>
  )
}
