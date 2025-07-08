import './App.css';

import Pokedex from './components/Pokedex';

import React, { useState } from 'react';

function App() {
  //estados
  const [pokemon, setPokemonId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <div className="App">
      <Pokedex/>
    </div>
  );
}

export default App;
