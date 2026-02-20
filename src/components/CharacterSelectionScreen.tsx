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
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-green-200 to-green-100">
      <div className="absolute inset-0 z-0">
        <CharacterLandscapeSVG />
      </div>
      
      <div className="absolute top-4 left-4 z-20">
        <BackButton onClick={onBack} show={true} />
      </div>
      
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-4 overflow-y-auto">
        <div className="bg-amber-900/95 backdrop-blur-sm rounded-2xl p-6 max-w-3xl w-full shadow-2xl border-4 border-amber-800">
          <h2 className="text-3xl font-bold text-amber-50 mb-3 text-center drop-shadow-lg">
            Choose Your Trail Guide
          </h2>
          <p className="text-base text-amber-100 mb-6 text-center">
            Select a mascot to guide you through your mathematical journey
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {mascots.map((mascot) => (
              <MascotCard
                key={mascot.id}
                mascot={mascot}
                isSelected={selectedMascot === mascot.id}
                onSelect={() => setSelectedMascot(mascot.id)}
              />
            ))}
          </div>
          
          <div className="mb-6">
            <label className="block text-lg font-semibold text-amber-50 mb-2 drop-shadow">
              What's your camper name?
            </label>
            <input
              type="text"
              value={camperName}
              onChange={(e) => setCamperName(e.target.value)}
              placeholder="Enter your name..."
              className="w-full bg-amber-50 text-amber-900 text-base px-4 py-3 rounded-xl border-2 border-amber-700 focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-amber-600 shadow-inner"
            />
          </div>
          
          <button
            onClick={handleContinue}
            disabled={!selectedMascot || !camperName.trim()}
            className="w-full bg-orange-600 hover:bg-orange-500 disabled:bg-gray-600 disabled:cursor-not-allowed text-white text-lg font-bold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 disabled:hover:scale-100 shadow-lg border-2 border-orange-800"
          >
            Begin Adventure
          </button>
        </div>
      </div>
    </div>
  );
}
