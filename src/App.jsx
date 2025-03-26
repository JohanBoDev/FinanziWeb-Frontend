import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "@/pages/inicio";
import Login from "@/pages/login-y-regisro/login";
import Registro from "@/pages/login-y-regisro/registro";
import PageCalculadoraAhorros from "@/pages/calculadoras/page-calculadora-ahorros";
import PageCalculadoraDeudas from "@/pages/calculadoras/page-calculadora-deudas";
import useTokenExpiration from "@/hooks/useTokenExpiracion"; 


const App = () => {
  useTokenExpiration(); // ✅ Verifica si el token expiró al cargar la app

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/iniciar-sesion" element={<Login />} />
        <Route path="/registrar" element={<Registro />} />
        <Route path="/calculadora-ahorros" element={<PageCalculadoraAhorros />} />
        <Route path="/calculadora-deudas" element={<PageCalculadoraDeudas />} />
      </Routes>
    </Router>
  );
};

export default App;
