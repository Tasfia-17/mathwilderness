import { SVG_COLORS } from '../../styles/svgColorPalette';

interface MooseMascotProps {
  pose?: 'pondering' | 'steady' | 'reading';
  size?: number;
}

export default function MooseMascot({ pose = 'steady', size = 100 }: MooseMascotProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      {/* Antlers */}
      <g fill={SVG_COLORS.SOFT_BROWN}>
        {/* Left antler */}
        <path d="M 30 25 L 28 15 M 30 25 L 25 18 M 30 25 L 32 18" stroke={SVG_COLORS.SOFT_BROWN} strokeWidth="3" fill="none" strokeLinecap="round" />
        {/* Right antler */}
        <path d="M 60 25 L 62 15 M 60 25 L 65 18 M 60 25 L 58 18" stroke={SVG_COLORS.SOFT_BROWN} strokeWidth="3" fill="none" strokeLinecap="round" />
      </g>
      
      {/* Head */}
      <ellipse cx="45" cy="40" rx="20" ry="18" fill={SVG_COLORS.SOFT_BROWN} />
      <ellipse cx="46" cy="39" rx="18" ry="16" fill={SVG_COLORS.SOFT_BROWN_LIGHT} />
      
      {/* Snout */}
      <ellipse cx="45" cy="48" rx="12" ry="10" fill={SVG_COLORS.SOFT_BROWN_LIGHT} />
      <ellipse cx="45" cy="47" rx="10" ry="8" fill={SVG_COLORS.SOFT_BROWN} opacity="0.3" />
      
      {/* Ears */}
      <ellipse cx="28" cy="35" rx="6" ry="9" fill={SVG_COLORS.SOFT_BROWN} />
      <ellipse cx="62" cy="35" rx="6" ry="9" fill={SVG_COLORS.SOFT_BROWN} />
      
      {/* Eyes - gentle, thoughtful */}
      <ellipse cx="38" cy="38" rx="3" ry="4" fill="white" />
      <ellipse cx="52" cy="38" rx="3" ry="4" fill="white" />
      <circle cx="38" cy="39" r="2" fill="oklch(0.20 0 0)" />
      <circle cx="52" cy="39" r="2" fill="oklch(0.20 0 0)" />
      
      {/* Nose */}
      <ellipse cx="45" cy="50" rx="4" ry="3" fill={SVG_COLORS.SOFT_BROWN_DARK} />
      
      {/* Body */}
      <ellipse cx="45" cy="70" rx="22" ry="25" fill={SVG_COLORS.SOFT_BROWN} />
      <ellipse cx="46" cy="69" rx="19" ry="22" fill={SVG_COLORS.SOFT_BROWN_LIGHT} />
      
      {/* Legs */}
      <rect x="30" y="85" width="8" height="15" rx="4" fill={SVG_COLORS.SOFT_BROWN} />
      <rect x="52" y="85" width="8" height="15" rx="4" fill={SVG_COLORS.SOFT_BROWN} />
    </svg>
  );
}
