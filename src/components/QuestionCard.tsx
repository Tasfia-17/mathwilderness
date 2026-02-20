interface QuestionCardProps {
  question: string;
  options: string[];
  questionNumber: number;
  onAnswer: (answerIndex: number) => void;
}

export default function QuestionCard({ question, options, questionNumber, onAnswer }: QuestionCardProps) {
  return (
    <div 
      className="parchment-texture p-5 rounded-xl shadow-xl animate-[fadeIn_0.5s_ease-out]"
      style={{ maxWidth: '450px', width: '90%' }}
    >
      <div className="text-xs font-semibold mb-3" style={{ color: 'oklch(0.55 0.08 50)' }}>
        Question {questionNumber} of 5
      </div>
      
      <h2 className="text-lg font-bold mb-4" style={{ color: 'oklch(0.35 0.06 50)', fontFamily: "'Georgia', serif" }}>
        {question}
      </h2>
      
      <div className="flex flex-col gap-2">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(index)}
            className="wood-grain-texture px-4 py-2 rounded-lg text-sm font-semibold text-white text-left transition-all hover:scale-105 active:scale-95"
            style={{
              background: 'linear-gradient(135deg, oklch(0.65 0.06 50) 0%, oklch(0.55 0.08 50) 100%)',
            }}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
