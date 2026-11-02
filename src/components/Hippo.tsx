import { useState, useCallback, type MouseEvent } from 'react'
import confetti from 'canvas-confetti'
import { ASSETS } from '../data/assets'
import { HIPPO_QUIPS } from '../data/sections'
import { SmartImage } from './SmartImage'
import { HippoArt } from './art/HippoArt'

interface HippoProps {
  size?: number
  className?: string
  speechText?: string
}

export function Hippo({ size = 180, className = '', speechText }: HippoProps) {
  const [quip, setQuip] = useState<string | null>(null)
  const [isSquishing, setIsSquishing] = useState(false)

  const handleTap = useCallback((e: MouseEvent) => {
    e.stopPropagation()
    setIsSquishing(true)
    setTimeout(() => setIsSquishing(false), 400)
    setQuip(HIPPO_QUIPS[Math.floor(Math.random() * HIPPO_QUIPS.length)])
    confetti({
      particleCount: 30,
      spread: 70,
      origin: { x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight },
      colors: ['#b9a6ff', '#ff8fb1', '#ffd27a']
    })
    setTimeout(() => setQuip(null), 3000)
  }, [])

  const displayText = quip || speechText

  return (
    <div className={`hippo-wrapper ${className}`} onClick={handleTap}>
      {displayText && <div className="speech-bubble">{displayText}</div>}
      <div
        className={`hippo-character ${isSquishing ? 'squish-squash' : 'idle-float'}`}
        style={{ width: size, height: size }}
      >
        <SmartImage
          src={ASSETS.hippo}
          alt="Hippo"
          className="hippo-img"
          fallback={<HippoArt size={size} />}
        />
      </div>
    </div>
  )
}
