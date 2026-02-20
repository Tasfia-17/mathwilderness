interface MountainPeaksProgressBarProps {
  current: number;
  total: number;
}

export default function MountainPeaksProgressBar({ current, total }: MountainPeaksProgressBarProps) {
  return (
    <svg width="400" height="80" viewBox="0 0 400 80">
      {[...Array(total)].map((_, i) => {
        const x = 50 + i * (300 / total);
        const isComplete = i < current;
        const isCurrent = i === current - 1;
        
        return (
          <g key={i} transform={`translate(${x}, 40)`}>
            <path
              d="M -20 20 L 0 -20 L 20 20 Z"
              fill={isComplete ? 'oklch(0.65 0.15 35)' : 'oklch(0.80 0.02 70)'}
              className={isCurrent ? 'animate-pulse' : ''}
            />
          </g>
        );
      })}
    </svg>
  );
}
