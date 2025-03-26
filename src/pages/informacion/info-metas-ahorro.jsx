import '@/styles/backgrounds.css'
import Ahorros from '@/assets/img/ahorros.png'
import {BentoGridSecondDemo} from '@/components/bento-ahorros'

const MetasAhorro = () => {
  return (
    <div className="bg-conversor h-screen  flex justify-evenly text-white text-2xl">
      <div className=''>
        <img className='h-screen object-cover w-[600px]' src={Ahorros} alt="Imagen de ahorros" />
      </div>
      <div className='flex flex-col gap-y-16'>
        <h1 className="text-[#C0BCB8] text-7xl mt-15 text-center tracking-wider uppercase drop-shadow-lg "> Metas de ahorro  </h1>
        <div className='flex justify-center items-center w-full '><BentoGridSecondDemo /></div>
        
      </div>
    </div>
  );
}

export default MetasAhorro;