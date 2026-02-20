import { useState } from 'react';
import ForestAudio from './components/ForestAudio';
import OnboardingWelcomeScreen from './components/OnboardingWelcomeScreen';
import CharacterSelectionScreen from './components/CharacterSelectionScreen';
import LoginScreen from './components/LoginScreen';
import TutorialGuideScreen from './components/TutorialGuideScreen';
import BaseCampDashboard from './components/BaseCampDashboard';
import LearningMapScreen from './components/LearningMapScreen';
import ConceptIntroductionScreen from './components/ConceptIntroductionScreen';
import PracticeSessionScreen from './components/PracticeSessionScreen';
import VictoryScreen from './components/VictoryScreen';
import DiagnosticAssessmentScreen from './components/DiagnosticAssessmentScreen';
import CamperProfileScreen from './components/CamperProfileScreen';
import AchievementCollectionScreen from './components/AchievementCollectionScreen';
import ProgressLodgeScreen from './components/ProgressLodgeScreen';
import CampfireSocialScreen from './components/CampfireSocialScreen';
import SettingsScreen from './components/SettingsScreen';
import type { ScreenName, MascotType } from './types/navigation';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenName>('onboarding-welcome');
  const [navigationHistory, setNavigationHistory] = useState<ScreenName[]>([]);
  const [selectedMascot, setSelectedMascot] = useState<MascotType>('squirrel');
  const [camperName, setCamperName] = useState<string>('');
  const [selectedConcept, setSelectedConcept] = useState<string>('');
  const [userRating, setUserRating] = useState<number>(1000);

  console.log('App rendered, currentScreen:', currentScreen);

  const handleNavigate = (screen: ScreenName) => {
    console.log('Navigating from', currentScreen, 'to', screen);
    setNavigationHistory([...navigationHistory, currentScreen]);
    setCurrentScreen(screen);
  };

  const handleBack = () => {
    if (navigationHistory.length > 0) {
      const previousScreen = navigationHistory[navigationHistory.length - 1];
      console.log('Going back to', previousScreen);
      setNavigationHistory(navigationHistory.slice(0, -1));
      setCurrentScreen(previousScreen);
    }
  };

  const handleMascotSelect = (mascot: MascotType, name: string) => {
    console.log('Mascot selected:', mascot, 'Name:', name);
    setSelectedMascot(mascot);
    setCamperName(name);
  };

  const handleConceptSelect = (concept: string) => {
    console.log('Concept selected:', concept);
    setSelectedConcept(concept);
  };

  return (
    <>
      <ForestAudio />
      {currentScreen === 'onboarding-welcome' && (
        <OnboardingWelcomeScreen 
          onNavigate={handleNavigate}
          onBack={handleBack}
          canGoBack={navigationHistory.length > 0}
        />
      )}
      {currentScreen === 'character-selection' && (
        <CharacterSelectionScreen 
          onNavigate={handleNavigate}
          onMascotSelect={handleMascotSelect}
          onBack={handleBack}
        />
      )}
      {currentScreen === 'login' && (
        <LoginScreen 
          onNavigate={handleNavigate}
          onBack={handleBack}
        />
      )}
      {currentScreen === 'diagnostic-assessment' && (
        <DiagnosticAssessmentScreen 
          navigateTo={handleNavigate}
          onBack={handleBack}
        />
      )}
      {currentScreen === 'tutorial' && (
        <TutorialGuideScreen 
          navigateTo={handleNavigate}
          onBack={handleBack}
        />
      )}
      {currentScreen === 'dashboard' && (
        <BaseCampDashboard 
          navigateTo={handleNavigate}
          selectedMascot={selectedMascot}
          camperName={camperName}
          userRating={userRating}
          onBack={handleBack}
        />
      )}
      {currentScreen === 'learning-map' && (
        <LearningMapScreen 
          navigateTo={handleNavigate}
          onConceptSelect={handleConceptSelect}
          onBack={handleBack}
        />
      )}
      {currentScreen === 'concept-intro' && (
        <ConceptIntroductionScreen 
          navigateTo={handleNavigate}
          conceptType={selectedConcept}
          onBack={handleBack}
        />
      )}
      {currentScreen === 'practice-session' && (
        <PracticeSessionScreen 
          navigateTo={handleNavigate}
          selectedMascot={selectedMascot}
          onBack={handleBack}
        />
      )}
      {currentScreen === 'victory' && (
        <VictoryScreen 
          navigateTo={handleNavigate}
          selectedMascot={selectedMascot}
          onBack={handleBack}
        />
      )}
      {currentScreen === 'profile' && (
        <CamperProfileScreen 
          navigateTo={handleNavigate}
          selectedMascot={selectedMascot}
          camperName={camperName}
          userRating={userRating}
          onBack={handleBack}
        />
      )}
      {currentScreen === 'badges' && (
        <AchievementCollectionScreen 
          navigateTo={handleNavigate}
          onBack={handleBack}
        />
      )}
      {currentScreen === 'progress' && (
        <ProgressLodgeScreen 
          navigateTo={handleNavigate}
          onBack={handleBack}
        />
      )}
      {currentScreen === 'social' && (
        <CampfireSocialScreen 
          navigateTo={handleNavigate}
          onBack={handleBack}
        />
      )}
      {currentScreen === 'settings' && (
        <SettingsScreen 
          navigateTo={handleNavigate}
          onBack={handleBack}
        />
      )}
    </>
  );
}
