import { MascotType } from '../types/navigation';

interface MascotCompanionPanelProps {
  mascotType: MascotType;
}

const MASCOT_INFO: Record<MascotType, { name: string; personality: string; traits: string[] }> = {
  owl: { name: 'Wise Owl', personality: 'Thoughtful and patient', traits: ['Analytical', 'Calm', 'Methodical'] },
  fox: { name: 'Clever Fox', personality: 'Quick and creative', traits: ['Innovative', 'Agile', 'Curious'] },
  bear: { name: 'Strong Bear', personality: 'Determined and steady', traits: ['Persistent', 'Reliable', 'Focused'] },
  rabbit: { name: 'Swift Rabbit', personality: 'Energetic and enthusiastic', traits: ['Fast', 'Eager', 'Adaptive'] },
  squirrel: { name: 'Busy Squirrel', personality: 'Organized and efficient', traits: ['Prepared', 'Quick', 'Resourceful'] },
  moose: { name: 'Mighty Moose', personality: 'Strong and confident', traits: ['Powerful', 'Steady', 'Bold'] },
};

export default function MascotCompanionPanel({ mascotType }: MascotCompanionPanelProps) {
  const mascot = MASCOT_INFO[mascotType];
  const getMascotIcon = (id: MascotType) => {
    const icons: Record<MascotType, string> = {
      owl: '🦉',
      fox: '🦊',
      bear: '🐻',
      rabbit: '🐰',
      squirrel: '🐿️',
      moose: '🦌',
    };
    return icons[id] || '🦉';
  };

  return (
    <div className="parchment-texture p-5 rounded-xl shadow-lg">
      <h3 className="text-base font-bold mb-3" style={{ color: 'oklch(0.35 0.06 50)' }}>
        Your Companion
      </h3>
      <div className="flex items-center gap-4">
        <div className="text-4xl">{getMascotIcon(mascotType)}</div>
        <div className="flex-1">
          <div className="text-base font-bold mb-1" style={{ color: 'oklch(0.35 0.06 50)' }}>
            {mascot.name}
          </div>
          <div className="text-xs mb-2" style={{ color: 'oklch(0.45 0.06 50)' }}>
            {mascot.personality}
          </div>
          <div className="flex flex-wrap gap-1">
            {mascot.traits.map(trait => (
              <span
                key={trait}
                className="text-xs bg-[#8B7355]/20 text-[#6B5744] px-2 py-0.5 rounded-full border border-[#6B5744]"
              >
                {trait}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
