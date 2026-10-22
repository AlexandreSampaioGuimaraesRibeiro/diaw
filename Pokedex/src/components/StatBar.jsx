import "../css/PokemonDetails.css";

const MAX_STAT = 255;

export default function StatBar({ label, value, color }) {
  const percent = Math.min((value / MAX_STAT) * 100, 100);

  return (
    <div className="stat-row">
      <span className="stat-label">{label}</span>
      <span className="stat-value">{value}</span>
      <div className="stat-track">
        <div
          className="stat-fill"
          style={{ width: `${percent}%`, background: color }}
        />
      </div>
    </div>
  );
}