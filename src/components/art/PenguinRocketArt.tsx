import { ASSETS } from '../../data/assets'
import { SmartImage } from '../SmartImage'
import { RocketArt } from './RocketArt'

interface PenguinRocketArtProps {
  size?: number
  className?: string
  tilt?: number
}

export function PenguinRocketArt({ size = 140, className = '', tilt = 0 }: PenguinRocketArtProps) {
  return (
    <div
      className={`pengu-rocket ${className}`}
      style={{ width: size, height: size, transform: tilt ? `rotate(${tilt}deg)` : undefined }}
    >
      <SmartImage
        src={ASSETS.penguRocket}
        alt="Arpita riding her rocket"
        className="pengu-rocket-img"
        fallback={<RocketArt size={size} withPenguin />}
      />
    </div>
  )
}
