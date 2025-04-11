import TarjetaPresupuesto from "./TarjetaPresupuesto";
import usePresupuestos from "@/hooks/presupuesto/usePresupuesto";
import { useEffect } from "react";

const ListaPresupuestos = ({refrescar }) => {
  const { presupuestos, loading, eliminarPresupuesto, actualizarPresupuesto, obtenerTodos  } = usePresupuestos();

  useEffect(() => {
    obtenerTodos();
  }, [refrescar]); // <- ahora se actualiza al cambiar
  

  if (loading) {
    return (
      <div className="flex justify-center items-center mt-12 text-gray-400 text-lg">
        <span className="animate-pulse">Cargando presupuestos...</span>
      </div>
    );
  }
  
  if (presupuestos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center mt-16 text-center text-gray-500 space-y-2">
        <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h18M9 3v2m6-2v2M4 7h16M4 7v12a2 2 0 002 2h12a2 2 0 002-2V7M9 13h6" />
        </svg>
        <p className="text-lg font-medium">Aún no tienes presupuestos registrados.</p>
        <p className="text-sm text-gray-400">Crea tu primer presupuesto para empezar a planificar.</p>
      </div>
    );
  }
  
  return (
    <div className="grid gap-6 mt-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 max-h-[75vh] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-neutral-700 scrollbar-track-transparent">
      {presupuestos.map((presupuesto) => (
        <TarjetaPresupuesto
          key={presupuesto._id}
          presupuesto={presupuesto}
          onEliminar={eliminarPresupuesto}
          onActualizar={actualizarPresupuesto}
        />
      ))}
    </div>
  );
  
};

export default ListaPresupuestos;
