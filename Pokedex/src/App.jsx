import { useState, useEffect } from "react";
import { pokemons, trainers, pokemonTypes } from "./utils/data";
import SearchBar from "./components/SearchBar";
import TypeFilter from "./components/TypeFilter";
import PokemonList from "./components/PokemonList";
import PokemonDetails from "./components/PokemonDetails";
import TrainersPanel from "./components/TrainersPanel";
import Header from "./components/Header";
import Toolbar from "./components/Toolbar";

export default function App() {
  const [view, setView] = useState("pokedex");
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selected, setSelected] = useState(null);
  const [sortBy, setSortBy] = useState("id");
  const [onlyFavorites, setOnlyFavorites] = useState(false);
  const [favorites, setFavorites] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("favorites")) ?? [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  // estado derivado, sem useEffect
  const filtered = pokemons.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      String(p.id).includes(search);
    const matchesType = !selectedType || p.types.some((t) => t.name === selectedType);
    const matchesFavorite = !onlyFavorites || favorites.includes(p.id);
    return matchesSearch && matchesType && matchesFavorite;
  });

  const sorted = [...filtered].sort((a, b) => {
  if (sortBy === "id") return a.id - b.id;
  if (sortBy === "name") return a.name.localeCompare(b.name);
  return b.stats[sortBy] - a.stats[sortBy];
});

const handleRandom = () => {
  setSelected(pokemons[Math.floor(Math.random() * pokemons.length)]);
};

  return (
    <div className="app">
      <Header view={view} onChangeView={setView} />
      {view === "pokedex" ? (
        <>
          <SearchBar value={search} onChange={setSearch} />
          <TypeFilter types={pokemonTypes} selected={selectedType} onChange={setSelectedType} />
          <Toolbar sortBy={sortBy} onSortChange={setSortBy} onRandom={handleRandom} onlyFavorites={onlyFavorites} onToggleOnlyFavorites={() => setOnlyFavorites((v) => !v)} />
          <PokemonList pokemons={sorted} onSelect={setSelected} favorites={favorites} onToggleFavorite={toggleFavorite} />
        </>
      ) : (
        <TrainersPanel trainers={trainers} onSelectPokemon={setSelected} />
      )}

      {selected && <PokemonDetails pokemon={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
