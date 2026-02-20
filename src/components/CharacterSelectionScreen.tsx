import { useState } from 'react';
import CharacterLandscapeSVG from './CharacterLandscapeSVG';
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
    icon: <SquirrelMascot size={60} pose="excited" />
  },
  { 
    id: 'moose' as MascotType, 
    name: 'Steady Moose', 
    personality: 'Thoughtful and patient',
    icon: <MooseMascot size={60} pose="steady" />
  },
  { 
    id: 'owl' as MascotType, 
    name: 'Wise Owl', 
    personality: 'Analytical and wise',
    icon: <OwlMascot size={60} pose="analytical" />
  },
];

export default function CharacterSelectionScreen({ onNavigate, onMascotSelect, onBack }: CharacterSelectionScreenProps) {
  const [selectedMascot, setSelectedMascot] = useState<MascotType | null>(null);
  const [camperName, setCamperName] = useState('');

  const handleContinue = () => {
    if (selectedMascot && camperName.trim()) {
      onMascotSelect(selectedMascot, camperName);
      onNavigate('dashboard');
    }
  };

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh', overflow: 'auto' }}>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <CharacterLandscapeSVG />
      </div>
      
      <div style={{
        position: 'relative',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '40px 20px'
      }}>
        <button
          onClick={onBack}
          style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            backgroundColor: '#8B7355',
            color: '#FFF8DC',
            fontSize: '16px',
            fontWeight: 'bold',
            padding: '12px 20px',
            borderRadius: '12px',
            border: '2px solid #6B5744',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
          }}
        >
          ← Back
        </button>

        <div style={{
          backgroundColor: 'rgba(139, 115, 85, 0.95)',
          backdropFilter: 'blur(8px)',
          borderRadius: '24px',
          padding: '40px',
          maxWidth: '900px',
          width: '100%',
          boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
          border: '4px solid #6B5744'
        }}>
          <h2 style={{
            fontSize: '40px',
            fontWeight: 'bold',
            color: '#FFF8DC',
            marginBottom: '12px',
            textAlign: 'center',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}>
            Choose Your Trail Guide
          </h2>
          <p style={{
            fontSize: '16px',
            color: '#F5DEB3',
            marginBottom: '32px',
            textAlign: 'center'
          }}>
            Select a mascot to guide you through your mathematical journey
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '20px',
            marginBottom: '32px'
          }}>
            {mascots.map((mascot) => (
              <div
                key={mascot.id}
                onClick={() => setSelectedMascot(mascot.id)}
                style={{
                  padding: '24px',
                  borderRadius: '16px',
                  backgroundColor: selectedMascot === mascot.id ? '#F5DEB3' : 'rgba(245, 222, 179, 0.9)',
                  border: `4px solid ${selectedMascot === mascot.id ? '#D2691E' : '#8B7355'}`,
                  cursor: 'pointer',
                  textAlign: 'center',
                  transition: 'all 0.2s',
                  boxShadow: selectedMascot === mascot.id ? '0 8px 20px rgba(210, 105, 30, 0.4)' : '0 4px 12px rgba(0,0,0,0.2)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '12px' }}>
                  {mascot.icon}
                </div>
                <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#3E2723', marginBottom: '8px' }}>
                  {mascot.name}
                </h3>
                <p style={{ fontSize: '14px', color: '#5D4037' }}>
                  {mascot.personality}
                </p>
              </div>
            ))}
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label style={{
              display: 'block',
              fontSize: '20px',
              fontWeight: 'bold',
              color: '#FFF8DC',
              marginBottom: '12px',
              textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
            }}>
              What's your camper name?
            </label>
            <input
              type="text"
              value={camperName}
              onChange={(e) => setCamperName(e.target.value)}
              placeholder="Enter your name..."
              style={{
                width: '100%',
                fontSize: '18px',
                padding: '16px',
                borderRadius: '12px',
                border: '2px solid #8B4513',
                backgroundColor: '#F5DEB3',
                color: '#3E2723'
              }}
            />
          </div>

          <button
            onClick={handleContinue}
            disabled={!selectedMascot || !camperName.trim()}
            style={{
              width: '100%',
              backgroundColor: !selectedMascot || !camperName.trim() ? '#6B5744' : '#D2691E',
              color: 'white',
              fontSize: '22px',
              fontWeight: 'bold',
              padding: '18px',
              borderRadius: '12px',
              border: '2px solid #8B4513',
              cursor: !selectedMascot || !camperName.trim() ? 'not-allowed' : 'pointer',
              opacity: !selectedMascot || !camperName.trim() ? 0.6 : 1,
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
            }}
          >
            Begin Adventure
          </button>
        </div>
      </div>
    </div>
  );
}
