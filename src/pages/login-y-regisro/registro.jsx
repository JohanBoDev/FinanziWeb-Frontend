import Header from "@/layouts/header";
import { Link } from "react-router-dom";
import img from "@/assets/img/banner-login.webp";
import logoGoogle from "@/assets/img/logo-google.webp";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useRegister from "@/hooks/auth/useRegistro";
import { useAuth } from "@/context/AuthContext";
import FooterFinanzi from "@/components/Footer";
import FondoDecorativo from "@/components/fondoDecorativo";


const Registro = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const { register, loading, error } = useRegister();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        currency: "COP",
        notificationsEnabled: true,
        profilePicture: "https://i.imgur.com/sQ8Wj1m.png" // Imagen por defecto desde el frontend
    });

    const handleChange = (e) => {
        const { name, type, value, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await register(formData);
        if (result.success) {
            login(result.user, result.token); // Guardar el token en el contexto de autenticación
            navigate("/"); // Redirigir a la página de inicio o dashboard
        }
    };
    return ( <>
        <FondoDecorativo>
            <Header />

                {/* Contenido del registro */}
                <div className="relative z-10 min-h-screen flex ">
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden">
                        {/* Imagen */}
                        <div className="hidden md:block w-full">
                            <img src={img} alt="Finanzi Registro" className="w-full h-screen object-center" />
                        </div>

                        {/* Formulario */}
                        <div className="px-6 sm:px-12 md:px-20 lg:px-28 xl:px-36 text-white w-full flex flex-col justify-center">
                            <h2 className="text-3xl font-bold tracking-wide text-center mb-4">
                                Regístrate en{" "}
                                <span className="text-[#FB2C36] font-bold drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">FINANZI</span>
                            </h2>

                            <form className="space-y-4" onSubmit={handleSubmit}>
                                <div>
                                    <label className="block text-gray-300 text-sm">Nombre</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Ingresa tu nombre"
                                        className="w-full p-2.5 mt-1 bg-white/10 border border-white/30 rounded-md focus:ring-2 focus:ring-[#FB2C36] focus:outline-none placeholder-gray-400 text-sm transition"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-300 text-sm">Correo Electrónico</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Ingresa tu correo"
                                        className="w-full p-2.5 mt-1 bg-white/10 border border-white/30 rounded-md focus:ring-2 focus:ring-[#FB2C36] focus:outline-none placeholder-gray-400 text-sm transition"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-300 text-sm">Contraseña</label>
                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="Crea una contraseña"
                                        className="w-full p-2.5 mt-1 bg-white/10 border border-white/30 rounded-md focus:ring-2 focus:ring-[#FB2C36] focus:outline-none placeholder-gray-400 text-sm transition"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-300 text-sm">Moneda</label>
                                    <select
                                        name="currency"
                                        value={formData.currency}
                                        onChange={handleChange}
                                        className="w-full p-2.5 mt-1 bg-white/10 border border-white/30 rounded-md focus:ring-2 focus:ring-[#FB2C36] focus:outline-none text-sm text-gray-300"
                                    >
                                        <option value="COP">COP - Peso Colombiano</option>
                                        <option value="USD">USD - Dólar</option>
                                        <option value="EUR">EUR - Euro</option>
                                    </select>
                                </div>

                                <div className="flex items-center text-sm text-gray-300 mt-1">
                                    <input
                                        type="checkbox"
                                        name="notificationsEnabled"
                                        checked={formData.notificationsEnabled}
                                        onChange={handleChange}
                                        id="notifications"
                                        className="mr-2 accent-[#FB2C36]"
                                    />
                                    <label htmlFor="notifications">Deseo recibir notificaciones</label>
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full mt-2 bg-[#FB2C36] hover:bg-[#d9262f] text-white font-semibold py-2.5 rounded-md text-sm transition duration-300 ease-in-out shadow-sm hover:cursor-pointer"
                                >
                                    Registrarse
                                </button>

                                {/* Separador */}
                                <div className="flex items-center my-6 text-gray-400">
                                    <div className="flex-grow h-px bg-white/20" />
                                    <span className="px-3 text-sm tracking-wide">O</span>
                                    <div className="flex-grow h-px bg-white/20" />
                                </div>

                                {/* Botón Google */}
                                <a
                                    href="https://finanziweb-backend.onrender.com/api/auth/google"
                                    className="flex items-center justify-center w-full border border-white/30 rounded-md py-2.5 px-4 text-white bg-white/10 hover:bg-white/20 transition duration-300 ease-in-out mt-5 hover:cursor-pointer"
                                >
                                    <img src={logoGoogle} alt="Google Logo" className="w-5 h-5 mr-3" />
                                    Registrarse con Google
                                </a>
                            </form>

                            <p className="text-gray-300 mt-6 text-center text-sm">
                                ¿Ya tienes una cuenta?{" "}
                                <Link
                                    to="/iniciar-sesion"
                                    className="text-[#FB2C36] drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] hover:underline transition"
                                >
                                    Inicia sesión
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>

                <FooterFinanzi />
                </FondoDecorativo>
 </>
);
} 

export default Registro;