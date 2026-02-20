import { useState } from 'react';
import TreasureMapSVG from './TreasureMapSVG';
import QuestionCard from './QuestionCard';
import BackButton from './BackButton';
import { NavigationCallback } from '../types/navigation';

interface DiagnosticAssessmentScreenProps {
  navigateTo: NavigationCallback;
  onBack: () => void;
}

const SIMULATED_QUESTIONS = [
  {
    question: "What is 7 + 5?",
    options: ["10", "11", "12", "13"],
    correct: 2
  },
  {
    question: "If a triangle has sides of 3, 4, and 5, what type is it?",
    options: ["Equilateral", "Isosceles", "Right", "Obtuse"],
    correct: 2
  },
  {
    question: "What is 3/4 + 1/4?",
    options: ["1/2", "3/8", "1", "4/8"],
    correct: 2
  },
  {
    question: "Solve for x: 2x + 3 = 11",
    options: ["3", "4", "5", "6"],
    correct: 1
  },
  {
    question: "What is the area of a rectangle with length 6 and width 4?",
    options: ["10", "20", "24", "28"],
    correct: 2
  }
];

export default function DiagnosticAssessmentScreen({ navigateTo, onBack }: DiagnosticAssessmentScreenProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const handleAnswer = (answerIndex: number) => {
    setAnswers([...answers, answerIndex]);
    
    if (currentQuestion < SIMULATED_QUESTIONS.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 300);
    }
  };

  const isComplete = answers.length === SIMULATED_QUESTIONS.length;

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <TreasureMapSVG progress={answers.length} />
      
      <BackButton onClick={onBack} />
      
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-8">
        <div className="parchment-texture px-6 py-3 rounded-xl shadow-lg">
          <h1 className="text-xl font-bold" style={{ color: 'oklch(0.35 0.06 50)', fontFamily: "'Georgia', serif" }}>
            Let's map your starting point
          </h1>
        </div>
        
        {!isComplete ? (
          <>
            <QuestionCard
              question={SIMULATED_QUESTIONS[currentQuestion].question}
              options={SIMULATED_QUESTIONS[currentQuestion].options}
              questionNumber={currentQuestion + 1}
              onAnswer={handleAnswer}
            />
            
            <div className="flex gap-3">
              {SIMULATED_QUESTIONS.map((_, index) => (
                <div
                  key={index}
                  className="w-6 h-8 rounded-full transition-all"
                  style={{
                    background: index < answers.length 
                      ? 'oklch(0.65 0.15 35)' 
                      : index === currentQuestion
                      ? 'oklch(0.85 0.12 85)'
                      : 'oklch(0.80 0.02 70)',
                    opacity: index <= currentQuestion ? 1 : 0.4,
                  }}
                />
              ))}
            </div>
          </>
        ) : (
          <button
            onClick={() => navigateTo('dashboard')}
            className="wood-grain-texture px-8 py-3 rounded-xl text-base font-bold text-white shadow-xl transform transition-all hover:scale-105 active:scale-95"
            style={{
              background: 'linear-gradient(135deg, oklch(0.65 0.15 35) 0%, oklch(0.55 0.18 35) 100%)',
            }}
          >
            Place Your Tent
          </button>
        )}
      </div>
    </div>
  );
}
