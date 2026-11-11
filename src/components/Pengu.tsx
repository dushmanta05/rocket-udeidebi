import { ASSETS } from '../data/assets'
import { SmartImage } from './SmartImage'
import { PenguinArt } from './art/PenguinArt'

type PenguVariant = 'arpita' | 'chef' | 'pranjal' | 'future' | 'remote'

interface PenguProps {
  size?: number
  variant?: PenguVariant
  className?: string
}

const VARIANT_SRC: Record<PenguVariant, string> = {
  arpita: ASSETS.pengu,
  chef: ASSETS.penguChef,
  pranjal: ASSETS.pranjal,
  future: ASSETS.penguFuture,
  remote: ASSETS.penguRemote
}

export function Pengu({ size = 180, variant = 'arpita', className = '' }: PenguProps) {
  return (
    <div className={`pengu ${className}`} style={{ width: size, height: size }}>
      <SmartImage
        src={VARIANT_SRC[variant]}
        alt={
          variant === 'pranjal'
            ? 'Pranjal the penguin'
            : variant === 'future'
              ? 'Pengu seeing the future'
              : variant === 'remote'
                ? 'Pengu with TV remote'
                : 'Pengu'
        }
        className="pengu-img"
        fallback={
          <PenguinArt
            size={size}
            chefHat={variant === 'chef'}
            groomTie={variant === 'pranjal'}
            futureLens={variant === 'future'}
            remote={variant === 'remote'}
          />
        }
      />
    </div>
  )
}
