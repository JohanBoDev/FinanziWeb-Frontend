import { useState } from "react";
import axios from "axios";

const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const register = async ({ name, email, password, currency, notificationsEnabled }) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(`https://finanziweb-backend.onrender.com/api/users/register`, {
        name,
        email,
        password,
        profilePicture: "https://i.imgur.com/sQ8Wj1m.png", // Imagen por defecto
        currency,
        notificationsEnabled,
        role: "user"
      });

      setLoading(false);
      return { success: true, user: response.data.user };
    } catch (err) {
      setError(err.response?.data?.message || "Error al registrar usuario");
      setLoading(false);
      return { success: false };
    }
  };

  return { register, loading, error };
};

export default useRegister;
