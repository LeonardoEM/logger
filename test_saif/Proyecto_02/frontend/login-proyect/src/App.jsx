import{ Formulario } from './components/Formulario'
import{ Home } from './components/Home'

import { useState } from 'react'

import './App.css'

function App() {
  
  // si tenemos un usuario nos deja pasar a la pagina home
  const[user, setUser] = useState([]) //arreglo vacio

  return (
    <div>
      { //operador ternario 
        !user.length > 0 
        ? <Formulario setUser={setUser} /> // lo pasamos por medio de props
        : <Home user={user} setUser={setUser}/>
      }
      
    </div>
  
  )
}

export default App
