import { SVG_COLORS } from '../styles/svgColorPalette';

interface Concept {
  id: string;
  name: string;
  difficulty: number;
  progress: number;
  state: string;
}

interface ForestMapSVGProps {
  concepts: Concept[];
  onNodeClick: (concept: Concept) => void;
}

export default function ForestMapSVG({ concepts, onNodeClick }: ForestMapSVGProps) {
  const nodePositions = [
    { x: 200, y: 600 },
    { x: 400, y: 500 },
    { x: 600, y: 450 },
    { x: 850, y: 400 },
    { x: 1000, y: 350 },
    { x: 700, y: 550 },
  ];

  return (
    <svg viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" className="w-screen h-screen">
      <rect width="1200" height="800" fill={SVG_COLORS.SKY_LIGHT} />
      
      <ellipse cx="300" cy="550" rx="150" ry="140" fill={SVG_COLORS.SAGE_GREEN} opacity="0.6" />
      <ellipse cx="700" cy="500" rx="180" ry="160" fill={SVG_COLORS.TERRACOTTA_ORANGE} opacity="0.6" />
      <ellipse cx="1000" cy="480" rx="160" ry="150" fill={SVG_COLORS.MUSTARD_YELLOW} opacity="0.6" />
      
      <path
        d="M 200 600 Q 300 550 400 500 T 600 450 T 850 400 T 1000 350"
        stroke={SVG_COLORS.SOFT_BROWN}
        strokeWidth="6"
        fill="none"
        strokeDasharray="10,5"
        opacity="0.5"
      />
      
      {concepts.map((concept, index) => {
        const pos = nodePositions[index] || nodePositions[0];
        const getColor = () => {
          if (concept.state === 'mastered') return SVG_COLORS.SAGE_GREEN;
          if (concept.state === 'available') return SVG_COLORS.MUSTARD_YELLOW;
          return SVG_COLORS.SOFT_BROWN_LIGHT;
        };
        
        return (
          <g
            key={concept.id}
            transform={`translate(${pos.x}, ${pos.y})`}
            onClick={() => onNodeClick(concept)}
            className={concept.state !== 'locked' ? 'cursor-pointer hover:scale-110 transition-transform' : 'opacity-40'}
          >
            <path d="M -30 0 L 0 -40 L 30 0 Z" fill={getColor()} />
            {concept.state === 'mastered' && (
              <path d="M 0 -40 L 0 -60 L 15 -55 L 0 -50 Z" fill={SVG_COLORS.TERRACOTTA_ORANGE} />
            )}
            {concept.state === 'available' && (
              <circle cx="0" cy="-20" r="25" fill={SVG_COLORS.WARM_GLOW} opacity="0.3" className="animate-pulse" />
            )}
            <text y="25" textAnchor="middle" fontSize="14" fontWeight="bold" fill={SVG_COLORS.SOFT_BROWN_DARK}>
              {concept.name}
            </text>
          </g>
        );
      })}
      
      <ellipse cx="850" cy="400" rx="100" ry="80" fill="white" opacity="0.6" />
    </svg>
  );
}
