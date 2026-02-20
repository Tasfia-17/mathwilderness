import { useState } from 'react';
import TutorialSceneSVG from './TutorialSceneSVG';
import TutorialContentPanel from './TutorialContentPanel';
import StepProgressIndicator from './StepProgressIndicator';
import BackButton from './BackButton';
import { NavigationCallback } from '../types/navigation';

interface TutorialGuideScreenProps {
  navigateTo: NavigationCallback;
  onBack: () => void;
}

const tutorialSteps = [
  {
    title: 'Welcome to Math Wilderness',
    description: 'Your journey begins here! Navigate through forest trails, solve problems, and earn badges.',
  },
  {
    title: 'Choose Your Path',
    description: 'Select concepts from the Learning Map. Each trail offers unique challenges and rewards.',
  },
  {
    title: 'Track Your Progress',
    description: 'Visit the Progress Lodge to see your stats, rating history, and achievements.',
  },
];

export default function TutorialGuideScreen({ navigateTo, onBack }: TutorialGuideScreenProps) {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < tutorialSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigateTo('dashboard');
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <TutorialSceneSVG step={currentStep} />
      
      <BackButton onClick={onBack} />
      
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-8 pointer-events-none">
        <TutorialContentPanel
          title={tutorialSteps[currentStep].title}
          description={tutorialSteps[currentStep].description}
        />
        
        <StepProgressIndicator
          currentStep={currentStep}
          totalSteps={tutorialSteps.length}
        />
        
        <div className="flex gap-3 pointer-events-auto">
          {currentStep > 0 && (
            <button
              onClick={handlePrevious}
              className="bg-[#8B7355] hover:bg-[#A0826D] text-white text-sm font-semibold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-[#6B5744]"
            >
              Previous
            </button>
          )}
          <button
            onClick={handleNext}
            className="bg-[#D2691E] hover:bg-[#CD853F] text-white text-sm font-bold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-[#8B4513]"
          >
            {currentStep < tutorialSteps.length - 1 ? 'Next' : 'Start Adventure'}
          </button>
        </div>
      </div>
    </div>
  );
}
