import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react"; 
import './materialize.css';

function Registro({usuario,Contrasena}){
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

    const handleRegister = () => {
        if(inputUsuario === "" || InputContrasena === "") {
            setError(true);
        } else {
            localStorage.setItem("usuario", inputUsuario);
            localStorage.setItem("contrasena", InputContrasena);
            setError(false);
            navigate(`/bienvenida/${inputUsuario}`);
        }
    };

    return(
        <div>
            <div className="input-field col s12">
                <label htmlFor="usuario" className="Element_label">{usuario}</label>
                <input 
                    id="usuario"
                    className="Element_input" 
                    type="text" 
                    value={inputUsuario}
                    onChange={(e) => setInputUsuario(e.target.value)}
                />
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <label htmlFor="password" className="Element_label">{Contrasena}</label>
                    <input 
                        id="password"
                        className="Element_input" 
                        type="password" 
                        value={InputContrasena}
                        onChange={(e) => setInputContrasena(e.target.value)} 
                    />
                </div>
            </div>
            <button className="btn waves-effect waves-light" onClick={handleRegister}>
                <i className="material-icons right">Registrar</i>
            </button>
            {error && <p className="error">Por favor, completa todos los campos.</p>}
        </div>
    );
}
export default Registro;
