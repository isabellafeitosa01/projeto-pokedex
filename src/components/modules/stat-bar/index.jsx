import { getColorVar } from "@/utils/get-color-var";
import "./styles.css";

/**
 * @typedef {Object} StatBarProps
 * @property {string} label
 * Rótulo do status (ex: "HP", "ATK", "DEF").
 *
 * @property {number} value
 * Valor atual do status, esperado entre 0 e `max`.
 *
 * @property {number} max
 * Valor usado como referência para 100% da barra.
 *
 * @property {ColorToken} color
 * Cor de preenchimento da barra.
 */

/**
 * Barra de status de um Pokémon.
 *
 * @param {StatBarProps} props
 */
export function StatBar({ label, value, max, color }) {
  const percent = Math.max(4, Math.min(100, (value / max) * 100));

  return (
    <div
      className="stat-bar-root"
      role="progressbar"
      aria-label={label}
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={max}
    >
      <span className="stat-bar-label">{label}</span>
      <div className="stat-bar-track">
        <div
          className="stat-bar-fill"
          style={{
            width: `${percent}%`,
            "--bar-color": getColorVar(color),
          }}
        />
      </div>
    </div>
  );
}