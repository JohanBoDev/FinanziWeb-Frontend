import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wallet, Home, Calculator, TrendingUp, PiggyBank, ClipboardList, DollarSign, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isAuthenticated, logout  } = useAuth();

  return (
    <>
      {/* Botón de menú en la esquina superior izquierda */}
      <button
        onClick={() => setMenuOpen(true)}
        className="fixed top-5 left-5 z-50 p-2 bg-transparent text-white rounded-full hover:bg-transparent backdrop-blur-md transition hover:cursor-pointer"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Sidebar Animado */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "-100%" }}  // Comienza fuera de la pantalla
            animate={{ x: 0 }}        // Entra deslizándose
            exit={{ x: "-100%" }}      // Sale deslizándose
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 h-full w-64 bg-gray-900/30 backdrop-blur-md text-white shadow-lg z-50 flex flex-col p-6"
          >
            {/* Botón para cerrar */}
            <button
              onClick={() => setMenuOpen(false)}
              className="self-end mb-4 p-2 bg-[#FB2C36] rounded-full hover:bg-gray-600 transition"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Links de Navegación */}
            <nav className="space-y-4">
              <Link to="/" className="flex items-center gap-3 p-3 hover:bg-[#FB2C36]/70 rounded-md transition">
                <Home className="w-5 h-5" />
                Inicio
              </Link>
              <a href="#presupuesto-mensual" className="flex items-center gap-3 p-3 hover:bg-[#FB2C36]/70 rounded-md transition">
                <Wallet className="w-5 h-5" />
                Presupuesto Mensual
              </a>
              <a href="#calculadoras" className="flex items-center gap-3 p-3 hover:bg-[#FB2C36]/70 rounded-md transition">
                <Calculator className="w-5 h-5" />
                Calculadoras
              </a>
              <a href="#gestion-de-deudas" className="flex items-center gap-3 p-3 hover:bg-[#FB2C36]/70 rounded-md transition">
                <TrendingUp className="w-5 h-5" />
                Gestión de Deudas
              </a>
              <a href="#metas-de-ahorro" className="flex items-center gap-3 p-3 hover:bg-[#FB2C36]/70 rounded-md transition">
                <PiggyBank className="w-5 h-5" />
                Metas de Ahorro
              </a>
              <a href="#gestion-de-gastos" className="flex items-center gap-3 p-3 hover:bg-[#FB2C36]/70 rounded-md transition">
                <ClipboardList className="w-5 h-5" />
                Gestión de Gastos
              </a>
              <a href="#conversor-de-moneda" className="flex items-center gap-3 p-3 hover:bg-[#FB2C36]/70 rounded-md transition">
                <DollarSign className="w-5 h-5" />
                Conversor de Moneda
              </a>
            </nav>

            {isAuthenticated ? (
              <>
                <Link
                  to="/dashboard"
                  className="mt-6 block text-center p-3 border border-gray-400 rounded-lg hover:bg-gray-700/30 transition"
                >
                  Dashboard
                </Link>

                <button
                  onClick={logout}
                  className="mt-6 block text-center p-3 border border-gray-400 rounded-lg hover:bg-red-500 transition"
                >
                  Cerrar Sesión
                </button>
              </>
            ) : (
              <Link
                to="/iniciar-sesion"
                className="mt-6 block text-center p-3 border border-gray-400 rounded-lg hover:bg-red-500 transition"
              >
                Iniciar Sesión
              </Link>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
