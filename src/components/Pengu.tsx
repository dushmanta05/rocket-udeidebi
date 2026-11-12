import { ASSETS } from '../data/assets'
import { SmartImage } from './SmartImage'
import { PenguinArt } from './art/PenguinArt'
import { BagArt } from './art/BagArt'

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
  | 'energy'
  | 'flower'
  | 'no1'
  | 'no2'
  | 'no3'
  | 'no4'
  | 'no5'
  | 'mic'
  | 'thankYou'
  | 'bag'
  | 'bags'
  | 'jagatMata'
  | 'tubelight'
  | 'rocket'
  | 'asking'
  | 'idea'
  | 'think'
  | 'useHead'
  | 'travel'
  | 'egg'
  | 'believe'
  | 'chair'
  | 'cute'
  | 'dance4'
  | 'fly'
  | 'laugh'
  | 'walk'
  | 'yes'
  | 'greet'
  | 'please'

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
  energy: ASSETS.penguEnergy,
  flower: ASSETS.penguFlower,
  no1: ASSETS.penguNo1,
  no2: ASSETS.penguNo2,
  no3: ASSETS.penguNo3,
  no4: ASSETS.penguNo4,
  no5: ASSETS.penguNo5,
  mic: ASSETS.penguMic,
  thankYou: ASSETS.thankYou,
  bag: ASSETS.penguBag,
  bags: ASSETS.penguBags,
  jagatMata: ASSETS.penguJagatMata,
  tubelight: ASSETS.penguTubelight,
  rocket: ASSETS.penguRocketGif,
  asking: ASSETS.penguAsking,
  idea: ASSETS.penguIdea,
  think: ASSETS.penguThink,
  useHead: ASSETS.penguUseHead,
  travel: ASSETS.penguinTravel,
  egg: ASSETS.penguEgg,
  believe: ASSETS.penguBelieve,
  chair: ASSETS.penguChair,
  cute: ASSETS.penguCute,
  dance4: ASSETS.penguDance4,
  fly: ASSETS.penguFly,
  laugh: ASSETS.penguLaugh,
  walk: ASSETS.penguWalk,
  yes: ASSETS.penguYes,
  greet: ASSETS.penguGreet,
  please: ASSETS.penguPlease
}

export function Pengu({ size = 180, variant = 'arpita', className = '' }: PenguProps) {
  const imgSrc = VARIANT_SRC[variant]

  return (
    <div className={`pengu ${className}`} style={{ width: size, height: size }}>
      <SmartImage
        src={imgSrc}
        alt={
          variant === 'pranjal'
            ? 'Pranjal the penguin'
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
                        : variant === 'bag' || variant === 'bags'
                          ? 'Pengu with bags'
                          : variant === 'jagatMata'
                            ? 'Jagatmata Pengu'
                            : variant === 'tubelight'
                              ? 'Tubelight Pengu'
                              : variant === 'rocket'
                                ? 'Pengu with rocket'
                                : variant === 'asking'
                                  ? 'Pengu asking politely'
                                  : variant === 'idea'
                                    ? 'Pengu with an idea'
                                    : variant === 'think'
                                      ? 'Pengu thinking deeply'
                                      : variant === 'useHead'
                                        ? 'Pengu tapping head'
                                        : variant === 'travel'
                                          ? 'Pengu traveling with luggage'
                                          : variant === 'egg'
                                            ? 'Penguin hatching from egg'
                                            : variant === 'believe'
                                              ? 'Believe in Pengu'
                                              : variant === 'chair'
                                                ? 'Pengu relaxing on chair'
                                                : variant === 'cute'
                                                  ? 'Cute Pengu'
                                                  : variant === 'fly'
                                                    ? 'Flying Pengu'
                                                    : variant === 'laugh'
                                                      ? 'Laughing Pengu'
                                                      : variant === 'walk'
                                                        ? 'Pengu walking'
                                                        : variant === 'yes'
                                                          ? 'Pengu saying yes'
                                                          : variant === 'greet'
                                                            ? 'Pengu greeting warmly'
                                                            : variant === 'please'
                                                              ? 'Pengu begging politely'
                                                              : 'Pengu'
        }
        className="pengu-img"
        fallback={
          variant === 'pranjal' ? (
            <SmartImage
              src={ASSETS.penguLove1}
              alt="Pranjal the penguin"
              className="pengu-img"
              fallback={<PenguinArt size={size} />}
            />
          ) : variant === 'bag' ? (
            <BagArt size={size} />
          ) : (
            <PenguinArt
              size={size}
              chefHat={variant === 'chef' || variant.startsWith('kitchen')}
              futureLens={variant === 'future'}
              remote={variant === 'remote'}
            />
          )
        }
      />
    </div>
  )
}
