import './styles.css';

function SearchPokemon({ value, onChange }) {
  return (
    <div className="search-pokemon">
      <input
        type="text"
        placeholder="Pesquise seu Pokémon"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export { SearchPokemon };