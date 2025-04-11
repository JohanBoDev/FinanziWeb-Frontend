import { useState } from "react";
import axios from "axios";
import { useAuth } from "@/context/AuthContext";

const useCalculadoraHipotecas = () => {
  const [loading, setLoading] = useState(false);
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState(null);
  const [mensaje, setMensaje] = useState(null);

  const { token, isAuthenticated } = useAuth();

  const calcularHipoteca = async (data) => {
    setLoading(true);
    setError(null);

    try {
      const config = {
        headers: {},
      };

      // 🔐 Agregar token si está autenticado y se desea guardar
      if (isAuthenticated && token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      const response = await axios.post(
        "https://finanziweb-backend.onrender.com/api/mortgages/",
        data,
        config
      );

      setResultado(response.data);
      setMensaje(response.data.message);

      return {
        success: true,
        data: response.data,
        message: response.data.message,
      };
    } catch (err) {
      const mensaje =
        err.response?.data?.message || "Error al calcular la hipoteca";
      setError(mensaje);
      return { success: false, error: mensaje };
    } finally {
      setLoading(false);
    }
  };

  return {
    calcularHipoteca,
    loading,
    resultado,
    error,
    mensaje,
  };
};

export default useCalculadoraHipotecas;
