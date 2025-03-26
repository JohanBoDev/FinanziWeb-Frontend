import { useEffect } from "react";
import {jwtDecode} from "jwt-decode";
import { useAuth } from "@/context/AuthContext";

const useTokenExpiration = () => {
  const { logout } = useAuth();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const { exp } = jwtDecode(token);
      const now = Date.now() / 1000;

      if (exp < now) {
        console.warn("⏰ Token expirado, cerrando sesión...");
        logout(); // limpia user/token del estado
        window.location.href = "/iniciar-sesion";
        setTimeout(() => window.location.reload(), 300); // ✅ Recarga completa
      }
    } catch (err) {
      console.error("Error al decodificar token:", err);
      logout();
      window.location.href = "/iniciar-sesion";
      setTimeout(() => window.location.reload(), 300);
    }
  }, [logout]);
};

export default useTokenExpiration;
