import { http } from "@/infra/http";

/**
 * Detalhes de um Pokémon.
 *
 * GET /pokemon/{id or name}
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
 * Busca os detalhes de um Pokémon pelo nome.
 *
 * @param {string} name
 * Nome do Pokémon que será buscado.
 *
 * @returns {Promise<Pokemon>}
 */
export async function getPokemonByName(name) {
    return http({ route: `/pokemon/${name}` });
}