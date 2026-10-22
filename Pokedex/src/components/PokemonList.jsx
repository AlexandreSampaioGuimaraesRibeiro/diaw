import PokemonCard from "./PokemonCard";

export default function PokemonList({ pokemons, onSelect, favorites = [], onToggleFavorite }){
  if (pokemons.length === 0) {
    return <p className="empty">Nenhum Pokémon encontrado! </p>;
  }
  return (
    <section className="grid">
      {pokemons.map((p) => (
        <PokemonCard key={p.id} pokemon={p} onSelect={onSelect} isFavorite={favorites.includes(p.id)} onToggleFavorite={onToggleFavorite} />
      ))}
    </section>
  );
}
