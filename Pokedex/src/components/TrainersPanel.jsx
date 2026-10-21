import { getPokemonById, getPokemonImage } from "../utils/data";

// agrupa repetidos: [48,48,48,49] -> [{id:48,count:3},{id:49,count:1}]
const group = (ids) => {
  const map = new Map();
  ids.forEach((id) => map.set(id, (map.get(id) ?? 0) + 1));
  return [...map].map(([id, count]) => ({ id, count }));
};

export default function TrainersPanel({ trainers, onSelectPokemon }) {
  return (
    <section className="trainers">
      {trainers.map((t) => (
        <div className="trainer" key={t.id}>
          <h3>🧑‍🚀 {t.name} <small>🏅 {t.badges}</small></h3>
          <div className="team">
            {group(t.pokemonIds).map(({ id, count }) => {
              const p = getPokemonById(id);
              if (!p) return null;
              return (
                <button key={id} className="member" onClick={() => onSelectPokemon(p)} title={p.name}>
                  <img src={getPokemonImage(id)} alt={p.name} loading="lazy" />
                  <span>{p.name}{count > 1 ? ` x${count}` : ""}</span>
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
}
