import { useState } from "react";
import axios from "axios";
import { useAuth } from "@/context/AuthContext";

const useAhorro = () => {
  const [loading, setLoading] = useState(false);
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState(null);
  const { token, isAuthenticated } = useAuth();
  const [mensaje, setMensaje] = useState(null); // ✅ Nuevo estado

  const calcularAhorro = async (data) => {
    setLoading(true);
    setError(null);

    try {
      const config = {
        headers: {},
      };

      // 🔐 Agregar token solo si está autenticado
      if (isAuthenticated && token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      const response = await axios.post(
        "https://finanziweb-backend.onrender.com/api/savings/createSavings",
        data,
        config
      );

      setResultado(response.data.ahorro);
      setMensaje(response.data.message);
      return {
        success: true,
        data: response.data.ahorro,
        message: response.data.message
      };
    } catch (err) {
      const mensaje = err.response?.data?.message || "Error al calcular el ahorro";
      setError(mensaje);
      return { success: false, error: mensaje };
    } finally {
      setLoading(false);
    }
  };

  return {
    calcularAhorro,
    loading,
    resultado,
    error,
    mensaje, 
  };
};

export default useAhorro;
