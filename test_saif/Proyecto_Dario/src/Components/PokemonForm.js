import React, { useState } from 'react';

function PokemonForm({ setPokemonId, setLoading, setError }) {
  const [pokemon, setPokemon] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    
    if (pokemon !== '') {
      // Estará cargando porque hará una petición a la API
      setError(false);
      setLoading(true);
      
      // Verifica si es un número o un nombre
      const pokemonID = window.isNaN(parseInt(pokemon)) ? pokemon.toLowerCase() : pokemon;
      setPokemonId(pokemonID);
      setPokemon('');
      return;
    }
    
    // Si manda el formulario vacío, hay un error
    setError(true);
  };

  return (
    <form className="pokemon-form" onSubmit={handleSubmit}>
      <input
        className="pokemon-input"
        type="text"
        name="pokemon"
        value={pokemon}
        placeholder="Busca tu pokemon"
        // Actualizas el valor del input cuando el usuario teclea
        onChange={e => setPokemon(e.target.value)}
        autoComplete="off"
      />
      <input type="submit" className="pokemon-btn" value="" />
    </form>
  );
}

export default PokemonForm