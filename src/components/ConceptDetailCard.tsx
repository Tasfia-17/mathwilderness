interface ConceptDetailCardProps {
  concept: {
    name: string;
    difficulty: number;
    progress: number;
  };
  onClose: () => void;
  onEnter: () => void;
}

export default function ConceptDetailCard({ concept, onClose, onEnter }: ConceptDetailCardProps) {
  return (
    <>
      <div className="absolute inset-0 bg-black/50 z-20" onClick={onClose} />
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-30 animate-[slideUp_0.3s_ease-out]">
        <div className="parchment-texture p-5 rounded-t-xl shadow-xl" style={{ width: '400px' }}>
          <h2 className="text-xl font-bold mb-3" style={{ color: 'oklch(0.35 0.06 50)' }}>
            {concept.name}
          </h2>
          
          <div className="flex gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-6 h-6"
                style={{
                  background: i < concept.difficulty ? 'oklch(0.65 0.15 35)' : 'oklch(0.85 0.02 70)',
                  clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)',
                }}
              />
            ))}
          </div>
          
          <div className="mb-4">
            <div className="text-xs mb-1" style={{ color: 'oklch(0.45 0.06 50)' }}>
              Progress: {concept.progress}% explored
            </div>
            <div className="w-full h-3 rounded-full" style={{ background: 'oklch(0.85 0.02 70)' }}>
              <div
                className="h-full rounded-full transition-all"
                style={{ width: `${concept.progress}%`, background: 'oklch(0.65 0.15 35)' }}
              />
            </div>
          </div>
          
          <button
            onClick={onEnter}
            className="wood-grain-texture w-full px-4 py-2 rounded-lg text-sm font-bold text-white shadow-lg transition-all hover:scale-105"
            style={{ background: 'linear-gradient(135deg, oklch(0.65 0.15 35) 0%, oklch(0.55 0.18 35) 100%)' }}
          >
            Enter Campsite
          </button>
        </div>
      </div>
    </>
  );
}
