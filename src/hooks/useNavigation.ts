import { useState, useEffect, useCallback, useRef } from 'react'

export interface NavigationState {
  currentSection: number
  totalSections: number
  currentStep: number
  totalSteps: number
  goToNext: () => void
  goToPrev: () => void
  setSection: (section: number) => void
  setTotalSteps: (steps: number) => void
  setStep: (step: number) => void
  toggleFullscreen: () => void
  isFullscreen: boolean
}

export function useNavigation(totalSections: number): NavigationState {
  const [currentSection, setCurrentSection] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)
  const [totalSteps, setTotalStepsState] = useState(1)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const touchStartXRef = useRef<number | null>(null)
  const touchStartYRef = useRef<number | null>(null)

  const setTotalSteps = useCallback((count: number) => {
    setTotalStepsState(Math.max(1, count))
  }, [])

  const setStep = useCallback((step: number) => {
    setCurrentStep(step)
  }, [])

  const goToNext = useCallback(() => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep((prev) => prev + 1)
    } else if (currentSection < totalSections - 1) {
      setCurrentSection((prev) => prev + 1)
      setCurrentStep(0)
      setTotalStepsState(1)
    }
  }, [currentStep, totalSteps, currentSection, totalSections])

  const goToPrev = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1)
    } else if (currentSection > 0) {
      setCurrentSection((prev) => prev - 1)
      setCurrentStep(0)
      setTotalStepsState(1)
    }
  }, [currentStep, currentSection])

  const setSection = useCallback((section: number) => {
    if (section >= 0 && section < totalSections) {
      setCurrentSection(section)
      setCurrentStep(0)
      setTotalStepsState(1)
    }
  }, [totalSections])

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {})
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {})
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return
      }

      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
        e.preventDefault()
        goToNext()
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        goToPrev()
      } else if (e.key.toLowerCase() === 'f') {
        e.preventDefault()
        toggleFullscreen()
      }
    }

    const handleTouchStart = (e: TouchEvent) => {
      touchStartXRef.current = e.touches[0].clientX
      touchStartYRef.current = e.touches[0].clientY
    }

    const handleTouchEnd = (e: TouchEvent) => {
      if (touchStartXRef.current === null || touchStartYRef.current === null) return
      const deltaX = e.changedTouches[0].clientX - touchStartXRef.current
      const deltaY = e.changedTouches[0].clientY - touchStartYRef.current

      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 40) {
        if (deltaX < 0) {
          goToNext()
        } else {
          goToPrev()
        }
      }

      touchStartXRef.current = null
      touchStartYRef.current = null
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchend', handleTouchEnd, { passive: true })

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchend', handleTouchEnd)
    }
  }, [goToNext, goToPrev, toggleFullscreen])

  return {
    currentSection,
    totalSections,
    currentStep,
    totalSteps,
    goToNext,
    goToPrev,
    setSection,
    setTotalSteps,
    setStep,
    toggleFullscreen,
    isFullscreen
  }
}
