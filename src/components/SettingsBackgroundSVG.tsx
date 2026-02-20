export default function SettingsBackgroundSVG() {
  return (
    <svg
      viewBox="0 0 1920 1080"
      className="absolute inset-0 w-full h-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="settings-sky" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#87CEEB" />
          <stop offset="100%" stopColor="#B0C4DE" />
        </linearGradient>
        <radialGradient id="settings-glow" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#FFD700" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#FFD700" stopOpacity="0" />
        </radialGradient>
      </defs>
      
      {/* Sky with misty morning light */}
      <rect width="1920" height="1080" fill="url(#settings-sky)" />
      
      {/* Mist layers */}
      <ellipse cx="960" cy="800" rx="1200" ry="300" fill="white" opacity="0.1" />
      <ellipse cx="960" cy="850" rx="1000" ry="250" fill="white" opacity="0.15" />
      
      {/* Birch forest background */}
      {[200, 350, 500, 650, 800, 950, 1100, 1250, 1400, 1550, 1700].map((x, i) => (
        <g key={i}>
          {/* Birch trunk with distinctive white bark */}
          <rect
            x={x - 15}
            y={300 + (i % 3) * 50}
            width="30"
            height="500"
            fill="#F5F5DC"
            opacity="0.9"
          />
          {/* Black birch markings */}
          <rect x={x - 15} y={350 + (i % 3) * 50} width="30" height="8" fill="#2F4F4F" opacity="0.6" />
          <rect x={x - 15} y={420 + (i % 3) * 50} width="30" height="12" fill="#2F4F4F" opacity="0.6" />
          <rect x={x - 15} y={510 + (i % 3) * 50} width="30" height="6" fill="#2F4F4F" opacity="0.6" />
          <rect x={x - 15} y={600 + (i % 3) * 50} width="30" height="10" fill="#2F4F4F" opacity="0.6" />
          
          {/* Birch foliage */}
          <ellipse
            cx={x}
            cy={280 + (i % 3) * 50}
            rx="60"
            ry="80"
            fill="#9ACD32"
            opacity="0.7"
          />
          <ellipse
            cx={x + 20}
            cy={260 + (i % 3) * 50}
            rx="50"
            ry="70"
            fill="#8FBC8F"
            opacity="0.6"
          />
        </g>
      ))}
      
      {/* Ground with grass and flowers */}
      <ellipse cx="960" cy="1000" rx="1200" ry="200" fill="#8B7355" opacity="0.8" />
      <ellipse cx="960" cy="1020" rx="1100" ry="150" fill="#A0826D" opacity="0.7" />
      
      {/* Grass tufts */}
      {Array.from({ length: 40 }).map((_, i) => (
        <path
          key={`grass-${i}`}
          d={`M ${100 + i * 45} 950 Q ${105 + i * 45} 920 ${100 + i * 45} 900`}
          stroke="#6B8E23"
          strokeWidth="3"
          fill="none"
          opacity="0.6"
        />
      ))}
      
      {/* Wildflowers */}
      {Array.from({ length: 25 }).map((_, i) => (
        <g key={`flower-${i}`}>
          <circle
            cx={150 + i * 70}
            cy={920 + (i % 3) * 20}
            r="8"
            fill={i % 3 === 0 ? '#FFD700' : i % 3 === 1 ? '#FF69B4' : '#9370DB'}
            opacity="0.8"
          />
          <line
            x1={150 + i * 70}
            y1={920 + (i % 3) * 20}
            x2={150 + i * 70}
            y2={950 + (i % 3) * 20}
            stroke="#228B22"
            strokeWidth="2"
          />
        </g>
      ))}
      
      {/* Mushrooms */}
      {[300, 600, 900, 1200, 1500].map((x, i) => (
        <g key={`mushroom-${i}`}>
          <ellipse cx={x} cy={970} rx="20" ry="8" fill="#8B4513" />
          <rect x={x - 8} y={950} width="16" height="20" fill="#D2B48C" rx="2" />
          <ellipse cx={x} cy={945} rx="25" ry="15" fill="#DC143C" />
          <circle cx={x - 8} cy={940} r="4" fill="white" opacity="0.8" />
          <circle cx={x + 6} cy={943} r="3" fill="white" opacity="0.8" />
        </g>
      ))}
      
      {/* Rocks */}
      {[250, 550, 850, 1150, 1450, 1650].map((x, i) => (
        <ellipse
          key={`rock-${i}`}
          cx={x}
          cy={980}
          rx={30 + (i % 2) * 10}
          ry={20 + (i % 2) * 5}
          fill="#696969"
          opacity="0.7"
        />
      ))}
      
      {/* Ferns */}
      {[400, 800, 1300, 1600].map((x, i) => (
        <g key={`fern-${i}`}>
          <path
            d={`M ${x} 950 Q ${x - 20} 920 ${x - 30} 900 Q ${x - 25} 920 ${x - 20} 940`}
            fill="#2E8B57"
            opacity="0.6"
          />
          <path
            d={`M ${x} 950 Q ${x + 20} 920 ${x + 30} 900 Q ${x + 25} 920 ${x + 20} 940`}
            fill="#2E8B57"
            opacity="0.6"
          />
        </g>
      ))}
      
      {/* Butterflies */}
      {[500, 1000, 1400].map((x, i) => (
        <g key={`butterfly-${i}`}>
          <ellipse cx={x} cy={400 + i * 50} rx="8" ry="12" fill="#FF69B4" opacity="0.7" transform={`rotate(${i * 15} ${x} ${400 + i * 50})`} />
          <ellipse cx={x + 10} cy={400 + i * 50} rx="8" ry="12" fill="#FF69B4" opacity="0.7" transform={`rotate(${i * 15} ${x + 10} ${400 + i * 50})`} />
          <line x1={x + 5} y1={395 + i * 50} x2={x + 5} y2={405 + i * 50} stroke="#8B4513" strokeWidth="2" />
        </g>
      ))}
      
      {/* Morning sun glow */}
      <circle cx="1600" cy="200" r="300" fill="url(#settings-glow)" />
      <circle cx="1600" cy="200" r="80" fill="#FFD700" opacity="0.8" />
    </svg>
  );
}
