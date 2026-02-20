interface LevelBadgeProps {
  level: number;
  xp: number;
  maxXp: number;
  streak: number;
}

export default function LevelBadge({ level, xp, maxXp, streak }: LevelBadgeProps) {
  const progress = (xp / maxXp) * 100;

  return (
    <div className="bg-[#8B7355]/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border-2 border-[#6B5744] min-w-[200px]">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[#FFF8DC] text-2xl font-bold">Level {level}</span>
        <div className="flex items-center gap-1 bg-[#D2691E] px-2 py-1 rounded-lg">
          <svg className="w-4 h-4 text-[#FF6347]" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
          </svg>
          <span className="text-[#FFF8DC] text-sm font-bold">{streak}</span>
        </div>
      </div>
      
      <div className="mb-2">
        <div className="flex justify-between text-[#F5DEB3] text-sm mb-1">
          <span>{xp} XP</span>
          <span>{maxXp} XP</span>
        </div>
        <div className="w-full bg-[#6B5744] rounded-full h-3 overflow-hidden border border-[#4A3C2E]">
          <div
            className="bg-gradient-to-r from-[#D2691E] to-[#FF8C00] h-full rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      
      <p className="text-[#F5DEB3] text-xs text-center">
        {maxXp - xp} XP to next level
      </p>
    </div>
  );
}
