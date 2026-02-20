import { SVG_COLORS } from '../styles/svgColorPalette';

export default function LodgeCabinInteriorSVG() {
  return (
    <svg viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" className="w-screen h-screen">
      <rect width="1200" height="800" fill="oklch(0.35 0.04 50)" />
      
      {/* Wooden walls */}
      {[...Array(8)].map((_, i) => (
        <rect key={i} x="0" y={i * 100} width="1200" height="100" fill={SVG_COLORS.WOOD_MEDIUM} opacity={0.3 + i * 0.05} />
      ))}
      
      {/* Fireplace glow */}
      <ellipse cx="200" cy="400" rx="100" ry="150" fill={SVG_COLORS.WARM_GLOW} opacity="0.3" />
      
      {/* Warm lighting */}
      <rect width="1200" height="800" fill={SVG_COLORS.TERRACOTTA_ORANGE} opacity="0.05" />
    </svg>
  );
}
