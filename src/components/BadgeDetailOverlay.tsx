interface Badge {
  id: string;
  name: string;
  category: string;
  description: string;
  earned: boolean;
}

interface BadgeDetailOverlayProps {
  badge: Badge;
  onClose: () => void;
}

export default function BadgeDetailOverlay({ badge, onClose }: BadgeDetailOverlayProps) {
  return (
    <>
      <div className="absolute inset-0 bg-black/50 z-40" onClick={onClose} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
        <div className="parchment-texture p-6 rounded-xl shadow-2xl max-w-md">
          <div className="text-center mb-4">
            <div className="text-5xl mb-3">{badge.earned ? '🏆' : '🔒'}</div>
            <h2 className="text-xl font-bold mb-2" style={{ color: 'oklch(0.35 0.06 50)' }}>
              {badge.name}
            </h2>
            <div className="text-xs font-semibold mb-3" style={{ color: 'oklch(0.55 0.08 50)' }}>
              {badge.category}
            </div>
            <p className="text-sm" style={{ color: 'oklch(0.45 0.06 50)' }}>
              {badge.description}
            </p>
          </div>
          
          <div className="text-center">
            {badge.earned ? (
              <div className="text-sm font-semibold" style={{ color: 'oklch(0.60 0.14 130)' }}>
                Earned!
              </div>
            ) : (
              <div className="text-sm font-semibold" style={{ color: 'oklch(0.55 0.08 50)' }}>
                Not yet earned
              </div>
            )}
          </div>
          
          <button
            onClick={onClose}
            className="w-full mt-4 bg-[#D2691E] hover:bg-[#CD853F] text-white text-sm font-bold py-2 px-4 rounded-lg transition-all hover:scale-105 border-2 border-[#8B4513]"
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
}
