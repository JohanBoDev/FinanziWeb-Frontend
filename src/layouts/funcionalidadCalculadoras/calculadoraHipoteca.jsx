import { useState } from "react";
import useCalculadoraHipotecas from "@/hooks/calculadoras/useCalculadoraHipotecas";
import img from "@/assets/img/hipoteca-prueba.webp";
import { useAuth } from "@/context/AuthContext";
import Header from "@/layouts/header";

const CalculadoraHipoteca = () => {
  const { isAuthenticated } = useAuth();
  const [saved, setSaved] = useState(false);
  const { calcularHipoteca, loading, resultado, error, mensaje } = useCalculadoraHipotecas();

  const [formData, setFormData] = useState({
    loanAmount: "",
    annualInterestRate: "",
    loanTermYears: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (saved && !isAuthenticated) {
      alert("Para guardar el cálculo debes iniciar sesión.");
      return;
    }

    const dataToSend = {
      ...formData,
      loanAmount: parseFloat(formData.loanAmount),
      annualInterestRate: parseFloat(formData.annualInterestRate),
      loanTermYears: parseInt(formData.loanTermYears),
      saved,
    };

    await calcularHipoteca(dataToSend);
  };

  return (
    <>
      <Header />
      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 ">
        <section className="w-full flex flex-col justify-center items-center px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 text-white py-10">
          <div className="w-full max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
              Calculadora de <span className="text-[#FB2C36] drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">Hipotecas</span>
            </h2>

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-5 bg-white/10 border border-white/30 p-6 rounded-xl shadow-lg"
            >
              <div className="md:col-span-2">
                <label className="block text-sm text-gray-300">Monto del préstamo (COP)</label>
                <input
                  type="number"
                  name="loanAmount"
                  value={formData.loanAmount}
                  onChange={handleChange}
                  placeholder="Ej: 150.000.000"
                  className="w-full mt-1 p-2.5 rounded-md bg-white/10 border border-white/30 placeholder-gray-400 focus:ring-2 focus:ring-[#FB2C36] focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-300">Tasa de interés anual (%)</label>
                <input
                  type="number"
                  name="annualInterestRate"
                  value={formData.annualInterestRate}
                  onChange={handleChange}
                  placeholder="Ej: 8.5"
                  step="0.01"
                  min={0}
                  max={100}
                  className="w-full mt-1 p-2.5 rounded-md bg-white/10 border border-white/30 placeholder-gray-400 focus:ring-2 focus:ring-[#FB2C36] focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-300">Plazo (años)</label>
                <input
                  type="number"
                  name="loanTermYears"
                  value={formData.loanTermYears}
                  onChange={handleChange}
                  placeholder="Ej: 20"
                  className="w-full mt-1 p-2.5 rounded-md bg-white/10 border border-white/30 placeholder-gray-400 focus:ring-2 focus:ring-[#FB2C36] focus:outline-none"
                  required
                />
              </div>

              {isAuthenticated && (
                <div className="md:col-span-2 flex items-center gap-2 mt-2">
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

              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#FB2C36] hover:bg-[#d9262f] hover:cursor-pointer text-white font-semibold py-2.5 rounded-md transition duration-300 ease-in-out shadow"
                >
                  {loading ? "Calculando..." : "Calcular Hipoteca"}
                </button>
              </div>
            </form>

            {error ? (
              <p className="text-red-500 mt-4 text-center">{error}</p>
            ) : (
              mensaje && <p className="text-white mt-4 text-center">Calculo hecho con éxito</p>
            )}

            {resultado && (
              <div className="mt-8 bg-white/10 border border-white/30 p-5 rounded-xl text-center">
                <h3 className="text-xl font-semibold mb-2">Resultado</h3>
                <p><strong>Pago mensual estimado:</strong> {resultado.monthlyPayment}</p>
                <p><strong>Total a pagar:</strong> {resultado.totalCost}</p>
                <p><strong>Total de intereses:</strong> {resultado.totalInterestPaid}</p>
              </div>
            )}
          </div>
        </section>

        <section className="hidden md:block w-full">
          <img src={img} alt="Finanzi Hipoteca" className="w-full h-screen object-contain" />
        </section>
      </div>
  </>
  );
};

export default CalculadoraHipoteca;
