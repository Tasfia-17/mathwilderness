import { useState } from 'react';
import { MascotType } from '../types/navigation';
import SquirrelMascot from './mascots/SquirrelMascot';
import MooseMascot from './mascots/MooseMascot';
import OwlMascot from './mascots/OwlMascot';

interface MascotHintPanelProps {
  mascotType: MascotType;
}

export default function MascotHintPanel({ mascotType }: MascotHintPanelProps) {
  const [showHint, setShowHint] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <div className="parchment-texture p-4 rounded-2xl shadow-xl">
        {mascotType === 'squirrel' && <SquirrelMascot pose="excited" size={80} />}
        {mascotType === 'moose' && <MooseMascot pose="steady" size={80} />}
        {mascotType === 'owl' && <OwlMascot pose="analytical" size={80} />}
      </div>
      
      <button
        onClick={() => setShowHint(!showHint)}
        className="wood-grain-texture px-6 py-3 rounded-xl text-white font-semibold shadow-lg transition-all hover:scale-105"
        style={{ background: 'oklch(0.65 0.06 50)' }}
      >
        💡 Need a hint?
      </button>
      
      {showHint && (
        <div className="parchment-texture p-4 rounded-xl shadow-lg max-w-xs">
          <p style={{ color: 'oklch(0.35 0.06 50)' }}>
            Try breaking the problem into smaller steps!
          </p>
        </div>
      )}
    </div>
  );
}
