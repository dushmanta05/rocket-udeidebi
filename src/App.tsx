import { AnimatePresence, motion } from 'framer-motion'
import { useNavigation } from './hooks/useNavigation'
import { useSound } from './hooks/useSound'
import { ProgressRocket } from './components/ProgressRocket'

import { Welcome } from './sections/Welcome'
import { PenguinBirth } from './sections/PenguinBirth'
import { FamilyTimeline } from './sections/FamilyTimeline'
import { WorkTimeline } from './sections/WorkTimeline'
import { Polaroids } from './sections/Polaroids'
import { Awards } from './sections/Awards'
import { BagReveal } from './sections/BagReveal'
import { Tubelight } from './sections/Tubelight'
import { Terms } from './sections/Terms'
import { SayNo } from './sections/SayNo'
import { CloudKitchen } from './sections/CloudKitchen'
import { Predictions } from './sections/Predictions'
import { WishesFinale } from './sections/WishesFinale'

export default function App() {
  const { isMuted, toggleMute, startBgMusic } = useSound()
  const {
    currentSection,
    totalSections,
    currentStep,
    totalSteps,
    goToNext,
    goToPrev,
    setSection,
    setTotalSteps,
    toggleFullscreen,
    isFullscreen
  } = useNavigation(13, toggleMute)

  const handleStart = () => {
    startBgMusic()
    goToNext()
  }

  const renderSection = () => {
    switch (currentSection) {
      case 0:
        return <Welcome onStart={handleStart} />
      case 1:
        return <PenguinBirth currentStep={currentStep} setTotalSteps={setTotalSteps} onNext={goToNext} />
      case 2:
        return <FamilyTimeline currentStep={currentStep} setTotalSteps={setTotalSteps} onNext={goToNext} />
      case 3:
        return <WorkTimeline currentStep={currentStep} setTotalSteps={setTotalSteps} onNext={goToNext} />
      case 4:
        return <Polaroids currentStep={currentStep} setTotalSteps={setTotalSteps} onNext={goToNext} />
      case 5:
        return <Awards currentStep={currentStep} setTotalSteps={setTotalSteps} onNext={goToNext} />
      case 6:
        return <BagReveal currentStep={currentStep} setTotalSteps={setTotalSteps} onNext={goToNext} />
      case 7:
        return <Tubelight currentStep={currentStep} setTotalSteps={setTotalSteps} onNext={goToNext} />
      case 8:
        return <Terms onNext={goToNext} />
      case 9:
        return <SayNo currentStep={currentStep} setTotalSteps={setTotalSteps} onNext={goToNext} />
      case 10:
        return <CloudKitchen />
      case 11:
        return <Predictions currentStep={currentStep} setTotalSteps={setTotalSteps} onNext={goToNext} />
      case 12:
        return <WishesFinale currentStep={currentStep} setTotalSteps={setTotalSteps} onNext={goToNext} />
      default:
        return null
    }
  }

  return (
    <div className="app-container">
      <div className="floating-top-controls">
        <button
          className="control-icon-btn"
          onClick={toggleMute}
          aria-label={isMuted ? 'Unmute music' : 'Mute music'}
          title={isMuted ? 'Unmute (M)' : 'Mute (M)'}
        >
          {isMuted ? '🔇' : '🔊'}
        </button>

        <button
          className="control-icon-btn"
          onClick={toggleFullscreen}
          aria-label={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
          title="Toggle Fullscreen (F)"
        >
          {isFullscreen ? '⤓' : '⤢'}
        </button>
      </div>

      <div className="floating-nav-buttons">
        {currentSection > 0 && (
          <button
            className="nav-arrow-btn left-arrow"
            onClick={goToPrev}
            aria-label="Previous step"
          >
            ‹
          </button>
        )}
        {currentSection < totalSections - 1 && (
          <button
            className="nav-arrow-btn right-arrow"
            onClick={goToNext}
            aria-label="Next step"
          >
            ›
          </button>
        )}
      </div>

      <div className="presentation-stage">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSection}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.45, ease: 'easeInOut' }}
            className="section-motion-wrapper"
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </div>

      <ProgressRocket
        currentSection={currentSection}
        totalSections={totalSections}
        currentStep={currentStep}
        totalSteps={totalSteps}
        onSectionClick={setSection}
      />
    </div>
  )
}
