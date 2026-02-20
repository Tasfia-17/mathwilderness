import { SVG_COLORS } from '../../styles/svgColorPalette';

interface SquirrelMascotProps {
  pose?: 'running' | 'jumping' | 'excited';
  size?: number;
}

export default function SquirrelMascot({ pose = 'excited', size = 100 }: SquirrelMascotProps) {
  const scale = size / 100;
  
  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      {/* Fluffy tail */}
      <ellipse 
        cx="70" 
        cy="40" 
        rx="25" 
        ry="35" 
        fill={SVG_COLORS.TERRACOTTA_ORANGE}
        transform={pose === 'jumping' ? 'rotate(-20 70 40)' : 'rotate(-10 70 40)'}
      />
      <ellipse 
        cx="72" 
        cy="38" 
        rx="22" 
        ry="32" 
        fill={SVG_COLORS.TERRACOTTA_ORANGE_LIGHT}
        transform={pose === 'jumping' ? 'rotate(-20 72 38)' : 'rotate(-10 72 38)'}
      />
      
      {/* Body */}
      <ellipse cx="45" cy="55" rx="18" ry="22" fill={SVG_COLORS.TERRACOTTA_ORANGE} />
      <ellipse cx="46" cy="54" rx="15" ry="19" fill={SVG_COLORS.TERRACOTTA_ORANGE_LIGHT} />
      
      {/* Head */}
      <circle cx="40" cy="35" r="15" fill={SVG_COLORS.TERRACOTTA_ORANGE} />
      <circle cx="41" cy="34" r="13" fill={SVG_COLORS.TERRACOTTA_ORANGE_LIGHT} />
      
      {/* Ears */}
      <ellipse cx="33" cy="25" rx="5" ry="8" fill={SVG_COLORS.TERRACOTTA_ORANGE} />
      <ellipse cx="47" cy="25" rx="5" ry="8" fill={SVG_COLORS.TERRACOTTA_ORANGE} />
      
      {/* Eyes - excited expression */}
      <circle cx="36" cy="33" r="3" fill="white" />
      <circle cx="44" cy="33" r="3" fill="white" />
      <circle cx="36" cy="33" r="2" fill="oklch(0.20 0 0)" />
      <circle cx="44" cy="33" r="2" fill="oklch(0.20 0 0)" />
      
      {/* Nose */}
      <circle cx="40" cy="38" r="2" fill={SVG_COLORS.SOFT_BROWN_DARK} />
      
      {/* Arms */}
      <ellipse cx="32" cy="50" rx="5" ry="10" fill={SVG_COLORS.TERRACOTTA_ORANGE} transform="rotate(-30 32 50)" />
      <ellipse cx="58" cy="50" rx="5" ry="10" fill={SVG_COLORS.TERRACOTTA_ORANGE} transform="rotate(30 58 50)" />
      
      {/* Legs */}
      <ellipse cx="38" cy="72" rx="6" ry="10" fill={SVG_COLORS.TERRACOTTA_ORANGE} />
      <ellipse cx="52" cy="72" rx="6" ry="10" fill={SVG_COLORS.TERRACOTTA_ORANGE} />
    </svg>
  );
}
