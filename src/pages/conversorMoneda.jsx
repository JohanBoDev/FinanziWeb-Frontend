import '../Styles/backgrounds.css'
import CurrencyConverter from '../layouts/conversorMoneda';
import img from '../assets/img/prueba_1.png';

const Conversor = () => {
  return (
<div className="bg-conversor h-screen  flex  text-white text-2xl">
  <div className='flex w-1/3 h-screen'>
    <img className='w-full h-screen object-cover' src={img} alt="" />
  </div>
  <div className=' flex flex-col justify-center items-center w-full h-screen'>
  <h1 className="text-gray-200 text-8xl mt-5 text-center tracking-wider uppercase drop-shadow-lg">
    Conversor de <span className='text-[#c43a43] text-glow'>Moneda</span>
  </h1>

  {/* Texto motivacional */}
  <h2 className="text-gray-400 text-center text-2xl mt-4 max-w-2xl mx-auto">
    Convierte divisas en segundos y toma decisiones inteligentes para tus transacciones. 
    Mantente informado sobre el valor real de tu dinero en cualquier parte del mundo.
  </h2>
  
  <CurrencyConverter />
  </div>
</div>

  );
}

export default Conversor;