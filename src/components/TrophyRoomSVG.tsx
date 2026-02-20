import { SVG_COLORS } from '../styles/svgColorPalette';

export default function TrophyRoomSVG() {
  return (
    <svg viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" className="w-screen h-screen">
      <rect width="1200" height="800" fill="oklch(0.40 0.04 50)" />
      
      {/* Wooden wall planks */}
      {[...Array(8)].map((_, i) => (
        <rect
          key={i}
          x="0"
          y={i * 100}
          width="1200"
          height="100"
          fill={SVG_COLORS.WOOD_MEDIUM}
          opacity={0.4 + i * 0.05}
        />
      ))}
      
      {/* Shelves */}
      <rect x="100" y="200" width="1000" height="20" fill={SVG_COLORS.WOOD_DARK} rx="4" />
      <rect x="100" y="400" width="1000" height="20" fill={SVG_COLORS.WOOD_DARK} rx="4" />
      <rect x="100" y="600" width="1000" height="20" fill={SVG_COLORS.WOOD_DARK} rx="4" />
      
      {/* Display cases (simplified) */}
      <rect x="200" y="150" width="150" height="150" fill="oklch(0.85 0.02 220)" opacity="0.2" rx="8" />
      <rect x="500" y="150" width="150" height="150" fill="oklch(0.85 0.02 220)" opacity="0.2" rx="8" />
      <rect x="800" y="150" width="150" height="150" fill="oklch(0.85 0.02 220)" opacity="0.2" rx="8" />
      
      {/* Warm lighting */}
      <rect width="1200" height="800" fill={SVG_COLORS.WARM_GLOW} opacity="0.08" />
    </svg>
  );
}
