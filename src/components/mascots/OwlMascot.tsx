import { SVG_COLORS } from '../../styles/svgColorPalette';

interface OwlMascotProps {
  pose?: 'perching' | 'flying' | 'analytical';
  size?: number;
}

export default function OwlMascot({ pose = 'analytical', size = 100 }: OwlMascotProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      {/* Body */}
      <ellipse cx="50" cy="55" rx="22" ry="28" fill={SVG_COLORS.SOFT_BROWN} />
      <ellipse cx="51" cy="54" rx="19" ry="25" fill={SVG_COLORS.SOFT_BROWN_LIGHT} />
      
      {/* Wings */}
      <ellipse cx="30" cy="55" rx="10" ry="20" fill={SVG_COLORS.SOFT_BROWN} />
      <ellipse cx="70" cy="55" rx="10" ry="20" fill={SVG_COLORS.SOFT_BROWN} />
      
      {/* Head */}
      <circle cx="50" cy="35" r="18" fill={SVG_COLORS.SOFT_BROWN} />
      <circle cx="51" cy="34" r="16" fill={SVG_COLORS.SOFT_BROWN_LIGHT} />
      
      {/* Eye patches */}
      <circle cx="43" cy="33" r="8" fill="white" />
      <circle cx="57" cy="33" r="8" fill="white" />
      
      {/* Eyes - wise, analytical */}
      <circle cx="43" cy="33" r="5" fill="oklch(0.20 0 0)" />
      <circle cx="57" cy="33" r="5" fill="oklch(0.20 0 0)" />
      <circle cx="44" cy="32" r="2" fill="white" opacity="0.8" />
      <circle cx="58" cy="32" r="2" fill="white" opacity="0.8" />
      
      {/* Beak */}
      <path d="M 50 38 L 47 43 L 53 43 Z" fill={SVG_COLORS.MUSTARD_YELLOW_DARK} />
      
      {/* Ear tufts */}
      <path d="M 38 22 L 36 15 L 40 20 Z" fill={SVG_COLORS.SOFT_BROWN} />
      <path d="M 62 22 L 64 15 L 60 20 Z" fill={SVG_COLORS.SOFT_BROWN} />
      
      {/* Feet */}
      <g fill={SVG_COLORS.MUSTARD_YELLOW_DARK}>
        <ellipse cx="43" cy="80" rx="5" ry="3" />
        <ellipse cx="57" cy="80" rx="5" ry="3" />
      </g>
    </svg>
  );
}
