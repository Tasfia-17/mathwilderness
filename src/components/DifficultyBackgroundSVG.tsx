import { SVG_COLORS } from '../styles/svgColorPalette';

interface DifficultyBackgroundSVGProps {
  difficulty: string;
}

export default function DifficultyBackgroundSVG({ difficulty }: DifficultyBackgroundSVGProps) {
  if (difficulty === 'easy') {
    return (
      <svg viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" className="w-screen h-screen">
        <rect width="1200" height="800" fill={SVG_COLORS.SKY_LIGHT} />
        <ellipse cx="600" cy="700" rx="500" ry="100" fill={SVG_COLORS.GRASS_LIGHT} />
        {/* Flowers */}
        {[...Array(10)].map((_, i) => (
          <circle key={i} cx={200 + i * 80} cy={680} r="8" fill={SVG_COLORS.SOFT_PINK} />
        ))}
      </svg>
    );
  }
  
  if (difficulty === 'medium') {
    return (
      <svg viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" className="w-screen h-screen">
        <rect width="1200" height="800" fill={SVG_COLORS.SAGE_GREEN_DARK} />
        <ellipse cx="300" cy="500" rx="100" ry="120" fill={SVG_COLORS.SAGE_GREEN} />
        <ellipse cx="900" cy="520" rx="110" ry="130" fill={SVG_COLORS.TERRACOTTA_ORANGE} />
      </svg>
    );
  }
  
  // Hard - mountain climb
  return (
    <svg viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" className="w-screen h-screen">
      <rect width="1200" height="800" fill={SVG_COLORS.SOFT_BROWN_DARK} />
      <path d="M 0 600 L 300 400 L 600 500 L 900 300 L 1200 450 L 1200 800 L 0 800 Z" fill={SVG_COLORS.SOFT_BROWN} />
    </svg>
  );
}
