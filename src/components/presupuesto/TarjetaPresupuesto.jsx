import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const TarjetaPresupuesto = ({ presupuesto, onEliminar, onActualizar }) => {
  const { month, income, categoryAllocations, _id } = presupuesto;

  const [editando, setEditando] = useState(false);
  const [formData, setFormData] = useState({
    income,
    categoryAllocations: [...categoryAllocations],
  });

  const totalAsignado = formData.categoryAllocations.reduce(
    (acc, cat) => acc + cat.allocatedAmount,
    0
  );

  const disponible = formData.income - totalAsignado;
  const porcentajeUsado = (totalAsignado / formData.income) * 100;

  return (
    <div className="bg-gradient-to-br from-[#1c1c1c] to-[#111] rounded-2xl border border-neutral-700 p-6 w-full max-w-md mx-auto text-white shadow-xl relative">
      <ToastContainer position="top-center" autoClose={3000} theme="dark" />

      <h2 className="text-white font-semibold text-lg uppercase tracking-wider mb-1">
        {new Date(month).toLocaleDateString("es-CO", {
          year: "numeric",
          month: "long",
        })}
      </h2>

      {editando ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();

            const total = formData.categoryAllocations.reduce(
              (acc, cat) => acc + cat.allocatedAmount,
              0
            );

            if (total > formData.income) {
              toast.error("El total asignado no puede superar el ingreso total.");
              return;
            }

            onActualizar(_id, formData);
            setEditando(false);
          }}
        >
          <div className="mb-4">
            <label className="block text-sm text-gray-300 mb-1">Ingreso total:</label>
            <input
              type="number"
              className="w-full bg-[#1c1c1c] border border-neutral-600 px-3 py-2 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
              value={formData.income}
              onChange={(e) =>
                setFormData({ ...formData, income: Number(e.target.value) })
              }
            />
          </div>

          {formData.categoryAllocations.map((cat, index) => (
            <div key={index} className="mb-3">
              <label className="text-sm text-red-400 font-semibold">
                {cat.category}
              </label>
              <input
                type="number"
                className="w-full bg-[#1c1c1c] border border-neutral-600 px-3 py-2 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                value={cat.allocatedAmount}
                onChange={(e) => {
                  const nuevas = [...formData.categoryAllocations];
                  nuevas[index].allocatedAmount = Number(e.target.value);
                  setFormData({ ...formData, categoryAllocations: nuevas });
                }}
              />
            </div>
          ))}

          <div className="flex gap-2 mt-4">
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors"
            >
              Guardar
            </button>
            <button
              type="button"
              onClick={() => setEditando(false)}
              className="bg-neutral-700 hover:bg-neutral-600 text-white px-4 py-2 rounded-md transition-colors"
            >
              Cancelar
            </button>
          </div>
        </form>
      ) : (
        <>
          <p className="text-sm text-gray-400">Ingreso total</p>
          <p className="text-2xl font-bold text-white mb-4">
            ${income.toLocaleString()} <span className="text-sm font-normal">COP</span>
          </p>

          <hr className="my-2 border-neutral-600" />

          <ul className="space-y-1 mb-4">
            {categoryAllocations.map((cat, index) => (
              <li key={index} className="flex justify-between text-red-400 font-medium">
                <span>{cat.category}</span>
                <span className="text-white">${cat.allocatedAmount.toLocaleString()}</span>
              </li>
            ))}
          </ul>

          <hr className="my-2 border-neutral-600" />

          <p className="text-sm text-gray-400 mb-1">Disponible</p>
          <p
            className={`text-xl font-bold mb-2 ${disponible < 0 ? "text-red-500" : "text-white"
              }`}
          >
            ${disponible.toLocaleString()}
          </p>

          <div className="w-full h-2 bg-neutral-700 rounded-full mb-4">
            <div
              className={`h-2 rounded-full transition-all duration-300 ${disponible < 0 ? "bg-red-800" : "bg-red-600"
                }`}
              style={{ width: `${porcentajeUsado}%` }}
            ></div>
          </div>
        </>
      )}
<div className="absolute top-4 right-4 flex items-center gap-2">
  {/* Botón Editar */}
  <button
    onClick={() => setEditando(true)}
    className="text-sm text-white hover:bg-white/20 border font-semibold border-white rounded-md px-2 py-1 transition-colors cursor-pointer flex items-center gap-1"
    title="Editar presupuesto"
  >
    <i className="fas fa-pen block lg:hidden" />
    <span className="hidden lg:inline">Editar</span>
  </button>

  {/* Botón Eliminar */}
  <button
    onClick={() => onEliminar(_id)}
    className="text-sm text-red-500 hover:bg-red-400/30 font-semibold border border-red-500 rounded-md px-2 py-1 transition-colors flex items-center gap-1"
    title="Eliminar presupuesto"
  >
    <i className="fas fa-trash-alt block lg:hidden" />
    <span className="hidden lg:inline">Eliminar</span>
  </button>
</div>


    </div>
  );

};

export default TarjetaPresupuesto;
