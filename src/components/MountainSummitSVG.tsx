import { SVG_COLORS } from '../styles/svgColorPalette';

export default function MountainSummitSVG() {
  return (
    <svg viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" className="w-screen h-screen">
      <defs>
        <linearGradient id="sunriseGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={SVG_COLORS.WARM_GLOW_BRIGHT} />
          <stop offset="50%" stopColor={SVG_COLORS.TERRACOTTA_ORANGE_LIGHT} />
          <stop offset="100%" stopColor={SVG_COLORS.SOFT_PINK_LIGHT} />
        </linearGradient>
      </defs>
      
      <rect width="1200" height="800" fill="url(#sunriseGrad)" />
      
      {/* Sun */}
      <circle cx="600" cy="200" r="100" fill={SVG_COLORS.WARM_GLOW_BRIGHT} opacity="0.8" />
      
      {/* Mountain peak */}
      <path d="M 0 600 L 600 200 L 1200 600 L 1200 800 L 0 800 Z" fill={SVG_COLORS.SOFT_BROWN} />
      <path d="M 0 600 L 600 200 L 1200 600" fill={SVG_COLORS.SOFT_BROWN_DARK} opacity="0.3" />
      
      {/* Clouds */}
      <ellipse cx="300" cy="400" rx="80" ry="50" fill="white" opacity="0.6" />
      <ellipse cx="900" cy="450" rx="90" ry="55" fill="white" opacity="0.6" />
    </svg>
  );
}
