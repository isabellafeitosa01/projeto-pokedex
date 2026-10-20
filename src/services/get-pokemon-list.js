import { http } from "@/infra/http";

/**
 * Resposta da listagem paginada.
 *
 * GET /pokemon?limit=20&offset=0
 *
 * @typedef {Object} PokemonListResponse
 * @property {number} count
 * @property {string|null} next
 * @property {string|null} previous
 * @property {PokemonListItem[]} results
 */

/**
 * Busca uma página da lista de Pokémon.
 *
 * @param {number} [page]
 * Número da página que será buscada.
 *
 * @returns {Promise<PokemonListResponse>}
 */
export async function getPokemonList(page = 1) {
    const limit = 151;
    const offset = (page - 1) * limit;

    return http({ route: `/pokemon?limit=${limit}&offset=${offset}` });
}

// limit = 10
// offset = 1 // 1 - 10
// offset = 11 // 11 - 20
// offset = 21 // 21 - 30