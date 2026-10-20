import { PokemonModal } from "@/components/features/pokemon-modal";
import "./styles.css";
import { PokemonCard } from "@/components/modules/pokemon-card";
import { getPokemonStat } from "@/utils/get-pokemon-stat";
import { useState } from "react";
import { useEffect } from "react";
import { Header } from "@/components/features/header";
import { useMemo } from "react";
import { useCallback } from "react";
import { usePokemonList } from "@/queries/use-pokemon-list";
import { matchSorter, rankings } from "match-sorter";

const pokemonKey = "pokemonSelecionado";
const PAGE_SIZE = 20; // NOVO

export function PokemonList() {
  const pokemonList = usePokemonList();

  const [selectedTypeFilter, setSelectedFilter] = useState("accent");
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1); // NOVO

  const [selectedPokemon, setSelectedPokemon] = useState(() => {
    const pokemonStorage = localStorage.getItem(pokemonKey);
    if (pokemonStorage) {
      return JSON.parse(pokemonStorage);
    }
    return null;
  });

  const pokemonListFiltered = useMemo(() => {
  const term = searchTerm.trim();

  // filtra por tipo
  const byType = (pokemonList ?? []).filter(
    (p) =>
      selectedTypeFilter === "accent" ||
      p.types.some((t) => t.type.name === selectedTypeFilter)
  );

  // sem texto na busca, devolve a lista do tipo
  if (!term) return byType;

  // com texto, busca por nome ou número
  return matchSorter(byType, term, {
    keys: ["name", (p) => String(p.id)],
    threshold: rankings.MATCHES, // NOVO: só resultados que contenham o termo
    baseSort: (a, b) => a.item.id - b.item.id,
  });
}, [pokemonList, selectedTypeFilter, searchTerm]);


  // total de páginas e fatia da página atual
  const totalPages = Math.max(
    1,
    Math.ceil(pokemonListFiltered.length / PAGE_SIZE)
  );

  const pokemonPage = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return pokemonListFiltered.slice(start, start + PAGE_SIZE);
  }, [pokemonListFiltered, page]);

  // volta para a página 1 quando a busca ou o tipo mudam
  useEffect(() => {
    setPage(1);
  }, [searchTerm, selectedTypeFilter]);

  const handleTypeFilter = useCallback((type) => {
    setSelectedFilter(type);
  }, []);

  // troca de página e sobe ao topo
  const goToPage = useCallback((newPage) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    localStorage.setItem(pokemonKey, JSON.stringify(selectedPokemon));
  }, [selectedPokemon]);


  return (
    <div className="pokemon-list-root">
      <Header
        selectedType={selectedTypeFilter}
        onTypeChange={handleTypeFilter}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <main className="pokemon-list-main">
        {pokemonList && pokemonListFiltered.length === 0 && (
      <p className="pokemon-list-empty">
      Nenhum Pokémon encontrado. Tente outro nome ou número.
      </p>
  )}
        <div className="pokemon-list-grid">
          {pokemonPage.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              sprite={pokemon.sprites.front_default}
              types={pokemon.types.map((t) => t.type.name)}
              hp={getPokemonStat(pokemon, "hp")}
              atk={getPokemonStat(pokemon, "attack")}
              def={getPokemonStat(pokemon, "defense")}
              onClick={() => setSelectedPokemon(pokemon)}
            />
          ))}
        </div>

        {/* controles de paginação */}
        {pokemonListFiltered.length > 0 && (
        <div className="pagination">
          <button onClick={() => goToPage(page - 1)} disabled={page === 1}>
            Anterior
          </button>

         {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
       <button
         key={n}
         onClick={() => goToPage(n)}
         className={n === page ? "page-number active" : "page-number"}
         aria-current={n === page ? "page" : undefined}
      >
       {n}
      </button>
  ))}
          <button
            onClick={() => goToPage(page + 1)}
            disabled={page === totalPages}
          >
            Próxima
          </button>
        </div>
        )}
      </main>

      {selectedPokemon && (
        <PokemonModal
          pokemon={selectedPokemon}
          onClose={() => {
            setSelectedPokemon(null);
          }}
        />
      )}
    </div>
  );
}