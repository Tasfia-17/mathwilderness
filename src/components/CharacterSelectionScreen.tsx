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
    <div className="w-full h-screen bg-green-300 flex items-center justify-center overflow-y-auto">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <CharacterLandscapeSVG />
      </div>
      
      {/* Content */}
      <div className="relative z-50 bg-purple-800 rounded-3xl p-8 max-w-4xl w-full mx-4 my-8">
        <button
          onClick={onBack}
          className="mb-4 bg-red-600 text-white px-6 py-3 rounded-xl font-bold"
        >
          ← BACK
        </button>
        
        <h2 className="text-4xl font-bold text-white mb-4 text-center">
          Choose Your Trail Guide
        </h2>
        <p className="text-xl text-purple-100 mb-6 text-center">
          Select a mascot to guide you
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {mascots.map((mascot) => (
            <div
              key={mascot.id}
              onClick={() => setSelectedMascot(mascot.id)}
              className={`p-6 rounded-2xl cursor-pointer border-4 transition ${
                selectedMascot === mascot.id
                  ? 'bg-yellow-400 border-yellow-600'
                  : 'bg-white border-gray-300 hover:border-yellow-400'
              }`}
            >
              <div className="flex justify-center mb-3">{mascot.icon}</div>
              <h3 className="text-xl font-bold text-center mb-2">{mascot.name}</h3>
              <p className="text-sm text-center text-gray-700">{mascot.personality}</p>
            </div>
          ))}
        </div>
        
        <div className="mb-6">
          <label className="block text-2xl font-bold text-white mb-3">
            What's your camper name?
          </label>
          <input
            type="text"
            value={camperName}
            onChange={(e) => setCamperName(e.target.value)}
            placeholder="Enter your name..."
            className="w-full text-xl px-6 py-4 rounded-xl border-4 border-purple-600 focus:outline-none focus:border-yellow-400"
          />
        </div>
        
        <button
          onClick={handleContinue}
          disabled={!selectedMascot || !camperName.trim()}
          className="w-full bg-green-600 hover:bg-green-500 disabled:bg-gray-500 text-white text-2xl font-bold py-4 rounded-2xl border-4 border-green-800 disabled:cursor-not-allowed cursor-pointer"
        >
          BEGIN ADVENTURE
        </button>
      </div>
    </div>
  );
}
