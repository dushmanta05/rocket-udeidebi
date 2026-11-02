import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'
import { WISHES_DATA } from '../data/wishes'
import { PenguinArt } from '../components/art/PenguinArt'
import { PenguinRocketArt } from '../components/art/PenguinRocketArt'
import { Hippo } from '../components/Hippo'

interface WishesFinaleProps {
  currentStep: number
  setTotalSteps: (steps: number) => void
  onNext: () => void
}

export function WishesFinale({ currentStep, setTotalSteps, onNext }: WishesFinaleProps) {
  useEffect(() => {
    setTotalSteps(6)
  }, [setTotalSteps])

  useEffect(() => {
    if (currentStep >= 4) {
      confetti({
        particleCount: 50,
        spread: 100,
        origin: { y: 0.5 },
        colors: ['#facc15', '#38bdf8', '#f472b6', '#f97316']
      })
    }
  }, [currentStep])

  return (
    <div className="section-container finale-section" onClick={onNext}>
      <AnimatePresence mode="wait">
        {currentStep === 0 && (
          <motion.div
            key="wishes-reel"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="wishes-reel-stage"
          >
            <div className="section-header">
              <span className="chapter-badge gold-badge">💌 Cosmic Broadcast 💌</span>
              <h2 className="section-heading finale-stars-heading">Messages from the Crew</h2>
              <p className="section-subtext finale-subtext">Wishes and heartfelt roasts before ignition</p>
            </div>

            <div className="wishes-cards-grid">
              {WISHES_DATA.map((wish) => (
                <div key={wish.id} className="stellar-wish-card">
                  <span className="wish-quote-icon">“</span>
                  <p className="wish-body">{wish.text}</p>
                  <span className="wish-author">— {wish.author}</span>
                </div>
              ))}
            </div>

            <div className="scene-prompt finale-prompt">Click or press Space to proceed to the Launch Pad 🚀</div>
          </motion.div>
        )}

        {currentStep === 1 && (
          <motion.div
            key="pad-intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="launch-stage-sky"
          >
            <h2 className="finale-heading">Destination: Launch Pad</h2>
            <div className="launch-pad-ground">
              <div className="pranjal-stand">
                <PenguinArt size={190} groomTie={true} />
                <div className="speech-bubble groom-bubble">Pranjal is waiting on the pad! 🤵</div>
              </div>
            </div>
            <div className="scene-prompt finale-prompt">Click to initiate countdown ⏱️</div>
          </motion.div>
        )}

        {currentStep === 2 && (
          <motion.div
            key="countdown"
            initial={{ scale: 2, opacity: 0 }}
            animate={{ scale: [2, 1, 0.8], opacity: 1 }}
            exit={{ opacity: 0 }}
            className="countdown-stage"
          >
            <div className="countdown-number">3... 2... 1...</div>
            <div className="countdown-tag">ENGINES IGNITED!</div>
          </motion.div>
        )}

        {currentStep === 3 && (
          <motion.div
            key="arpita-arrival"
            initial={{ x: -250, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', damping: 14 }}
            className="launch-stage-sky"
          >
            <h2 className="finale-heading">Arpita Arrives!</h2>
            <div className="launch-pad-ground">
              <div className="pad-arrival-row">
                <PenguinRocketArt size={160} hasFlame={true} />
                <PenguinArt size={170} groomTie={true} />
              </div>
            </div>
            <div className="scene-prompt finale-prompt">Click to board the rocket 🚀</div>
          </motion.div>
        )}

        {currentStep === 4 && (
          <motion.div
            key="blastoff"
            initial={{ y: 150 }}
            animate={{ y: -380 }}
            transition={{ duration: 2.2, ease: 'easeIn' }}
            className="blastoff-stage"
          >
            <div className="tandem-rocket">
              <div className="heart-pop">💖</div>
              <PenguinRocketArt size={190} hasFlame={true} tilt={-15} />
              <div className="tandem-penguins">
                <PenguinArt size={55} groomTie={true} />
              </div>
            </div>
            <h1 className="blastoff-shout">ROCKET UDEIDEBI!</h1>
          </motion.div>
        )}

        {currentStep >= 5 && (
          <motion.div
            key="thankyou"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="thankyou-stage"
          >
            <div className="falling-stars-backdrop">
              {WISHES_DATA.map((w, idx) => (
                <div
                  key={w.id}
                  className="star-wish-particle"
                  style={{
                    left: `${12 + idx * 24}%`,
                    animationDelay: `${idx * 0.7}s`
                  }}
                >
                  ★ {w.author}: "{w.text.slice(0, 42)}..."
                </div>
              ))}
            </div>

            <Hippo
              size={240}
              waving={true}
              speechText="Thank you everyone! Arpita & Pranjal's journey has launched! 🚀💖"
            />

            <h1 className="thankyou-title">Happily Ever After!</h1>
            <p className="thankyou-sub">May the chai be hot, the chairs be abundant, and laughter be electric!</p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="step-indicator-bar finale-step-bar">
        Phase {currentStep + 1} of 6 • The Grand Finale
      </div>
    </div>
  )
}
