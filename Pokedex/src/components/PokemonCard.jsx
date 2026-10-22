import { getPokemonImage } from "../utils/data";
import { getTypeColor } from "../utils/typeColors";
import TypeBadges from "./TypeBadges";
import "../css/Favorites.css";

export default function PokemonCard({ pokemon, onSelect, isFavorite = false, onToggleFavorite }) {
  const color = getTypeColor(pokemon.types[0]?.name);
  const { hp, attack, defense, specialAttack, specialDefense, speed } = pokemon.stats;

  return (
    <article className="card" style={{ "--c": color }} onClick={() => onSelect(pokemon)}>
      <span className="card-id">#{String(pokemon.id).padStart(3, "0")}</span>

      <button
        className={isFavorite ? "fav-star on" : "fav-star"}
        aria-label={isFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}
        onClick={(e) => {
          e.stopPropagation();
          onToggleFavorite?.(pokemon.id);
        }}
      >
        {isFavorite ? "★" : "☆"}
      </button>

      <img src={getPokemonImage(pokemon.id)} alt={pokemon.name} loading="lazy" />
      <h3>{pokemon.name}</h3>
      <TypeBadges types={pokemon.types} />
      <ul className="mini-stats">
        <li>❤️ {hp}</li>
        <li>⚔️ {attack}</li>
        <li>🛡️ {defense}</li>
        <li>✨ {specialAttack}</li>
        <li>🔰 {specialDefense}</li>
        <li>💨 {speed}</li>
      </ul>
    </article>
  );
}
