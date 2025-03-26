import '@/Styles/presupuesto_mensual.css'
import img from '@/assets/img/presupuestoMensual.png'
import presupuesto from '@/assets/img/presupuesto_1.png'
import { Wallet, Bell, TrendingUp, BarChart, PiggyBank } from "lucide-react";


const PresupuestoMensual = () => {
    return (
        <div className='w-full h-screen bg-cover bg-center bg-no-repeat bg-presupuesto relative flex flex-row'>
            <div className='pl-20 pt-10 flex flex-col justify-center gap-y-2 text-start w-1/2'>
                <h1 className="text-[#c0bcb8] text-[80px] tracking-wider uppercase">
                    Presupuesto Mensual
                </h1>
                <h2 className='text-2xl text-gray-200 text-start font-semibold tracking-wide '>
                    Controla tus ingresos, ajusta tus gastos y alcanza tus metas financieras más rápido.
                </h2>
                <h1 className='text-[#C0BCB8] text-[80px] tracking-wider uppercase'>
                    Beneficios Clave
                </h1>

                {/* Grid de Cards */}
                <div className="grid grid-cols-2 gap-5 mt-5">

                    {/* Card 1: Organiza tus Gastos */}
                    <div className="relative w-full bg-gray-500/20 rounded-2xl p-6 flex flex-col items-center justify-center text-white text-sm font-semibold shadow-md shadow-gray-900/40 backdrop-blur-xl">
                        <Wallet className="absolute top-2 w-12 h-12 text-white/80 drop-shadow-lg" />
                        <h3 className="mt-8 text-lg text-gray-200 tracking-wide font-bold">Organiza tus Gastos</h3>
                        <p className="text-gray-300 text-center text-xs mt-2">
                            Divide tus ingresos en categorías esenciales.
                        </p>
                    </div>

                    {/* Card 2: Evita Sorpresas */}
                    <div className="relative w-full bg-gray-500/20 rounded-2xl p-6 flex flex-col items-center justify-center text-white text-sm font-semibold shadow-md shadow-gray-900/40 backdrop-blur-xl">
                        <Bell className="absolute top-2 w-12 h-12 text-white/80 drop-shadow-lg" />
                        <h3 className="mt-8 text-lg text-gray-200 tracking-wide font-bold">Evita Sorpresas</h3>
                        <p className="text-gray-300 text-center text-xs mt-2">
                            Anticípate a gastos imprevistos con alertas inteligentes.
                        </p>
                    </div>

                    {/* Card 3: Optimiza tu Dinero */}
                    <div className="relative w-full bg-gray-500/20 rounded-2xl p-6 flex flex-col items-center justify-center text-white text-sm font-semibold shadow-md shadow-gray-900/40 backdrop-blur-xl">
                        <TrendingUp className="absolute top-2 w-12 h-12 text-white/80 drop-shadow-lg" />
                        <h3 className="mt-8 text-lg text-gray-200 tracking-wide font-bold">Optimiza tu Dinero</h3>
                        <p className="text-gray-300 text-center text-xs mt-2">
                            Ajusta tu presupuesto en función de tus objetivos.
                        </p>
                    </div>

                    {/* Card 4: Ahorra sin Esfuerzo */}
                    <div className="relative w-full bg-gray-500/20 rounded-2xl p-6 flex flex-col items-center justify-center text-white text-sm font-semibold shadow-md shadow-gray-900/40 backdrop-blur-xl">
                        <PiggyBank className="absolute top-2 w-12 h-12 text-white/80 drop-shadow-lg" />
                        <h3 className="mt-8 text-lg text-gray-200 tracking-wide font-bold">Ahorra sin Esfuerzo</h3>
                        <p className="text-gray-300 text-center text-xs mt-2">
                            Identifica oportunidades de ahorro automático mes a mes.
                        </p>
                    </div>

                </div>

            </div>

{/* Contenedor de Imagen */}
<div className='relative w-1/2 h-full'>
    <img className='absolute right-0 top-0 h-full' src={presupuesto} alt="" />

    {/* Botón en la Esfera */}
    <button className='
    bg-white text-[#000] text-md font-bold 
    w-28 h-28 rounded-full absolute 
    left-[56%] top-[45%] translate-x-[-50%] translate-y-[-50%]
    flex items-center justify-center
    shadow-[0_4px_30px_rgba(160, 160, 160,0.5)]  
    drop-shadow-xl backdrop-blur-lg
    transition-all duration-300 ease-in-out
    animate-pulse
    hover:scale-110 hover:shadow-[0_4px_30px_rgba(160, 160, 160,0.5)]
    hover:cursor-pointer
'>
    Probar ahora
</button>


</div>

        </div>

    )
}
export default PresupuestoMensual;