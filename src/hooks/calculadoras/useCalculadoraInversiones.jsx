import { useState } from "react";
import axios from "axios";
import { useAuth } from "@/context/AuthContext";

const useCalculadoraInversiones = () => {
    const [loading, setLoading] = useState(false);
    const [resultado, setResultado] = useState(null);
    const [error, setError] = useState(null);
    const { token, isAuthenticated } = useAuth();
    const [mensaje, setMensaje] = useState(null); // ✅ Nuevo estado

    const calcularInversiones = async (data) => {
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
                "https://finanziweb-backend.onrender.com/api/investments/",
                data,
                config
            );

            setResultado(response.data);
            console.log(resultado.data)
            setMensaje(response.data.message); // ✅ Guardar el mensaje en el estado
            return {
                success: true,
                data: response.data,
                message: response.data.message
            };

        } catch (err) {
            const mensaje = err.response?.data?.message || "Error al calcular la inversión";
            setError(mensaje);
            return { success: false, error: mensaje };
        }
        finally {
            setLoading(false);
        }
    }
    return {
        calcularInversiones,
        loading,
        resultado,
        error,
        mensaje, // ✅ Retornar el mensaje
    };
}
export default useCalculadoraInversiones;