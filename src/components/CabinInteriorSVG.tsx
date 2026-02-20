import { SVG_COLORS } from '../styles/svgColorPalette';

export default function CabinInteriorSVG() {
  return (
    <svg
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      className="w-screen h-screen"
    >
      <defs>
        {/* Fireplace glow */}
        <radialGradient id="fireGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={SVG_COLORS.WARM_GLOW_BRIGHT} />
          <stop offset="100%" stopColor={SVG_COLORS.TERRACOTTA_ORANGE} stopOpacity="0.3" />
        </radialGradient>
        
        {/* Wood plank gradient */}
        <linearGradient id="plankGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={SVG_COLORS.WOOD_LIGHT} />
          <stop offset="100%" stopColor={SVG_COLORS.WOOD_DARK} />
        </linearGradient>
      </defs>
      
      {/* Dark background */}
      <rect width="1200" height="800" fill="oklch(0.30 0.04 50)" />
      
      {/* Wooden wall planks */}
      <g opacity="0.8">
        {[...Array(8)].map((_, i) => (
          <rect
            key={i}
            x="0"
            y={i * 100}
            width="1200"
            height="100"
            fill="url(#plankGrad)"
            opacity={0.6 + i * 0.05}
          />
        ))}
      </g>
      
      {/* Fireplace on left */}
      <g transform="translate(150, 300)">
        {/* Fireplace structure */}
        <rect x="0" y="0" width="200" height="250" fill={SVG_COLORS.SOFT_BROWN_DARK} rx="10" />
        <rect x="20" y="20" width="160" height="180" fill="oklch(0.15 0 0)" rx="8" />
        
        {/* Fire glow */}
        <ellipse cx="100" cy="120" rx="60" ry="70" fill="url(#fireGlow)" />
        
        {/* Animated flames */}
        <g className="animate-pulse">
          <path d="M 80 150 Q 85 120 90 150 Q 95 130 100 150 Q 105 125 110 150 Q 115 135 120 150" 
                fill={SVG_COLORS.WARM_GLOW_BRIGHT} opacity="0.8" />
        </g>
        
        {/* Mantle */}
        <rect x="-10" y="-10" width="220" height="20" fill={SVG_COLORS.WOOD_MEDIUM} rx="4" />
      </g>
      
      {/* Window on right with moonlight */}
      <g transform="translate(950, 200)">
        <rect x="0" y="0" width="180" height="220" fill={SVG_COLORS.NIGHT_BLUE} rx="8" />
        <rect x="5" y="5" width="170" height="210" fill={SVG_COLORS.NIGHT_BLUE_DARK} rx="6" />
        
        {/* Window panes */}
        <line x1="90" y1="5" x2="90" y2="215" stroke={SVG_COLORS.WOOD_DARK} strokeWidth="4" />
        <line x1="5" y1="110" x2="175" y2="110" stroke={SVG_COLORS.WOOD_DARK} strokeWidth="4" />
        
        {/* Moon visible through window */}
        <circle cx="130" cy="70" r="25" fill="oklch(0.95 0.02 85)" opacity="0.8" />
      </g>
      
      {/* Furniture silhouettes */}
      <ellipse cx="900" cy="650" rx="80" ry="40" fill={SVG_COLORS.WOOD_DARK} opacity="0.6" />
      <rect x="100" y="600" width="150" height="200" fill={SVG_COLORS.WOOD_DARK} opacity="0.5" rx="8" />
      
      {/* Warm ambient lighting overlay */}
      <rect width="1200" height="800" fill={SVG_COLORS.WARM_GLOW} opacity="0.05" />
    </svg>
  );
}
