import CabinInteriorSVG from './CabinInteriorSVG';
import BackButton from './BackButton';
import type { ScreenName } from '../types/navigation';

interface LoginScreenProps {
  onNavigate: (screen: ScreenName) => void;
  onBack: () => void;
}

export default function LoginScreen({ onNavigate, onBack }: LoginScreenProps) {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <CabinInteriorSVG />
      
      <BackButton onClick={onBack} />
      
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <div className="pointer-events-auto bg-[#8B7355]/90 backdrop-blur-sm rounded-xl p-6 max-w-md mx-4 shadow-xl border-2 border-[#6B5744]">
          <h2 className="text-2xl font-bold text-[#FFF8DC] mb-3 text-center drop-shadow-lg">
            Connect Your Badge
          </h2>
          <p className="text-sm text-[#F5DEB3] mb-5 text-center">
            Sign in with your existing camper badge to continue your journey
          </p>
          
          <button
            onClick={() => onNavigate('dashboard')}
            className="w-full bg-[#D2691E] hover:bg-[#CD853F] text-white text-base font-bold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-[#8B4513] mb-3"
          >
            Connect Badge
          </button>
          
          <button
            onClick={() => onNavigate('onboarding-welcome')}
            className="w-full bg-[#8B7355] hover:bg-[#A0826D] text-white text-sm font-semibold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-[#6B5744]"
          >
            Back to Welcome
          </button>
        </div>
      </div>
    </div>
  );
}
