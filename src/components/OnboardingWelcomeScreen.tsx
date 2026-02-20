import TreehouseSceneSVG from './TreehouseSceneSVG';
import type { ScreenName } from '../types/navigation';

interface OnboardingWelcomeScreenProps {
  onNavigate: (screen: ScreenName) => void;
  onBack: () => void;
  canGoBack: boolean;
}

export default function OnboardingWelcomeScreen({ onNavigate }: OnboardingWelcomeScreenProps) {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <TreehouseSceneSVG />
      </div>
      
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 10,
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingBottom: '100px',
        pointerEvents: 'none'
      }}>
        <div style={{
          pointerEvents: 'auto',
          backgroundColor: 'rgba(139, 115, 85, 0.95)',
          backdropFilter: 'blur(8px)',
          borderRadius: '24px',
          padding: '40px',
          maxWidth: '500px',
          margin: '0 20px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
          border: '4px solid #6B5744'
        }}>
          <h1 style={{
            fontSize: '48px',
            fontWeight: 'bold',
            color: '#FFF8DC',
            marginBottom: '16px',
            textAlign: 'center',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}>
            Math Wilderness
          </h1>
          <p style={{
            fontSize: '18px',
            color: '#F5DEB3',
            marginBottom: '32px',
            textAlign: 'center',
            lineHeight: '1.6'
          }}>
            Embark on an adventure through the forest of numbers!
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <button
              onClick={() => onNavigate('character-selection')}
              style={{
                width: '100%',
                backgroundColor: '#D2691E',
                color: 'white',
                fontSize: '20px',
                fontWeight: 'bold',
                padding: '16px 24px',
                borderRadius: '12px',
                border: '2px solid #8B4513',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                transition: 'all 0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#CD853F'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#D2691E'}
            >
              Start Your Journey
            </button>
            <button
              onClick={() => onNavigate('login')}
              style={{
                width: '100%',
                backgroundColor: '#8B7355',
                color: 'white',
                fontSize: '16px',
                fontWeight: '600',
                padding: '14px 24px',
                borderRadius: '12px',
                border: '2px solid #6B5744',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                transition: 'all 0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#A0826D'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#8B7355'}
            >
              I Have a Badge
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
