import '@/Styles/backgrounds.css'
import DebtManagementSection from "@/layouts/gridDeudas";


const Ahorro = () => {
  return (
<div className="bg-calculadora py-10 px-4 sm:px-6 lg:px-12">
  <div className="flex flex-col justify-center text-white text-2xl">
    <h1 className="text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-8xl mt-5 text-center tracking-wider uppercase drop-shadow-lg">
      Gestión de deudas
    </h1>
    <p className="mt-4 text-center text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
      Aprende a calcular, planificar y optimizar tus pagos para reducir intereses y mejorar tu estabilidad financiera.
    </p>

    <DebtManagementSection />
  </div>
</div>

  );
};

export default Ahorro;


