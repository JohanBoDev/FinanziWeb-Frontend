import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full ">
<nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-white">
  
<div className="hidden md:flex space-x-10 text-lg font-medium tracking-wide">
  <a href="#como-usar" className="relative group text-white">
    ¿Cómo usar?
    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
  </a>
  <a href="#calculadoras" className="relative group text-white">
    Calculadoras
    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
  </a>
  <a href="#testimonios" className="relative group text-white">
    Testimonios
    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
  </a>
</div>



  {/* Iniciar Sesión */}
  <div className="hidden md:flex">
    <a href="#iniciar-sesion" className="block py-2 text-white text-center font-medium rounded-lg px-6 border border-gray-400 hover:bg-red-500 hover:text-white transition-all">
      Iniciar Sesión
    </a>
  </div>

  {/* Mobile Menu Button */}
  <div className="md:hidden">
    <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-2xl">
      ☰
    </button>
  </div>

</nav>


      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-red-900/80 backdrop-blur-md p-6 text-white">
          <a href="#como-usar" className="block py-2 hover:text-yellow-400">¿Cómo usar?</a>
          <a href="#calculadoras" className="block py-2 hover:text-yellow-400">Calculadoras</a>
          <a href="#testimonios" className="block py-2 hover:text-yellow-400">Testimonios</a>
          <a href="#iniciar-sesion" className="block py-2 mt-4 text-white text-center font-bold rounded-lg px-4 border border-white hover:bg-white hover:text-black transition-all">
  Iniciar Sesión
</a>

        </div>
      )}
    </header>
  );
};

export default Header;
