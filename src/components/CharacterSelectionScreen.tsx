import { useState } from 'react';
import type { ScreenName, MascotType } from '../types/navigation';

interface CharacterSelectionScreenProps {
  onNavigate: (screen: ScreenName) => void;
  onMascotSelect: (mascot: MascotType, name: string) => void;
  onBack: () => void;
}

const mascots = [
  { id: 'squirrel' as MascotType, name: 'Swift Squirrel', emoji: '🐿️' },
  { id: 'moose' as MascotType, name: 'Steady Moose', emoji: '🦌' },
  { id: 'owl' as MascotType, name: 'Wise Owl', emoji: '🦉' },
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
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #90EE90, #98D8C8)',
      padding: '40px 20px'
    }}>
      <button
        onClick={onBack}
        style={{
          backgroundColor: '#DC143C',
          color: 'white',
          fontSize: '18px',
          fontWeight: 'bold',
          padding: '12px 24px',
          borderRadius: '12px',
          border: 'none',
          cursor: 'pointer',
          marginBottom: '20px'
        }}
      >
        ← BACK
      </button>

      <div style={{
        backgroundColor: 'rgba(128, 0, 128, 0.95)',
        borderRadius: '24px',
        padding: '40px',
        maxWidth: '900px',
        margin: '0 auto',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
      }}>
        <h2 style={{
          fontSize: '40px',
          fontWeight: 'bold',
          color: 'white',
          marginBottom: '16px',
          textAlign: 'center'
        }}>
          Choose Your Trail Guide
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
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
                backgroundColor: selectedMascot === mascot.id ? '#FFD700' : 'white',
                border: `4px solid ${selectedMascot === mascot.id ? '#FFA500' : '#ccc'}`,
                cursor: 'pointer',
                textAlign: 'center'
              }}
            >
              <div style={{ fontSize: '64px', marginBottom: '12px' }}>{mascot.emoji}</div>
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#333' }}>{mascot.name}</h3>
            </div>
          ))}
        </div>

        <div style={{ marginBottom: '24px' }}>
          <label style={{
            display: 'block',
            fontSize: '24px',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '12px'
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
              fontSize: '20px',
              padding: '16px',
              borderRadius: '12px',
              border: '4px solid #800080'
            }}
          />
        </div>

        <button
          onClick={handleContinue}
          disabled={!selectedMascot || !camperName.trim()}
          style={{
            width: '100%',
            backgroundColor: !selectedMascot || !camperName.trim() ? '#666' : '#228B22',
            color: 'white',
            fontSize: '24px',
            fontWeight: 'bold',
            padding: '20px',
            borderRadius: '16px',
            border: 'none',
            cursor: !selectedMascot || !camperName.trim() ? 'not-allowed' : 'pointer',
            opacity: !selectedMascot || !camperName.trim() ? 0.5 : 1
          }}
        >
          BEGIN ADVENTURE
        </button>
      </div>
    </div>
  );
}
