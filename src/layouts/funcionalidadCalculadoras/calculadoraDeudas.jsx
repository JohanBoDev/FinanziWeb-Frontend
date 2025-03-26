import {  useState } from "react";
import useCalculadoraDeudas from "@/hooks/calculadoras/useCalculadoraDeudas";
import img from "@/assets/img/banner-calculadora-ahorros.jpg";
import { useAuth } from "@/context/AuthContext";
import Header from "@/layouts/header";

const CalculadoraDeudas = () => {
  const { isAuthenticated } = useAuth();
  const [saved, setSaved] = useState(false);
  const { calcularDeuda, loading, resultado, error, mensaje } = useCalculadoraDeudas();
  const [formData, setFormData] = useState({
    loanAmount: "",
    annualInterestRate: "",
    monthlyPayment: "",
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
    calcularDeuda({
      ...formData,
      loanAmount: parseFloat(formData.loanAmount),
      annualInterestRate: parseFloat(formData.annualInterestRate)/ 100,
      monthlyPayment: parseFloat(formData.monthlyPayment),
      saved: saved && isAuthenticated,
    });
  };

  return (
<>
  <Header />
  <div className="w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden">
    <section className="px-36 text-white w-full flex flex-col justify-center">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Calculadora de <span className="text-[#FB2C36] font-bold drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">Deudas</span>
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-5 bg-white/10 border border-white/30 p-6 rounded-xl shadow-lg"
      >
        {/* Monto de la deuda */}
        <div>
          <label className="block text-sm text-gray-300">Monto de la deuda (COP)</label>
          <input
            type="number"
            name="loanAmount"
            value={formData.loanAmount}
            onChange={handleChange}
            className="w-full mt-1 p-2.5 rounded-md bg-white/10 border border-white/30 placeholder-gray-400 focus:ring-2 focus:ring-[#FB2C36] focus:outline-none"
            placeholder="Ej: 5.000.000"
            required
          />
        </div>

        {/* Tasa de interés anual */}
        <div>
          <label className="block text-sm text-gray-300">Tasa de interés anual (%)</label>
          <input
            type="number"
            name="annualInterestRate"
            value={formData.annualInterestRate}
            onChange={handleChange}
            step="0.01"
            className="w-full mt-1 p-2.5 rounded-md bg-white/10 border border-white/30 placeholder-gray-400 focus:ring-2 focus:ring-[#FB2C36] focus:outline-none"
            placeholder="Ej: 12%"
            required
          />
        </div>

        {/* Pago mensual */}
        <div className="md:col-span-2">
          <label className="block text-sm text-gray-300">Pago mensual (COP)</label>
          <input
            type="number"
            name="monthlyPayment"
            value={formData.monthlyPayment}
            onChange={handleChange}
            className="w-full mt-1 p-2.5 rounded-md bg-white/10 border border-white/30 placeholder-gray-400 focus:ring-2 focus:ring-[#FB2C36] focus:outline-none"
            placeholder="Ej: 200.000"
            required
          />
        </div>

        {/* Guardar */}
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
            className="w-full bg-[#FB2C36] hover:bg-[#d9262f] hover:cursor-pointer text-white font-semibold py-2.5 rounded-md transition duration-300 ease-in-out shadow"
          >
            {loading ? "Calculando..." : "Calcular Deuda"}
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
          <p><strong>Deuda total:</strong> {resultado.loanAmount}</p>
          <p><strong>Pago mensual:</strong> {resultado.monthlyPayment}</p>
          <p><strong>Tasa anual:</strong> {resultado.annualInterestRate}</p>
          <p><strong>Número de pagos:</strong> {resultado.totalPayments} meses</p>
          <p><strong>Intereses totales:</strong> {resultado.totalInterestPaid}</p>
        </div>
      )}
    </section>

    {/* Imagen ilustrativa */}
    <section className="hidden md:block w-full">
      <img src={img} alt="Finanzi Deuda" className="w-full h-screen object-center" />
    </section>
  </div>
</>

  );
};

export default CalculadoraDeudas;