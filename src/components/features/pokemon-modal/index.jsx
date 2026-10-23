import "./styles.css";


/**
 * @typedef {Object} PokemonDetailModalProps
 * @property {Pokemon} pokemon
 * Pokémon exibido no modal.
 *
 * @property {() => void} onClose
 * Fecha o modal.
 */

import { Badge } from "@/components/modules/badge";
import { StatBar } from "@/components/modules/stat-bar";
import { getColorVar } from "@/utils/get-color-var";
import { getPokemonStat, POKEMON_STAT_MAX } from "@/utils/get-pokemon-stat";

/**
 * Modal de detalhe de um Pokémon.
 *
 * @param {PokemonDetailModalProps} props
 */
export function PokemonModal({ pokemon, onClose }) {
    const padded = String(pokemon.id).padStart(3, "0");
    const types = pokemon.types.map((t) => t.type.name);
    const primaryColor = types[0];
    const artwork = pokemon.sprites.other["official-artwork"].front_default;
  
    return (
      <div className="pokemon-detail-modal-backdrop" onClick={onClose}>
        <button
          type="button"
          className="pokemon-detail-modal-nav-btn pokemon-detail-modal-nav-btn-prev"
          aria-label="Pokémon anterior"
        >
          ‹
        </button>
  
        <div
          className="pokemon-detail-modal-box"
          style={{ "--modal-color": getColorVar(primaryColor) }}
          role="dialog"
          aria-modal="true"
          aria-label={pokemon.name}
          onClick={(event) => event.stopPropagation()}
        >
          <button
            type="button"
            className="pokemon-detail-modal-close"
            aria-label="Fechar"
            onClick={onClose}
          >
            ✕
          </button>
  
          <div className="pokemon-detail-modal-number">#{padded}</div>
  
          <div className="pokemon-detail-modal-glow">
            {artwork && (
              <img
                className="pokemon-detail-modal-artwork"
                src={artwork}
                alt=""
                width="150"
                height="150"
              />
            )}
          </div>
  
          <div className="pokemon-detail-modal-name">
      {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
         </div>
  
          <div className="pokemon-detail-modal-types">
            {types.map((type) => (
              <Badge key={type} color={type}>
                {type}
              </Badge>
            ))}
          </div>
  
          <div className="pokemon-detail-modal-info">
            <div className="pokemon-detail-modal-info-box">
              <div className="pokemon-detail-modal-info-label">Altura</div>
              <div className="pokemon-detail-modal-info-value">
                {pokemon.height / 10} m
              </div>
            </div>
            <div className="pokemon-detail-modal-info-box">
              <div className="pokemon-detail-modal-info-label">Peso</div>
              <div className="pokemon-detail-modal-info-value">
                {pokemon.weight / 10} kg
              </div>
            </div>
          </div>
  
          <div className="pokemon-detail-modal-stats">
            <StatBar
              label="HP"
              value={getPokemonStat(pokemon, "hp")}
              max={POKEMON_STAT_MAX}
              color={primaryColor}
              size="lg"
            />
            <StatBar
              label="ATK"
              value={getPokemonStat(pokemon, "attack")}
              max={POKEMON_STAT_MAX}
              color={primaryColor}
              size="lg"
            />
            <StatBar
              label="DEF"
              value={getPokemonStat(pokemon, "defense")}
              max={POKEMON_STAT_MAX}
              color={primaryColor}
              size="lg"
            />
          </div>
        </div>
  
        <button
          type="button"
          className="pokemon-detail-modal-nav-btn pokemon-detail-modal-nav-btn-next"
          aria-label="Próximo Pokémon"
        >
          ›
        </button>
      </div>)
}