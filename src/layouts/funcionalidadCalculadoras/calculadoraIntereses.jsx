import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import  useCalculadoraIntereses  from "@/hooks/calculadoras/useCalculadoraIntereses";
import Header from "@/layouts/Header";
import img from "@/assets/img/banner-calculadora-ahorros.jpg";

const CalculadoraIntereses = () => {
  const { isAuthenticated } = useAuth();
  const [saved, setSaved] = useState(false);
  const { calcularInteres, loading, resultado, error, mensaje } = useCalculadoraIntereses();
  const [formData, setFormData] = useState({
    principal: "",
    interestRate: "",
    timeInYears: "",
    interestType: "simple",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calcularInteres({
      ...formData,
      principal: parseFloat(formData.principal),
      interestRate: parseFloat(formData.interestRate) / 100,
      timeInYears: parseFloat(formData.timeInYears),
      saved: saved && isAuthenticated,
    });
  };

  return (
    <>
      <Header />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        <section className="px-36 text-white w-full flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Calculadora de <span className="text-[#FB2C36] drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">Intereses</span>
          </h2>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-5 bg-white/10 border border-white/30 p-6 rounded-xl shadow-lg"
          >
            {/* Capital Inicial */}
            <div>
              <label className="block text-sm text-gray-300">Capital inicial (COP)</label>
              <input
                type="number"
                name="principal"
                value={formData.principal}
                onChange={handleChange}
                className="w-full mt-1 p-2.5 rounded-md bg-white/10 border border-white/30 placeholder-gray-400 focus:ring-2 focus:ring-[#FB2C36] focus:outline-none"
                placeholder="Ej: 1.000.000"
                required
              />
            </div>

            {/* Tasa de interés anual */}
            <div>
              <label className="block text-sm text-gray-300">Tasa de interés anual (%)</label>
              <input
                type="number"
                name="interestRate"
                value={formData.interestRate}
                onChange={handleChange}
                step="0.01"
                className="w-full mt-1 p-2.5 rounded-md bg-white/10 border border-white/30 placeholder-gray-400 focus:ring-2 focus:ring-[#FB2C36] focus:outline-none"
                placeholder="Ej: 7%"
                required
              />
            </div>

            {/* Años */}
            <div>
              <label className="block text-sm text-gray-300">Tiempo (años)</label>
              <input
                type="number"
                name="timeInYears"
                value={formData.timeInYears}
                onChange={handleChange}
                className="w-full mt-1 p-2.5 rounded-md bg-white/10 border border-white/30 placeholder-gray-400 focus:ring-2 focus:ring-[#FB2C36] focus:outline-none"
                placeholder="Ej: 5"
                required
              />
            </div>

            {/* Tipo de interés */}
            <div>
              <label className="block text-sm text-gray-300">Tipo de interés</label>
              <select
                name="interestType"
                value={formData.interestType}
                onChange={handleChange}
                className="w-full mt-1 p-2.5 rounded-md bg-white/10 border border-white/30 text-white focus:ring-2 focus:ring-[#FB2C36] focus:outline-none"
              >
                <option value="simple">Simple</option>
                <option value="compuesto">Compuesto</option>
              </select>
            </div>

            {/* Guardar cálculo */}
            {isAuthenticated && (
              <div className="flex items-center gap-2 mt-2 md:col-span-2">
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
            )}

            {/* Botón */}
            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#FB2C36] hover:bg-[#d9262f] text-white font-semibold py-2.5 rounded-md transition duration-300 ease-in-out shadow"
              >
                {loading ? "Calculando..." : "Calcular Interés"}
              </button>
            </div>
          </form>

          {error ? (
            <p className="text-red-500 mt-4 text-center">{error}</p>
          ) : (
            mensaje && <p className="text-white mt-4 text-center">{mensaje}</p>
          )}

          {resultado && (
            <div className="mt-8 bg-white/10 border border-white/30 p-5 rounded-xl text-center">
              <h3 className="text-xl font-semibold mb-2">Resultado</h3>
              <p><strong>Capital inicial:</strong> {resultado.principal}</p>
              <p><strong>Tipo de interés:</strong> {formData.interestType}</p>
              <p><strong>Monto final:</strong> {resultado.finalAmount}</p>
              <p><strong>Ganancias:</strong> {resultado.interestEarned}</p>
            </div>
          )}
        </section>

        {/* Imagen ilustrativa */}
        <section className="hidden md:block w-full">
          <img src={img} alt="Finanzi Intereses" className="w-full h-screen object-center" />
        </section>
      </div>
    </>
  );
};

export default CalculadoraIntereses;
