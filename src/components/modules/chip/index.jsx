import { getColorVar } from "@/utils/get-color-var";
import "./styles.css";

/**
 * @typedef {Object} ChipProps
 * @property {string} name 
 * Identificador acessível do chip, usado como `aria-label`.
 * 
 * @property {ColorToken} color
 * Cor base do chip. Determina borda, preenchimento e texto.
 * 
 * @property {boolean} selected
 * Define se o chip está no estado selecionado.
 * 
 * @property {() => void} onClick 
 * Ação executada ao clicar no chip.
 * 
 * @property {string} children
 * Texto renderizado dentro do chip.
 */

/**
 * Chip de seleção.
 * 
 * @param {ChipProps} props 
 */
export function Chip({ name, color, selected, children, onClick }) {
  return (
    <button
      type="button"
      className="chip-root"
      onClick={onClick}
      data-selected={selected}
      aria-pressed={selected}
      aria-label={name}
      style={{ "--chip-color": getColorVar(color) }}
    >
      {children}
    </button>
  );
}