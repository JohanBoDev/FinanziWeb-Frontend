import { useState } from "react";
import useAhorro from "@/hooks/calculadoras/useCalculadoraAhorro";
import img from "@/assets/img/banner-calculadora-ahorros.jpg";
import { useAuth } from "@/context/AuthContext";



import Header from "@/layouts/header";
 
const CalculadoraAhorros = () => {
  const { isAuthenticated } = useAuth();
  const [saved, setSaved] = useState(false);
  const { calcularAhorro, loading, resultado, error, mensaje } = useAhorro();

  const [formData, setFormData] = useState({
    initialAmount: "",
    monthlyContribution: "",
    interestRate: "",
    compoundFrequency: "12",
    timeInYears: "",
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
  
    // Si quiere guardar pero no ha iniciado sesión
    if (saved && !isAuthenticated) {
      alert("Para guardar el cálculo debes iniciar sesión."); 
      return;
    }
  
    const dataToSend = {
      ...formData,
      initialAmount: parseFloat(formData.initialAmount),
      monthlyContribution: parseFloat(formData.monthlyContribution),
      interestRate: formData.interestRate ? parseFloat(formData.interestRate) / 100 : 0,
      compoundFrequency: parseInt(formData.compoundFrequency),
      timeInYears: parseInt(formData.timeInYears),
      saved, // ✅ enviar si el usuario quiere guardar
    };
  
    await calcularAhorro(dataToSend);
  };

  return (
    <>
      <Header />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden">
    <section className=" px-36 text-white w-full flex flex-col justify-center ">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Calculadora de <span className="text-[#FB2C36] font-bold drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">Ahorros</span>
      </h2>

      <form
  onSubmit={handleSubmit}
  className="grid grid-cols-1 md:grid-cols-2 gap-5 bg-white/10 border border-white/30 p-6 rounded-xl shadow-lg"
>
  {/* Monto inicial */}
  <div>
    <label className="block text-sm text-gray-300">Monto inicial (COP)</label>
    <input
      type="number"
      name="initialAmount"
      value={formData.initialAmount}
      onChange={handleChange}
      placeholder="Ej: 500.000"
      className="w-full mt-1 p-2.5 rounded-md bg-white/10 border border-white/30 placeholder-gray-400 focus:ring-2 focus:ring-[#FB2C36] focus:outline-none"
      required
    />
  </div>

  {/* Aporte mensual */}
  <div>
    <label className="block text-sm text-gray-300">Aporte mensual (COP)</label>
    <input
      type="number"
      name="monthlyContribution"
      value={formData.monthlyContribution}
      onChange={handleChange}
      placeholder="Ej: 100.000"
      className="w-full mt-1 p-2.5 rounded-md bg-white/10 border border-white/30 placeholder-gray-400 focus:ring-2 focus:ring-[#FB2C36] focus:outline-none"
      required
    />
  </div>

  {/* Tasa de interés anual (ocupa toda la fila) */}
  <div className="md:col-span-2">
    <label className="block text-sm text-gray-300">Tasa de interés anual (%)</label>
    <input
      type="number"
      name="interestRate"
      min={0}
      max={100}
      step="0.01"
      value={formData.interestRate}
      onChange={handleChange}
      placeholder="Ej: 5%"
      className="w-full mt-1 p-2.5 rounded-md bg-white/10 border border-white/30 placeholder-gray-400 focus:ring-2 focus:ring-[#FB2C36] focus:outline-none"
    />
  </div>

  {/* Frecuencia de capitalización */}
  <div>
    <label className="block text-sm text-gray-300">Frecuencia de capitalización</label>
    <select
      name="compoundFrequency"
      value={formData.compoundFrequency}
      onChange={handleChange}
      className="w-full mt-1 p-2.5 rounded-md bg-white/10 border border-white/30 text-gray-200 focus:ring-2 focus:ring-[#FB2C36] focus:outline-none"
    >
      <option className="bg-black/50" value="1">Anual</option>
      <option className="bg-black/50" value="4">Trimestral</option>
      <option className="bg-black/50" value="12">Mensual</option>
      <option className="bg-black/50" value="365">Diaria</option>
    </select>
  </div>

  {/* Años */}
  <div>
    <label className="block text-sm text-gray-300">Tiempo (años)</label>
    <input
      type="number"
      name="timeInYears"
      value={formData.timeInYears}
      onChange={handleChange}
      placeholder="Ej: 5"
      className="w-full mt-1 p-2.5 rounded-md bg-white/10 border border-white/30 placeholder-gray-400 focus:ring-2 focus:ring-[#FB2C36] focus:outline-none"
      required
    />
  </div>
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


  {/* Botón (ocupa toda la fila) */}
  <div className="md:col-span-2">
    <button
      type="submit"
      disabled={loading}
      className="w-full bg-[#FB2C36] hover:bg-[#d9262f] hover:cursor-pointer text-white font-semibold py-2.5 rounded-md transition duration-300 ease-in-out shadow"
    >
      {loading ? "Calculando..." : "Calcular Ahorro"}
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
          <p>En {resultado.timeInYears} años habrás ahorrado: {resultado.finalAmount.replace(/,00$/, "")}</p>
          <p>
  <span className="text-gray-300">La ganancia por intereses será de:</span>{" "}
  {resultado.interestEarned.replace(/,00$/, "")}
</p>        </div>
      )}
    </section>
    <section className="hidden md:block w-full">
                        <img src={img} alt="Finanzi Login" className="w-full h-screen object-center" />
    </section>
  </div>
    </>
  );
};

export default CalculadoraAhorros;
