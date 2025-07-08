import './Home.css'

export function Home({ user, setUser }) {
    // para que se limpie
    const handleLogout = () => {
        setUser([])
    }

    return(
        <div>
            <h1>BIENVENIDO</h1>
            <h2>{user}</h2>
            <button
                onClick={handleLogout}
            >Cerrar sesion</button>

        </div>
    )
}

export default Home