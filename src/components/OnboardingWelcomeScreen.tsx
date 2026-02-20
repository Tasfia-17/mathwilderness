import TreehouseSceneSVG from './TreehouseSceneSVG';
import BackButton from './BackButton';
import type { ScreenName } from '../types/navigation';

interface OnboardingWelcomeScreenProps {
  onNavigate: (screen: ScreenName) => void;
  onBack: () => void;
  canGoBack: boolean;
}

export default function OnboardingWelcomeScreen({ onNavigate, onBack, canGoBack }: OnboardingWelcomeScreenProps) {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <TreehouseSceneSVG />
      
      <BackButton onClick={onBack} show={canGoBack} />
      
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-24 pointer-events-none">
        <div className="pointer-events-auto bg-[#8B7355]/75 backdrop-blur-sm rounded-xl p-5 max-w-sm mx-4 shadow-xl border-2 border-[#6B5744]">
          <h1 className="text-2xl font-bold text-[#FFF8DC] mb-2 text-center drop-shadow-lg">
            Math Wilderness
          </h1>
          <p className="text-sm text-[#F5DEB3] mb-4 text-center leading-relaxed">
            Embark on an adventure through the forest of numbers!
          </p>
          <div className="flex flex-col gap-2">
            <button
              onClick={() => onNavigate('character-selection')}
              className="bg-[#D2691E] hover:bg-[#CD853F] text-white text-sm font-bold py-2 px-5 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-[#8B4513]"
            >
              Start Your Journey
            </button>
            <button
              onClick={() => onNavigate('login')}
              className="bg-[#8B7355] hover:bg-[#A0826D] text-white text-xs font-semibold py-2 px-5 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-[#6B5744]"
            >
              I Have a Badge
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
