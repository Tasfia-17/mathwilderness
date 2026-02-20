import CabinInteriorSVG from './CabinInteriorSVG';
import BackButton from './BackButton';
import { NavigationCallback } from '../types/navigation';

interface ProgressLodgeScreenProps {
  navigateTo: NavigationCallback;
  onBack: () => void;
}

export default function ProgressLodgeScreen({ navigateTo, onBack }: ProgressLodgeScreenProps) {
  const ratingHistory = [
    { date: 'Mon', rating: 1000 },
    { date: 'Tue', rating: 1050 },
    { date: 'Wed', rating: 1100 },
    { date: 'Thu', rating: 1080 },
    { date: 'Fri', rating: 1150 },
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <CabinInteriorSVG />
      
      <BackButton onClick={onBack} />
      
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-8 pointer-events-none">
        <div className="bg-[#8B7355]/90 backdrop-blur-sm rounded-xl p-5 max-w-2xl w-full shadow-xl border-2 border-[#6B5744] pointer-events-auto">
          <h2 className="text-2xl font-bold text-[#FFF8DC] mb-4 text-center drop-shadow-lg">
            Your Progress Lodge
          </h2>
          
          <div className="bg-[#F5DEB3] rounded-lg p-4 mb-4">
            <h3 className="text-lg font-semibold text-[#3E2723] mb-3">Rating History</h3>
            <div className="flex items-end justify-between h-32 gap-2">
              {ratingHistory.map((day, index) => {
                const height = ((day.rating - 950) / 250) * 100;
                return (
                  <div key={index} className="flex-1 flex flex-col items-center gap-1">
                    <div className="w-full bg-[#D2691E] rounded-t" style={{ height: `${height}%` }} />
                    <span className="text-xs text-[#5D4037]">{day.date}</span>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-[#F5DEB3] rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-[#D2691E]">15</div>
              <div className="text-sm text-[#5D4037]">Problems Solved</div>
            </div>
            <div className="bg-[#F5DEB3] rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-[#D2691E]">5</div>
              <div className="text-sm text-[#5D4037]">Day Streak</div>
            </div>
            <div className="bg-[#F5DEB3] rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-[#D2691E]">85%</div>
              <div className="text-sm text-[#5D4037]">Accuracy</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
