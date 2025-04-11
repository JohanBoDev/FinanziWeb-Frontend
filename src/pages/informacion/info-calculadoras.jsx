import '@/Styles/backgrounds.css'
import { LinkIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Calculadoras = () => {
    return (
        <div className="bg-calculadora min-h-screen flex flex-col items-center justify-center p-10 md:p-20" id="calculadoras">
            <h1 className="text-gray-200 text-5xl sm:text-7xl lg:text-9xl mb-5 tracking-wider uppercase drop-shadow-lg text-center">
                Calculadoras
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-6 gap-4 w-full max-w-7xl   py-10">

                {/* Calculadora de Ahorros */}
                <div className="relative xl:col-span-2 xl:row-span-3 bg-[#ac3442] border border-white/20 rounded-xl flex flex-col items-center justify-center text-2xl font-semibold shadow-lg shadow-gray-800/40 backdrop-blur-md p-6 transition-all duration-500 ease-in-out hover:scale-102 hover:shadow-red-500/20 hover:backdrop-blur-2xl">

                    <h2 className="text-xl sm:text-2xl xl:text-3xl text-white font-semibold text-center">
                        Calculadora de Ahorros
                    </h2>
                    <p className="text-sm sm:text-base xl:text-lg mt-2 text-center text-gray-300">
                        Estima el crecimiento de tus ahorros con interés compuesto y contribuciones periódicas.
                    </p>

                    {/* Overlay con blur que aparece en hover */}
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-xs opacity-0 transition-opacity duration-500 hover:opacity-100 flex items-center justify-center rounded-xl">
                        <Link to="/calculadora-ahorros" className="text-base text-white sm:text-xl xl:text-2xl font-bold flex items-center gap-2">
                            Probar ahora
                            <LinkIcon className="w-6 h-6 text-white opacity-80 transition-all duration-300 hover:opacity-100 hover:scale-110" />
                        </Link>
                    </div>
                </div>

                {/* Calculadora de Deudas */}
                <div className="relative xl:col-span-2 xl:row-span-3 bg-[#ac3442] border border-white/20 rounded-xl flex flex-col items-center justify-center text-2xl font-semibold shadow-lg shadow-gray-800/40 backdrop-blur-md p-6 transition-all duration-500 ease-in-out hover:scale-102 hover:shadow-red-500/20 hover:backdrop-blur-2xl">
                    <h2 className="text-xl sm:text-2xl xl:text-3xl text-white font-semibold text-center">
                        Calculadora de Deudas</h2>
                    <p className="text-sm sm:text-base xl:text-lg mt-2 text-center text-gray-300">
                        Calcula cuánto tiempo y cuánto interés pagarás por tus deudas con pagos fijos.
                    </p>
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-xs opacity-0 transition-opacity duration-500 hover:opacity-100 flex items-center justify-center rounded-xl">
                        <Link to="/calculadora-deudas" className="text-base text-white sm:text-xl xl:text-2xl font-bold flex items-center gap-2">
                            Probar ahora
                            <LinkIcon className="w-6 h-6 text-white opacity-80 transition-all duration-300 hover:opacity-100 hover:scale-110" />
                        </Link>
                    </div>
                </div>

                {/* Calculadora de Intereses */}
                <div className="relative xl:col-span-2 xl:row-span-3 bg-[#ac3442] border border-white/20 rounded-xl flex flex-col items-center justify-center text-2xl font-semibold shadow-lg shadow-gray-800/40 backdrop-blur-md p-6 transition-all duration-500 ease-in-out hover:scale-102 hover:shadow-red-500/20 hover:backdrop-blur-2xl">
                    <h2 className="text-xl sm:text-2xl xl:text-3xl text-white font-semibold text-center">
                        Calculadora de Intereses</h2>
                    <p className="text-sm sm:text-base xl:text-lg mt-2 text-center text-gray-300">
                        Obtén el interés simple y compuesto sobre inversiones o préstamos.
                    </p>
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-xs opacity-0 transition-opacity duration-500 hover:opacity-100 flex items-center justify-center rounded-xl">
                        <Link to="/calculadora-intereses" className="text-base text-white sm:text-xl xl:text-2xl font-bold flex items-center gap-2">
                            Probar ahora
                            <LinkIcon className="w-6 h-6 text-white opacity-80 transition-all duration-300 hover:opacity-100 hover:scale-110" />
                        </Link>
                    </div>
                </div>

                {/* Calculadora de Hipotecas */}
                <div className="relative xl:col-span-3 xl:row-span-3 xl:row-start-4 bg-[#ac3442] border border-white/20 rounded-xl flex flex-col items-center justify-center text-2xl font-semibold shadow-lg shadow-gray-800/40 backdrop-blur-md p-6 transition-all duration-500 ease-in-out hover:scale-102 hover:shadow-red-500/20 hover:backdrop-blur-2xl">
                    <h2 className="text-xl sm:text-2xl xl:text-3xl text-white font-semibold text-center">
                        Calculadora de Hipotecas</h2>
                    <p className="text-sm sm:text-base xl:text-lg mt-2 text-center text-gray-300">
                        Calcula tu pago mensual de hipoteca y el interés total pagado en el tiempo.
                    </p>
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-xs opacity-0 transition-opacity duration-500 hover:opacity-100 flex items-center justify-center rounded-xl">
                        <Link to="/calculadora-hipoteca" className="text-base text-white sm:text-xl xl:text-2xl font-bold flex items-center gap-2">
                            Probar ahora
                            <LinkIcon className="w-6 h-6 text-white opacity-80 transition-all duration-300 hover:opacity-100 hover:scale-110" />
                        </Link>
                    </div>
                </div>

                {/* Calculadora de Inversiones */}
                <div className="relative xl:col-span-3 xl:row-span-3 xl:col-start-4 xl:row-start-4 bg-[#ac3442] border border-white/20 rounded-xl flex flex-col items-center justify-center text-2xl font-semibold shadow-lg shadow-gray-800/40 backdrop-blur-md p-6 transition-all duration-500 ease-in-out hover:scale-102 hover:shadow-red-500/20 hover:backdrop-blur-2xl">
                    <h2 className="text-xl sm:text-2xl xl:text-3xl text-white font-semibold text-center">
                        Calculadora de Inversiones</h2>
                    <p className="text-sm sm:text-base xl:text-lg mt-2 text-center text-gray-300">
                        Proyecta el crecimiento de tus inversiones con aportes y tasas de rendimiento.
                    </p>
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-xs opacity-0 transition-opacity duration-500 hover:opacity-100 flex items-center justify-center rounded-xl">
                        <Link to="/calculadora-inversiones" className="text-base text-white sm:text-xl xl:text-2xl font-bold flex items-center gap-2">
                            Probar ahora
                            <LinkIcon className="w-6 h-6 text-white opacity-80 transition-all duration-300 hover:opacity-100 hover:scale-110" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calculadoras;