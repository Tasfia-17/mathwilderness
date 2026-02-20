import { ArrowLeft } from 'lucide-react';

interface BackButtonProps {
  onClick: () => void;
  show?: boolean;
}

export default function BackButton({ onClick, show = true }: BackButtonProps) {
  if (!show) return null;

  return (
    <button
      onClick={onClick}
      className="absolute top-4 left-4 z-50 bg-[#8B7355]/90 hover:bg-[#A0826D]/90 backdrop-blur-sm text-[#FFF8DC] p-2 rounded-lg transition-all duration-300 transform hover:scale-110 shadow-lg border border-[#6B5744]"
      aria-label="Go back"
    >
      <ArrowLeft size={20} />
    </button>
  );
}
