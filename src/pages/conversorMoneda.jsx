import '../Styles/backgrounds.css'
import CurrencyConverter from '../layouts/conversorMoneda';
import img from '../assets/img/prueba_1.webp';

const Conversor = () => {
  return (
<div className="bg-conversor min-h-screen flex flex-col lg:flex-row text-white text-2xl">
  {/* Imagen */}
  <div className="w-full lg:w-1/3 h-64 lg:h-screen">
    <img className="w-full h-full object-cover" src={img} alt="Imagen de conversor" />
  </div>

  {/* Contenido */}
  <div className="flex flex-col justify-center items-center w-full px-6 py-10 lg:py-0 lg:h-screen text-center" id="conversor-de-moneda">
    <h1 className="text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-8xl mt-2 lg:mt-5 tracking-wider uppercase drop-shadow-lg">
      Conversor de <span className="text-[#c43a43] lg:text-glow">Moneda</span>
    </h1>

    {/* Texto motivacional */}
    <h2 className="text-gray-400 text-base sm:text-lg md:text-xl lg:text-2xl mt-4 max-w-xl">
      Convierte divisas en segundos y toma decisiones inteligentes para tus transacciones. 
      Mantente informado sobre el valor real de tu dinero en cualquier parte del mundo.
    </h2>

    <CurrencyConverter />
  </div>
</div>


  );
}

export default Conversor;