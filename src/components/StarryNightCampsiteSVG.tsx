import { SVG_COLORS } from '../styles/svgColorPalette';

export default function StarryNightCampsiteSVG() {
  return (
    <svg viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" className="w-screen h-screen">
      <rect width="1200" height="800" fill={SVG_COLORS.NIGHT_BLUE_DARK} />
      
      {/* Stars */}
      {[...Array(50)].map((_, i) => (
        <circle
          key={i}
          cx={Math.random() * 1200}
          cy={Math.random() * 600}
          r={Math.random() * 2 + 1}
          fill="white"
          opacity={Math.random() * 0.5 + 0.5}
        />
      ))}
      
      {/* Moon */}
      <circle cx="1000" cy="150" r="60" fill="oklch(0.95 0.02 85)" opacity="0.9" />
      
      {/* Distant tent silhouettes */}
      <path d="M 200 600 L 250 550 L 300 600 Z" fill={SVG_COLORS.NIGHT_BLUE} opacity="0.8" />
      <path d="M 500 620 L 550 570 L 600 620 Z" fill={SVG_COLORS.NIGHT_BLUE} opacity="0.8" />
      <path d="M 900 610 L 950 560 L 1000 610 Z" fill={SVG_COLORS.NIGHT_BLUE} opacity="0.8" />
      
      {/* Campfire glows */}
      <ellipse cx="250" cy="600" rx="30" ry="20" fill={SVG_COLORS.WARM_GLOW} opacity="0.4" className="animate-pulse" />
      <ellipse cx="550" cy="620" rx="30" ry="20" fill={SVG_COLORS.WARM_GLOW} opacity="0.4" className="animate-pulse" />
      <ellipse cx="950" cy="610" rx="30" ry="20" fill={SVG_COLORS.WARM_GLOW} opacity="0.4" className="animate-pulse" />
      
      {/* Ground */}
      <ellipse cx="600" cy="750" rx="600" ry="100" fill={SVG_COLORS.NIGHT_BLUE} opacity="0.6" />
    </svg>
  );
}
