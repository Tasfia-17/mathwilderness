interface Badge {
  id: string;
  name: string;
  category: string;
  description: string;
  earned: boolean;
}

interface BadgeGridProps {
  badges: Badge[];
  onBadgeClick: (badge: Badge) => void;
}

export default function BadgeGrid({ badges, onBadgeClick }: BadgeGridProps) {
  const categories = Array.from(new Set(badges.map(b => b.category)));

  return (
    <div className="space-y-4">
      {categories.map(category => (
        <div key={category} className="parchment-texture p-4 rounded-xl shadow-lg">
          <h3 className="text-base font-bold mb-3" style={{ color: 'oklch(0.35 0.06 50)' }}>
            {category}
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {badges
              .filter(b => b.category === category)
              .map(badge => (
                <button
                  key={badge.id}
                  onClick={() => onBadgeClick(badge)}
                  className={`p-3 rounded-lg transition-all hover:scale-105 ${
                    badge.earned
                      ? 'bg-[#D2691E]/20 border-2 border-[#D2691E]'
                      : 'bg-[#8B7355]/10 border border-[#6B5744] opacity-50'
                  }`}
                >
                  <div className="text-2xl mb-1">{badge.earned ? '🏆' : '🔒'}</div>
                  <div className="text-xs font-semibold" style={{ color: 'oklch(0.35 0.06 50)' }}>
                    {badge.name}
                  </div>
                </button>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
