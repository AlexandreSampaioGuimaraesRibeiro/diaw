import { getPokemonImage } from "../utils/data";
import { getTypeColor } from "../utils/typeColors";
import TypeBadges from "./TypeBadges";

const LABELS = [
  ["hp", "HP"], ["attack", "Attack"], ["defense", "Defense"],
  ["specialAttack", "Special Attack"], ["specialDefense", "Special Defense"], ["speed", "Speed"],
];

export default function PokemonDetails({ pokemon, onClose }) {
  const color = getTypeColor(pokemon.types[0]?.name);
  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal" style={{ "--c": color }} onClick={(e) => e.stopPropagation()}>
        <button className="close" onClick={onClose} aria-label="Fechar">✕</button>
        <img src={getPokemonImage(pokemon.id)} alt={pokemon.name} />
        <h2>#{pokemon.id} {pokemon.name}</h2>
        <TypeBadges types={pokemon.types} />
        <div className="stats">
          {LABELS.map(([key, label]) => (
            <div className="stat" key={key}>
              <span>{label}</span>
              <div className="bar"><div style={{ width: `${Math.min(100, (pokemon.stats[key] / 255) * 100)}%` }} /></div>
              <strong>{pokemon.stats[key]}</strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
