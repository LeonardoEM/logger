import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Bienvenida() {
    const { usuario: usuarioParam } = useParams();
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState("");



    useEffect(() => {
    const storedUser = localStorage.getItem("usuario");
    if (storedUser) {
      setUsuario(storedUser);
    } else {
      // Si no hay sesión, lo regresamos al login
      navigate("/");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("usuario");
    navigate("/");
  };

    return (
    <div className="bienvenida">
      <h1>Bienvenido, {usuario}!</h1>
      <p>Estamos encantados de tenerte aquí.</p>
      <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
    );
}  
export default Bienvenida; 