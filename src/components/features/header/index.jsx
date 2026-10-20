import { useGenerationTypes } from "@/queries/use-generation-types";
import "./styles.css";

import { Chip } from "@/components/modules/chip";
import { SearchPokemon } from "../search-pokemon";

const GENERATION_ID = 1;

/**
 * Coloca a primeira letra em maiúscula.
 *
 * @param {string} text
 * @returns {string}
 */
function capitalize(text) {
  return text[0].toUpperCase() + text.slice(1);
}

/**
 * @typedef {Object} HeaderProps
 * @property {string} search
 * Valor atual do campo de busca.
 *
 * @property {(value: string) => void} onSearchChange
 * Ação executada quando o campo de busca muda.
 *
 * @property {number} selectedType
 * Tipo selecionado no filtro (`"accent"` representa "Todos").
 *
 * @property {(type: ColorToken) => void} onTypeChange
 * Ação executada quando o filtro de tipo muda.
 */

/**
 * Cabeçalho com logo, busca e filtro de tipo.
 *
 * @param {HeaderProps} props
 */
export function Header({ onTypeChange, selectedType, searchTerm, setSearchTerm }) {
  const types = useGenerationTypes(GENERATION_ID);

  return (
    <header className="header-root">
      <div className="header-logo">
        <div className="header-logo-ball">
          <span className="header-logo-ball-bottom" />
          <span className="header-logo-ball-line" />
          <span className="header-logo-ball-center" />
        </div>

        <div className="header-logo-text">
          <div className="header-logo-title">Pokédex</div>
          <div className="header-logo-subtitle">151 Pokémon · Kanto</div>
        </div> 

        <div className="search-pokemon" >
          <SearchPokemon
            value={searchTerm}
            onChange={setSearchTerm}
          />
        </div>
      </div>

      <div className="header-chips">
        <Chip
          name="Todos"
          color="accent"
          selected={selectedType === "accent"}
          onClick={() => onTypeChange("accent")}
        >
          Todos
        </Chip>
        {types.map((type) => (
          <Chip
            key={type}
            name={capitalize(type)}
            color={type}
            selected={selectedType === type}
            onClick={() => onTypeChange(type)}
          >
            {capitalize(type)}
          </Chip>
        ))}
      </div>
    </header>
  );
}