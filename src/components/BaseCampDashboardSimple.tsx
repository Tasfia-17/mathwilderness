import type { ScreenName, MascotType } from '../types/navigation';

interface BaseCampDashboardProps {
  navigateTo: (screen: ScreenName) => void;
  selectedMascot: MascotType;
  camperName: string;
  userRating: number;
  onBack: () => void;
}

const mascotEmojis: Record<MascotType, string> = {
  squirrel: '🐿️',
  moose: '🦌',
  owl: '🦉',
  turtle: '🐢',
  bunny: '🐰'
};

export default function BaseCampDashboard({ navigateTo, selectedMascot, camperName, userRating }: BaseCampDashboardProps) {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #FFB6C1, #FFA07A)',
      padding: '40px 20px'
    }}>
      <div style={{
        backgroundColor: 'rgba(255, 140, 0, 0.95)',
        borderRadius: '24px',
        padding: '40px',
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: 'center',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
      }}>
        <div style={{ fontSize: '80px', marginBottom: '20px' }}>
          {mascotEmojis[selectedMascot]}
        </div>
        
        <h1 style={{
          fontSize: '48px',
          fontWeight: 'bold',
          color: 'white',
          marginBottom: '16px'
        }}>
          Welcome, {camperName}!
        </h1>
        
        <p style={{
          fontSize: '24px',
          color: '#FFF8DC',
          marginBottom: '32px'
        }}>
          Rating: {userRating} ⭐
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px',
          marginTop: '32px'
        }}>
          <button
            onClick={() => navigateTo('learning-map')}
            style={{
              backgroundColor: '#4169E1',
              color: 'white',
              fontSize: '20px',
              fontWeight: 'bold',
              padding: '20px',
              borderRadius: '16px',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            🗺️ Learning Map
          </button>
          
          <button
            onClick={() => navigateTo('profile')}
            style={{
              backgroundColor: '#32CD32',
              color: 'white',
              fontSize: '20px',
              fontWeight: 'bold',
              padding: '20px',
              borderRadius: '16px',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            👤 Profile
          </button>
          
          <button
            onClick={() => navigateTo('badges')}
            style={{
              backgroundColor: '#FFD700',
              color: '#333',
              fontSize: '20px',
              fontWeight: 'bold',
              padding: '20px',
              borderRadius: '16px',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            🏆 Badges
          </button>
          
          <button
            onClick={() => navigateTo('settings')}
            style={{
              backgroundColor: '#808080',
              color: 'white',
              fontSize: '20px',
              fontWeight: 'bold',
              padding: '20px',
              borderRadius: '16px',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            ⚙️ Settings
          </button>
        </div>
      </div>
    </div>
  );
}
