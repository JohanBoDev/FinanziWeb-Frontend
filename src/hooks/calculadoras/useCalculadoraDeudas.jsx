import { useState } from "react";
import axios from "axios";
import { useAuth } from "@/context/AuthContext";

const useCalculadoraDeudas = () => {
    const [loading, setLoading] = useState(false);
    const [resultado, setResultado] = useState(null);
    const [error, setError] = useState(null);
    const { token, isAuthenticated } = useAuth();
    const [mensaje, setMensaje] = useState(null); // ✅ Nuevo estado

    const calcularDeuda = async (data) => {
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
                "https://finanziweb-backend.onrender.com/api/debts/createDebt",
                data,
                config
            );

            setResultado(response.data.deuda);
            setMensaje(response.data.message);
            return {
                success: true,
                data: response.data.deuda,
                message: response.data.message
            };


        }

        catch (err) {
            const mensaje = err.response?.data?.message || "Error al calcular la deuda";
            setError(mensaje);
            return { success: false, error: mensaje };
        } finally {
            setLoading(false);
        }
    };

    return {
        calcularDeuda,
        loading,
        resultado,
        error,
        mensaje,
    };
}

export default useCalculadoraDeudas;