import { SVG_COLORS } from '../styles/svgColorPalette';
import ConceptLandscapeSVG from './ConceptLandscapeSVG';

interface TentInteriorSVGProps {
  conceptType: string;
}

export default function TentInteriorSVG({ conceptType }: TentInteriorSVGProps) {
  return (
    <svg viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" className="w-screen h-screen">
      <rect width="1200" height="800" fill={SVG_COLORS.SOFT_BLUE_DARK} />
      
      {/* Tent fabric walls */}
      <path d="M 0 0 L 300 0 L 400 400 L 0 800 Z" fill={SVG_COLORS.SOFT_BLUE} opacity="0.8" />
      <path d="M 1200 0 L 900 0 L 800 400 L 1200 800 Z" fill={SVG_COLORS.SOFT_BLUE} opacity="0.8" />
      
      {/* Viewport opening showing landscape */}
      <g transform="translate(400, 200)">
        <rect x="0" y="0" width="400" height="400" fill="white" rx="20" />
        <foreignObject x="0" y="0" width="400" height="400">
          <div style={{ width: '100%', height: '100%', overflow: 'hidden', borderRadius: '20px' }}>
            <ConceptLandscapeSVG conceptType={conceptType} />
          </div>
        </foreignObject>
      </g>
      
      {/* Formula notes pinned to tent wall */}
      <g transform="translate(100, 100)">
        <rect x="0" y="0" width="150" height="100" fill="oklch(0.92 0.03 75)" rx="8" />
        <text x="75" y="50" textAnchor="middle" fontSize="14" fill={SVG_COLORS.SOFT_BROWN_DARK}>
          Key Formulas
        </text>
      </g>
    </svg>
  );
}
