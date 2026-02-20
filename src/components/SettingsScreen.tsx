import { useState } from 'react';
import SettingsBackgroundSVG from './SettingsBackgroundSVG';
import BackButton from './BackButton';
import { NavigationCallback } from '../types/navigation';

interface SettingsScreenProps {
  navigateTo: NavigationCallback;
  onBack: () => void;
}

export default function SettingsScreen({ navigateTo, onBack }: SettingsScreenProps) {
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('medium');
  const [notifications, setNotifications] = useState({
    daily: true,
    achievements: true,
    social: false,
  });

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <SettingsBackgroundSVG />
      
      <BackButton onClick={onBack} />
      
      <div className="absolute inset-0 flex flex-col items-center justify-start pt-16 pb-8 px-8 overflow-y-auto pointer-events-none">
        <div className="max-w-2xl w-full space-y-4 pointer-events-auto">
          <div className="bg-[#8B7355]/90 backdrop-blur-sm rounded-xl p-5 shadow-xl border-2 border-[#6B5744]">
            <h2 className="text-xl font-bold text-[#FFF8DC] mb-4 text-center drop-shadow-lg">
              ⚙️ Settings
            </h2>
          </div>
          
          <div className="bg-[#8B7355]/90 backdrop-blur-sm rounded-xl p-5 shadow-xl border-2 border-[#6B5744]">
            <h3 className="text-base font-semibold text-[#FFF8DC] mb-3">Difficulty Preference</h3>
            <div className="flex gap-2">
              {(['easy', 'medium', 'hard'] as const).map((level) => (
                <button
                  key={level}
                  onClick={() => setDifficulty(level)}
                  className={`flex-1 py-2 px-4 rounded-lg text-sm font-semibold transition-all ${
                    difficulty === level
                      ? 'bg-[#D2691E] text-[#FFF8DC] border-2 border-[#8B4513]'
                      : 'bg-[#A0826D] text-[#F5DEB3] border border-[#6B5744]'
                  }`}
                >
                  {level.charAt(0).toUpperCase() + level.slice(1)}
                </button>
              ))}
            </div>
          </div>
          
          <div className="bg-[#8B7355]/90 backdrop-blur-sm rounded-xl p-5 shadow-xl border-2 border-[#6B5744]">
            <h3 className="text-base font-semibold text-[#FFF8DC] mb-3">Notifications</h3>
            <div className="space-y-2">
              {Object.entries(notifications).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between">
                  <span className="text-sm text-[#F5DEB3] capitalize">
                    {key === 'daily' ? 'Daily Reminders' : key === 'achievements' ? 'Achievement Alerts' : 'Social Updates'}
                  </span>
                  <button
                    onClick={() => setNotifications({ ...notifications, [key]: !value })}
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
