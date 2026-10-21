import data from "../data/pokedex-data.json";

export const pokemons = data.pokemon;
export const trainers = data.trainers;

// tipos que realmente aparecem nos Pokémon, sem duplicar
export const pokemonTypes = [
  ...new Set(data.pokemon.flatMap((p) => p.types.map((t) => t.name))),
].sort();

export const getPokemonById = (id) => data.pokemon.find((p) => p.id === id);

export const getPokemonImage = (id) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
