import React, { useState, useEffect } from 'react';
import PokedexScreen from './PokedexScreen';
import PokemonForm from './PokemonForm';
import '../styles/pokedex.css';

function Pokedex() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState(null);

  const randomId = Math.floor(Math.random() * 806 + 1);
  const [pokemonID, setPokemonId] = useState(randomId);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`)
      .then(res => res.json())
      .then(data => {
        setPokemon(data);
        setLoading(false);
        setError(false);
      })
      .catch(err => {
        setLoading(false);
        setError(true);
      });
  }, [pokemonID]); // 👈 importante: vuelve a cargar si cambia el ID

  return (
    <div className="pokedex">
      {/* Tu estructura visual, como ya la tenías */}
      <div className="pokedex-left">
        <div className="pokedex-left-top">
          <div className={`light is-sky is-big ${loading && 'is-animated'}`} />
          <div className="light is-red" />
          <div className="light is-yellow" />
          <div className="light is-green" />
        </div>

        <div className="pokedex-screen-container">
          <PokedexScreen pokemon={pokemon} error={error} loading={loading} />
        </div>

        <div className="pokedex-left-bottom">
          <div className="pokedex-left-bottom-lights">
            <div className="light is-blue is-medium" />
            <div className="light is-green is-large" />
            <div className="light is-orange is-large" />
          </div>
          <PokemonForm 
            setPokemonId={setPokemonId}
            setLoading={setLoading}
            setError={setError}
          />
        </div>
      </div>

      <div className="pokedex-right-front" />
      <div className="pokedex-right-back" />
    </div>
  );
}

export default Pokedex;