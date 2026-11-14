export interface StepSectionProps {
  currentStep: number
  setTotalSteps: (steps: number) => void
  onNext: () => void
  onStepChange?: (step: number) => void
}
