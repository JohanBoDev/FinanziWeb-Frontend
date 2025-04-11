import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Page Inicio Informativa
import Inicio from "@/pages/inicio";
//Page Login y Registro
import Login from "@/pages/login-y-regisro/login";
import Registro from "@/pages/login-y-regisro/registro";
//Page Calculadoras
import PageCalculadoraAhorros from "@/pages/calculadoras/page-calculadora-ahorros";
import PageCalculadoraDeudas from "@/pages/calculadoras/page-calculadora-deudas";
import PageCalculadoraIntereses from "./pages/calculadoras/page-calculadora-intereses";
import PageCalculadoraInversiones from "./pages/calculadoras/page-calculadora-inversiones";
import PageCalculadoraHipoteca from "./pages/calculadoras/page-calculadora-hipoteca";
//Page presupuesto
import PaginaPresupuesto from "@/pages/presupuesto/paginaPresupuesto";
//Hook de expiración de token
import useTokenExpiration from "@/hooks/useTokenExpiracion"; 
// Componente de ruta protegida
import RutaProtegida from "@/components/RutaProtegida";
import GoogleCallback from "@/components/GoogleCallback";

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
        <Route path="/calculadora-intereses" element={<PageCalculadoraIntereses />} />
        <Route path="/calculadora-inversiones" element={<PageCalculadoraInversiones />} />
        <Route path="/calculadora-hipoteca" element={<PageCalculadoraHipoteca />} />
        <Route path="/google-login-success" element={<GoogleCallback />} />
        
        {/* Ruta protegida para la pagina presupuesto */}
        <Route
          path="/presupuesto"
          element={
            <RutaProtegida>
              <PaginaPresupuesto />
            </RutaProtegida>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
