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
      className="bg-amber-800/95 hover:bg-amber-700 backdrop-blur-sm text-amber-50 p-3 rounded-xl transition-all duration-200 transform hover:scale-110 active:scale-95 shadow-lg border-2 border-amber-900"
      aria-label="Go back"
    >
      <ArrowLeft size={24} />
    </button>
  );
}
