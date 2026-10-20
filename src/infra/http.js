const BASE_URL = "https://pokeapi.co/api/v2";

/**
 * Realiza uma requisição HTTP para a API.
 *
 * @template T
 *
 * @param {Object} params
 * @param {string} params.route
 * Rota da API que será acessada.
 *
 * @param {RequestInit} [params.config]
 * Configurações adicionais da requisição, como:
 * - method
 * - headers
 * - body
 *
 * @returns {Promise<T>}
 * Retorna os dados da resposta já convertidos para JSON.
 *
 * @example
 * const pokemon = await http({
 *   route: "/pokemon/pikachu"
 * });
 */
export async function http({ route, config = {} }) {
    const response = await fetch(`${BASE_URL}${route}`, {
        headers: {
            "Content-Type": "application/json",
            ...config.headers,
        },
        ...config
    });

    return response.json();
}

