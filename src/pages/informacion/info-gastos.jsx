import {GlowingEffectDemo} from '@/layouts/gridGastos.jsx'

const Gastos = () => {
    return (
    <div className="bg-calculadora h-screen py-20 flex flex-col justify-center text-white text-2xl">
        <h1 className="text-gray-200 text-8xl mt-10 text-center tracking-wider uppercase drop-shadow-lg">
            Gestion de gastos
        </h1> 
      
        <p className="mt-4 text-center text-xl text-gray-300">
          Aprende a calcular, planificar y optimizar tus pagos para reducir intereses y mejorar tu estabilidad financiera.
        </p>
        <div className="flex justify-center items-center w-full py-10 px-20">
            <GlowingEffectDemo />
            </div>
           </div>
        );

}

export default Gastos;
