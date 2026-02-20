import { useState } from 'react';
import ProfileBackgroundSVG from './ProfileBackgroundSVG';
import MascotCompanionPanel from './MascotCompanionPanel';
import BackButton from './BackButton';
import { NavigationCallback, MascotType } from '../types/navigation';

interface CamperProfileScreenProps {
  navigateTo: NavigationCallback;
  selectedMascot: MascotType;
  camperName: string;
  userRating: number;
  onBack: () => void;
}

export default function CamperProfileScreen({ navigateTo, selectedMascot, camperName, userRating, onBack }: CamperProfileScreenProps) {
  const [favoriteTopics, setFavoriteTopics] = useState<string[]>(['Algebra', 'Geometry']);
  const [preferences, setPreferences] = useState({
    hints: true,
    timer: false,
    sound: true,
  });

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <ProfileBackgroundSVG />
      
      <BackButton onClick={onBack} />
      
      <div className="absolute inset-0 flex flex-col items-center justify-start pt-16 pb-8 px-8 overflow-y-auto pointer-events-none">
        <div className="max-w-2xl w-full space-y-4 pointer-events-auto">
          <div className="bg-[#8B7355]/90 backdrop-blur-sm rounded-xl p-5 shadow-xl border-2 border-[#6B5744]">
            <h2 className="text-xl font-bold text-[#FFF8DC] mb-3 text-center drop-shadow-lg">
              Camper Profile
            </h2>
            <div className="text-center mb-3">
              <p className="text-base font-semibold text-[#FFF8DC]">{camperName}</p>
              <p className="text-sm text-[#F5DEB3]">Rating: {userRating}</p>
            </div>
            <MascotCompanionPanel mascotType={selectedMascot} />
          </div>
          
          <div className="bg-[#8B7355]/90 backdrop-blur-sm rounded-xl p-5 shadow-xl border-2 border-[#6B5744]">
            <h3 className="text-base font-semibold text-[#FFF8DC] mb-3">Favorite Topics</h3>
            <div className="flex flex-wrap gap-2">
              {['Algebra', 'Geometry', 'Calculus', 'Trigonometry'].map((topic) => (
                <button
                  key={topic}
                  onClick={() => {
                    setFavoriteTopics(prev =>
                      prev.includes(topic)
                        ? prev.filter(t => t !== topic)
                        : [...prev, topic]
                    );
                  }}
                  className={`px-3 py-1 rounded-full text-sm font-semibold transition-all ${
                    favoriteTopics.includes(topic)
                      ? 'bg-[#D2691E] text-[#FFF8DC] border-2 border-[#8B4513]'
                      : 'bg-[#A0826D] text-[#F5DEB3] border border-[#6B5744]'
                  }`}
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>
          
          <div className="bg-[#8B7355]/90 backdrop-blur-sm rounded-xl p-5 shadow-xl border-2 border-[#6B5744]">
            <h3 className="text-base font-semibold text-[#FFF8DC] mb-3">Learning Preferences</h3>
            <div className="space-y-2">
              {Object.entries(preferences).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between">
                  <span className="text-sm text-[#F5DEB3] capitalize">{key}</span>
                  <button
                    onClick={() => setPreferences({ ...preferences, [key]: !value })}
                    className={`w-12 h-6 rounded-full transition-all ${
                      value ? 'bg-[#D2691E]' : 'bg-[#6B5744]'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 bg-white rounded-full transition-transform ${
                        value ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
