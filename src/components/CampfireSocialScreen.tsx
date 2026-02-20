import StarryNightCampsiteSVG from './StarryNightCampsiteSVG';
import BackButton from './BackButton';
import { NavigationCallback } from '../types/navigation';

interface CampfireSocialScreenProps {
  navigateTo: NavigationCallback;
  onBack: () => void;
}

const leaderboardData = [
  { rank: 1, name: 'MathWizard', rating: 1850, isUser: false },
  { rank: 2, name: 'AlgebraAce', rating: 1720, isUser: false },
  { rank: 3, name: 'You', rating: 1150, isUser: true },
  { rank: 4, name: 'GeometryGuru', rating: 1100, isUser: false },
  { rank: 5, name: 'CalculusKid', rating: 1050, isUser: false },
];

export default function CampfireSocialScreen({ navigateTo, onBack }: CampfireSocialScreenProps) {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <StarryNightCampsiteSVG />
      
      <BackButton onClick={onBack} />
      
      <div className="absolute inset-0 flex flex-col items-center justify-center p-8 pointer-events-none">
        <div className="bg-[#8B7355]/90 backdrop-blur-sm rounded-xl p-5 max-w-lg w-full shadow-xl border-2 border-[#6B5744] pointer-events-auto">
          <h2 className="text-2xl font-bold text-[#FFF8DC] mb-4 text-center drop-shadow-lg">
            🔥 Campfire Leaderboard
          </h2>
          
          <div className="space-y-2">
            {leaderboardData.map((entry) => (
              <div
                key={entry.rank}
                className={`flex items-center justify-between p-3 rounded-lg transition-all ${
                  entry.isUser
                    ? 'bg-[#D2691E] border-2 border-[#8B4513]'
                    : 'bg-[#A0826D] border border-[#6B5744]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg font-bold text-[#FFF8DC] w-8">
                    #{entry.rank}
                  </span>
                  <span className="text-sm font-semibold text-[#FFF8DC]">
                    {entry.name}
                  </span>
                </div>
                <span className="text-sm font-bold text-[#FFF8DC]">
                  {entry.rating}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
