import { http } from "@/infra/http";

/**
 * Busca uma geração de jogos Pokémon.
 *
 * @param {number|string} id
 * Número ou nome da geração que será buscada.
 *
 * @returns {Promise<Generation>}
 */
export async function getGeneration(id) {
    return http({ route: `/generation/${id}` })
}