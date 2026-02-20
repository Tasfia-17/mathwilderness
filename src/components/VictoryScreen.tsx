import MountainSummitSVG from './MountainSummitSVG';
import StatsCard from './StatsCard';
import BackButton from './BackButton';
import { NavigationCallback, MascotType } from '../types/navigation';

interface VictoryScreenProps {
  navigateTo: NavigationCallback;
  selectedMascot: MascotType;
  onBack: () => void;
}

export default function VictoryScreen({ navigateTo, selectedMascot, onBack }: VictoryScreenProps) {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <MountainSummitSVG />
      
      <BackButton onClick={onBack} />
      
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-8 pointer-events-none">
        <h1 className="text-4xl font-bold text-[#FFF8DC] drop-shadow-2xl pointer-events-auto">
          🎉 Victory! 🎉
        </h1>
        
        <div className="grid grid-cols-3 gap-4 pointer-events-auto">
          <StatsCard label="Problems Solved" value="3" change={3} />
          <StatsCard label="XP Earned" value="150" change={150} />
          <StatsCard label="Accuracy" value="100%" change={5} />
        </div>
        
        <button
          onClick={() => navigateTo('dashboard')}
          className="bg-[#D2691E] hover:bg-[#CD853F] text-white text-base font-bold px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl border-2 border-[#8B4513] pointer-events-auto"
        >
          Return to Base Camp
        </button>
      </div>
    </div>
  );
}
