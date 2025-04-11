import usePresupuesto from "@/hooks/presupuesto/usePresupuestoFormulario";
import img from "@/assets/img/hombre-presupuesto.png";

const FormularioPresupuesto = ({onPresupuestoCreado }) => {
  const {
    income,
    setIncome,
    month,
    setMonth,
    categories,
    handleCategoryChange,
    addCategory,
    removeCategory,
    totalAsignado,
    crearPresupuesto,
    loading
  } = usePresupuesto();

  const handleSubmit = async () => {
    await crearPresupuesto();
    if (onPresupuestoCreado) {
      onPresupuestoCreado(); // 🔁 Fuerza el refresco de la lista
    }
  };

  return (
<div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start w-full max-w-7xl mx-auto mt-10 px-4 xl:px-0">
  {/* Formulario - 60-70% */}
  <div className="xl:col-span-7 bg-transparent backdrop-blur-sm text-gray-100 p-8 rounded-2xl shadow-xl border border-neutral-700">
    <h2 className="text-3xl font-extrabold text-white mb-8 text-center tracking-wide">
     Agrega tu Presupuesto Mensual
    </h2>

  <div className="grid sm:grid-cols-2 gap-6 mb-10">
    <div>
      <label className="block text-sm font-semibold text-gray-300 mb-1">Mes</label>
      <input
        type="month"
        value={month}
        onChange={(e) => setMonth(e.target.value)}
        className="w-full rounded-lg bg-neutral-800 text-white px-3 py-2 border border-neutral-600 focus:ring-red-500 focus:border-red-500 placeholder:text-neutral-500"
      />
    </div>

    <div>
      <label className="block text-sm font-semibold text-gray-300 mb-1">Ingreso Total</label>
      <input
        type="number"
        value={income}
        onChange={(e) => setIncome(e.target.value)}
        placeholder="Ej: 2.000.000"
        className="w-full rounded-lg bg-neutral-800 text-white px-3 py-2 border border-neutral-600 focus:ring-red-500 focus:border-red-500 placeholder:text-neutral-500"
      />
    </div>
  </div>

  <h3 className="text-xl font-bold text-white mb-4 border-b border-neutral-700 pb-1">
    Asignación por Categorías
  </h3>

  {categories.map((cat, i) => (
  <div key={i} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-3">
    <input
      type="text"
      placeholder="Categoría"
      value={cat.category}
      onChange={(e) => handleCategoryChange(i, "category", e.target.value)}
      className="w-full sm:w-1/2 rounded-md bg-neutral-800 text-white px-3 py-2 border border-neutral-600 placeholder:text-neutral-500"
    />
    <input
      type="number"
      placeholder="Monto"
      value={cat.allocatedAmount}
      onChange={(e) => handleCategoryChange(i, "allocatedAmount", e.target.value)}
      className="w-full sm:w-1/2 rounded-md bg-neutral-800 text-white px-3 py-2 border border-neutral-600 placeholder:text-neutral-500"
    />
    <button
      onClick={() => removeCategory(i)}
      className="text-red-500 text-xl hover:text-red-700 transition cursor-pointer self-end sm:self-auto"
      title="Eliminar"
    >
      ×
    </button>
  </div>
))}


  <button
    onClick={addCategory}
    className="text-white hover:underline text-sm mb-6"
  >
    + Añadir categoría
  </button>

  <div className="mb-6 text-sm text-gray-400">
    <span className="font-bold text-white">Total asignado:</span> ${totalAsignado.toLocaleString()}
    {income && totalAsignado > parseFloat(income) && (
      <span className="text-red-500 ml-2 font-semibold">⚠️ Excede el ingreso</span>
    )}
  </div>

  <button
  onClick={handleSubmit}
  disabled={loading}
  className="w-full bg-red-600 cursor-pointer text-white py-3 rounded-xl font-semibold text-lg tracking-wide hover:bg-red-700 transition disabled:opacity-50"
>
  {loading ? "Guardando..." : "Guardar Presupuesto"}
</button>
</div>
  {/* Imagen - 30-40% */}
  <div className="hidden xl:flex xl:col-span-5 justify-center items-center">
    <img
      src={img}
      alt="Fintech piggybank"
      className="w-full  object-contain drop-shadow-[0_0_10px_rgba(255,60,60,0.3)]"
    />
  </div>
  </div>

  );
};

export default FormularioPresupuesto;
