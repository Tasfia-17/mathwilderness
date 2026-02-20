import { SVG_COLORS } from '../styles/svgColorPalette';

export default function CharacterLandscapeSVG() {
  return (
    <svg
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      className="w-screen h-screen"
    >
      <defs>
        {/* Sky gradient */}
        <linearGradient id="charSkyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={SVG_COLORS.SKY_LIGHT} />
          <stop offset="100%" stopColor={SVG_COLORS.SKY_MEDIUM} />
        </linearGradient>
        
        {/* Sun glow */}
        <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={SVG_COLORS.WARM_GLOW_BRIGHT} />
          <stop offset="100%" stopColor={SVG_COLORS.WARM_GLOW} stopOpacity="0.3" />
        </radialGradient>
      </defs>
      
      {/* Sky */}
      <rect width="1200" height="800" fill="url(#charSkyGradient)" />
      
      {/* Sun */}
      <circle cx="950" cy="150" r="80" fill="url(#sunGlow)" />
      <circle cx="950" cy="150" r="60" fill={SVG_COLORS.WARM_GLOW_BRIGHT} />
      
      {/* Fluffy clouds */}
      <g opacity="0.8">
        <ellipse cx="200" cy="120" rx="60" ry="35" fill="white" />
        <ellipse cx="240" cy="115" rx="50" ry="30" fill="white" />
        <ellipse cx="170" cy="125" rx="45" ry="28" fill="white" />
        
        <ellipse cx="600" cy="100" rx="70" ry="40" fill="white" />
        <ellipse cx="650" cy="95" rx="55" ry="35" fill="white" />
        <ellipse cx="560" cy="105" rx="50" ry="30" fill="white" />
      </g>
      
      {/* Distant bumpy hills */}
      <path
        d="M 0 500 Q 150 450 300 480 T 600 460 T 900 490 T 1200 470 L 1200 800 L 0 800 Z"
        fill={SVG_COLORS.SAGE_GREEN_LIGHT}
        opacity="0.6"
      />
      
      {/* Mid-distance bumpy hills */}
      <path
        d="M 0 550 Q 200 500 400 530 T 800 510 T 1200 540 L 1200 800 L 0 800 Z"
        fill={SVG_COLORS.SAGE_GREEN}
        opacity="0.8"
      />
      
      {/* Foreground bumpy hills */}
      <path
        d="M 0 600 Q 250 550 500 580 T 1000 560 T 1200 590 L 1200 800 L 0 800 Z"
        fill={SVG_COLORS.SAGE_GREEN_DARK}
      />
      
      {/* Rounded trees - left side */}
      <ellipse cx="150" cy="520" rx="50" ry="55" fill={SVG_COLORS.TERRACOTTA_ORANGE} />
      <ellipse cx="180" cy="510" rx="45" ry="50" fill={SVG_COLORS.MUSTARD_YELLOW} />
      <rect x="145" y="550" width="10" height="50" fill={SVG_COLORS.WOOD_MEDIUM} rx="2" />
      <rect x="175" y="540" width="10" height="60" fill={SVG_COLORS.WOOD_MEDIUM} rx="2" />
      
      {/* Rounded trees - right side */}
      <ellipse cx="1050" cy="530" rx="55" ry="60" fill={SVG_COLORS.SOFT_PINK} />
      <ellipse cx="1020" cy="540" rx="48" ry="53" fill={SVG_COLORS.MUSTARD_YELLOW_LIGHT} />
      <rect x="1045" y="565" width="10" height="55" fill={SVG_COLORS.WOOD_MEDIUM} rx="2" />
      <rect x="1015" y="570" width="10" height="50" fill={SVG_COLORS.WOOD_MEDIUM} rx="2" />
      
      {/* Ground grass */}
      <ellipse cx="600" cy="750" rx="500" ry="80" fill={SVG_COLORS.GRASS_LIGHT} />
      <ellipse cx="600" cy="770" rx="480" ry="60" fill={SVG_COLORS.GRASS_MEDIUM} />
      
      {/* Flowers scattered */}
      <circle cx="300" cy="680" r="8" fill={SVG_COLORS.SOFT_PINK} />
      <circle cx="300" cy="680" r="4" fill={SVG_COLORS.WARM_GLOW} />
      
      <circle cx="450" cy="690" r="8" fill={SVG_COLORS.SOFT_BLUE} />
      <circle cx="450" cy="690" r="4" fill="white" />
      
      <circle cx="750" cy="685" r="8" fill={SVG_COLORS.TERRACOTTA_ORANGE_LIGHT} />
      <circle cx="750" cy="685" r="4" fill={SVG_COLORS.WARM_GLOW} />
      
      <circle cx="900" cy="695" r="8" fill={SVG_COLORS.SOFT_PINK_LIGHT} />
      <circle cx="900" cy="695" r="4" fill="white" />
    </svg>
  );
}
