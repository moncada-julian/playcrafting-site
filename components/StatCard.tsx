interface StatCardProps {
  value: string;
  label: string;
  highlight?: boolean;
}

export default function StatCard({ value, label, highlight = false }: StatCardProps) {
  return (
    <div className="text-center p-6">
      <div
        className={`text-4xl md:text-5xl font-bold mb-2 ${
          highlight ? "text-pc-pink" : "text-pc-light"
        }`}
      >
        {value}
      </div>
      <div className="text-small text-pc-light/70">{label}</div>
    </div>
  );
}
