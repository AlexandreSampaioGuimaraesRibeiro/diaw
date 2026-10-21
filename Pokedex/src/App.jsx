import { useState } from "react";
import { pokemons, trainers, pokemonTypes } from "./utils/data";
import SearchBar from "./components/SearchBar";
import TypeFilter from "./components/TypeFilter";
import PokemonList from "./components/PokemonList";
import PokemonDetails from "./components/PokemonDetails";
import TrainersPanel from "./components/TrainersPanel";

export default function App() {
  const [view, setView] = useState("pokedex");
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selected, setSelected] = useState(null);

  // estado derivado, sem useEffect
  const filtered = pokemons.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      String(p.id).includes(search);
    const matchesType = !selectedType || p.types.some((t) => t.name === selectedType);
    return matchesSearch && matchesType;
  });

  return (
    <div className="app">
      <header>
        <h1>Pokédex</h1>
        <nav>
          <button className={view === "pokedex" ? "tab active" : "tab"} onClick={() => setView("pokedex")}>Pokémon</button>
          <button className={view === "trainers" ? "tab active" : "tab"} onClick={() => setView("trainers")}>Treinadores</button>
        </nav>
      </header>

      {view === "pokedex" ? (
        <>
          <SearchBar value={search} onChange={setSearch} />
          <TypeFilter types={pokemonTypes} selected={selectedType} onChange={setSelectedType} />
          <PokemonList pokemons={filtered} onSelect={setSelected} />
        </>
      ) : (
        <TrainersPanel trainers={trainers} onSelectPokemon={setSelected} />
      )}

      {selected && <PokemonDetails pokemon={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
