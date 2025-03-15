import '../Styles/calculadora.css'
import DebtManagementSection from "../layouts/gridDeudas";


const Ahorro = () => {
  return (
    <div className="bg-calculadora py-10">

      <div className="flex flex-col  justify-center text-white text-2xl">
        <h1 className="text-gray-200 text-8xl mt-5 text-center tracking-wider uppercase drop-shadow-lg">
          Gestion de deudas
        </h1>
        <p className="mt-4 text-center text-xl text-gray-300">
          Aprende a calcular, planificar y optimizar tus pagos para reducir intereses y mejorar tu estabilidad financiera.
        </p>
        <DebtManagementSection />
      </div>
    </div>
  );
};

export default Ahorro;
