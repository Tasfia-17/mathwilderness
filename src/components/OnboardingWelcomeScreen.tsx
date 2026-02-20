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
    <div className="w-full h-screen bg-sky-300 flex items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <TreehouseSceneSVG />
      </div>
      
      {/* Content - Always on top */}
      <div className="relative z-50 bg-orange-800 rounded-3xl p-10 max-w-lg mx-4 shadow-2xl">
        <h1 className="text-5xl font-bold text-white mb-4 text-center">
          Math Wilderness
        </h1>
        <p className="text-xl text-orange-100 mb-8 text-center">
          Embark on an adventure through the forest of numbers!
        </p>
        <div className="flex flex-col gap-4">
          <button
            onClick={() => {
              console.log('Button clicked!');
              onNavigate('character-selection');
            }}
            className="w-full bg-green-600 hover:bg-green-500 text-white text-2xl font-bold py-4 px-8 rounded-2xl shadow-xl border-4 border-green-800 cursor-pointer active:scale-95 transition"
          >
            START JOURNEY
          </button>
          <button
            onClick={() => onNavigate('login')}
            className="w-full bg-blue-600 hover:bg-blue-500 text-white text-xl font-bold py-4 px-8 rounded-2xl shadow-xl border-4 border-blue-800 cursor-pointer active:scale-95 transition"
          >
            I HAVE A BADGE
          </button>
        </div>
      </div>
    </div>
  );
}
