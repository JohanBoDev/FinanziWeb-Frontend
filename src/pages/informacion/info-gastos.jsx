import {GlowingEffectDemo} from '@/layouts/gridGastos.jsx'

const Gastos = () => {
    return (
<div className="bg-calculadora min-h-screen py-10 px-4 sm:px-8 lg:px-20 flex flex-col justify-center text-white text-2xl">
  <h1 className="text-4xl sm:text-6xl lg:text-8xl mt-10 text-center tracking-wider uppercase drop-shadow-lg">
    Gestión de gastos
  </h1>

  <p className="mt-4 text-center text-base sm:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto">
    Aprende a calcular, planificar y optimizar tus pagos para reducir intereses y mejorar tu estabilidad financiera.
  </p>

  <div className="flex justify-center items-center w-full py-10">
    <div className="w-full max-w-7xl">
      <GlowingEffectDemo />
    </div>
  </div>
</div>

        );

}

export default Gastos;
