import { useEffect, useRef } from 'react';

export default function ForestAudio() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Attempt to play audio on mount, handling browser autoplay policies
    const playAudio = async () => {
      if (audioRef.current) {
        try {
          await audioRef.current.play();
        } catch (error) {
          console.log('Autoplay prevented by browser:', error);
          // If autoplay is blocked, we could add a user interaction trigger here
          // For now, we'll just log it
        }
      }
    };

    playAudio();
  }, []);

  return (
    <audio
      ref={audioRef}
      loop
      autoPlay
      style={{ display: 'none' }}
    >
      <source src="/assets/forest-ambience.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
}
