import { useState, useCallback } from 'react'
import confetti from 'canvas-confetti'
import { HippoArt } from './art/HippoArt'

interface HippoProps {
  size?: number | string
  waving?: boolean
  className?: string
  speechText?: string
}

const HIPPO_QUIPS = [
  'Rocket udeidebi! 🚀',
  'Arpita is looking for a chair! 🪑',
  'Welcome to the Launch Pad! 🎉',
  'Did someone say chai break? ☕',
  '100% Jagatmata certified! 💖'
]

export function Hippo({ size = 180, waving = false, className = '', speechText }: HippoProps) {
  const [quip, setQuip] = useState<string | null>(null)
  const [isSquishing, setIsSquishing] = useState(false)

  const handleTap = useCallback((e: React.MouseEvent) => {
    e.stopPropagation()
    setIsSquishing(true)
    setTimeout(() => setIsSquishing(false), 400)

    const randomQuip = HIPPO_QUIPS[Math.floor(Math.random() * HIPPO_QUIPS.length)]
    setQuip(randomQuip)

    confetti({
      particleCount: 25,
      spread: 60,
      origin: {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      },
      colors: ['#c084fc', '#f472b6', '#facc15']
    })

    setTimeout(() => setQuip(null), 3000)
  }, [])

  const displayText = speechText || quip

  return (
    <div className={`hippo-wrapper ${className}`} onClick={handleTap}>
      {displayText && (
        <div className="speech-bubble hippo-speech">
          {displayText}
        </div>
      )}
      <div className={`hippo-character ${isSquishing ? 'squish-squash' : 'idle-float'}`}>
        <HippoArt size={size} waving={waving} />
      </div>
    </div>
  )
}
