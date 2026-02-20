import { SVG_COLORS } from '../styles/svgColorPalette';

interface TutorialSceneSVGProps {
  step: number;
}

export default function TutorialSceneSVG({ step }: TutorialSceneSVGProps) {
  if (step === 0) {
    // Forest path scene
    return (
      <svg viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" className="w-screen h-screen">
        <rect width="1200" height="800" fill={SVG_COLORS.SKY_LIGHT} />
        
        {/* Path through forest */}
        <path
          d="M 100 700 Q 300 650 600 600 T 1100 500"
          stroke={SVG_COLORS.SOFT_BROWN}
          strokeWidth="40"
          fill="none"
        />
        
        {/* Trees along path */}
        <ellipse cx="200" cy="550" rx="60" ry="70" fill={SVG_COLORS.SAGE_GREEN} />
        <ellipse cx="500" cy="520" rx="70" ry="80" fill={SVG_COLORS.TERRACOTTA_ORANGE} />
        <ellipse cx="900" cy="480" rx="65" ry="75" fill={SVG_COLORS.MUSTARD_YELLOW} />
        
        {/* Ground */}
        <ellipse cx="600" cy="750" rx="500" ry="80" fill={SVG_COLORS.GRASS_MEDIUM} />
      </svg>
    );
  }
  
  if (step === 1) {
    // River crossing scene
    return (
      <svg viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" className="w-screen h-screen">
        <rect width="1200" height="800" fill={SVG_COLORS.SKY_LIGHT} />
        
        {/* River */}
        <path
          d="M 0 400 Q 300 380 600 400 T 1200 420"
          stroke={SVG_COLORS.SOFT_BLUE}
          strokeWidth="150"
          fill="none"
          opacity="0.6"
        />
        
        {/* Stepping stones */}
        {[200, 400, 600, 800, 1000].map((x, i) => (
          <ellipse key={i} cx={x} cy={400} rx="40" ry="25" fill={SVG_COLORS.SOFT_BROWN} />
        ))}
        
        {/* Banks */}
        <ellipse cx="600" cy="250" rx="500" ry="100" fill={SVG_COLORS.GRASS_LIGHT} />
        <ellipse cx="600" cy="550" rx="500" ry="100" fill={SVG_COLORS.GRASS_LIGHT} />
      </svg>
    );
  }
  
  // Wooden bridge scene
  return (
    <svg viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" className="w-screen h-screen">
      <rect width="1200" height="800" fill={SVG_COLORS.SKY_LIGHT} />
      
      {/* Stream below */}
      <ellipse cx="600" cy="500" rx="400" ry="80" fill={SVG_COLORS.SOFT_BLUE} opacity="0.6" />
      
      {/* Wooden bridge */}
      <rect x="300" y="380" width="600" height="40" fill={SVG_COLORS.WOOD_MEDIUM} rx="8" />
      
      {/* Bridge planks */}
      {[...Array(12)].map((_, i) => (
        <rect key={i} x={320 + i * 45} y="380" width="35" height="40" fill={SVG_COLORS.WOOD_DARK} opacity="0.3" />
      ))}
      
      {/* Support posts */}
      <rect x="350" y="420" width="20" height="100" fill={SVG_COLORS.WOOD_DARK} />
      <rect x="830" y="420" width="20" height="100" fill={SVG_COLORS.WOOD_DARK} />
      
      {/* Ground */}
      <ellipse cx="600" cy="750" rx="500" ry="80" fill={SVG_COLORS.GRASS_MEDIUM} />
    </svg>
  );
}
