import { POKEMON_STAT_MAX } from "@/utils/get-pokemon-stat";
import { Badge } from "../badge";
import { StatBar } from "../stat-bar";
import "./styles.css";
import { getColorVar } from "@/utils/get-color-var";

/**
 * @typedef {Object} PokemonCardProps
 * @property {number} id
 * Número da Pokédex.
 *
 * @property {string} name
 * Nome do Pokémon.
 *
 * @property {string|null} sprite
 * URL do sprite exibido no card.
 *
 * @property {ColorToken[]} types
 * Tipos do Pokémon. O primeiro define a cor predominante do card.
 *
 * @property {number} hp
 * @property {number} atk
 * @property {number} def
 *
 * @property {() => void} onClick
 * Ação executada ao clicar no card.
 */

/**
 * Card de Pokémon usado na listagem.
 *
 * @param {PokemonCardProps} props
 */
export function PokemonCard({ id, sprite, types, hp, atk, def, onClick }) {
  const padded = String(id).padStart(3, "0");
  const primaryColor = types[0];

  return (
    <button
      type="button"
      className="pokemon-card-root"
      onClick={onClick}
      style={{ "--card-color": getColorVar(primaryColor) }}
    >
      <div className="pokemon-card-number">#{padded}</div>

      <div className="pokemon-card-glow">
        {sprite && (
          <img
            className="pokemon-card-sprite"
            src={sprite}
            alt=""
            width="84"
            height="84"
          />
        )}
      </div>

      <div className="pokemon-card-name">{name}</div>

      <div className="pokemon-card-types">
        {types.map((type) => (
          <Badge key={type} color={type}>
            {type}
          </Badge>
        ))}
      </div>

      <div className="pokemon-card-stats">
        <StatBar
          label="HP"
          value={hp}
          max={POKEMON_STAT_MAX}
          color={primaryColor}
        />
        <StatBar
          label="ATK"
          value={atk}
          max={POKEMON_STAT_MAX}
          color={primaryColor}
        />
        <StatBar
          label="DEF"
          value={def}
          max={POKEMON_STAT_MAX}
          color={primaryColor}
        />
      </div>
    </button>
  );
}