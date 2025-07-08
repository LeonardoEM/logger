import Logo from "./login.png"
import './App.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Logger({usuario,Contrasena}){
    const [inputUsuario, setInputUsuario] = useState("");
    const [InputContrasena, setInputContrasena] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
    const storedUser = localStorage.getItem("usuario");
    if (storedUser) {
      navigate(`/bienvenida/${storedUser}`);
    }
  }, [navigate]);
 

    const handleLogin= () => {
        if(inputUsuario === "" || InputContrasena === "") {
        setError(true);
        }else {
        setError(false);
        navigate(`/bienvenida/${inputUsuario}`);
    }
}    
        return(
            <div>
                <div className="input-field col s12">
                    <label for="usuario"className="Element_label">{usuario}</label>
                    <input 
                    id="usuario"
                    className="Element_input" 
                    type="Text" 
                    //placeholder={usuario}
                    value={inputUsuario}
                    onChange={(e) =>setInputUsuario(e.target.value)}
                ></input>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <label for="password"className="Element_label">{Contrasena}</label>
                        <input 
                        id="password"
                        className="Element_input" 
                        type="password" 
                        //placeholder={Contrasena}
                        value={InputContrasena}
                        onChange={(e) => setInputContrasena(e.target.value)} ></input>
                    </div>
                </div>
                <button className="btn waves-effect waves-light" onClick={handleLogin}>
                    <i className="material-icons right">Ingresar</i></button>
                {error && <p className="error">Por favor, completa todos los campos.</p>}

                <br></br>
                <button className="btn waves-effect waves-light" onClick={() => navigate('/registro')}>
                    <i className="material-icons right">Registrar</i></button>
    
            </div>

        )

}

function Formulario(){
    return(
        <div className="Formulario">
            <img className="img" src={Logo} alt="foto de logotipo"></img>
            <Logger usuario='Perfil' Contrasena='Contrasena'/>  
        </div>
        //<Inputs Titulo='Contraseña'/>
        //<button className="Element_button">Ingresar</button>
    )
}

export default Formulario;