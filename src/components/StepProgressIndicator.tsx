interface StepProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export default function StepProgressIndicator({ currentStep, totalSteps }: StepProgressIndicatorProps) {
  return (
    <div className="flex gap-2">
      {[...Array(totalSteps)].map((_, index) => (
        <div
          key={index}
          className="rounded-full transition-all"
          style={{
            width: index === currentStep ? '32px' : '24px',
            height: index === currentStep ? '32px' : '24px',
            background: index <= currentStep ? 'oklch(0.65 0.15 35)' : 'oklch(0.80 0.02 70)',
            opacity: index <= currentStep ? 1 : 0.5,
          }}
        />
      ))}
    </div>
  );
}
