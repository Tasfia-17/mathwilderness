import { useState } from 'react';
import TrophyRoomSVG from './TrophyRoomSVG';
import BadgeGrid from './BadgeGrid';
import BadgeDetailOverlay from './BadgeDetailOverlay';
import BackButton from './BackButton';
import { NavigationCallback } from '../types/navigation';

interface AchievementCollectionScreenProps {
  navigateTo: NavigationCallback;
  onBack: () => void;
}

interface Badge {
  id: string;
  name: string;
  category: string;
  description: string;
  earned: boolean;
}

const sampleBadges: Badge[] = [
  { id: '1', name: 'First Steps', category: 'Beginner', description: 'Complete your first problem', earned: true },
  { id: '2', name: 'Quick Learner', category: 'Beginner', description: 'Solve 5 problems', earned: true },
  { id: '3', name: 'Algebra Ace', category: 'Subject', description: 'Master algebra basics', earned: true },
  { id: '4', name: 'Geometry Guru', category: 'Subject', description: 'Complete geometry trail', earned: false },
  { id: '5', name: 'Speed Demon', category: 'Challenge', description: 'Solve 10 problems in one session', earned: false },
  { id: '6', name: 'Perfectionist', category: 'Challenge', description: 'Get 100% accuracy on 5 sessions', earned: false },
];

export default function AchievementCollectionScreen({ navigateTo, onBack }: AchievementCollectionScreenProps) {
  const [selectedBadge, setSelectedBadge] = useState<Badge | null>(null);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <TrophyRoomSVG />
      
      <BackButton onClick={onBack} />
      
      <div className="absolute inset-0 flex flex-col items-center justify-start pt-16 pb-8 px-8 overflow-y-auto pointer-events-none">
        <div className="max-w-4xl w-full pointer-events-auto">
          <div className="bg-[#8B7355]/90 backdrop-blur-sm rounded-xl p-5 mb-4 shadow-xl border-2 border-[#6B5744]">
            <h2 className="text-xl font-bold text-[#FFF8DC] text-center drop-shadow-lg">
              🏆 Badge Collection
            </h2>
          </div>
          
          <BadgeGrid badges={sampleBadges} onBadgeClick={setSelectedBadge} />
        </div>
      </div>
      
      {selectedBadge && (
        <BadgeDetailOverlay
          badge={selectedBadge}
          onClose={() => setSelectedBadge(null)}
        />
      )}
    </div>
  );
}
