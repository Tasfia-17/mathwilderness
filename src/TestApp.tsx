import { useState } from 'react';

export default function TestApp() {
  const [screen, setScreen] = useState('welcome');

  if (screen === 'welcome') {
    return (
      <div style={{ padding: '50px', backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
        <h1 style={{ fontSize: '48px', color: 'black' }}>WELCOME SCREEN</h1>
        <button
          onClick={() => {
            console.log('Button clicked!');
            setScreen('character');
          }}
          style={{
            fontSize: '24px',
            padding: '20px 40px',
            backgroundColor: 'green',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            marginTop: '20px'
          }}
        >
          START JOURNEY
        </button>
      </div>
    );
  }

  if (screen === 'character') {
    return (
      <div style={{ padding: '50px', backgroundColor: '#e0e0ff', minHeight: '100vh' }}>
        <h1 style={{ fontSize: '48px', color: 'black' }}>CHARACTER SELECTION</h1>
        <button
          onClick={() => setScreen('welcome')}
          style={{
            fontSize: '24px',
            padding: '20px 40px',
            backgroundColor: 'red',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            marginTop: '20px'
          }}
        >
          GO BACK
        </button>
        <button
          onClick={() => setScreen('dashboard')}
          style={{
            fontSize: '24px',
            padding: '20px 40px',
            backgroundColor: 'blue',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            marginTop: '20px',
            marginLeft: '20px'
          }}
        >
          CONTINUE
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: '50px', backgroundColor: '#ffe0e0', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '48px', color: 'black' }}>DASHBOARD</h1>
      <button
        onClick={() => setScreen('welcome')}
        style={{
          fontSize: '24px',
          padding: '20px 40px',
          backgroundColor: 'orange',
          color: 'white',
          border: 'none',
          borderRadius: '10px',
          cursor: 'pointer',
          marginTop: '20px'
        }}
      >
        RESTART
      </button>
    </div>
  );
}
