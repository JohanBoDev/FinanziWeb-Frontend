import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const usePresupuestos = () => {
  const [presupuestos, setPresupuestos] = useState([]);
  const [presupuestoSeleccionado, setPresupuestoSeleccionado] = useState(null);
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("token");

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const obtenerTodos = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("https://finanziweb-backend.onrender.com/api/budgets", config);
      setPresupuestos(data);
    } catch (error) {
      console.error(error);
      toast.error("Error al cargar los presupuestos.");
    } finally {
      setLoading(false);
    }
  };

  const obtenerPorId = async (id) => {
    try {
      setLoading(true);
      const { data } = await axios.get(`https://finanziweb-backend.onrender.com/api/budgets/${id}`, config);
      setPresupuestoSeleccionado(data);
    } catch (error) {
      console.error(error);
      toast.error("No se pudo obtener el presupuesto.");
    } finally {
      setLoading(false);
    }
  };

  const eliminarPresupuesto = async (id) => {
    const confirmar = window.confirm("¿Deseas eliminar este presupuesto?");
    if (!confirmar) return;

    try {
      await axios.delete(`https://finanziweb-backend.onrender.com/api/budgets/${id}`, config);
      toast.success("Presupuesto eliminado");
      setPresupuestos(presupuestos.filter(p => p._id !== id));
    } catch (error) {
      console.error(error);
      toast.error("Error al eliminar el presupuesto.");
    }
  };

  const actualizarPresupuesto = async (id, datos) => {
    try {
      setLoading(true);
      const { data } = await axios.put(`/api/budgets/${id}`, datos, config);
      toast.success("Presupuesto actualizado");

      // Actualiza el listado sin recargar todo
      setPresupuestos(prev =>
        prev.map(p => (p._id === id ? data : p))
      );
    } catch (error) {
      console.error(error);
      toast.error("Error al actualizar el presupuesto.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    obtenerTodos();
  }, []);

  return {
    presupuestos,
    presupuestoSeleccionado,
    loading,
    obtenerTodos,
    obtenerPorId,
    eliminarPresupuesto,
    actualizarPresupuesto,
  };
};

export default usePresupuestos;
