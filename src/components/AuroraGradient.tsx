export function AuroraGradient() {
  return (
    <svg width="0" height="0" className="absolute">
      <defs>
        <linearGradient id="aurora-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#14e818" />
          <stop offset="50%" stopColor="#017ed5" />
          <stop offset="100%" stopColor="#b53dff" />
        </linearGradient>
      </defs>
    </svg>
  );
}
