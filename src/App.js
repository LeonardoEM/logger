import React from 'react';  
import './App.css';
import Formulario from './Formulario';
import Bienvenida from './bienvenida';
import Registro from './registro';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import './materialize.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Formulario />} />
        <Route path="/bienvenida/:usuario" element={<Bienvenida />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </Router>

  );
}

export default App;
