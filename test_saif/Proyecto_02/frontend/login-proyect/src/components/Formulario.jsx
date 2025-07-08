import "./Formulario.css"
import { useState } from "react"

// le pasamos las props para poder usarlas 
export function Formulario({ setUser }) {

    // Estos son los estados 
    const[usuario, setUsuario] = useState('')
    const[password, setPassword] = useState('')
    const[error,setError]= useState(false)

    //Cuando precionemos el boton guarda los datos
    const handleSudmit = (e) => {
        e.preventDefault()
        //Si un campo no esta lleno nos envia un mensaje de error
        if (usuario === '' || password === '') {
            setError(true)
            return
        }
        setError(false)

        setUser([usuario])

    }

    return(
        <section>
            <h1>Login</h1>
            <form className='formulario'
                onSubmit={handleSudmit}
            >
                <label >Usuario</label>
                <input type="text"
                    value={usuario} 
                    //funcion flecha callback
                    onChange={e=> setUsuario(e.target.value)}
                />
                <label >Password</label>
                <input type="password"
                    value={password} 
                    onChange={e=> setPassword(e.target.value)}
                />
                <button className="botonInicio">Iniciar Sesión</button>
            </form>
            {error && <p>Todos los campos son obligatorios</p>}
        </section>
    ) 
}
export default Formulario