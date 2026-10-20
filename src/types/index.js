/**
 * Token de cor usado por componentes de UI (ex: chips, badges).
 * Corresponde às variáveis de cor definidas em `src/index.css`.
 *
 * @typedef {'accent'|'normal'|'fire'|'water'|'electric'|'grass'|'ice'|'fighting'|'poison'|'ground'|'flying'|'psychic'|'bug'|'rock'|'ghost'|'dragon'} ColorToken
 */

/**
 * Habilidade de um Pokémon.
 *
 * @typedef {Object} PokemonAbility
 * @property {boolean} is_hidden
 * @property {number} slot
 * @property {PokemonResource} ability
 */

/**
 * Tipo de um Pokémon.
 *
 * @typedef {Object} PokemonType
 * @property {number} slot
 * @property {PokemonResource} type
 */

/**
 * Status de um Pokémon.
 *
 * @typedef {Object} PokemonStat
 * @property {number} base_stat
 * @property {number} effort
 * @property {PokemonResource} stat
 */

/**
 * Sprite de um Pokémon.
 *
 * @typedef {Object} PokemonSprites
 * @property {string|null} front_default
 * @property {string|null} front_shiny
 * @property {{ "official-artwork": { front_default: string|null } }} other
 */

/**
 * Detalhes de um Pokémon.
 *
 * @typedef {Object} Pokemon
 * @property {number} id
 * @property {string} name
 * @property {number} base_experience
 * @property {number} height
 * @property {number} weight
 * @property {boolean} is_default
 * @property {PokemonAbility[]} abilities
 * @property {PokemonType[]} types
 * @property {PokemonStat[]} stats
 * @property {PokemonSprites} sprites
 */

/**
 * Geração de jogos Pokémon.
 *
 * GET /generation/{id or name}
 *
 * @typedef {Object} Generation
 * @property {number} id
 * @property {string} name
 * @property {PokemonResource} main_region
 * @property {PokemonResource[]} pokemon_species
 * @property {PokemonResource[]} types
 */