interface StatsCardProps {
  label: string;
  value: string;
  change?: number;
}

export default function StatsCard({ label, value, change }: StatsCardProps) {
  return (
    <div className="parchment-texture p-4 rounded-xl shadow-lg min-w-[120px] animate-[fadeIn_0.5s_ease-out]">
      <div className="text-xs font-semibold mb-1" style={{ color: 'oklch(0.55 0.08 50)' }}>
        {label}
      </div>
      <div className="text-2xl font-bold" style={{ color: 'oklch(0.35 0.06 50)' }}>
        {value}
      </div>
      {change !== undefined && (
        <div className="text-sm font-semibold mt-1" style={{ color: change > 0 ? 'oklch(0.60 0.14 130)' : 'oklch(0.60 0.18 27)' }}>
          {change > 0 ? '+' : ''}{change}
        </div>
      )}
    </div>
  );
}
