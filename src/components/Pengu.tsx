import { ASSETS } from '../data/assets'
import { SmartImage } from './SmartImage'
import { PenguinArt } from './art/PenguinArt'

type PenguVariant =
  | 'arpita'
  | 'chef'
  | 'pranjal'
  | 'future'
  | 'remote'
  | 'dance'
  | 'dance1'
  | 'dance2'
  | 'dance3'
  | 'love'
  | 'love1'
  | 'kitchen'
  | 'kitchen2'
  | 'kitchen3'
  | 'run'
  | 'thankYou'

interface PenguProps {
  size?: number
  variant?: PenguVariant
  className?: string
}

const VARIANT_SRC: Record<PenguVariant, string> = {
  arpita: ASSETS.pengu,
  chef: ASSETS.penguChef,
  pranjal: ASSETS.penguRocket,
  future: ASSETS.penguFuture,
  remote: ASSETS.penguRemote,
  dance: ASSETS.penguDance,
  dance1: ASSETS.penguDance1,
  dance2: ASSETS.penguDance2,
  dance3: ASSETS.penguDance3,
  love: ASSETS.penguLove,
  love1: ASSETS.penguLove1,
  kitchen: ASSETS.penguKitchen,
  kitchen2: ASSETS.penguKitchen2,
  kitchen3: ASSETS.penguKitchen3,
  run: ASSETS.penguRun,
  thankYou: ASSETS.thankYou
}

export function Pengu({ size = 180, variant = 'arpita', className = '' }: PenguProps) {
  return (
    <div className={`pengu ${className}`} style={{ width: size, height: size }}>
      <SmartImage
        src={VARIANT_SRC[variant]}
        alt={
          variant === 'pranjal'
            ? 'Penguin'
            : variant === 'future'
              ? 'Pengu seeing the future'
              : variant === 'remote'
                ? 'Pengu with TV remote'
                : variant.startsWith('dance')
                  ? 'Dancing Pengu'
                  : variant.startsWith('kitchen') || variant === 'chef'
                    ? 'Pengu cooking'
                    : variant === 'run'
                      ? 'Pengu running'
                      : variant.startsWith('love')
                        ? 'Pengu with love'
                        : 'Pengu'
        }
        className="pengu-img"
        fallback={
          <PenguinArt
            size={size}
            chefHat={variant === 'chef' || variant.startsWith('kitchen')}
            futureLens={variant === 'future'}
            remote={variant === 'remote'}
          />
        }
      />
    </div>
  )
}
