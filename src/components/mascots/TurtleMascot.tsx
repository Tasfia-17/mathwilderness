import { SVG_COLORS } from '../../styles/svgColorPalette';

interface TurtleMascotProps {
  pose?: 'walking' | 'resting' | 'observing';
  size?: number;
}

export default function TurtleMascot({ pose = 'resting', size = 100 }: TurtleMascotProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      {/* Shell */}
      <ellipse cx="50" cy="50" rx="30" ry="25" fill={SVG_COLORS.SAGE_GREEN_DARK} />
      <ellipse cx="50" cy="48" rx="28" ry="23" fill={SVG_COLORS.SAGE_GREEN} />
      
      {/* Shell pattern */}
      <g fill={SVG_COLORS.SAGE_GREEN_DARK} opacity="0.4">
        <circle cx="50" cy="45" r="6" />
        <circle cx="40" cy="50" r="5" />
        <circle cx="60" cy="50" r="5" />
        <circle cx="45" cy="55" r="5" />
        <circle cx="55" cy="55" r="5" />
      </g>
      
      {/* Head */}
      <ellipse cx="50" cy="30" rx="10" ry="12" fill={SVG_COLORS.SAGE_GREEN_LIGHT} />
      <ellipse cx="50" cy="29" rx="8" ry="10" fill={SVG_COLORS.SAGE_GREEN} opacity="0.5" />
      
      {/* Eyes - calm */}
      <circle cx="47" cy="28" r="2" fill="oklch(0.20 0 0)" />
      <circle cx="53" cy="28" r="2" fill="oklch(0.20 0 0)" />
      
      {/* Smile */}
      <path d="M 46 32 Q 50 34 54 32" stroke={SVG_COLORS.SAGE_GREEN_DARK} strokeWidth="1" fill="none" strokeLinecap="round" />
      
      {/* Legs */}
      <ellipse cx="28" cy="60" rx="6" ry="8" fill={SVG_COLORS.SAGE_GREEN_LIGHT} />
      <ellipse cx="72" cy="60" rx="6" ry="8" fill={SVG_COLORS.SAGE_GREEN_LIGHT} />
      <ellipse cx="35" cy="68" rx="6" ry="7" fill={SVG_COLORS.SAGE_GREEN_LIGHT} />
      <ellipse cx="65" cy="68" rx="6" ry="7" fill={SVG_COLORS.SAGE_GREEN_LIGHT} />
    </svg>
  );
}
