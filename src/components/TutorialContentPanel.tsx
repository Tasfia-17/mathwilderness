interface TutorialContentPanelProps {
  title: string;
  description: string;
}

export default function TutorialContentPanel({ title, description }: TutorialContentPanelProps) {
  return (
    <div className="parchment-texture p-5 rounded-xl shadow-xl max-w-md">
      <h2 className="text-lg font-bold mb-3" style={{ color: 'oklch(0.35 0.06 50)', fontFamily: "'Georgia', serif" }}>
        {title}
      </h2>
      <p className="text-sm leading-relaxed" style={{ color: 'oklch(0.45 0.06 50)' }}>
        {description}
      </p>
    </div>
  );
}
