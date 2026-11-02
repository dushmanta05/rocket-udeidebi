export interface StepSectionProps {
  currentStep: number
  setTotalSteps: (steps: number) => void
  onNext: () => void
}
