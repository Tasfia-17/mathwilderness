import { useState } from 'react';
import StarryNightCampsiteSVG from './StarryNightCampsiteSVG';
import ProblemCard from './ProblemCard';
import BackButton from './BackButton';
import { NavigationCallback, MascotType } from '../types/navigation';

interface PracticeSessionScreenProps {
  navigateTo: NavigationCallback;
  selectedMascot: MascotType;
  onBack: () => void;
}

const PRACTICE_PROBLEMS = [
  { problem: "Solve: 3x + 7 = 22", correctAnswer: "5", hint: "Subtract 7 from both sides first" },
  { problem: "What is 15% of 80?", correctAnswer: "12", hint: "Multiply 80 by 0.15" },
  { problem: "Simplify: 2(x + 3) - 4", correctAnswer: "2x+2", hint: "Distribute the 2, then combine like terms" },
];

export default function PracticeSessionScreen({ navigateTo, selectedMascot, onBack }: PracticeSessionScreenProps) {
  const [currentProblem, setCurrentProblem] = useState(0);
  const [answer, setAnswer] = useState('');
  const [showHint, setShowHint] = useState(false);

  const handleSubmit = () => {
    if (currentProblem < PRACTICE_PROBLEMS.length - 1) {
      setCurrentProblem(currentProblem + 1);
      setAnswer('');
      setShowHint(false);
    } else {
      navigateTo('victory');
    }
  };

  const progress = ((currentProblem + 1) / PRACTICE_PROBLEMS.length) * 100;

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <StarryNightCampsiteSVG />
      
      <BackButton onClick={onBack} />
      
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-64 pointer-events-auto">
        <div className="bg-[#8B7355]/90 backdrop-blur-sm rounded-full h-3 overflow-hidden border border-[#6B5744]">
          <div 
            className="h-full bg-[#D2691E] transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-center text-[#FFF8DC] text-xs mt-1">
          Problem {currentProblem + 1} of {PRACTICE_PROBLEMS.length}
        </p>
      </div>
      
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
        <ProblemCard
          problem={PRACTICE_PROBLEMS[currentProblem].problem}
          answer={answer}
          onAnswerChange={setAnswer}
          onSubmit={handleSubmit}
        />
      </div>
      
      {showHint && (
        <div className="absolute bottom-24 right-4 max-w-xs bg-[#8B7355]/95 backdrop-blur-sm rounded-lg p-4 shadow-xl border border-[#6B5744] pointer-events-auto">
          <p className="text-[#FFF8DC] text-sm">
            💡 {PRACTICE_PROBLEMS[currentProblem].hint}
          </p>
        </div>
      )}
      
      <button
        onClick={() => setShowHint(!showHint)}
        className="absolute bottom-4 right-4 bg-[#8B7355] hover:bg-[#A0826D] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-300 shadow-lg border border-[#6B5744] pointer-events-auto"
      >
        {showHint ? 'Hide Hint' : 'Show Hint'}
      </button>
    </div>
  );
}
