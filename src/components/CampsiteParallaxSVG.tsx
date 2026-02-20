import { SVG_COLORS } from '../styles/svgColorPalette';

interface CampsiteParallaxSVGProps {
  mouseX: number;
  mouseY: number;
  onMascotClick: () => void;
}

export default function CampsiteParallaxSVG({ mouseX, mouseY, onMascotClick }: CampsiteParallaxSVGProps) {
  const parallaxX1 = (mouseX - 600) * 0.01;
  const parallaxX2 = (mouseX - 600) * 0.02;
  const parallaxX3 = (mouseX - 600) * 0.03;
  const parallaxX4 = (mouseX - 600) * 0.05;

  return (
    <svg
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      className="w-screen h-screen"
    >
      <defs>
        <radialGradient id="campfireGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={SVG_COLORS.WARM_GLOW_BRIGHT} />
          <stop offset="100%" stopColor={SVG_COLORS.TERRACOTTA_ORANGE} stopOpacity="0.2" />
        </radialGradient>
      </defs>
      
      {/* Sky */}
      <rect width="1200" height="800" fill={SVG_COLORS.SKY_MEDIUM} />
      
      {/* Layer 1: Distant mountains (slowest) */}
      <g transform={`translate(${parallaxX1}, 0)`}>
        <path d="M 0 400 Q 300 300 600 350 T 1200 380 L 1200 800 L 0 800 Z" fill={SVG_COLORS.SAGE_GREEN_LIGHT} opacity="0.6" />
      </g>
      
      {/* Layer 2: Mid-ground trees */}
      <g transform={`translate(${parallaxX2}, 0)`}>
        <ellipse cx="200" cy="480" rx="60" ry="70" fill={SVG_COLORS.TERRACOTTA_ORANGE} opacity="0.8" />
        <ellipse cx="1000" cy="490" rx="65" ry="75" fill={SVG_COLORS.MUSTARD_YELLOW} opacity="0.8" />
      </g>
      
      {/* Layer 3: Tent, campfire, mascot (interactive) */}
      <g transform={`translate(${parallaxX3}, 0)`}>
        {/* Tent */}
        <path d="M 500 450 L 600 350 L 700 450 Z" fill={SVG_COLORS.SOFT_BLUE} />
        <path d="M 500 450 L 600 350 L 700 450 L 500 450" fill={SVG_COLORS.SOFT_BLUE_DARK} opacity="0.3" />
        <rect x="590" y="400" width="20" height="50" fill={SVG_COLORS.SOFT_BLUE_DARK} />
        
        {/* Campfire */}
        <ellipse cx="600" cy="550" rx="40" ry="15" fill={SVG_COLORS.SOFT_BROWN_DARK} />
        <ellipse cx="600" cy="530" rx="50" ry="30" fill="url(#campfireGlow)" className="animate-pulse" />
        <path d="M 580 540 Q 590 520 600 540 Q 610 525 620 540" fill={SVG_COLORS.WARM_GLOW_BRIGHT} className="animate-pulse" />
        
        {/* Mascot by fire - clickable */}
        <g transform="translate(650, 520)" onClick={onMascotClick} className="cursor-pointer hover:scale-110 transition-transform">
          <ellipse cx="0" cy="0" rx="20" ry="25" fill={SVG_COLORS.SOFT_BROWN} />
          <circle cx="0" cy="-15" r="12" fill={SVG_COLORS.SOFT_BROWN_LIGHT} />
          <circle cx="-4" cy="-16" r="3" fill="oklch(0.20 0 0)" />
          <circle cx="4" cy="-16" r="3" fill="oklch(0.20 0 0)" />
        </g>
      </g>
      
      {/* Layer 4: Foreground grass (fastest, mouse-reactive) */}
      <g transform={`translate(${parallaxX4}, 0)`}>
        <ellipse cx="600" cy="750" rx="500" ry="80" fill={SVG_COLORS.GRASS_MEDIUM} />
        {/* Grass blades */}
        {[...Array(20)].map((_, i) => (
          <line
            key={i}
            x1={100 + i * 50}
            y1="720"
            x2={100 + i * 50 + (mouseX - 600) * 0.01}
            y2="700"
            stroke={SVG_COLORS.GRASS_DARK}
            strokeWidth="3"
            strokeLinecap="round"
          />
        ))}
      </g>
    </svg>
  );
}
