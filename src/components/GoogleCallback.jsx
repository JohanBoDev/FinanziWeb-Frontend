import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Helmet } from "react-helmet-async";


const GoogleCallback = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  useEffect(() => {
    const procesarGoogleLogin = async () => {
      const hash = window.location.hash;
      console.log("🌐 URL actual:", window.location.href);
      console.log("🔍 Hash completo:", hash);
  
      if (hash && hash.includes("token=")) {
        const cleanHash = hash.replace(/^#/, "").trim();
        const hashParams = new URLSearchParams(cleanHash);
        const token = hashParams.get("token");
        console.log("🟡 Token recibido:", token);
  
        if (token) {
          localStorage.setItem("token", token);
  
          try {
            const res = await fetch("https://finanziweb-backend.onrender.com/api/users/me", {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
  
            if (res.ok) {
              const user = await res.json();
              login(user, token); // 🔥 actualiza el contexto global
              navigate("/");
            } else {
              console.error("⚠️ No se pudo obtener el usuario desde el token");
            }
          } catch (err) {
            console.error("❌ Error al obtener usuario desde Google:", err);
          }
        } else {
          console.error("❌ Token inválido");
        }
      } else if (hash) {
        console.error("❌ Hash presente pero sin token");
      }
    };
  
    procesarGoogleLogin(); // 👈 ¡Ejecuta la función!
  }, []);
  


  return (
    <><Helmet>
      <title>Redirigiendo... - Finanzi</title>
      <meta name="description" content="Estamos validando tu inicio de sesión con Google. Serás redirigido a Finanzi en unos segundos." />
      <meta name="robots" content="noindex, nofollow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Helmet><div className="text-center mt-20 text-gray-700">
        Procesando inicio de sesión...
      </div></>
  );
};

export default GoogleCallback;
