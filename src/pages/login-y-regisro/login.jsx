import Header from "@/layouts/header";
import { Link } from "react-router-dom";
import img from "@/assets/img/banner-login.webp";
import logoGoogle from "@/assets/img/logo-google.webp";
import useLogin from "@/hooks/auth/useLogin";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FooterFinanzi from "@/components/Footer";
import FondoDecorativo from "../../components/FondoDecorativo";


const Login = () => {
    const { login, loading, error } = useLogin();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await login(email, password);
        if (result.success) {
            // Redirigir o actualizar UI
            console.log("✅ Login exitoso:", result.user);
            navigate("/");
        } else {
            console.error("❌ Error al iniciar sesión:", error);
        }
    }
    return (
<>
 <FondoDecorativo>
  <Header />


    {/* Contenido de login */}
    <div className="relative z-10 min-h-screen flex ">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        {/* Formulario */}
        <div className="px-6 sm:px-12 md:px-20 lg:px-28 xl:px-36 text-white w-full flex flex-col justify-center">
          <h2 className="md:text-3xl text-2xl text-center font-bold tracking-wide">
            Bienvenido de nuevo a{" "}
            <span className="text-[#FB2C36] font-bold drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">FINANZI</span>
          </h2>
          <p className="text-gray-300 mt-1 text-center">Accede a tu cuenta</p>

          {/* Botón Google */}
          <a
            href="https://finanziweb-backend.onrender.com/api/auth/google"
            className="flex items-center justify-center w-full border border-white/30 rounded-md py-2.5 px-4 text-white bg-white/10 hover:bg-white/20 transition duration-300 ease-in-out mt-5 hover:cursor-pointer"
          >
            <img src={logoGoogle} alt="Google Logo" className="w-5 h-5 mr-3" />
            Iniciar sesión con Google
          </a>

          {/* Separador */}
          <div className="flex items-center my-6 text-gray-400">
            <div className="flex-grow h-px bg-white/20" />
            <span className="px-3 text-sm tracking-wide">O</span>
            <div className="flex-grow h-px bg-white/20" />
          </div>

          {/* Formulario */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-300 text-sm">Correo Electrónico</label>
              <input
                type="email"
                className="w-full p-2.5 mt-1 bg-white/10 border border-white/30 rounded-md focus:ring-2 focus:ring-[#FB2C36] focus:outline-none placeholder-gray-400 text-sm transition"
                placeholder="Ingresa tu correo"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-gray-300 text-sm">Contraseña</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2.5 mt-1 bg-white/10 border border-white/30 rounded-md focus:ring-2 focus:ring-[#FB2C36] focus:outline-none placeholder-gray-400 text-sm transition"
                placeholder="Ingresa tu contraseña"
              />
            </div>

            <div className="flex items-center justify-between text-sm text-gray-300 mt-1">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2 accent-[#FB2C36]" />
                Recuérdame
              </label>
              <Link
                to="/recuperar-contrasena"
                className="text-[#FB2C36] drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] hover:underline transition"
              >
                ¿Olvidaste tu contraseña?
              </Link>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-2 bg-[#FB2C36] hover:bg-[#d9262f] text-white font-semibold py-2.5 rounded-md text-sm transition duration-300 ease-in-out shadow-sm hover:cursor-pointer"
            >
              Iniciar Sesión
            </button>
            {error && <p className="text-red-500">{error}</p>}
          </form>

          <p className="text-gray-300 mt-6 text-center text-sm">
            ¿No tienes cuenta?{" "}
            <Link
              to="/registrar"
              className="text-[#FB2C36] drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] hover:underline transition"
            >
              Regístrate
            </Link>
          </p>
        </div>

        {/* Imagen */}
        <div className="hidden md:block w-full">
          <img src={img} alt="Finanzi Login" className="w-full h-screen object-center" />
        </div>
      </div>
    </div>

  <FooterFinanzi />
  </FondoDecorativo >
</>

    );
}
export default Login;