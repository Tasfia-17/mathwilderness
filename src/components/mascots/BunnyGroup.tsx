import { SVG_COLORS } from '../../styles/svgColorPalette';

interface BunnyGroupProps {
  count?: 2 | 3;
  arrangement?: 'row' | 'cluster';
}

export default function BunnyGroup({ count = 2, arrangement = 'row' }: BunnyGroupProps) {
  const renderBunny = (x: number, y: number, color: string) => (
    <g transform={`translate(${x}, ${y})`}>
      {/* Body */}
      <ellipse cx="0" cy="15" rx="12" ry="15" fill={color} />
      
      {/* Head */}
      <circle cx="0" cy="0" r="10" fill={color} />
      
      {/* Ears */}
      <ellipse cx="-5" cy="-8" rx="3" ry="10" fill={color} />
      <ellipse cx="5" cy="-8" rx="3" ry="10" fill={color} />
      
      {/* Eyes */}
      <circle cx="-3" cy="-1" r="2" fill="oklch(0.20 0 0)" />
      <circle cx="3" cy="-1" r="2" fill="oklch(0.20 0 0)" />
      
      {/* Nose */}
      <circle cx="0" cy="2" r="1.5" fill={SVG_COLORS.SOFT_PINK} />
      
      {/* Fluffy tail */}
      <circle cx="0" cy="28" r="6" fill={color} opacity="0.8" />
    </g>
  );
  
  return (
    <svg width="100" height="60" viewBox="0 0 100 60">
      {arrangement === 'row' ? (
        <>
          {renderBunny(25, 30, SVG_COLORS.SOFT_BROWN_LIGHT)}
          {renderBunny(50, 30, SVG_COLORS.SOFT_PINK_LIGHT)}
          {count === 3 && renderBunny(75, 30, 'white')}
        </>
      ) : (
        <>
          {renderBunny(30, 35, SVG_COLORS.SOFT_BROWN_LIGHT)}
          {renderBunny(55, 30, SVG_COLORS.SOFT_PINK_LIGHT)}
          {count === 3 && renderBunny(70, 40, 'white')}
        </>
      )}
    </svg>
  );
}
