import { getColorVar } from "@/utils/get-color-var";
import "./styles.css";

/**
 * @typedef {Object} BadgeProps
 * @property {ColorToken} color
 * Cor do badge. Determina borda, preenchimento e texto.
 *
 * @property {string} children
 * Texto renderizado dentro do badge.
 */

/**
 * Badge de texto colorido.
 *
 * @param {BadgeProps} props
 */
export function Badge({ color, children }) {
  return (
    <span
      className="badge-root"
      style={{ "--badge-color": getColorVar(color) }}
    >
      {children}
    </span>
  );
}