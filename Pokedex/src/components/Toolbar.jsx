import "../css/Toolbar.css";

const OPTIONS = [
  ["id", "ID"],
  ["name", "Nome"],
  ["hp", "HP"],
  ["attack", "Attack"],
  ["defense", "Defense"],
  ["specialAttack", "Special Attack"],
  ["specialDefense", "Special Defense"],
  ["speed", "Speed"],
];

export default function Toolbar({ sortBy, onSortChange, onRandom }) {
  return (
    <div className="toolbar">
      <label>
        Ordenar por:{" "}
        <select value={sortBy} onChange={(e) => onSortChange(e.target.value)}>
          {OPTIONS.map(([key, label]) => (
            <option key={key} value={key}>{label}</option>
          ))}
        </select>
      </label>
      <button className="random-btn" onClick={onRandom}>🎲 Aleatório</button>
    </div>
  );
}