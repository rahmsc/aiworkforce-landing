interface StatItemProps {
  label: string;
  value: string;
}

export const StatItem = ({ label, value }: StatItemProps) => {
  return (
    <div className="space-y-1">
      <p className="text-cyber-blue font-mono text-sm">{label}</p>
      <p className="text-white font-mono text-xl font-medium">{value}</p>
    </div>
  );
};
