import type { ScreenName } from '../types/navigation';

interface OnboardingWelcomeScreenProps {
  onNavigate: (screen: ScreenName) => void;
  onBack: () => void;
  canGoBack: boolean;
}

export default function OnboardingWelcomeScreen({ onNavigate }: OnboardingWelcomeScreenProps) {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #87CEEB, #98D8C8)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{
        backgroundColor: 'rgba(139, 69, 19, 0.95)',
        borderRadius: '24px',
        padding: '48px',
        maxWidth: '500px',
        width: '100%',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
        border: '4px solid #8B4513'
      }}>
        <h1 style={{
          fontSize: '48px',
          fontWeight: 'bold',
          color: 'white',
          marginBottom: '16px',
          textAlign: 'center'
        }}>
          Math Wilderness
        </h1>
        <p style={{
          fontSize: '20px',
          color: '#FFE4B5',
          marginBottom: '32px',
          textAlign: 'center'
        }}>
          Embark on an adventure through the forest of numbers!
        </p>
        <button
          onClick={() => onNavigate('character-selection')}
          style={{
            width: '100%',
            backgroundColor: '#228B22',
            color: 'white',
            fontSize: '24px',
            fontWeight: 'bold',
            padding: '20px',
            borderRadius: '16px',
            border: '4px solid #006400',
            cursor: 'pointer',
            marginBottom: '16px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
          }}
        >
          START JOURNEY
        </button>
        <button
          onClick={() => onNavigate('login')}
          style={{
            width: '100%',
            backgroundColor: '#4169E1',
            color: 'white',
            fontSize: '20px',
            fontWeight: 'bold',
            padding: '16px',
            borderRadius: '16px',
            border: '4px solid #00008B',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
          }}
        >
          I HAVE A BADGE
        </button>
      </div>
    </div>
  );
}
