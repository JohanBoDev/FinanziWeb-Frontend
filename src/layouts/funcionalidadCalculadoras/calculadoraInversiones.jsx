import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import useCalculadoraInversiones from "@/hooks/calculadoras/useCalculadoraInversiones";
import Header from "@/layouts/Header";
import img from "@/assets/img/inversiones-prueba.webp";

const CalculadoraInversiones = () => {
    // 🔐 Estado de autenticación
    const { isAuthenticated } = useAuth();

    // 🧠 Estados locales
    const [saved, setSaved] = useState(false);
    const [formData, setFormData] = useState({
        initialInvestment: "",
        monthlyContribution: "",
        annualReturnRate: "",
        investmentYears: "",
    });

    // 🚀 Hook personalizado
    const { calcularInversiones, loading, resultado, error, mensaje } = useCalculadoraInversiones();

    // 📩 Manejador de inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // 🧮 Envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();

        calcularInversiones({
            initialInvestment: parseFloat(formData.initialInvestment) || 0,
            monthlyContribution: parseFloat(formData.monthlyContribution) || 0,
            annualReturnRate: parseFloat(formData.annualReturnRate) / 100 || 0,
            investmentYears: parseFloat(formData.investmentYears) || 0,
            saved: saved && isAuthenticated,
        });
    };

    return (
        <>
        <Header />

  
          <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2">
            <section className="px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 text-white w-full flex flex-col justify-center">
              <div className="w-full max-w-3xl">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
                  Calculadora de <span className="text-[#FB2C36] drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">Inversiones</span>
                </h2>
  
                <form
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 md:grid-cols-2 gap-5 bg-white/10 border border-white/30 p-6 rounded-xl shadow-lg"
                >
                  <div className="md:col-span-2">
                    <label className="block text-sm text-gray-300">Capital inicial (COP)</label>
                    <input
                      type="number"
                      name="initialInvestment"
                      value={formData.initialInvestment}
                      onChange={handleChange}
                      placeholder="Ej: 1.000.000"
                      required
                      className="w-full mt-1 p-2.5 rounded-md bg-white/10 border border-white/30 placeholder-gray-400 focus:ring-2 focus:ring-[#FB2C36] focus:outline-none"
                    />
                  </div>
  
                  <div>
                    <label className="block text-sm text-gray-300">Aporte mensual (COP)</label>
                    <input
                      type="number"
                      name="monthlyContribution"
                      value={formData.monthlyContribution}
                      onChange={handleChange}
                      placeholder="Ej: 200.000"
                      required
                      className="w-full mt-1 p-2.5 rounded-md bg-white/10 border border-white/30 placeholder-gray-400 focus:ring-2 focus:ring-[#FB2C36] focus:outline-none"
                    />
                  </div>
  
                  <div>
                    <label className="block text-sm text-gray-300">Tasa de interés anual (%)</label>
                    <input
                      type="number"
                      step="0.01"
                      name="annualReturnRate"
                      value={formData.annualReturnRate}
                      onChange={handleChange}
                      placeholder="Ej: 5.00"
                      required
                      className="w-full mt-1 p-2.5 rounded-md bg-white/10 border border-white/30 placeholder-gray-400 focus:ring-2 focus:ring-[#FB2C36] focus:outline-none"
                    />
                  </div>
  
                  <div className="md:col-span-2">
                    <label className="block text-sm text-gray-300">Tiempo (años)</label>
                    <input
                      type="number"
                      name="investmentYears"
                      value={formData.investmentYears}
                      onChange={handleChange}
                      placeholder="Ej: 5"
                      required
                      className="w-full mt-1 p-2.5 rounded-md bg-white/10 border border-white/30 placeholder-gray-400 focus:ring-2 focus:ring-[#FB2C36] focus:outline-none"
                    />
                  </div>
  
                  {isAuthenticated && (
                    <div className="md:col-span-2">
                      <div className="flex items-center gap-2 mt-2">
                        <input
                          type="checkbox"
                          id="guardar"
                          checked={saved}
                          onChange={() => setSaved(!saved)}
                          className="accent-[#FB2C36]"
                        />
                        <label htmlFor="guardar" className="text-gray-300 text-sm">
                          Guardar este cálculo en mi cuenta
                        </label>
                      </div>
                    </div>
                  )}
  
                  <div className="md:col-span-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-[#FB2C36] text-white py-2 rounded-md hover:bg-[#FB2C36]/90 transition duration-300"
                    >
                      {loading ? "Calculando..." : "Calcular Inversión"}
                    </button>
                  </div>
                </form>
  
                {error && mensaje && (
                  <div className="mt-6 bg-red-600/10 border border-red-600/30 p-6 rounded-xl shadow-lg">
                    <p className="text-red-600">{mensaje}</p>
                  </div>
                )}
  
                {mensaje && !error && (
                  <div className="mt-6 bg-green-600/10 border border-green-600/30 p-6 rounded-xl shadow-lg">
                    <p className="text-green-400">{mensaje}</p>
                  </div>
                )}
  
                {resultado && (
                  <div className="mt-6 bg-white/10 border border-white/30 p-6 rounded-xl shadow-lg">
                    <h3 className="text-lg font-semibold text-gray-300 mb-2">📊 Proyección de tu inversión:</h3>
                    <p className="text-gray-300 mt-2">
                      ✅ <span className="font-medium">Monto final proyectado:</span>{" "}
                      <span className="text-white">{resultado.data.finalValue}</span>
                    </p>
                    <p className="text-gray-300 mt-1">
                      📈 <span className="font-medium">Ganancia generada por intereses:</span>{" "}
                      <span className="text-green-400 font-semibold">{resultado.data.totalGains}</span>
                    </p>
                    <p className="text-sm text-gray-400 mt-4 italic">
                      Este cálculo considera tus aportes mensuales, el interés compuesto y el tiempo estimado. Recuerda que las ganancias podrían variar según condiciones reales del mercado.
                    </p>
                  </div>
                )}
              </div>
            </section>
  
            <section className="hidden md:block">
              <img src={img} alt="Calculadora de Inversiones" className="w-full h-screen object-contain" />
            </section>
          </div>
      </>
    );
};

export default CalculadoraInversiones;
