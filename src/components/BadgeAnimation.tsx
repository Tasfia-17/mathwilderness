interface BadgeAnimationProps {
  conceptType: string;
}

export default function BadgeAnimation({ conceptType }: BadgeAnimationProps) {
  return (
    <div className="animate-[scaleIn_0.6s_ease-out]">
      <svg width="200" height="200" viewBox="0 0 200 200">
        <defs>
          <linearGradient id="badgeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="oklch(0.75 0.14 65)" />
            <stop offset="100%" stopColor="oklch(0.65 0.16 55)" />
          </linearGradient>
        </defs>
        
        {/* Badge frame */}
        <circle cx="100" cy="100" r="90" fill="url(#badgeGrad)" />
        <circle cx="100" cy="100" r="80" fill="oklch(0.92 0.03 75)" />
        
        {/* Badge icon */}
        <text x="100" y="120" textAnchor="middle" fontSize="60" fill="oklch(0.65 0.15 35)">
          🏆
        </text>
        
        {/* Badge text */}
        <text x="100" y="160" textAnchor="middle" fontSize="16" fontWeight="bold" fill="oklch(0.35 0.06 50)">
          {conceptType.toUpperCase()}
        </text>
      </svg>
    </div>
  );
}
