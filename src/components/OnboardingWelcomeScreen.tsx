import TreehouseSceneSVG from './TreehouseSceneSVG';
import BackButton from './BackButton';
import type { ScreenName } from '../types/navigation';

interface OnboardingWelcomeScreenProps {
  onNavigate: (screen: ScreenName) => void;
  onBack: () => void;
  canGoBack: boolean;
}

export default function OnboardingWelcomeScreen({ onNavigate, onBack, canGoBack }: OnboardingWelcomeScreenProps) {
  const handleStartJourney = () => {
    console.log('Start Journey clicked');
    onNavigate('character-selection');
  };

  const handleLogin = () => {
    console.log('Login clicked');
    onNavigate('login');
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-sky-200 to-sky-100">
      <div className="absolute inset-0 z-0">
        <TreehouseSceneSVG />
      </div>
      
      {canGoBack && (
        <div className="absolute top-4 left-4 z-20">
          <BackButton onClick={onBack} show={canGoBack} />
        </div>
      )}
      
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-end pb-24">
        <div className="bg-amber-900/90 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-4 shadow-2xl border-4 border-amber-800">
          <h1 className="text-4xl font-bold text-amber-50 mb-3 text-center drop-shadow-lg">
            Math Wilderness
          </h1>
          <p className="text-base text-amber-100 mb-6 text-center leading-relaxed">
            Embark on an adventure through the forest of numbers!
          </p>
          <div className="flex flex-col gap-3">
            <button
              onClick={handleStartJourney}
              className="bg-orange-600 hover:bg-orange-500 text-white text-lg font-bold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg border-2 border-orange-800 cursor-pointer"
            >
              Start Your Journey
            </button>
            <button
              onClick={handleLogin}
              className="bg-amber-700 hover:bg-amber-600 text-white text-base font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg border-2 border-amber-900 cursor-pointer"
            >
              I Have a Badge
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
