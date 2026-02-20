import type { MascotType } from '../types/navigation';

interface MascotCardProps {
  mascot: {
    id: MascotType;
    name: string;
    personality: string;
    traits: string[];
    icon?: React.ReactNode;
  };
  isSelected: boolean;
  onSelect: () => void;
}

export default function MascotCard({ mascot, isSelected, onSelect }: MascotCardProps) {
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
    <button
      onClick={onSelect}
      className={`
        relative p-4 rounded-lg border-2 transition-all duration-300 transform
        ${isSelected 
          ? 'bg-[#D2691E] border-[#8B4513] scale-105 shadow-xl' 
          : 'bg-[#A0826D] border-[#6B5744] hover:scale-105 hover:shadow-lg'
        }
      `}
    >
      <div className="flex justify-center mb-3 transition-transform duration-300 hover:scale-110">
        {mascot.icon || (
          <span className="text-4xl">{getMascotIcon(mascot.id)}</span>
        )}
      </div>
      <h3 className="text-sm font-bold text-[#FFF8DC] mb-1 drop-shadow">
        {mascot.name}
      </h3>
      <p className="text-xs text-[#F5DEB3] mb-2">
        {mascot.personality}
      </p>
      <div className="flex flex-wrap gap-1 justify-center">
        {mascot.traits.map((trait) => (
          <span
            key={trait}
            className="text-xs bg-[#8B7355] text-[#FFF8DC] px-2 py-0.5 rounded-full border border-[#6B5744]"
          >
            {trait}
          </span>
        ))}
      </div>
      {isSelected && (
        <div className="absolute top-1 right-1 w-5 h-5 bg-[#228B22] rounded-full flex items-center justify-center border border-[#FFF8DC] shadow-lg">
          <span className="text-white text-xs">✓</span>
        </div>
      )}
    </button>
  );
}
