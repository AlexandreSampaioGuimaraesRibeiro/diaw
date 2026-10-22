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

export default function Toolbar({ sortBy, onSortChange, onRandom, onlyFavorites, onToggleOnlyFavorites }) {
  return (
    <div className="toolbar-actions">
  <button
    className={onlyFavorites ? "fav-filter active" : "fav-filter"}
    onClick={onToggleOnlyFavorites}
  >
    🌟Favoritos
  </button>
  <button className="random-btn" onClick={onRandom}>🔄Aleatório</button>
</div>
  );
}
