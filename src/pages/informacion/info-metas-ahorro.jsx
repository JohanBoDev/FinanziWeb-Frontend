import '@/styles/backgrounds.css'
import Ahorros from '@/assets/img/ahorros.webp'
import {BentoGridSecondDemo} from '@/components/bento-ahorros'

const MetasAhorro = () => {
  return (
<div className="bg-conversor min-h-screen flex flex-col lg:flex-row justify-evenly items-center text-white text-2xl px-4 py-10">
  {/* Imagen */}
  <div className="w-full lg:w-[600px] mb-10 lg:mb-0">
    <img className="w-full h-72 sm:h-96 lg:h-screen object-cover rounded-xl" src={Ahorros} alt="Imagen de ahorros" />
  </div>

  {/* Texto + BentoGrid */}
  <div className="flex flex-col gap-y-10 items-center w-full max-w-5xl">
    <h1 className="text-[#C0BCB8] text-4xl sm:text-5xl lg:text-7xl text-center tracking-wider uppercase drop-shadow-lg">
      Metas de ahorro
    </h1>
    <div className="w-full">
      <BentoGridSecondDemo />
    </div>
  </div>
</div>

  );
}

export default MetasAhorro;