import { useState, useEffect } from 'react';
import CampsiteParallaxSVG from './CampsiteParallaxSVG';
import LevelBadge from './LevelBadge';
import BottomNavigationDock from './BottomNavigationDock';
import BackButton from './BackButton';
import { NavigationCallback, MascotType } from '../types/navigation';

interface BaseCampDashboardProps {
  navigateTo: NavigationCallback;
  selectedMascot: MascotType;
  camperName: string;
  userRating: number;
  onBack: () => void;
}

export default function BaseCampDashboard({ navigateTo, selectedMascot, camperName, userRating, onBack }: BaseCampDashboardProps) {
  const [mousePos, setMousePos] = useState({ x: 600, y: 400 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const getRatingLabel = (rating: number) => {
    if (rating < 1000) return 'Beginner';
    if (rating < 1500) return 'Intermediate';
    if (rating < 2000) return 'Advanced';
    return 'Expert';
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <CampsiteParallaxSVG mouseX={mousePos.x} mouseY={mousePos.y} onMascotClick={() => {}} />
      
      <BackButton onClick={onBack} />
      
      <div className="absolute top-4 left-20 pointer-events-auto">
        <LevelBadge level={5} xp={750} maxXp={1000} streak={3} />
      </div>
      
      <div className="absolute top-4 right-4 pointer-events-auto bg-[#8B7355]/90 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-[#6B5744]">
        <div className="text-[#FFF8DC] text-sm font-semibold">
          Rating: {userRating}
        </div>
        <div className="text-[#F5DEB3] text-xs">
          {getRatingLabel(userRating)}
        </div>
      </div>
      
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
        <button
          onClick={() => navigateTo('learning-map')}
          className="bg-[#D2691E] hover:bg-[#CD853F] text-white text-lg font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-110 shadow-xl border-2 border-[#8B4513]"
        >
          Explore Forest Map
        </button>
      </div>
      
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 pointer-events-auto">
        <div className="bg-[#8B7355]/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-[#6B5744] text-center">
          <p className="text-[#FFF8DC] text-sm font-semibold">
            Welcome back, {camperName}!
          </p>
          <p className="text-[#F5DEB3] text-xs">
            Ready for today's adventure?
          </p>
        </div>
      </div>
      
      <BottomNavigationDock navigateTo={navigateTo} />
    </div>
  );
}
