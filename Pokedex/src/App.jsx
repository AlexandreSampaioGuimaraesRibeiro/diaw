import { useState } from "react";
import { pokemons, trainers, pokemonTypes } from "./utils/data";
import SearchBar from "./components/SearchBar";
import TypeFilter from "./components/TypeFilter";
import PokemonList from "./components/PokemonList";
import PokemonDetails from "./components/PokemonDetails";
import TrainersPanel from "./components/TrainersPanel";
import Header from "./components/Header";

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
      <Header view={view} onChangeView={setView} />
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
