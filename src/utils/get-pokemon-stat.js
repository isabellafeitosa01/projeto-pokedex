/**
 * Valor de referência usado como 100% nas barras de status.
 */
export const POKEMON_STAT_MAX = 150;

/**
 * Busca o valor de um status específico de um Pokémon.
 *
 * @param {Pokemon} pokemon
 * @param {string} statName
 * Nome do status na PokéAPI (ex: "hp", "attack", "defense").
 *
 * @returns {number}
 */

export function getPokemonStat(pokemon, statName) {
    return pokemon.stats.find((s) => s.stat.name === statName).base_stat;
}