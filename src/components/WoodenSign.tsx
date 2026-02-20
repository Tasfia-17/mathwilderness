interface WoodenSignProps {
  text: string;
}

export default function WoodenSign({ text }: WoodenSignProps) {
  return (
    <svg width="400" height="180" viewBox="0 0 400 180" className="drop-shadow-2xl">
      <defs>
        {/* Wood grain pattern */}
        <pattern id="woodGrainPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <rect width="100" height="100" fill="oklch(0.55 0.08 50)" />
          <path d="M 0 20 Q 25 18 50 20 T 100 20" stroke="oklch(0.45 0.06 50)" strokeWidth="1" fill="none" opacity="0.3" />
          <path d="M 0 40 Q 25 38 50 40 T 100 40" stroke="oklch(0.45 0.06 50)" strokeWidth="1" fill="none" opacity="0.3" />
          <path d="M 0 60 Q 25 58 50 60 T 100 60" stroke="oklch(0.45 0.06 50)" strokeWidth="1" fill="none" opacity="0.3" />
          <path d="M 0 80 Q 25 78 50 80 T 100 80" stroke="oklch(0.45 0.06 50)" strokeWidth="1" fill="none" opacity="0.3" />
        </pattern>
        
        {/* Shadow gradient */}
        <linearGradient id="signShadow" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="oklch(0.65 0.06 50)" />
          <stop offset="50%" stopColor="oklch(0.55 0.08 50)" />
          <stop offset="100%" stopColor="oklch(0.45 0.06 50)" />
        </linearGradient>
      </defs>
      
      {/* Wooden post */}
      <rect x="180" y="120" width="40" height="60" fill="url(#signShadow)" rx="4" />
      
      {/* Main sign plank */}
      <rect x="50" y="40" width="300" height="100" rx="12" fill="url(#woodGrainPattern)" />
      <rect x="50" y="40" width="300" height="100" rx="12" fill="url(#signShadow)" opacity="0.2" />
      
      {/* Sign border/edge highlight */}
      <rect x="50" y="40" width="300" height="100" rx="12" fill="none" stroke="oklch(0.35 0.06 50)" strokeWidth="3" />
      <rect x="52" y="42" width="296" height="96" rx="10" fill="none" stroke="oklch(0.75 0.04 50)" strokeWidth="1" opacity="0.5" />
      
      {/* Nail details */}
      <circle cx="70" cy="60" r="5" fill="oklch(0.35 0.02 50)" />
      <circle cx="330" cy="60" r="5" fill="oklch(0.35 0.02 50)" />
      <circle cx="70" cy="120" r="5" fill="oklch(0.35 0.02 50)" />
      <circle cx="330" cy="120" r="5" fill="oklch(0.35 0.02 50)" />
      
      {/* Nail highlights */}
      <circle cx="68" cy="58" r="2" fill="oklch(0.55 0.02 50)" opacity="0.6" />
      <circle cx="328" cy="58" r="2" fill="oklch(0.55 0.02 50)" opacity="0.6" />
      <circle cx="68" cy="118" r="2" fill="oklch(0.55 0.02 50)" opacity="0.6" />
      <circle cx="328" cy="118" r="2" fill="oklch(0.55 0.02 50)" opacity="0.6" />
      
      {/* Text */}
      <text
        x="200"
        y="105"
        textAnchor="middle"
        fontSize="48"
        fontWeight="bold"
        fill="oklch(0.95 0.02 70)"
        fontFamily="'Georgia', serif"
        style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
      >
        {text}
      </text>
    </svg>
  );
}
