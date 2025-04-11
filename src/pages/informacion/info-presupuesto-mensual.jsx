import '@/Styles/presupuesto_mensual.css'
import presupuesto from '@/assets/img/presupuesto_1.webp'
import { Link } from 'react-router-dom';
import { Wallet, Bell, TrendingUp, BarChart, PiggyBank } from "lucide-react";


const PresupuestoMensual = () => {
    return (
<div className="w-full min-h-screen gap-10 bg-cover bg-center bg-no-repeat bg-presupuesto relative flex flex-col lg:flex-row px-4 sm:px-10 py-20 lg:py-0 ">
  {/* Texto y cards */}
  <div className="w-full lg:w-1/2 flex flex-col justify-center gap-y-6">
    <h1 className="text-[#c0bcb8] text-4xl sm:text-6xl lg:text-[80px] tracking-wider uppercase text-center lg:text-left">
      Presupuesto Mensual
    </h1>
    <h2 className="text-lg sm:text-xl text-gray-200 font-semibold tracking-wide text-center lg:text-left">
      Controla tus ingresos, ajusta tus gastos y alcanza tus metas financieras más rápido.
    </h2>
    <h1 className="text-[#C0BCB8] text-4xl sm:text-6xl lg:text-[80px] tracking-wider uppercase text-center lg:text-left">
      Beneficios Clave
    </h1>

    {/* Grid de cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
      {/* Reutilizamos la misma estructura para las 4 cards */}
      {[
        {
          icon: <Wallet className="absolute top-2 w-12 h-12 text-white/80 drop-shadow-lg" />,
          title: "Organiza tus Gastos",
          text: "Divide tus ingresos en categorías esenciales.",
        },
        {
          icon: <Bell className="absolute top-2 w-12 h-12 text-white/80 drop-shadow-lg" />,
          title: "Evita Sorpresas",
          text: "Anticípate a gastos imprevistos con alertas inteligentes.",
        },
        {
          icon: <TrendingUp className="absolute top-2 w-12 h-12 text-white/80 drop-shadow-lg" />,
          title: "Optimiza tu Dinero",
          text: "Ajusta tu presupuesto en función de tus objetivos.",
        },
        {
          icon: <PiggyBank className="absolute top-2 w-12 h-12 text-white/80 drop-shadow-lg" />,
          title: "Ahorra sin Esfuerzo",
          text: "Identifica oportunidades de ahorro automático mes a mes.",
        },
      ].map((card, i) => (
        <div
          key={i}
          className="relative w-full bg-gray-500/20 rounded-2xl p-6 flex flex-col items-center justify-center text-white text-sm font-semibold shadow-md shadow-gray-900/40 backdrop-blur-xl"
        >
          {card.icon}
          <h3 className="mt-10 text-lg text-gray-200 tracking-wide font-bold text-center">
            {card.title}
          </h3>
          <p className="text-gray-300 text-center text-xs mt-2">{card.text}</p>
        </div>
      ))}
    </div>
  </div>

  <div className="hidden lg:relative lg:flex lg:w-1/2 lg:mt-0 lg:justify-center lg:items-center">
  <img className="w-full lg:h-screen object-cover" src={presupuesto} alt="Presupuesto" />

  <Link
    to="/presupuesto"
    className="bg-white text-[#000] text-sm font-bold 
      w-28 h-28 rounded-full 
      flex items-center justify-center
      shadow-[0_4px_30px_rgba(160,160,160,0.5)]  
      drop-shadow-xl backdrop-blur-lg
      transition-all duration-300 ease-in-out animate-pulse
      hover:scale-110 hover:shadow-[0_4px_30px_rgba(160,160,160,0.5)]
      hover:cursor-pointer

      absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
  >
    Probar ahora
  </Link>
</div>

</div>


    )
}
export default PresupuestoMensual;