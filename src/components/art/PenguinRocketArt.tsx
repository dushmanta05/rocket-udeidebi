import { ASSETS } from '../../data/assets'
import { SmartImage } from '../SmartImage'
import { RocketArt } from './RocketArt'

interface PenguinRocketArtProps {
  size?: number
  className?: string
  tilt?: number
  sparks?: boolean
}

export function PenguinRocketArt({ size = 140, className = '', tilt = 0, sparks = false }: PenguinRocketArtProps) {
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
      {sparks && (
        <div className="rocket-spark-stream" aria-hidden="true">
          <span className="thruster-core" />
          <span className="spark spark-1" />
          <span className="spark spark-2" />
          <span className="spark spark-3" />
          <span className="spark spark-4" />
          <span className="spark spark-5" />
          <span className="spark spark-6" />
        </div>
      )}
    </div>
  )
}
