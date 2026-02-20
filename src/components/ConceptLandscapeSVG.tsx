import { SVG_COLORS } from '../styles/svgColorPalette';

interface ConceptLandscapeSVGProps {
  conceptType: string;
}

export default function ConceptLandscapeSVG({ conceptType }: ConceptLandscapeSVGProps) {
  if (conceptType === 'algebra') {
    return (
      <svg viewBox="0 0 400 400" className="w-full h-full">
        <rect width="400" height="400" fill={SVG_COLORS.SKY_MEDIUM} />
        {/* Stone ruins with symbols */}
        <rect x="150" y="250" width="100" height="120" fill={SVG_COLORS.SOFT_BROWN} rx="8" />
        <text x="200" y="310" textAnchor="middle" fontSize="40" fill={SVG_COLORS.SOFT_BROWN_DARK}>x</text>
      </svg>
    );
  }
  
  if (conceptType === 'geometry') {
    return (
      <svg viewBox="0 0 400 400" className="w-full h-full">
        <rect width="400" height="400" fill={SVG_COLORS.SKY_MEDIUM} />
        {/* Crystal formations */}
        <path d="M 200 150 L 250 300 L 150 300 Z" fill={SVG_COLORS.SOFT_BLUE} opacity="0.7" />
        <path d="M 200 150 L 250 300 L 200 250 Z" fill={SVG_COLORS.SOFT_BLUE_DARK} opacity="0.5" />
      </svg>
    );
  }
  
  // Fractions - pie trees
  return (
    <svg viewBox="0 0 400 400" className="w-full h-full">
      <rect width="400" height="400" fill={SVG_COLORS.SKY_MEDIUM} />
      <circle cx="200" cy="200" r="80" fill={SVG_COLORS.TERRACOTTA_ORANGE} />
      <path d="M 200 200 L 200 120 A 80 80 0 0 1 280 200 Z" fill={SVG_COLORS.TERRACOTTA_ORANGE_DARK} />
    </svg>
  );
}
