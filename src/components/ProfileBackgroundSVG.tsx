import { SVG_COLORS } from '../styles/svgColorPalette';

export default function ProfileBackgroundSVG() {
  return (
    <svg viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" className="w-screen h-screen">
      <rect width="1200" height="800" fill={SVG_COLORS.SKY_MEDIUM} />
      
      {/* Woodland clearing */}
      <ellipse cx="600" cy="700" rx="500" ry="120" fill={SVG_COLORS.GRASS_LIGHT} />
      <ellipse cx="600" cy="720" rx="480" ry="100" fill={SVG_COLORS.GRASS_MEDIUM} />
      
      {/* Trees around clearing */}
      <ellipse cx="150" cy="500" rx="70" ry="80" fill={SVG_COLORS.SAGE_GREEN} opacity="0.8" />
      <ellipse cx="1050" cy="520" rx="75" ry="85" fill={SVG_COLORS.TERRACOTTA_ORANGE} opacity="0.8" />
      <ellipse cx="250" cy="450" rx="65" ry="75" fill={SVG_COLORS.MUSTARD_YELLOW} opacity="0.8" />
      <ellipse cx="950" cy="480" rx="70" ry="80" fill={SVG_COLORS.SOFT_PINK} opacity="0.8" />
      
      {/* Tent in background */}
      <path d="M 500 550 L 550 500 L 600 550 Z" fill={SVG_COLORS.SOFT_BLUE} opacity="0.6" />
      
      {/* Backpack */}
      <ellipse cx="700" cy="650" rx="30" ry="40" fill={SVG_COLORS.TERRACOTTA_ORANGE} opacity="0.7" />
    </svg>
  );
}
