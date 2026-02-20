interface ProblemCardProps {
  problem: string;
  answer: string;
  onAnswerChange: (value: string) => void;
  onSubmit: () => void;
}

export default function ProblemCard({ problem, answer, onAnswerChange, onSubmit }: ProblemCardProps) {
  return (
    <div className="paper-texture p-5 rounded-xl shadow-xl" style={{ width: '380px' }}>
      <h2 className="text-lg font-bold mb-4" style={{ color: 'oklch(0.35 0.06 50)' }}>
        {problem}
      </h2>
      
      <input
        type="text"
        value={answer}
        onChange={(e) => onAnswerChange(e.target.value)}
        placeholder="Your answer..."
        className="log-texture w-full px-3 py-2 rounded-lg text-white placeholder-white/60 mb-4"
      />
      
      <button
        onClick={onSubmit}
        className="wood-grain-texture w-full px-4 py-2 rounded-lg text-sm font-bold text-white shadow-lg transition-all hover:scale-105"
        style={{ background: 'linear-gradient(135deg, oklch(0.65 0.15 35) 0%, oklch(0.55 0.18 35) 100%)' }}
      >
        Submit Answer
      </button>
    </div>
  );
}
