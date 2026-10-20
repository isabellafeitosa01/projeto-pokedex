/**
 * @type {Record<ColorToken, string>}
 */

const COLOR_VARS = {
    accent: "var(--accent)",
    normal: "var(--type-normal)",
    fire: "var(--type-fire)",
    water: "var(--type-water)",
    electric: "var(--type-electric)",
    grass: "var(--type-grass)",
    ice: "var(--type-ice)",
    fighting: "var(--type-fighting)",
    poison: "var(--type-poison)",
    ground: "var(--type-ground)",
    flying: "var(--type-flying)",
    psychic: "var(--type-psychic)",
    bug: "var(--type-bug)",
    rock: "var(--type-rock)",
    ghost: "var(--type-ghost)",
    dragon: "var(--type-dragon)",
};

/**
 * @param {ColorToken} color
 * @returns {string}
 */
export function getColorVar(color) {
    return COLOR_VARS[color];
}