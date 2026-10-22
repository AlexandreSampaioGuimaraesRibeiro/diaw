import "../css/Header.css";

export default function Header({ view, onChangeView }) {
  return (
    <header>
      <div className="brand">
        <span className="pokeball" />
        <h1>Pokédex</h1>
      </div>
      <nav>
        <button
          className={view === "pokedex" ? "tab active" : "tab"}
          onClick={() => onChangeView("pokedex")}
        >
          Pokémon
        </button>
        <button
          className={view === "trainers" ? "tab active" : "tab"}
          onClick={() => onChangeView("trainers")}
        >
          Treinadores
        </button>
      </nav>
    </header>
  );
}