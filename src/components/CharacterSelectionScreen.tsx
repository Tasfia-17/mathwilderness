import { useState } from 'react';
import CharacterLandscapeSVG from './CharacterLandscapeSVG';
import MascotCard from './MascotCard';
import BackButton from './BackButton';
import SquirrelMascot from './mascots/SquirrelMascot';
import MooseMascot from './mascots/MooseMascot';
import OwlMascot from './mascots/OwlMascot';
import type { ScreenName, MascotType } from '../types/navigation';

interface CharacterSelectionScreenProps {
  onNavigate: (screen: ScreenName) => void;
  onMascotSelect: (mascot: MascotType, name: string) => void;
  onBack: () => void;
}

const mascots = [
  { 
    id: 'squirrel' as MascotType, 
    name: 'Swift Squirrel', 
    personality: 'Energetic and quick', 
    traits: ['Fast', 'Eager', 'Adaptive'],
    icon: <SquirrelMascot size={60} pose="excited" />
  },
  { 
    id: 'moose' as MascotType, 
    name: 'Steady Moose', 
    personality: 'Thoughtful and patient', 
    traits: ['Methodical', 'Calm', 'Reliable'],
    icon: <MooseMascot size={60} pose="steady" />
  },
  { 
    id: 'owl' as MascotType, 
    name: 'Wise Owl', 
    personality: 'Analytical and wise', 
    traits: ['Insightful', 'Focused', 'Strategic'],
    icon: <OwlMascot size={60} pose="analytical" />
  },
];

export default function CharacterSelectionScreen({ onNavigate, onMascotSelect, onBack }: CharacterSelectionScreenProps) {
  const [selectedMascot, setSelectedMascot] = useState<MascotType | null>(null);
  const [camperName, setCamperName] = useState<string>('');

  const handleContinue = () => {
    if (selectedMascot && camperName.trim()) {
      onMascotSelect(selectedMascot, camperName);
      onNavigate('diagnostic-assessment');
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <CharacterLandscapeSVG />
      
      <BackButton onClick={onBack} />
      
      <div className="absolute inset-0 flex flex-col items-center justify-center p-8 pointer-events-none overflow-y-auto">
        <div className="pointer-events-auto bg-[#8B7355]/90 backdrop-blur-sm rounded-xl p-5 max-w-3xl w-full shadow-xl border-2 border-[#6B5744]">
          <h2 className="text-2xl font-bold text-[#FFF8DC] mb-2 text-center drop-shadow-lg">
            Choose Your Trail Guide
          </h2>
          <p className="text-sm text-[#F5DEB3] mb-4 text-center">
            Select a mascot to guide you through your mathematical journey
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
            {mascots.map((mascot) => (
              <MascotCard
                key={mascot.id}
                mascot={mascot}
                isSelected={selectedMascot === mascot.id}
                onSelect={() => setSelectedMascot(mascot.id)}
              />
            ))}
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-semibold text-[#FFF8DC] mb-2 drop-shadow">
              What's your camper name?
            </label>
            <input
              type="text"
              value={camperName}
              onChange={(e) => setCamperName(e.target.value)}
              placeholder="Enter your name..."
              className="w-full bg-[#F5DEB3] text-[#3E2723] text-sm px-4 py-2 rounded-lg border-2 border-[#8B4513] focus:outline-none focus:ring-2 focus:ring-[#D2691E] placeholder-[#8B7355] shadow-inner"
            />
          </div>
          
          <button
            onClick={handleContinue}
            disabled={!selectedMascot || !camperName.trim()}
            className="w-full bg-[#D2691E] hover:bg-[#CD853F] disabled:bg-[#6B5744] disabled:cursor-not-allowed text-white text-base font-bold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100 shadow-lg border-2 border-[#8B4513]"
          >
            Begin Adventure
          </button>
        </div>
      </div>
    </div>
  );
}
