import { useState } from "react";
import axios from "axios";
import { useAuth } from "@/context/AuthContext"; // 

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { login: setAuth } = useAuth(); // usamos el login del contexto

  const login = async (email, password) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(`https://finanziweb-backend.onrender.com/api/users/login`, {
        email,
        password
      });

      const { token, user } = response.data;

      // Guardar en localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      // Actualizar el contexto global
      setAuth(user, token); // 👈 muy importante

      setLoading(false);
      return { success: true, user };
    } catch (err) {
      setError(err.response?.data?.message || "Error al iniciar sesión");
      setLoading(false);
      return { success: false };
    }
  };

  return { login, loading, error };
};

export default useLogin;
