import "./PokedexScreen.css"
import Stat from './Stat.js'
import ErrorPokemon from '../img/error.gif'
import LoadingPokemon from '../img/carga.png'

function PokedexScreen({ pokemon, loading, error }){
  // Si hay un error en la petición a la API, devuelve este componente.
  if(error){
    return (
      <div className="pokedex-screen">
        <img
          src={ErrorPokemon}
          alt="Hubo un error buscando tu pokemon"
          className="pokedex-no-screen"
        />
      </div>
    )
  }

  // Si ya pasamos la validación del error...
  return (
    <div className="pokedex-screen">
      { !pokemon || loading ? // Si no hay pokemon o si esta cargando
        <img
          src={LoadingPokemon}
          alt="Aún no hay ningun pokemon"
          className="pokedex-no-screen"
        /> : // Todo bien devuelve un pokemon
        <div className="pokemon-info">
          <h2 className="pokemon-name">{pokemon.name}</h2>
          <img
            className="pokemon-img"
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
          />
          <ul className="pokemon-stats">
            {pokemon.stats.map(item => <Stat key={item.stat.name} item={item}/>)}
          </ul> 
        </div>
      }
    </div>
  )
}

export default PokedexScreen

