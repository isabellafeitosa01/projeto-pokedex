import { getPokemonByName } from "@/services/get-pokemon-by-name";
import { getPokemonList } from "@/services/get-pokemon-list";
import { useState, useEffect } from "react";

export function usePokemonList() {
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
        getPokemonList().then(({ results }) => {
            return Promise.all(results.map(async (pokemon) => {
                return getPokemonByName(pokemon.name);
            }))
        }).then((data) => {
            setPokemonList(data);
        })
    }, []);

    return pokemonList;
}

// Hook personalizado -> onde podemos executar código react, sem retornar um JSX (ou seja, sem um componente)


// Hooks do react -> funções que tem uma semântica diferente dentro do fluxo do react
// useState -> gerenciador de estado / mas não deixa de ser uma função