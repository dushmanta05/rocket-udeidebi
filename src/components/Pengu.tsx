import { ASSETS } from '../data/assets'
import { SmartImage } from './SmartImage'
import { PenguinArt } from './art/PenguinArt'

type PenguVariant = 'arpita' | 'chef' | 'pranjal'

interface PenguProps {
  size?: number
  variant?: PenguVariant
  className?: string
}

const VARIANT_SRC: Record<PenguVariant, string> = {
  arpita: ASSETS.pengu,
  chef: ASSETS.penguChef,
  pranjal: ASSETS.pranjal
}

export function Pengu({ size = 180, variant = 'arpita', className = '' }: PenguProps) {
  return (
    <div className={`pengu ${className}`} style={{ width: size, height: size }}>
      <SmartImage
        src={VARIANT_SRC[variant]}
        alt={variant === 'pranjal' ? 'Pranjal the penguin' : 'Pengu'}
        className="pengu-img"
        fallback={
          <PenguinArt
            size={size}
            chefHat={variant === 'chef'}
            groomTie={variant === 'pranjal'}
          />
        }
      />
    </div>
  )
}
