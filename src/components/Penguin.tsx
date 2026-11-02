import { useState, useCallback } from 'react'
import confetti from 'canvas-confetti'
import { PenguinArt } from './art/PenguinArt'

interface PenguinProps {
  size?: number | string
  className?: string
  speechText?: string
  hasEgg?: boolean
  chefHat?: boolean
  groomTie?: boolean
  bodyColor?: string
  flipperColor?: string
}

const PENGUIN_QUIPS = [
  'Rocket udeidebi! 🚀',
  'Wait, explain the joke again?',
  'Where is my chai chair?!',
  'Do not throw away the biscuit!',
  'Generator beat is my jam!'
]

export function Penguin({
  size = 180,
  className = '',
  speechText,
  hasEgg = false,
  chefHat = false,
  groomTie = false,
  bodyColor,
  flipperColor
}: PenguinProps) {
  const [quip, setQuip] = useState<string | null>(null)
  const [isSpinning, setIsSpinning] = useState(false)

  const handleTap = useCallback((e: React.MouseEvent) => {
    e.stopPropagation()
    setIsSpinning(true)
    setTimeout(() => setIsSpinning(false), 650)

    const randomQuip = PENGUIN_QUIPS[Math.floor(Math.random() * PENGUIN_QUIPS.length)]
    setQuip(randomQuip)

    confetti({
      particleCount: 25,
      spread: 70,
      origin: {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      },
      colors: ['#a78bfa', '#f97316', '#ffffff']
    })

    setTimeout(() => setQuip(null), 3000)
  }, [])

  const displayText = speechText || quip

  return (
    <div className={`penguin-wrapper ${className}`} onClick={handleTap}>
      {displayText && (
        <div className="speech-bubble penguin-speech">
          {displayText}
        </div>
      )}
      <div className={`penguin-character ${isSpinning ? 'spin-waddle' : 'idle-waddle'}`}>
        <PenguinArt
          size={size}
          hasEgg={hasEgg}
          chefHat={chefHat}
          groomTie={groomTie}
          bodyColor={bodyColor}
          flipperColor={flipperColor}
        />
      </div>
    </div>
  )
}
