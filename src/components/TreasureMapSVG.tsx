import { SVG_COLORS } from '../styles/svgColorPalette';

interface TreasureMapSVGProps {
  progress: number; // 0-5
}

export default function TreasureMapSVG({ progress }: TreasureMapSVGProps) {
  const revealOpacity = (threshold: number) => progress >= threshold ? 1 : 0.2;
  
  return (
    <svg
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      className="w-screen h-screen animate-[unfold_1s_ease-out]"
    >
      <defs>
        {/* Parchment gradient */}
        <linearGradient id="parchmentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="oklch(0.92 0.03 75)" />
          <stop offset="100%" stopColor="oklch(0.88 0.04 70)" />
        </linearGradient>
        
        {/* Aged paper texture */}
        <filter id="paperTexture">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" result="noise" />
          <feColorMatrix in="noise" type="saturate" values="0" />
          <feBlend in="SourceGraphic" in2="noise" mode="multiply" />
        </filter>
      </defs>
      
      {/* Parchment background */}
      <rect width="1200" height="800" fill="url(#parchmentGrad)" filter="url(#paperTexture)" />
      
      {/* Map border */}
      <rect x="50" y="50" width="1100" height="700" fill="none" stroke={SVG_COLORS.SOFT_BROWN_DARK} strokeWidth="4" strokeDasharray="10,5" />
      
      {/* Winding trail path */}
      <path
        d="M 150 650 Q 250 600 350 580 T 550 520 T 750 480 T 950 420 T 1050 350"
        stroke={SVG_COLORS.SOFT_BROWN}
        strokeWidth="8"
        fill="none"
        strokeDasharray="15,10"
        opacity="0.6"
      />
      
      {/* Terrain layers - progressively revealed */}
      <g opacity={revealOpacity(1)}>
        {/* Forest area */}
        <ellipse cx="300" cy="600" rx="80" ry="70" fill={SVG_COLORS.SAGE_GREEN} opacity="0.5" />
        <text x="300" y="610" textAnchor="middle" fontSize="16" fill={SVG_COLORS.SOFT_BROWN_DARK} fontFamily="'Georgia', serif">
          Forest
        </text>
      </g>
      
      <g opacity={revealOpacity(2)}>
        {/* Mountain area */}
        <path d="M 500 550 L 550 480 L 600 550 Z" fill={SVG_COLORS.SOFT_BROWN_LIGHT} opacity="0.6" />
        <text x="550" y="560" textAnchor="middle" fontSize="16" fill={SVG_COLORS.SOFT_BROWN_DARK} fontFamily="'Georgia', serif">
          Mountains
        </text>
      </g>
      
      <g opacity={revealOpacity(3)}>
        {/* River */}
        <path
          d="M 700 550 Q 720 500 740 480 T 780 440"
          stroke={SVG_COLORS.SOFT_BLUE}
          strokeWidth="20"
          fill="none"
          opacity="0.5"
        />
        <text x="750" y="520" textAnchor="middle" fontSize="16" fill={SVG_COLORS.SOFT_BROWN_DARK} fontFamily="'Georgia', serif">
          River
        </text>
      </g>
      
      <g opacity={revealOpacity(4)}>
        {/* Meadow */}
        <ellipse cx="900" cy="450" rx="90" ry="75" fill={SVG_COLORS.MUSTARD_YELLOW_LIGHT} opacity="0.5" />
        <text x="900" y="460" textAnchor="middle" fontSize="16" fill={SVG_COLORS.SOFT_BROWN_DARK} fontFamily="'Georgia', serif">
          Meadow
        </text>
      </g>
      
      <g opacity={revealOpacity(5)}>
        {/* Summit */}
        <circle cx="1050" cy="350" r="40" fill={SVG_COLORS.TERRACOTTA_ORANGE_LIGHT} opacity="0.6" />
        <text x="1050" y="360" textAnchor="middle" fontSize="18" fontWeight="bold" fill={SVG_COLORS.SOFT_BROWN_DARK} fontFamily="'Georgia', serif">
          Summit
        </text>
      </g>
      
      {/* Compass rose */}
      <g transform="translate(1050, 650)">
        <circle r="50" fill="none" stroke={SVG_COLORS.SOFT_BROWN} strokeWidth="2" />
        <path d="M 0 -45 L 5 0 L 0 -40 L -5 0 Z" fill={SVG_COLORS.TERRACOTTA_ORANGE} />
        <text y="-55" textAnchor="middle" fontSize="20" fontWeight="bold" fill={SVG_COLORS.SOFT_BROWN_DARK}>N</text>
      </g>
    </svg>
  );
}
