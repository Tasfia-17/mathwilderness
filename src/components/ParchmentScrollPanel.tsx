interface ParchmentScrollPanelProps {
  title: string;
  content: string;
}

export default function ParchmentScrollPanel({ title, content }: ParchmentScrollPanelProps) {
  return (
    <div className="parchment-texture p-6 rounded-2xl shadow-xl max-w-md">
      <h2 className="text-2xl font-bold mb-4" style={{ color: 'oklch(0.35 0.06 50)', fontFamily: "'Georgia', serif" }}>
        {title}
      </h2>
      <p className="text-lg leading-relaxed" style={{ color: 'oklch(0.45 0.06 50)' }}>
        {content}
      </p>
    </div>
  );
}
