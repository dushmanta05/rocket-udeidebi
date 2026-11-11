import { AnimatePresence, motion } from 'framer-motion'
import { useNavigation } from './hooks/useNavigation'
import { ProgressRocket } from './components/ProgressRocket'
import { Starfield } from './components/Starfield'
import { RocketFlyby } from './components/RocketFlyby'
import { SECTIONS } from './data/sections'

import { Welcome } from './sections/Welcome'
import { PenguinBirth } from './sections/PenguinBirth'
import { FamilyTimeline } from './sections/FamilyTimeline'
import { WorkTimeline } from './sections/WorkTimeline'
import { Polaroids } from './sections/Polaroids'
import { Awards } from './sections/Awards'
import { BagReveal } from './sections/BagReveal'
import { RechargeStation } from './sections/RechargeStation'
import { Tubelight } from './sections/Tubelight'
import { Terms } from './sections/Terms'
import { SayNo } from './sections/SayNo'
import { CloudKitchen } from './sections/CloudKitchen'
import { Predictions } from './sections/Predictions'
import { CrewMessages } from './sections/CrewMessages'
import { LaunchFinale } from './sections/LaunchFinale'

export default function App() {
  const nav = useNavigation(SECTIONS.length)
  const { currentSection, currentStep, setTotalSteps, goToNext, goToPrev } = nav
  const stepProps = { currentStep, setTotalSteps, onNext: goToNext }

  const renderSection = () => {
    switch (currentSection) {
      case 0:
        return <Welcome onStart={goToNext} />
      case 1:
        return <PenguinBirth {...stepProps} />
      case 2:
        return <FamilyTimeline {...stepProps} />
      case 3:
        return <WorkTimeline {...stepProps} />
      case 4:
        return <Polaroids {...stepProps} />
      case 5:
        return <Awards {...stepProps} />
      case 6:
        return <BagReveal {...stepProps} />
      case 7:
        return <RechargeStation onNext={goToNext} />
      case 8:
        return <Tubelight {...stepProps} />
      case 9:
        return <Terms onNext={goToNext} />
      case 10:
        return <SayNo {...stepProps} />
      case 11:
        return <CloudKitchen />
      case 12:
        return <Predictions {...stepProps} />
      case 13:
        return <CrewMessages {...stepProps} />
      case 14:
        return <LaunchFinale {...stepProps} />
      default:
        return null
    }
  }

  return (
    <div className="app">
      <Starfield />
      <RocketFlyby section={currentSection} />

      <div className="top-controls">
        <button
          type="button"
          className="icon-btn"
          onClick={nav.toggleFullscreen}
          aria-label={nav.isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
          title="Fullscreen (F)"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {nav.isFullscreen ? (
              <path d="M8 3v3a2 2 0 0 1-2 2H3M21 8h-3a2 2 0 0 1-2-2V3M3 16h3a2 2 0 0 1 2 2v3M16 21v-3a2 2 0 0 1 2-2h3" />
            ) : (
              <path d="M8 3H5a2 2 0 0 0-2 2v3M21 8V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3M16 21h3a2 2 0 0 0 2-2v-3" />
            )}
          </svg>
        </button>
      </div>

      {currentSection > 0 && (
        <button type="button" className="nav-arrow left" onClick={goToPrev} aria-label="Previous">
          ‹
        </button>
      )}
      {currentSection > 0 && currentSection < nav.totalSections - 1 && (
        <button type="button" className="nav-arrow right" onClick={goToNext} aria-label="Next">
          ›
        </button>
      )}

      <main className="stage">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSection}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.45, ease: 'easeInOut' }}
            className="section-motion"
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </main>

      {currentSection > 0 && (
        <ProgressRocket
          currentSection={currentSection}
          totalSections={nav.totalSections}
          currentStep={currentStep}
          totalSteps={nav.totalSteps}
          onSectionClick={nav.setSection}
        />
      )}
    </div>
  )
}
